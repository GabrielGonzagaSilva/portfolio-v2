"use client";

import Link from "next/link";
import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { PortfolioNavigationHostedContext } from "./navigation-host-context";
import styles from "./primary-nav.module.css";

type NavKey = "home" | "work" | "about";

type PrimaryNavProps = {
  active?: NavKey;
  variant?: "default" | "case";
  renderInHost?: boolean;
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

const navOrder: NavKey[] = ["home", "work", "about"];

function PrimaryNavRuntime({ active, variant = "default" }: Omit<PrimaryNavProps, "renderInHost">) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [homeSection, setHomeSection] = useState<"home" | "work">("home");
  const [indicator, setIndicator] = useState<IndicatorState>({ x: 0, width: 0, visible: false });
  const [indicatorReady, setIndicatorReady] = useState(false);
  const [longTravel, setLongTravel] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const mountedRef = useRef(false);
  const lastTargetRef = useRef<NavKey>();
  const frameRef = useRef<number[]>([]);
  const isCase = variant === "case";
  const effectiveActive = active === "home" ? homeSection : active;

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 16);

    updateScrollState();
    const frame = window.requestAnimationFrame(updateScrollState);
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollState);
    };
  }, [active, variant]);

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
        const shouldBeWork = window.location.hash === "#work" || workTop <= activationLine;
        setHomeSection(shouldBeWork ? "work" : "home");
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

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav || !active) {
      setIndicator((current) => ({ ...current, visible: false }));
      return;
    }

    frameRef.current.forEach((frame) => window.cancelAnimationFrame(frame));
    frameRef.current = [];

    const resolveTarget = (): NavKey => {
      if (active !== "home") return active;

      const workSection = document.getElementById("work");
      if (!workSection) return "home";

      const activationLine = Math.min(window.innerHeight * 0.4, 320);
      const workTop = workSection.getBoundingClientRect().top;
      return window.location.hash === "#work" || workTop <= activationLine ? "work" : "home";
    };

    const targetKey = resolveTarget();
    const targetItem = itemRefs.current[targetKey];
    if (!targetItem) return;

    if (active === "home" && homeSection !== targetKey) {
      setHomeSection(targetKey === "work" ? "work" : "home");
    }

    const geometryFor = (item: HTMLAnchorElement): IndicatorState => ({
      x: item.offsetLeft,
      width: item.offsetWidth,
      visible: true,
    });

    const targetGeometry = geometryFor(targetItem);
    const previousKey = lastTargetRef.current;
    const previousIndex = previousKey ? navOrder.indexOf(previousKey) : -1;
    const targetIndex = navOrder.indexOf(targetKey);
    const travelDistance = previousIndex >= 0 ? Math.abs(targetIndex - previousIndex) : 0;

    setLongTravel(travelDistance > 1);

    if (!mountedRef.current) {
      setIndicatorReady(false);
      setIndicator(targetGeometry);

      const readyFrame = window.requestAnimationFrame(() => {
        setIndicatorReady(true);
      });
      frameRef.current.push(readyFrame);
      mountedRef.current = true;
    } else {
      setIndicator(targetGeometry);
    }

    lastTargetRef.current = targetKey;

    const resizeObserver = new ResizeObserver(() => {
      const currentTarget = itemRefs.current[lastTargetRef.current ?? targetKey];
      if (!currentTarget) return;
      setIndicator(geometryFor(currentTarget));
    });
    resizeObserver.observe(nav);

    return () => {
      frameRef.current.forEach((frame) => window.cancelAnimationFrame(frame));
      frameRef.current = [];
      resizeObserver.disconnect();
    };
  }, [active, effectiveActive, homeSection]);

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
          className={`${styles.activeIndicator} ${indicatorReady ? styles.activeIndicatorReady : ""} ${longTravel ? styles.activeIndicatorLong : ""}`}
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

export function PrimaryNav({ active, variant = "default", renderInHost = false }: PrimaryNavProps) {
  const isHosted = useContext(PortfolioNavigationHostedContext);

  if (isHosted && !renderInHost) return null;

  return <PrimaryNavRuntime active={active} variant={variant} />;
}
