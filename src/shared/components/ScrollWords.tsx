import type { CSSProperties } from 'react'

import { cn } from '@/shared/lib/cn'

/** Share of the scroll range the whole paragraph takes to sharpen, and each word's own window. */
const FROM = 10
const SPAN = 35
const WORD_WINDOW = 8

/** Each word sharpens as the paragraph scrolls by. The motion itself is CSS (`.scroll-words`). */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ')

  return (
    <p className={cn('scroll-words', className)}>
      {words.map((word, i) => {
        const start = FROM + (i / words.length) * SPAN
        const style = {
          '--start': `${start}%`,
          '--end': `${start + WORD_WINDOW}%`,
        } as CSSProperties
        return (
          <span key={i} style={style}>
            {word}{' '}
          </span>
        )
      })}
    </p>
  )
}
