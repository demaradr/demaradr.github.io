import { siteConfig } from '../siteConfig'
import { Section } from './Section'

const life = [
  { src: '/photos/golf.webp', label: 'Golf', alt: 'Adriano teeing off on a golf course at sunset' },
  { src: '/photos/hiking.webp', label: 'Hiking', alt: 'Adriano and a friend at an alpine lake below snowy peaks' },
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
    <Section
      id="about"
      eyebrow="About"
      title="Engineering with a shipping mindset"
      description="I care about systems that hold up in production—not just demos."
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            I am a Computer Science student at Brigham Young University. I like building real systems and shipping
            production software that stakeholders can depend on.
          </p>
          <p>
            In professional settings I have worked independently on substantial technical work, and I have mentored
            newer team members—helping them ramp on codebases, tooling, and collaborative workflows.
          </p>
          <p>
            Outside of work you&apos;ll find me on the golf course, hiking, out on the lake, at a soccer game, or
            spending time with my family.
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
          </aside>
        )}
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5" aria-label="Outside of work">
        {life.map(({ src, label, alt, position = 'object-center' }) => (
          <li key={src} className="group relative overflow-hidden rounded-xl bg-surface">
            <img
              src={src}
              alt={alt}
              className={`aspect-[3/4] w-full object-cover ${position} transition-transform duration-500 group-hover:scale-105`}
              loading="lazy"
              decoding="async"
            />
            <span className="absolute bottom-2 left-2 rounded-md bg-night/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
