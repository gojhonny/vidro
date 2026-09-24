'use client'

import { CopyButton } from '@vidro/react'
import { useRef, type ComponentProps } from 'react'

export function DocsPre({ children, className, ...props }: ComponentProps<'pre'>) {
  const ref = useRef<HTMLPreElement>(null)

  return (
    <div className="relative my-6">
      <pre
        {...props}
        className={`overflow-x-auto bg-ice pr-12 font-mono text-sm ${className ?? ''}`}
        ref={ref}
      >
        {children}
      </pre>
      <div className="absolute top-2 right-2">
        <CopyButton
          getText={() => ref.current?.innerText ?? ''}
          label="Copy code"
        />
      </div>
    </div>
  )
}
