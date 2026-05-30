import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

const steps = [
  "Conte o que percebeu no sistema ou na fatura",
  "Receba uma orientação inicial pelo WhatsApp",
  "Agende a avaliação quando fizer sentido",
];

export const FinalCtaSection = () => {
  return (
    <section className="py-20 md:py-32 bg-graphite text-offwhite relative overflow-hidden">
      <div className="absolute inset-0 solar-grid-bg opacity-10 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[hsl(var(--orange))]/15 blur-3xl pointer-events-none" />

      <div className="container-luiz relative max-w-5xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow text-[hsl(var(--orange))]">Agende seu diagnóstico</span>
            <span className="hairline" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
            Não espere a conta subir para descobrir que seu sistema perdeu desempenho.
          </h2>

          <p className="lead mt-6 text-offwhite/75 max-w-2xl mx-auto">
            Fale com a Luiz Solar e receba uma orientação clara sobre geração, fatura, limpeza,
            manutenção ou reparo. Sem exagero, sem promessa vazia e sem indicação antes da análise.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {steps.map((step, i) => (
            <div key={step} className="bg-graphite/85 p-6 text-left">
              <div className="mb-5 flex items-center justify-between">
                <CheckCircle2 size={18} strokeWidth={1.5} className="text-[hsl(var(--orange))]" />
                <span className="font-mono text-[10px] text-offwhite/35">0{i + 1}</span>
              </div>
              <p className="text-sm leading-relaxed text-offwhite/75">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-[hsl(28_90%_48%)] transition-colors"
          >
            <MessageCircle size={18} strokeWidth={1.6} />
            Falar com a Luiz Solar pelo WhatsApp
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="max-w-xl text-xs leading-relaxed text-offwhite/45">
            O primeiro contato serve para entender sua situação e indicar o melhor próximo passo.
          </p>
        </div>
      </div>
    </section>
  );
};
