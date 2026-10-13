const STAGGER_MS = 140

/** Words blur in one after another on mount. CSS only. */
export function BlurText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="flex flex-wrap gap-x-[0.25em]">
        {text.split(' ').map((word, i) => (
          <span
            key={i}
            className="inline-block animate-blur-in"
            style={{ animationDelay: `${delay + i * STAGGER_MS}ms` }}
          >
            {word}
          </span>
        ))}
      </span>
    </>
  )
}
