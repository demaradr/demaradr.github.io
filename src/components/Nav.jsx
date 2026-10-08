import { useEffect, useId, useState } from 'react'
import { siteConfig } from '../siteConfig'
import { applyTheme } from '../theme'

const links = [
  { href: '#about', label: 'About' },
  { href: '#featured', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#background', label: 'Background' },
  { href: '#contact', label: 'Contact' },
]

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = () => {
    const next = !dark
    applyTheme(next ? 'dark' : 'light')
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center justify-center rounded-md border border-line/10 bg-canvas p-2 text-ink-muted transition-colors hover:bg-surface hover:text-ink"
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light theme' : 'Dark theme'}
    >
      {dark ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line/5 bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group min-w-0 shrink font-serif text-lg font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          <span className="truncate">{siteConfig.name.split(' ')[0]}</span>
          <span className="text-ink-muted group-hover:text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-surface hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-line/10 bg-canvas p-2 text-ink md:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id={panelId}
          className="border-t border-line/5 bg-canvas px-5 py-4 shadow-card md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
