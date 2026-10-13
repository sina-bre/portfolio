import { Link as RouterLink } from 'react-router'

import { RollingLabel } from '@/shared/components'
import { cn } from '@/shared/lib/cn'
import type { Link } from '@/types'

import { isActive } from '../lib/isActive'

/** Desktop pill: a circle fills it from below while the label rolls up. */
export function NavItem({ link, pathname }: { link: Link; pathname: string }) {
  const active = isActive(link.href, pathname)

  return (
    <RouterLink
      to={link.href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group relative inline-flex h-9 items-center overflow-hidden rounded-full px-3.5 text-[13px] font-medium',
        active ? 'text-ink' : 'text-muted',
      )}
    >
      <span
        aria-hidden
        className="absolute top-full left-1/2 aspect-square w-[170%] -translate-1/2 scale-0 rounded-full bg-ink transition-transform duration-500 ease-out-expo group-hover:scale-100"
      />
      <span className="relative flex items-center gap-1.5">
        {active && <span className="size-1.5 rounded-full bg-accent" />}
        <RollingLabel text={link.label} nextClassName="text-canvas" />
      </span>
    </RouterLink>
  )
}
