import Head from 'next/head'
import Links from '../components/Links'
import { useTranslation } from '../context/LanguageContext'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t.meta.aboutTitle}</title>
      </Head>

      <div className="max-w-3xl py-12 md:py-20">
        <header className="mb-10">
          <div className="font-mono text-xs text-neutral-400 dark:text-neutral-600 mb-2"># background.md</div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
            {t.about.heading}<span className="text-neutral-400 dark:text-neutral-600">.</span>
          </h1>
        </header>

        <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono text-sm md:text-base">
          <p>
            {t.about.bio}
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="font-mono text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-wider mb-8">
            {t.about.workExperience}
          </h2>

          <div className="space-y-12">
            {t.about.experiences.map((exp, index) => (
              <div key={index} className="font-mono space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {exp.role} <span className="text-neutral-400 dark:text-neutral-600 font-normal">@</span> {exp.company}
                  </h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">{exp.period}</span>
                </div>

                {exp.location && (
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    {exp.location}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 py-1">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 list-disc list-inside leading-relaxed pt-1">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="marker:text-neutral-400 dark:marker:text-neutral-600">
                      <span className="inline">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="font-mono text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-wider mb-4">
            {t.about.ecosystemLinks}
          </h2>
          <Links links={t.aboutLinks} />
        </div>
      </div>
    </>
  )
}
