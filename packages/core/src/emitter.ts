import type { VidroEnvironment, VidroProjectIR, VidroTarget } from './ir.js'

export interface EmitRequest {
  readonly project: VidroProjectIR
  readonly target: VidroTarget
  readonly environment: VidroEnvironment
}

export interface EmitResult {
  readonly path: string
  readonly content: string
}

export interface VidroEmitter {
  readonly id: string
  emit(request: EmitRequest): readonly EmitResult[]
}
