import { siteConfig } from '@/config/site.config'
import { cn } from '@/shared/lib/cn'

import { Phone } from './icons'

/** The phone numbers from the site config, as tap-to-call links. */
export function PhoneLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-x-6 gap-y-2', className)}>
      {siteConfig.phones.map((phone) => (
        <li key={phone.href}>
          <a
            href={phone.href}
            className="group inline-flex items-center gap-2 transition-colors hover:text-ink"
          >
            <Phone className="text-accent transition-transform duration-300 group-hover:-rotate-12" />
            <span className="underline-grow">{phone.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
