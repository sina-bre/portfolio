import { useRef, type MouseEvent } from 'react'

/** Off-screen position on the side of the row the pointer is nearest to. */
function edgeOf(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  return event.clientY - rect.top < rect.height / 2 ? '0 -101%' : '0 101%'
}

/**
 * Slides a band in from the edge the pointer entered through, and out through the edge
 * it leaves by. Writes `translate` directly, so hovering never re-renders the row.
 */
export function useEdgeSlide() {
  const bandRef = useRef<HTMLDivElement>(null)

  const onMouseEnter = (event: MouseEvent<HTMLElement>) => {
    const band = bandRef.current
    if (!band) return
    band.style.transition = 'none'
    band.style.translate = edgeOf(event)
    band.getBoundingClientRect() // commit the start position before animating
    band.style.transition = ''
    band.style.translate = '0 0'
  }

  const onMouseLeave = (event: MouseEvent<HTMLElement>) => {
    if (bandRef.current) bandRef.current.style.translate = edgeOf(event)
  }

  return { bandRef, handlers: { onMouseEnter, onMouseLeave } }
}
