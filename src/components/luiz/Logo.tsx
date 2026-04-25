import { cn } from "@/lib/utils";
import logoImg from "@/assets/luiz-solar-logo.png";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export const Logo = ({ className, variant = "default" }: LogoProps) => {
  return (
    <a
      href="#inicio"
      aria-label="Luiz Solar — Início"
      className={cn("inline-flex items-center group", className)}
    >
      <img
        src={logoImg}
        alt="Luiz Solar"
        className={cn(
          "h-14 w-auto md:h-16 object-contain transition-opacity",
          variant === "light" ? "[filter:brightness(0)_invert(1)]" : "",
        )}
      />
    </a>
  );
};