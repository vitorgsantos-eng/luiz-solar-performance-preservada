import { FileSearch, Gauge, ReceiptText, ShieldCheck, SunMedium } from "lucide-react";
import { Reveal } from "./Reveal";
import reportImg from "@/assets/report-checklist.jpg";

const reviewItems = [
  {
    icon: Gauge,
    title: "Histórico de geração",
    text: "Entender se a produção atual conversa com o comportamento esperado do sistema.",
  },
  {
    icon: ReceiptText,
    title: "Leitura da fatura",
    text: "Conferir consumo, créditos, compensação e sinais de economia abaixo do esperado.",
  },
  {
    icon: SunMedium,
    title: "Condição dos módulos",
    text: "Observar sujeira, sombreamento, resíduos e sinais visuais que prejudicam a captação.",
  },
  {
    icon: FileSearch,
    title: "Alertas do inversor",
    text: "Verificar registros, mensagens e indícios de falha ou perda de desempenho.",
  },
];

export const ResponsibleCareSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--light-grey))]/40">
      <div className="container-luiz grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img
              src={reportImg}
              alt="Relatório técnico de inspeção fotovoltaica"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-5 -right-5 w-32 h-32 border border-[hsl(var(--orange))] -z-0" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Acompanhamento responsável</span>
          </div>

          <h2 className="section-title">Cuidado técnico para preservar seu investimento</h2>

          <p className="lead mt-6">
            Um sistema fotovoltaico é um investimento de longo prazo. A avaliação responsável não
            cria urgência artificial: ela identifica, com clareza, se há algo prejudicando o
            desempenho e quais cuidados realmente fazem sentido.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {reviewItems.map((item, i) => (
              <div key={item.title} className="border border-border bg-background p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 items-center justify-center bg-[hsl(var(--sage-soft))] text-[hsl(var(--sage))] shrink-0">
                    <item.icon size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="font-mono text-[10px] text-graphite/35">0{i + 1}</span>
                    <h3 className="font-display text-base font-semibold text-graphite mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-graphite/70 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-[hsl(var(--orange))]/25 bg-[hsl(var(--orange-soft))]/35 p-5 flex items-start gap-4">
            <ShieldCheck
              size={21}
              strokeWidth={1.5}
              className="text-[hsl(var(--orange))] shrink-0 mt-0.5"
            />
            <div>
              <h3 className="font-display text-base font-semibold text-graphite mb-1">
                Sem exagero, sem promessa vazia
              </h3>
              <p className="text-sm text-graphite/70 leading-relaxed">
                O objetivo é orientar com base no que foi observado: limpeza, manutenção ou reparo
                só devem ser indicados quando houver motivo claro.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
