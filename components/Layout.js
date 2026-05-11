import { Home, FolderGit2, User } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Footer from './Footer.js'
import NavBar from './NavBar.js'

// Social media accounts using react-icons for brand logos
const accounts = [
    {icon: <FaLinkedin size={24} />, href:"https://www.linkedin.com/in/gabriel-luiz-devbackend"},
    {icon: <FaGithub size={24} />, href:"https://www.github.com/gabrielluizsf"},
]

// Navigation links using lucide-react for UI icons
let links = [
    {icon: <Home size={24} />, href:"/"},
    {icon: <FolderGit2 size={24} />, href:"/projects"},
    {icon: <User size={24} />, href:"/about"}
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