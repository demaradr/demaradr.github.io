import { ButtonLink } from '../components/ButtonLink'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { Stats } from '../components/Stats'
import { projects } from '../data/projects'
import { siteConfig } from '../siteConfig'

const mailto = `mailto:${siteConfig.email}`

const impact = [
  { value: '60,000+', label: 'scan events a month through the laundry system I built' },
  { value: '6 hr → <30 min', label: 'month-end billing close after my rebuild' },
  { value: '473', label: 'active uniform renters tracked in production' },
  { value: 'Team Lead', label: 'promoted; onboarded and mentored two developers' },
]

const featuredSlugs = ['laundry-management-system', 'month-end-close', 'jwt-pizza']
const featured = featuredSlugs.map((slug) => projects.find((p) => p.slug === slug))

const explore = [
  {
    href: '/experience/',
    title: 'Experience',
    text: 'My work at BYU Print and Mail, plus skills, education, and background.',
  },
  {
    href: '/about/',
    title: 'About',
    text: 'Who I am, what I’m looking for, and what I do outside of work.',
  },
]

export function Home() {
  return (
    <>
      <section className="border-b border-line/5 bg-gradient-to-b from-surface to-canvas" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-3xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:max-w-5xl lg:px-8 lg:pb-28 lg:pt-24">
          {siteConfig.status && (
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {siteConfig.status}
            </p>
          )}
          <div className="mt-6 flex items-center gap-4 sm:gap-5">
            <img
              src={siteConfig.headshotUrl}
              alt="Adriano Demartin"
              className="h-20 w-20 rounded-full object-cover ring-1 ring-line/10 sm:h-24 sm:w-24"
              loading="eager"
              decoding="async"
            />
            <div className="min-w-0">
              <h1 id="hero-heading" className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="mt-2 text-xl font-medium text-ink sm:text-2xl">{siteConfig.title}</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            I work directly with the people who use my software to find real operational problems, then build, ship, train, and
            support the fix in production.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink variant="primary" href="/projects/">
              See my work
            </ButtonLink>
            <ButtonLink variant="secondary" href={siteConfig.resumeUrl} download="Adriano_Demartin_Resume.pdf">
              Resume
            </ButtonLink>
            <ButtonLink variant="secondary" href={siteConfig.githubUrl} rel="noopener noreferrer" target="_blank">
              GitHub
            </ButtonLink>
            <ButtonLink variant="secondary" href={siteConfig.linkedinUrl} rel="noopener noreferrer" target="_blank">
              LinkedIn
            </ButtonLink>
            <ButtonLink variant="ghost" href={mailto}>
              Email
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section id="impact" eyebrow="Impact" title="Software people use every day" description={null}>
        <Stats items={impact} />
      </Section>

      <Section
        id="featured"
        eyebrow="Featured work"
        title="Selected projects"
        description="Two production tools I built for BYU Print and Mail, and the project where I went deepest on DevOps."
      >
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink variant="secondary" href="/projects/">
            All projects <span aria-hidden>→</span>
          </ButtonLink>
        </div>
      </Section>

      <Section id="more" eyebrow="More" title="Get to know me" description={null}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {explore.map(({ href, title, text }) => (
            <li key={href}>
              <a
                href={href}
                className="group block h-full rounded-2xl border border-line/5 bg-surface p-6 transition-shadow hover:shadow-card sm:p-8"
              >
                <p className="font-serif text-2xl font-semibold tracking-tight text-ink">
                  {title} <span className="text-accent transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </p>
                <p className="mt-2 text-ink-muted">{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
