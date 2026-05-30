import { ArrowRight, Camera, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./constants";
import heroCleaningImg from "@/assets/real-works/raw/hero-tecnico-limpando-paineis.jpeg";
import cleanPanelsImg from "@/assets/real-works/raw/paineis-limpos-palmeiras.jpeg";
import residentialSystemImg from "@/assets/real-works/raw/sistema-residencial-condominio.jpeg";
import churchPanelsImg from "@/assets/real-works/raw/igreja-paineis-reflexo.jpeg";
import dirtyPanelImg from "@/assets/real-works/raw/painel-sujo-diagnostico.jpeg";
import brushCleaningImg from "@/assets/real-works/raw/limpeza-escova-cidade.jpeg";

const works = [
  {
    image: heroCleaningImg,
    title: "Limpeza técnica em sistema de grande porte",
    text: "Registro real de manutenção e cuidado com módulos fotovoltaicos.",
  },
  {
    image: cleanPanelsImg,
    title: "Painéis limpos após manutenção",
    text: "Resultado visual de módulos preservados e prontos para melhor captação solar.",
  },
  {
    image: residentialSystemImg,
    title: "Sistema residencial acompanhado",
    text: "Atendimento a sistemas já instalados em imóveis residenciais e comerciais.",
  },
  {
    image: churchPanelsImg,
    title: "Cobertura urbana com geração solar",
    text: "Trabalho real em cobertura urbana, com módulos instalados em ambiente local.",
  },
  {
    image: dirtyPanelImg,
    title: "Sujeira acumulada nos módulos",
    text: "Acúmulo de resíduos pode prejudicar a captação e justificar avaliação técnica.",
  },
  {
    image: brushCleaningImg,
    title: "Limpeza com equipamento apropriado",
    text: "Execução com cuidado para preservar os módulos durante a manutenção.",
  },
];

export const RealWorksSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-luiz">
        <Reveal className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Registros reais</span>
          </div>

          <h2 className="section-title">Trabalhos realizados</h2>

          <p className="lead mt-6">
            Imagens reais de limpezas, inspeções e sistemas atendidos pela Luiz Solar em Salvador e
            região. Sem banco de imagens, sem técnico fictício e sem aparência artificial.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((work, i) => (
            <Reveal key={work.title} delay={i * 0.06}>
              <article className="group h-full overflow-hidden border border-border bg-background hover:border-[hsl(var(--orange))] hover:shadow-[0_18px_40px_-30px_rgba(0,0,0,0.35)] transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-[hsl(var(--light-grey))]/40">
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-graphite/10" />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center bg-[hsl(var(--orange-soft))] text-[hsl(var(--orange))]">
                      <Camera size={17} strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-[10px] text-graphite/35">0{i + 1}</span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-graphite mb-2">
                    {work.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-graphite/70">{work.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 border border-[hsl(var(--orange))]/25 bg-[hsl(var(--orange-soft))]/35 p-6">
            <div className="flex items-start gap-4">
              <Sparkles
                size={21}
                strokeWidth={1.5}
                className="text-[hsl(var(--orange))] shrink-0 mt-1"
              />
              <p className="text-sm text-graphite/75 leading-relaxed max-w-2xl">
                Cada sistema tem uma condição diferente. As imagens ajudam a mostrar o cuidado em
                campo, mas a recomendação correta depende de avaliação técnica.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-graphite/25 px-6 py-3 text-sm font-medium text-graphite hover:bg-graphite hover:text-offwhite hover:border-graphite transition-colors"
            >
              Avaliar meu sistema
              <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
