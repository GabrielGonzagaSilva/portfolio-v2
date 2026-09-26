"use client";

import { useEffect, useState } from "react";
import styles from "@/app/home.module.css";

export function HomeHero() {
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setReplayKey((current) => current + 1);
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return (
    <section key={replayKey} className={styles.hero} aria-labelledby="home-title">
      <div className={styles.identity}>
        <h1 id="home-title" className={styles.title}>
          Gabriel Gonzaga
        </h1>
        <p className={styles.role}>PRODUCT DESIGNER · UX / UI</p>
      </div>
      <p className={styles.statement}>Transformo sistemas complexos em produtos que as pessoas usam.</p>
    </section>
  );
}
