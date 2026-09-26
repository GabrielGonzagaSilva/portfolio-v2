import styles from "./portfolio-footer.module.css";

export function PortfolioFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>© 2026 Gabriel Gonzaga</div>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/gabrielgonzagasilva" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="mailto:gabrielgonzagasilva@outlook.com">E-mail ↗</a>
        </div>
        <div className={styles.right}>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}
