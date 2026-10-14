import { contentRepository } from '@/api'
import { ArrowLink, Reveal, Section } from '@/shared/components'
import { pad } from '@/shared/lib/format'

import { FlowingRow } from './FlowingRow'
import { LiveProducts } from './LiveProducts'

const featured = contentRepository.getFeaturedProjects()

export function FeaturedWork() {
  return (
    <Section
      id="work"
      index="06"
      label="Selected work"
      title="Platforms, panels and the API behind them."
    >
      <ul className="bleed-x border-b border-line">
        {featured.map((project) => (
          <FlowingRow key={project.slug} project={project} />
        ))}
      </ul>

      <ol className="mt-14 grid gap-10 md:grid-cols-3">
        {featured.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={i * 90}>
              <p className="eyebrow text-faint">
                {pad(i + 1)} · {project.tagline}
              </p>
              <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <LiveProducts />

      <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
        <ArrowLink to="/works">Explore all work &amp; open source</ArrowLink>
        <ArrowLink to="/experience">Read the full timeline</ArrowLink>
      </div>
    </Section>
  )
}
