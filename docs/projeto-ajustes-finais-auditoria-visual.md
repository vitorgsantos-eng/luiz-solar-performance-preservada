# Projeto de implantação — Ajustes finais da auditoria visual

## Objetivo

Aplicar ajustes finais de acabamento visual, textual e de conversão na landing page da Luiz Solar, sem criar novas seções e sem alterar a estratégia central já consolidada.

A página já está estruturalmente forte. Esta etapa serve para refinar a experiência, reduzir ruídos, melhorar a leitura em mobile e corrigir pequenos pontos de acabamento profissional.

---

## Princípios da etapa final

1. Não adicionar novas seções.
2. Não alterar a ordem principal da página.
3. Não usar linguagem apelativa ou artificial.
4. Preservar o posicionamento: diagnóstico antes da solução, clareza antes da venda e cuidado técnico responsável.
5. Priorizar ajustes pequenos, seguros e reversíveis.
6. Evitar mexer na identidade visual global sem necessidade.

---

## Fase 1 — Correções obrigatórias de acabamento

### 1.1. Corrigir texto meta da seção de benefícios

**Arquivo:** `src/components/luiz/BenefitsSection.tsx`

Texto atual:

```text
Mais do que executar serviços, a página precisa mostrar segurança para quem quer cuidar do sistema solar sem tomar decisões no escuro.
```

Problema:

- O texto parece comentário interno de estratégia, não comunicação para cliente final.

Substituir por:

```text
A Luiz Solar ajuda você a cuidar do sistema com clareza, segurança e orientação técnica antes de qualquer decisão.
```

Prioridade: Alta.

---

### 1.2. Remover import não utilizado

**Arquivo:** `src/components/luiz/ResponsibleCareSection.tsx`

Remover `CheckCircle2` do import:

```tsx
import { CheckCircle2, FileSearch, Gauge, ReceiptText, ShieldCheck, SunMedium } from "lucide-react";
```

Deve ficar:

```tsx
import { FileSearch, Gauge, ReceiptText, ShieldCheck, SunMedium } from "lucide-react";
```

Motivo:

- Limpeza de código.
- Redução de risco de alerta de lint/build.

Prioridade: Alta.

---

### 1.3. Trocar rótulo `REL · MÉTODO`

**Arquivo:** `src/components/luiz/ClaritySection.tsx`

Texto atual:

```text
REL · MÉTODO
```

Problema:

- A palavra "método" remete ao conceito rejeitado de "Método Luiz Solar".
- Pode soar artificial ou marqueteira.

Substituir por:

```text
REL · TÉCNICO
```

Prioridade: Alta.

---

## Fase 2 — Ajustes textuais de refinamento

### 2.1. Suavizar frase em Sinais de Alerta

**Arquivo:** `src/components/luiz/ProblemSignalsSection.tsx`

Texto atual:

```text
Pode haver sujeira, sombreamento, falha técnica ou expectativa de geração fora da realidade.
```

Substituir por:

```text
Pode haver sujeira, sombreamento, falha técnica ou expectativa de geração diferente das condições reais do sistema.
```

Motivo:

- Evita soar como crítica direta ao cliente.
- Mantém precisão técnica.

Prioridade: Média.

---

### 2.2. Reduzir repetição no CTA final

**Arquivo:** `src/components/luiz/FinalCtaSection.tsx`

Texto atual:

```text
Fale com a Luiz Solar e receba uma orientação clara sobre geração, fatura, limpeza, manutenção ou reparo. Sem exagero, sem promessa vazia e sem indicação antes da análise.
```

Substituir por:

```text
Fale com a Luiz Solar e receba uma orientação clara sobre geração, fatura, limpeza, manutenção ou reparo. Sem exagero e sem indicação antes da análise.
```

Motivo:

- Evita repetição com a seção de acompanhamento responsável, que já usa "sem promessa vazia".

Prioridade: Média.

---

## Fase 3 — Ajustes de ritmo visual

### 3.1. Reduzir espaçamento de seções secundárias

Objetivo:

- Diminuir a sensação de página longa no mobile.
- Manter respiro premium nas seções principais.

Aplicar apenas nas seções secundárias.

#### Arquivo: `src/components/luiz/BenefitsSection.tsx`

Atual:

```tsx
<section id="beneficios" className="py-20 md:py-32">
```

Trocar por:

```tsx
<section id="beneficios" className="py-16 md:py-24">
```

#### Arquivo: `src/pages/Index.tsx`

Na seção `PARA QUEM É`, trocar:

```tsx
<section className="py-20 md:py-32">
```

por:

```tsx
<section className="py-16 md:py-24">
```

Na seção `FAQ`, trocar:

```tsx
<section id="faq" className="py-20 md:py-32">
```

por:

```tsx
<section id="faq" className="py-16 md:py-24">
```

Prioridade: Média.

---

## Fase 4 — Validação pós-implantação

Após aplicar os ajustes, verificar:

1. O site compila sem erro.
2. Não há imports sem uso.
3. A sequência das seções permanece correta:
   - Hero
   - TrustBar
   - ProblemSignalsSection
   - Serviços
   - DiagnosticSection
   - ClaritySection
   - BenefitsSection
   - Como funciona
   - Para quem é
   - ResponsibleCareSection
   - FAQ
   - FinalCtaSection
   - Footer
4. O CTA final continua forte e legível.
5. O tom permanece técnico, sóbrio e sem apelo exagerado.
6. A página não ganhou novas seções.
7. A leitura mobile ficou menos longa nas seções secundárias.

---

## Ordem de implantação recomendada

### Commit 1 — Correções obrigatórias

Arquivos:

- `src/components/luiz/BenefitsSection.tsx`
- `src/components/luiz/ResponsibleCareSection.tsx`
- `src/components/luiz/ClaritySection.tsx`

Mensagem sugerida:

```text
Refine final visual copy and cleanup
```

### Commit 2 — Ajustes textuais complementares

Arquivos:

- `src/components/luiz/ProblemSignalsSection.tsx`
- `src/components/luiz/FinalCtaSection.tsx`

Mensagem sugerida:

```text
Polish final CTA and alert copy
```

### Commit 3 — Ritmo visual

Arquivos:

- `src/components/luiz/BenefitsSection.tsx`
- `src/pages/Index.tsx`

Mensagem sugerida:

```text
Adjust secondary section spacing
```

---

## Critério de pronto

Esta etapa será considerada concluída quando:

- Os três ajustes de alta prioridade forem aplicados.
- Os textos de alerta e CTA estiverem refinados.
- As seções secundárias tiverem espaçamento reduzido.
- O repositório estiver sem código morto óbvio.
- A landing mantiver coerência visual e narrativa sem novas seções.
