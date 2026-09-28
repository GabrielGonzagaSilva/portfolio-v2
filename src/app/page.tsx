import { PortfolioFooter } from "@/components/layout/portfolio-footer";
import { HomeHero } from "@/components/home/home-hero";
import { PrimaryNav } from "@/components/navigation/primary-nav";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import styles from "./home.module.css";

export default function Home() {
  const visibleProjects = projects.filter((project) => !project.placeholder);

  return (
    <main id="top" className={styles.page}>
      <PrimaryNav active="home" />

      <HomeHero />

      <section id="work" className={styles.work} aria-label="Projetos selecionados">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <PortfolioFooter />
    </main>
  );
}
