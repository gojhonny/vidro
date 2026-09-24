'use client'

import { AnimatedNumber } from './animated-number.js'

export function GithubStars({ count, href }: { count: number | null; href: string }) {
  const label =
    count === null ? 'Star Vidro on GitHub' : `Star Vidro on GitHub, ${count} stars`

  return (
    <a
      aria-label={label}
      className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium tracking-[0.01em] text-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:text-[0.86rem]"
      href={href}
    >
      <span aria-hidden="true">★</span>
      {count === null ? 'Star' : <AnimatedNumber value={count} />}
    </a>
  )
}
