type Shard = {
  id: string
  className: string
  clipPath: string
  background: string
  opacity: number
  mixBlendMode?: 'soft-light' | 'multiply' | 'screen'
}

const shards: readonly Shard[] = [
  {
    id: 'plane-nw',
    className: 'left-[-8%] top-[-10%] h-[58%] w-[52%]',
    clipPath: 'polygon(8% 22%, 82% 0%, 100% 46%, 54% 88%, 6% 70%, 0% 34%)',
    background: 'linear-gradient(132deg, rgb(255 255 255 / 0.88), rgb(216 230 235 / 0.72) 55%, rgb(180 198 206 / 0.28))',
    opacity: 0.95,
  },
  {
    id: 'plane-ne',
    className: 'right-[-12%] top-[-6%] h-[52%] w-[56%]',
    clipPath: 'polygon(12% 8%, 90% 0%, 100% 42%, 68% 92%, 4% 58%)',
    background: 'linear-gradient(206deg, rgb(255 255 255 / 0.9), rgb(234 243 246 / 0.62) 40%, rgb(168 188 198 / 0.34))',
    opacity: 0.88,
  },
  {
    id: 'plane-sw',
    className: 'bottom-[-10%] left-[-6%] h-[48%] w-[50%]',
    clipPath: 'polygon(0% 28%, 72% 4%, 100% 52%, 46% 100%, 0% 74%)',
    background: 'linear-gradient(18deg, rgb(216 230 235 / 0.7), rgb(255 255 255 / 0.45))',
    opacity: 0.8,
  },
  {
    id: 'plane-se',
    className: 'right-[-8%] bottom-[-8%] h-[50%] w-[54%]',
    clipPath: 'polygon(18% 6%, 88% 0%, 100% 62%, 40% 100%, 0% 58%, 10% 24%)',
    background: 'linear-gradient(300deg, rgb(255 255 255 / 0.75), rgb(190 208 216 / 0.45) 48%, rgb(234 243 246 / 0.2))',
    opacity: 0.84,
  },
  {
    id: 'mid-west',
    className: 'left-[-2%] top-[24%] h-[42%] w-[38%]',
    clipPath: 'polygon(0% 16%, 78% 0%, 100% 54%, 48% 100%, 0% 72%)',
    background: 'linear-gradient(160deg, rgb(255 255 255 / 0.55), rgb(176 196 206 / 0.5))',
    opacity: 0.72,
    mixBlendMode: 'soft-light',
  },
  {
    id: 'mid-east',
    className: 'right-[0%] top-[18%] h-[46%] w-[36%]',
    clipPath: 'polygon(22% 0%, 100% 14%, 86% 84%, 8% 100%, 0% 38%)',
    background: 'linear-gradient(24deg, rgb(234 243 246 / 0.8), rgb(150 172 182 / 0.35))',
    opacity: 0.7,
  },
  {
    id: 'center-left',
    className: 'left-[18%] top-[30%] h-[36%] w-[30%] max-sm:opacity-40',
    clipPath: 'polygon(16% 8%, 92% 0%, 100% 62%, 36% 100%, 0% 48%)',
    background: 'linear-gradient(145deg, rgb(255 255 255 / 0.7), rgb(200 216 224 / 0.4))',
    opacity: 0.55,
  },
  {
    id: 'center-right',
    className: 'right-[16%] top-[34%] h-[32%] w-[28%] max-sm:opacity-35',
    clipPath: 'polygon(8% 0%, 100% 22%, 70% 100%, 0% 72%)',
    background: 'linear-gradient(200deg, rgb(255 255 255 / 0.5), rgb(168 190 200 / 0.42))',
    opacity: 0.58,
    mixBlendMode: 'soft-light',
  },
  {
    id: 'cluster-a',
    className: 'left-[8%] top-[8%] h-[28%] w-[26%]',
    clipPath: 'polygon(20% 0%, 100% 18%, 64% 100%, 0% 62%)',
    background: 'linear-gradient(120deg, rgb(255 255 255 / 0.95), rgb(186 206 214 / 0.55))',
    opacity: 0.66,
  },
  {
    id: 'cluster-b',
    className: 'left-[42%] top-[6%] h-[24%] w-[22%]',
    clipPath: 'polygon(10% 12%, 88% 0%, 100% 70%, 28% 100%, 0% 40%)',
    background: 'linear-gradient(40deg, rgb(220 232 238 / 0.85), rgb(255 255 255 / 0.3))',
    opacity: 0.62,
  },
  {
    id: 'cluster-c',
    className: 'right-[6%] top-[42%] h-[30%] w-[24%]',
    clipPath: 'polygon(0% 20%, 76% 0%, 100% 48%, 42% 100%)',
    background: 'linear-gradient(250deg, rgb(255 255 255 / 0.8), rgb(160 182 192 / 0.4))',
    opacity: 0.64,
  },
  {
    id: 'seam-left',
    className: 'left-[22%] top-[0%] h-[100%] w-[8%] max-sm:hidden',
    clipPath: 'polygon(38% 0%, 70% 0%, 42% 100%, 8% 100%)',
    background: 'linear-gradient(180deg, rgb(255 255 255 / 0.65), rgb(176 196 206 / 0.45), rgb(255 255 255 / 0.2))',
    opacity: 0.55,
  },
  {
    id: 'seam-right',
    className: 'right-[18%] top-[0%] h-[100%] w-[7%] max-sm:hidden',
    clipPath: 'polygon(20% 0%, 62% 4%, 80% 100%, 10% 96%)',
    background: 'linear-gradient(180deg, rgb(210 224 230 / 0.7), rgb(255 255 255 / 0.15))',
    opacity: 0.5,
  },
  {
    id: 'seam-diag',
    className: 'left-[30%] top-[12%] h-[70%] w-[18%] max-sm:hidden',
    clipPath: 'polygon(70% 0%, 88% 0%, 20% 100%, 0% 100%)',
    background: 'linear-gradient(160deg, rgb(255 255 255 / 0.55), rgb(150 174 184 / 0.28))',
    opacity: 0.42,
    mixBlendMode: 'soft-light',
  },
  {
    id: 'lower-mid',
    className: 'bottom-[6%] left-[28%] h-[26%] w-[34%]',
    clipPath: 'polygon(8% 34%, 64% 0%, 100% 48%, 52% 100%, 0% 72%)',
    background: 'linear-gradient(16deg, rgb(255 255 255 / 0.6), rgb(190 208 216 / 0.35))',
    opacity: 0.5,
  },
  {
    id: 'upper-chip',
    className: 'left-[58%] top-[14%] h-[18%] w-[16%]',
    clipPath: 'polygon(12% 8%, 100% 0%, 78% 100%, 0% 64%)',
    background: 'linear-gradient(90deg, rgb(255 255 255 / 0.9), rgb(176 198 208 / 0.45))',
    opacity: 0.6,
  },
  {
    id: 'west-chip',
    className: 'left-[4%] top-[58%] h-[20%] w-[22%]',
    clipPath: 'polygon(0% 24%, 80% 0%, 100% 68%, 18% 100%)',
    background: 'linear-gradient(200deg, rgb(234 243 246 / 0.9), rgb(160 182 192 / 0.35))',
    opacity: 0.58,
  },
  {
    id: 'east-chip',
    className: 'right-[4%] top-[8%] h-[18%] w-[18%]',
    clipPath: 'polygon(16% 0%, 100% 20%, 72% 100%, 0% 48%)',
    background: 'linear-gradient(140deg, rgb(255 255 255 / 0.85), rgb(186 206 214 / 0.4))',
    opacity: 0.57,
  },
  {
    id: 'origin-low',
    className: 'left-[48%] bottom-[10%] h-[24%] w-[22%]',
    clipPath: 'polygon(20% 0%, 100% 30%, 60% 100%, 0% 70%)',
    background: 'linear-gradient(20deg, rgb(200 216 224 / 0.65), rgb(255 255 255 / 0.25))',
    opacity: 0.48,
  },
  {
    id: 'north-sliver',
    className: 'left-[34%] top-[-2%] h-[22%] w-[28%]',
    clipPath: 'polygon(0% 40%, 48% 0%, 100% 28%, 62% 100%)',
    background: 'linear-gradient(110deg, rgb(255 255 255 / 0.75), rgb(168 190 200 / 0.4))',
    opacity: 0.52,
  },
  {
    id: 'south-sliver',
    className: 'right-[24%] bottom-[-4%] h-[22%] w-[26%]',
    clipPath: 'polygon(10% 0%, 90% 16%, 100% 80%, 20% 100%, 0% 36%)',
    background: 'linear-gradient(250deg, rgb(255 255 255 / 0.55), rgb(180 200 210 / 0.4))',
    opacity: 0.5,
  },
  {
    id: 'far-left',
    className: 'left-[-4%] top-[40%] h-[24%] w-[16%]',
    clipPath: 'polygon(0% 10%, 100% 0%, 80% 100%, 0% 78%)',
    background: 'linear-gradient(90deg, rgb(216 230 235 / 0.8), rgb(255 255 255 / 0.2))',
    opacity: 0.66,
  },
  {
    id: 'far-right',
    className: 'right-[-6%] top-[28%] h-[22%] w-[16%]',
    clipPath: 'polygon(20% 0%, 100% 18%, 100% 90%, 0% 60%)',
    background: 'linear-gradient(270deg, rgb(190 208 216 / 0.7), rgb(255 255 255 / 0.25))',
    opacity: 0.6,
  },
  {
    id: 'quiet-edge',
    className: 'left-[62%] top-[58%] h-[16%] w-[18%] max-sm:hidden',
    clipPath: 'polygon(8% 20%, 100% 0%, 72% 100%, 0% 80%)',
    background: 'linear-gradient(30deg, rgb(255 255 255 / 0.7), rgb(176 196 206 / 0.3))',
    opacity: 0.4,
    mixBlendMode: 'screen',
  },
]

export function CrackedGlassBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute left-[6%] top-[4%] h-[42%] w-[36%] rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.9),transparent_70%)] blur-2xl" />
      <div className="absolute right-[2%] bottom-[6%] h-[38%] w-[40%] rounded-full bg-[radial-gradient(circle,rgb(216_230_235/0.85),transparent_72%)] blur-3xl" />
      <div className="absolute left-[40%] top-[20%] h-[30%] w-[24%] rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.55),transparent_68%)] blur-2xl" />
      {shards.map((shard) => (
        <div
          className={`absolute ${shard.className}`}
          key={shard.id}
          style={{
            clipPath: shard.clipPath,
            background: shard.background,
            opacity: shard.opacity,
            ...(shard.mixBlendMode ? { mixBlendMode: shard.mixBlendMode } : {}),
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(248_251_252/0.93)_0%,rgb(248_251_252/0.72)_34%,rgb(248_251_252/0.22)_58%,transparent_76%)]" />
    </div>
  )
}
