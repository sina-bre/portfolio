import { siteConfig } from '@/config/site.config'
import { useLocalTime } from '@/shared/hooks/useLocalTime'

/** Isolated so the once-a-minute update re-renders only this text. */
export function LocalTime() {
  const time = useLocalTime(siteConfig.timeZone)
  return <time>{time} IRST</time>
}
