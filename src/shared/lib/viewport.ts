type Callback = (entry: IntersectionObserverEntry) => void

interface ObserverGroup {
  observer: IntersectionObserver
  callbacks: Map<Element, Callback>
}

const groups = new Map<string, ObserverGroup>()

function getGroup(rootMargin: string): ObserverGroup {
  const existing = groups.get(rootMargin)
  if (existing) return existing

  const callbacks = new Map<Element, Callback>()
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => callbacks.get(entry.target)?.(entry)),
    { rootMargin },
  )
  const group = { observer, callbacks }
  groups.set(rootMargin, group)
  return group
}

/**
 * Watches an element with one IntersectionObserver shared per root margin,
 * instead of one observer per component. Returns the cleanup function.
 */
export function observe(element: Element, callback: Callback, rootMargin = '0px'): () => void {
  const group = getGroup(rootMargin)
  group.callbacks.set(element, callback)
  group.observer.observe(element)

  return () => {
    group.callbacks.delete(element)
    group.observer.unobserve(element)
  }
}
