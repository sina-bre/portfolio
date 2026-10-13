import { Reveal, Tag } from '@/shared/components'
import { pad } from '@/shared/lib/format'
import type { Service } from '@/types'

interface ServiceItemProps {
  id?: string
  index: number
  service: Service
}

export function ServiceItem({ id, index, service }: ServiceItemProps) {
  return (
    <article id={id}>
      <Reveal>
        <p className="font-mono text-sm text-accent lg:hidden">{pad(index)}</p>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="display-h3">{service.title}</h3>
          {service.badge && <Tag>{service.badge}</Tag>}
        </div>
        <p className="mt-4 text-lg text-muted">{service.summary}</p>

        <p className="mt-8 eyebrow text-faint">What I build</p>
        <ul className="mt-4 grid gap-2">
          {service.builds.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-px w-4 bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <details className="group mt-8 border-t border-line pt-5">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium [&::-webkit-details-marker]:hidden">
            The technical detail
            <span className="grid size-7 place-items-center rounded-full border border-line transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-muted">{service.detail}</p>
        </details>
      </Reveal>
    </article>
  )
}
