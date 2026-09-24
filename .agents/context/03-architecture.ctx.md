# Compiler architecture

Vidro uses Langium for the DSL. The initial scaffold pins Langium and langium-cli 4.4.0.

## Pipeline

```text
.vidro/<project>.vidro
        ↓
      parser
        ↓
       AST
        ↓
 semantic validation
        ↓
     Vidro IR
        ↓
      emitter
        ↓
 environment/config files
```

The DSL must never emit target files directly.

## IR

The intermediate representation is independent from output formats and currently models:

- project
- targets
- target paths
- environments
- variables
- literal values
- required values
- external references

Generated IR belongs inside:

```text
.vidro/.generated/<project>.ir.json
```

This is compiler state, not the source of truth.

## Package boundary

- `@vidro/language`: Langium grammar and generated AST/language services.
- `@vidro/core`: semantic compiler, IR, detection, resolution, and emitter contracts.
- `@vidro/cli`: repository-facing CLI and scaffolding UX.

The first emitter should be a deterministic dotenv emitter. Additional formats should consume the same IR.
