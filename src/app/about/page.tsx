import type { Metadata } from "next";
import Link from "next/link";
import { BrandLight } from "@/components/brand-light";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "About" };

const portrait = "https://www.figma.com/api/mcp/asset/24a121fd-23bb-428e-b7cf-dab8d44104b4/90c6f.png";

const experience = [
  ["CRESCIMENTUM", "Mai. 2026 — atual · São Paulo — SP", "Design, Inovação, IA, LXD e Product Design", "Atuo no time de Inovação em projetos de produtos digitais, IA, aprendizagem corporativa e melhoria de processos. Também participo de pesquisas, organização de fluxos e documentação, avaliação de ferramentas de IA, construção de prompts e desenvolvimento de experiências digitais."],
  ["AUREUM", "Jan. 2026 — atual · São Paulo — SP", "Co-Founder & Product Lead", "Atuo na estratégia e evolução de produtos digitais, conectando necessidades de negócio e usuários. Meu trabalho passa por Product Strategy, Product Design, UX/UI, identificação de oportunidades, prototipação, validação e melhoria contínua."],
  ["TP", "Jan. 2024 — Jan. 2025 · São Paulo — SP", "Microsoft Technical Support | Copilot, Microsoft 365 e Windows", "Atuei com suporte técnico a usuários de produtos Microsoft, investigando problemas, orientando soluções e transformando informações técnicas em instruções mais claras. Foi uma experiência importante para desenvolver resolução de problemas, comunicação e olhar para a experiência do cliente."],
  ["DESIGNER AUTÔNOMO E FREELANCER", "2020 — atual · São Paulo — SP", "Design gráfico e comunicação visual", "Desenvolvo projetos de identidade, materiais gráficos e comunicação digital. Também cuido de demandas, prazos e relacionamento com clientes, transformando necessidades em soluções visuais claras e consistentes."],
] as const;

const productValue = [
  ["Product Design", "Gosto de entender o problema antes de partir para a tela. Trabalho com pesquisa, jornadas, fluxos, interfaces e protótipos para transformar necessidades em soluções que possam ser testadas, discutidas e melhoradas. Também procuro entender como cada decisão de produto se conecta ao negócio e contribui para a evolução da solução ao longo do tempo."],
  ["Aprendizagem e comportamento", "Minha experiência com LXD e Design Instrucional também influencia a forma como penso produto. Em algumas experiências, não basta o usuário conseguir usar: ele precisa entender, aprender ou ganhar confiança para seguir em frente. É aí que entram temas como clareza, progressão, feedback e carga cognitiva."],
  ["IA no processo", "Uso IA no dia a dia para pesquisar, organizar informações, explorar caminhos e acelerar partes do processo. Tento usar essas ferramentas onde realmente ajudam, sem abrir mão de revisão, contexto e decisão humana."],
] as const;

const workPrinciples = [
  ["Entendo antes de desenhar.", "Antes de tudo, tento entender o contexto, quem está envolvido, quais são as restrições e o que precisa ser resolvido."],
  ["Prefiro validar antes de decidir.", "Pesquisa, referências e protótipos me ajudam a tomar decisões com mais segurança."],
  ["Organizo problemas complexos.", "Fluxos, arquitetura e documentação fazem parte do meu processo quando ajudam a enxergar melhor o todo."],
  ["Prototipo.", "Prefiro colocar uma ideia em movimento e aprender com ela do que esperar uma solução perfeita de primeira."],
  ["Penso além da tela.", "Componentes, estados, responsividade, acessibilidade e consistência também fazem parte do produto."],
  ["Uso IA com critério.", "Ela me ajuda a ganhar velocidade, mas não substitui contexto, revisão ou decisão."],
] as const;

const education = [
  ["Design Gráfico — UNICID", "Graduação em andamento."],
  ["Product Design — Mergo", "Formação focada no processo de criação de produtos digitais, da pesquisa e definição do problema à prototipação, interface e visão de negócio."],
  ["Criação Publicitária e Direção de Arte — Escola CUCA", "Formação voltada à direção de arte, conceito e construção visual."],
  ["Design Digital — SAGA", "Minha base inicial em ferramentas e fundamentos de design digital."],
] as const;

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="about-hero">
        <BrandLight />
        <div className="site-container about-hero-shell">
          <div className="about-hero-main">
            <div className="about-hero-copy">
              <h1>Sou Gabriel Gonzaga, Product Designer em São Paulo. Trabalho criando produtos digitais e organizando problemas complexos até eles ficarem mais simples de entender e usar.</h1>
              <p>No dia a dia, transito entre pesquisa, fluxos, UX/UI e prototipação, além de explorar aprendizagem, inovação e IA como parte do processo.</p>
            </div>
            {/* Temporary Figma MCP asset; replace by local export before production. */}
            <img className="about-portrait" src={portrait} alt="Retrato de Gabriel Gonzaga" />
          </div>
          <div className="about-meta"><span>São Paulo, Brasil · Product Design · UX/UI · LXD · IA aplicada ao trabalho</span><span>Product Designer · Learning Experience Design</span></div>
        </div>
      </section>

      <section className="about-block alt">
        <div className="site-container split-section">
          <h2>Quem eu sou</h2>
          <div className="section-copy paragraphs">
            <p>Comecei no design visual e no trabalho autoral. Passei por design digital, direção de arte e atendimento a clientes antes de direcionar minha carreira para produto.</p>
            <p>Foi nesse caminho que percebi que eu gostava tanto de entender o problema quanto de cuidar da parte visual. Queria entender por que algo precisava existir, para quem e o que faria aquilo funcionar melhor. Foi esse interesse que me aproximou de UX e, depois, de Product Design.</p>
            <p>Hoje faço parte do time de Inovação da Crescimentum, onde trabalho com projetos que passam por produtos digitais, IA, aprendizagem e melhoria de processos. Também curso Design Gráfico na UNICID e sigo minha formação em Product Design pela Mergo.</p>
            <p className="emphasis">Acabei trazendo um pouco de cada experiência para a forma como trabalho: atenção ao visual, curiosidade para entender o problema e vontade de deixar as coisas mais claras e simples de usar.</p>
          </div>
        </div>
      </section>

      <section className="about-block">
        <div className="site-container">
          <h2 className="wide-heading">Experiência profissional</h2>
          <div className="experience-timeline">
            {experience.map(([company, date, role, description]) => (
              <article className="experience-row" key={company}>
                <div><span className="eyebrow accent">{company}</span><p>{date}</p></div>
                <div><h3>{role}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-block alt">
        <div className="site-container">
          <h2 className="wide-heading">O que eu levo para um produto</h2>
          <div className="three-column-grid">
            {productValue.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="about-block">
        <div className="site-container split-section">
          <h2>Como eu penso design</h2>
          <div className="section-copy"><p className="lead">Para mim, design não começa na interface. Começa tentando entender o que precisa ser resolvido, para quem e por quê.</p><p>A parte visual importa muito, mas funciona melhor quando existe uma lógica por trás. Por isso, tento sempre equilibrar experiência de uso, necessidade do produto e qualidade de execução.</p></div>
        </div>
      </section>

      <section className="about-block alt">
        <div className="site-container split-section">
          <h2>Como eu trabalho</h2>
          <div className="work-list">
            {workPrinciples.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="about-block">
        <div className="site-container split-section">
          <h2>O que conecta tudo isso</h2>
          <div className="section-copy paragraphs"><p className="lead small">Tenho uma base bastante visual, mas gosto especialmente de problemas que envolvem clareza, comportamento e organização de informação sem perder de vista o negócio.</p><p>Isso aparece muito em produtos nos quais a pessoa precisa entender algo novo, tomar uma decisão ou aprender enquanto usa. Meu repertório em aprendizagem me ajuda a perceber essas barreiras e pensar em formas de reduzir a complexidade.</p><p>Ao mesmo tempo, continuo dando bastante importância à composição, hierarquia e acabamento. Gosto quando a solução funciona bem e também parece bem resolvida.</p></div>
        </div>
      </section>

      <section className="about-block alt">
        <div className="site-container split-section">
          <h2>No que estou focado agora</h2>
          <div className="section-copy paragraphs"><p>Hoje meu foco principal é continuar evoluindo como Product Designer, principalmente em pesquisa, estratégia, sistemas de interface, acessibilidade, métricas e construção de produtos de ponta a ponta.</p><p>Também tenho explorado bastante IA e aprendizagem aplicadas a produtos digitais, especialmente quando podem tornar uma experiência mais simples, útil ou fácil de entender.</p><p className="lead small">Não quero me limitar a um único tipo de produto. O que mais me interessa são problemas em que design, tecnologia e comportamento realmente se encontram.</p></div>
        </div>
      </section>

      <section className="about-block">
        <div className="site-container">
          <h2 className="wide-heading">Formação e repertório</h2>
          <div className="education-grid">{education.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="about-block alt">
        <div className="site-container split-section">
          <h2>Além das telas</h2>
          <div className="section-copy"><p className="lead small">Desenho e direção de arte continuam fazendo parte da minha vida e do meu repertório visual.</p><p>Esse lado mais autoral do design também influencia a forma como eu penso produto: gosto de observar referências, explorar caminhos visuais e cuidar dos detalhes sem perder de vista a função.</p></div>
        </div>
      </section>

      <section className="about-contact" id="contato">
        <div className="site-container">
          <h2>Vamos conversar?</h2>
          <p>Se quiser falar sobre Product Design, produtos digitais, IA, aprendizagem ou oportunidades, pode me chamar.</p>
          <div className="about-cta-grid"><Link href="/#projetos">Ver projetos</Link><a href="mailto:gabrielgonzagasilva@outlook.com">Falar comigo</a><a href="/cv.pdf">Baixar currículo</a></div>
          <div className="about-links"><a href="https://linkedin.com/in/gabrielgonzagasilva">LinkedIn: linkedin.com/in/gabrielgonzagasilva</a><a href="mailto:gabrielgonzagasilva@outlook.com">E-mail: gabrielgonzagasilva@outlook.com</a></div>
          <div className="about-contact-footer"><span>GABRIEL GONZAGA / PRODUCT DESIGNER</span><span>SÃO PAULO · BRASIL</span><span>© 2026</span></div>
        </div>
      </section>
    </main>
  );
}
