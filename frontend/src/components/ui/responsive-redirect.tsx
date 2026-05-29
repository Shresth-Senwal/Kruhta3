/**
 * @file responsive-redirect.tsx
 * @description Component that redirects between desktop and mobile routes based on viewport width.
 * @module frontend/src/components/ui
 */

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { desktopRoutes, mobileRoutes } from "../../data/routes";

export function ResponsiveRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const isMobilePath = pathname.startsWith("/m");

  useEffect(() => {
    const checkResponsive = () => {
      const isMobileSize = window.innerWidth < 768; // Tailwind md breakpoint
      
      if (isMobileSize && !isMobilePath) {
        // Target mobile path
        const mPath = pathname === "/" ? "/m" : "/m" + pathname;
        if (mobileRoutes.some(r => r.path === mPath)) {
          navigate(mPath + location.search + location.hash, { replace: true });
        }
      } else if (!isMobileSize && isMobilePath) {
        // Target desktop path
        const dPath = pathname.slice(2) || "/";
        if (desktopRoutes.some(r => r.path === dPath)) {
          navigate(dPath + location.search + location.hash, { replace: true });
        }
      }
    };

    checkResponsive();
    window.addEventListener("resize", checkResponsive);
    return () => window.removeEventListener("resize", checkResponsive);
  }, [pathname, isMobilePath, navigate, location.search, location.hash]);

  return null;
}
