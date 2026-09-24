import { atom } from 'jotai'
import type { PackageManager } from '@vidro/react'

export const packageManagerAtom = atom<PackageManager>('npx')
