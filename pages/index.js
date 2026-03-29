import Head from 'next/head'
import Link from 'next/link'

function HomePage() {
  return (
      <>
        <Head>
          <title>Gabriel Luiz | Home</title>
          <Link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10'>
          <div className='max-w-lg flex-1 text-center md:text-left'>
            <h1 className='text-neutral-900 dark:text-neutral-50 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4'>
              Bem Vindo(a) ao meu <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                Portfólio
              </span>
            </h1>
            <p className='text-slate-600 dark:text-neutral-300 md:text-xl font-medium mb-8'>
                Gabriel Luiz | Backend Developer 
            </p>
            <Link href="/projects" className="inline-block px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Ver Projetos
            </Link>
          </div>
          
          <div className="flex-shrink-0">
            <img 
              src='https://raw.githubusercontent.com/egonelbre/gophers/master/.thumb/animation/2bit-sprite/demo.gif' 
              alt="Gopher Animation"
              className="w-48 md:w-64 object-contain rounded-xl shadow-sm"
            />
          </div>
        </div>
      </>
  )
}

export default HomePage;