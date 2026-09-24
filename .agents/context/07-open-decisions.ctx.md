# Open decisions

These are intentionally unresolved. Do not silently decide them during unrelated work.

1. Exact external-value resolution precedence for `KEY: $KEY;`.
2. Ownership/merge behavior when a generated environment file also stores private external values.
3. Whether `default` participates in a merged resolved environment or only maps to the physical `.env` file and lets the target ecosystem define precedence.
4. Which native non-dotenv emitters ship in the first public release for Java/Kotlin, R, C#, and Swift.
5. Whether generated IR is always materialized to disk or can be ephemeral for some commands while retaining `.vidro/.generated/` as the canonical cache location.
6. Public NPM package name. The internal CLI package is intentionally private for now.
