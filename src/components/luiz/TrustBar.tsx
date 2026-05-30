import { FileText, MapPin, SearchCheck, Wrench } from "lucide-react";

const trustItems = [
  {
    icon: MapPin,
    title: "Atendimento local",
    text: "Salvador e Região Metropolitana",
  },
  {
    icon: SearchCheck,
    title: "Diagnóstico antes do orçamento",
    text: "Entenda o problema antes de aprovar qualquer serviço",
  },
  {
    icon: FileText,
    title: "Relatório claro",
    text: "Orientação objetiva sobre geração, fatura e componentes",
  },
  {
    icon: Wrench,
    title: "Manutenção com critério",
    text: "Limpeza, prevenção e reparos quando fizer sentido",
  },
];

export const TrustBar = () => {
  return (
    <section className="relative z-10 -mt-8 pb-12">
      <div className="container-luiz">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-border bg-background shadow-[0_18px_50px_-32px_rgba(0,0,0,0.35)]">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="border-b border-border p-6 last:border-b-0 md:border-r md:last:border-r-0 lg:border-b-0"
            >
              <item.icon size={20} strokeWidth={1.5} className="mb-4 text-[hsl(var(--orange))]" />
              <h3 className="mb-2 font-display text-base font-semibold text-graphite">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-graphite/65">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
