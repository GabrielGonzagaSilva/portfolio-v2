import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioFooter } from "@/components/layout/portfolio-footer";
import { PrimaryNav } from "@/components/navigation/primary-nav";
import styles from "./quantolab.module.css";

export const metadata: Metadata = {
  title: "QuantoLab",
  description: "Case de Product Design do QuantoLab, da coleção de calculadoras a um sistema organizado por decisões.",
};

const media = {
  hero: "/images/projects/quantolab/hero.png",
  catalog: "/images/projects/quantolab/catalog.png",
  salaryResult: "/images/projects/quantolab/salary-result.png",
  cltPj: "/images/projects/quantolab/clt-pj.png",
  home: "/images/projects/quantolab/home.png",
  salaryInput: "/images/projects/quantolab/salary-input.png",
  methodology: "/images/projects/quantolab/methodology.png",
  mobilePhone: "/images/projects/quantolab/mobile-phone.png",
} as const;

const summaryItems = [
  ["01", "Arquitetura", "As 28 ferramentas foram agrupadas pelo contexto da decisão, não pelo nome do cálculo."],
  ["02", "Sistema", "Campos, estados, resultados e formatação passaram a seguir padrões compartilhados."],
  ["03", "Confiança", "Resultado, fórmula, premissas e fontes convivem no mesmo fluxo, com prioridades diferentes."],
] as const;

const architectureItems = [
  [
    "01",
    "Descoberta e cálculo pedem ritmos diferentes.",
    "A home orienta e apresenta possibilidades. Dentro das ferramentas, a interface reduz distrações e prioriza entrada, resultado e conferência.",
  ],
  [
    "02",
    "Depois da primeira ferramenta, as próximas precisam ser familiares.",
    "Entrada → resultado → explicação → próximo passo. A sequência se repete para reduzir reaprendizado entre ferramentas.",
  ],
  [
    "03",
    "Contexto aparece quando ajuda a decidir.",
    "Metodologia, fontes e guias ficam disponíveis quando acrescentam contexto, sem disputar atenção com o cálculo principal.",
  ],
] as const;

const principleSteps = [
  ["01", "Calcular", "O resultado principal aparece primeiro, sem competir com explicações."],
  ["02", "Conferir", "Fórmula, premissas, detalhamento e fontes ficam logo abaixo para quem quiser validar a conta."],
  ["03", "Continuar", "Quando existe uma próxima decisão relacionada, ela aparece como continuidade, não como obrigação."],
] as const;

const beforeAfter = [
  ["Modelo mental", "Coleção de calculadoras", "Sistema por contexto de decisão"],
  ["Navegação", "Ferramenta isolada", "Próxima decisão conectada"],
  ["Consistência", "Regras por página", "Padrões compartilhados"],
  ["Confiança", "Resultado opaco", "Fórmula, premissas e fonte acessíveis"],
] as const;

const learnings = [
  [
    "01",
    "Quando o catálogo cresce, o sistema pesa mais que a tela.",
    "Com muitas ferramentas, repetir decisões de navegação, estados e formatação custa mais do que desenhar uma tela específica.",
  ],
  [
    "02",
    "Em finanças, confiança precisa ser verificável.",
    "Mostrar fórmula, premissas, fonte e limites é mais útil do que apenas afirmar que o resultado é confiável.",
  ],
  [
    "03",
    "Nem toda parte do produto precisa ter a mesma intensidade visual.",
    "A marca pode aparecer mais na descoberta e recuar durante o cálculo, quando clareza e leitura precisam dominar.",
  ],
] as const;

function Divider() {
  return <div className={styles.divider} aria-hidden="true" />;
}

function Evidence({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.evidence}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default function QuantoLabPage() {
  return (
    <main id="top" className={styles.page}>
      <PrimaryNav active="work" variant="case" />

      <section className={styles.hero} aria-labelledby="quantolab-title">
        <Link href="/#work" className={styles.backLink}>
          ←&nbsp; VOLTAR AOS PROJETOS
        </Link>

        <div className={styles.heroIntro}>
          <h1 id="quantolab-title" className={styles.heroTitle}>QuantoLab</h1>
          <p className={styles.heroSubtitle}>De calculadoras isoladas a um produto organizado por decisões</p>
          <p className={styles.heroDescriptor}>Produto autoral · Product Strategy, UX/UI, Design System, Implementação</p>
        </div>

        <Divider />

        <div className={styles.metadataGrid}>
          <div className={styles.metadataItem}><span>ESCALA</span><p>28 ferramentas</p></div>
          <div className={styles.metadataItem}><span>ARQUITETURA</span><p>4 domínios de decisão</p></div>
          <div className={styles.metadataItem}><span>REFERÊNCIAS</span><p>referências fiscais 2026</p></div>
          <div className={styles.metadataItem}><span>NO AR EM</span><a href="https://quantolab.com.br" target="_blank" rel="noreferrer">quantolab.com.br</a></div>
        </div>
      </section>

      <section className={styles.heroVisualSection} aria-label="QuantoLab em uso">
        <div className={styles.heroVisual}>
          <img src={media.hero} alt="Composição visual do produto QuantoLab" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.summary}`}>
        <div className={styles.container}>
          <div className={styles.introBlock}>
            <h2 className={styles.title44}>O QuantoLab começou como uma coleção de calculadoras. A V2 transformou essa base em um sistema de produto.</h2>
            <p className={styles.body17}>As 28 ferramentas passaram a compartilhar arquitetura, padrões de interação e uma lógica comum para apresentar resultados, fontes e próximos passos.</p>
          </div>
          <Divider />
          <div className={styles.threeColumns}>
            {summaryItems.map(([number, title, copy]) => (
              <article className={styles.summaryItem} key={number}>
                <span className={styles.number}>{number}</span>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.body15}>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.problem}`}>
        <div className={styles.container}>
          <div className={styles.introBlock}>
            <h2 className={styles.title48}>As ferramentas funcionavam. O problema aparecia quando o catálogo crescia.</h2>
            <p className={styles.body17}>Cada calculadora resolvia o próprio cálculo, mas reabria decisões de navegação, conteúdo, formatação e estados. Quanto mais o catálogo crescia, mais essas escolhas se repetiam.</p>
          </div>
          <Divider />
          <div className={styles.threeColumns}>
            <p className={styles.body18}>Padrões mudavam de uma ferramenta para outra.</p>
            <p className={styles.body18}>Uma decisão nem sempre levava naturalmente à próxima.</p>
            <p className={styles.body18}>Novas páginas repetiam escolhas que já tinham sido feitas.</p>
          </div>
          <p className={styles.direction}>A V2 passou a tratar navegação, interação e conteúdo como decisões de produto, não como ajustes de página.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.statement}`}>
        <div className={styles.container}>
          <h2 className={styles.statementTitle}>Organizar pelo que a pessoa quer decidir, não pelo nome da calculadora.</h2>
        </div>
      </section>

      <section className={`${styles.section} ${styles.architecture}`}>
        <div className={styles.container}>
          <p className={styles.body17}>Quem chega ao QuantoLab pensa em aceitar uma proposta, abrir um CNPJ ou cobrar um cliente. A arquitetura passou a partir dessas decisões, e não do nome de cada cálculo.</p>
          <Divider />
          <div className={styles.architectureList}>
            {architectureItems.map(([number, title, copy]) => (
              <article className={styles.architectureRow} key={number}>
                <div className={styles.architectureRail}>
                  <span className={styles.number}>{number}</span>
                  <h3 className={styles.rowTitle}>{title}</h3>
                </div>
                <p className={styles.body16}>{copy}</p>
              </article>
            ))}
          </div>
          <Evidence src={media.catalog} alt="Catálogo do QuantoLab organizado por domínio" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.system}`}>
        <div className={styles.container}>
          <div className={styles.introBlock}>
            <h2 className={styles.title48}>As regras que se repetiam viraram padrões compartilhados.</h2>
            <p className={styles.body17}>Campos, resultados, estados, navegação e formatação numérica passaram a seguir a mesma lógica entre ferramentas. A próxima implementação parte dessa base, em vez de recomeçar.</p>
          </div>
          <Divider />
          <div className={styles.twoColumns}>
            <p className={styles.body18}>Moeda, percentual e valores grandes seguem a mesma regra em todo o produto. Em uma ferramenta de cálculo, formatação inconsistente não é detalhe visual: é dúvida sobre o número.</p>
            <p className={styles.body17}>Durante o cálculo, a interface reduz a presença da marca e prioriza contraste, tipografia, grid e espaço. O lime fica reservado para pontos de atenção.</p>
          </div>
          <div className={styles.evidenceStack}>
            <Evidence src={media.salaryResult} alt="Resultado de salário líquido no QuantoLab" />
            <Evidence src={media.cltPj} alt="Comparação CLT e PJ no QuantoLab" />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.statement}`}>
        <div className={styles.container}>
          <h2 className={styles.statementTitle}>Primeiro o resultado. Depois, tudo o que ajuda a conferir.</h2>
        </div>
      </section>

      <section className={`${styles.section} ${styles.principle}`}>
        <div className={styles.container}>
          <p className={styles.body17}>Em um produto sobre dinheiro, o número precisa aparecer com clareza sem esconder como foi calculado. Resultado, detalhamento, premissas e fontes entram em níveis diferentes da mesma leitura.</p>
          <Divider />
          <div className={styles.threeColumns}>
            {principleSteps.map(([number, title, copy]) => (
              <article className={styles.summaryItem} key={number}>
                <span className={styles.number}>{number}</span>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.body15}>{copy}</p>
              </article>
            ))}
          </div>
          <p className={styles.consequence}>Para sustentar essa hierarquia, lógica de cálculo e conteúdo foram separados, e cada ferramenta passou a declarar suas premissas, fontes e limites.</p>
          <Evidence src={media.salaryResult} alt="Resultado de salário líquido com detalhamento disponível" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.productInUse}`}>
        <div className={styles.container}>
          <div className={styles.productNarrative}>
            <div className={styles.productIntro}>
              <h2 className={styles.title44}>As mesmas regras aparecem em quatro momentos do produto.</h2>
              <p className={styles.body18}>As telas abaixo mostram como arquitetura, hierarquia e padrões compartilhados se comportam em descoberta, cálculo, comparação e conferência.</p>
            </div>

            <article className={styles.productMoment}>
              <div className={styles.momentCopy}>
                <h3 className={styles.narrativeTitle}>A home começa pela pergunta, não pela calculadora.</h3>
                <p className={styles.body17}>A entrada organiza o catálogo pelo que a pessoa quer resolver. Quem prefere explorar pode abrir a lista completa de ferramentas.</p>
              </div>
              <Evidence src={media.home} alt="Home do QuantoLab orientada pela intenção do usuário" />
            </article>

            <article className={styles.productMoment}>
              <div className={styles.momentCopy}>
                <h3 className={styles.narrativeTitle}>Entrada, resultado e detalhamento ficam no mesmo fluxo.</h3>
                <p className={styles.body17}>Poucos campos para começar. Depois do cálculo, o resultado assume prioridade e o detalhamento permanece no mesmo contexto.</p>
              </div>
              <div className={styles.evidenceStack}>
                <Evidence src={media.salaryInput} alt="Entrada da calculadora de salário líquido" />
                <Evidence src={media.salaryResult} alt="Resultado da calculadora de salário líquido" />
              </div>
            </article>

            <article className={styles.productMoment}>
              <div className={styles.momentCopy}>
                <h3 className={styles.narrativeTitle}>Algumas ferramentas precisam comparar, não apenas calcular.</h3>
                <p className={styles.body17}>Na CLT × PJ, o resultado organiza cenários lado a lado para apoiar a leitura das diferenças.</p>
              </div>
              <Evidence src={media.cltPj} alt="Comparação de cenários CLT e PJ" />
            </article>

            <article className={styles.productMoment}>
              <div className={styles.momentCopy}>
                <h3 className={styles.narrativeTitle}>Premissas e fontes aparecem sem interromper a tarefa.</h3>
                <p className={styles.body17}>Quem precisa conferir encontra metodologia, premissas e fontes depois do resultado. No mobile, a mesma hierarquia é preservada.</p>
              </div>
              <div className={styles.trustEvidence}>
                <Evidence src={media.methodology} alt="Metodologia, premissas e fontes do QuantoLab" />
                <img className={styles.mobilePhone} src={media.mobilePhone} alt="QuantoLab em um dispositivo móvel" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.result}`}>
        <div className={styles.container}>
          <div className={styles.introBlock}>
            <h2 className={styles.title48}>A V2 consolidou uma base comum para as 28 ferramentas.</h2>
            <p className={styles.body17}>Arquitetura, interação, formatação e critérios de confiança passaram a seguir uma lógica compartilhada. Novas ferramentas podem partir desses padrões, em vez de reabrir as mesmas decisões.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.beforeAfterSection}`}>
        <div className={styles.container}>
          <h2 className={styles.title44}>O que mudou do catálogo para o sistema.</h2>
          <div className={styles.beforeAfterTable}>
            <div className={`${styles.beforeAfterRow} ${styles.beforeAfterHeader}`}>
              <span>DIMENSÃO</span><span>ANTES</span><span>DEPOIS</span>
            </div>
            {beforeAfter.map(([dimension, before, after]) => (
              <div className={styles.beforeAfterRow} key={dimension}>
                <strong>{dimension}</strong><p>{before}</p><p>{after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.limits}`}>
        <div className={styles.container}>
          <div className={styles.introBlock}>
            <h2 className={styles.title44}>Premissas, limites e fontes ficam perto do resultado.</h2>
            <p className={styles.body17}>Ferramentas financeiras são aproximações. Quando um cálculo depende de regra, taxa ou condição externa, essa informação precisa aparecer onde pode afetar a leitura do número.</p>
          </div>
          <Divider />
          <div className={styles.twoColumns}>
            <p className={styles.body17}>Premissas e exceções entram em hierarquia secundária, ligadas ao resultado que afetam. Quando há uma fonte oficial, ela fica disponível para conferência.</p>
            <div className={styles.limitEmphasis}>
              <p className={styles.body17}>O produto também evita pedir dados que não participam do cálculo.</p>
              <p>Não coletar informação desnecessária também é uma decisão de confiança.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.learnings}`}>
        <div className={styles.container}>
          <h2 className={styles.title44}>Três aprendizados vieram da passagem de calculadoras isoladas para um sistema.</h2>
          <Divider />
          <div className={styles.threeColumns}>
            {learnings.map(([number, title, copy]) => (
              <article className={styles.learningItem} key={number}>
                <span className={styles.number}>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.closing}`}>
        <div className={styles.container}>
          <h2>Faça as contas antes de decidir.</h2>
          <p className={styles.body17}>Product Strategy · UX/UI · Design System · Product Development</p>
          <div className={styles.closingLink}>
            <span>ACESSAR</span>
            <a href="https://quantolab.com.br" target="_blank" rel="noreferrer">quantolab.com.br ↗</a>
          </div>
          <Divider />
        </div>
      </section>

      <section className={`${styles.section} ${styles.nextCase}`} aria-label="Próximo projeto">
        <div className={styles.container}>
          <div className={styles.nextCaseRow}>
            <h2>Design System</h2>
            <span>PRÓXIMO&nbsp; ↗</span>
          </div>
          <Divider />
        </div>
      </section>

      <div className={styles.footerShell}>
        <PortfolioFooter />
      </div>
    </main>
  );
}
