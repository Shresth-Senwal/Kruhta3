/**
 * @file our-work-desktop-page.tsx
 * @description Desktop our work page rendered from the provided reference layout.
 * @module frontend/src/pages/desktop
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
    return `<p class="text-sm text-slate-500">No additional images available for this project.</p>`;
  }

  return `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    ${images
      .map(
        (src, index) => renderImageTag(src, `${projectTitle} gallery image ${index + 1}`, true),
      )
      .join("")}
  </div>`;
}

function renderProjectCard(categoryTitle: string, project: (typeof projectMediaCategories)[number]["projects"][number]) {
  const projectId = `project-${slugify(categoryTitle)}-${slugify(project.title)}`;
  const [thumbnail, ...galleryImages] = project.images;

  return `<details id="${projectId}" class="rounded-3xl border border-primary/10 bg-white shadow-sm open:shadow-md scroll-mt-28">
    <summary class="list-none cursor-pointer">
      <div class="grid grid-cols-1 md:grid-cols-[340px_minmax(0,1fr)] gap-6 p-5 lg:p-6">
        ${renderImageTag(thumbnail, `${project.title} thumbnail`, false)}
        <div class="flex flex-col justify-between gap-4">
          <div class="space-y-2">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary">${categoryTitle}</p>
            <h3 class="text-2xl font-black tracking-tight text-slate-900">${project.title}</h3>
            <p class="text-slate-600">Click to view project details.</p>
          </div>
          <span class="inline-flex w-fit items-center rounded-full bg-primary px-4 py-2 text-sm font-bold text-white">Open Project</span>
        </div>
      </div>
    </summary>
    <div class="space-y-5 border-t border-primary/10 px-5 py-6 lg:px-6">
      <p class="text-base leading-relaxed text-slate-700">${project.description}</p>
      <details class="rounded-2xl border border-primary/10 bg-background-light">
        <summary class="list-none cursor-pointer px-4 py-3">
          <span class="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-bold text-white">Show Gallery</span>
        </summary>
        <div class="px-4 pb-4">
          ${renderGalleryImages(galleryImages, project.title)}
        </div>
      </details>
    </div>
  </details>`;
}

const categoryToolbarHtml = [
  `<button type="button" data-category-filter="all" class="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors">All</button>`,
  ...projectMediaCategories.map(
    (category) => `<button type="button" data-category-filter="${category.title.toLowerCase()}" class="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors">${category.title}</button>`,
  ),
].join("");

function renderCategorySection(category: (typeof projectMediaCategories)[number]) {
  const categoryId = `cat-${slugify(category.title)}`;
  const projectToolbar = category.projects
    .map(
      (project) => `<a
        class="rounded-full border border-primary/15 bg-background-light px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-primary/40 hover:text-primary transition-colors"
        href="#project-${slugify(category.title)}-${slugify(project.title)}"
      >${project.title}</a>`,
    )
    .join("");

  return `<section id="${categoryId}" data-category-section="${category.title.toLowerCase()}" class="space-y-6 rounded-3xl border border-primary/10 bg-white/70 p-6 lg:p-8 scroll-mt-28">
    <div class="space-y-4">
      <h2 class="text-3xl font-black tracking-tight text-slate-900">${category.title}</h2>
      <div class="flex flex-wrap gap-2">${projectToolbar}</div>
    </div>
    <div class="space-y-5">
      ${category.projects.map((project) => renderProjectCard(category.title, project)).join("")}
    </div>
  </section>`;
}

const projectsGalleryHtml = projectMediaCategories.map((category) => renderCategorySection(category)).join("");

const html = String.raw`
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 py-4 lg:px-20 bg-background-light">
    <div class="flex items-center gap-4 text-primary"><div class="size-8 flex items-center justify-center bg-primary text-white rounded-lg"><span class="material-symbols-outlined">diversity_3</span></div><h2 class="text-slate-900 text-xl font-bold leading-tight tracking-tight">Krutha Foundation</h2></div>
    <div class="flex flex-1 justify-end gap-8"><nav class="hidden md:flex items-center gap-9"><a class="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="/">Home</a><a class="text-primary text-sm font-bold border-b-2 border-primary pb-1" href="/our-work">Our Work</a><a class="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="/about">About Us</a><a class="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="/contact">Donate</a></nav><div class="flex items-center gap-4"><a class="flex min-w-[100px] items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-all" href="/contact">Contact Us</a></div></div>
  </header>
  <main class="flex flex-1 flex-col py-10 px-6 lg:px-20"><div class="max-w-[1200px] mx-auto w-full"><div class="flex flex-col gap-4 mb-8"><h1 class="text-slate-900 text-5xl font-black leading-tight tracking-tight">Our Work</h1><p class="text-slate-600 text-lg font-normal max-w-3xl">Select a category from the toolbar, then choose a project. Open the project card for details and use Show Gallery to view all project images.</p></div><div class="sticky top-3 z-20 mb-10 rounded-2xl border border-primary/10 bg-white/90 px-4 py-4 shadow-sm backdrop-blur"><div class="flex flex-wrap gap-2">${categoryToolbarHtml}</div></div><div class="space-y-14">${projectsGalleryHtml}</div><div class="mt-20"><div class="flex flex-col items-center justify-center gap-8 px-6 py-16 rounded-3xl bg-primary text-white text-center"><div class="flex flex-col gap-4 max-w-2xl"><h2 class="text-3xl md:text-4xl font-black leading-tight">Support Our Mission</h2><p class="bg-white/10 p-1 rounded-lg inline-block self-center px-4 mb-2 text-white font-medium">Join 500+ Active Volunteers</p><p class="text-white/80 text-lg">Your support helps us scale these initiatives. Join us in making a tangible difference in the lives of thousands.</p></div><div class="flex flex-wrap justify-center gap-4"><a class="flex min-w-[160px] items-center justify-center rounded-xl h-14 px-8 bg-white text-primary text-base font-bold transition-transform hover:scale-105" href="/contact">Volunteer</a><a class="flex min-w-[160px] items-center justify-center rounded-xl h-14 px-8 bg-transparent border-2 border-white text-white text-base font-bold transition-all hover:bg-white/10" href="/contact">Donate Now</a></div></div></div></div></main>
  <footer class="bg-slate-900 text-slate-300 py-12 px-6 lg:px-20 mt-10"><div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"><div class="flex flex-col gap-4 col-span-1 md:col-span-1"><div class="flex items-center gap-3 text-white"><div class="size-6 bg-primary rounded flex items-center justify-center"><span class="material-symbols-outlined text-xs">diversity_3</span></div><span class="font-bold text-lg">Krutha Foundation</span></div><p class="text-sm leading-relaxed text-slate-400">Driving social change through structured community engagement and sustainable development.</p></div><div><h4 class="text-white font-bold mb-4">Focus Areas</h4><ul class="flex flex-col gap-2 text-sm"><li><a class="hover:text-primary transition-colors" href="/our-work">Education &amp; Literacy</a></li><li><a class="hover:text-primary transition-colors" href="/our-work">Environmental Safety</a></li><li><a class="hover:text-primary transition-colors" href="/our-work">Rural Healthcare</a></li><li><a class="hover:text-primary transition-colors" href="/our-work">Clean Water Access</a></li></ul></div><div><h4 class="text-white font-bold mb-4">Quick Links</h4><ul class="flex flex-col gap-2 text-sm"><li><a class="hover:text-primary transition-colors" href="/about">Our Team</a></li><li><a class="hover:text-primary transition-colors" href="/press">Annual Reports</a></li><li><a class="hover:text-primary transition-colors" href="/contact">Careers</a></li><li><a class="hover:text-primary transition-colors" href="/contact">Privacy Policy</a></li></ul></div><div><h4 class="text-white font-bold mb-4">Follow Us</h4><div class="flex gap-4"><a class="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all" href="/press"><span class="material-symbols-outlined text-sm">public</span></a><a class="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all" href="/press"><span class="material-symbols-outlined text-sm">share</span></a><a class="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all" href="/blog"><span class="material-symbols-outlined text-sm">thumb_up</span></a></div><p class="mt-6 text-xs text-slate-500">(c) 2024 Krutha Foundation. All rights reserved.</p></div></div></footer>
</div>`;

export function OurWorkDesktopPage() {
  return <StaticMarkupPage html={html} />;
}