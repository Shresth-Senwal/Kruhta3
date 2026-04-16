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

  return `<details id="${projectId}" class="rounded-2xl border border-primary/10 bg-white shadow-sm scroll-mt-28">
    <summary class="list-none cursor-pointer p-3">
      <div class="space-y-3">
        ${renderImageTag(thumbnail, `${project.title} thumbnail`, false)}
        <div class="space-y-1.5">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">${categoryTitle}</p>
          <h3 class="text-lg font-black leading-tight text-slate-900">${project.title}</h3>
          <p class="text-xs text-slate-600">Tap to view project details.</p>
        </div>
      </div>
    </summary>
    <div class="space-y-4 border-t border-primary/10 p-3">
      <p class="text-sm leading-relaxed text-slate-700">${project.description}</p>
      <details class="rounded-xl border border-primary/10 bg-background-light">
        <summary class="list-none cursor-pointer px-3 py-2.5">
          <span class="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-white">Show Gallery</span>
        </summary>
        <div class="px-3 pb-3">
          ${renderGalleryImages(galleryImages, project.title)}
        </div>
      </details>
      ${project.programPath ? `
        <div class="pt-3 border-t border-primary/5 flex justify-end">
          <a href="${project.programPath.startsWith("/m") ? project.programPath : "/m" + project.programPath}" class="inline-flex items-center gap-1.5 text-primary text-xs font-bold transition-all">
            Full Program Details <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
        </div>
      ` : ""}
    </div>
  </details>`;
}

const categoryToolbarHtml = [
  `<button type="button" data-category-filter="all" class="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-bold text-primary">All</button>`,
  ...projectMediaCategories.map(
    (category) => `<button type="button" data-category-filter="${category.title.toLowerCase()}" class="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-bold text-primary">${category.title}</button>`,
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
      <h2 class="text-xl font-black tracking-tight text-slate-900">${category.title}</h2>
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
  <header class="sticky top-0 z-50 flex items-center bg-background-light/80 backdrop-blur-md p-4 justify-between border-b border-primary/10"><a class="text-primary flex size-10 shrink-0 items-center justify-center" href="/m"><span class="material-symbols-outlined">arrow_back</span></a><h1 class="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Our Work</h1><div class="flex w-10 items-center justify-end"><button class="flex items-center justify-center text-primary"><span class="material-symbols-outlined">search</span></button></div></header>
  <main class="flex-1 px-4 py-4 pb-28"><div class="flex items-center justify-between mb-4"><h2 class="text-slate-900 text-xl font-bold tracking-tight">Projects Gallery</h2><span class="text-xs font-medium text-slate-500">Select Category</span></div><div class="sticky top-18 z-30 mb-5 rounded-xl border border-primary/10 bg-white/95 p-3 backdrop-blur"><div class="flex flex-wrap gap-1.5">${categoryToolbarHtml}</div></div><div class="space-y-6">${projectsGalleryHtml}</div></main>
  <footer class="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/10 bg-background-light px-4 pb-6 pt-2"><div class="flex items-center justify-between gap-2 max-w-md mx-auto"><a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m"><span class="material-symbols-outlined text-[24px]">home</span><p class="text-[10px] font-medium leading-none">Home</p></a><a class="flex flex-1 flex-col items-center justify-center gap-1 text-primary" href="/m/our-work"><span class="material-symbols-outlined text-[24px] font-fill">work</span><p class="text-[10px] font-bold leading-none">Our Work</p></a><a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m/events"><span class="material-symbols-outlined text-[24px]">show_chart</span><p class="text-[10px] font-medium leading-none">Impact</p></a><a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m/contact"><span class="material-symbols-outlined text-[24px]">favorite</span><p class="text-[10px] font-medium leading-none">Donate</p></a><a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m/about"><span class="material-symbols-outlined text-[24px]">person</span><p class="text-[10px] font-medium leading-none">Profile</p></a></div></footer>
</div>`;

export function OurWorkMobilePage() {
  return <StaticMarkupPage html={html} />;
}