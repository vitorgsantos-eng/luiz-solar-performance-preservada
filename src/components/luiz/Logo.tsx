import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export const Logo = ({ className, variant = "default" }: LogoProps) => {
  const text = variant === "light" ? "text-offwhite" : "text-graphite";
  const border = variant === "light" ? "border-offwhite/40" : "border-graphite";
  return (
    <a href="#inicio" className={cn("inline-flex items-center gap-3 group", className)}>
      <span
        className={cn(
          "relative flex h-10 w-10 items-center justify-center border",
          border,
        )}
      >
        <SunMark />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-semibold tracking-[0.18em]", text)}>
          LUIZ SOLAR
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[hsl(var(--sage))]">
          Manutenção · Diagnóstico
        </span>
      </span>
    </a>
  );
};

const SunMark = () => (
  <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="hsl(var(--orange))" strokeWidth="1.2" strokeLinecap="round">
    <circle cx="16" cy="16" r="4.5" fill="hsl(var(--orange))" stroke="none" />
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const x1 = 16 + Math.cos(angle) * 7;
      const y1 = 16 + Math.sin(angle) * 7;
      const x2 = 16 + Math.cos(angle) * 13;
      const y2 = 16 + Math.sin(angle) * 13;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
  </svg>
);