/**
 * @file static-markup-page.tsx
 * @description Renders literal page markup and upgrades internal anchors to router navigation.
 * @module frontend/src/components/ui
 */

import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { enhanceStaticBranding } from "../layout/site-brand";
import { buildDesktopHeaderMarkup, buildMobileHeaderMarkup } from "../layout/site-navigation";

interface StaticMarkupPageProps {
  html: string;
}

const headerPattern = /<header\b[\s\S]*?<\/header>/i;
const mainPattern = /<main\b/i;

function getSharedHeaderMarkup(pathname: string) {
  if (pathname.startsWith("/m")) {
    return buildMobileHeaderMarkup(pathname);
  }

  return buildDesktopHeaderMarkup(pathname);
}

function decorateStaticMarkup(html: string, pathname: string) {
  const sharedHeaderMarkup = getSharedHeaderMarkup(pathname);

  if (headerPattern.test(html)) {
    return html.replace(headerPattern, sharedHeaderMarkup);
  }

  if (mainPattern.test(html)) {
    return html.replace(mainPattern, `${sharedHeaderMarkup}<main`);
  }

  return `${sharedHeaderMarkup}${html}`;
}

export function StaticMarkupPage({ html }: StaticMarkupPageProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const pageMarkup = decorateStaticMarkup(enhanceStaticBranding(html), location.pathname);
  const fallbackUnavailable =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='480'><rect width='100%25' height='100%25' fill='%23e2e8f0'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23475569' font-size='24' font-family='Arial'>Image Unavailable</text></svg>";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const mobileMenu = root.querySelector<HTMLElement>("[data-mobile-menu]");
    const openButtons = Array.from(root.querySelectorAll<HTMLElement>("[data-mobile-menu-toggle]"));
    const closeButtons = Array.from(root.querySelectorAll<HTMLElement>("[data-mobile-menu-close]"));

    const syncExpandedState = (isOpen: boolean) => {
      for (const button of openButtons) {
        button.setAttribute("aria-expanded", String(isOpen));
      }
    };

    const closeMenu = () => {
      if (!mobileMenu) {
        return;
      }

      mobileMenu.classList.add("invisible", "pointer-events-none", "opacity-0");
      document.body.classList.remove("overflow-hidden");
      syncExpandedState(false);
    };

    const openMenu = () => {
      if (!mobileMenu) {
        return;
      }

      mobileMenu.classList.remove("invisible", "pointer-events-none", "opacity-0");
      document.body.classList.add("overflow-hidden");
      syncExpandedState(true);
    };

    const handleMenuToggle = () => {
      if (!mobileMenu) {
        return;
      }

      const isOpen = !mobileMenu.classList.contains("invisible");

      if (isOpen) {
        closeMenu();
        return;
      }

      openMenu();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    for (const button of openButtons) {
      button.addEventListener("click", handleMenuToggle);
    }

    for (const button of closeButtons) {
      button.addEventListener("click", closeMenu);
    }

    document.addEventListener("keydown", handleEscape);

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const projectImage = target.closest<HTMLElement>("[data-project-image]");
      if (projectImage) {
        event.preventDefault();
        const src = projectImage.getAttribute("data-project-image-src");
        if (!src) {
          return;
        }

        let overlay = root.querySelector<HTMLElement>("#project-image-lightbox");
        if (!overlay) {
          overlay = document.createElement("div");
          overlay.id = "project-image-lightbox";
          overlay.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 hidden";
          overlay.innerHTML = `
            <div class="relative max-h-full max-w-full overflow-hidden rounded-xl bg-white p-2 shadow-2xl">
              <button id="project-image-lightbox-close" class="absolute right-2 top-2 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white">×</button>
              <img id="project-image-lightbox-img" class="max-h-[90vh] max-w-[95vw] object-contain" src="${src}" alt="Enlarged project image" />
            </div>
          `;
          document.body.appendChild(overlay);

          overlay.addEventListener("click", (outerEvent) => {
            if (outerEvent.target === overlay) {
              overlay.classList.add("hidden");
            }
          });

          const closeButton = overlay.querySelector<HTMLElement>('#project-image-lightbox-close');
          closeButton?.addEventListener("click", () => overlay?.classList.add("hidden"));
        }

        const enlarged = overlay.querySelector<HTMLImageElement>("#project-image-lightbox-img");
        if (enlarged) {
          enlarged.src = src;
        }

        overlay.classList.remove("hidden");
        return;
      }

      const categoryButton = target.closest<HTMLElement>("[data-category-filter]");
      if (categoryButton) {
        event.preventDefault();

        const filter = categoryButton.dataset.categoryFilter?.trim().toLowerCase() ?? "all";
        const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-category-section]"));

        if (filter === "all") {
          for (const sec of sections) {
            sec.classList.remove("hidden");
          }
        } else {
          for (const sec of sections) {
            if (sec.dataset.categorySection?.toLowerCase() === filter) {
              sec.classList.remove("hidden");
            } else {
              sec.classList.add("hidden");
            }
          }
        }

        return;
      }

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
        return;
      }

      event.preventDefault();
      closeMenu();
      navigate(href);
    };

    root.addEventListener("click", handleClick);

    const handleImageError = (event: Event) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement)) {
        return;
      }

      const fallbackListRaw = target.getAttribute("data-image-fallbacks");
      if (!fallbackListRaw) {
        return;
      }

      const fallbackList = fallbackListRaw.split("|").filter((value) => value.length > 0);
      const currentIndex = Number.parseInt(target.getAttribute("data-fallback-index") ?? "0", 10);

      if (Number.isFinite(currentIndex) && currentIndex < fallbackList.length) {
        const nextSource = fallbackList[currentIndex];
        target.setAttribute("data-fallback-index", String(currentIndex + 1));
        target.src = nextSource;

        if (target.hasAttribute("data-project-image-src")) {
          target.setAttribute("data-project-image-src", nextSource);
        }
        return;
      }

      const previewUrl = target.getAttribute("data-drive-preview");
      if (previewUrl) {
        const iframe = document.createElement("iframe");
        iframe.className = target.className;
        iframe.src = previewUrl;
        iframe.title = target.alt || "Project image preview";
        iframe.loading = "lazy";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        target.replaceWith(iframe);
        return;
      }

      target.src = fallbackUnavailable;
      target.removeAttribute("data-image-fallbacks");
      target.removeAttribute("data-drive-preview");
    };

    root.addEventListener("error", handleImageError, true);

    const handleContextMenu = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (target.closest("[data-project-image]")) {
        event.preventDefault();
      }
    };

    root.addEventListener("contextmenu", handleContextMenu);

    return () => {
      closeMenu();
      root.removeEventListener("click", handleClick);
      root.removeEventListener("error", handleImageError, true);
      root.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleEscape);

      for (const button of openButtons) {
        button.removeEventListener("click", handleMenuToggle);
      }

      for (const button of closeButtons) {
        button.removeEventListener("click", closeMenu);
      }
    };
  }, [navigate, pageMarkup]);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}