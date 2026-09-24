const shards = [
  {
    id: 'upper-left',
    className: 'left-[-6%] top-[-8%] h-[62%] w-[58%]',
    clipPath: 'polygon(6% 18%, 78% 4%, 96% 42%, 58% 86%, 12% 74%, 0% 36%)',
    background:
      'linear-gradient(128deg, rgb(255 255 255 / 0.72), rgb(216 230 235 / 0.55) 48%, rgb(248 251 252 / 0.05))',
    opacity: 0.9,
  },
  {
    id: 'upper-right',
    className: 'right-[-10%] top-[-4%] h-[54%] w-[52%]',
    clipPath: 'polygon(18% 8%, 92% 0%, 100% 48%, 64% 90%, 8% 62%)',
    background:
      'linear-gradient(210deg, rgb(255 255 255 / 0.8), rgb(234 243 246 / 0.5) 42%, rgb(216 230 235 / 0.28))',
    opacity: 0.75,
  },
  {
    id: 'mid-left',
    className: 'left-[-4%] top-[28%] h-[48%] w-[46%]',
    clipPath: 'polygon(0% 22%, 70% 6%, 100% 48%, 62% 96%, 8% 78%)',
    background:
      'linear-gradient(160deg, rgb(255 255 255 / 0.35), rgb(216 230 235 / 0.42))',
    opacity: 0.55,
    mixBlendMode: 'soft-light' as const,
  },
  {
    id: 'mid-right',
    className: 'right-[2%] top-[22%] h-[50%] w-[44%]',
    clipPath: 'polygon(22% 0%, 100% 18%, 88% 78%, 16% 100%, 0% 42%)',
    background:
      'linear-gradient(24deg, rgb(234 243 246 / 0.7), rgb(255 255 255 / 0.2) 60%)',
    opacity: 0.6,
  },
  {
    id: 'lower-left',
    className: 'bottom-[-8%] left-[-2%] h-[42%] w-[50%]',
    clipPath: 'polygon(4% 20%, 74% 0%, 100% 46%, 48% 100%, 0% 72%)',
    background:
      'linear-gradient(18deg, rgb(255 255 255 / 0.65), rgb(216 230 235 / 0.35))',
    opacity: 0.5,
  },
  {
    id: 'lower-right',
    className: 'right-[-8%] bottom-[-6%] h-[46%] w-[56%]',
    clipPath: 'polygon(16% 8%, 86% 0%, 100% 58%, 42% 100%, 0% 64%, 8% 28%)',
    background:
      'linear-gradient(300deg, rgb(255 255 255 / 0.7), rgb(234 243 246 / 0.4) 55%, rgb(216 230 235 / 0.15))',
    opacity: 0.62,
  },
  {
    id: 'origin-a',
    className: 'left-[28%] top-[18%] h-[36%] w-[34%]',
    clipPath: 'polygon(40% 0%, 100% 28%, 72% 100%, 0% 64%, 12% 22%)',
    background:
      'linear-gradient(145deg, rgb(255 255 255 / 0.85), rgb(216 230 235 / 0.25))',
    opacity: 0.45,
  },
  {
    id: 'origin-b',
    className: 'left-[48%] top-[36%] h-[32%] w-[30%]',
    clipPath: 'polygon(18% 0%, 100% 22%, 70% 100%, 0% 78%, 8% 30%)',
    background:
      'linear-gradient(200deg, rgb(255 255 255 / 0.55), rgb(234 243 246 / 0.45))',
    opacity: 0.4,
    mixBlendMode: 'soft-light' as const,
  },
  {
    id: 'facet-thin',
    className: 'left-[18%] top-[8%] h-[70%] w-[28%]',
    clipPath: 'polygon(46% 0%, 62% 0%, 38% 100%, 18% 100%)',
    background:
      'linear-gradient(180deg, rgb(255 255 255 / 0.7), rgb(216 230 235 / 0.15))',
    opacity: 0.35,
  },
  {
    id: 'facet-offset',
    className: 'right-[12%] top-[6%] h-[78%] w-[22%]',
    clipPath: 'polygon(30% 0%, 58% 8%, 70% 100%, 8% 92%)',
    background:
      'linear-gradient(12deg, rgb(255 255 255 / 0.15), rgb(234 243 246 / 0.55), rgb(255 255 255 / 0.1))',
    opacity: 0.33,
  },
  {
    id: 'chip',
    className: 'left-[40%] top-[46%] h-[22%] w-[24%]',
    clipPath: 'polygon(20% 10%, 90% 0%, 100% 70%, 40% 100%, 0% 50%)',
    background: 'linear-gradient(90deg, rgb(255 255 255 / 0.8), rgb(216 230 235 / 0.3))',
    opacity: 0.38,
  },
  {
    id: 'lower-center',
    className: 'bottom-[4%] left-[30%] h-[28%] w-[36%]',
    clipPath: 'polygon(10% 30%, 70% 0%, 100% 55%, 48% 100%, 0% 70%)',
    background:
      'linear-gradient(160deg, rgb(255 255 255 / 0.5), rgb(234 243 246 / 0.2))',
    opacity: 0.42,
  },
] as const

export function CrackedGlassBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute left-[8%] top-[6%] h-[46%] w-[42%] rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.85),transparent_68%)] blur-2xl" />
      <div className="absolute right-[4%] bottom-[8%] h-[40%] w-[46%] rounded-full bg-[radial-gradient(circle,rgb(234_243_246/0.9),transparent_70%)] blur-3xl" />
      {shards.map((shard) => (
        <div
          className={`absolute ${shard.className}`}
          key={shard.id}
          style={{
            clipPath: shard.clipPath,
            background: shard.background,
            opacity: shard.opacity,
            ...('mixBlendMode' in shard ? { mixBlendMode: shard.mixBlendMode } : {}),
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(248_251_252/0.94)_0%,rgb(248_251_252/0.72)_36%,rgb(248_251_252/0.28)_62%,transparent_78%)]" />
    </div>
  )
}
