"use client";

import { usePathname } from "next/navigation";
import { PrimaryNav } from "./primary-nav";
import { PortfolioNavigationHostedContext } from "./navigation-host-context";

type PortfolioNavigationShellProps = {
  children: React.ReactNode;
};

export function PortfolioNavigationShell({ children }: PortfolioNavigationShellProps) {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isProject = pathname.startsWith("/projects/");
  const showNavigation = isHome || isAbout || isProject;

  const active = isAbout ? "about" : isProject ? "work" : "home";
  const variant = isProject ? "case" : "default";

  return (
    <PortfolioNavigationHostedContext.Provider value>
      {showNavigation ? <PrimaryNav active={active} variant={variant} renderInHost /> : null}
      {children}
    </PortfolioNavigationHostedContext.Provider>
  );
}
