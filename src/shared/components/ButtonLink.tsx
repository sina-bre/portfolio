import type { ReactNode } from 'react'
import { Link } from 'react-router'

import { cn } from '@/shared/lib/cn'

const variants = {
  primary: 'bg-accent-strong text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.22)] hover:bg-accent',
  outline: 'border border-line bg-canvas text-ink hover:border-muted hover:bg-surface',
  ghost: 'text-muted hover:text-ink',
} as const

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  className?: string
}

/** Internal paths use the router; everything else is a plain anchor. */
export function ButtonLink({ href, children, variant = 'primary', className }: ButtonLinkProps) {
  const classes = cn(
    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
    // Icons nudge forward on hover.
    '[&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-0.5',
    variants[variant],
    className,
  )

  if (href.startsWith('/') && !href.endsWith('.pdf')) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  const external = href.startsWith('http')
  return (
    <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noreferrer' })}>
      {children}
    </a>
  )
}
