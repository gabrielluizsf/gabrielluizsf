import Head from 'next/head'
import Link from 'next/link'

function AboutPage() {
  return (
    <>
      <Head>
        <title>Gabriel Luiz | About</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 py-10'>
        <div className='max-w-lg flex-1 text-center md:text-left'>
          <h1 className='text-neutral-900 dark:text-neutral-50 text-4xl md:text-5xl font-extrabold tracking-tight mb-4'>
            Sobre 
          </h1>
          <p className='text-slate-600 dark:text-neutral-300 md:text-lg italic mb-6'>
            Página em desenvolvimento...
          </p>
          <a 
            href="https://github.com/egonelbre/gophers" 
            target="_blank" 
            rel="noreferrer noopener"
            className="inline-flex items-center font-semibold text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Free Gophers ↗
          </a>
        </div>
        <div className="flex-shrink-0 bg-neutral-100 dark:bg-neutral-800 p-6 rounded-3xl">
          <img src="/with-C-book.svg" alt="Reading" className="object-contain h-40 w-40 md:h-48 md:w-48" />
        </div>
      </div>
    </>
  )
}

export default AboutPage;