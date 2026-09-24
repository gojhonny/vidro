# Supported language ecosystems

Vidro detects repository ecosystems, but compiles through format emitters rather than implementing a separate compiler for every programming language.

## Supported scope

The owner selected these ecosystems for support:

1. Python
2. Java
3. C/C++
4. R
5. JavaScript
6. PHP
7. Rust
8. C#
9. Swift
10. TypeScript
11. Ruby
12. Dart
13. Kotlin
14. Go

## Explicitly unsupported

Do not add support unless the owner changes this scope:

- COBOL
- Groovy
- Zig
- Visual Basic
- Haskell
- Perl
- Delphi/Pascal
- ABAP
- Scala
- Julia
- Lua
- VBA
- PowerShell
- MATLAB
- Ada
- Objective-C

## Format families

Most supported ecosystems can use a dotenv-compatible flat `KEY=value` representation. The important exceptions/corner cases are:

- Java/Kotlin: Spring properties/YAML are common and are application configuration rather than a universal dotenv standard.
- R: `.Renviron` is runtime-native and similar to dotenv but not identical in all parsing behavior.
- C#: `appsettings*.json` and environment-variable overlays are hierarchical.
- Swift: Apple build configuration and client-bundled configuration require special treatment; do not inherit Objective-C support merely because both use Xcode.
- C/C++: no universal dotenv convention; support must be evidence-based from repository files/libraries.

Language detection and output-format detection are separate concerns.
