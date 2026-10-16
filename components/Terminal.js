import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import FilePopup from './FilePopup'

const PROMPT = '~/gabrielluizsf $ '

const stack = 'go · node.js · typescript · javascript · mongodb · postgres · docker '

const helpRow = (cmd, desc) => `  ${cmd.padEnd(17)}${desc}`

const THEME_OPTIONS = { '1': 'dark', '2': 'light', dark: 'dark', light: 'light' }

const THEME_MENU = [
  'select theme — options apply instantly:',
  '',
  '  1) dark',
  '  2) light',
  '',
  "type 1 or 2 to preview · 'ok' to confirm · 'cancel' to revert",
].join('\n')

export default function Terminal() {
  const { setTheme, theme } = useTheme()
  const [history, setHistory] = useState([{ kind: 'out', text: "type 'help' to list commands" }])
  const [input, setInput] = useState('')
  const [file, setFile] = useState(null)
  const [pickingTheme, setPickingTheme] = useState(false)
  const inputRef = useRef(null)
  const scrollRef = useRef(null)
  const themeBeforeRef = useRef(null)
  const previewRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [history])

  // focus on mount: the terminal is the only thing on the page
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // command -> function(lines) returning the new history
  const commands = {
    help: (lines) => [
      ...lines,
      {
        kind: 'out',
        text: [
          'available commands:',
          '',
          helpRow('help', 'show this list'),
          helpRow('ls', 'list available files'),
          helpRow('clear', 'clear the terminal'),
          helpRow('cat stack.txt', 'show my stack'),
          helpRow('cat projects.md', 'open projects.md in a popup'),
          helpRow('cat about.md', 'open about.md in a popup'),
          helpRow('select theme', 'dark/light via terminal'),
        ].join('\n'),
      },
    ],
    ls: (lines) => [...lines, { kind: 'out', text: 'projects.md  about.md  stack.txt' }],
    clear: () => [],
    'cat stack.txt': (lines) => [...lines, { kind: 'out', text: stack }],
    'cat projects.md': (lines) => {
      setFile('projects.md')
      return [...lines, { kind: 'out', text: 'opening projects.md — esc to close' }]
    },
    'cat about.md': (lines) => {
      setFile('about.md')
      return [...lines, { kind: 'out', text: 'opening about.md — esc to close' }]
    },
    'select theme': (lines) => {
      themeBeforeRef.current = theme ?? 'system'
      previewRef.current = null
      setPickingTheme(true)
      return [...lines, { kind: 'out', text: THEME_MENU }]
    },
  }

  function closeSelection(lines, text) {
    setPickingTheme(false)
    return [...lines, { kind: 'out', text }]
  }

  function previewTheme(value, lines) {
    previewRef.current = value
    setTheme(value)
    return [...lines, { kind: 'out', text: `preview: ${value} — 'ok' confirms, 'cancel' reverts` }]
  }

  const confirmTheme = (lines) => closeSelection(lines, `theme → ${previewRef.current ?? theme ?? 'system'}`)

  const revertTheme = (lines) => {
    setTheme(themeBeforeRef.current)
    return closeSelection(lines, 'selection cancelled — theme reverted')
  }

  // answer -> function(lines) while the theme selector is open
  const themeAnswers = {
    '1': (lines) => previewTheme('dark', lines),
    '2': (lines) => previewTheme('light', lines),
    dark: (lines) => previewTheme('dark', lines),
    light: (lines) => previewTheme('light', lines),
    ok: confirmTheme,
    enter: confirmTheme,
    cancel: revertTheme,
    esc: revertTheme,
    q: revertTheme,
  }

  // typing an option flips the theme right away, before Enter
  function onInputChange(value) {
    setInput(value)
    const preview = pickingTheme && THEME_OPTIONS[value.trim().toLowerCase()]
    if (preview) {
      previewRef.current = preview
      setTheme(preview)
    }
  }

  // zsh-style autosuggestion: most recent typed command first, then the known commands
  const candidates = [
    ...history.filter((line) => line.kind === 'cmd').map((line) => line.text).reverse(),
    ...Object.keys(commands),
  ]
  const suggestion = input ? candidates.find((c) => c.startsWith(input)) ?? '' : ''

  function onInputKeyDown(event) {
    if (event.key !== 'Tab' || event.shiftKey || !suggestion) return
    event.preventDefault()
    setInput(suggestion)
  }

  function runCommand(event) {
    event.preventDefault()
    const raw = input.trim()
    setInput('')
    if (!raw) return

    const cmd = raw.toLowerCase().replace(/\/+$/, '').replace(/\s+/g, ' ')
    const lines = [...history, { kind: 'cmd', text: raw }]

    const run = pickingTheme
      ? themeAnswers[cmd] ?? ((ls) => [...ls, { kind: 'err', text: `invalid option: ${cmd} — type 1, 2, ok or cancel` }])
      : commands[cmd] ?? ((ls) => [...ls, { kind: 'err', text: `command not found: ${raw} — try 'help'` }])
    setHistory(run(lines))
  }

  return (
    <>
      <div className="w-full max-w-2xl rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 shadow-md overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/40">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
          <span className="ml-2 font-mono text-xs text-neutral-400 dark:text-neutral-600">bash</span>
        </div>

        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="p-4 md:p-5 font-mono text-xs md:text-sm space-y-3 max-h-[70vh] overflow-y-auto cursor-text"
        >
          {history.map((line, i) =>
            line.kind === 'cmd' ? (
              <p key={i} className="break-words">
                <span className="text-neutral-400 dark:text-neutral-600">{PROMPT}</span>
                <span className="text-neutral-900 dark:text-neutral-50 font-bold">{line.text}</span>
              </p>
            ) : (
              <p
                key={i}
                className={`pl-4 md:pl-5 whitespace-pre-wrap break-words ${
                  line.kind === 'err'
                    ? 'text-neutral-400 dark:text-neutral-500'
                    : 'text-neutral-500 dark:text-neutral-400'
                }`}
              >
                {line.text}
              </p>
            )
          )}

          <form onSubmit={runCommand} className="flex items-center gap-1.5">
            <span className="text-neutral-400 dark:text-neutral-600 shrink-0">
              {pickingTheme ? 'select theme? ' : PROMPT}
            </span>
            <div className="relative flex-1 min-w-0">
              <span
                aria-hidden="true"
                className="absolute inset-0 font-bold whitespace-pre overflow-hidden text-neutral-400 dark:text-neutral-600 pointer-events-none"
              >
                {suggestion}
              </span>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => onInputChange(event.target.value)}
                onKeyDown={onInputKeyDown}
                className="relative w-full bg-transparent outline-none font-bold text-neutral-900 dark:text-neutral-50 caret-neutral-900 dark:caret-emerald-500"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="terminal input"
              />
            </div>
          </form>
        </div>
      </div>

      {file && (
        <FilePopup
          file={file}
          onClose={() => {
            setFile(null)
            inputRef.current?.focus()
          }}
        />
      )}
    </>
  )
}
