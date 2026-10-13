import { Link } from 'react-router'

import { ArrowUpRight, Reveal } from '@/shared/components'
import { pad } from '@/shared/lib/format'
import type { Project } from '@/types'

import { useEdgeSlide } from '../hooks/useEdgeSlide'

/** Detailed row; a surface band slides in behind it from the edge the pointer entered. */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { bandRef, handlers } = useEdgeSlide()

  return (
    <li className="relative overflow-hidden border-t border-line" {...handlers}>
      <div
        ref={bandRef}
        aria-hidden
        className="absolute inset-0 translate-y-[101%] bg-surface transition-[translate] duration-700 ease-out-expo"
      />
      <Reveal className="relative">
        <Link
          to={`/works/${project.slug}`}
          className="group grid gap-4 py-10 md:grid-cols-[3rem_1fr_auto] md:items-center md:gap-8 md:px-4"
        >
          <span className="font-mono text-xs text-faint">{pad(index)}</span>
          <div>
            <h3 className="text-[clamp(1.6rem,5.2vw,4.25rem)] leading-none font-medium tracking-tight transition-[color,translate] duration-500 ease-out-expo group-hover:translate-x-2 group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mt-3 text-muted">{project.tagline}</p>
            <p className="mt-4 font-mono text-xs text-faint">{project.stack.join(' / ')}</p>
          </div>
          <div className="flex items-center gap-6 md:flex-col md:items-end">
            <p className="eyebrow text-muted">
              {project.company} · {project.year}
            </p>
            <span className="grid size-11 place-items-center rounded-full border border-line transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-canvas">
              <ArrowUpRight />
            </span>
          </div>
        </Link>
      </Reveal>
    </li>
  )
}
