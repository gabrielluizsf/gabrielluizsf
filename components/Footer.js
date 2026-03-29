import Link from "next/link";

function FooterItem({ account }) {
    return (
        <Link
            href={account.href}
            rel="noreferrer"
            target="_blank"
            className="font-mono text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors tracking-wide">
            {account.name}
        </Link>
    )
}

function Footer({ socialAccounts }) {
    return (
        <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center">
            <div className="flex space-x-6 md:space-x-10 mb-4">
                {socialAccounts.map((account, i) => {
                    return <FooterItem key={i} account={account} />
                })}
            </div>
            <p className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
                © {new Date().getFullYear()} Gabriel Luiz
            </p>
        </footer>
    )
}

export default Footer;