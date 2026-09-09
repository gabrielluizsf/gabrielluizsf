import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from '../context/LanguageContext'

function HomePage() {
  const { t } = useTranslation()

  return (
      <>
        <Head>
          <title>{t.meta.homeTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className='flex flex-col items-start justify-center py-16 md:py-24'>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 font-mono text-2xl md:text-4xl lg:text-5xl font-extrabold max-w-4xl mb-12 leading-snug md:leading-tight tracking-tight drop-shadow-sm'>
            {t.home.hero}
          </h1>

          <div className="flex flex-wrap items-center gap-5">
            <Link 
              href="/projects" 
              className="px-8 py-3.5 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 rounded-xl font-mono text-sm md:text-base font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              {t.home.projectsBtn}
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-3.5 border-2 border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-300 rounded-xl font-mono text-sm md:text-base font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800/60 hover:border-neutral-400 dark:hover:border-neutral-700 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              {t.home.aboutBtn}
            </Link>
          </div>
        </div>
      </>
  )
}

export default HomePage;
