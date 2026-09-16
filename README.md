# Portfolio V2 — Gabriel Gonzaga

Implementação do portfólio de Gabriel Gonzaga a partir do Figma master.

## Stack

- Next.js 16.3.5
- React 19.3
- TypeScript 6.0.3 strict
- Tailwind CSS 4.3 + CSS Variables
- Motion 13.3
- MDX
- Playwright + axe-core
- Vercel

> TypeScript 6.0.3 é usado nesta etapa porque o toolchain atual do `eslint-config-next` ainda não suporta TypeScript 7.x sem incompatibilidade no `typescript-eslint`.

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

## Assets

Os assets finais devem ser exportados do Figma e versionados em `public/images`. O código não usa URLs temporárias do Figma em produção.
