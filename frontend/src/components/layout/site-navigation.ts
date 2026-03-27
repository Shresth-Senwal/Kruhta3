/**
 * @file site-navigation.ts
 * @description Shared desktop and mobile navigation markup for static page shells.
 * @module frontend/src/components/layout
 */

import { desktopRoutes, mobileRoutes, type AppRoute, type RouteKey } from "../../data/routes";
import { buildDesktopBrandLinkMarkup, buildMobileBrandLinkMarkup, buildOverlayBrandMarkup } from "./site-brand";

const PRIMARY_ROUTE_KEYS: RouteKey[] = ["home", "about", "our-work", "events", "blog", "contact", "press"];

const desktopNavigationRoutes = desktopRoutes.filter((route) => PRIMARY_ROUTE_KEYS.includes(route.key));
const mobileNavigationRoutes = mobileRoutes.filter((route) => PRIMARY_ROUTE_KEYS.includes(route.key));

function getDesktopLinkClass(pathname: string, route: AppRoute) {
  const isActive = pathname === route.path;

  if (isActive) {
    return "text-primary text-sm font-bold";
  }

  return "text-slate-600 text-sm font-medium transition-colors hover:text-primary";
}

function getMobileLinkClass(pathname: string, route: AppRoute) {
  const isActive = pathname === route.path;

  if (isActive) {
    return "flex items-center justify-between rounded-2xl border border-primary/15 bg-primary px-4 py-3 text-white shadow-sm";
  }

  return "flex items-center justify-between rounded-2xl border border-primary/10 bg-white px-4 py-3 text-slate-700 transition-colors hover:border-primary/25 hover:text-primary";
}

function renderDesktopLinks(pathname: string) {
  return desktopNavigationRoutes
    .map((route) => {
      const isActive = pathname === route.path;
      const currentPage = isActive ? ' aria-current="page"' : "";

      return `<a class="${getDesktopLinkClass(pathname, route)}" href="${route.path}"${currentPage}>${route.label}</a>`;
    })
    .join("");
}

function renderMobileLinks(pathname: string) {
  return mobileNavigationRoutes
    .map((route) => {
      const isActive = pathname === route.path;
      const currentPage = isActive ? ' aria-current="page"' : "";
      const activeIconClass = isActive ? "text-white/80" : "text-primary";

      return `<a class="${getMobileLinkClass(pathname, route)}" href="${route.path}"${currentPage}><span class="text-sm font-semibold">${route.label}</span><span class="material-symbols-outlined text-[20px] ${activeIconClass}">arrow_outward</span></a>`;
    })
    .join("");
}

function renderOverlayLinks(pathname: string, routes: AppRoute[]) {
  return routes
    .map((route) => {
      const isActive = pathname === route.path;
      const currentPage = isActive ? ' aria-current="page"' : "";
      const itemClass = isActive
        ? "flex items-center justify-between rounded-2xl border border-primary/15 bg-primary px-4 py-3 text-white shadow-sm"
        : "flex items-center justify-between rounded-2xl border border-primary/10 bg-white px-4 py-3 text-slate-700 transition-colors hover:border-primary/25 hover:text-primary";
      const iconClass = isActive ? "text-white/80" : "text-primary";

      return `<a class="${itemClass}" href="${route.path}"${currentPage}><span class="text-sm font-semibold">${route.label}</span><span class="material-symbols-outlined text-[20px] ${iconClass}">arrow_outward</span></a>`;
    })
    .join("");
}

function buildMenuOverlayMarkup(pathname: string, routes: AppRoute[], contactPath: string) {
  return String.raw`<div class="invisible pointer-events-none fixed inset-0 z-60 opacity-0 transition-opacity duration-200" data-mobile-menu id="mobile-site-menu">
    <button aria-label="Close navigation menu" class="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]" data-mobile-menu-close type="button"></button>
    <div class="absolute inset-x-0 top-0 rounded-b-[2rem] border-b border-primary/10 bg-background-light px-4 pb-6 pt-4 shadow-2xl">
      <div class="mx-auto max-w-md">
        <div class="mb-5 flex items-center justify-between gap-4">
          ${buildOverlayBrandMarkup()}
          <button aria-label="Close navigation menu" class="flex size-11 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-sm" data-mobile-menu-close type="button">
            <span class="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>
        <nav aria-label="Mobile navigation" class="grid gap-3">${renderOverlayLinks(pathname, routes)}</nav>
        <a class="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-md shadow-primary/20 transition-opacity hover:opacity-90" href="${contactPath}">Donate Now</a>
      </div>
    </div>
  </div>`;
}

export function buildDesktopHeaderMarkup(pathname: string) {
  return String.raw`<header class="sticky top-0 z-50 border-b border-primary/10 bg-background-light/90 backdrop-blur-md">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
      ${buildDesktopBrandLinkMarkup("/")}
      <div class="flex items-center gap-4 lg:gap-6">
        <nav class="hidden items-center gap-6 lg:flex" aria-label="Primary">${renderDesktopLinks(pathname)}</nav>
        <button aria-controls="mobile-site-menu" aria-expanded="false" aria-label="Open navigation menu" class="flex size-11 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-sm lg:hidden" data-mobile-menu-toggle type="button">
          <span class="material-symbols-outlined text-[24px]">menu</span>
        </button>
        <a class="inline-flex min-w-33 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-opacity hover:opacity-90" href="/contact">Donate Now</a>
      </div>
    </div>
  </header>
  ${buildMenuOverlayMarkup(pathname, desktopNavigationRoutes, "/contact")}`;
}

export function buildMobileHeaderMarkup(pathname: string) {
  return String.raw`<header class="sticky top-0 z-50 border-b border-primary/10 bg-background-light/95 backdrop-blur-md">
    <div class="mx-auto flex h-18 max-w-md items-center justify-between px-4">
      ${buildMobileBrandLinkMarkup("/m")}
      <button aria-controls="mobile-site-menu" aria-expanded="false" aria-label="Open navigation menu" class="flex size-11 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-sm" data-mobile-menu-toggle type="button">
        <span class="material-symbols-outlined text-[24px]">menu</span>
      </button>
    </div>
  </header>
  ${buildMenuOverlayMarkup(pathname, mobileNavigationRoutes, "/m/contact")}`;
}