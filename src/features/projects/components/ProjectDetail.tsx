import { ArrowUpRight, ButtonLink, Container, PageHeader, Reveal, Tag } from '@/shared/components'
import type { Project } from '@/types'

export function ProjectDetail({ project }: { project: Project }) {
  const facts = [
    { label: 'Company', value: project.company },
    { label: 'Year', value: project.year },
    { label: 'Type', value: project.category },
    ...(project.scale ? [{ label: 'Scale', value: project.scale }] : []),
  ]

  return (
    <article>
      <PageHeader
        label={project.tagline}
        title={project.title}
        parents={[{ label: 'Work', href: '/works' }]}
        crumb={project.title}
      >
        <p>{project.summary}</p>
        {project.url && (
          <ButtonLink href={project.url} className="mt-8">
            Visit live site <ArrowUpRight />
          </ButtonLink>
        )}
      </PageHeader>

      <section id="details" data-section="Details">
        <Container className="grid gap-16 border-t border-line py-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <dl className="grid gap-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow text-faint">{fact.label}</dt>
                  <dd className="mt-1 text-lg">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="eyebrow text-faint">Highlights</h2>
            <ul className="mt-6 grid gap-4">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-4 border-b border-line pb-4 text-lg">
                  <span className="mt-3.5 h-px w-4 shrink-0 bg-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </article>
  )
}
