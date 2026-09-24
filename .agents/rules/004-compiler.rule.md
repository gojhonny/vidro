# 004 — Compiler boundaries

Scope: compiler and emitters.

The required pipeline is:

```text
Langium source → AST → semantic validation → Vidro IR → emitter
```

No emitter may depend directly on raw source text.

The IR must stay independent from any one output format.

Repository/language detection chooses policies and emitters; it must not mutate DSL semantics.

Prefer deterministic parsing, normalization, validation, and output generation.
