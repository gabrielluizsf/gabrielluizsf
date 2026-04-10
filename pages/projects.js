import Head from "next/head";
import Link from "next/link";
import Links from "../components/Links";

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


                <Links
                    links={[
                        {
                            title: "Atendi9 Open Source",
                            href: "https://github.com/orgs/atendi9/repositories"
                        },
                        {
                            title: "McLaren Configurator",
                            href: "https://gabrielluizsf.github.io/mclaren_configurator/"
                        },
                        {
                            title: "C test Library",
                            href: "https://github.com/gabrielluizsf/assertx"
                        },
                        {
                            title: "Repositórios GitHub",
                            href: "https://github.com/gabrielluizsf?tab=repositories"
                        }
                    ]} />
            </div>
        </>
    )
}

export default ProjectsPage;