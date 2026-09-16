import type { Metadata } from "next";
import Link from "next/link";
import { BrandLight } from "@/components/brand-light";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "QuantoLab — Case",
  description: "Case de Product Design do QuantoLab, plataforma de apoio à decisão com ferramentas para trabalho, carreira e dinheiro.",
};

const journey = [
  ["01 · DESCOBRIR", "Encontrar a ferramenta certa", "Uma arquitetura que organiza ferramentas por intenção e domínio reduz o custo de descoberta."],
  ["02 · CALCULAR", "Entradas claras, premissas visíveis", "A interação prioriza leitura rápida, linguagem direta e explicação do que entra no cálculo."],
  ["03 · DECIDIR", "Resultado que aponta o próximo passo", "O resultado não termina em um número: ele ajuda a interpretar cenários e tomar uma decisão."],
  ["04 · CONFIAR", "Metodologia e fontes acessíveis", "Premissas, metodologia e conteúdo editorial reforçam transparência sem sobrecarregar o fluxo principal."],
] as const;

export default function QuantoLabPage() {
  return (
    <main>
      <SiteHeader />
      <section className="case-hero">
        <BrandLight />
        <div className="site-container case-hero-inner">
          <span className="eyebrow">PRODUCT DESIGN · DIGITAL TOOLS · 2026</span>
          <h1>QuantoLab</h1>
          <p>Uma plataforma de apoio à decisão com 28 ferramentas para trabalho, carreira e dinheiro.</p>
          <div className="case-meta-grid">
            <div><span className="eyebrow">PAPEL</span><strong>Product Design</strong></div>
            <div><span className="eyebrow">ESCOPO</span><strong>Estratégia · UX/UI · Sistema</strong></div>
            <div><span className="eyebrow">STATUS</span><strong>Produto em produção</strong></div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="site-container editorial-grid">
          <span className="eyebrow">VISÃO DO PRODUTO</span>
          <div className="editorial-copy"><h2>Decisões cotidianas não deveriam exigir planilhas improvisadas e dezenas de abas abertas.</h2><p>O QuantoLab transforma cálculos e comparações recorrentes em instrumentos digitais objetivos, rápidos e explicáveis.</p></div>
        </div>
        <div className="site-container product-canvas"><span>QUANTOLAB · DIGITAL INSTRUMENT SYSTEM</span></div>
      </section>

      <section className="case-section">
        <div className="site-container editorial-grid">
          <span className="eyebrow">PROBLEMA</span>
          <div className="editorial-copy"><h2>O cálculo raramente é o problema inteiro.</h2><p>Quem compara salário, regime de contratação ou orçamento precisa entender premissas, interpretar resultados e decidir o que fazer em seguida. O produto foi desenhado para sustentar esse processo completo.</p></div>
        </div>
      </section>

      <section className="case-section journey-section">
        <div className="site-container">
          <div className="section-heading-row compact"><h2>Do cálculo à decisão.</h2><p>A experiência se organiza em quatro movimentos.</p></div>
          <div className="journey-grid">
            {journey.map(([step, title, text]) => (
              <article key={step} className="journey-card"><span className="eyebrow">{step}</span><h3>{title}</h3><p>{text}</p><div className="screen-placeholder" aria-hidden="true"><span>{title}</span></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section result-section">
        <div className="site-container editorial-grid">
          <span className="eyebrow">RESULTADO</span>
          <div className="editorial-copy"><h2>Um sistema preparado para crescer sem virar uma coleção de calculadoras soltas.</h2><p>A estrutura conecta descoberta, cálculo, conteúdo e confiança em uma linguagem única, permitindo adicionar novas ferramentas sem redesenhar a experiência a cada lançamento.</p></div>
        </div>
      </section>

      <section className="case-closing">
        <div className="site-container case-closing-inner"><span className="eyebrow">QUANTOLAB · 2026</span><h2>Projetar menos telas isoladas. Construir mais sistema.</h2><Link href="/" className="text-link">VOLTAR PARA PROJETOS <span>↗</span></Link></div>
      </section>

      <SiteFooter />
    </main>
  );
}
