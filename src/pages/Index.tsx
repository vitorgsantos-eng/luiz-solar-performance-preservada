import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Wrench,
  Sparkles,
  Cpu,
  FileText,
  Sun,
  Mail,
  Instagram,
  MessageCircle,
  Home,
  Store,
  Stethoscope,
  Building2,
  Utensils,
  Palmtree,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/luiz/Navbar";
import { FloatingWhatsApp } from "@/components/luiz/FloatingWhatsApp";
import { Reveal } from "@/components/luiz/Reveal";
import { Logo } from "@/components/luiz/Logo";
import { TrustBar } from "@/components/luiz/TrustBar";
import { ProblemSignalsSection } from "@/components/luiz/ProblemSignalsSection";
import { DiagnosticSection } from "@/components/luiz/DiagnosticSection";
import { ClaritySection } from "@/components/luiz/ClaritySection";
import { BenefitsSection } from "@/components/luiz/BenefitsSection";
import { ResponsibleCareSection } from "@/components/luiz/ResponsibleCareSection";
import { FinalCtaSection } from "@/components/luiz/FinalCtaSection";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  EMAIL,
  INSTAGRAM,
  INSTAGRAM_URL,
} from "@/components/luiz/constants";
import heroImg from "@/assets/hero-technician.jpg";

const services = [
  {
    icon: ShieldCheck,
    title: "Manutenção Preventiva",
    text: "Inspeções programadas para identificar riscos, preservar componentes e evitar perdas de desempenho antes que virem prejuízo.",
  },
  {
    icon: Activity,
    title: "Diagnóstico Técnico",
    text: "Avaliação da geração, do inversor, dos módulos, das conexões e dos principais sinais de perda de eficiência do sistema.",
  },
  {
    icon: Wrench,
    title: "Reparos Especializados",
    text: "Correção de falhas, ajustes técnicos e substituição de componentes quando houver necessidade comprovada.",
  },
  {
    icon: Sparkles,
    title: "Limpeza Técnica",
    text: "Limpeza adequada dos módulos fotovoltaicos, com cuidado técnico para preservar o equipamento e melhorar a captação solar.",
  },
  {
    icon: Cpu,
    title: "Inspeção de Inversores",
    text: "Verificação de alertas, registros, comunicação, funcionamento e possíveis sinais de falha ou perda de eficiência.",
  },
  {
    icon: FileText,
    title: "Análise de Fatura",
    text: "Leitura da conta de energia para conferir créditos, compensação, consumo e economia real após a instalação solar.",
  },
];

const steps = [
  {
    n: "01",
    title: "Avaliação inicial",
    text: "Recebemos as primeiras informações do sistema, entendemos sua necessidade e verificamos o melhor caminho para iniciar o atendimento.",
  },
  {
    n: "02",
    title: "Diagnóstico técnico",
    text: "Analisamos geração, fatura, inversor, módulos e possíveis sinais de perda de desempenho ou necessidade de manutenção.",
  },
  {
    n: "03",
    title: "Orientação e solução",
    text: "Apresentamos recomendações claras sobre limpeza, manutenção ou reparo, sempre com prioridade para o que realmente faz sentido.",
  },
  {
    n: "04",
    title: "Execução e acompanhamento",
    text: "Realizamos o serviço aprovado com cuidado técnico e orientamos os próximos passos para preservar a performance do sistema.",
  },
];

const audiences = [
  { icon: Home, label: "Residências que já possuem sistema solar" },
  { icon: Store, label: "Pequenos comércios com conta de energia elevada" },
  { icon: Stethoscope, label: "Clínicas, consultórios e escritórios" },
  { icon: Building2, label: "Condomínios residenciais e comerciais" },
  { icon: Utensils, label: "Restaurantes, mercados, academias e padarias" },
  { icon: Palmtree, label: "Pousadas, hotéis e negócios de turismo" },
];

const faqItems = [
  {
    q: "De quanto em quanto tempo devo fazer manutenção no sistema solar?",
    a: "A frequência depende do local, do nível de sujeira, da exposição dos módulos, do tipo de instalação e do histórico de geração. Em muitos casos, uma avaliação periódica ajuda a identificar perdas antes que elas se tornem um problema maior.",
  },
  {
    q: "A limpeza dos módulos melhora a geração?",
    a: "Pode melhorar, especialmente quando há acúmulo de poeira, maresia, folhas, fezes de aves ou outras sujeiras que reduzem a incidência solar. Por isso, a limpeza deve ser avaliada junto com o diagnóstico do sistema.",
  },
  {
    q: "Vocês atendem sistemas instalados por outras empresas?",
    a: "Sim. A Luiz Solar atende sistemas já instalados, mesmo que tenham sido projetados ou executados por outra empresa.",
  },
  {
    q: "Vocês analisam a fatura da Coelba?",
    a: "Sim. A análise da fatura ajuda a verificar consumo, créditos de energia, compensação e se a economia percebida está coerente com o funcionamento do sistema.",
  },
  {
    q: "O diagnóstico já inclui reparo?",
    a: "Não necessariamente. O diagnóstico identifica sinais de perda, falhas ou necessidades de manutenção. Caso seja necessário algum reparo, a Luiz Solar apresenta a recomendação e o orçamento antes da execução.",
  },
  {
    q: "Atendem Salvador e Região Metropolitana?",
    a: "Sim. O atendimento é voltado para Salvador e Região Metropolitana. Para outras localidades, a disponibilidade pode ser consultada pelo WhatsApp.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <FloatingWhatsApp />

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 solar-grid-bg opacity-60 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[hsl(var(--orange-soft))] blur-3xl opacity-70 pointer-events-none" />

        <div className="container-luiz relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <span className="hairline" />
              <span className="eyebrow">Energia Solar · Salvador-BA</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-graphite"
            >
              Seu sistema solar <br className="hidden md:block" />
              está gerando o que <span className="text-[hsl(var(--orange))] italic">deveria?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lead max-w-xl"
            >
              Manutenção, diagnóstico e reparos para preservar a performance, a segurança e a vida
              útil do seu sistema solar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-[hsl(28_90%_48%)] transition-colors"
              >
                <MessageCircle size={18} strokeWidth={1.6} />
                Agendar diagnóstico pelo WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 border border-graphite/30 px-7 py-4 text-sm font-medium text-graphite hover:border-graphite hover:bg-graphite hover:text-offwhite transition-colors"
              >
                Conhecer Serviços
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              {[
                "Atendimento em Salvador e Região Metropolitana",
                "Diagnóstico técnico",
                "Manutenção preventiva e corretiva",
              ].map((s) => (
                <div key={s} className="flex items-start gap-2.5">
                  <Sun
                    size={16}
                    className="text-[hsl(var(--orange))] mt-0.5 shrink-0"
                    strokeWidth={1.6}
                  />
                  <span className="text-xs text-graphite/75 leading-relaxed">{s}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={heroImg}
                alt="Técnico Luiz Solar inspecionando painéis fotovoltaicos"
                width={1536}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-graphite/10" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-background border border-border p-5 max-w-[240px] hidden md:block">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-2">
                Diagnóstico técnico
              </div>
              <div className="font-display text-2xl font-semibold text-graphite leading-tight">
                Performance preservada
              </div>
              <div className="text-xs text-graphite/70 mt-2">
                com relatório claro e orientações objetivas
              </div>
            </div>

            <div className="absolute -top-4 -right-4 border border-[hsl(var(--orange))] w-24 h-24 hidden md:block" />
          </motion.div>
        </div>
      </section>

      <TrustBar />
      <ProblemSignalsSection />

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 md:py-32">
        <div className="container-luiz">
          <Reveal className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Nossos Serviços</span>
            </div>

            <h2 className="section-title">
              Cuidado técnico para seu sistema continuar produzindo com segurança
            </h2>

            <p className="lead mt-6">
              Soluções de manutenção, diagnóstico e reparo para preservar a performance do seu
              sistema fotovoltaico com clareza e responsabilidade.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-16 border border-border">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="group h-full bg-background p-8 lg:p-10 hover:bg-[hsl(var(--orange-soft))]/40 transition-colors">
                  <div className="flex items-center justify-between mb-8">
                    <span className="flex h-12 w-12 items-center justify-center border border-graphite/15 group-hover:border-[hsl(var(--orange))] transition-colors">
                      <s.icon
                        size={20}
                        strokeWidth={1.4}
                        className="text-[hsl(var(--sage))] group-hover:text-[hsl(var(--orange))] transition-colors"
                      />
                    </span>
                    <span className="text-xs text-graphite/40 font-mono">0{i + 1}</span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-graphite mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-graphite/70 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DiagnosticSection />
      <ClaritySection />
      <BenefitsSection />

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 md:py-32 bg-[hsl(var(--light-grey))]/40">
        <div className="container-luiz">
          <Reveal className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">O Processo</span>
            </div>
            <h2 className="section-title">Como funciona</h2>
            <p className="lead mt-6">
              Um atendimento organizado para entender o problema, orientar com clareza e executar
              apenas o que for necessário.
            </p>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-graphite/15" />
            <div className="grid lg:grid-cols-4 gap-10 lg:gap-6 relative">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.12}>
                  <div className="relative">
                    <div className="flex items-center gap-4 lg:block mb-5">
                      <span className="relative z-10 inline-flex items-center justify-center w-12 h-12 bg-background border border-[hsl(var(--orange))] font-display text-sm text-[hsl(var(--orange))]">
                        {step.n}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-graphite mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-graphite/70 leading-relaxed">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-16 md:py-24">
        <div className="container-luiz">
          <Reveal className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Público</span>
            </div>
            <h2 className="section-title">Para quem é esse serviço?</h2>
            <p className="lead mt-6">
              Atendemos clientes que já possuem sistema solar instalado e querem preservar a
              geração, a segurança e a economia ao longo do tempo.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.06}>
                <div className="flex items-center gap-5 border border-border p-6 hover:border-[hsl(var(--sage))] transition-colors">
                  <span className="flex h-12 w-12 items-center justify-center bg-[hsl(var(--sage-soft))] shrink-0">
                    <a.icon size={20} strokeWidth={1.4} className="text-[hsl(var(--sage))]" />
                  </span>
                  <span className="text-sm text-graphite leading-snug">{a.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ResponsibleCareSection />

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container-luiz grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="hairline" />
                <span className="eyebrow">Perguntas Frequentes</span>
              </div>

              <h2 className="section-title">
                Dúvidas <span className="italic">frequentes</span>
              </h2>

              <p className="lead mt-6">
                Respostas claras para quem quer cuidar melhor do sistema solar antes de aprovar
                qualquer manutenção ou reparo.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--orange))] hover:gap-3 transition-all"
              >
                Não encontrou sua dúvida? Fale com a gente
                <ArrowRight size={15} />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <Accordion type="single" collapsible className="border-t border-border">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={item.q}
                    value={`item-${i}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="py-6 hover:no-underline group text-left">
                      <div className="flex items-start gap-5 pr-4">
                        <span className="font-mono text-[11px] text-graphite/40 mt-1 shrink-0">
                          0{i + 1}
                        </span>
                        <span className="font-display text-base md:text-lg font-medium text-graphite group-hover:text-[hsl(var(--orange))] transition-colors">
                          {item.q}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-12 pr-4 text-sm text-graphite/75 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCtaSection />

      {/* FOOTER / CONTATO */}
      <footer id="contato" className="bg-background border-t border-border py-12">
        <div className="container-luiz">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div>
              <Logo />
              <p className="text-sm text-graphite/70 leading-relaxed mt-4 max-w-sm">
                Manutenção, diagnóstico e reparos para sistemas solares em Salvador e Região
                Metropolitana.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-graphite mb-4">Atendimento</h3>
              <div className="space-y-3 text-sm text-graphite/70">
                <p>Salvador e Região Metropolitana</p>
                <p>Manutenção • Diagnóstico • Reparos</p>
                <p>Análise de fatura • Limpeza técnica • Inspeção de inversores</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-graphite mb-4">Contato</h3>
              <div className="space-y-3 text-sm text-graphite/70">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[hsl(var(--orange))] transition-colors"
                >
                  <MessageCircle size={16} strokeWidth={1.6} />
                  {WHATSAPP_DISPLAY}
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 hover:text-[hsl(var(--orange))] transition-colors"
                >
                  <Mail size={16} strokeWidth={1.6} />
                  {EMAIL}
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[hsl(var(--orange))] transition-colors"
                >
                  <Instagram size={16} strokeWidth={1.6} />
                  {INSTAGRAM}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-graphite/50">
            <p>© {new Date().getFullYear()} Luiz Solar. Todos os direitos reservados.</p>
            <p>Energia solar com clareza, segurança, responsabilidade e critério técnico.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;