import Footer from './Footer.js'
import NavBar from './NavBar.js'

const accounts = [
    {name: "linkedin", href:"https://www.linkedin.com/in/gabriel-luiz-devbackend"},
    {name: "github", href:"https://www.github.com/gabrielluizsf"},
]

let links = [
    {name: "home", href:"/"},
    {name: "projects", href:"/projects"},
    {name: "about", href:"/about"}
]

export default function Layout({ children }) {
    return (
        <div className="max-w-4xl mx-auto flex flex-col min-h-screen px-6 md:px-12 pt-2 pb-8">
            <NavBar links={links}/>
            <main className="flex-grow flex flex-col justify-center">
                {children}
            </main>
            <Footer socialAccounts={accounts} />
        </div>
    )
}