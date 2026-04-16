/**
 * @file routes.ts
 * @description Shared route metadata for desktop and mobile page variants.
 * @module frontend/src/data
 */

export type RouteKey =
  | "home"
  | "about"
  | "our-work"
  | "events"
  | "blog"
  | "contact"
  | "press"
  | "donation-confirmation"
  | "programs-leads"
  | "programs-bhagiratha"
  | "programs-vasundhara"
  | "programs-samyamam"
  | "impact-report";

export interface AppRoute {
  key: RouteKey;
  path: string;
  label: string;
}

export const desktopRoutes: AppRoute[] = [
  { key: "home", path: "/", label: "Home" },
  { key: "about", path: "/about", label: "About Us" },
  { key: "our-work", path: "/our-work", label: "Our Work" },
  { key: "events", path: "/events", label: "Events" },
  { key: "blog", path: "/blog", label: "Blog" },
  { key: "contact", path: "/contact", label: "Contact Us" },
  { key: "press", path: "/press", label: "Press" },
  { key: "donation-confirmation", path: "/donation-confirmation", label: "Donation Confirmation" },
  { key: "programs-leads", path: "/programs/leads", label: "L.E.A.D.S Program" },
  { key: "programs-bhagiratha", path: "/programs/bhagiratha", label: "Project Bhagiratha" },
  { key: "programs-vasundhara", path: "/programs/vasundhara", label: "Project Vasundhara" },
  { key: "programs-samyamam", path: "/programs/samyamam", label: "Project Samyamam" },
  { key: "impact-report", path: "/impact-report", label: "Impact Report" }
];

export const mobileRoutes: AppRoute[] = [
  { key: "home", path: "/m", label: "Home" },
  { key: "about", path: "/m/about", label: "About Us" },
  { key: "our-work", path: "/m/our-work", label: "Our Work" },
  { key: "events", path: "/m/events", label: "Events" },
  { key: "blog", path: "/m/blog", label: "Blog" },
  { key: "contact", path: "/m/contact", label: "Contact Us" },
  { key: "press", path: "/m/press", label: "Press" },
  { key: "donation-confirmation", path: "/m/donation-confirmation", label: "Donation Confirmation" },
  { key: "programs-leads", path: "/m/programs/leads", label: "L.E.A.D.S Program" },
  { key: "programs-bhagiratha", path: "/m/programs/bhagiratha", label: "Project Bhagiratha" },
  { key: "programs-vasundhara", path: "/m/programs/vasundhara", label: "Project Vasundhara" },
  { key: "programs-samyamam", path: "/m/programs/samyamam", label: "Project Samyamam" },
  { key: "impact-report", path: "/m/impact-report", label: "Impact Report" }
];