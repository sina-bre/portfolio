import type { Ref } from 'react'

const REPEAT = 4

interface FlowingBandProps {
  ref: Ref<HTMLDivElement>
  title: string
  detail: string
}

/** Accent band with a marquee that only runs while its row is hovered. */
export function FlowingBand({ ref, title, detail }: FlowingBandProps) {
  const part = (
    <>
      <span className="px-[1vw]">{title}</span>
      <span className="mx-[2vw] rounded-full border border-canvas/30 px-4 py-1.5 font-mono text-xs tracking-widest uppercase">
        {detail}
      </span>
    </>
  )

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 translate-y-[101%] overflow-hidden bg-accent text-[clamp(1.75rem,5vw,4.25rem)] font-medium tracking-tight text-canvas transition-[translate] duration-700 ease-out-expo"
    >
      <div className="flex h-full w-max animate-marquee-fast items-center whitespace-nowrap [animation-play-state:paused] group-hover/flow:[animation-play-state:running]">
        {Array.from({ length: REPEAT * 2 }, (_, i) => (
          <span key={i} className="flex items-center">
            {part}
          </span>
        ))}
      </div>
    </div>
  )
}
