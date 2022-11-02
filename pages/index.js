import Head from 'next/head'
import Link from 'next/link'

function HomePage() {
  const enterpriseUrl = ""

  return (
      <><Head>
      <title>| Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head><div className='max-w-2xl'>
        <div className='pb-4'>
          <p className='text-neutral-900 dark:text-neutral-50 text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight'>Bem Vindo(a) ao meu Portfólio</p>
           <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl italic py-px'>
                Gabriel Luiz | Backend Developer 
              </p>
        </div>
        <img src='https://raw.githubusercontent.com/egonelbre/gophers/master/.thumb/animation/2bit-sprite/demo.gif'></img>
      </div></>
  )
}

export default HomePage;
