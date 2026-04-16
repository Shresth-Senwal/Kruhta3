/**
 * @file impact-report-mobile-page.tsx
 * @description 3-Year Impact Report (2022-2025) mobile view
 * @module frontend/src/pages/mobile
 */

import React from "react";
import { StaticMarkupPage } from "../../components/ui/static-markup-page";

export const ImpactReportMobilePage: React.FC = () => {
  const content = `
    <div class="bg-white min-h-screen pb-12">
      <!-- Hero Section -->
      <section class="bg-primary pt-16 pb-20 text-white px-6">
        <span class="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold tracking-widest uppercase">Institutional Stewardship</span>
        <h1 class="text-3xl font-bold leading-tight uppercase tracking-tight">3-Year Impact Report</h1>
        <div class="mt-4 h-1 w-12 bg-white/30 rounded-full"></div>
        <p class="mt-6 text-white/90 text-sm font-medium italic border-l-2 border-white/40 pl-4 leading-relaxed">
          "Transforming Communities, Manifesting the Krutha Yuga Ideals"
        </p>
      </section>

      <!-- Financial Metrics -->
      <section class="-mt-10 px-6">
        <div class="rounded-2xl bg-white p-6 shadow-xl border border-slate-100">
          <div class="mb-2 text-xs font-bold text-primary/60 uppercase tracking-widest text-center">Total Funds Raised</div>
          <div class="text-4xl font-extrabold text-primary text-center">₹21,26,753</div>
          <div class="mt-4 pt-4 border-t border-slate-50 text-sm text-slate-600 leading-relaxed text-center">
            Mobilized from global donors across <span class="font-bold">18 cities</span> to fuel rural transformation.
          </div>
        </div>
      </section>

      <!-- Partnerships -->
      <section class="mt-12 px-6">
        <h2 class="text-xl font-bold text-primary mb-4">Strategic Collaborations</h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span class="material-symbols-outlined text-primary">handshake</span>
            <div class="text-sm">
              <span class="font-bold">₹10,06,000</span> contributed by <span class="font-bold">PCT Kakinada</span> and <span class="font-bold">APTA USA</span> towards higher education scholarships.
            </div>
          </div>
        </div>
      </section>

      <!-- Impact Pillars -->
      <section class="mt-12 px-6">
        <h2 class="text-xl font-bold text-primary mb-6">Impact Pillars</h2>
        
        <div class="space-y-6">
          <!-- LEADS -->
          <div class="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <span class="material-symbols-outlined text-primary">school</span>
              <h3 class="font-bold text-lg text-primary">L.E.A.D.S Program</h3>
            </div>
            <div class="text-xs font-bold text-primary/60 mb-3 uppercase tracking-wider">Invested: ₹16,37,000</div>
            <ul class="space-y-3 text-sm text-slate-700">
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary text-base">check</span>
                <span>498 students trained in life skills</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary text-base">check</span>
                <span>12 higher education scholarships</span>
              </li>
            </ul>
          </div>

          <!-- Jala Rakshana -->
          <div class="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <span class="material-symbols-outlined text-primary">water_drop</span>
              <h3 class="font-bold text-lg text-primary">Jala Rakshana</h3>
            </div>
            <div class="text-xs font-bold text-primary/60 mb-3 uppercase tracking-wider">Invested: ₹2,85,000</div>
            <ul class="space-y-3 text-sm text-slate-700">
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary text-base">check</span>
                <span>4 Rainwater Harvesting Pits built</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary text-base">check</span>
                <span>2,000KG+ plastic removed from canals</span>
              </li>
            </ul>
          </div>

          <!-- Nirmala Gramam -->
          <div class="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <span class="material-symbols-outlined text-primary">recycling</span>
              <h3 class="font-bold text-lg text-primary">Nirmala Gramam</h3>
            </div>
            <div class="text-xs font-bold text-primary/60 mb-3 uppercase tracking-wider">Invested: ₹78,000</div>
            <ul class="space-y-3 text-sm text-slate-700">
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary text-base">check</span>
                <span>300 household waste segregation pilot</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary text-base">check</span>
                <span>2,000 reusable cloth bags distributed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Snapshot Stats -->
      <section class="mt-12 px-6">
        <div class="bg-forest rounded-2xl p-6 text-white">
          <h2 class="text-xs font-bold uppercase tracking-widest text-white/60 mb-6 text-center">At a Glance</h2>
          <div class="grid grid-cols-2 gap-y-8 gap-x-4">
            <div class="text-center">
              <div class="text-3xl font-bold">05</div>
              <div class="text-[10px] text-white/50 uppercase tracking-wider">Projects</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold">18</div>
              <div class="text-[10px] text-white/50 uppercase tracking-wider">Cities</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold">02</div>
              <div class="text-[10px] text-white/50 uppercase tracking-wider">Partners</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold">500+</div>
              <div class="text-[10px] text-white/50 uppercase tracking-wider">Student Reach</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Future Goals -->
      <section class="mt-12 px-6">
        <h4 class="text-xl font-bold text-primary mb-6">Future Roadmap</h4>
        <div class="space-y-3">
          <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span class="material-symbols-outlined text-primary">agriculture</span>
            <span class="text-sm font-medium">Krutha Raithu Nestham</span>
          </div>
          <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span class="material-symbols-outlined text-primary">diversity_3</span>
            <span class="text-sm font-medium">Shakti Sangamam</span>
          </div>
          <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span class="material-symbols-outlined text-primary">volunteer_activism</span>
            <span class="text-sm font-medium">Aasara</span>
          </div>
          <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span class="material-symbols-outlined text-primary">storefront</span>
            <span class="text-sm font-medium">Dharma Vyapaar</span>
          </div>
        </div>
      </section>
    </div>
  `;

  return <StaticMarkupPage html={content} />;
};
