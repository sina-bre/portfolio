import { useEffect, useState } from 'react'

const MINUTE = 60_000

export function useLocalTime(timeZone: string): string {
  const [time, setTime] = useState(() => formatTime(timeZone))

  useEffect(() => {
    let interval: number | undefined
    const tick = () => setTime(formatTime(timeZone))

    // Align to the next minute boundary, then update once a minute — no per-second renders.
    const timeout = window.setTimeout(
      () => {
        tick()
        interval = window.setInterval(tick, MINUTE)
      },
      MINUTE - (Date.now() % MINUTE),
    )

    return () => {
      window.clearTimeout(timeout)
      window.clearInterval(interval)
    }
  }, [timeZone])

  return time
}

function formatTime(timeZone: string): string {
  return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(
    new Date(),
  )
}
