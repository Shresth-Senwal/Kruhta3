/**
 * @file site-brand.ts
 * @description Shared logo asset markup helpers for navigation, footers, and press assets.
 * @module frontend/src/components/layout
 */

import logoEmblem from "../../assets/logo-emblem.png";
import logoFull from "../../assets/logo-full.png";
import logoText from "../../assets/logo-text.png";

const BRAND_NAME = "Krutha Foundation";

function renderImage(src: string, alt: string, className: string) {
  return `<img alt="${alt}" class="${className}" src="${src}" />`;
}

function buildPrimaryBrandMarkup(className: string) {
  return renderImage(logoFull, `${BRAND_NAME} full logo`, className);
}

function buildFooterBrandMarkup(isDarkFooter: boolean) {
  const footerLogoClassName = isDarkFooter
    ? "h-16 w-auto max-w-[18rem] object-contain"
    : "h-16 w-auto max-w-[18rem] object-contain";

  return renderImage(logoFull, `${BRAND_NAME} full logo`, footerLogoClassName);
}

function replaceFooterBrandingBlock(footerMarkup: string) {
  const isDarkFooter = /bg-primary|bg-\[#1a332a\]|bg-slate-900|text-white/.test(footerMarkup);

  return footerMarkup.replace(
    /<div class="([^"]*flex items-center gap-3[^"]*)">(?:<div class="[^"]*">[\s\S]*?<\/div>|<span class="material-symbols-outlined[^"]*">[^<]+<\/span>)<(?:h1|h2|span)[^>]*>Krutha Foundation<\/(?:h1|h2|span)><\/div>/i,
    (_match, className: string) => `<div class="${className}">${buildFooterBrandMarkup(isDarkFooter)}</div>`
  );
}

function buildPressBrandAssetsCardMarkup() {
  return `<a class="bg-white p-6 rounded-2xl flex items-center gap-5 hover:shadow-lg transition-all border border-primary/5" download="krutha-foundation-logo-full.png" href="${logoFull}"><div class="grid grid-cols-3 gap-3"><span class="flex h-14 w-14 items-center justify-center">${renderImage(logoEmblem, `${BRAND_NAME} emblem`, "h-11 w-11 object-contain")}</span><span class="flex h-14 w-[4.5rem] items-center justify-center">${renderImage(logoText, `${BRAND_NAME} wordmark`, "h-4 w-auto object-contain")}</span><span class="flex h-14 w-[5.5rem] items-center justify-center">${renderImage(logoFull, `${BRAND_NAME} full logo`, "h-7 w-auto object-contain")}</span></div><div class="text-left"><p class="font-bold text-primary">Brand Assets</p><p class="text-xs text-primary/50">Logo Suite (PNG)</p></div></a>`;
}

export function buildDesktopBrandLinkMarkup(href: string) {
  return `<a aria-label="${BRAND_NAME} home" class="flex shrink-0 items-center" href="${href}">${buildPrimaryBrandMarkup("h-18 w-auto max-w-[22rem] object-contain")}</a>`;
}

export function buildMobileBrandLinkMarkup(href: string) {
  return `<a aria-label="${BRAND_NAME} home" class="flex min-w-0 shrink items-center" href="${href}">${buildPrimaryBrandMarkup("h-14 w-auto max-w-[13.5rem] object-contain")}</a>`;
}

export function buildOverlayBrandMarkup() {
  return `<div class="min-w-0 flex-1 px-1 py-1"><p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/60">Navigate</p><div class="mt-2 min-w-0">${buildPrimaryBrandMarkup("h-16 w-auto max-w-[15rem] object-contain")}<p class="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/55">Transforming communities</p></div></div>`;
}

export function enhanceStaticBranding(html: string) {
  return html
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, (footerMarkup) => replaceFooterBrandingBlock(footerMarkup))
    .replace(
      /<button class="bg-white p-6 rounded-2xl flex items-center gap-4 hover:shadow-lg transition-all border border-primary\/5"><span class="material-symbols-outlined text-3xl text-\[#6b8e7b\]">imagesmode<\/span><div class="text-left"><p class="font-bold text-primary">Brand Assets<\/p><p class="text-xs text-primary\/50">Logo Suite \(PNG, SVG\)<\/p><\/div><\/button>/g,
      buildPressBrandAssetsCardMarkup()
    );
}