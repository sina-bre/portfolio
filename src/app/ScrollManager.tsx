import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** Scrolls to `#hash` targets after navigation, otherwise to the top of the new page. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
