interface BreathingOrbProps {
  label?: string;
  caption?: string;
  size?: number;
}

export default function BreathingOrb({
  label = 'BREATHE IN',
  caption = '"Be still..."',
  size = 320,
}: BreathingOrbProps) {
  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
    >
      {[0, 1.5, 3].map((delay) => (
        <span
          key={delay}
          className="absolute rounded-full border border-pine/20 animate-ring"
          style={{
            width: size * 0.62,
            height: size * 0.62,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
      <div
        className="relative rounded-full flex flex-col items-center justify-center text-center animate-breathe shadow-[0_20px_60px_-15px_rgba(210,120,80,0.55)]"
        style={{
          width: size * 0.62,
          height: size * 0.62,
          background: 'radial-gradient(circle at 35% 30%, #f0a37e, #d98662 70%)',
        }}
      >
        <span className="text-[11px] tracking-[0.2em] text-white/90 font-semibold">
          {label}
        </span>
        <span className="font-serif-heading italic text-white text-xl mt-1">
          {caption}
        </span>
      </div>
    </div>
  );
}
