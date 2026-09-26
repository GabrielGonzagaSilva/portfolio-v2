import { PortfolioFooter } from "@/components/layout/portfolio-footer";
import { PrimaryNav } from "@/components/navigation/primary-nav";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <PrimaryNav active="home" />

      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.identity}>
          <h1 id="home-title" className={styles.title}>
            Gabriel Gonzaga
          </h1>
          <p className={styles.role}>PRODUCT DESIGNER · UX / UI</p>
        </div>
        <p className={styles.statement}>Transformo sistemas complexos em produtos que as pessoas usam.</p>
      </section>

      <section id="work" className={styles.work} aria-label="Projetos selecionados">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <PortfolioFooter />
    </main>
  );
}
