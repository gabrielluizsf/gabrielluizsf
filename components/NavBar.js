import Link from "next/link";
import { SunIcon } from '@heroicons/react/24/solid';
import { MoonIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';

function NavBarItem({ link }) {
    return (
        <Link href={link.href}>
            <p className="font-mono text-xs md:text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors tracking-wide p-1.5 md:p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
                {link.icon}
            </p>
        </Link>
    );
}

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className="p-1.5 md:p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <MoonIcon className="text-neutral-800 stroke-2 w-5 h-5" />
      ) : (
        <SunIcon className="text-neutral-200 stroke-2 w-5 h-5" />
      )}
    </button>
  );
};

function NavBar({ links }) {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl z-50 flex items-center justify-between px-3 md:px-6 py-2.5 md:py-3 backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm rounded-2xl transition-colors">
            <Link 
                href="/" 
                className="group flex items-center gap-1 md:gap-2 font-mono text-sm md:text-lg font-bold text-neutral-900 dark:text-neutral-50 tracking-tight shrink-0"
            >
                <span className="text-neutral-400 dark:text-neutral-500 font-normal group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors">~/</span>
                <span>gabrielluizsf</span>
                <span className="inline-block w-1.5 md:w-2 h-3.5 md:h-4 bg-neutral-900 dark:bg-emerald-500 animate-pulse ml-0.5"></span>
            </Link>
            
            <div className="flex items-center space-x-1 md:space-x-4 shrink-0">
                {links.map((link, i) => {
                    return <NavBarItem key={i} link={link} />;
                })}
                <div className="h-4 md:h-5 w-[1px] bg-neutral-200 dark:bg-neutral-700 mx-1 md:mx-2"></div>
                <ThemeToggler />
            </div>
        </nav>
    );
}

export default NavBar;