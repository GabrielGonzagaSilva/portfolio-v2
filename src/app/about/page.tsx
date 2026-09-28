import type { Metadata } from "next";
import { PortfolioFooter } from "@/components/layout/portfolio-footer";
import { PrimaryNav } from "@/components/navigation/primary-nav";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Sobre Gabriel Gonzaga, Product Designer e UX/UI em São Paulo.",
};

const portrait = "/images/about/portrait.png";

const experience = [
  {
    company: "CRESCIMENTUM",
    date: "Mai. 2026 até o momento · São Paulo, SP",
    role: "Inovação · Product Design, IA e LXD",
    description:
      "No time de Inovação, trabalho em projetos de produtos digitais, IA e aprendizagem corporativa. Minha rotina passa por pesquisa, fluxos, documentação, avaliação de ferramentas, construção de prompts e prototipação de experiências digitais.",
  },
  {
    company: "AUREUM",
    date: "Jan. 2026 até o momento · São Paulo, SP",
    role: "Co-Founder & Product Lead",
    description:
      "Como cofundador e responsável por produto, acompanho desde a definição do problema até a prototipação e a evolução das soluções. Trabalho com estratégia, UX/UI, validação e priorização, conectando necessidades de uso e de negócio.",
  },
  {
    company: "TP",
    date: "Jan. 2024 a Jan. 2025 · São Paulo, SP",
    role: "Microsoft Technical Support | Copilot, Microsoft 365 e Windows",
    description:
      "Atendi usuários de produtos Microsoft e investiguei problemas que muitas vezes chegavam pouco claros. O trabalho me ensinou a diagnosticar melhor, explicar soluções sem jargão e olhar para a experiência do usuário também fora da interface.",
  },
  {
    company: "DESIGNER AUTÔNOMO E FREELANCER",
    date: "2020 até o momento · São Paulo, SP",
    role: "Design gráfico e comunicação visual",
    description:
      "Desenvolvo identidades, materiais gráficos e peças digitais para clientes. Além de desenhar, organizo escopo, prazos e alinhamentos — uma prática que me ensinou bastante sobre ouvir, traduzir pedidos e tomar decisões com restrições reais.",
  },
] as const;

const education = [
  {
    title: "DESIGN GRÁFICO",
    description: "UNICID / Graduação em andamento, com estudos de linguagem visual, projeto e fundamentos de design.",
  },
  {
    title: "CRIAÇÃO PUBLICITÁRIA E DIREÇÃO DE ARTE",
    description: "Escola CUCA / Formação em direção de arte, conceito e construção visual.",
  },
  {
    title: "PRODUCT DESIGN",
    description:
      "Mergo / Formação em Product Design, passando por pesquisa, definição de problema, prototipação, interface e visão de produto.",
  },
  {
    title: "DESIGN DIGITAL",
    description: "SAGA / Foi onde construí minha base inicial em ferramentas e fundamentos de design digital.",
  },
] as const;

export default function AboutPage() {
  return (
    <main id="top" className={styles.page}>
      <PrimaryNav active="about" />

      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.heroEditorial}>
          <p className={styles.heroLabel}>GABRIEL GONZAGA / PRODUCT DESIGN</p>
          <h1 id="about-title" className={styles.heroTitle}>
            Me chamo Gabriel Gonzaga e transformo problemas em produtos mais claros e fáceis de usar.
          </h1>
          <p className={styles.heroIntro}>
            No dia a dia, transito entre pesquisa, fluxos, UX/UI, prototipação e IA aplicada com critério.
          </p>
          <p className={styles.heroMeta}>SÃO PAULO · PRODUCT DESIGN · UX/UI · IA</p>
        </div>
        <img className={styles.heroPortrait} src={portrait} alt="Retrato de Gabriel Gonzaga" />
      </section>

      <div className={styles.main}>
        <section className={styles.section} aria-labelledby="profile-label">
          <div className={styles.profileRow}>
            <p id="profile-label" className={styles.profileLabel}>
              QUEM EU SOU
            </p>
            <div className={styles.profileCopy}>
              <p className={styles.emphasis}>
                Entrei no design pela parte visual. Trabalhei com projetos autorais, direção de arte, comunicação digital e
                clientes antes de migrar para produto.
              </p>
              <p>
                Com o tempo, percebi que o que mais me prendia não era só a interface pronta. Eu queria entender por que aquilo
                precisava existir, onde estava o problema e o que faria a experiência funcionar melhor. Foi assim que fui me
                aproximando de UX, Product Design e tecnologia.
              </p>
              <p>
                Hoje faço parte do time de Inovação da Crescimentum, em projetos que cruzam produtos digitais, IA, aprendizagem
                e melhoria de processos. Em paralelo, curso Design Gráfico na UNICID e Product Design na Mergo.
              </p>
              <p className={styles.emphasis}>
                Essa mistura ainda aparece no meu jeito de trabalhar: não separo lógica de acabamento visual e prefiro validar
                antes de decidir.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="principles-label">
          <div className={styles.centeredRow}>
            <p id="principles-label" className={`${styles.sectionLabel} ${styles.principlesLabel}`}>
              COMO EU TRABALHO
            </p>
            <div className={styles.principlesContent}>
              <p className={styles.principlesTitle}>Diagnóstico de experiência antes da interface.</p>
              <p className={styles.principlesCopy}>
                Meu processo começa na raiz do problema: entender quem está usando o produto, qual é o objetivo real e onde a
                jornada atual quebra. Só depois de mapear esses atritos é que vou para o Figma estruturar os fluxos e protótipos,
                ajustando os detalhes até a experiência rodar sem atrito e entregar o que o usuário precisa.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="experience-label">
          <div className={styles.experienceRow}>
            <p id="experience-label" className={`${styles.sectionLabel} ${styles.experienceLabel}`}>
              EXPERIÊNCIA
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
              FORMAÇÃO
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
            <p id="contact-label" className={`${styles.sectionLabel} ${styles.contactLabel}`}>
              CONTATO
            </p>
            <div className={styles.contactContent}>
              <p className={styles.contactTitle}>Vamos bater um papo?</p>
              <p className={styles.contactCopy}>
                Se quiser trocar uma ideia sobre produto, design ou oportunidades, pode me chamar por e-mail ou LinkedIn.
              </p>
              <div className={styles.contactLinks}>
                <a className={styles.contactLink} href="mailto:gabrielgonzagasilva@outlook.com">
                  gabrielgonzagasilva@outlook.com ↗
                </a>
                <a
                  className={styles.contactLink}
                  href="https://www.linkedin.com/in/gabrielgonzagasilva"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <PortfolioFooter />
    </main>
  );
}
