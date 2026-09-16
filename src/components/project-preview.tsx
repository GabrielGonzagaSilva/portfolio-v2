import Link from "next/link";

export function ProjectPreview() {
  return (
    <Link href="/projects/quantolab" className="project-preview" aria-label="Ver case QuantoLab">
      <div className="project-visual" aria-hidden="true">
        <div className="project-visual-orbit" />
        <div className="project-visual-panel project-visual-panel-a" />
        <div className="project-visual-panel project-visual-panel-b" />
        <span className="project-visual-wordmark">QUANTOLAB</span>
      </div>
      <div className="project-copy">
        <span className="eyebrow">PRODUCT DESIGN · DIGITAL TOOLS · 2026</span>
        <h3>QuantoLab</h3>
        <p>Plataforma de apoio à decisão com 28 ferramentas para trabalho, carreira e dinheiro.</p>
        <span className="project-link">VER CASE <b>↗</b></span>
      </div>
    </Link>
  );
}
