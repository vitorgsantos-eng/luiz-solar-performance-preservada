import { cn } from "@/lib/utils";
import logoImg from "@/assets/luiz-solar-logo.jpg";

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
          "h-12 w-auto md:h-14 object-contain transition-opacity",
          variant === "light" ? "brightness-0 invert" : "",
        )}
      />
    </a>
  );
};