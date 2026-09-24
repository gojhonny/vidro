export function VidroMark({ className = 'size-7' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <polygon fillOpacity="0.45" points="3,4 12,2 10,14 2,12" />
      <polygon fillOpacity="0.82" points="2,13 11,14 14,29 5,28" />
      <polygon fillOpacity="1" points="14,14 26,2 31,7 17,29" />
      <polygon fillOpacity="0.58" points="11,13 15,12 14,17 10,16" />
    </svg>
  )
}

export function VidroLogo() {
  return (
    <span className="inline-flex items-center gap-1.5 text-foreground sm:gap-2">
      <VidroMark className="size-6 shrink-0 sm:size-7" />
      <span className="text-[0.84rem] font-medium leading-none tracking-[-0.03em] sm:text-[0.95rem]">
        Vidro
      </span>
    </span>
  )
}
