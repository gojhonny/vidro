'use client'

import { motion as motionTokens } from '@vidro/design-system'
import { motion, useReducedMotion } from 'motion/react'
import { useRef, type KeyboardEvent } from 'react'

export interface MotionTab {
  readonly id: string
  readonly label: string
}

export function MotionTabs({
  label,
  onValueChange,
  tabs,
  value,
}: {
  label: string
  onValueChange: (id: string) => void
  tabs: readonly MotionTab[]
  value: string
}) {
  const reducedMotion = useReducedMotion()
  const listRef = useRef<HTMLDivElement>(null)

  function moveTo(index: number) {
    const next = tabs[index]
    if (!next) {
      return
    }
    onValueChange(next.id)
    listRef.current
      ?.querySelector<HTMLButtonElement>(`[data-tab-id="${next.id}"]`)
      ?.focus()
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = tabs.findIndex((tab) => tab.id === value)
    if (index < 0) {
      return
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      moveTo((index + 1) % tabs.length)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      moveTo((index - 1 + tabs.length) % tabs.length)
    } else if (event.key === 'Home') {
      event.preventDefault()
      moveTo(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      moveTo(tabs.length - 1)
    }
  }

  return (
    <div
      aria-label={label}
      className="flex flex-nowrap gap-1 overflow-x-auto px-1.5 py-1.5"
      onKeyDown={onKeyDown}
      ref={listRef}
      role="tablist"
    >
      {tabs.map((tab) => {
        const selected = tab.id === value
        return (
          <button
            aria-selected={selected}
            className="relative shrink-0 rounded-md px-2.5 py-1 text-[0.8125rem] font-medium text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground data-[selected=true]:text-foreground"
            data-selected={selected}
            data-tab-id={tab.id}
            key={tab.id}
            onClick={() => onValueChange(tab.id)}
            role="tab"
            tabIndex={selected ? 0 : -1}
            type="button"
          >
            {selected ? (
              <motion.span
                className="absolute inset-0 rounded-md bg-surface shadow-[0_1px_2px_rgb(17_21_23/0.04)]"
                layoutId="vidro-motion-tab"
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: motionTokens.duration.normal, ease: motionTokens.ease }
                }
              />
            ) : null}
            <span className="relative">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
