/**
 * @file impact-report-mobile-page.tsx
 * @description 3-Year Impact Report (2022-2025) mobile view
 * @module frontend/src/pages/mobile
 */

import React from "react";
import { StaticMarkupPage } from "../../components/ui/static-markup-page";

export const ImpactReportMobilePage: React.FC = () => {
  const content = String.raw`
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
  <header class="sticky top-0 z-50 flex items-center bg-background-light/80 backdrop-blur-md px-4 py-4 justify-between border-b border-primary/10">
    <a class="text-primary flex size-9 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer" href="/m">
      <span class="material-symbols-outlined text-[20px]">arrow_back</span>
    </a>
    <h2 class="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-editorial">Impact Report</h2>
    <div class="flex w-9 items-center justify-end">
      <button class="flex items-center justify-center rounded-full size-9 hover:bg-primary/10 text-primary">
        <span class="material-symbols-outlined text-[18px]">share</span>
      </button>
    </div>
  </header>

  <main class="flex-1 pb-24">
    <!-- Hero Section -->
    <section class="p-6 text-center relative overflow-hidden">
      <!-- Glow Blurs -->
      <div class="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="inline-flex items-center gap-2 bg-primary/5 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
        <span class="material-symbols-outlined text-xs">analytics</span> 3-Year Impact Report
      </div>
      <h1 class="font-editorial text-4xl font-bold text-slate-900 mb-4 leading-tight">
        3-Year <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Impact</span>
      </h1>
      <div class="mt-4 h-0.5 w-12 bg-primary/20 rounded-full mx-auto"></div>
      <p class="mt-6 text-slate-600 text-sm font-medium italic border-l-2 border-primary/30 pl-4 leading-relaxed text-left mx-4">
        "Transforming Communities, Manifesting the Krutha Yuga Ideals"
      </p>
      <p class="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">April 2022 &ndash; March 2025</p>
    </section>

    <!-- Financial Metrics -->
    <section class="px-4 pb-6">
      <div class="rounded-3xl bg-white p-6 shadow-sm border border-primary/10 relative overflow-hidden">
        <div class="absolute -right-6 -bottom-6 size-24 bg-primary/5 rounded-full blur-xl"></div>
        <div class="mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest text-center font-display">Total Funds Raised</div>
        <div class="text-4xl font-extrabold text-primary text-center">₹21,26,753</div>
        <div class="mt-4 pt-4 border-t border-primary/5 text-xs text-slate-500 leading-relaxed text-center font-normal">
          Mobilized from global donors across <span class="font-bold text-slate-800">18 cities</span> to fuel rural transformation.
        </div>
      </div>
    </section>

    <!-- Strategic Collaborations -->
    <section class="px-4 py-4">
      <h3 class="font-editorial text-xl font-bold text-slate-900 mb-4">Strategic Collaborations</h3>
      <div class="space-y-4">
        <div class="flex items-start gap-3 bg-white p-5 rounded-2xl border border-primary/10 shadow-sm relative overflow-hidden">
          <div class="absolute -right-6 -bottom-6 size-16 bg-primary/5 rounded-full blur-md"></div>
          <span class="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5 relative z-10">handshake</span>
          <div class="text-xs text-slate-600 leading-relaxed font-normal relative z-10">
            <span class="font-bold text-primary">₹10,06,000</span> contributed by <span class="font-bold text-slate-800">PCT Kakinada</span> and <span class="font-bold text-slate-800">APTA USA</span> towards higher education scholarships.
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Pillars -->
    <section class="px-4 py-4">
      <h3 class="font-editorial text-xl font-bold text-slate-900 mb-6">Impact Pillars</h3>
      
      <div class="space-y-6">
        <!-- LEADS -->
        <div class="bg-white border border-primary/10 p-5 rounded-[2rem] shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-xl">school</span>
              </div>
              <h4 class="font-editorial text-lg font-bold text-slate-900">L.E.A.D.S Program</h4>
            </div>
            <div class="text-[10px] font-black uppercase tracking-wider font-display text-accent mb-3">Invested: ₹16,37,000</div>
            <ul class="space-y-3.5 text-xs text-slate-600 font-normal">
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>498 students trained in life skills</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>12 higher education scholarships</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Jala Rakshana -->
        <div class="bg-white border border-primary/10 p-5 rounded-[2rem] shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-xl">water_drop</span>
              </div>
              <h4 class="font-editorial text-lg font-bold text-slate-900">Jala Rakshana</h4>
            </div>
            <div class="text-[10px] font-black uppercase tracking-wider font-display text-accent mb-3">Invested: ₹2,85,000</div>
            <ul class="space-y-3.5 text-xs text-slate-600 font-normal">
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>4 Rainwater Harvesting Pits built</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>Canal bed summer cleaning: 2-5 feet of plastic removed</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Nirmala Gramam -->
        <div class="bg-white border border-primary/10 p-5 rounded-[2rem] shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-xl">recycling</span>
              </div>
              <h4 class="font-editorial text-lg font-bold text-slate-900">Nirmala Gramam</h4>
            </div>
            <div class="text-[10px] font-black uppercase tracking-wider font-display text-accent mb-3">Invested: ₹78,000</div>
            <ul class="space-y-3.5 text-xs text-slate-600 font-normal">
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>300 household waste segregation pilot</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>2,000 cloth bags distributed to eliminate single-use plastics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Snapshot Stats -->
    <section class="px-4 py-4">
      <div class="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden border border-primary/10 shadow-xl">
        <div class="absolute -right-6 -bottom-6 size-32 bg-primary/20 rounded-full blur-2xl"></div>
        <div class="absolute -left-6 -top-6 size-32 bg-accent/15 rounded-full blur-2xl"></div>
        <h4 class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 text-center font-display">At a Glance</h4>
        
        <div class="grid grid-cols-2 gap-y-8 gap-x-4 relative z-10">
          <div class="text-center">
            <div class="text-4xl font-bold font-editorial text-accent">05</div>
            <div class="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Projects</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold font-editorial text-accent">18</div>
            <div class="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Cities</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold font-editorial text-accent">02</div>
            <div class="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Partners</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold font-editorial text-accent">300+</div>
            <div class="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Households Reached</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Goals -->
    <section class="px-4 py-4 pb-12">
      <h4 class="font-editorial text-xl font-bold text-slate-900 mb-6">Future Roadmap</h4>
      <div class="space-y-3">
        <div class="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-primary/10 shadow-sm hover:border-primary transition-colors">
          <div class="size-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-lg">agriculture</span>
          </div>
          <span class="text-sm font-editorial font-bold text-slate-800">Krutha Raithu Nestham</span>
        </div>

        <div class="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-primary/10 shadow-sm hover:border-primary transition-colors">
          <div class="size-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-lg">diversity_3</span>
          </div>
          <span class="text-sm font-editorial font-bold text-slate-800">Shakti Sangamam</span>
        </div>

        <div class="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-primary/10 shadow-sm hover:border-primary transition-colors">
          <div class="size-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-lg">volunteer_activism</span>
          </div>
          <span class="text-sm font-editorial font-bold text-slate-800">Aasara</span>
        </div>

        <div class="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-primary/10 shadow-sm hover:border-primary transition-colors">
          <div class="size-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-lg">storefront</span>
          </div>
          <span class="text-sm font-editorial font-bold text-slate-800">Dharma Vyapaar</span>
        </div>
      </div>
    </section>
  </main>

  <nav class="fixed bottom-0 left-0 right-0 z-50 flex border-t border-primary/5 bg-white/80 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.04)] pb-8 pt-3 px-4">
    <a class="flex flex-1 flex-col items-center justify-center gap-1.5 text-slate-400 transition-all active:scale-95" href="/m">
      <span class="material-symbols-outlined text-[26px]">home</span>
      <p class="text-[9px] font-black uppercase tracking-[0.15em] leading-none">Home</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1.5 text-primary transition-all active:scale-95" href="/m/impact-report">
      <div class="relative flex items-center justify-center">
        <span class="material-symbols-outlined text-[26px]" style="font-variation-settings: 'FILL' 1">analytics</span>
        <div class="absolute -bottom-1.5 size-1 rounded-full bg-primary"></div>
      </div>
      <p class="text-[9px] font-black uppercase tracking-[0.15em] leading-none">Impact</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1.5 text-slate-400 transition-all active:scale-95" href="/m/press">
      <span class="material-symbols-outlined text-[26px]">newspaper</span>
      <p class="text-[9px] font-black uppercase tracking-[0.15em] leading-none">Press</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1.5 text-slate-400 transition-all active:scale-95" href="/m/contact">
      <span class="material-symbols-outlined text-[26px]">mail</span>
      <p class="text-[9px] font-black uppercase tracking-[0.15em] leading-none">Contact</p>
    </a>
  </nav>
</div>`;

  return <StaticMarkupPage html={content} />;
};
