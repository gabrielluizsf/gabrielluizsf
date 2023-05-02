import Footer from './Footer.js'
import NavBar from './NavBar.js'

const accounts = [
    {name: "linkedin", href:"https://www.linkedin.com/in/gabriel-luiz-devbackend/"},
    {name: "github", href:"https://www.github.com/gabrielluizsf"},

]

let links = [
    {name: "home", href:"/"},
    {name: "projects", href:"/projects"},
    {name: "about", href:"/about"}
]

export default function Layout({ children }) {
    return (
        <div className="space-y-6 px-10 md:px-20 lg:px-36 py-2 md:py-6 lg:py-16">
            <NavBar links={links}/>
            {children}
            <Footer socialAccounts={accounts} />
        </div>
    )
}