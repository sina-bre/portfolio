import { Link } from 'react-router'

import type { Project } from '@/types'

import { useEdgeSlide } from '../hooks/useEdgeSlide'

import { FlowingBand } from './FlowingBand'

/** Big centred project title; an accent marquee flows in over it on hover. */
export function FlowingRow({ project }: { project: Project }) {
  const { bandRef, handlers } = useEdgeSlide()

  return (
    <li className="group/flow relative overflow-hidden border-t border-line" {...handlers}>
      <Link
        to={`/works/${project.slug}`}
        className="flex h-28 items-center justify-center text-[clamp(1.75rem,5vw,4.25rem)] font-medium tracking-tight sm:h-36"
      >
        {project.title}
      </Link>
      <FlowingBand
        ref={bandRef}
        title={project.title}
        detail={project.stack.slice(0, 2).join(' · ')}
      />
    </li>
  )
}
