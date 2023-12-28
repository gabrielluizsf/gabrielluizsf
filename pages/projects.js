import Head from "next/head";
import Link from "next/link";

function ProjectsPage() {
    return (
        <>
            <Head>
                <title>Projects</title>
                <Link rel="icon" href="/favicon.ico" />
            </Head>
        
            <div className="flex flex-col">
                <img src="https://github.com/egonelbre/gophers/raw/master/.thumb/animation/gopher-dance-long-3x.gif" className="h-48 w-48 object-center mb-4" alt="Dancing Gopher" />  
                <p className=" text-lg md:text-xl lg:text-2xl italic text-gray-800 dark:text-gray-300 mb-8">
                    Welcome to My Projects Page
                </p>
             
                    {/*<Link 
                        href="https://photography-links.vercel.app/" 
                        target="_blank"
                        className="text-blue-500 hover:underline text-lg md:text-xl lg:text-2xl font-bold tracking-tight"
                    >
                        Social Network ↗
                    </Link> */}
                    <Link 
                        href="https://github.com/gabrielluizsf?tab=repositories" 
                        target="_blank"
                        className="text-blue-500 hover:underline text-lg md:text-xl lg:text-2xl font-bold "
                    >
                        Repositories ↗
                    </Link>
            </div>
        </>
    )
}

export default ProjectsPage;
