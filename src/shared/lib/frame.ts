/**
 * One shared requestAnimationFrame loop for every scroll-linked effect.
 * It runs only while something is subscribed, and measures scroll velocity once
 * per frame for all subscribers instead of each effect listening to scroll itself.
 */
export interface FrameInfo {
  /** Seconds since the previous frame. */
  delta: number
  /** Smoothed scroll velocity in px per second; negative when scrolling up. */
  velocity: number
}

type Subscriber = (frame: FrameInfo) => void

const subscribers = new Set<Subscriber>()
const SMOOTHING = 0.12

let frameId = 0
let lastTime = 0
let lastScroll = 0
let velocity = 0

function tick(time: number) {
  const delta = Math.min((time - lastTime) / 1000, 0.1)
  const scroll = window.scrollY
  const raw = delta > 0 ? (scroll - lastScroll) / delta : 0

  velocity += (raw - velocity) * SMOOTHING
  lastTime = time
  lastScroll = scroll

  subscribers.forEach((subscriber) => subscriber({ delta, velocity }))
  frameId = requestAnimationFrame(tick)
}

export function onFrame(subscriber: Subscriber): () => void {
  subscribers.add(subscriber)

  if (subscribers.size === 1) {
    lastTime = performance.now()
    lastScroll = window.scrollY
    frameId = requestAnimationFrame(tick)
  }

  return () => {
    subscribers.delete(subscriber)
    if (subscribers.size === 0) cancelAnimationFrame(frameId)
  }
}

/** Calls `callback` at most once per frame while the page scrolls or resizes, and once now. */
export function onScroll(callback: () => void): () => void {
  let queued = false
  const schedule = () => {
    if (queued) return
    queued = true
    requestAnimationFrame(() => {
      queued = false
      callback()
    })
  }

  callback()
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)

  return () => {
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
  }
}
