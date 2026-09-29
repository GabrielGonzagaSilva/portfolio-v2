"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./project-image-lightbox.module.css";

type ActiveImage = {
  src: string;
  alt: string;
};

function getOriginalImageSource(image: HTMLImageElement) {
  const source = image.currentSrc || image.getAttribute("src") || image.src;

  try {
    const url = new URL(source, window.location.origin);

    if (url.pathname === "/_next/image") {
      const original = url.searchParams.get("url");
      if (original) return new URL(original, window.location.origin).href;
    }

    return url.href;
  } catch {
    return source;
  }
}

function getProjectImage(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;

  const image = target.closest("img") as HTMLImageElement | null;
  if (!image || !image.closest("main") || image.hasAttribute("data-no-lightbox")) return null;
  if (image.closest("a")) return null;

  return image;
}

export function ProjectImageLightbox() {
  const [mounted, setMounted] = useState(false);
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null);
  const triggerRef = useRef<HTMLImageElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMounted(true);
    document.body.classList.add("project-lightbox-enabled");

    const enhancedImages = Array.from(
      document.querySelectorAll<HTMLImageElement>("main img:not([data-no-lightbox])"),
    ).filter((image) => !image.closest("a"));

    for (const image of enhancedImages) {
      if (!image.hasAttribute("tabindex")) {
        image.tabIndex = 0;
        image.dataset.lightboxAddedTabindex = "true";
      }
      if (!image.hasAttribute("role")) {
        image.setAttribute("role", "button");
        image.dataset.lightboxAddedRole = "true";
      }
      if (!image.hasAttribute("aria-haspopup")) {
        image.setAttribute("aria-haspopup", "dialog");
        image.dataset.lightboxAddedPopup = "true";
      }
      if (!image.hasAttribute("aria-label")) {
        image.setAttribute("aria-label", image.alt ? `Ampliar imagem: ${image.alt}` : "Ampliar imagem");
        image.dataset.lightboxAddedLabel = "true";
      }
    }

    const openImage = (image: HTMLImageElement) => {
      triggerRef.current = image;
      setActiveImage({
        src: getOriginalImageSource(image),
        alt: image.alt,
      });
    };

    const handleClick = (event: MouseEvent) => {
      const image = getProjectImage(event.target);
      if (image) openImage(image);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const image = getProjectImage(event.target);
      if (!image) return;

      event.preventDefault();
      openImage(image);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("project-lightbox-enabled");
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);

      for (const image of enhancedImages) {
        if (image.dataset.lightboxAddedTabindex) {
          image.removeAttribute("tabindex");
          delete image.dataset.lightboxAddedTabindex;
        }
        if (image.dataset.lightboxAddedRole) {
          image.removeAttribute("role");
          delete image.dataset.lightboxAddedRole;
        }
        if (image.dataset.lightboxAddedPopup) {
          image.removeAttribute("aria-haspopup");
          delete image.dataset.lightboxAddedPopup;
        }
        if (image.dataset.lightboxAddedLabel) {
          image.removeAttribute("aria-label");
          delete image.dataset.lightboxAddedLabel;
        }
      }
    };
  }, []);

  useEffect(() => {
    if (!activeImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleDialogKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
        return;
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleDialogKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleDialogKeyDown);
      requestAnimationFrame(() => triggerRef.current?.focus());
    };
  }, [activeImage]);

  if (!mounted || !activeImage) return null;

  return createPortal(
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={activeImage.alt ? `Visualização ampliada: ${activeImage.alt}` : "Visualização ampliada da imagem"}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setActiveImage(null);
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className={styles.close}
        aria-label="Fechar imagem ampliada"
        onClick={() => setActiveImage(null)}
      >
        ×
      </button>
      <figure className={styles.figure}>
        <img className={styles.image} src={activeImage.src} alt={activeImage.alt} />
      </figure>
    </div>,
    document.body,
  );
}
