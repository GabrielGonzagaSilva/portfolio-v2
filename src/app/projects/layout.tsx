import type { ReactNode } from "react";
import { ProjectImageLightbox } from "@/components/projects/project-image-lightbox";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ProjectImageLightbox />
    </>
  );
}
