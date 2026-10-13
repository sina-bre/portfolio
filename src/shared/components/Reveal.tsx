import type { CSSProperties, ReactNode } from 'react'

import { revealOnEnter } from '@/shared/lib/reveal'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/** Fades and lifts its content in the first time it scrolls into view. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return (
    <div ref={revealOnEnter} data-reveal style={style} className={className}>
      {children}
    </div>
  )
}
