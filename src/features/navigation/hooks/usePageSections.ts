import { useEffect, useState } from 'react'

export interface PageSection {
  id: string
  label: string
}

/**
 * Reads the current page's sections from the DOM: any element in <main> with an `id`
 * and a `data-section` label. Pages only mark their sections; the rail finds them.
 */
export function usePageSections(pathname: string): PageSection[] {
  const [sections, setSections] = useState<PageSection[]>([])

  useEffect(() => {
    const found = [...document.querySelectorAll<HTMLElement>('main [data-section][id]')]
    // Syncing from the DOM after the new page commits; this is the external system.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSections(found.map((element) => ({ id: element.id, label: element.dataset.section ?? '' })))
  }, [pathname])

  return sections
}
