'use client'

import { HOME_LOCALE_LABELS, HOME_LOCALES, type HomeLocale } from './home-locale'

export function LanguageSwitcher({
  locale,
  onSelect,
}: {
  locale: HomeLocale
  onSelect: (next: HomeLocale) => void
}) {
  return (
    <div
      aria-label="Language"
      className="inline-flex items-center gap-px rounded-full border border-line/80 bg-white/70 p-0.5 shadow-glass backdrop-blur-[16px] sm:gap-[0.15rem] sm:p-[0.2rem]"
      role="tablist"
    >
      {HOME_LOCALES.map((code) => {
        const selected = locale === code
        return (
          <button
            aria-selected={selected}
            className={`min-h-[1.7rem] rounded-full px-1.5 text-[0.64rem] font-[650] tracking-[0.03em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:px-[0.7rem] sm:text-[0.72rem] sm:tracking-[0.04em] ${
              selected
                ? 'bg-white/90 text-foreground'
                : 'bg-transparent text-muted hover:text-foreground'
            }`}
            key={code}
            onClick={() => onSelect(code)}
            role="tab"
            type="button"
          >
            {HOME_LOCALE_LABELS[code]}
          </button>
        )
      })}
    </div>
  )
}
