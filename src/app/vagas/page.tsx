"use client";

import { useEffect, useMemo, useState } from "react";

type Job = {
  id: string; source: string; title: string; company: string; location: string; remote: boolean;
  url: string; publishedAt?: string | null; description?: string; tags?: string[]; score: number;
  reasons?: string[]; level: "entry" | "mid" | "senior" | "unknown"; activeValidated?: boolean;
};

type ApiData = {
  meta?: { generatedAt?: string; sources?: Record<string, { ok: boolean; count?: number; error?: string }> };
  jobs?: Job[];
};

const quickLinks = [
  ["LinkedIn", "https://www.linkedin.com/jobs/search/?keywords=Product%20Designer%20Junior&location=S%C3%A3o%20Paulo%2C%20Brazil"],
  ["Gupy", "https://portal.gupy.io/job-search/term=product%20designer"],
  ["Indeed", "https://br.indeed.com/jobs?q=product+designer+junior&l=S%C3%A3o+Paulo%2C+SP"],
  ["Glassdoor", "https://www.glassdoor.com.br/Vaga/s%C3%A3o-paulo-product-designer-vagas-SRCH_IL.0,9_IC2479061_KO10,26.htm"],
];

function fmtDate(value?: string | null) {
  if (!value) return "Data n/d";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "Data n/d";
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" }).format(d);
}

export default function VagasPage() {
  const [data, setData] = useState<ApiData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [score, setScore] = useState(70);
  const [level, setLevel] = useState("entry");
  const [mode, setMode] = useState("all");
  const [source, setSource] = useState("all");

  async function load(force = false) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/vagas${force ? "?refresh=1" : ""}`, { cache: force ? "no-store" : "default" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setData(await res.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Falha ao atualizar vagas");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(false);
    const timer = window.setInterval(() => load(true), 30 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  const jobs = data.jobs ?? [];
  const sources = useMemo(() => [...new Set(jobs.map(j => j.source))].sort(), [jobs]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter(j =>
      j.score >= score &&
      (source === "all" || j.source === source) &&
      (mode !== "remote" || j.remote) &&
      (level === "all" || j.level === level) &&
      (!q || `${j.title} ${j.company} ${j.location} ${(j.tags || []).join(" ")}`.toLowerCase().includes(q))
    );
  }, [jobs, query, score, source, mode, level]);

  const activeSources = data.meta?.sources ? Object.values(data.meta.sources).filter(x => x.ok).length : new Set(jobs.map(j => j.source)).size;
  const updated = data.meta?.generatedAt ? new Date(data.meta.generatedAt).toLocaleString("pt-BR") : "—";

  return (
    <main className="radar">
      <style>{`
        :root{--r-bg:#0b0d10;--r-panel:#111419;--r-panel2:#171b21;--r-line:#2a3038;--r-text:#f3f5f7;--r-muted:#9aa4b2;--r-accent:#d8ff3e;--r-good:#90efb6}
        body{margin:0;background:var(--r-bg)!important;color:var(--r-text)!important}
        .radar{min-height:100vh;background:radial-gradient(circle at 12% -10%,rgba(216,255,62,.09),transparent 30%),var(--r-bg);color:var(--r-text);font-family:var(--font-sans),Inter,system-ui,sans-serif}
        .rshell{max-width:1480px;margin:auto;padding:28px}.rhead{display:flex;justify-content:space-between;gap:24px;align-items:flex-start;margin-bottom:26px}
        .reyebrow{display:inline-flex;align-items:center;border:1px solid #34402a;background:#141a11;color:#dfff75;padding:6px 10px;border-radius:999px;font:700 12px/1 var(--font-sans),sans-serif;letter-spacing:.04em;text-transform:uppercase}
        .rtitle{font-size:clamp(36px,5vw,72px);line-height:.95;letter-spacing:-.055em;margin:14px 0;max-width:850px}.rsub{color:var(--r-muted);max-width:820px;font-size:16px}
        .rstatus{min-width:270px;border:1px solid var(--r-line);background:rgba(17,20,25,.86);padding:16px;border-radius:16px}.rstatus strong{display:block;font-size:13px}.rstatus small{color:var(--r-muted)}.pulse{display:inline-block;width:8px;height:8px;background:var(--r-accent);border-radius:50%;box-shadow:0 0 0 6px rgba(216,255,62,.08);margin-right:8px}
        .metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:18px}.metric{border:1px solid var(--r-line);background:var(--r-panel);border-radius:16px;padding:18px}.metric b{display:block;font-size:28px;letter-spacing:-.04em}.metric span{color:var(--r-muted);font-size:12px;text-transform:uppercase;letter-spacing:.05em}
        .toolbar{position:sticky;top:12px;z-index:20;border:1px solid var(--r-line);background:rgba(11,13,16,.9);backdrop-filter:blur(18px);border-radius:18px;padding:12px;display:grid;grid-template-columns:2fr repeat(4,1fr) auto;gap:9px;margin-bottom:18px}
        .control{appearance:none;background:var(--r-panel2);border:1px solid var(--r-line);color:var(--r-text);padding:11px 12px;border-radius:12px;outline:none;width:100%;font:inherit}.control:focus{border-color:#56672b}.rbtn{border:1px solid #3f4b25;background:var(--r-accent);color:#10130b;border-radius:12px;padding:11px 15px;font:800 14px/1 var(--font-sans),sans-serif;cursor:pointer}.rbtn:disabled{opacity:.55;cursor:wait}
        .layout{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:18px}.jobs{display:grid;gap:10px}.job{border:1px solid var(--r-line);background:linear-gradient(180deg,rgba(23,27,33,.95),rgba(17,20,25,.95));border-radius:18px;padding:18px}.job:hover{border-color:#414a55}.jobtop{display:flex;justify-content:space-between;gap:14px}.company{color:var(--r-muted);font-size:13px}.job h2{font-size:20px;line-height:1.2;margin:3px 0 7px;letter-spacing:-.02em}.score{min-width:67px;text-align:center;border:1px solid #455625;background:#182012;border-radius:14px;padding:8px 9px;color:#dfff75;height:max-content}.score b{font-size:19px;display:block}.score small{font-size:10px;text-transform:uppercase;letter-spacing:.06em}
        .pills,.reasons{display:flex;flex-wrap:wrap;gap:7px;margin-top:11px}.pill{border:1px solid var(--r-line);background:#12161b;padding:5px 8px;border-radius:999px;color:#bdc5d0;font-size:12px}.good{border-color:#355343;color:#aef3c6;background:#102019}.reason{font-size:12px;color:#b7c0cb}.reason:before{content:'+';color:var(--r-accent);margin-right:4px;font-weight:900}.actions{display:flex;gap:8px;margin-top:14px}.apply{display:inline-block;background:var(--r-accent);color:#111!important;border-radius:10px;padding:9px 11px;font-size:13px;font-weight:800;text-decoration:none}.details{margin-top:12px;border-top:1px solid var(--r-line);padding-top:10px;color:#aeb7c2;font-size:13px}.details summary{cursor:pointer;color:#d6dde6;font-weight:700;margin-bottom:8px}
        .sidecol{display:grid;gap:12px;align-content:start}.side{border:1px solid var(--r-line);background:var(--r-panel);border-radius:16px;padding:16px}.side h3{font-size:14px;margin:0 0 10px}.side p{font-size:13px;color:var(--r-muted);margin:0 0 12px}.quick{display:grid;gap:8px}.quick a{display:flex;justify-content:space-between;gap:8px;padding:10px 11px;border:1px solid var(--r-line);background:var(--r-panel2);border-radius:11px;font-size:13px;color:var(--r-text);text-decoration:none}.legend{font-size:12px;color:var(--r-muted);display:grid;gap:8px}.legend b{color:var(--r-text)}
        .state{border:1px dashed var(--r-line);border-radius:18px;padding:40px;text-align:center;color:var(--r-muted)}.footer{margin:28px 0 8px;color:#707a87;font-size:12px}
        @media(max-width:1050px){.rhead{display:block}.rstatus{margin-top:18px;min-width:0}.metrics{grid-template-columns:repeat(2,1fr)}.toolbar{grid-template-columns:1fr 1fr 1fr}.toolbar .search{grid-column:1/-1}.layout{grid-template-columns:1fr}}
        @media(max-width:640px){.rshell{padding:18px}.toolbar{position:static;grid-template-columns:1fr 1fr}.toolbar .search,.toolbar .rbtn{grid-column:1/-1}.job h2{font-size:18px}.metric b{font-size:23px}.rtitle{font-size:42px}}
      `}</style>

      <div className="rshell">
        <header className="rhead">
          <div>
            <div className="reyebrow">Radar pessoal de oportunidades</div>
            <h1 className="rtitle">Vagas com mais aderência ao seu próximo passo.</h1>
            <p className="rsub">Product Design, UX/UI, Produto Digital, Inovação, IA aplicada, CX e LXD — priorizando estágio e posições júnior, com contexto Brasil/LATAM/remoto.</p>
          </div>
          <div className="rstatus">
            <strong><span className="pulse" />Automação ativa · 4 buscas/dia</strong>
            <small>Última consulta do painel: {updated}</small>
          </div>
        </header>

        <section className="metrics">
          <div className="metric"><b>{jobs.length}</b><span>vagas aderentes</span></div>
          <div className="metric"><b>{jobs.filter(j => j.score >= 70).length}</b><span>match ≥ 70</span></div>
          <div className="metric"><b>{jobs.filter(j => j.level === "entry").length}</b><span>estágio / júnior</span></div>
          <div className="metric"><b>{activeSources}</b><span>fontes ativas</span></div>
        </section>

        <section className="toolbar">
          <input className="control search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar cargo, empresa, skill…" />
          <select className="control" value={score} onChange={e => setScore(Number(e.target.value))}><option value={0}>Qualquer match</option><option value={60}>Match ≥ 60</option><option value={70}>Match ≥ 70</option><option value={80}>Match ≥ 80</option></select>
          <select className="control" value={level} onChange={e => setLevel(e.target.value)}><option value="all">Todos os níveis</option><option value="entry">Estágio / Júnior</option><option value="mid">Pleno</option></select>
          <select className="control" value={mode} onChange={e => setMode(e.target.value)}><option value="all">Remoto + presencial</option><option value="remote">Somente remoto</option></select>
          <select className="control" value={source} onChange={e => setSource(e.target.value)}><option value="all">Todas as fontes</option>{sources.map(s => <option key={s}>{s}</option>)}</select>
          <button className="rbtn" disabled={loading} onClick={() => load(true)}>{loading ? "Buscando…" : "Atualizar"}</button>
        </section>

        <div className="layout">
          <section className="jobs">
            {error && <div className="state">Não foi possível atualizar agora: {error}</div>}
            {!error && loading && jobs.length === 0 && <div className="state">Buscando vagas nas fontes conectadas…</div>}
            {!loading && !error && filtered.length === 0 && <div className="state">Nenhuma vaga corresponde aos filtros atuais. Reduza o match mínimo ou amplie o nível.</div>}
            {filtered.map(j => (
              <article className="job" key={j.id}>
                <div className="jobtop">
                  <div><div className="company">{j.company} · {j.source}</div><h2>{j.title}</h2></div>
                  <div className="score"><b>{j.score}</b><small>match</small></div>
                </div>
                <div className="pills"><span className="pill">{j.location || "Local n/d"}</span>{j.remote && <span className="pill good">Remoto</span>}<span className="pill">{fmtDate(j.publishedAt)}</span>{j.activeValidated && <span className="pill good">Fonte ativa</span>}</div>
                {!!j.tags?.length && <div className="pills">{j.tags.slice(0, 6).map((t, i) => <span className="pill" key={`${t}-${i}`}>{t}</span>)}</div>}
                {!!j.reasons?.length && <div className="reasons">{j.reasons.slice(0, 4).map(r => <span className="reason" key={r}>{r}</span>)}</div>}
                <div className="actions"><a className="apply" href={j.url} target="_blank" rel="noopener noreferrer">Ver vaga ↗</a></div>
                {j.description && <details className="details"><summary>Detalhes</summary>{j.description.slice(0, 1100)}</details>}
              </article>
            ))}
          </section>

          <aside className="sidecol">
            <div className="side"><h3>Buscas complementares</h3><p>Atalhos para plataformas cujo catálogo completo não possui API pública universal adequada ao agregador.</p><div className="quick">{quickLinks.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer">{name}<span>↗</span></a>)}</div></div>
            <div className="side"><h3>Como o match é calculado</h3><div className="legend"><span><b>+ Cargo:</b> Product/UX/UI/Service Design, CX, Inovação, IA e LXD.</span><span><b>+ Senioridade:</b> estágio, intern, trainee, associate, junior e entry level.</span><span><b>+ Contexto:</b> Brasil, São Paulo, LATAM, worldwide ou remoto.</span><span><b>− Penalidade:</b> senior, staff, lead, principal, manager, head ou director.</span><span><b>− Descarte:</b> vagas sem relação com seu perfil ou com mais de 90 dias.</span></div></div>
            <div className="side"><h3>Fontes automatizadas</h3><p>{data.meta?.sources ? Object.entries(data.meta.sources).map(([k, v]) => `${k}: ${v.ok ? "online" : "indisponível"}`).join(" · ") : "Jobicy · Remotive · Arbeitnow · RemoteOK"}</p></div>
          </aside>
        </div>

        <div className="footer">Painel pessoal de curadoria. A disponibilidade final deve ser confirmada na página oficial antes da candidatura.</div>
      </div>
    </main>
  );
}
