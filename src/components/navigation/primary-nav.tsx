"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./primary-nav.module.css";

type PrimaryNavProps = {
  active?: "home" | "work" | "about";
  variant?: "default" | "case";
};

type IndicatorState = {
  x: number;
  width: number;
  visible: boolean;
};

const navItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "work", label: "Work", href: "/#work" },
  { key: "about", label: "About", href: "/about" },
] as const;

export function PrimaryNav({ active, variant = "default" }: PrimaryNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [homeSection, setHomeSection] = useState<"home" | "work">("home");
  const [indicator, setIndicator] = useState<IndicatorState>({ x: 0, width: 0, visible: false });
  const [indicatorReady, setIndicatorReady] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const isCase = variant === "case";
  const effectiveActive = active === "home" ? homeSection : active;

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 16);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (active !== "home") return;

    const workSection = document.getElementById("work");
    if (!workSection) return;

    let frame = 0;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const activationLine = Math.min(window.innerHeight * 0.4, 320);
        const workTop = workSection.getBoundingClientRect().top;
        setHomeSection(workTop <= activationLine ? "work" : "home");
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [active]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || !effectiveActive) {
      setIndicator((current) => ({ ...current, visible: false }));
      return;
    }

    const syncIndicator = () => {
      const activeItem = itemRefs.current[effectiveActive];
      if (!activeItem) return;

      setIndicator({
        x: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
        visible: true,
      });
    };

    syncIndicator();

    const resizeObserver = new ResizeObserver(syncIndicator);
    resizeObserver.observe(nav);

    const readyFrame = window.requestAnimationFrame(() => {
      setIndicatorReady(true);
    });

    return () => {
      window.cancelAnimationFrame(readyFrame);
      resizeObserver.disconnect();
    };
  }, [effectiveActive]);

  return (
    <header
      className={`${styles.header} ${isCase ? styles.caseHeader : ""} ${isScrolled ? styles.scrolled : ""}`}
      data-scrolled={isScrolled ? "true" : "false"}
    >
      <nav
        ref={navRef}
        className={`${styles.nav} ${isCase ? styles.caseNav : ""}`}
        aria-label="Navegação principal"
      >
        <span
          className={`${styles.activeIndicator} ${indicatorReady ? styles.activeIndicatorReady : ""}`}
          aria-hidden="true"
          style={{
            width: `${indicator.width}px`,
            transform: `translate3d(${indicator.x}px, 0, 0)`,
            opacity: indicator.visible ? 1 : 0,
          }}
        />
        {navItems.map((item) => (
          <Link
            key={item.key}
            ref={(node) => {
              itemRefs.current[item.key] = node;
            }}
            href={item.href}
            className={`${styles.item} ${isCase ? styles.caseItem : ""} ${effectiveActive === item.key ? styles.active : ""}`}
            aria-current={effectiveActive === item.key ? "page" : undefined}
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
