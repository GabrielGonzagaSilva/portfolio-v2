# Portfolio V2 — Gabriel Gonzaga

Implementação do portfólio de Gabriel Gonzaga a partir do Figma master.

## Stack

- Next.js 16.3.5
- React 19.3
- TypeScript 6 strict
- Tailwind CSS 4.3 + CSS Variables
- Motion 13.3
- MDX
- Playwright + axe-core
- Vercel

## Rotas

- `/`
- `/about`
- `/projects/quantolab`

## Rodar localmente

```bash
npm install
npm run dev
```

## QA

```bash
npm run build
npx playwright install --with-deps chromium
npm run test:e2e
```

Breakpoints de referência do Figma: `1440 / 834 / 390`.

## Fonte de verdade

O Figma é a fonte visual. A implementação usa uma única estrutura responsiva — não existem três DOMs separados por breakpoint.

Os tokens de cor, spacing e radius do Developer Handoff foram transpostos para `src/app/globals.css`.

## Estado atual

- Homepage implementada a partir do frame Desktop 1440 e adaptada responsivamente.
- About implementada com conteúdo completo do Figma.
- Case QuantoLab implementado com narrativa, telas e seções reais.
- CI valida lint e production build.

## Assets

Os assets visuais utilizados no preview atual vêm dos exports do Figma MCP. Antes de considerar a publicação final estável, eles devem ser versionados em `public/images` para eliminar dependência de URLs temporárias do Figma.
