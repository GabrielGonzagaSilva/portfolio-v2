import Link from "next/link";
import { BrandLight } from "@/components/brand-light";
import { ProjectPreview } from "@/components/project-preview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const experience = [
  ["ATUAL", "Crescimentum", "Design · Inovação · IA · LXD · Product Design"],
  ["EMPREENDIMENTO", "Aureum", "Co-Founder & Product Lead · Product Strategy · UX/UI"],
  ["FORMAÇÃO", "UNICID + Mergo", "Design Gráfico · Product Design"],
  ["EXPERIÊNCIA ANTERIOR", "Microsoft Technical Support", "Copilot · Microsoft 365 · Windows · experiência do cliente"],
  ["AUTÔNOMO", "Designer independente", "Design gráfico e comunicação visual · desde 2020"],
  ["FERRAMENTAS", "Figma · Adobe · IA", "Figma · Photoshop · Illustrator · ChatGPT · Claude · Notion"],
] as const;

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-hero">
        <BrandLight />
        <div className="site-container home-hero-inner">
          <div className="hero-meta-row">
            <span>PESQUISA · PROTOTIPAÇÃO · SISTEMAS · DOCUMENTAÇÃO</span>
            <span>SÃO PAULO / 2026</span>
          </div>
          <h1>Transformo sistemas complexos em produtos que as pessoas usam.</h1>
          <p className="hero-summary">
            Product Designer em produtos digitais, sistemas internos e interfaces de IA. Traduzo requisitos técnicos e metas de negócio em fluxos e telas que reduzem esforço e erro.
          </p>
          <div className="hero-signature" aria-hidden="true">
            <div><span>PRODUCT</span><span>DESIGNER</span></div>
            <div><span>UX</span><span>UI</span></div>
            <div><span>GABRIEL</span><span>GONZAGA</span></div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projetos">
        <div className="site-container">
          <div className="section-heading-row">
            <h2>Projetos</h2>
            <p>Produto digital, sistemas de interface e inteligência artificial aplicada.</p>
          </div>
          <ProjectPreview />
        </div>
      </section>

      <section className="home-about">
        <div className="site-container home-about-grid">
          <div className="home-about-copy">
            <h2>Produto digital.<br />Sistemas.<br />IA com critério.</h2>
            <p>
              Atuo entre Product Design, inovação e inteligência artificial, transformando necessidades de usuários e de negócio em produtos, sistemas e experiências digitais. Hoje integro o departamento de Inovação da Crescimentum e atuo na construção de produtos na Aureum e na QuantoLab.
            </p>
            <Link href="/about" className="text-link">MAIS SOBRE MIM <span>↗</span></Link>
          </div>
          <div className="experience-list">
            {experience.map(([label, title, description]) => (
              <div className="experience-item" key={title}>
                <span className="eyebrow">{label}</span>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="site-container contact-inner">
          <div className="contact-meta"><span>SÃO PAULO · BRASIL</span><span>PRODUTO, DESIGN E INOVAÇÃO.</span></div>
          <a href="mailto:gabrielgonzagasilva@outlook.com" className="contact-title">Vamos conversar.<span>↗</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
