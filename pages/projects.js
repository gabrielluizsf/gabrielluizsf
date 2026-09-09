import Head from "next/head";
import Link from "next/link";
import Links from "../components/Links";

function ProjectsPage() {
    return (
        <>
            <Head>
                <title>Gabriel Luiz | Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="py-12 md:py-20 max-w-3xl">
                <header className="mb-10">
                    <div className="font-mono text-xs text-neutral-400 dark:text-neutral-600 mb-2"># repositories.ts</div>
                    <h1 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight">
                        Meus Projetos<span className="text-neutral-400 dark:text-neutral-600">.</span>
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400 font-mono text-sm md:text-base mt-3">
                        Explore alguns dos meus desenvolvimentos recentes e ferramentas open-source.
                    </p>
                </header>

                <div className="pt-2">
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
                        ]} 
                    />
                </div>
            </div>
        </>
    )
}

export default ProjectsPage;