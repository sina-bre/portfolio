const matches = (query: string) => window.matchMedia(query).matches

export const prefersReducedMotion = () => matches('(prefers-reduced-motion: reduce)')

/** A real mouse or trackpad, with motion allowed: the only case for pointer-driven effects. */
export const allowsPointerEffects = () =>
  matches('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
