import { ArrowRight, CheckCircle2, FileText, MessageCircle, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./constants";

const clarityItems = [
  {
    title: "Relatório técnico claro",
    text: "Avaliação organizada, com linguagem acessível e registro dos principais pontos observados no sistema.",
  },
  {
    title: "Recomendações priorizadas",
    text: "Separação entre o que merece atenção imediata, o que pode ser acompanhado e o que não exige ação urgente.",
  },
  {
    title: "Comunicação transparente",
    text: "Explicação objetiva, sem termos confusos e sem recomendar serviço sem justificativa técnica.",
  },
  {
    title: "Decisão com segurança",
    text: "Você entende o motivo de cada recomendação antes de aprovar limpeza, manutenção ou reparo.",
  },
];

const tags = ["Geração", "Fatura", "Inversor", "Módulos"];

export const ClaritySection = () => {
  return (
    <section id="clareza" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute -left-32 top-1/4 w-[420px] h-[420px] rounded-full bg-[hsl(var(--sage-soft))] blur-3xl opacity-60 pointer-events-none" />

      <div className="container-luiz relative grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Nossa promessa</span>
            </div>

            <h2 className="section-title">
              Você recebe clareza, <br />
              <span className="italic text-[hsl(var(--orange))]">não apenas um orçamento.</span>
            </h2>

            <p className="lead mt-6">
              Antes de recomendar qualquer manutenção ou reparo, a Luiz Solar organiza o que foi
              observado, explica o que merece atenção e orienta os próximos passos com critério
              técnico.
            </p>

            <div className="mt-8 border border-border bg-background p-5 flex items-start gap-4">
              <ShieldCheck
                size={22}
                strokeWidth={1.5}
                className="text-[hsl(var(--sage))] shrink-0 mt-0.5"
              />
              <p className="text-sm text-graphite/70 leading-relaxed">
                A decisão vem depois da explicação. O cliente entende o motivo antes de aprovar
                qualquer execução.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-graphite/30 px-7 py-4 text-sm font-medium text-graphite hover:bg-graphite hover:text-offwhite hover:border-graphite transition-colors group"
            >
              <MessageCircle size={16} strokeWidth={1.6} />
              Quero meu diagnóstico
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="relative bg-background border border-border shadow-[0_18px_50px_-36px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 px-7 py-6 border-b border-border bg-[hsl(var(--light-grey))]/40">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-[hsl(var(--orange))]/40 bg-[hsl(var(--orange-soft))]/60 shrink-0">
                    <FileText size={20} strokeWidth={1.4} className="text-[hsl(var(--orange))]" />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--sage))]">
                      Relatório de diagnóstico solar
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-graphite mt-1">
                      Avaliação Luiz Solar
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-graphite/40">REL · TÉCNICO</span>
              </div>

              <div className="px-7 pt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border bg-[hsl(var(--light-grey))]/35 px-3 py-1 text-[11px] text-graphite/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="divide-y divide-border mt-4">
                {clarityItems.map((item, i) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 px-7 py-6 group hover:bg-[hsl(var(--orange-soft))]/30 transition-colors"
                  >
                    <span className="font-mono text-[10px] text-graphite/40 mt-1.5 w-6 shrink-0">
                      0{i + 1}
                    </span>
                    <CheckCircle2
                      size={18}
                      strokeWidth={1.4}
                      className="text-[hsl(var(--sage))] mt-0.5 shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-display text-base font-semibold text-graphite mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-graphite/70 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-7 py-4 border-t border-border bg-[hsl(var(--light-grey))]/40 text-[11px] text-graphite/50">
                <span>Registro técnico · Recomendações priorizadas</span>
                <span className="font-mono">v.02</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
