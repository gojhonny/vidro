# 005 — Scaffolding

Scope: `vidro init`.

Use detect > infer > ask.

Do not ask questions for facts that can be determined from the repository. In particular, do not prompt for targets, PATHs, runtime/framework, env files, env-name mappings, secret conversion, literal conversion, empty-value behavior, ignore-file edits, package scripts, CI hooks, or immediate generation.

If detection is confident, apply the deterministic convention and summarize it. Ask only when ambiguity would make two materially different scaffolds equally plausible.
