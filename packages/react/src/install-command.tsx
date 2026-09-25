'use client'

import { CopyButton } from './copy-button.js'
import { MotionTabs } from './motion-tabs.js'

export const PACKAGE_MANAGERS = ['npx', 'npm', 'pnpm', 'bun', 'yarn'] as const

export type PackageManager = (typeof PACKAGE_MANAGERS)[number]

export const INSTALL_COMMANDS: Record<PackageManager, string> = {
  npx: 'npx vidro',
  npm: 'npm exec vidro',
  pnpm: 'pnpm dlx vidro',
  bun: 'bunx vidro',
  yarn: 'yarn dlx vidro',
}

export function InstallCommand({
  onValueChange,
  value,
}: {
  onValueChange: (value: PackageManager) => void
  value: PackageManager
}) {
  const command = INSTALL_COMMANDS[value]

  return (
    <div className="w-full rounded-lg border border-line/80 bg-white/50 shadow-glass backdrop-blur-md">
      <MotionTabs
        label="Package manager"
        onValueChange={(id) => {
          if (isPackageManager(id)) {
            onValueChange(id)
          }
        }}
        tabs={PACKAGE_MANAGERS.map((id) => ({ id, label: id }))}
        value={value}
      />
      <div className="flex h-12 items-center justify-between gap-3 border-t border-line/70 px-3">
        <code className="min-w-[14ch] truncate font-mono text-sm text-foreground">{command}</code>
        <CopyButton label={`Copy ${command}`} text={command} />
      </div>
    </div>
  )
}

function isPackageManager(value: string): value is PackageManager {
  return PACKAGE_MANAGERS.some((manager) => manager === value)
}
