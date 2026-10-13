import { observe } from './viewport'

/**
 * Ref callback that marks an element visible once, then stops observing.
 * Module-level and stable, so it never re-runs or re-renders anything.
 */
export function revealOnEnter(element: HTMLElement | null) {
  if (!element) return
  const stop = observe(
    element,
    (entry) => {
      if (!entry.isIntersecting) return
      element.dataset.visible = ''
      stop()
    },
    '0px 0px -10% 0px',
  )
  return stop
}
