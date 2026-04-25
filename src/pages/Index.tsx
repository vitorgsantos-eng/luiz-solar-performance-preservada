import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Wrench,
  Sparkles,
  Cpu,
  FileText,
  Lock,
  Target,
  Leaf,
  Award,
  Sun,
  Mail,
  Instagram,
  MessageCircle,
  CheckCircle2,
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
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  EMAIL,
  INSTAGRAM,
  INSTAGRAM_URL,
} from "@/components/luiz/constants";
import heroImg from "@/assets/hero-technician.jpg";
import reportImg from "@/assets/report-checklist.jpg";

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

const benefits = [
  {
    icon: Lock,
    title: "Segurança",
    text: "Procedimentos cuidadosos para proteger pessoas, equipamentos e o valor do seu sistema solar.",
  },
  {
    icon: Target,
    title: "Precisão",
    text: "Avaliação técnica com foco nos sinais reais de desempenho, falhas, perdas e oportunidades de correção.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    text: "Cuidamos da energia que você produz para que seu sistema continue contribuindo com economia e responsabilidade ambiental.",
  },
  {
    icon: Award,
    title: "Excelência",
    text: "Atendimento próximo, organizado e orientado a entregar confiança antes, durante e depois do serviço.",
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

const diagnosticItems = [
  "Comparação entre geração real e geração esperada",
  "Estado visual dos módulos fotovoltaicos",
  "Funcionamento, alertas e registros do inversor",
  "Condições de cabos, conexões e proteções",
  "Sinais de sujeira, sombreamento ou perda de desempenho",
  "Leitura da fatura, créditos de energia e compensação",
  "Recomendações técnicas de manutenção, limpeza ou reparo",
];

const painCards = [
  "Sua geração caiu nos últimos meses?",
  "A fatura da Coelba está difícil de entender?",
  "O inversor apresenta alertas ou falhas?",
  "Os módulos estão sujos ou há muito tempo sem inspeção?",
];

const clarityItems = [
  {
    title: "Relatório técnico claro",
    text: "Você recebe uma avaliação organizada, com linguagem acessível e registro dos principais pontos observados no sistema.",
  },
  {
    title: "Recomendações priorizadas",
    text: "Indicamos o que merece atenção imediata, o que pode ser acompanhado e quais cuidados ajudam a preservar a performance.",
  },
  {
    title: "Comunicação transparente",
    text: "Sem termos confusos ou recomendações desnecessárias. A orientação é feita com responsabilidade e critério técnico.",
  },
  {
    title: "Decisão com segurança",
    text: "Você entende o motivo de cada recomendação antes de aprovar qualquer manutenção, limpeza ou reparo.",
  },
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
                Agendar Diagnóstico pelo WhatsApp
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

      {/* DOR / PROBLEMA */}
      <section className="py-20 md:py-32 bg-[hsl(var(--light-grey))]/40">
        <div className="container-luiz">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">O Problema</span>
            </div>
            <h2 className="section-title">
              Você instalou energia solar para economizar. Mas ela continua{" "}
              <span className="italic text-[hsl(var(--orange))]">performando bem?</span>
            </h2>
            <p className="lead mt-6">
              Com o tempo, sujeira nos módulos, falhas de conexão, alertas no inversor,
              sombreamento, desgaste de componentes ou falta de acompanhamento da fatura podem
              reduzir silenciosamente o resultado do sistema. A Luiz Solar identifica esses sinais e
              orienta a melhor solução com clareza, responsabilidade e critério técnico.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {painCards.map((q, i) => (
              <Reveal key={q} delay={i * 0.08}>
                <div className="group h-full bg-background border border-border p-7 hover:border-[hsl(var(--orange))] transition-colors">
                  <div className="text-[hsl(var(--orange))] font-display text-2xl mb-4">
                    0{i + 1}
                  </div>
                  <p className="text-sm text-graphite leading-relaxed">{q}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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

      {/* DIAGNÓSTICO */}
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
                <span className="eyebrow">Serviço Principal</span>
              </div>
              <h2 className="section-title">
                Diagnóstico Solar <br />
                <span className="italic">Luiz Solar</span>
              </h2>
              <p className="lead mt-6">
                Uma avaliação técnica para quem já possui energia solar e quer entender, com
                clareza, se o sistema está gerando corretamente, se a fatura está coerente e se há
                sinais de perda de desempenho.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-graphite px-7 py-4 text-sm font-medium text-offwhite hover:bg-[hsl(var(--orange))] transition-colors group"
              >
                Quero avaliar meu sistema
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="bg-background border border-border p-8 md:p-12">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--sage))]">
                      Checklist técnico
                    </div>
                    <div className="font-display text-lg text-graphite mt-1">
                      O que pode ser avaliado
                    </div>
                  </div>
                  <FileText size={22} className="text-[hsl(var(--orange))]" strokeWidth={1.4} />
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
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      {/* CLAREZA */}
      <section id="clareza" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute -left-32 top-1/4 w-[420px] h-[420px] rounded-full bg-[hsl(var(--sage-soft))] blur-3xl opacity-60 pointer-events-none" />
        <div className="container-luiz relative grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="hairline" />
                <span className="eyebrow">Nossa Promessa</span>
              </div>
              <h2 className="section-title">
                Você recebe clareza, <br />
                <span className="italic text-[hsl(var(--orange))]">não apenas um orçamento.</span>
              </h2>
              <p className="lead mt-6">
                Antes de recomendar qualquer manutenção ou reparo, buscamos explicar o que foi
                observado, o que merece atenção e quais próximos passos fazem sentido para o seu
                sistema solar.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 border border-graphite/30 px-7 py-4 text-sm font-medium text-graphite hover:bg-graphite hover:text-offwhite hover:border-graphite transition-colors group"
              >
                <MessageCircle size={16} strokeWidth={1.6} />
                Quero meu Diagnóstico
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="relative bg-background border border-border">
                <div className="flex items-center justify-between px-7 py-5 border-b border-border bg-[hsl(var(--light-grey))]/40">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--orange))]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-graphite/60">
                      Relatório Luiz Solar
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-graphite/40">REL · 0042</span>
                </div>
                <div className="divide-y divide-border">
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
                <div className="flex items-center justify-between px-7 py-4 border-t border-border bg-[hsl(var(--light-grey))]/40 text-[11px] text-graphite/50">
                  <span>Registro técnico · Luiz Solar</span>
                  <span className="font-mono">v.01</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="py-20 md:py-32">
        <div className="container-luiz">
          <Reveal className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Benefícios</span>
            </div>
            <h2 className="section-title">Por que escolher a Luiz Solar</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="border-t border-[hsl(var(--orange))] pt-8">
                  <b.icon size={28} strokeWidth={1.3} className="text-[hsl(var(--sage))] mb-6" />
                  <h3 className="font-display text-xl font-semibold text-graphite mb-3">
                    {b.title}
                  </h3>
                  <p className="text-sm text-graphite/70 leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-20 md:py-32">
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

      {/* PROVA / AUTORIDADE */}
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
              <span className="eyebrow">Autoridade Técnica</span>
            </div>
            <h2 className="section-title">Energia solar precisa de acompanhamento</h2>
            <p className="lead mt-6">
              Um sistema fotovoltaico é um investimento de longo prazo. Para preservar sua
              eficiência, é importante acompanhar a geração, interpretar a fatura, inspecionar
              equipamentos e realizar manutenção preventiva. A Luiz Solar atua para cuidar do
              sistema com método, responsabilidade e visão técnica.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {[
                { v: "01", l: "Diagnóstico antes da solução" },
                { v: "02", l: "Orientação clara ao cliente" },
                { v: "03", l: "Manutenção com critério técnico" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl md:text-3xl font-semibold text-graphite">
                    {s.v}
                  </div>
                  <div className="text-[11px] text-graphite/60 mt-1 uppercase tracking-wider">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      {/* FAQ */}
      <section id="faq" className="py-20 md:py-32">
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

      {/* CTA FINAL */}
      <section className="py-20 md:py-32 bg-graphite text-offwhite relative overflow-hidden">
        <div className="absolute inset-0 solar-grid-bg opacity-10 pointer-events-none" />
        <div className="container-luiz relative text-center max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow text-[hsl(var(--orange))]">Agende seu diagnóstico</span>
            <span className="hairline" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
            Manutenção que gera resultados. <br />
            <span className="italic text-[hsl(var(--orange))]">Energia que gera valor.</span>
          </h2>

          <p className="lead mt-6 text-offwhite/75 max-w-2xl mx-auto">
            Descubra se seu sistema solar está gerando como deveria e receba uma orientação clara
            sobre manutenção, limpeza ou reparo.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-[hsl(28_90%_48%)] transition-colors group"
          >
            <MessageCircle size={18} strokeWidth={1.6} />
            Falar pelo WhatsApp
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

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
            <p>Energia solar com clareza, segurança e responsabilidade técnica.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
