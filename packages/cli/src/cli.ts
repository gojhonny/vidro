#!/usr/bin/env node

const commands = new Set(['init', 'generate', 'validate', 'check', 'show'])

function printHelp(): void {
  process.stdout.write(
    [
      'Vidro — declarative environment compiler',
      '',
      'Usage:',
      '  vidro <command>',
      '',
      'Commands:',
      '  init       Detect a repository and scaffold .vidro/',
      '  generate   Compile Vidro source into environment outputs',
      '  validate   Validate source, references, and resolved configuration',
      '  check      Detect drift between Vidro source and managed outputs',
      '  show       Display resolved configuration with external values masked',
      ''
    ].join('\n')
  )
}

const command = process.argv[2]

if (!command || command === '--help' || command === '-h') {
  printHelp()
  process.exit(0)
}

if (!commands.has(command)) {
  process.stderr.write(`Unknown Vidro command: ${command}\n\n`)
  printHelp()
  process.exit(2)
}

process.stderr.write(
  `The "${command}" command is scaffolded but not implemented yet.\n`
)
process.exit(1)
