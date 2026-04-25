import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar Diagnóstico pelo WhatsApp"
      className="group fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-5 py-3.5 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] hover:shadow-[0_14px_38px_-8px_rgba(37,211,102,0.7)] transition-all hover:-translate-y-0.5"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
          <MessageCircle size={20} strokeWidth={1.8} className="relative" />
        </span>
        <MessageCircle size={20} strokeWidth={1.8} className="relative" />
      </span>
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.18em] text-white/75">WhatsApp</span>
        <span className="text-sm font-medium">Agendar Diagnóstico</span>
      </span>
    </a>
  );
};
