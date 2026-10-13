import { useEffect, useRef } from 'react'

import { allowsPointerEffects } from '@/shared/lib/media'

import { createTargetCursor } from '../lib/targetCursor'

const cornerBorders = [
  'border-r-0 border-b-0',
  'border-l-0 border-b-0',
  'border-l-0 border-t-0',
  'border-r-0 border-t-0',
]

export function TargetCursor() {
  const rootRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const cornersRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!allowsPointerEffects()) return
    return createTargetCursor(rootRef.current!, dotRef.current!, cornersRef.current)
  }, [])

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] size-0 opacity-0 transition-opacity will-change-transform"
    >
      <div ref={dotRef} className="absolute size-1 rounded-full bg-ink" />
      {cornerBorders.map((borders, i) => (
        <div
          key={borders}
          ref={(element) => {
            if (element) cornersRef.current[i] = element
          }}
          className={`absolute size-3 border-[3px] border-ink will-change-transform ${borders}`}
        />
      ))}
    </div>
  )
}
