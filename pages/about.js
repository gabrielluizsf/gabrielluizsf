import Head from 'next/head'
import Links from '../components/Links'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Gabriel Luiz | About</title>
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

          <div className="flex-1 space-y-6 text-center md:text-left">
            <header>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 dark:text-white mb-2">
                Sobre<span className="text-blue-500">.</span>
              </h1>
              <div className="h-1.5 w-20 bg-blue-500 rounded-full mx-auto md:ml-0 mb-6" />
            </header>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
              Sou um desenvolvedor focado em construir soluções.
              Atualmente, aplico minha paixão por tecnologia na empresa <span className="text-neutral-900 dark:text-neutral-100 font-bold">Atendi9</span>.
            </p>
            <Links
              links={[{ title: "Atendi9", href: "https://www.atendi9.com.br" }, { title: "Free Gophers", href: "https://github.com/egonelbre/gophers" }]}
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative flex-shrink-0 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/with-C-book.svg"
                alt="Gopher reading C book"
                className="h-48 w-48 md:h-56 md:w-56 object-contain transform group-hover:scale-105 transition-transform duration-500"
              />


              <div className="absolute top-0 right-0 p-4 opacity-10">
                <code className="text-xs">fmt.Println("Hi!")</code>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}