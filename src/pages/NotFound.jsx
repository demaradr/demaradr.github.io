import { ButtonLink } from '../components/ButtonLink'
import { PageHeader } from '../components/PageHeader'

export function NotFound() {
  return (
    <PageHeader eyebrow="404" title="Page not found" description="That page doesn’t exist or has moved.">
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink variant="primary" href="/">
          Go home
        </ButtonLink>
        <ButtonLink variant="secondary" href="/projects/">
          See projects
        </ButtonLink>
      </div>
    </PageHeader>
  )
}
