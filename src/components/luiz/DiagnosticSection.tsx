import { ArrowRight, CheckCircle2, FileText, MessageCircle, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./constants";

const diagnosticItems = [
  "Comparação entre geração real e geração esperada",
  "Leitura da fatura, créditos de energia e compensação",
  "Estado visual dos módulos fotovoltaicos",
  "Verificação de alertas, registros e funcionamento do inversor",
  "Condições de cabos, conexões e proteções",
  "Identificação de sujeira, sombreamento ou perda de desempenho",
  "Orientação clara antes de qualquer manutenção ou reparo",
];

export const DiagnosticSection = () => {
  return (
    <section
      id="diagnostico"
      className="py-20 md:py-32 bg-[hsl(var(--light-grey))]/50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--orange))]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[hsl(var(--orange))]" />

      <div className="container-luiz grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Serviço principal</span>
            </div>

            <h2 className="section-title">
              Diagnóstico Solar <br />
              <span className="italic text-[hsl(var(--orange))]">Luiz Solar</span>
            </h2>

            <p className="lead mt-6">
              Uma avaliação técnica para quem já possui energia solar e quer entender se o sistema
              está gerando corretamente, se a fatura está coerente e se há sinais de perda de
              desempenho.
            </p>

            <div className="mt-7 border-l-2 border-[hsl(var(--orange))] pl-5">
              <p className="text-sm leading-relaxed text-graphite/75">
                O diagnóstico ajuda a separar hipótese de evidência antes de indicar limpeza,
                manutenção ou reparo.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-[hsl(28_90%_48%)] transition-colors group"
            >
              <MessageCircle size={17} strokeWidth={1.6} />
              Quero avaliar meu sistema
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="bg-background border border-border p-8 md:p-12 shadow-[0_18px_50px_-36px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-8 pb-6 border-b border-border">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--sage))]">
                    O que você recebe
                  </div>
                  <div className="font-display text-2xl font-semibold text-graphite mt-1">
                    Avaliação técnica organizada
                  </div>
                  <p className="text-sm text-graphite/65 mt-3 max-w-xl leading-relaxed">
                    Um checklist claro para entender geração, fatura, inversor, módulos e próximos
                    passos sem confusão técnica.
                  </p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center border border-[hsl(var(--orange))]/40 bg-[hsl(var(--orange-soft))]/50 shrink-0">
                  <FileText size={22} className="text-[hsl(var(--orange))]" strokeWidth={1.4} />
                </span>
              </div>

              <ul className="space-y-5">
                {diagnosticItems.map((item, i) => (
                  <li key={item} className="flex items-start gap-4 group">
                    <span className="font-mono text-[10px] text-graphite/40 mt-1 w-6">
                      0{i + 1}
                    </span>
                    <CheckCircle2
                      size={18}
                      strokeWidth={1.4}
                      className="text-[hsl(var(--sage))] mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-graphite/85 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 border border-[hsl(var(--sage))]/25 bg-[hsl(var(--sage-soft))]/45 p-5 flex items-start gap-4">
                <ShieldCheck
                  size={21}
                  strokeWidth={1.5}
                  className="text-[hsl(var(--sage))] shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-display text-base font-semibold text-graphite mb-1">
                    Diagnóstico não é empurrar serviço
                  </h3>
                  <p className="text-sm text-graphite/70 leading-relaxed">
                    A recomendação vem depois da análise. Você entende o motivo antes de aprovar
                    limpeza, manutenção ou reparo.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
