export default function Logo({ subtitle = true }: { subtitle?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 64 64" className="shrink-0">
        <rect width="64" height="64" rx="14" fill="#F8EEE1" />
        <circle cx="32" cy="30" r="12" fill="#D98662" />
        <path
          d="M14 42 Q32 34 50 42"
          stroke="#2A4A45"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M10 50 Q32 40 54 50"
          stroke="#2A4A45"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
      <div className="text-left leading-tight">
        <div className="font-serif-heading text-xl text-pine">Still Waters</div>
        {subtitle && (
          <div className="text-[10px] tracking-[0.18em] text-ink-light/70 font-medium">
            MEDITATION &amp; DAILY PRAYER
          </div>
        )}
      </div>
    </div>
  );
}
