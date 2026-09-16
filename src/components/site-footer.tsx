import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <span>GABRIEL GONZAGA / PRODUCT DESIGNER</span>
        <div className="footer-links">
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          <Link href="/cv.pdf">CURRÍCULO PDF</Link>
          <a href={`mailto:${siteConfig.email}`}>EMAIL</a>
        </div>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
