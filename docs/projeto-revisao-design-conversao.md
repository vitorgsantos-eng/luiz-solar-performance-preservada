# Projeto de Revisão Visual e Conversão — Luiz Solar

## 1. Objetivo da página

A landing page da Luiz Solar tem um objetivo central: gerar confiança em proprietários de sistemas solares já instalados, explicar o valor do diagnóstico/manutenção e conduzir o visitante ao WhatsApp para agendar atendimento.

A página não deve parecer apenas um portfólio institucional. Ela deve funcionar como uma página comercial de conversão, com aparência técnica, premium, local, segura e objetiva.

## 2. Direção estética obrigatória

Manter a identidade atual, evoluindo-a:

- premium técnico;
- solar;
- local, com foco em Salvador e Região Metropolitana;
- limpo e confiável;
- sem excesso de efeitos visuais;
- sem estética genérica de startup;
- sem aparência amadora ou excessivamente colorida.

A página deve transmitir:

- segurança;
- clareza;
- critério técnico;
- proximidade local;
- manutenção responsável;
- diagnóstico antes de orçamento.

## 3. Escopo geral da implantação

Este projeto organiza as mudanças em fases para evitar alterações caóticas na página principal.

### Fase 1 — Correções rápidas e limpeza visual

#### 1.1 Corrigir botão flutuante do WhatsApp

Arquivo provável:

- `src/components/luiz/FloatingWhatsApp.tsx`

Problema atual:

- há duplicação de `<span>` e do ícone `MessageCircle` dentro do botão.

Ação:

- manter apenas uma camada circular;
- manter apenas um ícone;
- preservar CTA flutuante;
- garantir boa visualização em mobile e desktop.

Critérios de aceite:

- o botão não pode ter ícone duplicado;
- o botão deve manter link para `WHATSAPP_URL`;
- o botão deve continuar acessível com `aria-label`;
- o componente deve permanecer simples e sem dependências novas.

#### 1.2 Corrigir frase do rodapé

Arquivo provável:

- `src/pages/Index.tsx`

Texto atual problemático:

> Energia solar com clareza, segurança e responsabilidade e critério técnico.

Substituir por:

> Energia solar com clareza, segurança, responsabilidade e critério técnico.

Critérios de aceite:

- frase corrigida;
- sem alteração desnecessária no layout do footer.

#### 1.3 Padronizar linguagem dos CTAs principais

CTAs principais recomendados:

- `Agendar diagnóstico pelo WhatsApp`;
- `Quero avaliar meu sistema`;
- `Falar com a Luiz Solar`.

Ação:

- manter CTA principal em laranja preenchido nas seções mais comerciais;
- usar CTA secundário em borda ou grafite apenas quando a ação for informativa;
- evitar excesso de variações que diluam a ação principal.

Critérios de aceite:

- hero com CTA primário claro;
- diagnóstico com CTA forte;
- CTA final com linguagem direta;
- nenhum CTA deve parecer mais importante que o agendamento pelo WhatsApp.

---

### Fase 2 — Reforço de confiança logo no início

#### 2.1 Criar faixa de confiança após o hero

Local:

- logo após a seção `HERO`, antes da seção `DOR / PROBLEMA`.

Objetivo:

- reduzir insegurança imediatamente após o primeiro contato com a página;
- reforçar credibilidade antes de aprofundar a dor.

Conteúdo recomendado:

1. Atendimento em Salvador e Região Metropolitana;
2. Diagnóstico antes de orçamento;
3. Relatório claro e orientação objetiva;
4. Manutenção preventiva e corretiva.

Direção visual:

- faixa horizontal em desktop;
- grid 2x2 ou coluna em mobile;
- fundo off-white ou cinza muito suave;
- ícones pequenos;
- divisórias sutis;
- estilo premium, sem parecer banner promocional.

Critérios de aceite:

- faixa visível sem competir com o hero;
- deve reforçar confiança, não repetir visualmente os cards de serviço;
- responsiva em mobile;
- não deve aumentar demais a altura inicial da página.

---

### Fase 3 — Reestruturar a seção de dor/problema

#### 3.1 Transformar perguntas em sinais de alerta

Local:

- seção `DOR / PROBLEMA`.

Problema atual:

- os cards são corretos, mas parecem perguntas soltas.

Nova abordagem:

Título sugerido:

> Sinais de que seu sistema pode estar perdendo desempenho

Cards sugeridos:

1. Geração menor nos últimos meses;
2. Fatura difícil de entender;
3. Alertas ou falhas no inversor;
4. Módulos sujos ou sem inspeção há muito tempo.

Adicionar frase de fechamento:

> Esses sinais não significam necessariamente um reparo caro. Primeiro, é preciso entender a causa.

Direção visual:

- cards com ícones diferentes;
- número pode continuar, mas não deve ser o único elemento visual;
- hover sutil;
- leve sombra ou profundidade nos cards principais;
- CTA discreto após os cards.

Critérios de aceite:

- seção deve conectar dor → diagnóstico;
- copy deve evitar alarmismo exagerado;
- visual deve parecer técnico e confiável;
- CTA deve levar ao WhatsApp.

---

### Fase 4 — Destacar o Diagnóstico Solar como serviço principal

#### 4.1 Tornar a seção de diagnóstico mais concreta

Local:

- seção `DIAGNÓSTICO`.

Problema atual:

- a seção explica o serviço, mas ainda parece muito institucional.

Nova estrutura recomendada:

Bloco esquerdo:

- título: `Diagnóstico Solar Luiz Solar`;
- subtítulo: avaliação técnica para entender geração, fatura, inversor, módulos e possíveis perdas;
- CTA primário.

Bloco direito:

- transformar checklist em um card mais rico chamado `O que você recebe`.

Itens sugeridos:

- comparação entre geração real e geração esperada;
- leitura da fatura e dos créditos de energia;
- inspeção visual dos módulos;
- verificação de alertas do inversor;
- identificação de sinais de sujeira, sombreamento ou falha;
- orientação clara antes de qualquer manutenção ou reparo.

Adicionar microbox:

> Diagnóstico não é empurrar serviço: é entender o problema antes de recomendar a solução.

Critérios de aceite:

- diagnóstico deve parecer produto/serviço principal;
- o cliente deve entender o que recebe;
- a seção deve diferenciar diagnóstico de reparo;
- CTA deve ser forte e alinhado ao WhatsApp.

---

### Fase 5 — Melhorar a promessa e o mockup de relatório

#### 5.1 Evoluir o card `Avaliação Luiz Solar`

Local:

- seção `CLAREZA`.

Problema atual:

- o card já é bom, mas pode parecer apenas uma lista decorativa.

Ação:

- transformar o card em um mockup mais convincente de relatório técnico.

Elementos sugeridos:

- cabeçalho: `Relatório de Diagnóstico Solar`;
- status visual: `Avaliação técnica`;
- tags: `Geração`, `Fatura`, `Inversor`, `Módulos`;
- checklist com status;
- rodapé: `Recomendações priorizadas`.

Critérios de aceite:

- deve parecer um relatório/método real;
- não inventar número ou laudo específico;
- manter visual premium e limpo;
- reforçar clareza antes do orçamento.

---

### Fase 6 — Reformular benefícios com base em objeções reais

#### 6.1 Trocar benefícios genéricos por benefícios comerciais

Local:

- seção `BENEFÍCIOS`.

Problema atual:

- `Segurança`, `Precisão`, `Sustentabilidade` e `Excelência` são positivos, mas genéricos.

Nova abordagem:

Cards sugeridos:

1. `Diagnóstico antes da solução`
   - Para evitar manutenção desnecessária.

2. `Fatura explicada com clareza`
   - Para entender créditos, consumo e economia real.

3. `Cuidado técnico com o sistema`
   - Para preservar módulos, inversor, conexões e segurança.

4. `Orientação para decidir com segurança`
   - Para aprovar limpeza, manutenção ou reparo sabendo o motivo.

Direção visual:

- cards com ícone + objeção + solução;
- manter borda superior laranja ou criar cards com leve sombra;
- evitar blocos muito parecidos com a seção de serviços.

Critérios de aceite:

- cada benefício deve responder a uma insegurança real do cliente;
- copy objetiva;
- visual com boa leitura em mobile.

---

### Fase 7 — Criar bloco estratégico: antes de contratar manutenção

#### 7.1 Nova seção curta

Local sugerido:

- entre `BENEFÍCIOS` e `COMO FUNCIONA`, ou antes de `DIAGNÓSTICO` se a fluidez ficar melhor.

Título sugerido:

> Antes de contratar uma manutenção, entenda o problema

Texto sugerido:

> A queda de desempenho pode estar ligada à sujeira, sombreamento, falha no inversor, conexões, expectativa de geração ou até interpretação incorreta da fatura. O diagnóstico ajuda a separar hipótese de evidência.

Lista visual:

- sujeira nos módulos;
- sombreamento;
- inversor com alerta;
- conexões e proteções;
- leitura da fatura;
- comparação da geração.

Critérios de aceite:

- seção curta;
- não deve alongar excessivamente a página;
- deve reforçar autoridade consultiva;
- deve preparar o visitante para aceitar o diagnóstico.

---

### Fase 8 — Fortalecer a prova técnica/social

#### 8.1 Melhorar seção `PROVA / AUTORIDADE`

Local:

- seção com imagem `reportImg` e título `Energia solar precisa de acompanhamento`.

Problema atual:

- a seção explica, mas ainda não prova.

Ações possíveis sem inventar dados:

- reforçar o visual da imagem como relatório/checklist;
- incluir lista `Como avaliamos`;
- adicionar bloco `Método Luiz Solar`;
- incluir nota: `Registro visual, análise técnica e orientação clara`;
- se houver fotos reais futuramente, substituir ou complementar imagem atual.

Nova estrutura sugerida:

- esquerda: imagem/mockup;
- direita: `Método Luiz Solar em 3 etapas`:
  1. Entender o histórico do sistema;
  2. Avaliar geração, fatura e componentes;
  3. Recomendar apenas o que fizer sentido.

Critérios de aceite:

- não inventar depoimentos nem números;
- reforçar método e seriedade;
- parecer prova técnica, não promessa vazia.

---

### Fase 9 — Enriquecer FAQ para conversão

#### 9.1 Adicionar perguntas que removem objeções

Local:

- array `faqItems` em `src/pages/Index.tsx`.

Perguntas recomendadas:

1. `A limpeza pode danificar as placas solares?`
2. `Preciso desligar o sistema para fazer o diagnóstico?`
3. `Como saber se a queda de geração é sujeira ou problema técnico?`
4. `O diagnóstico tem valor ou é orçamento gratuito?` — preencher conforme regra comercial real da Luiz Solar.
5. `Vocês fazem apenas limpeza ou também manutenção corretiva?`
6. `O atendimento é feito em residência e empresa?`

Atenção:

- não inventar política de preço;
- se o valor do diagnóstico não estiver definido, manter resposta neutra: `As condições são informadas pelo WhatsApp conforme o tipo de sistema e localidade.`

Critérios de aceite:

- FAQ deve reduzir insegurança;
- perguntas devem ser comerciais, não apenas institucionais;
- respostas claras, sem promessas técnicas absolutas.

---

### Fase 10 — Reforçar CTA final

#### 10.1 Melhorar copy do CTA final

Local:

- seção `CTA FINAL`.

Texto atual funciona, mas pode ficar mais urgente e conectado à dor.

Sugestão de headline:

> Não espere a conta subir para descobrir que seu sistema perdeu desempenho.

Subheadline:

> Agende um diagnóstico e receba uma orientação clara sobre geração, fatura, limpeza, manutenção ou reparo.

Botão:

> Falar com a Luiz Solar pelo WhatsApp

Critérios de aceite:

- CTA final deve ser direto;
- deve reforçar o WhatsApp;
- deve evitar promessa exagerada;
- visual em grafite pode ser mantido.

---

## 4. Refatoração técnica recomendada

O arquivo `src/pages/Index.tsx` concentra muitos arrays e muitas seções. Para facilitar manutenção, recomenda-se separar gradualmente.

### Estrutura sugerida

```txt
src/
  components/
    luiz/
      sections/
        HeroSection.tsx
        TrustBar.tsx
        ProblemSection.tsx
        ServicesSection.tsx
        DiagnosticSection.tsx
        ClaritySection.tsx
        BenefitsSection.tsx
        BeforeMaintenanceSection.tsx
        ProcessSection.tsx
        AudienceSection.tsx
        ProofSection.tsx
        FaqSection.tsx
        FinalCtaSection.tsx
      data/
        landingContent.ts
```

### Regra de implantação

Não refatorar tudo de uma vez se isso aumentar risco de quebra.

Ordem recomendada:

1. Corrigir componentes pequenos;
2. Adicionar novas seções dentro do `Index.tsx`;
3. Validar build;
4. Só depois extrair dados e seções para arquivos próprios.

Critérios de aceite:

- `npm run build` deve passar;
- nenhuma âncora do menu deve quebrar;
- todos os CTAs devem apontar para `WHATSAPP_URL`;
- página deve continuar responsiva.

---

## 5. Checklist de QA visual

Antes de finalizar, revisar:

### Desktop

- hero acima da dobra com CTA visível;
- imagem do hero sem corte estranho;
- navbar fixa sem cobrir título;
- seções com espaçamento equilibrado;
- CTA final forte e visível.

### Mobile

- menu mobile funcionando;
- CTAs com largura confortável;
- botão flutuante sem cobrir conteúdo importante;
- cards empilhados com boa leitura;
- FAQ fácil de tocar;
- sem overflow horizontal.

### Conteúdo

- sem texto genérico demais;
- sem promessas absolutas de aumento de geração;
- sem inventar números, depoimentos ou certificações;
- reforçar sempre diagnóstico, clareza, critério técnico e WhatsApp.

### Acessibilidade mínima

- imagens com `alt` coerente;
- links com texto claro;
- botões/links clicáveis com área confortável;
- contraste suficiente entre texto e fundo;
- foco/hover preservados.

---

## 6. Critérios finais de aceite do projeto

O projeto será considerado implementado quando:

1. o botão flutuante do WhatsApp estiver corrigido;
2. a página tiver faixa de confiança logo após o hero;
3. a seção de dor estiver orientada a sinais de alerta;
4. o diagnóstico estiver apresentado como serviço principal e concreto;
5. houver mockup/método visual mais forte para relatório técnico;
6. os benefícios responderem a objeções reais;
7. houver bloco estratégico antes de contratar manutenção;
8. a prova técnica/social estiver mais convincente;
9. o FAQ remover objeções comerciais relevantes;
10. o CTA final estiver mais direto;
11. a frase do footer estiver corrigida;
12. `npm run build` passar sem erro;
13. a página continuar responsiva e alinhada à identidade Luiz Solar.

## 7. Observação estratégica

A prioridade não é deixar a página mais ornamentada. A prioridade é aumentar confiança e conversão. Toda mudança visual deve responder a uma pergunta do visitante:

- Posso confiar nessa empresa?
- Eles entendem de sistema solar?
- Vão tentar me vender algo desnecessário?
- Vou entender minha fatura e minha geração?
- O que acontece depois que eu chamar no WhatsApp?

Se a seção não ajudar a responder uma dessas perguntas, ela deve ser simplificada ou removida.
