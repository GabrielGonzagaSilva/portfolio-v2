export type ProjectSummary = {
  slug: string;
  title: string;
  category: string;
  year: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  placeholder?: boolean;
};

export const projects: ProjectSummary[] = [
  {
    slug: "quantolab",
    title: "QuantoLab",
    category: "Product design",
    year: "2026",
    href: "/projects/quantolab",
    image: "/images/projects/quantolab/home-card.png",
    imageAlt: "Preview do projeto QuantoLab",
  },
  {
    slug: "roteiro-do-sul",
    title: "Roteiro do Sul · Design System",
    category: "UX / UI design",
    year: "2024",
    image: "/images/projects/roteiro-do-sul/home-card.png",
    imageAlt: "Preview do projeto Roteiro do Sul",
  },
  {
    slug: "case-01",
    title: "Case 01",
    category: "Mobile product",
    year: "2023",
    placeholder: true,
  },
  {
    slug: "case-02",
    title: "Case 02",
    category: "Design system",
    year: "2023",
    placeholder: true,
  },
];
