export function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-black/5 first:border-t-0 first:pt-0 ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:max-w-5xl lg:px-8 lg:py-20">
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-2xl lg:mb-12">
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 id={id ? `${id}-heading` : undefined} className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">{description}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
