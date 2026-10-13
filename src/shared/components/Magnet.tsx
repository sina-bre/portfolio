import { useEffect, useRef, type ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'
import { allowsPointerEffects } from '@/shared/lib/media'

interface MagnetProps {
  children: ReactNode
  /** Furthest the content moves, in px. Kept below the gap between buttons so they never touch. */
  reach?: number
  className?: string
}

/** Leans its content toward the pointer while the pointer is over it. */
export function Magnet({ children, reach = 6, className }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !allowsPointerEffects()) return

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect()
      // Pointer position from the centre, as -1…1 on each axis.
      const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      element.style.transform = `translate3d(${x * reach}px, ${y * reach * 0.6}px, 0)`
    }
    const onLeave = () => (element.style.transform = '')

    element.addEventListener('pointermove', onMove)
    element.addEventListener('pointerleave', onLeave)
    return () => {
      element.removeEventListener('pointermove', onMove)
      element.removeEventListener('pointerleave', onLeave)
    }
  }, [reach])

  return (
    <div
      ref={ref}
      className={cn('inline-block transition-transform duration-300 ease-out', className)}
    >
      {children}
    </div>
  )
}
