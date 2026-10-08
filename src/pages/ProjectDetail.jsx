import { ButtonLink } from '../components/ButtonLink'
import { PageHeader } from '../components/PageHeader'
import { PhotoGrid } from '../components/PhotoGrid'
import { ExternalLinks, ProjectMeta, Tags } from '../components/ProjectCard'
import { Stats } from '../components/Stats'
import { hasPage, projects, projectUrl } from '../data/projects'
import { NotFound } from './NotFound'

function Body({ title, paragraphs = [], bullets = [] }) {
  return (
    <section className="grid gap-4 border-t border-line/5 py-10 first:border-t-0 first:pt-0 lg:grid-cols-[14rem,1fr] lg:gap-10">
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      <div className="max-w-3xl space-y-4">
        {paragraphs.map((text) => (
          <p key={text} className="text-base leading-relaxed text-ink-muted sm:text-lg">
            {text}
          </p>
        ))}
        {bullets.length > 0 && (
          <ul className="space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-ink">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export function ProjectDetail({ slug }) {
  const linked = projects.filter(hasPage)
  const index = linked.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />

  const project = linked[index]
  const next = linked[(index + 1) % linked.length]
  const { name, kicker, year, summary, metrics, tags, links, image, gallery, sections } = project
  const photos = gallery.length ? gallery : image ? [image] : []

  return (
    <>
      <PageHeader
        top={
          <a href="/projects/" className="text-sm font-medium text-ink-muted transition-colors hover:text-accent">
            <span aria-hidden>←</span> All projects
          </a>
        }
        eyebrow={<ProjectMeta kicker={kicker} year={year} />}
        title={name}
        description={summary}
      >
        <div className="mt-8 space-y-4">
          <Tags tags={tags} />
          <ExternalLinks links={links} />
        </div>
      </PageHeader>

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:max-w-5xl lg:px-8 lg:py-16">
        <Stats items={metrics} className="mb-12" />
        {photos.length > 0 && (
          <div className="mb-14">
            <PhotoGrid
              photos={photos}
              columns={photos.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-3'}
              aspect={photos.length === 1 ? 'aspect-video' : 'aspect-[4/3]'}
            />
          </div>
        )}
        {sections.map((section) => (
          <Body key={section.title} {...section} />
        ))}

        <nav
          className="mt-12 flex flex-col gap-4 border-t border-line/5 pt-10 sm:flex-row sm:items-center sm:justify-between"
          aria-label="More projects"
        >
          <ButtonLink variant="secondary" href="/projects/">
            <span aria-hidden>←</span> All projects
          </ButtonLink>
          <a href={projectUrl(next.slug)} className="group text-right">
            <span className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">Next project</span>
            <span className="font-serif text-xl font-semibold text-ink group-hover:text-accent">
              {next.name} <span aria-hidden>→</span>
            </span>
          </a>
        </nav>
      </div>
    </>
  )
}
