/**
 * @file press-desktop-page.tsx
 * @description Desktop press page rendered from the provided reference layout.
 * @module frontend/src/pages/desktop
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import meetingCollector from "../../assets/press/MeetingDisctricCollectorToTakePlasticReductionInitiatives.webp";
import newspaper2021 from "../../assets/press/Newspaper2021.webp";
import article from "../../assets/press/article.webp";
import cameraLogo from "../../assets/press/camera.webp";
import news2023 from "../../assets/press/news2023.webp";
import sportsUniforms from "../../assets/press/sportsUniforms.webp";

const html = String.raw`
<div class="bg-[#fcfdfa] text-slate-900 font-display">
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div class="flex items-center gap-12">
        <div class="flex items-center gap-3">
          <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span class="material-symbols-outlined text-xl">newspaper</span>
          </div>
          <h2 class="text-primary text-xl font-bold tracking-tight">Krutha Foundation</h2>
        </div>
        <nav class="hidden md:flex items-center gap-8">
          <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="/">Home</a>
          <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="/about">About</a>
          <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="/our-work">Projects</a>
          <a class="text-primary font-bold" href="/press">Press Room</a>
        </nav>
      </div>
      <a class="bg-primary text-white px-8 py-2.5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20" href="/contact">Donate</a>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-6 py-24 text-center">
      <div class="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-8">
        <span class="material-symbols-outlined text-lg">public</span> Global Media & Press Center
      </div>
      <h1 class="text-5xl md:text-7xl font-bold text-primary mb-8 max-w-4xl mx-auto leading-[1.1]">
        In The Press
      </h1>
      <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Our commitment to rural transformation has captured the attention of mainstream media and community leaders alike. This collection of news coverage chronicles our journey since 2022—highlighting our impact in education, our innovative ecological initiatives, and our efforts to build a modern Krutha Yuga.
      </p>
    </section>

    <!-- News Highlights Gallery -->
    <section class="max-w-7xl mx-auto px-6 pb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- News Item 1 -->
        <div class="group cursor-pointer">
          <div class="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 mb-6 shadow-sm border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
            <img src="${meetingCollector}" alt="District Collector Meeting" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined">open_in_new</span></span>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
              <span>Governance</span>
              <span class="size-1 bg-primary/30 rounded-full"></span>
              <span>2024</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Meeting District Collector for Plastic Reduction Initiatives</h3>
          </div>
        </div>

        <!-- News Item 2 -->
        <div class="group cursor-pointer">
          <div class="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 mb-6 shadow-sm border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
            <img src="${news2023}" alt="2023 News Coverage" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined">open_in_new</span></span>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
              <span>Regional News</span>
              <span class="size-1 bg-primary/30 rounded-full"></span>
              <span>Oct 2023</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Mainstream Media Coverage of Village Transformation</h3>
          </div>
        </div>

        <!-- News Item 3 -->
        <div class="group cursor-pointer">
          <div class="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 mb-6 shadow-sm border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
            <img src="${article}" alt="Main Article" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined">open_in_new</span></span>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
              <span>Deep Dive</span>
              <span class="size-1 bg-primary/30 rounded-full"></span>
              <span>2023</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Special Feature: Bridging the Diaspora and Native Roots</h3>
          </div>
        </div>

        <!-- News Item 4 -->
        <div class="group cursor-pointer">
          <div class="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 mb-6 shadow-sm border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
            <img src="${sportsUniforms}" alt="Sports Uniforms" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined">open_in_new</span></span>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
              <span>Community</span>
              <span class="size-1 bg-primary/30 rounded-full"></span>
              <span>2024</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Empowering Youth through Sports & Infrastructure</h3>
          </div>
        </div>

        <!-- News Item 5 -->
        <div class="group cursor-pointer">
          <div class="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 mb-6 shadow-sm border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
            <img src="${newspaper2021}" alt="2021 Newspaper" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined">open_in_new</span></span>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
              <span>Archive</span>
              <span class="size-1 bg-primary/30 rounded-full"></span>
              <span>2021-22</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Foundation Pillars: Early Media Records</h3>
          </div>
        </div>

        <!-- News Item 6 -->
        <div class="group cursor-pointer">
          <div class="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 mb-6 shadow-sm border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
            <img src="${cameraLogo}" alt="Camera Impact" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined">open_in_new</span></span>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
              <span>Multimedia</span>
              <span class="size-1 bg-primary/30 rounded-full"></span>
              <span>2023</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Visual Storytelling: Capturing the Krutha Movement</h3>
          </div>
        </div>

      </div>
    </section>

    <!-- Transparency Message -->
    <section class="max-w-7xl mx-auto px-6 mb-24">
      <div class="bg-primary p-12 rounded-[2rem] text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
        <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
        <p class="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed relative z-10">
          "These reports serve as a testament to the transparency of our work and the growing momentum of the Krutha movement."
        </p>
      </div>
    </section>

    <!-- Media Kit Section -->
    <section class="bg-slate-50 border-y border-slate-100 py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div class="max-w-xl">
            <h2 class="text-4xl font-bold text-primary mb-6">Digital Media Kit</h2>
            <p class="text-slate-600 text-lg mb-8 leading-relaxed">
              We provide comprehensive resources for journalists and researchers, including brand assets, verified fact sheets, and high-resolution project visuals.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="mailto:press@krutha.org" class="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all">
                Request Interview <span class="material-symbols-outlined">mail</span>
              </a>
              <a href="/contact" class="bg-white border border-primary/10 text-primary px-8 py-4 rounded-2xl font-bold hover:bg-primary/5 transition-all">
                Download Full Kit
              </a>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6 w-full lg:w-auto">
            <div class="aspect-square size-40 bg-white rounded-3xl border border-primary/5 shadow-sm p-6 flex flex-col items-center justify-center text-center gap-3 hover:shadow-lg transition-all cursor-pointer">
              <span class="material-symbols-outlined text-4xl text-primary">description</span>
              <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Fact Sheet</span>
            </div>
            <div class="aspect-square size-40 bg-white rounded-3xl border border-primary/5 shadow-sm p-6 flex flex-col items-center justify-center text-center gap-3 hover:shadow-lg transition-all cursor-pointer">
              <span class="material-symbols-outlined text-4xl text-primary">image</span>
              <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Impact Photos</span>
            </div>
            <div class="aspect-square size-40 bg-white rounded-3xl border border-primary/5 shadow-sm p-6 flex flex-col items-center justify-center text-center gap-3 hover:shadow-lg transition-all cursor-pointer">
              <span class="material-symbols-outlined text-4xl text-primary">play_circle</span>
              <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">B-Roll</span>
            </div>
            <div class="aspect-square size-40 bg-white rounded-3xl border border-primary/5 shadow-sm p-6 flex flex-col items-center justify-center text-center gap-3 hover:shadow-lg transition-all cursor-pointer">
              <span class="material-symbols-outlined text-4xl text-primary">logo_dev</span>
              <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Logos</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Press Releases Archive -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="flex items-end justify-between mb-12">
        <h2 class="text-3xl font-bold text-primary">Official Archive</h2>
        <a href="/contact" class="text-primary font-bold border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">View All Releases</a>
      </div>
      <div class="space-y-4">
        <div class="p-6 rounded-2xl bg-white border border-slate-100 flex items-center justify-between group hover:border-primary/20 hover:shadow-lg transition-all">
          <div class="flex gap-8 items-center">
            <span class="text-slate-400 font-mono text-sm">2025.04</span>
            <h4 class="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">3-Year Impact Report (2022-2025) Release</h4>
          </div>
          <span class="material-symbols-outlined text-slate-300 group-hover:text-primary">download</span>
        </div>
        <div class="p-6 rounded-2xl bg-white border border-slate-100 flex items-center justify-between group hover:border-primary/20 hover:shadow-lg transition-all">
          <div class="flex gap-8 items-center">
            <span class="text-slate-400 font-mono text-sm">2024.11</span>
            <h4 class="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">Project Bhagiratha Groundwater Recharge Completion</h4>
          </div>
          <span class="material-symbols-outlined text-slate-300 group-hover:text-primary">download</span>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="bg-primary text-white/80 py-20 px-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div class="flex items-center gap-4 text-white">
        <div class="size-10 bg-white rounded-xl flex items-center justify-center text-primary">
          <span class="material-symbols-outlined">newspaper</span>
        </div>
        <div>
          <h2 class="text-xl font-bold font-display tracking-tight text-white">Krutha Foundation</h2>
          <p class="text-xs text-white/50 tracking-widest uppercase">Press Room Archive</p>
        </div>
      </div>
      <p class="text-sm">(c) 2022-2025 Krutha Foundation. Empowering Vadapalem.</p>
      <div class="flex gap-8 text-sm">
        <a class="hover:text-white transition-colors" href="/contact">Media Compliance</a>
        <a class="hover:text-white transition-colors" href="/contact">Privacy</a>
      </div>
    </div>
  </footer>
</div>`;

export function PressDesktopPage() {
  return <StaticMarkupPage html={html} />;
}