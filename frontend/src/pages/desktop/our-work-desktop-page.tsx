/**
 * @file our-work-desktop-page.tsx
 * @description Desktop our work page rendered from the provided reference layout.
 * @module frontend/src/pages/desktop
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import { buildDesktopHeaderMarkup } from "../../components/layout/site-navigation";
import { projectMediaCategories } from "../../data/project-media";
import { buildDesktopBrandLinkMarkup } from "../../components/layout/site-brand";

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

  return `<details id="${projectId}" class="group rounded-3xl border border-primary/10 bg-white shadow-sm open:shadow-md scroll-mt-28">
    <summary class="list-none cursor-pointer">
      <div class="grid grid-cols-1 md:grid-cols-[340px_minmax(0,1fr)] gap-6 p-5 lg:p-6">
        ${renderImageTag(thumbnail, `${project.title} thumbnail`, false)}
        <div class="flex flex-col justify-between gap-4">
          <div class="space-y-2">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-accent font-display">${categoryTitle}</p>
            <h3 class="font-editorial text-3xl font-bold tracking-tight text-slate-900">${project.title}</h3>
            <p class="text-slate-600 leading-relaxed">${project.description}</p>
          </div>
          <div class="flex flex-wrap items-center gap-6">
            <span class="inline-flex w-fit items-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 hover:scale-[1.02] transition-transform group-open:hidden">Show Gallery</span>
            <span class="hidden items-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 hover:scale-[1.02] transition-transform group-open:inline-flex">Hide Gallery</span>
            ${project.programPath ? `
              <a href="${project.programPath}" class="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-all text-sm">
                View Impact <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            ` : ""}
          </div>
        </div>
      </div>
    </summary>
    <div class="space-y-5 border-t border-primary/10 px-5 py-6 lg:px-6">
      ${renderGalleryImages(galleryImages, project.title)}
    </div>
  </details>`;
}

const categoryToolbarHtml = [
  `<button type="button" data-category-filter="all" class="cursor-pointer rounded-full bg-primary px-5 py-2 text-[11px] font-black uppercase tracking-wider text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95">All</button>`,
  ...projectMediaCategories.map(
    (category) => `<button type="button" data-category-filter="${category.title.toLowerCase()}" class="cursor-pointer rounded-full px-5 py-2 text-[11px] font-black uppercase tracking-wider text-slate-500 transition-all hover:bg-primary/10 hover:text-primary active:scale-95">${category.title}</button>`,
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
      <h2 class="font-editorial text-4xl font-bold tracking-tight text-slate-900">${category.title}</h2>
      <div class="flex flex-wrap gap-2">${projectToolbar}</div>
    </div>
    <div class="space-y-5">
      ${category.projects.map((project) => renderProjectCard(category.title, project)).join("")}
    </div>
  </section>`;
}

const projectsGalleryHtml = projectMediaCategories.map((category) => renderCategorySection(category)).join("");

const html = String.raw`
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
  ${buildDesktopHeaderMarkup("/our-work")}
  <main class="flex flex-1 flex-col py-10 px-6 lg:px-20">
    <div class="max-w-[1200px] mx-auto w-full">
      <div class="flex flex-col gap-4 mb-12 text-center items-center">
        <h1 class="font-editorial text-slate-900 text-5xl md:text-7xl leading-tight">Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic pr-2">Work</span></h1>
        <p class="text-slate-600 text-lg font-normal max-w-2xl">Select a category below to filter projects, then explore details and galleries for our initiatives.</p>
      </div>
      
      <div class="sticky top-6 z-20 mb-16 flex justify-center">
        <div class="inline-flex items-center gap-1 rounded-full border border-primary/5 bg-white/80 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl">
          ${categoryToolbarHtml}
        </div>
      </div>

      <div class="space-y-14">
        ${projectsGalleryHtml}
      </div>

      <div class="mt-20">
        <div class="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-16 text-center text-white shadow-2xl">
          <div class="absolute -right-16 -top-16 size-64 rounded-full bg-primary/20 blur-3xl"></div>
          <div class="absolute -left-16 -bottom-16 size-64 rounded-full bg-accent/20 blur-3xl"></div>
          <div class="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <span class="inline-flex items-center rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">Join 500+ Active Volunteers</span>
            <h2 class="font-editorial text-4xl md:text-5xl leading-tight text-white animate-fade-in">Support Our Mission</h2>
            <p class="text-slate-300 text-lg leading-relaxed">Your support helps us scale these initiatives. Join us in making a tangible difference in the lives of thousands.</p>
            <div class="flex flex-wrap justify-center gap-4 mt-4">
              <a class="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20" href="/contact">Volunteer</a>
              <a class="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-xl font-bold transition-colors" href="/contact">Donate Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="bg-slate-900 text-slate-400 py-20 border-t border-white/5 font-display">
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
  </footer>
</div>`;

export function OurWorkDesktopPage() {
  return <StaticMarkupPage html={html} />;
}