import type { ReactNode } from 'react'
import { Link } from 'react-router'

import { Container } from './Container'

interface PageHeaderProps {
  label: string
  title: ReactNode
  /** Breadcrumb trail between Home and the current page. */
  parents?: { label: string; href: string }[]
  /** Breadcrumb text for this page, when it differs from `label`. */
  crumb?: string
  children?: ReactNode
}

/** Breadcrumb, eyebrow and display title. Above the fold, so it renders immediately (no reveal). */
export function PageHeader({
  label,
  title,
  parents = [],
  crumb = label,
  children,
}: PageHeaderProps) {
  return (
    <header id="top" data-section={label} className="pt-32 pb-16 sm:pt-36">
      <Container>
        <nav aria-label="Breadcrumb" className="font-mono text-xs text-muted">
          {[{ label: 'Home', href: '/' }, ...parents].map((parent) => (
            <span key={parent.href}>
              <Link to={parent.href} className="transition-colors hover:text-ink">
                <span className="underline-grow">{parent.label}</span>
              </Link>
              <span className="mx-2 text-faint">/</span>
            </span>
          ))}
          <span aria-current="page" className="text-ink">
            {crumb}
          </span>
        </nav>

        <p className="mt-20 flex items-center gap-3 eyebrow text-accent">
          <span className="h-px w-10 bg-accent" />
          {label}
        </p>
        <h1 className="mt-6 max-w-6xl display-h1 text-balance">{title}</h1>
        {children && <div className="mt-8 max-w-2xl text-lg text-muted">{children}</div>}
      </Container>
    </header>
  )
}
