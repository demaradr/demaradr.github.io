import { siteConfig } from '../siteConfig'
import { ButtonLink } from './ButtonLink'

const mailto = `mailto:${siteConfig.email}`

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-black/5 bg-ink text-white">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">Let&apos;s connect</h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">
          Open to conversations about full-stack roles, internships, and teams that value careful engineering.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            variant="primary"
            className="!bg-white !text-ink hover:!bg-white/90 focus-visible:!outline-white"
            href={mailto}
          >
            Email
          </ButtonLink>
          <ButtonLink
            variant="secondary"
            className="!border-white/25 !bg-transparent !text-white hover:!bg-white/10 focus-visible:!outline-white"
            href={siteConfig.linkedinUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </ButtonLink>
          <ButtonLink
            variant="secondary"
            className="!border-white/25 !bg-transparent !text-white hover:!bg-white/10 focus-visible:!outline-white"
            href={siteConfig.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ButtonLink>
          <ButtonLink
            variant="secondary"
            className="!border-white/25 !bg-transparent !text-white hover:!bg-white/10 focus-visible:!outline-white"
            href={siteConfig.resumeUrl}
            download="Adriano_Demartin_Resume.pdf"
          >
            Resume
          </ButtonLink>
        </div>
        <p className="mt-12 text-sm text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. Built with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
