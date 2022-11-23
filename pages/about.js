import Head from 'next/head'
import Link from 'next/link'

function AboutPage() {
  const enterpriseUrl = ""

  return (
    <>
      <Head>
        <title>| About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-2xl'>
        <div className='pb-4'>
          <p className='text-neutral-900 dark:text-neutral-50 text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight'>About </p>
            <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl italic py-px'>
           is under development
           {/* 
            Engineering @{'  '}
              <Link
                rel="noreferrer" 
                href={enterpriseUrl} 
                target={'_blank'} 
                className='text-rose-500 dark:text-rose-400 dark:hover:text-rose-300 hover:text-rose-400 font-bold'>
                  Nome da empresa
            </Link>
           */}
          </p>
        </div>
        {/*
          <Link
          rel="noreferrer"
          download={'CV.pdf'}
          href="/docs/cv/gabrielluiz.pdf"
          target={'_blank'}
          className='dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700/60 dark:hover:text-neutral-200 hover:bg-slate-200 hover:text-slate-600 bg-slate-100 text-slate-700 md:text-lg xl:text-xl font-medium px-4 py-2 rounded-md mb-4'>
          Download CV
        </Link>
       */}
      </div>
    </>
  )
}

export default AboutPage;
