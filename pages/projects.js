import Head from "next/head";
import Link from "next/link";

function ProjectCard({ title, href }) {
    return (
        <Link 
            href={href} 
            target="_blank" 
            className="group block p-6 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all"
        >
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                {title} ↗
            </h3>
        </Link>
    )
}

function ProjectsPage() {
    return (
        <>
            <Head>
                <title>Projects</title>
                <Link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col py-6">
                <div className="flex items-center gap-4 mb-8">
                    <img src="https://github.com/egonelbre/gophers/raw/master/.thumb/animation/gopher-dance-long-3x.gif" className="h-20 w-20 md:h-24 md:w-24 object-contain rounded-lg" alt="Dancing Gopher" />
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50">Meus Projetos</h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-2">
                            Explore alguns dos meus desenvolvimentos recentes.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <ProjectCard 
                        title="McLaren Configurator" 
                        href="https://gabrielluizsf.github.io/mclaren_configurator/" 
                    />
                    <ProjectCard 
                        title="Repositórios GitHub" 
                        href="https://github.com/gabrielluizsf?tab=repositories" 
                    />
                </div>
            </div>
        </>
    )
}

export default ProjectsPage;