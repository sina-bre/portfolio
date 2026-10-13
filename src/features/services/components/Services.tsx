import { contentRepository } from '@/api'
import { Section } from '@/shared/components'
import { useActiveSection } from '@/shared/hooks/useActiveSection'
import { cn } from '@/shared/lib/cn'
import { pad } from '@/shared/lib/format'

import { ServiceItem } from './ServiceItem'

const services = contentRepository.getServices()
const serviceIds = services.map((_, i) => `service-${i + 1}`)

export function Services() {
  const active = useActiveSection(serviceIds)
  const activeIndex = Math.max(serviceIds.indexOf(active ?? ''), 0)

  return (
    <Section
      id="services"
      index="03"
      label="What I do"
      title="Three ways I turn ideas into working software."
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <p
              aria-hidden
              className="relative text-[clamp(8rem,17vw,16rem)] leading-none font-semibold tracking-[-0.06em]"
            >
              {/* All numbers stacked; the active one slides up into place, the rest wait below. */}
              {services.map((service, i) => (
                <span
                  key={service.title}
                  className={cn(
                    'absolute inset-0 transition-all duration-700 ease-out-expo',
                    i === activeIndex ? 'text-accent' : 'translate-y-10 opacity-0',
                  )}
                >
                  {pad(i + 1)}
                </span>
              ))}
              <span className="invisible">00</span>
            </p>
            <ol className="mt-10 grid gap-3">
              {services.map((service, i) => (
                <li
                  key={service.title}
                  className={cn(
                    'flex items-center gap-4 text-xl font-medium tracking-tight transition-colors duration-500',
                    i === activeIndex ? 'text-ink' : 'text-faint',
                  )}
                >
                  <span
                    className={cn(
                      'h-px transition-all duration-700 ease-out-expo',
                      i === activeIndex ? 'w-12 bg-accent' : 'w-6 bg-line',
                    )}
                  />
                  {service.title}
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div className="grid gap-24">
          {services.map((service, i) => (
            <ServiceItem key={service.title} id={serviceIds[i]} index={i + 1} service={service} />
          ))}
        </div>
      </div>
    </Section>
  )
}
