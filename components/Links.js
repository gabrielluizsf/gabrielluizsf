export default function Links({ links }) {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
      {links.map((link, index) => (
        <ContentLink 
          key={index} 
          title={link.title} 
          href={link.href} 
        />
      ))}
    </div>
  )
}

function ContentLink({ title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-sm font-mono text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-50 transition-all duration-200"
    >
      <span>{title}</span>
      <span className="text-neutral-400 dark:text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-xs">
        ↗
      </span>
    </a>
  )
}