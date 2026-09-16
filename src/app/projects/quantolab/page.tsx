import type { Metadata } from "next";
import Link from "next/link";
import { BrandLight } from "@/components/brand-light";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "QuantoLab — Case",
  description: "Case de Product Design do QuantoLab: de uma coleção de calculadoras a um sistema de decisão.",
};

const asset = (name: string) => `https://www.figma.com/api/mcp/asset/4e3c83ab-694b-4168-9c90-26d18e789486/${name}`;

const media = {
  home: asset("ee972.png"),
  salaryResult: asset("d7d02.png"),
  assumptions: asset("037c5.png"),
  catalog: asset("77fe3.png"),
  system: asset("97ac2.png"),
  discover: asset("fbb93.png"),
  salaryInput: asset("4a700.png"),
  cltInput: asset("0c707.png"),
  cltResult: asset("65c05.png"),
  methodology: asset("5103a.png"),
  guide: asset("78b76.png"),
  mobile: asset("03f95.png"),
  closing: asset("bd1d3.png"),
} as const;

const architecture = [
  ["01", "Dois modos de interface.", "A home e as calculadoras estavam competindo por regras incompatíveis, então separei as duas. No modo apresentação, a interface posiciona o produto e ajuda na descoberta. No modo operação, ela quase desaparece: legibilidade, hierarquia, previsibilidade e o menor esforço cognitivo possível."],
  ["02", "Um esqueleto previsível.", "Entrada, processamento, resultado, interpretação, próxima ação. Depois de usar duas ferramentas, o usuário sabe operar a terceira. É essa previsibilidade que permite crescer sem reprojetar navegação."],
  ["03", "Ferramenta e guia, pareados.", "Uma calculadora mostra a conta, mas não explica o que entra, o que fica de fora e como ler o resultado. Cada domínio tem ferramentas e guias, com uma página de metodologia que documenta premissas e fontes primárias."],
] as const;

const learnings = [
  ["01", "Escalar produto não é adicionar funcionalidade.", "Quanto mais ferramentas existem, maior precisa ser a qualidade do sistema que conecta todas elas, e esse sistema é invisível ao usuário exatamente quando está funcionando."],
  ["02", "Confiança se projeta, não se declara.", "Nenhum selo de credibilidade vale o que vale mostrar a fórmula, deixar a premissa editável e escrever o que a ferramenta não sabe."],
  ["03", "Personalidade não precisa competir com a tarefa.", "A escolha entre expressividade e eficiência quase sempre é falsa. O que falta é decidir onde cada uma manda."],
] as const;

const beforeAfter = [
  ["Modelo mental", "Coleção de calculadoras", "Sistema de decisão por domínio"],
  ["Organização", "Por tipo de cálculo", "Pela situação do usuário"],
  ["Consistência", "Decidida por página", "Definida no sistema"],
  ["Transparência", "Resultado sem procedência", "Fórmula, premissa e fonte acessíveis"],
  ["Marca e eficiência", "Em conflito na mesma tela", "Separadas em modos explícitos"],
  ["Custo de expansão", "Crescente a cada ferramenta", "Padrões prontos, custo estável"],
] as const;

function CaseMedia({ label, description, src, className = "" }: { label: string; description: string; src: string; className?: string }) {
  return (
    <figure className={`case-media ${className}`}>
      <figcaption><span className="eyebrow accent">{label}</span><p>{description}</p></figcaption>
      {/* Temporary Figma MCP asset; replace by local versioned export before production. */}
      <div className="case-media-frame"><img src={src} alt={description} /></div>
    </figure>
  );
}

export default function QuantoLabPage() {
  return (
    <main className="case-page">
      <SiteHeader />

      <section className="case-hero">
        <BrandLight />
        <div className="site-container case-hero-shell">
          <Link href="/#projetos" className="back-link">← VOLTAR AOS PROJETOS</Link>
          <div className="case-hero-title"><h1>QuantoLab</h1><h2>De uma coleção de calculadoras a um sistema de decisão</h2><p>Produto autoral · Product Strategy, UX/UI, Design System, Implementação</p></div>
          <div className="case-rail-row"><div /><div><p className="case-lead">Existem centenas de calculadoras online, e quase todas entregam um número sem mostrar de onde ele veio. O QuantoLab foi construído na decisão oposta: o resultado aparece primeiro, e a conta fica aberta.</p><p>Meu trabalho foi transformar essa posição em arquitetura de produto, um sistema em que 28 ferramentas se comportam como um só produto e cada ferramenta nova nasce de padrões já definidos.</p></div></div>
        </div>
      </section>

      <section className="case-overview case-alt">
        <div className="site-container two-media-grid">
          <CaseMedia label="PRODUTO · HOMEPAGE" description="Abertura real do QuantoLab com posicionamento, navegação e instrumento em uso." src={media.home} />
          <CaseMedia label="PRODUTO · RESULTADO" description="Cálculo real de salário líquido com INSS, IRRF e valor disponível em destaque." src={media.salaryResult} />
        </div>
      </section>

      <section className="case-section">
        <div className="site-container case-rail-row"><div /><div><h2>O produto cresceu mais rápido do que a estrutura que o sustentava.</h2><p>O projeto começou como um punhado de calculadoras funcionais e cresceu rápido demais para a estrutura que tinha. Cada ferramenta nova era desenhada por conta própria: resolvia bem o seu cálculo e ignorava as outras.</p></div></div>
        <div className="site-container case-evidence-grid"><p>Ferramentas do mesmo produto formatavam moeda de jeitos diferentes.</p><p>Quem calculava salário líquido não tinha caminho até a comparação CLT x PJ, que é a pergunta seguinte óbvia.</p><p>Cada instrumento novo reabria decisões já tomadas três vezes.</p></div>
        <div className="site-container case-rail-row compact"><div /><div><p className="accent-callout">A V2 partiu daí. Em vez de redesenhar telas, construir o sistema que as sustenta.</p></div></div>
      </section>

      <section className="case-section case-alt">
        <div className="site-container case-rail-row"><div /><div><h2>O resultado vem primeiro. A conta fica aberta.</h2><p>A tentação óbvia em um produto sobre dinheiro é provar credibilidade antecipando explicação. O efeito é o contrário do pretendido: explicação na frente do resultado lê como desculpa, e o usuário aprende a rolar sem ler.</p></div></div>
        <div className="site-container three-step-grid">
          <article><span className="eyebrow">01</span><h3>Calcular.</h3><p>O número principal tem prioridade visual absoluta e chega antes do detalhamento técnico.</p></article>
          <article><span className="eyebrow">02</span><h3>Conferir.</h3><p>Composição, fórmula e fonte oficial ficam logo abaixo, para quem quiser abrir. Premissas voláteis ficam editáveis.</p></article>
          <article><span className="eyebrow">03</span><h3>Continuar.</h3><p>Ferramentas relacionadas conectam uma conta à próxima, sem criar fluxo obrigatório.</p></article>
        </div>
        <div className="site-container case-rail-row compact"><div /><div><p className="case-medium">Toda ferramenta passou a precisar de uma fonte declarável, e a lógica de cálculo foi implementada separada do texto editorial para poder ser testada de forma independente. Transparência aqui não é selo. É custo de manutenção que o produto assume.</p><CaseMedia label="PRINCÍPIO · CONTA ABERTA" description="Premissas, limites e fontes permanecem acessíveis depois do resultado." src={media.assumptions} className="wide-media" /></div></div>
      </section>

      <section className="case-section">
        <div className="site-container case-rail-row"><div /><div><h2>A unidade é a decisão, não o cálculo.</h2><p>O catálogo se organiza por situação: CLT, PJ, freelancer, financeiro. Quem chega não procura “uma calculadora de INSS”. Está decidindo se aceita uma proposta, se abre um CNPJ, quanto cobrar de um cliente novo. A pergunta vem antes do instrumento.</p></div></div>
        <div className="site-container numbered-rows">{architecture.map(([n, title, text]) => <article key={n}><div><span className="eyebrow">{n}</span><h3>{title}</h3></div><p>{text}</p></article>)}</div>
        <div className="site-container case-rail-row compact"><div /><div><CaseMedia label="ARQUITETURA · CATÁLOGO" description="As 28 ferramentas organizadas por domínio e contexto de decisão." src={media.catalog} className="wide-media" /></div></div>
      </section>

      <section className="case-section case-alt">
        <div className="site-container case-rail-row"><div /><div><h2>Com 28 ferramentas, consistência deixa de ser questão estética e vira questão de custo.</h2><p>Campos, seletores, blocos de resultado, indicadores, estados, alertas, navegação, hierarquia tipográfica e comportamento responsivo viraram padrões reutilizáveis.</p></div></div>
        <div className="site-container case-rail-row compact"><div /><div><p className="case-medium">Formatação numérica ganhou tratamento próprio. Moeda, percentual e valores grandes seguem a mesma regra em todo o produto, porque em ferramenta de cálculo uma inconsistência de formatação não é detalhe visual. É dúvida sobre o número.</p></div></div>
        <div className="site-container system-copy-grid"><p>A base visual é neutra, com preto, off-white e uma escala de cinzas, e o lime como cor de assinatura, usado com parcimônia para funcionar como marcador de atenção.</p><p>Ficaram de fora glassmorphism, gradientes em excesso, glow, bento grids decorativos e dashboards mais complexos que a tarefa.</p></div>
        <div className="site-container case-rail-row compact"><div /><div><CaseMedia label="SISTEMA · PRÓXIMA DECISÃO" description="Padrões conectam cada resultado a um próximo passo sem quebrar a hierarquia." src={media.system} className="wide-media" /></div></div>
      </section>

      <section className="case-screens">
        <div className="site-container">
          <div className="case-rail-row"><div /><div><h2>Do primeiro contato à próxima decisão.</h2><p>As telas mostram como descoberta, cálculo, comparação, confiança e responsividade funcionam como partes do mesmo sistema.</p></div></div>

          <div className="narrative-head"><span>01 · DESCOBRIR</span><div><h3>A pergunta vem antes da ferramenta.</h3><p>A home orienta pela dúvida; o catálogo amplia a descoberta sem exigir que a pessoa saiba o nome do cálculo.</p></div></div>
          <div className="discover-grid"><CaseMedia label="HOME · DESCOBERTA" description="Quatro caminhos de entrada traduzem intenção em ferramenta." src={media.discover} /><CaseMedia label="CATÁLOGO · 28 FERRAMENTAS" description="A arquitetura cresce por domínio sem perder orientação." src={media.catalog} /></div>

          <div className="narrative-head"><span>02 · CALCULAR</span><div><h3>Entrada e resultado formam uma única operação.</h3><p>O formulário é direto; depois do cálculo, o número principal assume prioridade e o detalhamento continua acessível.</p></div></div>
          <div className="two-media-grid"><CaseMedia label="SALÁRIO · ENTRADA" description="Poucos campos, hierarquia clara e cálculo no navegador." src={media.salaryInput} /><CaseMedia label="SALÁRIO · RESULTADO" description="Resultado principal, descontos e composição permanecem no mesmo contexto." src={media.salaryResult} /></div>

          <div className="narrative-head"><span>03 · DECIDIR</span><div><h3>A conta vira comparação entre cenários.</h3><p>No CLT x PJ, a interface deixa de mostrar apenas um número e passa a sustentar uma decisão com contexto e próximos passos.</p></div></div>
          <div className="two-media-grid"><CaseMedia label="CLT × PJ · ENTRADA" description="O cenário começa pelo pacote real, não só pelo salário." src={media.cltInput} /><CaseMedia label="CLT × PJ · RESULTADO" description="A comparação conduz à próxima decisão sem encerrar o fluxo." src={media.cltResult} /></div>

          <div className="narrative-head"><span>04 · CONFIAR</span><div><h3>A explicação existe fora do momento de cálculo.</h3><p>Metodologia e conteúdo editorial deixam premissas, fontes e limites verificáveis sem disputar atenção com a operação.</p></div></div>
          <div className="trust-grid">
            <div><CaseMedia label="METODOLOGIA · FONTES" description="Premissas, limitações e fontes oficiais ficam documentadas em uma camada própria." src={media.methodology} /><CaseMedia label="GUIA · SALÁRIO LÍQUIDO 2026" description="Conteúdo editorial aprofunda o contexto e conecta a ferramenta a uma referência consultável." src={media.guide} /></div>
            <div className="mobile-story"><span className="eyebrow accent">05 · RESPONSIVO</span><h3>A hierarquia sobrevive à mudança de contexto.</h3><p>No mobile, entrada, resultado e leitura mantêm a mesma ordem sem comprimir a hierarquia.</p><div className="phone"><img src={media.mobile} alt="QuantoLab responsivo em dispositivo móvel" /></div></div>
          </div>
          <div className="closing-visual"><span className="eyebrow accent">FECHAMENTO · PRODUTO</span><h3>O sistema termina devolvendo a pessoa à próxima decisão.</h3><p>O fechamento retoma a pergunta inicial e devolve a pessoa ao catálogo com um próximo passo claro.</p><div><img src={media.closing} alt="Fechamento do produto QuantoLab" /></div></div>
        </div>
      </section>

      <section className="case-section">
        <div className="site-container case-rail-row"><div /><div><h2>A entrega principal não foi uma interface nova. Foi o sistema que permite a próxima.</h2><p>O que funcionava como coleção de páginas independentes passou a ter uma lógica de produto. Cada instrumento novo parte de princípios já definidos de arquitetura, interação, formatação, acessibilidade e comportamento.</p></div></div>
      </section>

      <section className="case-section case-alt">
        <div className="site-container case-rail-row"><div /><div><h2>Limites, e por que são parte do design</h2><p>Um produto que fala de salário, imposto e rescisão precisa ser explícito sobre o que não sabe.</p></div></div>
        <div className="site-container case-rail-row compact"><div /><div className="paragraph-stack"><p>A comparação CLT x PJ se declara uma equivalência financeira aproximada, e não uma afirmação de que os contratos têm o mesmo risco. A ferramenta de hora extra informa que reflexos em DSR, férias, 13º, FGTS e convenção coletiva não entram automaticamente.</p><p>O desafio foi posicionar essas ressalvas onde elas informam sem virar ruído: perto do resultado a que se referem, em hierarquia secundária, redigidas como informação útil e não como blindagem jurídica.</p><p className="accent-callout">Na mesma direção, o produto não exige cadastro. Não pedir dado desnecessário ao cálculo é decisão de confiança tanto quanto mostrar a fórmula.</p></div></div>
      </section>

      <section className="case-section">
        <div className="site-container case-rail-row"><div /><div><h2>De coleção de páginas para sistema de decisão</h2></div></div>
        <div className="site-container before-after"><div className="ba-head"><span>DIMENSÃO</span><span>ANTES</span><span>DEPOIS</span></div>{beforeAfter.map(([dimension, before, after]) => <div className="ba-row" key={dimension}><strong>{dimension}</strong><span>{before}</span><span>{after}</span></div>)}</div>
      </section>

      <section className="case-section case-alt">
        <div className="site-container case-rail-row"><div /><div><h2>Escalar produto é projetar o sistema invisível que conecta tudo.</h2></div></div>
        <div className="site-container numbered-rows learnings">{learnings.map(([n, title, text]) => <article key={n}><div><span className="eyebrow">{n}</span><h3>{title}</h3></div><p>{text}</p></article>)}</div>
      </section>

      <section className="case-section">
        <div className="site-container case-rail-row"><div /><div><h2>Evoluir o sistema sem perder previsibilidade.</h2><p>Ampliação do catálogo, evolução do sistema de descoberta, testes de usabilidade nas ferramentas de maior tráfego, expansão do design system e definição de métricas para acompanhar quais decisões o usuário efetivamente conclui.</p></div></div>
      </section>

      <section className="case-closing">
        <div className="site-container"><h2>Faça as contas antes de decidir.</h2><p>Product Strategy · UX/UI · Design System · Product Development</p><div className="case-access"><span>ACESSAR</span><a href="https://quantolab.com.br" target="_blank" rel="noreferrer">quantolab.com.br ↗</a></div></div>
      </section>

      <section className="next-case"><div className="site-container"><div><h2>Design System</h2><span>PRÓXIMO ↗</span></div></div></section>
    </main>
  );
}
