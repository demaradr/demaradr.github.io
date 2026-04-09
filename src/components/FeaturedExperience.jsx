import { Section } from './Section'

const highlights = [
  'Rebuilt a legacy web application into a modern full-stack system',
  'Reduced page load times from ~7 minutes to under 1 second',
  'Designed and implemented RESTful APIs',
  'Built secure authentication with JWT, sessions, and OAuth/OIDC with university SSO',
  'Deployed containerized apps to Linux servers using Docker',
  'Wrote unit tests and Playwright end-to-end tests',
  'Collaborated with stakeholders through weekly testing sessions',
  'Mentored a new developer and onboarded them to GitHub workflows and the codebase',
]

export function FeaturedExperience() {
  return (
    <Section id="featured" eyebrow="Featured experience" title="BYU Print and Mail" description={null}>
      <div className="lg:grid lg:grid-cols-[1fr,1.15fr] lg:gap-10 lg:items-start">
        <div className="mb-8 lg:mb-0">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Software Engineer</p>
          <p className="mt-2 text-lg text-ink-muted">Full-stack rebuild, performance, auth, deployment, and quality.</p>
        </div>

        <article
          className="rounded-2xl border border-accent/20 bg-gradient-to-br from-white to-accent-subtle/40 p-6 shadow-featured sm:p-8 lg:p-10"
          aria-labelledby="featured-role-title"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
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
    </Section>
  )
}
