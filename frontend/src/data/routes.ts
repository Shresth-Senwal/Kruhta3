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
  | "donation-confirmation";

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
  { key: "donation-confirmation", path: "/donation-confirmation", label: "Donation Confirmation" }
];

export const mobileRoutes: AppRoute[] = [
  { key: "home", path: "/m", label: "Home" },
  { key: "about", path: "/m/about", label: "About Us" },
  { key: "our-work", path: "/m/our-work", label: "Our Work" },
  { key: "events", path: "/m/events", label: "Events" },
  { key: "blog", path: "/m/blog", label: "Blog" },
  { key: "contact", path: "/m/contact", label: "Contact Us" },
  { key: "press", path: "/m/press", label: "Press" },
  { key: "donation-confirmation", path: "/m/donation-confirmation", label: "Donation Confirmation" }
];