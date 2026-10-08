import { Section } from './Section'

const highlights = [
  'Rebuilt a legacy web application into a modern full-stack system',
  'Designed and implemented RESTful APIs',
  'Built secure authentication with JWT, sessions, and OAuth/OIDC with university SSO',
  'Deployed containerized apps to Linux servers using Docker',
  'Wrote unit tests and Playwright end-to-end tests',
  'Collaborated with stakeholders through weekly testing sessions',
  'Mentored a new developer and onboarded them to GitHub workflows and the codebase',
]

const photos = [
  { src: '/photos/month-end1.webp', alt: 'BYU Mail Services front desk' },
  { src: '/photos/laundry3.webp', alt: 'BYU Laundry carts and folded linens on the production floor' },
  { src: '/photos/month-end3.webp', alt: 'Mail and print warehouse aisle with packages and shelving' },
  { src: '/photos/laundry2.webp', alt: 'Garment conveyor lines in the BYU Laundry facility' },
]

export function FeaturedExperience() {
  return (
    <Section id="featured" eyebrow="Featured experience" title="BYU Print and Mail" description={null}>
      <div className="lg:grid lg:grid-cols-[1fr,1.15fr] lg:gap-10 lg:items-start">
        <div className="mb-8 lg:mb-0">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Software Engineer · Production Services</p>
          <p className="mt-2 text-lg text-ink-muted">Full-stack rebuild, performance, auth, deployment, and quality.</p>

          <div className="mt-8 rounded-2xl border border-line/5 bg-surface p-6">
            <p className="sr-only">Page load time reduced from about 7 minutes to under 1 second.</p>
            <p
              aria-hidden
              className="flex flex-wrap items-baseline gap-x-3 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
            >
              <span className="text-ink-muted line-through decoration-2">~7 min</span>
              <span className="text-accent">→</span>
              <span>&lt;1 sec</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted" aria-hidden>
              Page load time after rebuilding the legacy application.
            </p>
          </div>
        </div>

        <article
          className="rounded-2xl border border-accent/20 bg-gradient-to-br from-canvas to-accent-subtle/40 p-6 shadow-featured sm:p-8 lg:p-10"
          aria-labelledby="featured-role-title"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-contrast">
              Production impact
            </span>
            <span className="text-sm text-ink-muted">Primary technical focus</span>
          </div>
          <h3 id="featured-role-title" className="sr-only">
            BYU Print and Mail — software engineering highlights
          </h3>
          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-ink sm:text-lg">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <figure className="mt-12">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {photos.map(({ src, alt }) => (
            <li key={src} className="overflow-hidden rounded-xl border border-line/5 bg-surface">
              <img src={src} alt={alt} className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
        <figcaption className="mt-3 text-sm text-ink-muted">
          The operations my software supports: BYU Mail Services and BYU Laundry.
        </figcaption>
      </figure>
    </Section>
  )
}
