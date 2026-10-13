import { useEffect, useState } from 'react'
import { Link } from 'react-router'

import { navLinks, socialLinks } from '@/config/site.config'
import { Plus, RollingLabel } from '@/shared/components'
import { pad } from '@/shared/lib/format'

import { isActive } from '../lib/isActive'

/** Colour layers that sweep in ahead of the panel. */
const layers = ['bg-accent', 'bg-surface']
const PANEL_DELAY = layers.length * 90

const panelClass =
  'absolute inset-y-0 right-0 w-full max-w-sm translate-x-full transition-transform duration-700 ease-out-expo group-data-open/menu:translate-x-0'

/** Staggered full-height menu for small screens. Every motion is a CSS transition. */
export function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const delay = (ms: number) => ({ transitionDelay: open ? `${ms}ms` : '0ms' })

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div data-open={open || undefined} className="group/menu md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="relative z-[70] flex h-10 items-center gap-2 rounded-full border border-line bg-canvas/80 px-4 text-sm font-medium backdrop-blur"
      >
        <RollingLabel text="Menu" next="Close" active={open} />
        <Plus className="transition-transform duration-500 ease-out-expo group-data-open/menu:rotate-45" />
      </button>

      <div
        id="mobile-menu"
        inert={!open}
        className="invisible fixed inset-0 z-[60] transition-[visibility] duration-700 group-data-open/menu:visible"
      >
        <div
          onClick={close}
          className="absolute inset-0 bg-canvas/70 opacity-0 transition-opacity duration-500 group-data-open/menu:opacity-100"
        />
        {layers.map((color, i) => (
          <div key={color} className={`${panelClass} ${color}`} style={delay(i * 90)} />
        ))}

        <nav
          aria-label="Mobile"
          className={`${panelClass} flex flex-col justify-between border-l border-line bg-canvas px-8 pt-28 pb-10`}
          style={delay(PANEL_DELAY)}
        >
          <ol className="grid gap-2">
            {navLinks.map((link, i) => (
              <li key={link.href} className="overflow-hidden">
                <Link
                  to={link.href}
                  onClick={close}
                  aria-current={isActive(link.href, pathname) ? 'page' : undefined}
                  className="flex translate-y-full items-start gap-3 text-4xl font-semibold tracking-tight transition-[translate,color] duration-700 ease-out-expo group-data-open/menu:translate-y-0 hover:text-accent aria-[current=page]:text-accent"
                  style={delay(PANEL_DELAY + 120 + i * 60)}
                >
                  {link.label}
                  <span className="font-mono text-xs text-accent">{pad(i + 1)}</span>
                </Link>
              </li>
            ))}
          </ol>

          <ul className="flex gap-6 text-sm text-muted">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-ink">
                  <span className="underline-grow">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
