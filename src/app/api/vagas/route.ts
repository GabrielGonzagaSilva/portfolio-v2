/* eslint-disable @typescript-eslint/no-explicit-any */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UA = "GabrielGonzaga-JobRadar/1.2";
const strip = (s = "") => String(s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const norm = (s = "") => strip(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const iso = (v: any) => {
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
};

const POSITIVE: Array<[string, number]> = [
  ["product designer", 30], ["product design", 24], ["ux designer", 27], ["ui designer", 23], ["ux/ui", 25],
  ["user experience", 19], ["service designer", 22], ["service design", 17], ["design system", 18],
  ["interaction designer", 21], ["experience designer", 21], ["customer experience", 15], ["cx ", 10],
  ["innovation", 12], ["inovacao", 12], ["artificial intelligence", 9], ["inteligencia artificial", 9],
  ["learning experience", 15], ["lxd", 15], ["instructional design", 13], ["design instrucional", 13],
  ["digital product", 13], ["produto digital", 13]
];

const ENTRY = [
  "junior", " jr ", "jr.", "intern", "internship", "estagio", "estagiario", "estagiaria"
];

const MID = ["mid-level", "mid level", "pleno", "intermediate"];
const SENIOR = [
  "senior", " sr ", "sr.", "staff", "lead", "principal", "manager", "gerente", "director", "diretor",
  "head of", "vice president", " vp ", "coordenador", "coordinator", "supervisor", "specialist", "especialista"
];

const SP_EXCLUDED = [
  "barueri", "alphaville", "osasco", "guarulhos", "santo andre", "sao bernardo do campo", "sao caetano do sul",
  "diadema", "taboao da serra", "cotia", "mogi das cruzes", "campinas", "jundiai", "sorocaba", "santos"
];

function locationEligibility(j: any) {
  const loc = norm(j.location || "");
  const hasBrazil = /\b(brasil|brazil)\b/.test(loc);
  const hasPortugal = /\bportugal\b/.test(loc);
  const excludedSpCity = SP_EXCLUDED.some(city => loc.includes(city));
  const isSaoPaulo = !excludedSpCity && (
    loc.includes("sao paulo") || loc.includes("sp, brazil") || loc.includes("sp, brasil") || loc === "sp"
  );
  const isRemote = Boolean(j.remote) || loc.includes("remote") || loc.includes("remoto");

  if (!isRemote && isSaoPaulo) return { ok: true, group: "São Paulo · SP", reason: "São Paulo / SP" };
  if (isRemote && hasBrazil) return { ok: true, group: "Brasil · remoto", reason: "remoto para o Brasil" };
  if (isRemote && hasPortugal) return { ok: true, group: "Portugal · remoto", reason: "remoto para Portugal" };
  if (isRemote && isSaoPaulo) return { ok: true, group: "São Paulo · SP", reason: "remoto em São Paulo / SP" };

  return { ok: false, group: null, reason: null };
}

function scoreJob(j: any) {
  const hay = norm(` ${j.title} ${j.description || ""} ${(j.tags || []).join(" ")} ${j.location || ""} `);
  const seniorityHay = norm(` ${j.title} ${(j.tags || []).join(" ")} `);
  let score = 25;
  const reasons: string[] = [];
  let roleMatched = false;

  for (const [k, w] of POSITIVE) {
    if (hay.includes(k)) {
      roleMatched = true;
      score += w;
      if (reasons.length < 4) reasons.push(k);
    }
  }

  const isEntry = ENTRY.some(k => seniorityHay.includes(k));
  const isMid = MID.some(k => seniorityHay.includes(k));
  const isSenior = SENIOR.some(k => seniorityHay.includes(k));
  const eligibility = locationEligibility(j);

  if (isEntry) { score += 28; reasons.unshift("estágio / júnior"); }
  if (isMid || isSenior) score -= 55;
  if (eligibility.ok) { score += 10; reasons.push(eligibility.reason as string); }
  if (j.remote) score += 4;

  if (j.publishedAt) {
    const age = (Date.now() - new Date(j.publishedAt).getTime()) / 86400000;
    if (age <= 3) score += 8;
    else if (age <= 10) score += 5;
    else if (age > 60) score -= 20;
  }

  return {
    ...j,
    score: Math.max(0, Math.min(100, score)),
    roleMatched,
    reasons: [...new Set(reasons)],
    level: isEntry && !isMid && !isSenior ? "entry" : isMid ? "mid" : isSenior ? "senior" : "unknown",
    locationEligible: eligibility.ok,
    locationGroup: eligibility.group
  };
}

async function getJson(url: string) {
  const r = await fetch(url, {
    headers: { "user-agent": UA, accept: "application/json" },
    signal: AbortSignal.timeout(9000),
    cache: "no-store"
  });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
}

async function jobicy() {
  const d: any = await getJson("https://jobicy.com/api/v2/remote-jobs?count=200");
  return (d.jobs || []).map((x: any) => ({
    id: `jobicy-${x.id}`, source: "Jobicy", title: x.jobTitle,
    company: x.companyName || "Empresa não informada", location: x.jobGeo || "Remoto", remote: true,
    url: x.url, publishedAt: iso(x.pubDate || x.jobPosted), description: strip(x.jobDescription || x.jobExcerpt),
    tags: [...(Array.isArray(x.jobIndustry) ? x.jobIndustry : [x.jobIndustry]), ...(Array.isArray(x.jobType) ? x.jobType : [x.jobType]), x.jobLevel].filter(Boolean),
    activeValidated: true
  }));
}

async function remotive() {
  const queries = ["product designer", "ux designer", "ui designer", "innovation", "learning experience", "instructional design"];
  const out: any[] = [];
  for (const q of queries) {
    try {
      const d: any = await getJson(`https://remotive.com/api/remote-jobs?search=${encodeURIComponent(q)}&limit=100`);
      for (const x of d.jobs || []) out.push({
        id: `remotive-${x.id}`, source: "Remotive", title: x.title,
        company: x.company_name || "Empresa não informada", location: x.candidate_required_location || "Remoto", remote: true,
        url: x.url, publishedAt: iso(x.publication_date), description: strip(x.description),
        tags: [x.category, x.job_type, ...(x.tags || [])].filter(Boolean), activeValidated: true
      });
    } catch { /* fonte parcial não derruba o radar */ }
  }
  return out;
}

async function arbeitnow() {
  const d: any = await getJson("https://www.arbeitnow.com/api/job-board-api");
  return (d.data || []).map((x: any) => ({
    id: `arbeitnow-${x.slug || x.url}`, source: "Arbeitnow", title: x.title,
    company: x.company_name || "Empresa não informada", location: x.location || "Local n/d", remote: Boolean(x.remote),
    url: x.url, publishedAt: iso((x.created_at || 0) * 1000), description: strip(x.description),
    tags: [...(x.tags || []), ...(x.job_types || [])].filter(Boolean), activeValidated: true
  }));
}

async function remoteok() {
  const d: any = await getJson("https://remoteok.com/api");
  return (Array.isArray(d) ? d : []).filter((x: any) => x && x.position).map((x: any) => ({
    id: `remoteok-${x.id}`, source: "RemoteOK", title: x.position,
    company: x.company || "Empresa não informada", location: x.location || "Worldwide / Remote", remote: true,
    url: x.url || x.apply_url, publishedAt: iso(x.date || x.epoch * 1000), description: strip(x.description),
    tags: x.tags || [], activeValidated: true
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
    ["Jobicy", jobicy], ["Remotive", remotive], ["Arbeitnow", arbeitnow], ["RemoteOK", remoteok]
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
    .filter(j => j.url && j.title && j.company && j.roleMatched)
    .filter(j => j.level === "entry" && j.locationEligible)
    .filter(j => j.score >= 30)
    .filter(j => !j.publishedAt || (Date.now() - new Date(j.publishedAt).getTime()) / 86400000 <= 90)
    .sort((a, b) => b.score - a.score || +new Date(b.publishedAt || 0) - +new Date(a.publishedAt || 0))
    .slice(0, 350)
    .map(({ roleMatched, locationEligible, ...j }) => j);

  return Response.json({
    meta: {
      generatedAt: new Date().toISOString(),
      sources: status,
      criteria: "Somente estágio/júnior; São Paulo/SP presencial ou híbrido; remoto com elegibilidade explícita para Brasil ou Portugal."
    },
    jobs
  }, {
    headers: { "Cache-Control": refresh ? "no-store" : "public, s-maxage=7200, stale-while-revalidate=21600" }
  });
}
