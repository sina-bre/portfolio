import type { ReactNode } from 'react'

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] tracking-wider text-muted uppercase">
      {children}
    </span>
  )
}
