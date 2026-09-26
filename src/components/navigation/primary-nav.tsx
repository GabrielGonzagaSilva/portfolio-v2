import Link from "next/link";
import styles from "./primary-nav.module.css";

type PrimaryNavProps = {
  active?: "work" | "about";
  variant?: "default" | "case";
};

const navItems = [
  { key: "work", label: "Work", href: "/" },
  { key: "about", label: "About", href: "/about" },
] as const;

export function PrimaryNav({ active, variant = "default" }: PrimaryNavProps) {
  const isCase = variant === "case";

  return (
    <header className={`${styles.header} ${isCase ? styles.caseHeader : ""}`}>
      <nav
        className={`${styles.nav} ${isCase ? styles.caseNav : ""}`}
        aria-label="Navegação principal"
      >
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`${styles.item} ${isCase ? styles.caseItem : ""} ${active === item.key ? styles.active : ""}`}
            aria-current={active === item.key ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <a
          className={`${styles.item} ${isCase ? styles.caseItem : ""}`}
          href="mailto:gabrielgonzagasilva@outlook.com"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
