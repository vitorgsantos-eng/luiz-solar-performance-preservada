import { Activity, AlertTriangle, ArrowRight, ReceiptText, Sun, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./constants";

const alertItems = [
  {
    icon: Activity,
    title: "Geração menor nos últimos meses",
    text: "Pode haver sujeira, sombreamento, falha técnica ou expectativa de geração diferente das condições reais do sistema.",
  },
  {
    icon: ReceiptText,
    title: "Fatura difícil de entender",
    text: "Créditos, consumo e compensação precisam ser lidos junto com o histórico do sistema.",
  },
  {
    icon: Zap,
    title: "Alertas ou falhas no inversor",
    text: "Registros e mensagens do inversor ajudam a indicar onde investigar primeiro.",
  },
  {
    icon: Sun,
    title: "Módulos sujos ou sem inspeção",
    text: "Poeira, maresia, folhas e resíduos podem reduzir a captação solar ao longo do tempo.",
  },
];

export const ProblemSignalsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--light-grey))]/40">
      <div className="container-luiz">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Sinais de alerta</span>
          </div>
          <h2 className="section-title">
            Seu sistema pode estar perdendo desempenho sem você perceber
          </h2>
          <p className="lead mt-6">
            Nem toda queda de resultado significa reparo caro. Primeiro, é preciso separar hipótese
            de evidência: geração, fatura, inversor, módulos e condições de instalação precisam ser
            avaliados com critério técnico.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {alertItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group h-full bg-background border border-border p-7 hover:border-[hsl(var(--orange))] hover:shadow-[0_18px_40px_-30px_rgba(0,0,0,0.35)] transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="flex h-11 w-11 items-center justify-center bg-[hsl(var(--orange-soft))] text-[hsl(var(--orange))]">
                    <item.icon size={19} strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[10px] text-graphite/35">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-graphite mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-graphite/70 leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 border border-[hsl(var(--orange))]/30 bg-[hsl(var(--orange-soft))]/45 p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle
                size={22}
                strokeWidth={1.5}
                className="text-[hsl(var(--orange))] shrink-0 mt-1"
              />
              <p className="text-sm text-graphite/75 leading-relaxed max-w-2xl">
                Esses sinais indicam que vale investigar. O diagnóstico ajuda a entender a causa
                antes de indicar limpeza, manutenção ou reparo.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-[hsl(28_90%_48%)] transition-colors"
            >
              Agendar diagnóstico
              <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
