import { Reveal, Tag } from '@/shared/components'
import { cn } from '@/shared/lib/cn'
import type { Role } from '@/types'

/** One timeline entry: sticky dates on the left, the role on the right. */
export function RoleCard({ role }: { role: Role }) {
  const current = role.end === null

  return (
    <li
      id={role.slug}
      className="group relative pb-20 pl-10 md:grid md:grid-cols-12 md:gap-8 md:pl-0"
    >
      <span
        aria-hidden
        className={cn(
          'absolute top-2 left-0 size-[1.15rem] rounded-full border-2 transition-transform duration-500 ease-out-expo group-hover:scale-125 md:left-[calc(25%-1.5rem)]',
          current ? 'animate-pulse-dot border-accent bg-accent' : 'border-faint bg-canvas',
        )}
      />

      <div className="self-start md:sticky md:top-32 md:col-span-3 md:pr-10 md:text-right">
        <p className="font-mono text-sm text-ink">{role.start}</p>
        <p className="font-mono text-sm text-muted">— {role.end ?? 'Present'}</p>
        <p className="mt-3 font-mono text-[0.68rem] tracking-widest text-accent uppercase">
          {current ? 'Current role' : role.duration}
        </p>
      </div>

      <Reveal className="mt-4 md:col-span-9 md:mt-0 md:pl-10">
        <h2 className="display-h3 transition-colors duration-300 group-hover:text-accent">
          {role.company}
        </h2>
        <p className="mt-2 text-xl text-accent/80">
          {role.title} · {role.location}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{role.summary}</p>

        <h3 className="mt-10 mb-4 eyebrow">Highlights</h3>
        <ul className="grid max-w-3xl gap-3">
          {role.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-4 leading-relaxed text-muted">
              <span className="mt-3 h-px w-4 shrink-0 bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>

        <h3 className="mt-10 mb-4 eyebrow">Stack</h3>
        <div className="flex flex-wrap gap-2">
          {role.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </Reveal>
    </li>
  )
}
