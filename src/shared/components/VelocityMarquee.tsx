import { useEffect, useRef } from 'react'

import { cn } from '@/shared/lib/cn'
import { onFrame, type FrameInfo } from '@/shared/lib/frame'
import { prefersReducedMotion } from '@/shared/lib/media'
import { observe } from '@/shared/lib/viewport'

/** Scroll speed (px/s) at which the strip runs at `1 + MAX_BOOST` times its base speed. */
const FULL_BOOST_VELOCITY = 1000
const MAX_BOOST = 5

interface VelocityMarqueeProps {
  items: readonly string[]
  /** Base speed in px per second; negative runs the other way. */
  speed?: number
  className?: string
}

/**
 * A strip that drifts on its own and speeds up with scrolling, flipping direction
 * when you scroll back up. Moves only while visible, on the shared frame loop.
 */
export function VelocityMarquee({ items, speed = 60, className }: VelocityMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const text = items.join('  ·  ') + '  ·  '

  useEffect(() => {
    const track = trackRef.current
    if (!track || prefersReducedMotion()) return

    let x = 0
    let half = 0
    let direction = 1
    let stopFrames: (() => void) | undefined

    const step = ({ delta, velocity }: FrameInfo) => {
      if (velocity < 0) direction = -1
      else if (velocity > 0) direction = 1

      const boost = Math.min(Math.abs(velocity) / FULL_BOOST_VELOCITY, 1) * MAX_BOOST
      x -= direction * speed * delta * (1 + boost)
      x = ((x % half) - half) % half // wrap into (-half, 0]
      track.style.transform = `translate3d(${x}px, 0, 0)`
    }

    // Measure once whenever the strip comes into view, then animate only while visible.
    const stopObserving = observe(track, (entry) => {
      stopFrames?.()
      half = track.scrollWidth / 2
      stopFrames = entry.isIntersecting && half > 0 ? onFrame(step) : undefined
    })

    return () => {
      stopObserving()
      stopFrames?.()
    }
  }, [speed])

  return (
    <div className={cn('overflow-hidden', className)} aria-hidden>
      <div ref={trackRef} className="flex w-max whitespace-pre will-change-transform">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}
