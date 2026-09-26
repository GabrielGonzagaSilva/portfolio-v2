import Image from "next/image";
import Link from "next/link";
import type { ProjectSummary } from "@/data/projects";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: ProjectSummary;
};

function ProjectCardContent({ project }: ProjectCardProps) {
  return (
    <>
      <div className={`${styles.media} ${project.placeholder ? styles.placeholder : ""}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            fill
            sizes="(max-width: 600px) calc(100vw - 48px), (max-width: 1024px) calc((100vw - 104px) / 2), 580px"
            className={styles.image}
            priority={project.slug === "quantolab"}
          />
        ) : null}
      </div>
      <div className={styles.content}>
        <h2>{project.title}</h2>
        <div className={styles.meta}>
          <span>{project.category}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
      </div>
    </>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  if (project.href) {
    return (
      <Link href={project.href} className={styles.card} aria-label={`Abrir projeto ${project.title}`}>
        <ProjectCardContent project={project} />
      </Link>
    );
  }

  return (
    <article className={styles.card}>
      <ProjectCardContent project={project} />
    </article>
  );
}
