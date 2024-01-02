import Head from 'next/head'
import Link from 'next/link'

function AboutPage() {
  const enterpriseUrl = ""

  return (
    <>
      <Head>
        <title>| About</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-2xl'>
        <div className='pb-4'>
          <p className='text-neutral-900 dark:text-neutral-50 text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight'>About </p>
          <img src="/with-C-book.svg" alt="" className="object-contain h-48 w-48" />
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
        <a href="https://github.com/egonelbre/gophers" target="_blank" rel="noreferrer noopener">Free Gophers</a>
      </div>
    </>
  )
}

export default AboutPage;
