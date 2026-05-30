# Inventário de imagens reais — Luiz Solar

## Objetivo

Controlar a curadoria, renomeação e aplicação das imagens reais de trabalhos da Luiz Solar na landing page.

As imagens brutas foram adicionadas em:

```text
src/assets/real-works/raw/
```

A pasta `raw/` deve ser tratada como acervo provisório. As imagens escolhidas para uso na página serão copiadas/renomeadas posteriormente para:

```text
src/assets/real-works/
```

---

## Critérios de curadoria

### Priorizar imagens que mostrem

- trabalho real executado;
- técnico em ação;
- limpeza de módulos;
- painéis em telhados reais;
- contexto local brasileiro;
- sujeira acumulada como evidência do problema;
- resultado limpo, claro e confiável.

### Evitar ou deixar como reserva

- imagens duplicadas ou muito semelhantes;
- imagens com borda/faixa de story;
- imagens com pessoa cortada na lateral;
- fotos visualmente poluídas demais;
- imagens que não agreguem à narrativa da página.

---

## Inventário inicial

> Observação: as descrições abaixo foram montadas a partir das imagens analisadas na conversa. Antes da renomeação definitiva, cada arquivo deve ser aberto no GitHub para confirmar visualmente a correspondência exata.

| Arquivo atual | Descrição visual provável | Uso recomendado | Decisão inicial | Nome final sugerido |
| --- | --- | --- | --- | --- |
| `049380D3-68EA-4520-A0BE-08773AD38EE7.jpeg` | Painel com sujeira acumulada em telhado, evidenciando perda de limpeza/captação | Sinais de alerta ou galeria | Usar | `painel-sujo-diagnostico.jpeg` |
| `19B7E5F3-AE53-4A3C-8952-2B5B03974D14.jpeg` | Foto ampla de painéis em telhado residencial com bairro ao fundo; pode conter pessoa cortada na lateral | Reserva ou galeria após recorte | Reserva | `telhado-residencial-bairro-reserva.jpeg` |
| `5047F009-96FA-4AE8-B189-60B8AB0B3A4A.jpeg` | Limpeza com escova/haste em painel, área urbana/prédios ao fundo | Galeria / limpeza técnica | Usar | `limpeza-escova-cidade.jpeg` |
| `54E95971-D1CA-424E-A350-231E063CDDC4.jpeg` | Painéis em telhado residencial com bairro ao fundo, composição ampla | Galeria / sistema residencial | Usar ou reserva | `sistema-residencial-bairro.jpeg` |
| `6271E98F-FF4E-499A-AF35-9C0B4E149CA7.jpeg` | Painéis em telhado residencial, imagem semelhante a outras do conjunto | Reserva | Reserva | `paineis-residencial-reserva-01.jpeg` |
| `63314438-5F16-46D8-B025-D42A166CAD5E.jpeg` | Painéis em telhado residencial/condomínio, boa composição com céu e área externa | Galeria / residencial qualificado | Usar | `sistema-residencial-condominio.jpeg` |
| `649B428B-E6F3-48FD-B2BB-7DC7D4095756.jpeg` | Painéis limpos em ângulo baixo com céu/palmeiras, aparência premium | Galeria / resultado limpo | Usar | `paineis-limpos-palmeiras.jpeg` |
| `83EBE74C-C197-42DD-9038-B537F572EB02.jpeg` | Painéis limpos em ângulo baixo, semelhante à imagem de palmeiras | Galeria ou reserva | Reserva | `paineis-limpos-reserva.jpeg` |
| `8D466F94-F7F2-4783-9B47-AABC6D81C368.jpeg` | Telhado residencial com vários módulos e bairro ao fundo | Galeria ou reserva | Reserva | `telhado-residencial-reserva-02.jpeg` |
| `9E2528F0-D48D-4962-A4BB-E559F15B0573.jpeg` | Painéis em telhado residencial com boa profundidade e contexto local | Reserva | Reserva | `paineis-telhado-amplo-reserva.jpeg` |
| `9ED45680-26C3-4CC7-9A0E-5657306CDA92.jpeg` | Foto ampla de painéis em telhado, enviada em duplicidade ou muito semelhante à primeira leva | Reserva | Reserva | `paineis-telhado-bairro-reserva.jpeg` |
| `A0418E2C-4431-4B50-B04B-C2DACCD056B7.jpeg` | Limpeza com escova/haste em painel e equipamento/condensadora na cobertura | Galeria ou reserva | Reserva | `limpeza-painel-cobertura-reserva.jpeg` |
| `ABFACD66-6FCC-4066-9F24-1E855637FD24.jpeg` | Sistema residencial/condomínio com painéis e céu amplo | Galeria / residencial | Usar | `sistema-residencial-condominio-02.jpeg` |
| `C7ABBFFD-C2FD-4938-9274-B293230F1319.jpeg` | Técnico de azul limpando grande conjunto de painéis | Hero e galeria | Usar | `hero-tecnico-limpando-paineis.jpeg` |
| `DEE27920-74DE-4961-A29D-7BB91E4F9659.jpeg` | Foto ampla de painéis em telhado residencial com pessoa cortada na lateral ou composição semelhante | Reserva após recorte | Reserva | `telhado-residencial-recorte-reserva.jpeg` |
| `EFD6051D-A26F-4372-AD6B-6453B1BE2DEF.jpeg` | Painéis refletindo igreja/arquitetura urbana local, forte autenticidade | Galeria / prova visual local | Usar | `igreja-paineis-reflexo.jpeg` |

---

## Seleção recomendada para a primeira versão

### Hero

```text
hero-tecnico-limpando-paineis.jpeg
```

### Galeria “Trabalhos realizados”

```text
hero-tecnico-limpando-paineis.jpeg
paineis-limpos-palmeiras.jpeg
sistema-residencial-condominio.jpeg
igreja-paineis-reflexo.jpeg
painel-sujo-diagnostico.jpeg
limpeza-escova-cidade.jpeg
```

### Reservas úteis

```text
sistema-residencial-condominio-02.jpeg
sistema-residencial-bairro.jpeg
paineis-limpos-reserva.jpeg
```

---

## Plano de implantação

### Commit 1 — Inventário

Criar este arquivo de controle.

Mensagem:

```text
Add real works image inventory
```

### Commit 2 — Organização das imagens escolhidas

Copiar/renomear as imagens selecionadas para `src/assets/real-works/`.

Mensagem:

```text
Organize selected real work images
```

### Commit 3 — Hero real

Atualizar `src/pages/Index.tsx` para usar:

```tsx
import heroImg from "@/assets/real-works/hero-tecnico-limpando-paineis.jpeg";
```

Mensagem:

```text
Use real service photo in hero
```

### Commit 4 — Galeria de trabalhos realizados

Criar:

```text
src/components/luiz/RealWorksSection.tsx
```

Integrar depois de:

```tsx
<ResponsibleCareSection />
```

Mensagem:

```text
Add real works gallery section
```

### Commit 5 — Mockup e imagem social

Criar/substituir:

```text
src/assets/report-checklist.jpg
public/og-image.jpg
```

Mensagem:

```text
Add branded diagnostic and sharing images
```

---

## Observações finais

- Não gerar fotos por IA para substituir imagens reais de serviço.
- IA/design pode ser usada apenas para materiais gráficos, como mockup de relatório e imagem Open Graph.
- A pasta `raw/` não deve ser apagada até a landing ser validada visualmente.
- Após validação, imagens não usadas podem ser removidas para reduzir bagunça no repositório.
