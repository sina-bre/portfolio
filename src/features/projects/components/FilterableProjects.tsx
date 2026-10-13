import { useState } from 'react'

import { Container } from '@/shared/components'
import { cn } from '@/shared/lib/cn'
import type { Project } from '@/types'

import { ProjectList } from './ProjectList'

const ALL = 'All'

/** Category chips with counts above the project list. */
export function FilterableProjects({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState(ALL)
  const categories = [ALL, ...new Set(projects.map((project) => project.category))]
  const inCategory = (name: string) =>
    name === ALL ? projects : projects.filter((project) => project.category === name)

  return (
    <section id="projects" data-section="Projects">
      <Container>
        <div
          role="group"
          aria-label="Filter projects by type"
          className="mb-10 flex flex-wrap gap-1.5 rounded-2xl border border-line p-1.5"
        >
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={name === category}
              onClick={() => setCategory(name)}
              className={cn(
                'flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm transition-colors duration-300',
                name === category
                  ? 'bg-ink text-canvas'
                  : 'text-muted hover:bg-white/5 hover:text-ink',
              )}
            >
              {name}
              <span className="rounded-md border border-current/25 px-1.5 font-mono text-[10px]">
                {inCategory(name).length}
              </span>
            </button>
          ))}
        </div>

        {/* Keyed so the rows replay their reveal when the filter changes. */}
        <ProjectList key={category} projects={inCategory(category)} />
      </Container>
    </section>
  )
}
