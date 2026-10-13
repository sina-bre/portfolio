/** Page links are active on their route; in-page anchors (`/#…`) never are. */
export function isActive(href: string, pathname: string) {
  if (href.includes('#')) return false
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}
