import type { ReactNode } from 'react'
import { Link } from 'react-router'

import { cn } from '@/shared/lib/cn'

import { ArrowRight } from './icons'

interface ArrowLinkProps {
  to: string
  children: ReactNode
  className?: string
}

/** Text link with a growing underline and a circled arrow that fills on hover. */
export function ArrowLink({ to, children, className }: ArrowLinkProps) {
  return (
    <Link to={to} className={cn('group inline-flex items-center gap-3 font-medium', className)}>
      <span className="underline-grow pb-0.5">{children}</span>
      {/* The fill rises from below the circle; the arrow sits above it and turns dark. */}
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-full border border-faint transition-colors duration-300 group-hover:border-ink">
        <span className="absolute inset-0 translate-y-[101%] rounded-full bg-ink transition-transform duration-500 ease-out-expo group-hover:translate-y-0" />
        <ArrowRight className="relative transition-[color,rotate] duration-500 ease-out-expo group-hover:-rotate-45 group-hover:text-canvas" />
      </span>
    </Link>
  )
}
