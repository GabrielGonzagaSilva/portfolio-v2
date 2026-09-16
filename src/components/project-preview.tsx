import Link from "next/link";

const thumbnail = "https://www.figma.com/api/mcp/asset/e54bf272-e0d7-470c-b02b-7a2996c8b7f8/5d0f4.png";

export function ProjectPreview() {
  return (
    <Link href="/projects/quantolab" className="project-preview" aria-label="Ver case QuantoLab">
      <div className="project-media">
        <span className="eyebrow">PRODUCT DESIGN · DIGITAL TOOLS · 2026</span>
        {/* Figma MCP asset is temporary and will be replaced by a versioned local export before production. */}
        <img src={thumbnail} alt="QuantoLab em diferentes dispositivos" />
      </div>
      <div className="project-copy">
        <h3>QuantoLab</h3>
        <p>Plataforma de apoio à decisão com 28 ferramentas para trabalho, carreira e dinheiro.</p>
        <span className="project-link"><span>VER CASE</span><b>↗</b></span>
      </div>
    </Link>
  );
}
