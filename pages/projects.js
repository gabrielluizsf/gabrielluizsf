import Head from "next/head";
import Links from "../components/Links";
import { useTranslation } from '../context/LanguageContext';

function ProjectsPage() {
    const { t } = useTranslation()

    return (
        <>
            <Head>
                <title>{t.meta.projectsTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="py-12 md:py-20 max-w-3xl">
                <header className="mb-10">
                    <div className="font-mono text-xs text-neutral-400 dark:text-neutral-600 mb-2"># repositories.ts</div>
                    <h1 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight">
                        {t.projects.heading}<span className="text-neutral-400 dark:text-neutral-600">.</span>
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400 font-mono text-sm md:text-base mt-3">
                        {t.projects.description}
                    </p>
                </header>

                <div className="pt-2">
                    <Links links={t.projects.links} />
                </div>
            </div>
        </>
    )
}

export default ProjectsPage;
