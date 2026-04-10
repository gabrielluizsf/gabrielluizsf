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
      className="group relative px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
    >
      {title}
      <span className="inline-block ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 text-[10px]">
        ↗
      </span>
    </a>
  )
}