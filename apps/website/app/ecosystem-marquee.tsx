'use client'

import type { SupportedLanguageFamily } from '@vidro/core'
import { supportedLanguageFamilies } from '@vidro/core'
import { useEffect, useState } from 'react'

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return reduced
}

type LogoFile = 'python' | 'java' | 'c' | 'cplusplus' | 'r' | 'javascript' | 'php' | 'rust' | 'csharp' | 'swift' | 'typescript' | 'ruby' | 'dart' | 'kotlin' | 'go'

type Presentation = {
  label: string
  logos: readonly LogoFile[]
}

const presentation: Record<SupportedLanguageFamily, Presentation> = {
  python: { label: 'Python', logos: ['python'] },
  java: { label: 'Java', logos: ['java'] },
  'c-cpp': { label: 'C and C++', logos: ['c', 'cplusplus'] },
  r: { label: 'R', logos: ['r'] },
  javascript: { label: 'JavaScript', logos: ['javascript'] },
  php: { label: 'PHP', logos: ['php'] },
  rust: { label: 'Rust', logos: ['rust'] },
  csharp: { label: 'C#', logos: ['csharp'] },
  swift: { label: 'Swift', logos: ['swift'] },
  typescript: { label: 'TypeScript', logos: ['typescript'] },
  ruby: { label: 'Ruby', logos: ['ruby'] },
  dart: { label: 'Dart', logos: ['dart'] },
  kotlin: { label: 'Kotlin', logos: ['kotlin'] },
  go: { label: 'Go', logos: ['go'] },
}

const families: readonly SupportedLanguageFamily[] = supportedLanguageFamilies

export function EcosystemMarquee() {
  const reducedMotion = useReducedMotion()
  const tracks = reducedMotion ? [families] : [families, families]

  return (
    <div className="relative mt-8 w-full max-w-[40rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={
          reducedMotion
            ? 'flex gap-8 overflow-x-auto px-4 py-1'
            : 'flex w-max animate-[vidro-marquee_32s_linear_infinite] gap-8 py-1'
        }
      >
        {tracks.map((track, index) => (
          <ul
            aria-hidden={index > 0}
            className="flex shrink-0 items-center gap-8"
            key={index === 0 ? 'primary' : 'duplicate'}
          >
            {track.map((family) => {
              const item = presentation[family]
              return (
                <li key={`${index}-${family}`}>
                  <span
                    aria-label={item.label}
                    className="inline-flex h-7 items-center gap-1.5 rounded-sm opacity-55 grayscale transition duration-150 hover:opacity-100 hover:grayscale-0 focus-visible:opacity-100 focus-visible:grayscale-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:h-8"
                    role="img"
                    tabIndex={index > 0 ? -1 : 0}
                  >
                    {item.logos.map((logo) => (
                      <img
                        alt=""
                        className="h-[22px] w-auto sm:h-7"
                        key={logo}
                        src={`/languages/${logo}.svg`}
                      />
                    ))}
                  </span>
                </li>
              )
            })}
          </ul>
        ))}
      </div>
    </div>
  )
}
