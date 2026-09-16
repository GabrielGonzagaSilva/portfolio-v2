import Link from "next/link";

const links = [
  { href: "/#projetos", label: "PROJETOS" },
  { href: "/about", label: "ABOUT" },
  { href: "/cv.pdf", label: "CURRÍCULO" },
  { href: "/#contato", label: "CONTATO" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link href="/" className="brand" aria-label="Gabriel Gonzaga — início">
          GABRIEL GONZAGA
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/about" className="mobile-menu" aria-label="Abrir página About">
          MENU
        </Link>
      </div>
    </header>
  );
}
