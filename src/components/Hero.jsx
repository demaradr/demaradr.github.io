import { siteConfig } from '../siteConfig'
import { ButtonLink } from './ButtonLink'

const mailto = `mailto:${siteConfig.email}`

export function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-24 border-b border-black/5 bg-gradient-to-b from-surface to-white"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:max-w-5xl lg:px-8 lg:pb-28 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Portfolio</p>
        <div className="mt-6 flex items-center gap-4">
          <img
            src={siteConfig.headshotUrl}
            alt="Adriano Demartin"
            className="h-16 w-16 rounded-full object-cover ring-1 ring-black/10 sm:h-20 sm:w-20"
            loading="eager"
            decoding="async"
          />
          <div className="min-w-0">
            <h1
              id="hero-heading"
              className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-ink sm:text-2xl">{siteConfig.title}</p>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          I build production web applications, APIs, and authentication flows—with a focus on reliability, security,
          and fast experiences for real users.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink variant="primary" href={siteConfig.resumeUrl} download="Adriano_Demartin_Resume.pdf">
            Resume
          </ButtonLink>
          <ButtonLink variant="secondary" href={siteConfig.githubUrl} rel="noopener noreferrer" target="_blank">
            GitHub
          </ButtonLink>
          <ButtonLink variant="secondary" href={siteConfig.linkedinUrl} rel="noopener noreferrer" target="_blank">
            LinkedIn
          </ButtonLink>
          <ButtonLink variant="secondary" href={mailto}>
            Email
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
