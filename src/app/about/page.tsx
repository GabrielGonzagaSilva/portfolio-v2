import type { Metadata } from "next";
import { PortfolioFooter } from "@/components/layout/portfolio-footer";
import { PrimaryNav } from "@/components/navigation/primary-nav";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Sobre Gabriel Gonzaga, Product Designer e UX/UI em São Paulo.",
};

const portrait = "https://www.figma.com/api/mcp/asset/4b475c29-1e64-40fb-8b58-2601dadd50cd/ae663.png";

const experience = [
  {
    company: "CRESCIMENTUM",
    date: "Mai. 2026 até o momento · São Paulo, SP",
    role: "Design, Inovação, IA, LXD e Product Design",
    description:
      "Atuo no time de Inovação em projetos de produtos digitais, IA, aprendizagem corporativa e melhoria de processos. Também participo de pesquisas, organização de fluxos e documentação, avaliação de ferramentas de IA, construção de prompts e desenvolvimento de experiências digitais.",
  },
  {
    company: "AUREUM",
    date: "Jan. 2026 até o momento · São Paulo, SP",
    role: "Co-Founder & Product Lead",
    description:
      "Atuo na estratégia e evolução de produtos digitais, conectando necessidades de negócio e usuários. Meu trabalho passa por Product Strategy, Product Design, UX/UI, identificação de oportunidades, prototipação, validação e melhoria contínua.",
  },
  {
    company: "TP",
    date: "Jan. 2024 a Jan. 2025 · São Paulo, SP",
    role: "Microsoft Technical Support | Copilot, Microsoft 365 e Windows",
    description:
      "Atuei com suporte técnico a usuários de produtos Microsoft, investigando problemas, orientando soluções e transformando informações técnicas em instruções mais claras. Foi uma experiência importante para desenvolver resolução de problemas, comunicação e olhar para a experiência do cliente.",
  },
  {
    company: "DESIGNER AUTÔNOMO E FREELANCER",
    date: "2020 até o momento · São Paulo, SP",
    role: "Design gráfico e comunicação visual",
    description:
      "Desenvolvo projetos de identidade, materiais gráficos e comunicação digital. Também cuido de demandas, prazos e relacionamento com clientes, transformando necessidades em soluções visuais claras e consistentes.",
  },
] as const;

const education = [
  {
    title: "DESIGN GRÁFICO",
    description: "UNICID / Graduação em andamento.",
  },
  {
    title: "CRIAÇÃO PUBLICITÁRIA E DIREÇÃO DE ARTE",
    description: "Escola CUCA / Formação voltada à direção de arte, conceito e construção visual.",
  },
  {
    title: "PRODUCT DESIGN",
    description:
      "Mergo / Formação focada no processo de criação de produtos digitais, da pesquisa e definição do problema à prototipação, interface e visão de negócio.",
  },
  {
    title: "DESIGN DIGITAL",
    description: "SAGA / Minha base inicial em ferramentas e fundamentos de design digital.",
  },
] as const;

export default function AboutPage() {
  return (
    <main id="top" className={styles.page}>
      <PrimaryNav active="about" />

      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.heroContent}>
          <h1 id="about-title" className={styles.heroTitle}>
            Sou Gabriel Gonzaga, Product Designer e UX/UI em São Paulo. Trabalho criando produtos digitais e organizando
            problemas complexos até eles ficarem mais simples de entender e usar.
          </h1>
          <p className={styles.heroIntro}>
            No dia a dia, transito entre pesquisa, fluxos, UX/UI e prototipação, além de explorar aprendizagem, inovação e IA
            como parte do processo.
          </p>
        </div>
      </section>

      <div className={styles.main}>
        <section className={styles.section} aria-labelledby="profile-label">
          <div className={styles.profileRow}>
            <div className={styles.profileSidebar}>
              <p id="profile-label" className={styles.profileLabel}>
                QUEM EU SOU
              </p>
              <img className={styles.portrait} src={portrait} alt="Retrato de Gabriel Gonzaga" />
            </div>
            <div className={styles.profileCopy}>
              <p className={styles.emphasis}>
                Comecei no design visual e no trabalho autoral. Passei por design digital, direção de arte e atendimento a
                clientes antes de direcionar minha carreira para produto.
              </p>
              <p>
                Foi nesse caminho que percebi que eu gostava tanto de entender o problema quanto de cuidar da parte visual.
                Queria entender por que algo precisava existir, para quem e o que faria aquilo funcionar melhor. Foi esse
                interesse que me aproximou de UX e, depois, de Product Design.
              </p>
              <p>
                Hoje faço parte do time de Inovação da Crescimentum, onde trabalho com projetos que passam por produtos
                digitais, IA, aprendizagem e melhoria de processos. Também curso Design Gráfico na UNICID e sigo minha
                formação em Product Design pela Mergo.
              </p>
              <p className={styles.emphasis}>
                Acabei trazendo um pouco de cada experiência para a forma como trabalho: atenção ao visual, curiosidade para
                entender o problema e vontade de deixar as coisas mais claras e simples de usar.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="principles-label">
          <div className={styles.centeredRow}>
            <p id="principles-label" className={`${styles.sectionLabel} ${styles.principlesLabel}`}>
              COMO EU PENSO DESIGN
            </p>
            <div className={styles.principlesContent}>
              <p className={styles.principlesTitle}>
                Para mim, design não começa na interface. Começa tentando entender o que precisa ser resolvido, para quem e por
                quê.
              </p>
              <p className={styles.principlesCopy}>
                A parte visual importa muito, mas funciona melhor quando existe uma lógica por trás. Por isso, tento sempre
                equilibrar experiência de uso, necessidade do produto e qualidade de execução.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="experience-label">
          <div className={styles.experienceRow}>
            <p id="experience-label" className={`${styles.sectionLabel} ${styles.experienceLabel}`}>
              EXPERIÊNCIA PROFISSIONAL
            </p>
            <div className={styles.experienceList}>
              {experience.map((item) => (
                <article className={styles.experienceEntry} key={item.company}>
                  <div className={styles.experienceContentRow}>
                    <div className={styles.experienceMeta}>
                      <p className={styles.experienceCompany}>{item.company}</p>
                      <p className={styles.experienceDate}>{item.date}</p>
                    </div>
                    <div className={styles.experienceBody}>
                      <h2 className={styles.experienceRole}>{item.role}</h2>
                      <p className={styles.experienceDescription}>{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="education-label">
          <div className={styles.educationRow}>
            <p id="education-label" className={styles.sectionLabel}>
              FORMAÇÃO E REPERTÓRIO
            </p>
            <div className={styles.educationGrid}>
              {education.map((item) => (
                <article className={styles.formationItem} key={item.title}>
                  <h2 className={styles.formationTitle}>{item.title}</h2>
                  <p className={styles.formationDescription}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="contact-label">
          <div className={styles.contactRow}>
            <p id="contact-label" className={styles.sectionLabel}>
              CONTATO
            </p>
            <div className={styles.contactLinks}>
              <a
                className={styles.contactLink}
                href="https://www.linkedin.com/in/gabrielgonzagasilva"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/gabrielgonzagasilva ↗
              </a>
              <a className={styles.contactLink} href="mailto:gabrielgonzagasilva@outlook.com">
                gabrielgonzagasilva@outlook.com ↗
              </a>
            </div>
          </div>
        </section>
      </div>

      <PortfolioFooter />
    </main>
  );
}
