/**
 * @file impact-report-desktop-page.tsx
 * @description 3-Year Impact Report (2022-2025) desktop view
 * @module frontend/src/pages/desktop
 */

import React from "react";
import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import { buildDesktopHeaderMarkup } from "../../components/layout/site-navigation";

export const ImpactReportDesktopPage: React.FC = () => {
  const content = String.raw`
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
  ${buildDesktopHeaderMarkup("/impact-report")}

  <main class="flex-1">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-6 py-20 text-center relative">
      <!-- Glow Blurs -->
      <div class="absolute -top-12 -left-12 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
        <span class="material-symbols-outlined text-lg">analytics</span> 3-Year Impact Report
      </div>
      <h1 class="font-editorial text-slate-900 text-5xl md:text-7xl leading-tight mb-8">
        3-Year <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Impact</span> Report
      </h1>
      <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal italic">
        "Transforming Communities, Manifesting the Krutha Yuga Ideals"
      </p>
      <p class="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">April 2022 &ndash; March 2025</p>
    </section>

    <!-- Executive Summary -->
    <section class="max-w-7xl mx-auto px-6 pb-20 relative">
      <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div class="mx-auto max-w-4xl rounded-[2.5rem] bg-white p-10 lg:p-12 shadow-sm border border-primary/10 relative overflow-hidden">
        <div class="absolute -right-20 -top-20 size-80 rounded-full bg-primary/5 blur-3xl"></div>
        <h2 class="font-editorial text-3xl md:text-4xl text-slate-900 mb-6 relative z-10">Mission & Mobilization</h2>
        <div class="space-y-6 text-lg leading-relaxed text-slate-700 relative z-10">
          <p>
            Our journey began in April 2022 with a mission to bridge the global diaspora and their native roots. In three years, we have raised <span class="font-bold text-primary">₹21,26,753</span> from multiple donors across various cities and towns globally to fuel our mission of transforming a village, <span class="font-semibold text-primary">Vadapalem</span>.
          </p>
          <p>
            This includes <span class="font-bold text-primary">₹10,06,000</span> in donations received from two strategic partner NGOs: <span class="font-semibold text-slate-800">Padala Charitable Trust (PCT)</span>, Kakinada and <span class="font-semibold text-slate-800">American Progressive Telugu Association (APTA)</span>, USA. These funds are dedicated to scholarships for talented students from marginalized backgrounds.
          </p>
        </div>
      </div>
    </section>

    <!-- Key Pillars -->
    <section class="max-w-7xl mx-auto px-6 pb-24 relative">
      <div class="mb-16 text-center">
        <span class="text-accent font-bold tracking-widest text-sm uppercase font-display">Execution</span>
        <h2 class="font-editorial text-4xl lg:text-5xl text-slate-900 leading-tight mt-2">Pillars of Progress</h2>
        <p class="text-slate-500 max-w-2xl mx-auto mt-3">Overview of our key focal areas and strategic financial mobilization since 2022.</p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <!-- LEADS -->
        <div class="group bg-white p-8 rounded-[2rem] border border-primary/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 flex flex-col justify-between">
          <div>
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:text-accent transition-colors">
              <span class="material-symbols-outlined text-3xl">school</span>
            </div>
            <h3 class="font-editorial text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-2">The L.E.A.D.S Program</h3>
            <p class="text-xs font-black uppercase tracking-wider font-display text-accent mb-6">INVESTMENT: ₹16,37,000</p>
            <ul class="space-y-3.5 text-slate-600">
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span class="text-sm font-medium">498 students (Classes 8-10) trained in life skills</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span class="text-sm font-medium">12 higher education scholarships sponsored</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span class="text-sm font-medium">Career guidance & adolescent education excellence</span>
              </li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-primary/5 italic text-slate-400 text-xs">
            Partners: PCT Kakinada & APTA USA
          </div>
        </div>

        <!-- Jala Rakshana -->
        <div class="group bg-white p-8 rounded-[2rem] border border-primary/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 flex flex-col justify-between">
          <div>
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:text-accent transition-colors">
              <span class="material-symbols-outlined text-3xl">water_drop</span>
            </div>
            <h3 class="font-editorial text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-2">Jala Rakshana</h3>
            <p class="text-xs font-black uppercase tracking-wider font-display text-accent mb-6">INVESTMENT: ₹2,85,000</p>
            <ul class="space-y-3.5 text-slate-600">
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span class="text-sm font-medium">4 Rainwater Harvesting Pits (RHPs) built</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span class="text-sm font-medium">Canal bed summer cleaning: 2-5 feet of plastic removed</span>
              </li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-primary/5 italic text-slate-400 text-xs">
            Focus: Water security & ecosystem restoration
          </div>
        </div>

        <!-- Nirmala Gramam -->
        <div class="group bg-white p-8 rounded-[2rem] border border-primary/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 flex flex-col justify-between">
          <div>
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:text-accent transition-colors">
              <span class="material-symbols-outlined text-3xl">recycling</span>
            </div>
            <h3 class="font-editorial text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-2">Nirmala Gramam</h3>
            <p class="text-xs font-black uppercase tracking-wider font-display text-accent mb-6">INVESTMENT: ₹78,000</p>
            <ul class="space-y-3.5 text-slate-600">
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span class="text-sm font-medium">300 household pilot for waste segregation</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span class="text-sm font-medium">2,000 cloth bags distributed to eliminate single-use plastics</span>
              </li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-primary/5 italic text-slate-400 text-xs">
            Formerly: Solid Waste & Plastic Reduction
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Grid -->
    <section class="max-w-7xl mx-auto px-6 mb-24 relative">
      <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="bg-slate-900 p-12 lg:p-16 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl border border-primary/10">
        <div class="absolute -right-20 -top-20 size-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div class="absolute -left-20 -bottom-20 size-80 rounded-full bg-accent/15 blur-3xl"></div>
        
        <div class="relative z-10 mb-12 text-center">
          <span class="text-accent font-bold tracking-widest text-xs uppercase font-display">Key Performance Indicators</span>
          <h3 class="font-editorial text-3xl lg:text-4xl text-white mt-2">Impact at a Glance</h3>
        </div>
        
        <div class="relative z-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          <div class="text-center group">
            <div class="text-5xl lg:text-6xl font-bold font-editorial text-accent mb-2 group-hover:scale-105 transition-transform duration-300">05</div>
            <div class="text-slate-400 uppercase tracking-widest text-xs font-bold font-display">Projects Executed</div>
          </div>
          <div class="text-center group">
            <div class="text-5xl lg:text-6xl font-bold font-editorial text-accent mb-2 group-hover:scale-105 transition-transform duration-300">18</div>
            <div class="text-slate-400 uppercase tracking-widest text-xs font-bold font-display">Cities Represented</div>
          </div>
          <div class="text-center group">
            <div class="text-5xl lg:text-6xl font-bold font-editorial text-accent mb-2 group-hover:scale-105 transition-transform duration-300">02</div>
            <div class="text-slate-400 uppercase tracking-widest text-xs font-bold font-display">Global Partners</div>
          </div>
          <div class="text-center group">
            <div class="text-5xl lg:text-6xl font-bold font-editorial text-accent mb-2 group-hover:scale-105 transition-transform duration-300">300+</div>
            <div class="text-slate-400 uppercase tracking-widest text-xs font-bold font-display">Households Reached</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Path -->
    <section class="max-w-7xl mx-auto px-6 pb-24">
      <div class="max-w-4xl mx-auto text-center">
        <span class="text-accent font-bold tracking-widest text-sm uppercase font-display">Horizon</span>
        <h2 class="font-editorial text-4xl lg:text-5xl text-slate-900 leading-tight mt-2 mb-4">The Path Ahead: 2026 &amp; Beyond</h2>
        <p class="text-slate-600 text-lg leading-relaxed mb-12 font-normal">
          With our foundation firmly established, we are now expanding our "Global Bridge" to realize our remaining objectives:
        </p>
        
        <div class="grid gap-6 sm:grid-cols-2 text-left">
          <div class="bg-white p-6 rounded-3xl border border-primary/10 shadow-sm hover:border-primary hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex gap-5">
            <div class="size-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-2xl">agriculture</span>
            </div>
            <div>
              <h4 class="font-editorial text-lg font-bold text-slate-900 mb-1">Krutha Raithu Nestham</h4>
              <p class="text-sm text-slate-500 leading-relaxed font-normal">Natural Farming methods and sustainable ecological practices for local farmers.</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-primary/10 shadow-sm hover:border-primary hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex gap-5">
            <div class="size-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-2xl">diversity_3</span>
            </div>
            <div>
              <h4 class="font-editorial text-lg font-bold text-slate-900 mb-1">Shakti Sangamam</h4>
              <p class="text-sm text-slate-500 leading-relaxed font-normal">Self-reliance, micro-entrepreneurship, and skill development programs for rural women.</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-primary/10 shadow-sm hover:border-primary hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex gap-5">
            <div class="size-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-2xl">volunteer_activism</span>
            </div>
            <div>
              <h4 class="font-editorial text-lg font-bold text-slate-900 mb-1">Aasara</h4>
              <p class="text-sm text-slate-500 leading-relaxed font-normal">Comprehensive socio-medical support systems for the village elderly population.</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-primary/10 shadow-sm hover:border-primary hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex gap-5">
            <div class="size-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-2xl">storefront</span>
            </div>
            <div>
              <h4 class="font-editorial text-lg font-bold text-slate-900 mb-1">Dharma Vyapaar</h4>
              <p class="text-sm text-slate-500 leading-relaxed font-normal">Eco-friendly and ethical business model training for rural youths and craft artisans.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-400 py-20 border-t border-white/5 font-display">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div class="space-y-6">
          <div class="flex items-center gap-3 text-white">
            <div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span class="material-symbols-outlined text-sm">eco</span>
            </div>
            <span class="font-bold text-lg">Krutha Foundation</span>
          </div>
          <p class="text-sm leading-relaxed">Dedicated to creating self-sustaining rural ecosystems that thrive on the principles of equity, sustainability, and traditional wisdom.</p>
        </div>
        <div class="space-y-6">
          <h4 class="text-white font-bold uppercase tracking-widest text-xs">Quick Links</h4>
          <ul class="space-y-4 text-sm">
            <li><a class="hover:text-primary transition-colors" href="/about">Our History</a></li>
            <li><a class="hover:text-primary transition-colors" href="/our-work">Project Portfolio</a></li>
            <li><a class="hover:text-primary transition-colors" href="/press">Annual Reports</a></li>
            <li><a class="hover:text-primary transition-colors" href="/contact">Volunteer With Us</a></li>
          </ul>
        </div>
        <div class="space-y-6">
          <h4 class="text-white font-bold uppercase tracking-widest text-xs">Contact Us</h4>
          <div class="space-y-4 text-sm">
            <p class="flex gap-3"><span class="material-symbols-outlined text-primary text-sm">location_on</span>Vadapalem, East Godavari District, Andhra Pradesh, India</p>
            <p class="flex gap-3"><span class="material-symbols-outlined text-primary text-sm">mail</span>info@kruthafoundation.org</p>
          </div>
        </div>
        <div class="space-y-6">
          <h4 class="text-white font-bold uppercase tracking-widest text-xs">Our Partners</h4>
          <div class="flex flex-wrap gap-4">
            <div class="h-10 px-4 bg-white/5 rounded flex items-center justify-center border border-white/10">
              <span class="font-bold text-white text-xs">PCT</span>
            </div>
            <div class="h-10 px-4 bg-white/5 rounded flex items-center justify-center border border-white/10">
              <span class="font-bold text-white text-xs">APTA</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2024 Krutha Foundation. All rights reserved.</p>
        <div class="flex gap-6">
          <a class="hover:text-white" href="/contact">Privacy Policy</a>
          <a class="hover:text-white" href="/contact">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</div>`;

  return <StaticMarkupPage html={content} />;
};
