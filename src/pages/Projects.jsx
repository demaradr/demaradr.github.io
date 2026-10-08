import { PageHeader } from '../components/PageHeader'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { projects } from '../data/projects'

const work = projects.filter((p) => p.group === 'work')
const personal = projects.filter((p) => p.group !== 'work')

export function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description="Production tools I built for BYU Print and Mail, plus personal and school projects: CI/CD and observability on AWS, an AI coding agent, and games."
      />
      <Section
        id="work"
        eyebrow="At work"
        title="BYU Print and Mail"
        description="Internal tools used every day by operators and accounting."
      >
        <ul className="grid gap-6 md:grid-cols-2">
          {work.map((project) => (
            <ProjectCard key={project.slug} project={project} size="lg" />
          ))}
        </ul>
      </Section>
      <Section id="personal" eyebrow="Personal & school" title="Side projects" description={null}>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {personal.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </Section>
    </>
  )
}
