import { Link, useLocation } from 'react-router'

import { navLinks, siteConfig } from '@/config/site.config'
import { RollingLabel } from '@/shared/components'

import { MobileMenu } from './MobileMenu'
import { NavItem } from './NavItem'

export function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 xl:px-10">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          aria-label={`${siteConfig.name}, home`}
          className="group flex items-center gap-3"
        >
          <span className="grid size-10 place-items-center rounded-full border border-line bg-canvas/80 text-xs font-semibold backdrop-blur transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-canvas">
            {siteConfig.initials}
          </span>
          <span className="hidden text-sm font-medium lg:block">
            <RollingLabel
              text={siteConfig.name}
              next={siteConfig.role}
              nextClassName="text-accent"
            />
          </span>
        </Link>

        <nav
          aria-label="Main"
          className="hidden rounded-full border border-line bg-canvas/80 p-1 backdrop-blur md:block"
        >
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavItem link={link} pathname={pathname} />
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu pathname={pathname} />
      </div>
    </header>
  )
}
