/**
 * @file press-desktop-page.tsx
 * @description Desktop press page rendered from the provided reference layout.
 * @module frontend/src/pages/desktop
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import { buildDesktopHeaderMarkup } from "../../components/layout/site-navigation";
import meetingCollector from "../../assets/press/MeetingDisctricCollectorToTakePlasticReductionInitiatives.webp";
import newspaper2021 from "../../assets/press/Newspaper2021.webp";
import article from "../../assets/press/article.webp";
import cameraLogo from "../../assets/press/camera.webp";
import news2023 from "../../assets/press/news2023.webp";
import sportsUniforms from "../../assets/press/sportsUniforms.webp";

const html = String.raw`
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
  ${buildDesktopHeaderMarkup("/press")}

  <main class="flex-1">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-6 py-20 text-center relative">
      <!-- Glow Blurs -->
      <div class="absolute -top-12 -left-12 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
        <span class="material-symbols-outlined text-lg">public</span> Global Media & Press Center
      </div>
      <h1 class="font-editorial text-slate-900 text-5xl md:text-7xl leading-tight mb-8">
        In The <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Press</span>
      </h1>
      <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Our commitment to rural transformation has captured the attention of mainstream media and community leaders alike. This collection of news coverage chronicles our journey since 2022—highlighting our impact in education, our innovative ecological initiatives, and our efforts to build a modern <span class="text-primary font-bold">Krutha Yuga</span>.
      </p>
    </section>

    <!-- News Highlights Gallery -->
    <section class="max-w-7xl mx-auto px-6 pb-24 relative">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- News Item 1 -->
        <div class="group cursor-pointer bg-white p-5 rounded-[2rem] border border-primary/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 flex flex-col justify-between">
          <div>
            <div class="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-primary/5 shadow-inner">
              <img src="${meetingCollector}" alt="District Collector Meeting" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined text-sm">open_in_new</span></span>
              </div>
            </div>
            <div class="space-y-2.5">
              <div class="flex items-center gap-2.5 text-accent text-xs font-black uppercase tracking-wider font-display">
                <span>Governance</span>
                <span class="size-1.5 bg-accent/40 rounded-full"></span>
                <span class="text-primary">2024</span>
              </div>
              <h3 class="font-editorial text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">Meeting District Collector for Plastic Reduction Initiatives</h3>
            </div>
          </div>
        </div>

        <!-- News Item 2 -->
        <div class="group cursor-pointer bg-white p-5 rounded-[2rem] border border-primary/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 flex flex-col justify-between">
          <div>
            <div class="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-primary/5 shadow-inner">
              <img src="${news2023}" alt="2023 News Coverage" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined text-sm">open_in_new</span></span>
              </div>
            </div>
            <div class="space-y-2.5">
              <div class="flex items-center gap-2.5 text-accent text-xs font-black uppercase tracking-wider font-display">
                <span>Regional News</span>
                <span class="size-1.5 bg-accent/40 rounded-full"></span>
                <span class="text-primary">Oct 2023</span>
              </div>
              <h3 class="font-editorial text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">Mainstream Media Coverage of Village Transformation</h3>
            </div>
          </div>
        </div>

        <!-- News Item 3 -->
        <div class="group cursor-pointer bg-white p-5 rounded-[2rem] border border-primary/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 flex flex-col justify-between">
          <div>
            <div class="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-primary/5 shadow-inner">
              <img src="${article}" alt="Main Article" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined text-sm">open_in_new</span></span>
              </div>
            </div>
            <div class="space-y-2.5">
              <div class="flex items-center gap-2.5 text-accent text-xs font-black uppercase tracking-wider font-display">
                <span>Deep Dive</span>
                <span class="size-1.5 bg-accent/40 rounded-full"></span>
                <span class="text-primary">2023</span>
              </div>
              <h3 class="font-editorial text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">Special Feature: Bridging the Diaspora and Native Roots</h3>
            </div>
          </div>
        </div>

        <!-- News Item 4 -->
        <div class="group cursor-pointer bg-white p-5 rounded-[2rem] border border-primary/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 flex flex-col justify-between">
          <div>
            <div class="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-primary/5 shadow-inner">
              <img src="${sportsUniforms}" alt="Sports Uniforms" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined text-sm">open_in_new</span></span>
              </div>
            </div>
            <div class="space-y-2.5">
              <div class="flex items-center gap-2.5 text-accent text-xs font-black uppercase tracking-wider font-display">
                <span>Community</span>
                <span class="size-1.5 bg-accent/40 rounded-full"></span>
                <span class="text-primary">2024</span>
              </div>
              <h3 class="font-editorial text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">Empowering Youth through Sports & Infrastructure</h3>
            </div>
          </div>
        </div>

        <!-- News Item 5 -->
        <div class="group cursor-pointer bg-white p-5 rounded-[2rem] border border-primary/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 flex flex-col justify-between">
          <div>
            <div class="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-primary/5 shadow-inner">
              <img src="${newspaper2021}" alt="2021 Newspaper" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined text-sm">open_in_new</span></span>
              </div>
            </div>
            <div class="space-y-2.5">
              <div class="flex items-center gap-2.5 text-accent text-xs font-black uppercase tracking-wider font-display">
                <span>Archive</span>
                <span class="size-1.5 bg-accent/40 rounded-full"></span>
                <span class="text-primary">2021-22</span>
              </div>
              <h3 class="font-editorial text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">Foundation Pillars: Early Media Records</h3>
            </div>
          </div>
        </div>

        <!-- News Item 6 -->
        <div class="group cursor-pointer bg-white p-5 rounded-[2rem] border border-primary/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 flex flex-col justify-between">
          <div>
            <div class="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-primary/5 shadow-inner">
              <img src="${cameraLogo}" alt="Camera Impact" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span class="text-white font-bold flex items-center gap-2">View Full Story <span class="material-symbols-outlined text-sm">open_in_new</span></span>
              </div>
            </div>
            <div class="space-y-2.5">
              <div class="flex items-center gap-2.5 text-accent text-xs font-black uppercase tracking-wider font-display">
                <span>Multimedia</span>
                <span class="size-1.5 bg-accent/40 rounded-full"></span>
                <span class="text-primary">2023</span>
              </div>
              <h3 class="font-editorial text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">Visual Storytelling: Capturing the Krutha Movement</h3>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Transparency Message -->
    <section class="max-w-7xl mx-auto px-6 mb-24 relative">
      <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="bg-slate-900 p-12 lg:p-16 rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-2xl border border-primary/10">
        <div class="absolute -right-20 -top-20 size-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div class="absolute -left-20 -bottom-20 size-80 rounded-full bg-accent/15 blur-3xl"></div>
        <div class="relative z-10 flex flex-col items-center gap-4 max-w-3xl mx-auto">
          <span class="material-symbols-outlined text-4xl text-accent animate-pulse">verified</span>
          <p class="font-serif text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed italic">
            "These reports serve as a testament to the transparency of our work and the growing momentum of the Krutha movement."
          </p>
          <div class="w-12 h-1 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>

    <!-- Media Kit Section -->
    <section class="border-y border-primary/10 bg-white/40 py-24 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div class="max-w-xl space-y-6">
            <span class="text-accent font-bold tracking-widest text-sm uppercase font-display">Resources</span>
            <h2 class="font-editorial text-4xl lg:text-5xl text-slate-900 leading-tight">Digital Media Kit</h2>
            <p class="text-slate-600 text-lg leading-relaxed font-normal">
              We provide comprehensive resources for journalists and researchers, including brand assets, verified fact sheets, and high-resolution project visuals.
            </p>
            <div class="flex flex-wrap gap-4 pt-2">
              <a href="mailto:press@krutha.org" class="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
                Request Interview <span class="material-symbols-outlined text-base">mail</span>
              </a>
              <a href="/contact" class="bg-white border border-primary/20 text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all">
                Download Full Kit
              </a>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6 w-full lg:w-auto">
            <div class="aspect-square size-40 bg-white rounded-3xl border border-primary/15 shadow-sm p-6 flex flex-col items-center justify-center text-center gap-3 hover:shadow-lg hover:border-primary hover:scale-105 transition-all cursor-pointer group">
              <span class="material-symbols-outlined text-4xl text-primary group-hover:text-accent transition-colors">description</span>
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider font-display">Fact Sheet</span>
            </div>
            <div class="aspect-square size-40 bg-white rounded-3xl border border-primary/15 shadow-sm p-6 flex flex-col items-center justify-center text-center gap-3 hover:shadow-lg hover:border-primary hover:scale-105 transition-all cursor-pointer group">
              <span class="material-symbols-outlined text-4xl text-primary group-hover:text-accent transition-colors">image</span>
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider font-display">Impact Photos</span>
            </div>
            <div class="aspect-square size-40 bg-white rounded-3xl border border-primary/15 shadow-sm p-6 flex flex-col items-center justify-center text-center gap-3 hover:shadow-lg hover:border-primary hover:scale-105 transition-all cursor-pointer group">
              <span class="material-symbols-outlined text-4xl text-primary group-hover:text-accent transition-colors">play_circle</span>
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider font-display">B-Roll</span>
            </div>
            <div class="aspect-square size-40 bg-white rounded-3xl border border-primary/15 shadow-sm p-6 flex flex-col items-center justify-center text-center gap-3 hover:shadow-lg hover:border-primary hover:scale-105 transition-all cursor-pointer group">
              <span class="material-symbols-outlined text-4xl text-primary group-hover:text-accent transition-colors">logo_dev</span>
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider font-display">Logos</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Press Releases Archive -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="flex items-end justify-between mb-12">
        <h2 class="font-editorial text-3xl lg:text-4xl text-slate-900 leading-tight">Official Archive</h2>
        <a href="/contact" class="text-primary font-bold border-b-2 border-primary/20 pb-1 hover:text-accent hover:border-accent transition-all text-sm">View All Releases</a>
      </div>
      <div class="space-y-4 max-w-4xl">
        <div class="p-6 rounded-2xl bg-white border border-primary/10 flex items-center justify-between group hover:border-primary hover:shadow-md transition-all cursor-pointer">
          <div class="flex gap-8 items-center">
            <span class="text-accent font-bold font-mono text-sm">2025.04</span>
            <h4 class="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">3-Year Impact Report (2022-2025) Release</h4>
          </div>
          <span class="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">download</span>
        </div>
        <div class="p-6 rounded-2xl bg-white border border-primary/10 flex items-center justify-between group hover:border-primary hover:shadow-md transition-all cursor-pointer">
          <div class="flex gap-8 items-center">
            <span class="text-accent font-bold font-mono text-sm">2024.11</span>
            <h4 class="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">Project Bhagiratha Groundwater Recharge Completion</h4>
          </div>
          <span class="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">download</span>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
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

export function PressDesktopPage() {
  return <StaticMarkupPage html={html} />;
}