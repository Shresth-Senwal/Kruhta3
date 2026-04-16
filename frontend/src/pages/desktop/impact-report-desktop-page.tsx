/**
 * @file impact-report-desktop-page.tsx
 * @description 3-Year Impact Report (2022-2025) desktop view
 * @module frontend/src/pages/desktop
 */

import React from "react";
import { StaticMarkupPage } from "../../components/ui/static-markup-page";

export const ImpactReportDesktopPage: React.FC = () => {
  const content = `
    <div class="bg-white min-h-screen">
      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-primary py-24 text-white">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white blur-3xl"></div>
          <div class="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>
        <div class="container relative mx-auto px-6 text-center">
          <span class="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold tracking-wider uppercase">Institutional Stewardship</span>
          <h1 class="mb-6 text-5xl font-bold lg:text-6xl tracking-tight">3-Year Impact Report</h1>
          <p class="mx-auto max-w-2xl text-xl text-white/90 font-medium italic">"Transforming Communities, Manifesting the Krutha Yuga Ideals"</p>
          <p class="mt-4 text-white/70">April 2022 – March 2025</p>
        </div>
      </section>

      <!-- Executive Summary -->
      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="mx-auto max-w-4xl rounded-3xl bg-slate-50 p-10 shadow-sm border border-slate-100">
            <h2 class="mb-6 text-3xl font-bold text-primary">Mission & Mobilization</h2>
            <div class="space-y-6 text-lg leading-relaxed text-slate-700">
              <p>
                Our journey began in April 2022 with a mission to bridge the global diaspora and their native roots. In three years, we have raised <span class="font-bold text-primary">₹21,26,753</span> from multiple donors across various cities and towns globally to fuel our mission of transforming a village, <span class="font-semibold text-forest">Vadapalem</span>.
              </p>
              <p>
                This includes <span class="font-bold text-primary">₹10,06,000</span> in donations received from two strategic partner NGOs: <span class="font-semibold">Padala Charitable Trust (PCT)</span>, Kakinada and <span class="font-semibold">American Progressive Telugu Association (APTA)</span>, USA. These funds are dedicated to scholarships for talented students from marginalized backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Pillars -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-6">
          <div class="mb-16 text-center">
            <h2 class="text-4xl font-bold text-primary">Pillars of Progress</h2>
            <div class="mx-auto mt-4 h-1 w-24 bg-sage rounded-full"></div>
          </div>

          <div class="grid gap-8 lg:grid-cols-3">
            <!-- LEADS -->
            <div class="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition-all hover:-translate-y-2 hover:shadow-xl">
              <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span class="material-symbols-outlined text-3xl">school</span>
              </div>
              <h3 class="mb-2 text-2xl font-bold text-primary">The L.E.A.D.S Program</h3>
              <p class="mb-4 text-sm font-semibold text-primary/60 tracking-wider">INVESTMENT: ₹16,37,000</p>
              <ul class="mb-6 space-y-3 text-slate-600">
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>498 students (Classes 8-10) trained in life skills</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>12 higher education scholarships sponsored</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Career guidance & adolescent education excellence</span>
                </li>
              </ul>
              <div class="pt-4 border-t border-slate-50 italic text-slate-500 text-sm">
                Partners: PCT Kakinada & APTA USA
              </div>
            </div>

            <!-- Jala Rakshana -->
            <div class="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition-all hover:-translate-y-2 hover:shadow-xl">
              <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span class="material-symbols-outlined text-3xl">water_drop</span>
              </div>
              <h3 class="mb-2 text-2xl font-bold text-primary">Jala Rakshana</h3>
              <p class="mb-4 text-sm font-semibold text-primary/60 tracking-wider text-teal-600">INVESTMENT: ₹2,85,000</p>
              <ul class="mb-6 space-y-3 text-slate-600">
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>4 Rainwater Harvesting Pits (RHPs) built</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Canal bed summer cleaning: 2-5 feet of plastic removed</span>
                </li>
              </ul>
              <p class="pt-4 text-slate-500 text-sm italic">Focus: Water security & ecosystem restoration</p>
            </div>

            <!-- Nirmala Gramam -->
            <div class="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition-all hover:-translate-y-2 hover:shadow-xl">
              <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span class="material-symbols-outlined text-3xl">recycling</span>
              </div>
              <h3 class="mb-2 text-2xl font-bold text-primary">Nirmala Gramam</h3>
              <p class="mb-4 text-sm font-semibold text-primary/60 tracking-wider">INVESTMENT: ₹78,000</p>
              <ul class="mb-6 space-y-3 text-slate-600">
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>300 household pilot for waste segregation</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>2,000 cloth bags distributed to eliminate single-use plastics</span>
                </li>
              </ul>
              <p class="pt-4 text-slate-500 text-sm italic">Formerly: Solid Waste & Plastic Reduction</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Grid -->
      <section class="bg-forest py-24 text-white">
        <div class="container mx-auto px-6">
          <div class="mb-16 text-center">
            <h2 class="text-3xl font-bold opacity-90 tracking-wider uppercase">Impact at a Glance</h2>
          </div>
          <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">05</div>
              <div class="text-white/60 uppercase tracking-widest text-sm">Projects Executed</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">18</div>
              <div class="text-white/60 uppercase tracking-widest text-sm">Cities Represented</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">02</div>
              <div class="text-white/60 uppercase tracking-widest text-sm">Global Partners</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">300+</div>
              <div class="text-white/60 uppercase tracking-widest text-sm">Households Reached</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Future Path -->
      <section class="py-24">
        <div class="container mx-auto px-6">
          <div class="mx-auto max-w-4xl text-center">
            <h2 class="mb-8 text-4xl font-bold text-primary">The Path Ahead: 2026 & Beyond</h2>
            <p class="mb-12 text-lg text-slate-600">With our foundation firmly established, we are now expanding our "Global Bridge" to realize our remaining objectives:</p>
            
            <div class="grid gap-6 sm:grid-cols-2 text-left">
              <div class="rounded-2xl bg-slate-50 p-6 border border-slate-100 flex gap-4">
                <span class="material-symbols-outlined text-primary">agriculture</span>
                <div>
                  <h4 class="font-bold text-primary">Krutha Raithu Nestham</h4>
                  <p class="text-sm text-slate-600">Natural Farming methods for local farmers.</p>
                </div>
              </div>
              <div class="rounded-2xl bg-slate-50 p-6 border border-slate-100 flex gap-4">
                <span class="material-symbols-outlined text-primary">diversity_3</span>
                <div>
                  <h4 class="font-bold text-primary">Shakti Sangamam</h4>
                  <p class="text-sm text-slate-600">Empowerment and skill programs for women.</p>
                </div>
              </div>
              <div class="rounded-2xl bg-slate-50 p-6 border border-slate-100 flex gap-4">
                <span class="material-symbols-outlined text-primary">volunteer_activism</span>
                <div>
                  <h4 class="font-bold text-primary">Aasara</h4>
                  <p class="text-sm text-slate-600">Support system for the village elderly.</p>
                </div>
              </div>
              <div class="rounded-2xl bg-slate-50 p-6 border border-slate-100 flex gap-4">
                <span class="material-symbols-outlined text-primary">storefront</span>
                <div>
                  <h4 class="font-bold text-primary">Dharma Vyapaar</h4>
                  <p class="text-sm text-slate-600">Eco-friendly and ethical business training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  return <StaticMarkupPage html={content} />;
};
