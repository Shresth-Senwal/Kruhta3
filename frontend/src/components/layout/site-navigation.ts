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
    return "flex items-center justify-between rounded-xl border border-primary/10 bg-primary/5 px-4 py-3.5 text-primary";
  }

  return "flex items-center justify-between rounded-xl border border-transparent px-4 py-3.5 text-slate-600 transition-all active:bg-slate-50 active:scale-[0.98]";
}

function renderDesktopLinks(pathname: string) {
  return desktopNavigationRoutes
    .map((route) => {
      const isActive = pathname === route.path;
      const currentPage = isActive ? ' aria-current="page"' : "";

      if (route.key === "about") {
        return `<div class="group relative flex h-full items-center">
          <a class="${getDesktopLinkClass(pathname, route)} flex items-center gap-1 group-hover:text-primary transition-colors" href="${route.path}"${currentPage}>
            ${route.label} <span class="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>
          </a>
          <div class="invisible absolute -left-4 top-full pt-2 opacity-0 transition-all duration-300 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-50">
            <div class="w-56 overflow-hidden rounded-[2rem] border border-white/50 bg-white/80 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-2.5">
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-primary/10 hover:text-primary rounded-2xl transition-all" href="/about#team">
                <div class="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span class="material-symbols-outlined text-[18px]">groups</span>
                </div>
                Our Team
              </a>
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-primary/10 hover:text-primary rounded-2xl transition-all" href="/about#partners">
                <div class="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span class="material-symbols-outlined text-[18px]">handshake</span>
                </div>
                Partners
              </a>
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-primary/10 hover:text-primary rounded-2xl transition-all" href="/about#transparency">
                <div class="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span class="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                </div>
                Transparency
              </a>
            </div>
          </div>
        </div>`;
      }

      if (route.key === "our-work") {
        return `<div class="group relative flex h-full items-center">
          <a class="${getDesktopLinkClass(pathname, route)} flex items-center gap-1 group-hover:text-primary transition-colors" href="${route.path}"${currentPage}>
            ${route.label} <span class="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>
          </a>
          <div class="invisible absolute -left-4 top-full pt-2 opacity-0 transition-all duration-300 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-50">
            <div class="w-60 overflow-hidden rounded-[2rem] border border-white/50 bg-white/80 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-2.5">
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-primary/10 hover:text-primary rounded-2xl transition-all" href="/our-work#cat-education">
                <div class="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span class="material-symbols-outlined text-[18px]">school</span>
                </div>
                Education
              </a>
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-primary/10 hover:text-primary rounded-2xl transition-all" href="/our-work#cat-environment">
                <div class="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span class="material-symbols-outlined text-[18px]">eco</span>
                </div>
                Environment
              </a>
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-primary/10 hover:text-primary rounded-2xl transition-all" href="/our-work#cat-water-sanitation">
                <div class="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span class="material-symbols-outlined text-[18px]">water_drop</span>
                </div>
                Water & Sanitation
              </a>
            </div>
          </div>
        </div>`;
      }

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
      const iconClass = isActive ? "text-primary" : "text-slate-300";

      if (route.key === "about") {
        const subPathPrefix = pathname.startsWith("/m") ? "/m" : "";
        return `<div class="flex flex-col">
          <div class="flex items-center pr-2">
            <a class="${getMobileLinkClass(pathname, route)} flex-1" href="${route.path}"${currentPage}>
              <span class="text-base font-bold">${route.label}</span>
              <span class="material-symbols-outlined text-[20px] ${iconClass}">${isActive ? "arrow_forward" : "arrow_outward"}</span>
            </a>
            <button class="flex size-12 items-center justify-center text-slate-400 active:text-primary transition-colors" data-submenu-toggle="about" type="button">
              <span class="material-symbols-outlined text-[24px] transition-transform duration-300" data-submenu-arrow>expand_more</span>
            </button>
          </div>
          <div class="hidden overflow-hidden" data-submenu="about">
            <div class="mt-1 flex flex-col gap-1 pl-4 pr-2 pb-2">
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-500 active:bg-primary/5 active:text-primary rounded-xl transition-all" href="${subPathPrefix}/about#team">
                <span class="material-symbols-outlined text-[18px] opacity-40">groups</span>
                Our Team
              </a>
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-500 active:bg-primary/5 active:text-primary rounded-xl transition-all" href="${subPathPrefix}/about#partners">
                <span class="material-symbols-outlined text-[18px] opacity-40">handshake</span>
                Partners
              </a>
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-500 active:bg-primary/5 active:text-primary rounded-xl transition-all" href="${subPathPrefix}/about#transparency">
                <span class="material-symbols-outlined text-[18px] opacity-40">account_balance_wallet</span>
                Transparency
              </a>
            </div>
          </div>
        </div>`;
      }

      if (route.key === "our-work") {
        const subPathPrefix = pathname.startsWith("/m") ? "/m" : "";
        return `<div class="flex flex-col">
          <div class="flex items-center pr-2">
            <a class="${getMobileLinkClass(pathname, route)} flex-1" href="${route.path}"${currentPage}>
              <span class="text-base font-bold">${route.label}</span>
              <span class="material-symbols-outlined text-[20px] ${iconClass}">${isActive ? "arrow_forward" : "arrow_outward"}</span>
            </a>
            <button class="flex size-12 items-center justify-center text-slate-400 active:text-primary transition-colors" data-submenu-toggle="our-work" type="button">
              <span class="material-symbols-outlined text-[24px] transition-transform duration-300" data-submenu-arrow>expand_more</span>
            </button>
          </div>
          <div class="hidden overflow-hidden" data-submenu="our-work">
            <div class="mt-1 flex flex-col gap-1 pl-4 pr-2 pb-2">
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-500 active:bg-primary/5 active:text-primary rounded-xl transition-all" href="${subPathPrefix}/our-work#m-cat-education">
                <span class="material-symbols-outlined text-[18px] opacity-40">school</span>
                Education
              </a>
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-500 active:bg-primary/5 active:text-primary rounded-xl transition-all" href="${subPathPrefix}/our-work#m-cat-environment">
                <span class="material-symbols-outlined text-[18px] opacity-40">eco</span>
                Environment
              </a>
              <a class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-500 active:bg-primary/5 active:text-primary rounded-xl transition-all" href="${subPathPrefix}/our-work#m-cat-water-sanitation">
                <span class="material-symbols-outlined text-[18px] opacity-40">water_drop</span>
                Water & Sanitation
              </a>
            </div>
          </div>
        </div>`;
      }

      return `<div class="flex flex-col">
        <a class="${getMobileLinkClass(pathname, route)} mr-2" href="${route.path}"${currentPage}>
          <span class="text-base font-bold">${route.label}</span>
          <span class="material-symbols-outlined text-[20px] ${iconClass}">${isActive ? "arrow_forward" : "arrow_outward"}</span>
        </a>
      </div>`;
    })
    .join("");
}

function buildMenuOverlayMarkup(pathname: string, routes: AppRoute[], contactPath: string) {
  return String.raw`<div class="invisible pointer-events-none fixed inset-0 z-60 opacity-0 transition-opacity duration-200" data-mobile-menu id="mobile-site-menu">
    <button aria-label="Close navigation menu" class="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" data-mobile-menu-close type="button"></button>
    <div class="absolute inset-x-0 top-0 rounded-b-[2.5rem] bg-background-light px-4 pb-8 pt-4 shadow-2xl">
      <div class="mx-auto max-w-md">
        <div class="mb-8 flex items-center justify-between gap-6 px-1">
          ${buildOverlayBrandMarkup()}
          <button aria-label="Close navigation menu" class="flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 active:bg-slate-200" data-mobile-menu-close type="button">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <nav aria-label="Mobile navigation" class="flex flex-col gap-1 mb-8">${renderOverlayLinks(pathname, routes)}</nav>
        <div class="px-1">
          <a class="flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-4 text-base font-bold text-white shadow-xl shadow-primary/25 active:scale-[0.98] transition-all" href="${contactPath}">Donate Now</a>
        </div>
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

/**
 * Builds the shared dark desktop footer used by primary desktop pages.
 */
export function buildDesktopFooterMarkup() {
  return String.raw`<footer class="bg-slate-900 text-slate-400 py-20 border-t border-white/5 font-display">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div class="space-y-6">
          <div class="flex items-center gap-3 text-white"><div class="w-8 h-8 bg-primary rounded flex items-center justify-center"><span class="material-symbols-outlined text-sm">eco</span></div><span class="font-bold text-lg">Krutha Foundation</span></div>
          <p class="text-sm leading-relaxed">Dedicated to creating self-sustaining rural ecosystems that thrive on the principles of equity, sustainability, and traditional wisdom.</p>
        </div>
        <div class="space-y-6"><h4 class="text-white font-bold uppercase tracking-widest text-xs">Quick Links</h4><ul class="space-y-4 text-sm"><li><a class="hover:text-primary transition-colors" href="/about">Our History</a></li><li><a class="hover:text-primary transition-colors" href="/our-work">Project Portfolio</a></li><li><a class="hover:text-primary transition-colors" href="/press">Annual Reports</a></li><li><a class="hover:text-primary transition-colors" href="/contact">Volunteer With Us</a></li></ul></div>
        <div class="space-y-6"><h4 class="text-white font-bold uppercase tracking-widest text-xs">Contact Us</h4><div class="space-y-4 text-sm"><p class="flex gap-3"><span class="material-symbols-outlined text-primary text-sm">location_on</span>Vadapalem, East Godavari District, Andhra Pradesh, India</p><p class="flex gap-3"><span class="material-symbols-outlined text-primary text-sm">mail</span>info@kruthafoundation.org</p></div></div>
        <div class="space-y-6"><h4 class="text-white font-bold uppercase tracking-widest text-xs">Our Partners</h4><div class="flex flex-wrap gap-4"><div class="h-10 px-4 bg-white/5 rounded flex items-center justify-center border border-white/10"><span class="font-bold text-white text-xs">PCT</span></div><div class="h-10 px-4 bg-white/5 rounded flex items-center justify-center border border-white/10"><span class="font-bold text-white text-xs">APTA</span></div></div></div>
      </div>
      <div class="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"><p>(c) 2024 Krutha Foundation. All rights reserved.</p><div class="flex gap-6"><a class="hover:text-white" href="/contact">Privacy Policy</a><a class="hover:text-white" href="/contact">Terms of Service</a></div></div>
    </div>
  </footer>`;
}

/**
 * Builds the shared dark compact footer used by mobile content pages.
 */
export function buildMobilePageFooterMarkup() {
  return String.raw`<footer class="bg-slate-950 p-8 text-center border-t border-white/5 pb-28">
    <div class="flex items-center justify-center gap-2 text-white mb-6">
       <span class="material-symbols-outlined text-sm">eco</span>
       <span class="font-bold text-sm">Krutha Foundation</span>
    </div>
    <div class="flex justify-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
       <a href="/m/about">About</a>
       <a href="/m/our-work">Work</a>
       <a href="/m/contact">Contact</a>
    </div>
  </footer>`;
}

export function buildMobileToolbarMarkup(pathname: string) {
  const tabs = [
    { label: "Home", path: "/m", icon: "home" },
    { label: "About", path: "/m/about", icon: "info" },
    { label: "Projects", path: "/m/our-work", icon: "folder_shared" },
    { label: "Donate", path: "/m/contact", icon: "volunteer_activism" },
  ];

  const links = tabs
    .map((tab) => {
      const isActive = pathname === tab.path;
      const colorClass = isActive ? "text-primary" : "text-slate-400";
      const iconWeight = isActive ? "font-variation-settings: 'FILL' 1" : "";

      return `<a class="flex flex-1 flex-col items-center justify-center gap-1.5 ${colorClass} transition-all active:scale-95" href="${tab.path}">
      <div class="relative flex items-center justify-center">
        <span class="material-symbols-outlined text-[26px]" style="${iconWeight}">${tab.icon}</span>
        ${isActive ? '<div class="absolute -bottom-1.5 size-1 rounded-full bg-primary"></div>' : ""}
      </div>
      <p class="text-[9px] font-black uppercase tracking-[0.15em] leading-none">${tab.label}</p>
    </a>`;
    })
    .join("");

  return String.raw`<footer class="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/5 bg-white/80 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.04)] pb-8 pt-3 px-4">
    <div class="mx-auto max-w-md flex items-center justify-between">
      ${links}
    </div>
  </footer>`;
}