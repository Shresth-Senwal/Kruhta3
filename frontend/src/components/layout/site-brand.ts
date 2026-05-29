/**
 * @file site-brand.ts
 * @description Shared logo asset markup helpers for navigation, footers, and press assets.
 * @module frontend/src/components/layout
 */

import logoEmblem from "../../assets/logo-emblem.webp";
import logoFull from "../../assets/logo-full.webp";
import logoText from "../../assets/logo-text.webp";

const BRAND_NAME = "Krutha Foundation";

function renderImage(src: string, alt: string, className: string) {
  const absoluteSrc = src.startsWith("http") || src.startsWith("/") || src.startsWith("data:") ? src : `/${src}`;
  return `<img alt="${alt}" class="${className}" src="${absoluteSrc}" />`;
}

function buildPrimaryBrandMarkup(containerClassName: string, emblemClassName: string, textClassName: string) {
  return `<div class="${containerClassName}">
    ${renderImage(logoText, `${BRAND_NAME} wordmark`, textClassName)}
    ${renderImage(logoEmblem, `${BRAND_NAME} emblem`, emblemClassName)}
  </div>`;
}

function buildFooterBrandMarkup(isDarkFooter: boolean) {
  const footerLogoClassName = isDarkFooter
    ? "h-16 w-auto max-w-[18rem] object-contain"
    : "h-16 w-auto max-w-[18rem] object-contain";

  return renderImage(logoFull, `${BRAND_NAME} full logo`, footerLogoClassName);
}

function replaceFooterBrandingBlock(footerMarkup: string) {
  const isDarkFooter = /bg-(?:primary|forest|slate-900|slate-950|background-dark)|text-white/.test(footerMarkup);

  return footerMarkup.replace(
    /<div class="([^"]*flex items-center gap-3[^"]*)">(?:<div class="[^"]*">[\s\S]*?<\/div>|<span class="material-symbols-outlined[^"]*">[^<]+<\/span>)<(?:h1|h2|span)[^>]*>Krutha Foundation<\/(?:h1|h2|span)><\/div>/i,
    (_match, className: string) => `<div class="${className}">${buildFooterBrandMarkup(isDarkFooter)}</div>`
  );
}

function softenFooterPalette(footerMarkup: string) {
  return footerMarkup
    .replace(/\bbg-slate-950\b/g, "bg-accent/10")
    .replace(/\bbg-slate-900\b/g, "bg-accent/10")
    .replace(/\btext-white\b/g, "text-slate-900")
    .replace(/\btext-slate-500\b/g, "text-slate-600")
    .replace(/\btext-slate-400\b/g, "text-slate-600")
    .replace(/\bhover:text-white\b/g, "hover:text-primary")
    .replace(/\bborder-white\/5\b/g, "border-accent/20")
    .replace(/\bborder-white\/10\b/g, "border-accent/20")
    .replace(/\bbg-white\/5\b/g, "bg-white/60")
    .replace(/\bbg-white\/10\b/g, "bg-white/70");
}

function buildPressBrandAssetsCardMarkup() {
  return `<a class="bg-white p-6 rounded-2xl flex items-center gap-5 hover:shadow-lg transition-all border border-primary/5" download="krutha-foundation-logo-full.webp" href="${logoFull}"><div class="grid grid-cols-3 gap-3"><span class="flex h-14 w-14 items-center justify-center">${renderImage(logoEmblem, `${BRAND_NAME} emblem`, "h-11 w-11 object-contain")}</span><span class="flex h-14 w-18 items-center justify-center">${renderImage(logoText, `${BRAND_NAME} wordmark`, "h-4 w-auto object-contain")}</span><span class="flex h-14 w-22 items-center justify-center">${renderImage(logoFull, `${BRAND_NAME} full logo`, "h-7 w-auto object-contain")}</span></div><div class="text-left"><p class="font-bold text-primary">Brand Assets</p><p class="text-xs text-primary/50">Logo Suite (WebP)</p></div></a>`;
}

export function buildDesktopBrandLinkMarkup(href: string) {
  return `<a aria-label="${BRAND_NAME} home" class="flex shrink-0 items-center" href="${href}">${buildPrimaryBrandMarkup("flex items-center gap-2", "h-12 w-auto shrink-0 object-contain", "h-10 w-auto object-contain")}</a>`;
}

export function buildMobileBrandLinkMarkup(href: string) {
  return `<a aria-label="${BRAND_NAME} home" class="flex min-w-0 shrink items-center" href="${href}">${buildPrimaryBrandMarkup("flex items-center gap-1.5", "h-9 w-auto shrink-0 object-contain", "h-7 w-auto object-contain")}</a>`;
}

export function buildOverlayBrandMarkup() {
  return `<div class="min-w-0 flex-1 px-1">${buildPrimaryBrandMarkup("flex items-center gap-2", "h-10 w-auto shrink-0 object-contain", "h-8 w-auto object-contain")}</div>`;
}

export function enhanceStaticBranding(html: string) {
  return html
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, (footerMarkup) => softenFooterPalette(replaceFooterBrandingBlock(footerMarkup)))
    .replace(
      /<button class="bg-white p-6 rounded-2xl flex items-center gap-4 hover:shadow-lg transition-all border border-primary\/5"><span class="material-symbols-outlined text-3xl text-\[#8acac5\]">imagesmode<\/span><div class="text-left"><p class="font-bold text-primary">Brand Assets<\/p><p class="text-xs text-primary\/50">Logo Suite \(PNG, SVG\)<\/p><\/div><\/button>/g,
      buildPressBrandAssetsCardMarkup()
    );
}
