import type { ReactNode } from 'react'
import { Link } from 'react-router'

import { navLinks, siteConfig, socialLinks } from '@/config/site.config'
import { ChevronUp, Container, PhoneLinks } from '@/shared/components'

import { LocalTime } from './LocalTime'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/50 pt-20 pb-10">
      <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <FooterLabel>Let&apos;s talk</FooterLabel>
          <a
            href={`mailto:${siteConfig.email}`}
            className="underline-grow display-h3 break-all transition-colors hover:text-accent"
          >
            {siteConfig.email}
          </a>
          <PhoneLinks className="mt-6 font-mono text-sm text-muted" />
        </div>

        <FooterList title="Navigate">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className="text-muted transition-colors hover:text-ink">
                <span className="underline-grow">{link.label}</span>
              </Link>
            </li>
          ))}
        </FooterList>

        <FooterList title="Elsewhere">
          {[...socialLinks, { label: 'Resume (PDF)', href: siteConfig.resumeUrl }].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-ink"
              >
                <span className="underline-grow">{link.label}</span> ↗
              </a>
            </li>
          ))}
        </FooterList>
      </Container>

      <Container className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 font-mono text-xs text-faint">
        <p>
          © {year} {siteConfig.name}
        </p>
        <p>
          {siteConfig.location} · <LocalTime />
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0 })}
          className="group flex items-center gap-2 transition-colors hover:text-accent"
        >
          Back to top
          <ChevronUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </Container>
    </footer>
  )
}

function FooterLabel({ children }: { children: ReactNode }) {
  return <p className="mb-4 eyebrow text-faint">{children}</p>
}

function FooterList({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <FooterLabel>{title}</FooterLabel>
      <ul className="grid gap-1.5 text-base">{children}</ul>
    </div>
  )
}
