import type { Project } from '@/types'

import { ProjectRow } from './ProjectRow'

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ol className="border-b border-line">
      {projects.map((project, i) => (
        <ProjectRow key={project.slug} project={project} index={i + 1} />
      ))}
    </ol>
  )
}
