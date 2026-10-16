import { useEffect, useRef, useState } from 'react'
import FilePopup from './FilePopup'

const PROMPT = '~/gabrielluizsf $ '

const stack = 'go · node.js · typescript · javascript · mongodb · postgres · docker '

const helpRow = (cmd, desc) => `  ${cmd.padEnd(17)}${desc}`

export default function Terminal() {
  const [history, setHistory] = useState([{ kind: 'out', text: "type 'help' to list commands" }])
  const [input, setInput] = useState('')
  const [file, setFile] = useState(null)
  const inputRef = useRef(null)
  const scrollRef = useRef(null)

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
  }

  function runCommand(event) {
    event.preventDefault()
    const raw = input.trim()
    setInput('')
    if (!raw) return

    const cmd = raw.toLowerCase().replace(/\/+$/, '').replace(/\s+/g, ' ')
    const run = commands[cmd] ?? ((lines) => [
      ...lines,
      { kind: 'err', text: `command not found: ${raw} — try 'help'` },
    ])
    setHistory(run([...history, { kind: 'cmd', text: raw }]))
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
            <span className="text-neutral-400 dark:text-neutral-600 shrink-0">{PROMPT}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="flex-1 min-w-0 bg-transparent outline-none font-bold text-neutral-900 dark:text-neutral-50 caret-neutral-900 dark:caret-emerald-500"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="terminal input"
            />
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
