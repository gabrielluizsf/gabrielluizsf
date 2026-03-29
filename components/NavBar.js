import Link from "next/link";
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';

function NavBarItem({ link }) {
    return (
        <Link href={link.href}>
            <p className="font-mono text-sm md:text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors tracking-wide">
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
      className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <MoonIcon className="text-neutral-900 stroke-2 w-5 h-5 md:w-6 md:h-6" />
      ) : (
        <SunIcon className="text-neutral-50 stroke-2 w-5 h-5 md:w-6 md:h-6" />
      )}
    </button>
  );
};

function NavBar({ links }) {
    return (
        <nav className="flex items-center justify-between py-4 mb-8 sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
            <Link href="/">
                <img 
                    src="https://github.com/gabrielluizsf.png" 
                    alt="Gabriel Luiz" 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-neutral-200 dark:border-neutral-700 hover:opacity-80 transition-opacity cursor-pointer object-cover" 
                />
            </Link>
            <div className="flex items-center space-x-4 md:space-x-8">
                {links.map((link, i) => {
                    return <NavBarItem key={i} link={link} />
                })}
                <ThemeToggler />
            </div>
        </nav>
    )
}

export default NavBar;