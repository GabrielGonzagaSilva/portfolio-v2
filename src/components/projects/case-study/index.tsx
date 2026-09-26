import type { ReactNode } from "react";
import Link from "next/link";

type ProjectHeroMeta = {
  label: string;
  value: string;
  href?: string;
};

type ProjectHeroClasses = {
  section: string;
  backLink: string;
  intro: string;
  title: string;
  subtitle: string;
  descriptor: string;
  divider: string;
  metadataGrid: string;
  metadataItem: string;
};

type ProjectHeroProps = {
  titleId: string;
  title: string;
  subtitle: string;
  descriptor: string;
  metadata: readonly ProjectHeroMeta[];
  classes: ProjectHeroClasses;
};

export function ProjectHero({
  titleId,
  title,
  subtitle,
  descriptor,
  metadata,
  classes,
}: ProjectHeroProps) {
  return (
    <section className={classes.section} aria-labelledby={titleId}>
      <Link href="/#work" className={classes.backLink}>
        ←&nbsp; VOLTAR AOS PROJETOS
      </Link>

      <div className={classes.intro}>
        <h1 id={titleId} className={classes.title}>{title}</h1>
        <p className={classes.subtitle}>{subtitle}</p>
        <p className={classes.descriptor}>{descriptor}</p>
      </div>

      <ProjectDivider className={classes.divider} />

      <div className={classes.metadataGrid}>
        {metadata.map((item) => (
          <div className={classes.metadataItem} key={item.label}>
            <span>{item.label}</span>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer">{item.value}</a>
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

type ProjectEvidenceProps = {
  src: string;
  alt: string;
  className: string;
};

export function ProjectEvidence({ src, alt, className }: ProjectEvidenceProps) {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
}

export function ProjectDivider({ className }: { className: string }) {
  return <div className={className} aria-hidden="true" />;
}

type ProjectSectionProps = {
  className: string;
  children: ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export function ProjectSection({
  className,
  children,
  ariaLabel,
  ariaLabelledBy,
}: ProjectSectionProps) {
  return (
    <section className={className} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy}>
      {children}
    </section>
  );
}

type ProjectStatementProps = {
  sectionClassName: string;
  containerClassName: string;
  titleClassName: string;
  children: ReactNode;
};

export function ProjectStatement({
  sectionClassName,
  containerClassName,
  titleClassName,
  children,
}: ProjectStatementProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <h2 className={titleClassName}>{children}</h2>
      </div>
    </section>
  );
}

type ProjectNextCaseProps = {
  sectionClassName: string;
  containerClassName: string;
  rowClassName: string;
  title: string;
  titleClassName?: string;
  actionClassName?: string;
  dividerClassName: string;
  href?: string;
};

export function ProjectNextCase({
  sectionClassName,
  containerClassName,
  rowClassName,
  title,
  titleClassName,
  actionClassName,
  dividerClassName,
  href,
}: ProjectNextCaseProps) {
  const content = (
    <>
      <h2 className={titleClassName}>{title}</h2>
      <span className={actionClassName}>PRÓXIMO&nbsp; ↗</span>
    </>
  );

  return (
    <section className={sectionClassName} aria-label="Próximo projeto">
      <div className={containerClassName}>
        {href ? (
          <Link href={href} className={rowClassName}>{content}</Link>
        ) : (
          <div className={rowClassName}>{content}</div>
        )}
        <ProjectDivider className={dividerClassName} />
      </div>
    </section>
  );
}
