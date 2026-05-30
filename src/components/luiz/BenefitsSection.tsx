import { FileText, SearchCheck, ShieldCheck, Target } from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  {
    icon: SearchCheck,
    title: "Diagnóstico antes da solução",
    objection: "Não quero pagar por algo desnecessário.",
    text: "A Luiz Solar avalia o sistema antes de recomendar limpeza, manutenção ou reparo.",
  },
  {
    icon: FileText,
    title: "Fatura explicada com clareza",
    objection: "Não entendo se minha economia está correta.",
    text: "A análise ajuda a interpretar consumo, créditos, compensação e coerência da geração.",
  },
  {
    icon: ShieldCheck,
    title: "Cuidado técnico com o sistema",
    objection: "Tenho receio de danificarem meus equipamentos.",
    text: "A atuação considera módulos, inversor, conexões e segurança antes de qualquer execução.",
  },
  {
    icon: Target,
    title: "Orientação para decidir com segurança",
    objection: "Quero entender antes de aprovar o serviço.",
    text: "Você recebe uma explicação objetiva sobre o que foi observado e os próximos passos.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 md:py-32">
      <div className="container-luiz">
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Benefícios</span>
          </div>
          <h2 className="section-title">Por que escolher a Luiz Solar</h2>
          <p className="lead mt-6">
            Mais do que executar serviços, a página precisa mostrar segurança para quem quer cuidar
            do sistema solar sem tomar decisões no escuro.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.08}>
              <div className="group h-full border border-border bg-background p-7 hover:border-[hsl(var(--orange))] hover:shadow-[0_18px_40px_-30px_rgba(0,0,0,0.35)] transition-all">
                <div className="flex items-center justify-between mb-7">
                  <span className="flex h-12 w-12 items-center justify-center bg-[hsl(var(--sage-soft))] text-[hsl(var(--sage))] group-hover:bg-[hsl(var(--orange-soft))] group-hover:text-[hsl(var(--orange))] transition-colors">
                    <benefit.icon size={21} strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[10px] text-graphite/35">0{i + 1}</span>
                </div>

                <p className="mb-4 border-l-2 border-[hsl(var(--orange))] pl-4 text-xs leading-relaxed text-graphite/55 italic">
                  “{benefit.objection}”
                </p>

                <h3 className="font-display text-xl font-semibold text-graphite mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-graphite/70 leading-relaxed">{benefit.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
