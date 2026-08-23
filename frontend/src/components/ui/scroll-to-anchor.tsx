/**
 * @file scroll-to-anchor.tsx
 * @description Smooth scrolling handler for hash anchors and route transitions.
 * @module frontend/src/components/ui
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace(/^#/, "");
      // Small timeout allows DOM rendering to complete before scrolling
      const timeoutId = setTimeout(() => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);

      return () => clearTimeout(timeoutId);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
