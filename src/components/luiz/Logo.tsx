import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export const Logo = ({ className, variant = "default" }: LogoProps) => {
  const isLight = variant === "light";
  const stroke = isLight ? "hsl(var(--offwhite))" : "hsl(var(--graphite))";
  const text = isLight ? "hsl(var(--offwhite))" : "hsl(var(--graphite))";
  const sun = "hsl(var(--orange))";
  const rays = isLight ? "hsl(var(--graphite))" : "hsl(var(--offwhite))";

  return (
    <a
      href="#inicio"
      aria-label="Luiz Solar — Início"
      className={cn("inline-flex items-center gap-3 group", className)}
    >
      {/* Symbol */}
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 md:h-10 md:w-10 shrink-0"
        aria-hidden="true"
      >
        <rect
          x="2.5"
          y="2.5"
          width="43"
          height="43"
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
        />
        <clipPath id="luiz-logo-clip">
          <rect x="4" y="4" width="40" height="40" />
        </clipPath>
        <g clipPath="url(#luiz-logo-clip)">
          <rect x="4" y="4" width="40" height="40" fill={sun} />
          {/* Sun rays emanating from upper-right */}
          <g stroke={rays} strokeWidth="1.6" strokeLinecap="square">
            <line x1="40" y1="8" x2="6" y2="14" />
            <line x1="40" y1="8" x2="6" y2="22" />
            <line x1="40" y1="8" x2="6" y2="30" />
            <line x1="40" y1="8" x2="6" y2="38" />
            <line x1="40" y1="8" x2="14" y2="44" />
            <line x1="40" y1="8" x2="24" y2="44" />
            <line x1="40" y1="8" x2="34" y2="44" />
          </g>
          <circle cx="40" cy="8" r="5" fill={sun} />
        </g>
      </svg>
      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-semibold tracking-[0.18em] text-[15px] md:text-[17px]"
          style={{ color: text }}
        >
          LUIZ
        </span>
        <span
          className="font-display font-light tracking-[0.32em] text-[11px] md:text-[12px] mt-1"
          style={{ color: text, opacity: 0.85 }}
        >
          SOLAR
        </span>
      </span>
    </a>
  );
};