import type { ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

import { Container } from './Container'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  index: string
  label: string
  title: ReactNode
  children: ReactNode
  className?: string
}

/** Numbered page section; `data-section` lists it in the section rail. */
export function Section({ id, index, label, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      data-section={label}
      className={cn('border-t border-line py-24 sm:py-36', className)}
    >
      <Container>
        <Reveal>
          <p className="flex items-center gap-3 eyebrow">
            <span className="text-accent">{index}</span>
            <span className="h-px w-10 bg-line" />
            {label}
          </p>
          <h2 className="mt-6 max-w-5xl display-h2 text-balance">{title}</h2>
        </Reveal>
        <div className="mt-14 sm:mt-20">{children}</div>
      </Container>
    </section>
  )
}
