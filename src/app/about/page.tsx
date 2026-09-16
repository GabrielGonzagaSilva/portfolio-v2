import type { Metadata } from "next";
import { BrandLight } from "@/components/brand-light";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "About" };

const values = [
  ["01", "Entender antes de desenhar", "Começo pelo contexto: pessoas, restrições, objetivos e sinais que ajudam a separar sintoma de problema."],
  ["02", "Reduzir complexidade", "Organizo decisões, fluxos e informação até a experiência ficar mais clara para quem usa e sustentável para quem mantém."],
  ["03", "Prototipar para aprender", "Uso protótipos como ferramenta de raciocínio, alinhamento e validação — não como etapa decorativa do processo."],
  ["04", "Documentar para escalar", "Sistemas, regras e decisões precisam sobreviver à entrega. Documentação faz parte do produto."],
] as const;

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="about-hero">
        <BrandLight />
        <div className="site-container about-hero-grid">
          <div className="about-hero-copy">
            <h1>Sou Gabriel Gonzaga, Product Designer em São Paulo. Trabalho criando produtos digitais e organizando problemas complexos até eles ficarem mais simples de entender e usar.</h1>
            <p>No dia a dia, transito entre pesquisa, fluxos, UX/UI e prototipação, além de explorar aprendizagem, inovação e IA como parte do processo.</p>
          </div>
          <div className="portrait-placeholder" role="img" aria-label="Retrato de Gabriel Gonzaga">
            <span>GABRIEL<br />GONZAGA</span>
          </div>
          <div className="about-meta">
            <span>SÃO PAULO, BRASIL · PRODUCT DESIGN · UX/UI · LXD · IA APLICADA AO TRABALHO</span>
            <span>PRODUCT DESIGNER · LEARNING EXPERIENCE DESIGN</span>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="site-container editorial-grid">
          <span className="eyebrow">QUEM EU SOU</span>
          <div className="editorial-copy">
            <h2>Design, para mim, é uma forma de organizar decisões.</h2>
            <p>Meu trabalho acontece entre produto, tecnologia, aprendizagem e negócio. Gosto de entrar em problemas ainda pouco estruturados, encontrar padrões e construir uma direção que possa ser testada, explicada e evoluída.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="site-container editorial-grid">
          <span className="eyebrow">O QUE EU LEVO PARA UM PRODUTO</span>
          <div className="value-grid">
            {values.map(([n, title, text]) => (
              <article className="value-card" key={n}>
                <span className="eyebrow">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section focus-section">
        <div className="site-container editorial-grid">
          <span className="eyebrow">NO QUE ESTOU FOCADO AGORA</span>
          <div className="editorial-copy"><h2>Produtos digitais, sistemas de interface e IA aplicada com critério.</h2><p>Meu foco é aprofundar Product Design enquanto conecto repertório de aprendizagem, inovação corporativa e inteligência artificial a problemas concretos de produto.</p></div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="site-container contact-inner">
          <div className="contact-meta"><span>SÃO PAULO · BRASIL</span><span>DISPONÍVEL PARA CONVERSAS SOBRE PRODUTO E DESIGN.</span></div>
          <a href="mailto:gabrielgonzagasilva@outlook.com" className="contact-title">Vamos conversar.<span>↗</span></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
