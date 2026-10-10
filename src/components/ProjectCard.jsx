import { hasPage, projectUrl } from '../data/projects'

export function Tags({ tags, limit }) {
  if (!tags?.length) return null
  const shown = limit ? tags.slice(0, limit) : tags
  const hidden = tags.length - shown.length
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {shown.map((tag) => (
        <li key={tag} className="rounded-md border border-line/5 bg-surface px-2.5 py-1 text-xs font-medium text-ink">
          {tag}
        </li>
      ))}
      {hidden > 0 && <li className="px-1 py-1 text-xs font-medium text-ink-muted">+{hidden} more</li>}
    </ul>
  )
}

export function ExternalLinks({ links, className = '' }) {
  if (!links?.length) return null
  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {links.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          {label}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  )
}

export function ProjectMeta({ kicker, year }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
      {kicker}
      {year && <span className="text-ink-muted"> · {year}</span>}
    </p>
  )
}

/** Card for the Home and Projects pages. The whole card links to the case study when there is one. */
export function ProjectCard({ project, size = 'md' }) {
  const { slug, name, kicker, year, summary, tags, links, image, flow, metrics } = project
  const linked = hasPage(project)
  const headline = metrics?.[0]

  return (
    <li className="group relative flex flex-col overflow-hidden rounded-2xl border border-line/5 bg-canvas shadow-sm transition-shadow duration-200 hover:shadow-card">
      {image ? (
        <div className={`overflow-hidden border-b border-line/5 ${image.fit === 'contain' ? 'bg-white' : ''}`}>
          <img
            src={image.src}
            alt={image.alt}
            className={`${size === 'lg' ? 'aspect-[16/9]' : 'aspect-video'} w-full ${
              image.fit === 'contain' ? 'object-contain p-3' : 'object-cover'
            } transition-transform duration-500 group-hover:scale-[1.03]`}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div aria-hidden className="flex aspect-video flex-col justify-between border-b border-line/5 bg-night p-5 font-mono">
          <span className="text-xs text-white/40">$ {slug}</span>
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-xs">
            {(flow ?? [name]).map((step, i) => (
              <li key={step} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-[#5ebadc]">→</span>}
                <span className="rounded border border-[#5ebadc]/30 bg-[#5ebadc]/10 px-2 py-1 text-[#9fdcf0]">{step}</span>
              </li>
            ))}
          </ol>
          <span className="flex items-center gap-2 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> passing
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <ProjectMeta kicker={kicker} year={year} />
        <h3 className="mt-2 text-lg font-semibold text-ink">
          {linked ? (
            <a href={projectUrl(slug)} className="after:absolute after:inset-0 focus-visible:outline-none">
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{summary}</p>
        {headline && (
          <p className="mt-4 text-sm text-ink">
            <span className="font-serif text-xl font-semibold text-accent">{headline.value}</span>{' '}
            <span className="text-ink-muted">{headline.label}</span>
          </p>
        )}
        <div className="mt-auto space-y-4 pt-5">
          <Tags tags={tags} limit={5} />
          {linked ? (
            <p className="text-sm font-medium text-accent">
              Read case study <span aria-hidden>→</span>
            </p>
          ) : (
            <ExternalLinks links={links} className="relative z-10" />
          )}
        </div>
      </div>
      {linked && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-transparent transition group-focus-within:ring-accent"
        />
      )}
    </li>
  )
}
