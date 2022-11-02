import Link from "next/link";
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';

function NavBarItem({ link }) {
    return (
        <Link href={link.href}>
            <p className="font-mono font-medium text-neutral-900 dark:text-neutral-50 hover:font-semibold tracking-light">
                {link.name}
            </p>
        </Link>
    )
}

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className=""
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <MoonIcon className="text-neutral-900 hover:text-neutral-700 stroke-2 w-6 h-6" />
      ) : (
        <SunIcon className="text-neutral-50 hover:text-neutral-300 stroke-2 w-6 h-6" />
      )}
    </button>
  );
};

function NavBar({ links }) {
    return (
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8 md:text-lg lg:text-xl">
            {links.map((link, i) => {
                return <NavBarItem key={i} link={link} />
            })}
            <ThemeToggler />
        </div>
    )
}

export default NavBar;