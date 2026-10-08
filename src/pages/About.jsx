import { ButtonLink } from '../components/ButtonLink'
import { PageHeader } from '../components/PageHeader'
import { PhotoGrid } from '../components/PhotoGrid'
import { Section } from '../components/Section'
import { siteConfig } from '../siteConfig'

const facts = [
  { label: 'Education', value: 'B.S. Computer Science, BYU — Dec 2026' },
  { label: 'Languages', value: 'Fluent in Spanish, basic German' },
  { label: 'Also', value: 'Eagle Scout' },
  { label: 'Interests', value: 'Game development, soccer, backpacking, golf' },
]

const life = [
  { src: '/photos/golf.webp', label: 'Golf', alt: 'Adriano teeing off on a golf course at sunset' },
  { src: '/photos/hiking.webp', label: 'Backpacking', alt: 'Adriano and a friend at an alpine lake below snowy peaks' },
  { src: '/photos/boating.webp', label: 'Boating', alt: 'Friends relaxing on a boat out on the lake' },
  {
    src: '/photos/soccer.webp',
    label: 'Soccer',
    alt: 'Adriano and a friend in Barcelona jerseys at a soccer match',
    position: 'object-[30%_50%]',
  },
  { src: '/photos/family.webp', label: 'Family', alt: 'Adriano and family dressed up outdoors at dusk' },
]

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Hi, I'm Adriano"
        description="Software engineer, team lead, and soon-to-be BYU computer science graduate."
        media={
          <img
            src={siteConfig.headshotUrl}
            alt=""
            className="h-28 w-28 rounded-full object-cover ring-1 ring-line/10 sm:h-40 sm:w-40"
            decoding="async"
          />
        }
      />

      <Section id="story" eyebrow="My story" title="Engineering with a shipping mindset" description={null}>
        <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              I&apos;m a Computer Science student at Brigham Young University, graduating in December 2026. I like building real
              systems that people depend on, and I care about software that holds up in production, not just in demos.
            </p>
            <p>
              At BYU Print and Mail I work directly with the people who use my software: shadowing operators at their stations,
              finding problems nobody had raised, and owning the fix from the database to production. Along the way I was
              promoted to Team Lead and now help new developers ramp up on our codebases and workflows.
            </p>
            <p>
              Outside of work you&apos;ll find me on the golf course, backpacking, out on the lake, at a soccer game, building a
              game, or spending time with my family.
            </p>
          </div>

          {siteConfig.lookingFor?.length > 0 && (
            <aside className="rounded-2xl border border-line/5 bg-surface p-6 sm:p-8" aria-labelledby="looking-for-heading">
              <h3 id="looking-for-heading" className="text-sm font-semibold uppercase tracking-wider text-accent">
                What I&apos;m looking for
              </h3>
              <dl className="mt-5 space-y-4">
                {siteConfig.lookingFor.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">{label}</dt>
                    <dd className="mt-1 font-medium text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6">
                <ButtonLink variant="primary" href={`mailto:${siteConfig.email}`}>
                  Get in touch
                </ButtonLink>
              </div>
            </aside>
          )}
        </div>
      </Section>

      <Section id="life" eyebrow="Outside of work" title="A few things I love" description={null}>
        <PhotoGrid photos={life} aspect="aspect-[3/4]" columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" />
      </Section>

      <Section id="facts" eyebrow="Quick facts" title="The short version" description={null}>
        <dl className="grid gap-4 sm:grid-cols-2">
          {facts.map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-line/5 bg-surface p-5">
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">{label}</dt>
              <dd className="mt-1 font-medium text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}
