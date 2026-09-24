export type VidroValue =
  | {
      readonly kind: 'literal'
      readonly value: string
    }
  | {
      readonly kind: 'required'
    }
  | {
      readonly kind: 'external'
      readonly name: string
    }

export interface VidroVariable {
  readonly name: string
  readonly value: VidroValue
}

export interface VidroEnvironment {
  readonly name: string
  readonly variables: readonly VidroVariable[]
}

export interface VidroTarget {
  readonly name: string
  readonly path: string
  readonly environments: readonly VidroEnvironment[]
}

export interface VidroProjectIR {
  readonly schemaVersion: 1
  readonly project: string
  readonly targets: readonly VidroTarget[]
}
