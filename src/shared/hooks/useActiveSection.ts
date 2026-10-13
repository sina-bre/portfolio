import { useEffect, useState } from 'react'

import { onScroll } from '@/shared/lib/frame'

/** The active section is the last one whose top has passed this share of the viewport. */
const ACTIVATION_LINE = 0.45

/** Tracks which section is being read, from scroll position (at most once per frame). */
export function useActiveSection(ids: readonly string[]): string | undefined {
  const [active, setActive] = useState<string>()
  const key = ids.join('|')

  useEffect(() => {
    const list = key ? key.split('|') : []

    return onScroll(() => {
      const line = window.innerHeight * ACTIVATION_LINE
      const passed = list.filter((id) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top
        return top !== undefined && top <= line
      })
      setActive(passed.at(-1) ?? list[0])
    })
  }, [key])

  return active
}
