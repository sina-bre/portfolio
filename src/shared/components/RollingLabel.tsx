import { cn } from '@/shared/lib/cn'

interface RollingLabelProps {
  text: string
  /** Text shown after the roll; defaults to `text`. */
  next?: string
  /** Roll on hover of the closest `.group` ancestor, or when `active` is set. */
  active?: boolean
  nextClassName?: string
}

/** Two stacked lines inside a one-line window; the first rolls up and the second rolls in. */
export function RollingLabel({ text, next = text, active, nextClassName }: RollingLabelProps) {
  return (
    <span className="relative block h-[1lh] overflow-hidden">
      <span
        aria-hidden={active}
        className={cn(
          'flex flex-col transition-transform duration-500 ease-out-expo',
          active ? '-translate-y-1/2' : 'group-hover:-translate-y-1/2',
        )}
      >
        <span>{text}</span>
        <span aria-hidden={!active} className={nextClassName}>
          {next}
        </span>
      </span>
    </span>
  )
}
