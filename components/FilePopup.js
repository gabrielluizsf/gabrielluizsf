import { useEffect } from 'react'
import { useTranslation } from '../context/LanguageContext'
import { formatTotalExperience } from '../experiences/format'
import Links from './Links'

// file name -> body renderer, the terminal just looks up the popup content
const files = {
  'projects.md': (t) => (
    <>
      <header className="space-y-2">
        <h1 className="text-2xl md:text-4xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
          {t.projects.heading}<span className="text-neutral-400 dark:text-neutral-600">.</span>
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
          {t.projects.description}
        </p>
      </header>

      <Links links={t.projects.links} />
    </>
  ),
  'about.md': (t) => {
    const total = formatTotalExperience(t.about.experiences, t.about.durationLabels)
    return (
      <>
        <header>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
            {t.about.heading}<span className="text-neutral-400 dark:text-neutral-600">.</span>
          </h1>
        </header>

        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
          {t.about.bio}
        </p>

        <div className="flex items-center justify-between gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
            {t.about.workExperience}
          </h2>
          <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700/50 bg-neutral-100 dark:bg-neutral-800/60">
            {total}
          </span>
        </div>

        <div className="space-y-6">
          {t.about.experiences.map((exp, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-neutral-50">
                  {exp.role} <span className="text-neutral-400 font-normal">@</span> {exp.company}
                </h3>
                <span className="text-xs text-neutral-500">{exp.period}</span>
              </div>

              <p className="text-xs text-neutral-400">{exp.location}</p>

              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <ul className="space-y-1.5 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 list-disc list-inside leading-relaxed">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="marker:text-neutral-400 dark:marker:text-neutral-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-600 mb-2">
            {t.about.ecosystemLinks}
          </h2>
          <Links links={t.aboutLinks} />
        </div>
      </>
    )
  },
}

export default function FilePopup({ file, onClose }) {
  const { t } = useTranslation()
  const body = files[file]

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!body) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={file}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
    >
      <div
        className="absolute inset-0 bg-neutral-900/40 dark:bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden animate-pop-in">
        <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-2.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/40">
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600 truncate">
            ~/gabrielluizsf/{file}
          </span>

          <button
            type="button"
            onClick={onClose}
            autoFocus
            aria-label={`close ${file}`}
            className="shrink-0 p-1.5 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/50 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto p-5 md:p-7 font-mono space-y-5">
          {body(t)}
        </div>
      </div>
    </div>
  )
}
