import Link from "next/link";
import styles from "./primary-nav.module.css";

type PrimaryNavProps = {
  active?: "work" | "about";
};

const navItems = [
  { key: "work", label: "Work", href: "/" },
  { key: "about", label: "About", href: "/about" },
] as const;

export function PrimaryNav({ active }: PrimaryNavProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegação principal">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`${styles.item} ${active === item.key ? styles.active : ""}`}
            aria-current={active === item.key ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <a className={styles.item} href="mailto:gabrielgonzagasilva@outlook.com">
          Contact
        </a>
      </nav>
    </header>
  );
}
