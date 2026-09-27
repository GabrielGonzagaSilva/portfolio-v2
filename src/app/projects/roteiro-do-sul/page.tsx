import type { Metadata } from "next";
import { PortfolioFooter } from "@/components/layout/portfolio-footer";
import { PrimaryNav } from "@/components/navigation/primary-nav";
import {
  ProjectDivider,
  ProjectEvidence,
  ProjectHero,
  ProjectNextCase,
} from "@/components/projects/case-study";
import styles from "./roteiro-do-sul.module.css";

export const metadata: Metadata = {
  title: "Roteiro do Sul",
  description: "Case de Product Design System do Roteiro do Sul, da estrutura inicial a um sistema responsivo para Mobile e Web.",
};

const media = {
  hero: "/images/projects/roteiro-do-sul/case/hero.png",
  diagram: "/images/projects/roteiro-do-sul/case/diagram-1.png",
  foundationsColor: "/images/projects/roteiro-do-sul/case/foundations-color.png",
  foundationsTypography: "/images/projects/roteiro-do-sul/case/foundations-typography.png",
  responsive: "/images/projects/roteiro-do-sul/case/effects-responsive.png",
  mobileCoreUi: "/images/projects/roteiro-do-sul/case/mobile-core-ui.png",
  mobileContentFeedback: "/images/projects/roteiro-do-sul/case/mobile-content-feedback.png",
  bottomSheet: "/images/projects/roteiro-do-sul/case/bottom-sheet-states.png",
  mobileHome: "/images/projects/roteiro-do-sul/case/mobile-home.png",
  mobileProfile: "/images/projects/roteiro-do-sul/case/mobile-profile.png",
  mobileBusiness: "/images/projects/roteiro-do-sul/case/mobile-business.png",
  webResponsive: "/images/projects/roteiro-do-sul/case/web-responsive.png",
  webHome: "/images/projects/roteiro-do-sul/case/web-home.png",
  webSearch: "/images/projects/roteiro-do-sul/case/web-search.png",
  webBusiness: "/images/projects/roteiro-do-sul/case/web-business.png",
  reusableStates: "/images/projects/roteiro-do-sul/case/reusable-states.png",
  stateResults: "/images/projects/roteiro-do-sul/case/state-results.png",
  stateLoading: "/images/projects/roteiro-do-sul/case/state-loading.png",
  stateNoResults: "/images/projects/roteiro-do-sul/case/state-no-results.png",
  stateError: "/images/projects/roteiro-do-sul/case/state-error.png",
  stateSuccess: "/images/projects/roteiro-do-sul/case/state-success.png",
} as const;

const heroMetadata = [
  { label: "ESCALA", value: "174 telas" },
  { label: "COMPONENTES", value: "78 componentes-base" },
  { label: "FLUXOS", value: "37 reutilizáveis" },
  { label: "DECISÕES", value: "111 estruturadas" },
] as const;

const challengeCards = [
  ["01", "Poucas telas, pouca cobertura", "O rascunho inicial mostrava a direção, mas ainda não cobria a variedade de jornadas que o produto precisaria sustentar."],
  ["02", "Decisões ainda locais", "Padrões visuais e de interação apareciam caso a caso, sem critérios reaproveitáveis."],
  ["03", "Crescimento sem base", "Adicionar novas telas naquele estágio aumentaria inconsistências entre Mobile, Web e operação."],
] as const;

const decisionFlow = ["FOUNDATIONS", "SEMANTIC TOKENS", "COMPONENTS & PATTERNS", "MOBILE + WEB", "PRODUCT EXPERIENCES"] as const;

const mobileCaptions = [
  ["INÍCIO / DESCOBERTA", "Explorar sem excesso de informação.", "Conteúdo e categorias ficam acessíveis logo na entrada para reduzir o esforço de exploração."],
  ["PERFIL / DECISÃO", "Reunir o que sustenta a escolha.", "Informações do negócio, horários, descrição, comodidades e contato ficam no mesmo contexto de decisão."],
  ["PARCEIRO / PAINEL", "Mudar a prioridade para operação.", "A linguagem visual continua a mesma, mas o foco passa para cadastro, acompanhamento e gestão."],
] as const;

const webCaptions = [
  ["HOME / DESCOBERTA", "Dar visão ampla sem perder os caminhos principais.", "Mais conteúdo fica visível ao mesmo tempo sem interromper a navegação principal."],
  ["BUSCA / RESULTADOS", "Manter filtros e resultados no mesmo contexto.", "A comparação acontece sem esconder os critérios usados para refinar a busca."],
  ["NEGÓCIO / OPERAÇÃO", "Concentrar acompanhamento e gestão.", "Indicadores, anúncios e ações operacionais dividem a mesma visão."],
] as const;

const accessibility = [
  ["AA", "Contraste", "Legibilidade para textos e controles."],
  ["44 px", "Toque", "Área mínima de interação usada como regra do sistema."],
  ["FOCO", "Navegação", "Estados de foco visíveis e ordem lógica de navegação."],
  ["COR + TEXTO", "Sinais combinados", "A informação continua compreensível sem depender apenas da cor."],
] as const;

const scaleMetrics = [
  ["174", "telas de produto"],
  ["111", "decisões estruturadas"],
  ["78", "componentes-base"],
  ["37", "fluxos reutilizáveis"],
] as const;

const evolutionCards = [
  ["ESCALA", "Novas formas de descoberta", "Novos conteúdos e jornadas podem ampliar as formas de explorar a região."],
  ["ATRAÇÃO", "Mais negócios na plataforma", "Perfis, reputação, contato e gestão criam espaço para ampliar a participação de negócios locais."],
  ["EXPANSÃO", "Novos territórios", "A arquitetura responsiva e os padrões compartilhados permitem adaptar novos contextos preservando a lógica do produto."],
] as const;

const learnings = [
  ["01", "Começar pelo que existe é diferente de começar do zero.", "O rascunho serviu como evidência de intenção e também mostrou onde faltavam critérios. Revisar antes de reconstruir ajudou a preservar o que fazia sentido sem transformar decisões locais em regras do sistema."],
  ["02", "Nem toda decisão existente precisa virar padrão.", "A passagem de poucas telas para um sistema exigiu distinguir soluções circunstanciais de comportamentos que realmente apareciam de forma recorrente nas jornadas."],
  ["03", "A escala muda o peso das pequenas decisões.", "Em poucas telas, uma inconsistência parece pontual. Em 174, ela se multiplica. Estruturar cor, espaçamento, estado e comportamento cedo evitou repetir o mesmo problema em dezenas de contextos."],
] as const;

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </>
  );
}

function CaptionCards({ items }: { items: readonly (readonly [string, string, string])[] }) {
  return (
    <div className={styles.captionGrid}>
      {items.map(([eyebrow, title, copy]) => (
        <article className={styles.captionCard} key={eyebrow}>
          <span>{eyebrow}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </div>
  );
}

function Device({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.device}>
      <div className={styles.deviceScreen}><img src={src} alt={alt} /></div>
    </div>
  );
}

export default function RoteiroDoSulPage() {
  return (
    <main id="top" className={styles.page}>
      <PrimaryNav active="work" variant="case" />

      <ProjectHero
        titleId="rds-title"
        title="Roteiro do Sul"
        subtitle="De um rascunho inicial com poucas telas a um sistema capaz de sustentar 174 telas em Mobile e Web."
        descriptor="Product Design System · Mobile + Web"
        metadata={heroMetadata}
        classes={{
          section: styles.hero,
          backLink: styles.backLink,
          intro: styles.heroIntro,
          title: styles.heroTitle,
          subtitle: styles.heroSubtitle,
          descriptor: styles.heroDescriptor,
          divider: styles.divider,
          metadataGrid: styles.metadataGrid,
          metadataItem: styles.metadataItem,
        }}
      />

      <section className={styles.heroVisualSection} aria-label="Roteiro do Sul em Mobile e Web">
        <ProjectEvidence src={media.hero} alt="Composição do sistema Roteiro do Sul em dispositivos" className={styles.heroVisual} />
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="O DESAFIO" title="O produto já tinha forma. Faltava uma lógica para crescer.">
            <p>As primeiras telas ajudavam a visualizar a proposta, mas ainda eram poucas e genéricas demais para sustentar jornadas maiores. Cores, espaçamentos, estados e comportamentos apareciam como decisões locais, sem uma estrutura compartilhada.</p>
            <p>A partir daí, o trabalho passou a ser separar o que era apenas solução de tela do que precisava virar regra de produto.</p>
          </SectionIntro>
          <ProjectDivider className={styles.divider} />
          <div className={styles.threeColumns}>
            {challengeCards.map(([number, title, copy]) => (
              <article className={styles.textCard} key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="O ECOSSISTEMA" title="Visitante e negócio local usam o mesmo produto por motivos diferentes.">
            <p>Para visitantes, a jornada vai de descobrir e explorar até avaliar, escolher e entrar em contato. Para negócios locais, começa no cadastro e segue por publicação, gestão e acompanhamento.</p>
            <p>Essa diferença orientou o sistema: compartilhar linguagem, estados e padrões onde havia recorrência, mas preservar estruturas específicas quando a tarefa exigia outra densidade ou outro comportamento.</p>
          </SectionIntro>
          <ProjectEvidence src={media.diagram} alt="Diagrama do ecossistema do Roteiro do Sul" className={styles.diagramEvidence} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="A DECISÃO" title="O primeiro passo foi organizar o que já existia antes de expandir.">
            <p>O objetivo não era descartar o rascunho, mas entender o que valia preservar e o que precisava virar regra. Parti das telas existentes para identificar padrões recorrentes, inconsistências e decisões que pediam uma estrutura comum.</p>
            <p>A base foi organizada em camadas, com foundations, tokens semânticos, componentes, padrões e regras responsivas. Assim, novas jornadas passaram a partir de critérios compartilhados, em vez de exigir novas decisões a cada tela.</p>
          </SectionIntro>
          <div className={styles.decisionFlow}>
            {decisionFlow.map((item, index) => (
              <div className={styles.flowCard} key={item}><span>0{index + 1}</span><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="FOUNDATIONS" title="A evolução começou organizando as decisões visuais fora das telas.">
            <p>Em vez de deixar cor, tipografia e dimensões dependerem de cada composição, esses valores foram estruturados em foundations e tokens semânticos. Isso separou aparência de função e reduziu a dependência de ajustes tela por tela.</p>
            <p>Brand / 500 concentra o valor visual. Brand / Default descreve o papel daquela cor no produto.</p>
          </SectionIntro>
          <div className={styles.foundationPair}>
            <div className={styles.foundationCard}><span>PRIMITIVE</span><div className={styles.redSwatch} /><h3>Brand / 500 · #FF455B</h3><p>Define o valor bruto.</p></div>
            <div className={styles.foundationArrow}>→</div>
            <div className={styles.foundationCard}><span>SEMANTIC</span><div className={styles.redSwatch} /><h3>Brand / Default</h3><code>alias → Brand / 500</code><p>Define o papel desse valor no produto. A interface usa significado, não um valor fixo.</p></div>
          </div>
          <div className={styles.tokenGrid}>{["Background / Page","Brand / Default","Text / Primary","Text / Secondary","Surface / Brand / Subtle","Support / Success","Support / Warning","Support / Error"].map((token) => <div key={token}>{token}</div>)}</div>
          <ProjectEvidence src={media.foundationsColor} alt="Foundations de cor do Design System" className={styles.largeEvidence} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="TIPOGRAFIA E DIMENSÕES" title="Tipografia e dimensões deixaram de ser escolhas de tela.">
            <p>Escalas de tipografia, spacing, radius, margens e áreas de interação passaram a funcionar como referências compartilhadas. Isso reduziu variações entre telas e deu critérios mais claros para novas composições.</p>
            <p>O alvo mínimo de toque de 44 px entrou como requisito do sistema, junto das margens responsivas e safe areas.</p>
          </SectionIntro>
          <div className={styles.dimensionGrid}>
            <div className={styles.dimensionCard}><span>TIPOGRAFIA</span><strong>Aa</strong><p>Heading H1 → H5<br/>Body XL → XS<br/>Action L → S<br/>Caption</p></div>
            <div className={styles.dimensionCard}><span>DIMENSÕES</span><strong>44 px</strong><h3>Alvo mínimo de toque</h3><p>Spacing · Radius · Margens responsivas · Safe areas</p></div>
          </div>
          <ProjectEvidence src={media.foundationsTypography} alt="Foundations de tipografia do Design System" className={styles.largeEvidence} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="RESPONSIVIDADE" title="A responsividade precisou nascer junto com a expansão.">
            <p>Ao levar o produto para Mobile e diferentes larguras de Web, margens e grids foram definidos antes de multiplicar composições. O sistema trabalha com 24 px no Mobile, 120 px em 1440, 40 px em 1280 e 32 px em 1024.</p>
            <p>O objetivo era reaproveitar a mesma lógica de produto sem simplesmente ampliar ou comprimir a mesma tela.</p>
          </SectionIntro>
          <ProjectEvidence src={media.responsive} alt="Regras responsivas do Design System" className={styles.largeEvidence} />
          <div className={styles.metaGrid}>{[["MOBILE","24 px de margem"],["WEB · 1440","120 px de margem"],["WEB · 1280","40 px de margem"],["WEB · 1024","32 px de margem"]].map(([label,value]) => <div key={label}><span>{label}</span><p>{value}</p></div>)}</div>
          <p className={styles.caption}>Mesma lógica de produto, reorganizada para 1440, 1280 e 1024 px.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="MOBILE" title="No Mobile, o sistema começou a provar que as regras funcionavam em jornadas reais.">
            <p>A Home prioriza descoberta, o perfil reúne o contexto necessário para avaliar um negócio e o painel desloca a prioridade para tarefas de operação. A estrutura muda conforme a tarefa, mas tipografia, estados, espaçamento e componentes continuam partindo da mesma base.</p>
          </SectionIntro>
          <div className={styles.evidencePair}><ProjectEvidence src={media.mobileCoreUi} alt="Componentes Mobile Core UI" className={styles.smallEvidence} /><ProjectEvidence src={media.mobileContentFeedback} alt="Componentes Mobile Content e Feedback" className={styles.smallEvidence} /></div>
          <ProjectEvidence src={media.bottomSheet} alt="Estados de Bottom Sheet" className={styles.largeEvidence} />
          <div className={styles.deviceRow}><Device src={media.mobileHome} alt="Tela inicial mobile"/><Device src={media.mobileProfile} alt="Perfil de negócio mobile"/><Device src={media.mobileBusiness} alt="Painel de negócio mobile"/></div>
          <CaptionCards items={mobileCaptions} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="WEB" title="Na Web, a mesma base precisou sustentar outra densidade de informação.">
            <p>A largura disponível foi usada para manter mais contexto visível ao mesmo tempo. Na Home, isso amplia a descoberta; na busca, permite trabalhar filtros e resultados em conjunto; no painel do negócio, concentra indicadores e ações de gestão.</p>
            <p>A continuidade com o Mobile vem das regras compartilhadas, não da repetição do layout.</p>
          </SectionIntro>
          <ProjectEvidence src={media.webResponsive} alt="Responsive Web do Design System" className={styles.largeEvidence} />
          <div className={styles.webPair}><ProjectEvidence src={media.webHome} alt="Home Web" className={styles.webEvidence} /><ProjectEvidence src={media.webSearch} alt="Resultados de busca Web" className={styles.webEvidence} /></div>
          <ProjectEvidence src={media.webBusiness} alt="Painel de negócio Web" className={styles.webWideEvidence} />
          <CaptionCards items={webCaptions} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="CONTEXTOS" title="A mesma base, composições diferentes.">
            <p>Mobile e Web compartilham identidade, tokens, hierarquia, estados e padrões. O Mobile trabalha de forma mais compacta e progressiva; o Web suporta comparação, visão ampla e tarefas de gestão com mais informação simultânea.</p>
            <p>A consistência vem das decisões compartilhadas, não da repetição do layout.</p>
          </SectionIntro>
          <div className={styles.contextGrid}>
            <div><span>MOBILE</span><h3>Compacto<br/>Progressivo<br/>Touch-first<br/>Orientado ao momento</h3></div>
            <div><span>MESMA BASE</span><h3>Identidade<br/>Tokens<br/>Hierarquia<br/>Estados<br/>Padrões<br/>Princípios</h3></div>
            <div><span>WEB</span><h3>Mais contexto<br/>Comparação<br/>Visão ampla<br/>Operação</h3></div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="QUALIDADE" title="Estados e acessibilidade fazem parte do fluxo principal.">
            <p>O sistema inclui contraste AA, áreas mínimas de toque de 44 px, foco visível, sinais que combinam cor e texto e estados para loading, empty, error e success.</p>
            <p>Também foram previstos estados de confirmação para ações sensíveis. Isso mantém o comportamento previsível quando o produto está carregando, sem resultado, falha ou conclui uma ação.</p>
          </SectionIntro>
          <div className={styles.accessibilityGrid}>{accessibility.map(([big,title,copy]) => <div className={styles.accessibilityCard} key={big}><strong>{big}</strong><h3>{title}</h3><p>{copy}</p></div>)}</div>
          <div className={styles.stateSummary}><div><span>ESTADOS</span><h3>Loading · Empty · Error · Success</h3></div><div><span>SEGURANÇA</span><h3>Ações protegidas</h3><p>Confirmações ajudam a evitar erros em ações sensíveis.</p></div></div>
          <ProjectEvidence src={media.reusableStates} alt="Estados reutilizáveis do Design System" className={styles.largeEvidence} />
          <div className={styles.productStatesGrid}>
            {[[media.stateResults,"SEARCH / RESULTS"],[media.stateLoading,"SEARCH / LOADING"],[media.stateNoResults,"SEARCH / NO RESULTS"],[media.stateError,"LISTING / ACTION ERROR"],[media.stateSuccess,"REVIEW / SUCCESS"]].map(([src,label]) => <div className={styles.stateDevice} key={label}><Device src={src} alt={label}/><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="ESCALA" title="De poucas telas iniciais para 174 telas de produto.">
            <p>A diferença entre o ponto de partida e a entrega final ajuda a explicar o papel do sistema. O projeto começou com um rascunho curto no Figma e evoluiu para 174 telas, 111 decisões estruturadas, 78 componentes-base e 37 fluxos reutilizáveis.</p>
            <p>Sem critérios compartilhados, cada expansão teria multiplicado decisões locais junto com as telas.</p>
          </SectionIntro>
          <div className={styles.metricsGrid}>{scaleMetrics.map(([number,label]) => <div key={number}><strong>{number}</strong><span>{label}</span></div>)}</div>
          <p className={styles.metricSupport}>Produto + Identidade + Jornadas + Mobile + Web + Operação</p>
          <p className={styles.caption}>Os números mostram a escala da entrega final em relação a um ponto de partida ainda limitado.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro eyebrow="EVOLUÇÃO" title="A arquitetura final reduz a dependência de decisões ad hoc nas próximas jornadas.">
            <p>Com foundations, padrões e regras responsivas definidos, novas telas podem reaproveitar critérios já testados em vez de recomeçar por cor, tipografia, espaçamento, estados ou comportamento.</p>
            <p>As frentes abaixo representam possibilidades de evolução do produto. Não são resultados já medidos.</p>
          </SectionIntro>
          <div className={styles.threeColumns}>{evolutionCards.map(([eyebrow,title,copy]) => <article className={styles.textCard} key={eyebrow}><span>{eyebrow}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>APRENDIZADOS</p>
          <h2 className={styles.learningTitle}>Três aprendizados vieram diretamente da passagem de rascunho para sistema.</h2>
          <ProjectDivider className={styles.divider} />
          <div className={styles.threeColumns}>{learnings.map(([number,title,copy]) => <article className={styles.textCard} key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.container}>
          <h2>O projeto começou com algumas telas. A entrega consolidou critérios para continuar desenhando sem recomeçar a cada jornada.</h2>
          <p>Roteiro do Sul · Product Design System · Mobile + Web · 2026</p>
          <ProjectDivider className={styles.divider} />
        </div>
      </section>

      <ProjectNextCase sectionClassName={styles.nextCase} containerClassName={styles.container} rowClassName={styles.nextCaseRow} title="Próximo projeto" dividerClassName={styles.divider} />

      <div className={styles.footerShell}><PortfolioFooter /></div>
    </main>
  );
}
