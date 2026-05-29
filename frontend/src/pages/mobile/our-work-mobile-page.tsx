/**
 * @file our-work-mobile-page.tsx
 * @description Mobile our work page rendered from the provided reference layout.
 * @module frontend/src/pages/mobile
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import { projectMediaCategories } from "../../data/project-media";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function extractDriveFileId(previewUrl: string) {
  const match = previewUrl.match(/\/d\/([^/]+)\//);
  return match ? match[1] : "";
}

function toThumbnailUrl(previewUrl: string) {
  const fileId = extractDriveFileId(previewUrl);

  if (!fileId) {
    return previewUrl;
  }

  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;
}

function getImageSources(previewUrl: string) {
  const fileId = extractDriveFileId(previewUrl);

  if (!fileId) {
    return {
      primary: previewUrl,
      fallback1: previewUrl,
      fallback2: previewUrl,
      fallback3: previewUrl,
      preview: "",
    };
  }

  return {
    primary: `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`,
    fallback1: `https://lh3.googleusercontent.com/d/${fileId}=w1200`,
    fallback2: `https://drive.google.com/uc?export=view&id=${fileId}`,
    fallback3: `https://drive.usercontent.google.com/download?id=${fileId}&export=view&authuser=0`,
    preview: `https://drive.google.com/file/d/${fileId}/preview`,
  };
}

function renderImageTag(src: string, alt: string, withZoom: boolean) {
  const imageSources = getImageSources(src);
  const fallbackList = [imageSources.fallback1, imageSources.fallback2, imageSources.fallback3].filter(Boolean).join("|");

  return `<img
      class="h-full w-full rounded-xl border border-primary/10 object-cover${withZoom ? " cursor-zoom-in" : ""}"
      src="${imageSources.primary}"
      alt="${alt}"
      loading="lazy"
      ${withZoom ? "data-project-image" : ""}
      ${withZoom ? `data-project-image-src="${imageSources.primary}"` : ""}
      data-image-fallbacks="${fallbackList}"
      data-fallback-index="0"
      data-drive-preview="${imageSources.preview}"
      data-fallback-step="0"
      oncontextmenu="return false"
    />`;
}

function renderGalleryImages(images: string[], projectTitle: string) {
  if (images.length === 0) {
    return `<p class="text-xs text-slate-500">No additional images available for this project.</p>`;
  }

  return `<div class="grid grid-cols-1 gap-3">
    ${images
      .map(
        (src, index) => renderImageTag(src, `${projectTitle} gallery image ${index + 1}`, true),
      )
      .join("")}
  </div>`;
}

function renderProjectCard(categoryTitle: string, project: (typeof projectMediaCategories)[number]["projects"][number]) {
  const projectId = `m-project-${slugify(categoryTitle)}-${slugify(project.title)}`;
  const [thumbnail, ...galleryImages] = project.images;

  return `<details id="${projectId}" class="group rounded-2xl border border-primary/10 bg-white shadow-sm scroll-mt-28">
    <summary class="list-none cursor-pointer p-3">
      <div class="space-y-3">
        ${renderImageTag(thumbnail, `${project.title} thumbnail`, false)}
        <div class="space-y-2">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-accent font-display">${categoryTitle}</p>
          <h3 class="font-editorial text-xl font-bold leading-tight text-slate-900">${project.title}</h3>
          <p class="text-xs text-slate-600 leading-relaxed">${project.description}</p>
          <div class="flex flex-col gap-3 pt-2">
            <span class="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 group-open:hidden">Show Gallery</span>
            <span class="hidden items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 group-open:inline-flex">Hide Gallery</span>
            ${project.programPath ? `
              <a href="${project.programPath.startsWith("/m") ? project.programPath : "/m" + project.programPath}" class="inline-flex items-center justify-center gap-1.5 text-primary text-xs font-bold transition-all border border-primary/20 rounded-xl py-2 hover:text-accent">
                View Impact <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            ` : ""}
          </div>
        </div>
      </div>
    </summary>
    <div class="space-y-4 border-t border-primary/10 p-3">
      ${renderGalleryImages(galleryImages, project.title)}
    </div>
  </details>`;
}

const categoryToolbarHtml = [
  `<button type="button" data-category-filter="all" class="shrink-0 rounded-full bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-wider text-white shadow-lg shadow-primary/20 transition-all active:scale-95">All</button>`,
  ...projectMediaCategories.map(
    (category) => `<button type="button" data-category-filter="${category.title.toLowerCase()}" class="shrink-0 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-wider text-slate-500 transition-all hover:bg-primary/10 active:scale-95">${category.title}</button>`,
  ),
].join("");

function renderCategorySection(category: (typeof projectMediaCategories)[number]) {
  const categoryId = `m-cat-${slugify(category.title)}`;
  const projectToolbar = category.projects
    .map(
      (project) => `<a
        class="rounded-full border border-primary/15 bg-background-light px-2.5 py-1 text-[11px] font-semibold text-slate-700"
        href="#m-project-${slugify(category.title)}-${slugify(project.title)}"
      >${project.title}</a>`,
    )
    .join("");

  return `<section id="${categoryId}" data-category-section="${category.title.toLowerCase()}" class="space-y-4 rounded-2xl border border-primary/10 bg-white p-4 scroll-mt-28">
    <div class="space-y-3">
      <h2 class="font-editorial text-2xl font-bold tracking-tight text-slate-900">${category.title}</h2>
      <div class="flex flex-wrap gap-1.5">${projectToolbar}</div>
    </div>
    <div class="space-y-3">
      ${category.projects.map((project) => renderProjectCard(category.title, project)).join("")}
    </div>
  </section>`;
}

const projectsGalleryHtml = projectMediaCategories.map((category) => renderCategorySection(category)).join("");

const html = String.raw`
<div class="relative flex min-h-screen flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
  <header class="sticky top-0 z-50 flex items-center bg-background-light/80 backdrop-blur-md p-4 justify-between border-b border-primary/10"><a class="text-primary flex size-9 shrink-0 items-center justify-center" href="/m"><span class="material-symbols-outlined text-[20px]">arrow_back</span></a><h1 class="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-editorial">Our Work</h1><div class="flex w-9 items-center justify-end"><button class="flex items-center justify-center text-primary"><span class="material-symbols-outlined text-[18px]">search</span></button></div></header>
  <main class="flex-1 px-4 py-4 pb-28">
    <div class="flex items-center justify-between mb-6">
      <h2 class="font-editorial text-3xl font-bold tracking-tight text-slate-900">Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Work</span></h2>
      <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Filter</span>
    </div>
    
    <div class="sticky top-16 z-30 mb-8 -mx-4 px-4 overflow-x-auto no-scrollbar scroll-smooth">
      <div class="flex items-center gap-2 pb-2">
        ${categoryToolbarHtml}
      </div>
    </div>

    <div class="space-y-8">
      ${projectsGalleryHtml}
    </div>
  </main>
</div>`;

export function OurWorkMobilePage() {
  return <StaticMarkupPage html={html} />;
}