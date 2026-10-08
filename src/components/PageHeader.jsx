/** Top-of-page banner for every page except home. `top` renders above the eyebrow (e.g. a back link); `media` sits beside the title. */
export function PageHeader({ eyebrow, title, description, top, media, children }) {
  return (
    <header className="border-b border-line/5 bg-gradient-to-b from-surface to-canvas">
      <div className="mx-auto max-w-3xl px-5 pb-14 pt-14 sm:px-6 sm:pt-16 lg:max-w-5xl lg:px-8 lg:pb-16 lg:pt-20">
        {top && <div className="mb-6">{top}</div>}
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</div>}
            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h1>
            {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">{description}</p>}
          </div>
          {media && <div className="shrink-0">{media}</div>}
        </div>
        {children}
      </div>
    </header>
  )
}
