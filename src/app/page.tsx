import Link from "next/link";
import { BrandLight } from "@/components/brand-light";
import { ProjectPreview } from "@/components/project-preview";
import { SiteHeader } from "@/components/site-header";

const portrait = "https://www.figma.com/api/mcp/asset/e54bf272-e0d7-470c-b02b-7a2996c8b7f8/90c6f.png";

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
          <span className="home-location">SÃO PAULO / 2026</span>
          <div className="home-name-lockup" aria-hidden="true"><span>GABRIEL</span><strong>GONZAGA</strong></div>
          <div className="home-discipline" aria-hidden="true">
            <div><span>PRODUCT</span><strong>DESIGNER</strong></div>
            <div><span>UX</span><strong>UI</strong></div>
          </div>
          <div className="home-intro">
            <h1>Transformo sistemas complexos<br />em produtos que as pessoas usam.</h1>
            <p>Product Designer em produtos digitais, sistemas internos e interfaces de IA. Traduzo requisitos técnicos e metas de negócio em fluxos e telas que reduzem esforço e erro.</p>
          </div>
          <div className="home-hero-footer">
            <span>Pesquisa · prototipação · sistemas · documentação</span>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projetos">
        <div className="site-container">
          <div className="projects-intro">
            <h2>Projetos</h2>
            <p>Produto digital, sistemas de interface e inteligência artificial aplicada.</p>
          </div>
          <ProjectPreview />
        </div>
      </section>

      <section className="home-about">
        <div className="site-container">
          <div className="home-about-top">
            <div className="home-about-copy">
              <h2>Produto digital.<br />Sistemas.<br />IA com critério.</h2>
              <p>Atuo entre Product Design, inovação e inteligência artificial, transformando necessidades de usuários e de negócio em produtos, sistemas e experiências digitais. Hoje integro o departamento de Inovação da Crescimentum e atuo na construção de produtos na Aureum e na QuantoLab.</p>
            </div>
            <div className="home-portrait-wrap">
              {/* Temporary Figma MCP asset; replace by local versioned export before production. */}
              <img src={portrait} alt="Retrato de Gabriel Gonzaga" className="home-portrait" />
              <Link href="/about" className="about-cta">MAIS SOBRE MIM <span>↗</span></Link>
            </div>
          </div>
          <div className="experience-grid">
            {experience.map(([label, title, description]) => (
              <article className="experience-item" key={title}>
                <span className="eyebrow">{label}</span>
                <strong>{title}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="site-container contact-inner">
          <span className="contact-place">SÃO PAULO · BRASIL</span>
          <a href="mailto:gabrielgonzagasilva@outlook.com" className="contact-title">Vamos conversar.<span>↗</span></a>
          <div className="contact-footer">
            <span>GABRIEL GONZAGA / PRODUCT DESIGNER</span>
            <div>
              <a href="https://www.linkedin.com/in/gabrielgonzagasilva" target="_blank" rel="noreferrer">LINKEDIN</a>
              <a href="/cv.pdf">CURRÍCULO PDF</a>
              <a href="mailto:gabrielgonzagasilva@outlook.com">EMAIL</a>
            </div>
            <span>© 2026</span>
          </div>
        </div>
      </section>
    </main>
  );
}
