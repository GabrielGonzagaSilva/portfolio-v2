"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./primary-nav.module.css";

type PrimaryNavProps = {
  active?: "home" | "work" | "about";
  variant?: "default" | "case";
};

const navItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "work", label: "Work", href: "/#work" },
  { key: "about", label: "About", href: "/about" },
] as const;

export function PrimaryNav({ active, variant = "default" }: PrimaryNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isCase = variant === "case";

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 16);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`${styles.header} ${isCase ? styles.caseHeader : ""} ${isScrolled ? styles.scrolled : ""}`}
      data-scrolled={isScrolled ? "true" : "false"}
    >
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
