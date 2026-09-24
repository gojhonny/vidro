# 003 — Secrets

Scope: import, scaffold, compiler, emitters, show/logging.

Vidro is not a secret manager.

Tracked `.vidro` source must not contain imported secret values. Secret/private values are represented as external references:

```css
RESEND_API_KEY: $RESEND_API_KEY;
```

When displaying a resolved external value, mask it. Never print the full value through `vidro show`, validation output, debug output, or generated diagnostics.

Client-bundled configuration must not be labeled secret merely because it is sourced externally.
