import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Footer from './Footer.js'

// Social media accounts using react-icons for brand logos
const accounts = [
    {icon: <FaLinkedin size={24} />, href:"https://www.linkedin.com/in/gabriel-luiz-devbackend"},
    {icon: <FaGithub size={24} />, href:"https://www.github.com/gabrielluizsf"},
]

export default function Layout({ children }) {
    return (
        <div className="max-w-4xl mx-auto flex flex-col min-h-screen px-6 md:px-12 pt-2 pb-8">
            <main className="flex-grow flex flex-col justify-center">
                {children}
            </main>
            <Footer socialAccounts={accounts} />
        </div>
    )
}