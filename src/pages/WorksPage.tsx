import { contentRepository } from '@/api'
import { OpenSource } from '@/features/open-source'
import { FilterableProjects } from '@/features/projects'
import { PageHeader, Seo } from '@/shared/components'

const projects = contentRepository.getProjects()

export function WorksPage() {
  return (
    <>
      <Seo
        title="Work"
        description="Products, admin panels, APIs and client work by Sina Baradaran."
      />
      <PageHeader
        label="Work"
        title={
          <>
            Everything I&apos;ve <span className="text-accent">shipped</span>.
          </>
        }
      >
        <p>
          Live platforms, internal tools and the backend behind them at Yekta Group, plus client
          work from Novin, Asiatech, Arzesh Network and Farawin, and the projects I publish myself.
        </p>
      </PageHeader>
      <FilterableProjects projects={projects} />
      <OpenSource />
      <div className="h-32" />
    </>
  )
}
