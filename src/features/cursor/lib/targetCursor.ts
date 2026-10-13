const TARGETS = 'a, button, summary, [data-cursor-target]'
const CORNER = 12 // corner size in px
const GAP = 4 // space between a target and its brackets
const SPIN = 2 // idle rotation, degrees per frame
const FOLLOW = 0.35 // how fast the cursor catches the pointer (0–1)
const SNAP = 0.25 // how fast corners and rotation settle (0–1)

type Point = [x: number, y: number]

const lerp = (from: number, to: number, t: number) => from + (to - from) * t

/** Corner offsets around the pointer while idle: top-left, top-right, bottom-right, bottom-left. */
const idleCorners: Point[] = [
  [-CORNER * 1.5, -CORNER * 1.5],
  [CORNER * 0.5, -CORNER * 1.5],
  [CORNER * 0.5, CORNER * 0.5],
  [-CORNER * 1.5, CORNER * 0.5],
]

function targetCorners(rect: DOMRect, x: number, y: number): Point[] {
  const left = rect.left - GAP - x
  const top = rect.top - GAP - y
  const right = rect.right + GAP - CORNER - x
  const bottom = rect.bottom + GAP - CORNER - y
  return [
    [left, top],
    [right, top],
    [right, bottom],
    [left, bottom],
  ]
}

/**
 * Drives the bracket cursor: follows the pointer, spins while idle and wraps its
 * corners around hovered links. Writes transforms directly, one frame loop, no React state.
 */
export function createTargetCursor(root: HTMLElement, dot: HTMLElement, corners: HTMLElement[]) {
  const pointer: Point = [-100, -100]
  const position: Point = [-100, -100]
  const current = idleCorners.map(([x, y]): Point => [x, y])
  let angle = 0
  let target: Element | null = null
  let pressed = false
  let scrolled = false
  let frame = 0

  const onMove = (event: PointerEvent) => {
    pointer[0] = event.clientX
    pointer[1] = event.clientY
    target = (event.target as Element).closest(TARGETS)
    root.style.opacity = '1'
  }
  const onLeave = () => (root.style.opacity = '0')
  const onDown = () => (pressed = true)
  const onUp = () => (pressed = false)
  const onScroll = () => (scrolled = true)

  const tick = () => {
    if (scrolled) {
      // Content moved under a still pointer: re-check what it is over.
      target = document.elementFromPoint(pointer[0], pointer[1])?.closest(TARGETS) ?? null
      scrolled = false
    }

    position[0] = lerp(position[0], pointer[0], FOLLOW)
    position[1] = lerp(position[1], pointer[1], FOLLOW)

    const goal = target ? targetCorners(target.getBoundingClientRect(), ...position) : idleCorners
    angle = target ? lerp(angle, angle > 180 ? 360 : 0, SNAP) : (angle + SPIN) % 360

    root.style.transform = `translate3d(${position[0]}px, ${position[1]}px, 0) rotate(${angle}deg)`
    dot.style.transform = `translate(-50%, -50%) scale(${pressed ? 0.6 : 1})`
    corners.forEach((corner, i) => {
      const point = current[i]!
      point[0] = lerp(point[0], goal[i]![0], SNAP)
      point[1] = lerp(point[1], goal[i]![1], SNAP)
      corner.style.transform = `translate3d(${point[0]}px, ${point[1]}px, 0)`
    })

    frame = requestAnimationFrame(tick)
  }

  document.documentElement.classList.add('has-target-cursor')
  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('pointerdown', onDown)
  window.addEventListener('pointerup', onUp)
  window.addEventListener('scroll', onScroll, { passive: true })
  document.documentElement.addEventListener('pointerleave', onLeave)
  frame = requestAnimationFrame(tick)

  return () => {
    cancelAnimationFrame(frame)
    document.documentElement.classList.remove('has-target-cursor')
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerdown', onDown)
    window.removeEventListener('pointerup', onUp)
    window.removeEventListener('scroll', onScroll)
    document.documentElement.removeEventListener('pointerleave', onLeave)
  }
}
