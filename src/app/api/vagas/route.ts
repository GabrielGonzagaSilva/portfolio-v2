/* eslint-disable @typescript-eslint/no-explicit-any */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UA = "GabrielGonzaga-JobRadar/2.1";
const strip = (s = "") => String(s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const norm = (s = "") => strip(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const iso = (v: any) => {
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
};

/* Perfil-alvo: currículo Gabriel Gonzaga 2026 */
const ENTRY_RE = /\b(junior|jr\.?|intern|internship|estagio|estagiario|estagiaria)\b/i;
const MID_RE = /\b(mid-level|mid level|pleno|intermediate)\b/i;
const SENIOR_RE = /\b(senior|sr\.?|staff|lead|principal|manager|gerente|director|diretor|head|vice president|vp|coordenador|coordinator|supervisor|specialist|especialista)\b/i;

const TRACKS: Array<{ label: string; re: RegExp; base: number }> = [
  { label: "Product Design / UX/UI", re: /(product designer|product design|ux\/?ui|ui\/?ux|ux designer|ui designer|user experience designer|experience designer|interaction designer|service designer|ux research|ux researcher|designer de produto digital)/i, base: 42 },
  { label: "Produto Digital", re: /(digital product|produto digital|product analyst|analista de produto|product intern|estagio.*produto|product operations|product ops)/i, base: 38 },
  { label: "Experiência do Cliente / CX", re: /(customer experience|experiencia do cliente|\bcx\b)/i, base: 36 },
  { label: "Inovação", re: /(innovation|inovacao)/i, base: 35 },
  { label: "IA aplicada", re: /(artificial intelligence|inteligencia artificial|\bgenai\b|\bia generativa\b|ai innovation|inovacao.*ia|ia.*inovacao)/i, base: 34 },
  { label: "LXD / Design Instrucional", re: /(learning experience|\blxd\b|instructional design|design instrucional|aprendizagem corporativa)/i, base: 36 }
];

const HARD_EXCLUDE_TITLE_RE = /(product marketing|marketing de produto|desenvolvimento de produto|qualidade de produto|analista de sistemas|systems analyst|software engineer|software developer|developer|desenvolvedor|engenheiro|engineer|data scientist|cientista de dados|machine learning engineer|contabilidade|accounting|farmacia|quimica|biomedicina|laboratorio|construcao civil|arquitetura|customer support|suporte ao cliente|suporte tecnico|technical support|vendas|sales)/i;

const PROFILE_SKILLS: Array<[RegExp, string, number]> = [
  [/(figma|wireframe|prototip|design system|interface|ux\/ui|ui\/ux)/i, "UX/UI e prototipação", 8],
  [/(pesquisa com usuario|user research|ux research|entrevista|teste de usabilidade|usability|benchmark|pesquisa exploratoria)/i, "pesquisa e validação", 8],
  [/(jornada|journey|fluxo|arquitetura da informacao|information architecture|experiencia do usuario)/i, "jornadas e fluxos", 6],
  [/(inteligencia artificial|artificial intelligence|ia generativa|generative ai|chatgpt|copilot|prompt|governanca de ia|governance|automacao|automation)/i, "IA aplicada", 7],
  [/(learning experience|lxd|design instrucional|instructional design|aprendizagem corporativa|treinamento|learning)/i, "LXD / aprendizagem", 7],
  [/(documentacao|documentation|processo|process|melhoria continua|continuous improvement)/i, "documentação e melhoria contínua", 4],
  [/(customer experience|experiencia do cliente|customer centric|nps|csat|insight|feedback de clientes)/i, "experiência do cliente", 6],
  [/(produto digital|digital product|product discovery|discovery|hipotese|hypothesis|product strategy)/i, "produto digital", 7]
];

const CX_EVIDENCE_RE = /(pesquisa|research|jornada|journey|nps|csat|insight|feedback|customer centric|experiencia|experience|usuario|user|design|crm|comportamento)/i;
const PRODUCT_DIGITAL_EVIDENCE_RE = /(produto digital|digital product|plataforma digital|aplicativo|\bapp\b|ux|usuario|user|discovery|roadmap|squad|figma|prototip|interface|saas|web product|software product)/i;
const NON_DIGITAL_PRODUCT_CONTEXT_RE = /(urbanistic|urbanism|urbanismo|arquitet|construcao|imobiliari|loteamento|terreno|masterplan|engenharia civil|manufatura|industrial|farmaceut|laboratorio)/i;
const INNOVATION_EVIDENCE_RE = /(produto digital|digital product|design|ux|usuario|user|inteligencia artificial|artificial intelligence|ia generativa|prompt|automacao|automation|pesquisa|research|prototip|learning|aprendizagem|processo|plataforma digital)/i;
const AI_APPLIED_EVIDENCE_RE = /(ia generativa|generative ai|chatgpt|copilot|prompt|governanca|governance|produtizacao|automacao|automation|processo|produto|product|innovation|inovacao|workflow|agente de ia|ai agent)/i;
const LXD_EVIDENCE_RE = /(aprendizagem|learning|treinamento|training|conteudo|content|roteiro|storyboard|ava|lms|experiencia de aprendizagem|learning experience|educacao corporativa)/i;

const ACADEMIC_COMPATIBLE_RE = /(design grafico|design digital|\bdesign\b|comunicacao|publicidade|marketing|areas correlatas|area correlata|formacao correlata)/i;
const SPECIFIC_DEGREE_RE = /(ciencias contabeis|contabilidade|farmacia|quimica|biologia|biomedicina|engenharia quimica|engenharia civil|arquitetura|ciencia da computacao|ciencias da computacao|engenharia da computacao|sistemas de informacao|analise de sistemas|inteligencia artificial|automacao|pedagogia|licenciatura)/i;
const ACADEMIC_REQUIREMENT_RE = /(ensino superior|graduacao|formacao academica|cursando|estudante de)/i;
const COMPLETED_DEGREE_RE = /(ensino superior completo|superior completo|graduacao completa|formacao superior completa)/i;
const CURRENT_STUDY_OK_RE = /(cursando ou completo|cursando\/completo|superior cursando|graduacao em andamento|cursando ensino superior)/i;
const EXCESSIVE_EXP_RE = /(?:3|4|5|6|7|8|9|10)\+?\s*anos?[^.]{0,80}(experiencia|atuacao)|(?:experiencia|atuacao)[^.]{0,80}(?:3|4|5|6|7|8|9|10)\+?\s*anos?/i;
const HEAVY_TECH_TERMS = [/\bpython\b/i, /\bjava\b/i, /javascript|\bjs\b/i, /\breact\b/i, /\bsql\b/i, /\baws\b/i, /\bgcp\b/i, /\bazure\b/i, /tensorflow|pytorch/i, /machine learning/i, /elasticsearch|kibana|grafana/i];

function locationEligibility(j: any) {
  const loc = norm(j.location || "");
  const city = norm(j.city || "");
  const hasBrazil = /\b(brasil|brazil)\b/.test(loc) || /\b(brasil|brazil)\b/.test(norm(j.country || ""));
  const hasPortugal = /\bportugal\b/.test(loc) || /\bportugal\b/.test(norm(j.country || ""));
  const isSaoPauloCity = city ? city === "sao paulo" : /^sao paulo(?:\s*[,/|-]|\s*$)/.test(loc);
  const isRemote = Boolean(j.remote) || loc.includes("remote") || loc.includes("remoto");

  if (!isRemote && isSaoPauloCity) return { ok: true, group: "São Paulo · SP", reason: "São Paulo / SP" };
  if (isRemote && hasBrazil) return { ok: true, group: "Brasil · remoto", reason: "remoto para o Brasil" };
  if (isRemote && hasPortugal) return { ok: true, group: "Portugal · remoto", reason: "remoto para Portugal" };
  if (isRemote && isSaoPauloCity) return { ok: true, group: "São Paulo · SP", reason: "remoto em São Paulo / SP" };
  return { ok: false, group: null, reason: null };
}

function profileCompatibility(j: any) {
  const title = norm(j.title || "");
  const description = norm(j.description || "");
  const tags = norm((j.tags || []).join(" "));
  const hay = `${title} ${description} ${tags}`;
  const track = TRACKS.find(t => t.re.test(title));
  if (!track) return { ok: false, reason: "cargo fora do objetivo do currículo" };
  if (HARD_EXCLUDE_TITLE_RE.test(title)) return { ok: false, reason: "especialidade fora do perfil" };

  if (track.label === "Produto Digital") {
    if (NON_DIGITAL_PRODUCT_CONTEXT_RE.test(description) || !PRODUCT_DIGITAL_EVIDENCE_RE.test(description)) {
      return { ok: false, reason: "produto não digital ou sem evidência de produto digital" };
    }
  }
  if (track.label === "Experiência do Cliente / CX" && !CX_EVIDENCE_RE.test(description)) {
    return { ok: false, reason: "CX sem aderência a pesquisa/jornada/experiência" };
  }
  if (track.label === "Inovação" && !INNOVATION_EVIDENCE_RE.test(description)) {
    return { ok: false, reason: "inovação sem conexão com design/produto digital/IA/aprendizagem" };
  }
  if (track.label === "IA aplicada") {
    if (!AI_APPLIED_EVIDENCE_RE.test(description)) return { ok: false, reason: "IA técnica sem aderência ao perfil aplicado" };
  }
  if (track.label === "LXD / Design Instrucional" && !LXD_EVIDENCE_RE.test(description)) {
    return { ok: false, reason: "LXD sem conexão clara com aprendizagem" };
  }

  const reqIndex = description.search(/requisitos|qualificacoes|requirements|qualifications/);
  const requirements = reqIndex >= 0 ? description.slice(reqIndex, reqIndex + 3000) : description.slice(0, 3000);

  if (COMPLETED_DEGREE_RE.test(requirements) && !CURRENT_STUDY_OK_RE.test(requirements)) {
    return { ok: false, reason: "exige graduação concluída" };
  }
  if (ACADEMIC_REQUIREMENT_RE.test(requirements) && SPECIFIC_DEGREE_RE.test(requirements) && !ACADEMIC_COMPATIBLE_RE.test(requirements)) {
    return { ok: false, reason: "formação obrigatória incompatível" };
  }
  if (EXCESSIVE_EXP_RE.test(requirements)) {
    return { ok: false, reason: "experiência obrigatória acima do nível de entrada" };
  }

  if (track.label === "IA aplicada") {
    const heavyTechCount = HEAVY_TECH_TERMS.filter(re => re.test(requirements)).length;
    if (heavyTechCount >= 3) return { ok: false, reason: "vaga de IA predominantemente técnica/programação" };
  }

  let score = track.base;
  const reasons = [track.label];
  for (const [re, label, weight] of PROFILE_SKILLS) {
    if (re.test(hay)) {
      score += weight;
      if (reasons.length < 6) reasons.push(label);
    }
  }
  return { ok: true, track: track.label, score, reasons };
}

function scoreJob(j: any) {
  const seniorityHay = norm(` ${j.title} ${(j.tags || []).join(" ")} `);
  const isEntry = ENTRY_RE.test(seniorityHay);
  const isMid = MID_RE.test(seniorityHay);
  const isSenior = SENIOR_RE.test(seniorityHay);
  const eligibility = locationEligibility(j);
  const profile = profileCompatibility(j);

  let score = profile.ok ? Number(profile.score || 0) : 0;
  const reasons: string[] = profile.ok ? [...(profile.reasons || [])] : [];

  if (isEntry) { score += 18; reasons.unshift("estágio / júnior"); }
  if (isMid || isSenior) score -= 60;
  if (eligibility.ok) { score += 8; reasons.push(eligibility.reason as string); }
  if (j.remote) score += 3;

  if (j.publishedAt) {
    const age = (Date.now() - new Date(j.publishedAt).getTime()) / 86400000;
    if (age <= 3) score += 7;
    else if (age <= 10) score += 4;
    else if (age > 60) score -= 15;
  }

  return {
    ...j,
    score: Math.max(0, Math.min(100, score)),
    profileMatched: profile.ok,
    profileTrack: profile.track || null,
    profileRejectReason: profile.ok ? null : profile.reason,
    reasons: [...new Set(reasons)].slice(0, 7),
    level: isEntry && !isMid && !isSenior ? "entry" : isMid ? "mid" : isSenior ? "senior" : "unknown",
    locationEligible: eligibility.ok,
    locationGroup: eligibility.group
  };
}

async function getJson(url: string) {
  const r = await fetch(url, {
    headers: { "user-agent": UA, accept: "application/json" },
    signal: AbortSignal.timeout(10000),
    cache: "no-store"
  });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
}

async function gupy() {
  const queries = [
    "Product Designer", "Product Design", "UX Designer", "UX UI", "UI Designer", "UX Research",
    "Produto Digital", "Analista de Produto", "Product Operations", "Inovação",
    "Inteligência Artificial", "Customer Experience", "Design Instrucional", "Learning Experience"
  ];
  const pages = await Promise.allSettled(queries.map(async q => {
    const url = `https://employability-portal.gupy.io/api/v1/jobs?jobName=${encodeURIComponent(q)}&offset=0&limit=100`;
    const d: any = await getJson(url);
    return Array.isArray(d?.data) ? d.data : Array.isArray(d?.results) ? d.results : [];
  }));
  const byId = new Map<string, any>();
  for (const p of pages) {
    if (p.status !== "fulfilled") continue;
    for (const x of p.value) if (x?.id != null) byId.set(String(x.id), x);
  }
  return [...byId.values()].map((x: any) => {
    const workplace = norm(x.workplaceType || "");
    const remote = workplace === "remote" || workplace.includes("remot") || Boolean(x.isRemoteWork);
    const city = x.city || "";
    const state = x.state || "";
    const country = x.country || "";
    const location = [city, state, country].filter(Boolean).join(" / ") || (remote ? "Brasil / Remoto" : "Local n/d");
    return {
      id: `gupy-${x.id}`,
      source: "Gupy",
      title: x.name || x.title || "Vaga sem título",
      company: x.careerPageName || x.companyName || "Empresa não informada",
      location, city, state, country, remote,
      url: x.jobUrl || x.careerPageUrl || "",
      publishedAt: iso(x.publishedDate || x.createdAt || x.updatedAt),
      description: strip([x.description, x.responsibilities, x.prerequisites].filter(Boolean).join(" ")),
      tags: [x.workplaceType, x.jobType, x.type, x.roleName].filter(Boolean),
      sourceActive: true
    };
  });
}

async function jobicy() {
  const d: any = await getJson("https://jobicy.com/api/v2/remote-jobs?count=200");
  return (d.jobs || []).map((x: any) => ({
    id: `jobicy-${x.id}`, source: "Jobicy", title: x.jobTitle,
    company: x.companyName || "Empresa não informada", location: x.jobGeo || "Remoto", remote: true,
    url: x.url, publishedAt: iso(x.pubDate || x.jobPosted), description: strip(x.jobDescription || x.jobExcerpt),
    tags: [...(Array.isArray(x.jobIndustry) ? x.jobIndustry : [x.jobIndustry]), ...(Array.isArray(x.jobType) ? x.jobType : [x.jobType]), x.jobLevel].filter(Boolean),
    sourceActive: true
  }));
}

async function remotive() {
  const queries = ["product designer", "ux designer", "ui designer", "customer experience", "innovation", "learning experience", "instructional design"];
  const out: any[] = [];
  const pages = await Promise.allSettled(queries.map(async q => {
    const d: any = await getJson(`https://remotive.com/api/remote-jobs?search=${encodeURIComponent(q)}&limit=100`);
    return d.jobs || [];
  }));
  for (const p of pages) {
    if (p.status !== "fulfilled") continue;
    for (const x of p.value) out.push({
      id: `remotive-${x.id}`, source: "Remotive", title: x.title,
      company: x.company_name || "Empresa não informada", location: x.candidate_required_location || "Remoto", remote: true,
      url: x.url, publishedAt: iso(x.publication_date), description: strip(x.description),
      tags: [x.category, x.job_type, ...(x.tags || [])].filter(Boolean), sourceActive: true
    });
  }
  return out;
}

async function arbeitnow() {
  const d: any = await getJson("https://www.arbeitnow.com/api/job-board-api");
  return (d.data || []).map((x: any) => ({
    id: `arbeitnow-${x.slug || x.url}`, source: "Arbeitnow", title: x.title,
    company: x.company_name || "Empresa não informada", location: x.location || "Local n/d", remote: Boolean(x.remote),
    url: x.url, publishedAt: iso((x.created_at || 0) * 1000), description: strip(x.description),
    tags: [...(x.tags || []), ...(x.job_types || [])].filter(Boolean), sourceActive: true
  }));
}

async function remoteok() {
  const d: any = await getJson("https://remoteok.com/api");
  return (Array.isArray(d) ? d : []).filter((x: any) => x && x.position).map((x: any) => ({
    id: `remoteok-${x.id}`, source: "RemoteOK", title: x.position,
    company: x.company || "Empresa não informada", location: x.location || "Worldwide / Remote", remote: true,
    url: x.url || x.apply_url, publishedAt: iso(x.date || x.epoch * 1000), description: strip(x.description),
    tags: x.tags || [], sourceActive: true
  }));
}

function dedupe(items: any[]) {
  const seen = new Set<string>();
  const out: any[] = [];
  for (const j of items) {
    const key = `${String(j.title || "").toLowerCase().replace(/\W/g, "")}|${String(j.company || "").toLowerCase().replace(/\W/g, "")}`;
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(j);
  }
  return out;
}

export async function GET(request: Request) {
  const refresh = new URL(request.url).searchParams.has("refresh");
  const sources: Array<[string, () => Promise<any[]>]> = [
    ["Gupy", gupy], ["Jobicy", jobicy], ["Remotive", remotive], ["Arbeitnow", arbeitnow], ["RemoteOK", remoteok]
  ];
  const settled = await Promise.allSettled(sources.map(([, fn]) => fn()));
  let jobs: any[] = [];
  const status: Record<string, any> = {};
  settled.forEach((r, i) => {
    const name = sources[i][0];
    if (r.status === "fulfilled") {
      status[name] = { ok: true, count: r.value.length };
      jobs.push(...r.value);
    } else status[name] = { ok: false, error: String((r.reason as any)?.message || r.reason) };
  });

  jobs = dedupe(jobs)
    .map(scoreJob)
    .filter(j => j.url && j.title && j.company)
    .filter(j => j.profileMatched && j.level === "entry" && j.locationEligible)
    .filter(j => j.score >= 60)
    .filter(j => !j.publishedAt || (Date.now() - new Date(j.publishedAt).getTime()) / 86400000 <= 90)
    .sort((a, b) => b.score - a.score || +new Date(b.publishedAt || 0) - +new Date(a.publishedAt || 0))
    .slice(0, 100)
    .map(({ profileMatched, locationEligible, profileRejectReason, ...j }) => j);

  return Response.json({
    meta: {
      generatedAt: new Date().toISOString(),
      sources: status,
      criteria: "Currículo Gabriel Gonzaga 2026: somente estágio/júnior realmente aderente a Product Design/UX/UI, Produto Digital, CX, Inovação, IA aplicada ou LXD; formação e requisitos compatíveis; São Paulo capital ou remoto Brasil/Portugal."
    },
    jobs
  }, {
    headers: { "Cache-Control": refresh ? "no-store" : "public, s-maxage=900, stale-while-revalidate=1800" }
  });
}
