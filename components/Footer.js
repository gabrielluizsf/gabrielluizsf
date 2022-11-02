import Link from "next/link";
function FooterItem({ account }) {
    return (
        <Link
            href={account.href}
            rel="noreferrer"
            target="_blank"
            className="font-mono font-medium text-neutral-900 dark:text-neutral-50 hover:font-semibold tracking-light">{account.name}
        </Link>
    )
}


function Footer({ socialAccounts }) {
    return (
        <div className="space-x-6 md:space-x-8 lg:space-x-10 md:text-lg lg:text-xl">
            {socialAccounts.map((account, i) => {
                return <FooterItem key={i} account={account} />
            })}
        </div>
    )
}

export default Footer;