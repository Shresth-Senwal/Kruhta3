/**
 * @file leads-program-mobile-page.tsx
 * @description Mobile version of the L.E.A.D.S program profile.
 * @module frontend/src/pages/mobile/programs
 */

import { StaticMarkupPage } from "../../../components/ui/static-markup-page";

const html = String.raw`
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased">
  <header class="sticky top-0 z-50"></header>

  <main class="flex-1">
    <!-- Hero Section -->
    <section class="relative bg-slate-900 px-6 py-20 text-white text-center overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <img class="w-full h-full object-cover" src="/projects/leads.webp" alt="Hero background" />
      </div>
      <!-- Glow Blurs -->
      <div class="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 space-y-3">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-white px-3.5 py-1 rounded-full text-xs font-bold mb-2 backdrop-blur-md border border-primary/10">
          <span class="material-symbols-outlined text-sm text-accent animate-pulse">verified</span> L.E.A.D.S
        </div>
        <h1 class="text-4xl font-editorial leading-tight mb-2">
          L.E.A.D.S <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic">Program</span>
        </h1>
        <p class="text-sm opacity-80 uppercase tracking-widest font-bold">Building Tomorrow's Leaders</p>
        <p class="text-base italic font-light text-slate-300 max-w-xs mx-auto pt-2">"Guiding the Critical Years, Building Leaders"</p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="px-6 py-12 space-y-8 relative">
      <div class="absolute top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="space-y-4">
        <h3 class="text-2xl font-editorial text-slate-900 leading-tight">
          The <span class="text-primary italic">Mission</span>
        </h3>
        <p class="text-slate-600 leading-relaxed text-sm">The journey from Class 8 to 10 is defining. In villages, this "vulnerable window" is where students need mentorship most to ensure a <strong class="text-primary">career, not a crisis</strong>.</p>
        <p class="text-slate-600 leading-relaxed text-sm">Adopted in April 2022, our alumni-led initiative at ZPHS Vadapalem restores the academic glory of our alma mater.</p>
      </div>
      
      <div class="bg-white p-6 rounded-[1.8rem] border border-primary/10 shadow-sm relative overflow-hidden group">
        <div class="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
        <p class="text-slate-700 italic leading-relaxed text-sm font-display">&quot;We are not just educating students; we are saving a generation.&quot;</p>
      </div>
    </section>

    <!-- Pillars Section -->
    <section class="px-6 py-12 bg-white/60 border-y border-primary/10 relative">
      <div class="mb-10 text-center space-y-2">
        <span class="text-accent font-bold tracking-widest text-xs uppercase">Framework</span>
        <h3 class="text-3xl font-editorial text-slate-900">The Pillars</h3>
      </div>
      <div class="space-y-4">
        <div class="flex gap-4 p-5 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-2xl font-editorial font-black text-primary w-6 text-center">L</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-base">Life Skills</h4>
            <p class="text-xs text-slate-500 leading-relaxed mt-1">EQ, Communication, Decision-making.</p>
          </div>
        </div>
        <div class="flex gap-4 p-5 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-2xl font-editorial font-black text-primary w-6 text-center">E</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-base">Education</h4>
            <p class="text-xs text-slate-500 leading-relaxed mt-1">Adolescent health & maturity.</p>
          </div>
        </div>
        <div class="flex gap-4 p-5 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-2xl font-editorial font-black text-primary w-6 text-center">A</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-base">Awareness</h4>
            <p class="text-xs text-slate-500 leading-relaxed mt-1">Girl child empowerment & safety.</p>
          </div>
        </div>
        <div class="flex gap-4 p-5 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-2xl font-editorial font-black text-primary w-6 text-center">D</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-base">Direction</h4>
            <p class="text-xs text-slate-500 leading-relaxed mt-1">Career guidance & corporate exposure.</p>
          </div>
        </div>
        <div class="flex gap-4 p-5 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-2xl font-editorial font-black text-primary w-6 text-center">S</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-base">Support</h4>
            <p class="text-xs text-slate-500 leading-relaxed mt-1">Scholarships for brilliant students.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="px-6 py-12 relative overflow-hidden">
      <div class="absolute top-1/2 -right-12 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <h3 class="text-2xl font-editorial font-bold mb-8 text-center text-slate-900">Impact at Scale</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="p-5 bg-white rounded-[1.5rem] shadow-sm text-center border border-primary/10">
          <p class="text-3xl font-editorial font-black text-primary">500+</p>
          <p class="text-[9px] uppercase font-bold text-slate-500 tracking-wider mt-1">Students Trained</p>
        </div>
        <div class="p-5 bg-white rounded-[1.5rem] shadow-sm text-center border border-primary/10">
          <p class="text-3xl font-editorial font-black text-primary">14</p>
          <p class="text-[9px] uppercase font-bold text-slate-500 tracking-wider mt-1">Scholars Supported</p>
        </div>
      </div>
      <div class="mt-4 p-6 bg-primary rounded-[1.5rem] text-white text-center shadow-lg shadow-primary/20 relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        <p class="text-3xl font-editorial font-black mb-1">77%</p>
        <p class="text-xs font-bold opacity-80 uppercase tracking-widest">Of funds for Professional Education</p>
      </div>
    </section>

    <!-- Growth Section -->
    <section class="px-6 py-12 bg-primary/5 border-t border-primary/10">
      <h3 class="text-2xl font-editorial font-bold mb-8 text-center text-slate-900">Scholarship Growth</h3>
      <div class="space-y-6">
        <div class="p-6 bg-white rounded-[1.8rem] border border-primary/10 text-center shadow-sm relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
          <p class="text-xs text-slate-400 font-bold mb-1 uppercase tracking-widest">TOTAL DISBURSED</p>
          <p class="text-3xl font-editorial font-black text-slate-900">₹10,06,000</p>
          <p class="text-xs text-primary font-bold mt-1.5 flex items-center justify-center gap-1">
            <span class="material-symbols-outlined text-[10px]">trending_up</span> +260% Since Inception
          </p>
        </div>
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="text-[10px] font-bold text-slate-400 w-12">2024-25</span>
            <div class="flex-1 h-8 bg-white rounded-full border border-slate-200 relative overflow-hidden shadow-inner">
               <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/30 to-primary/40" style="width: 75%"></div>
               <div class="absolute inset-y-0 left-3 flex items-center text-[10px] font-bold text-slate-700">₹3,54,000</div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[10px] font-bold text-slate-900 w-12">2025-26</span>
            <div class="flex-1 h-8 bg-white rounded-full border border-primary/20 relative overflow-hidden shadow-inner">
               <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent" style="width: 100%"></div>
               <div class="absolute inset-y-0 left-3 flex items-center text-[10px] font-bold text-white">₹4,72,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <section class="px-6 py-16 bg-slate-900 text-white text-center relative overflow-hidden border-t border-primary/10">
      <div class="absolute -right-10 -top-10 size-48 rounded-full bg-primary/20 blur-3xl"></div>
      <h3 class="text-2xl font-editorial font-bold mb-6 text-white leading-tight">Invest in Potential</h3>
      <p class="text-slate-400 text-sm mb-10 leading-relaxed max-w-xs mx-auto">Help us turn these students' transition into a lifetime of excellence. Every rupee counts.</p>
      <a class="block w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all shadow-primary/20" href="/m/contact">Donate to L.E.A.D.S</a>
    </section>
  </main>

  <footer class="bg-slate-950 p-8 text-center border-t border-white/5 pb-28">
    <div class="flex items-center justify-center gap-2 text-white mb-6">
       <span class="material-symbols-outlined text-sm">eco</span>
       <span class="font-bold text-sm">Krutha Foundation</span>
    </div>
    <div class="flex justify-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
       <a href="/m/about">About</a>
       <a href="/m/our-work">Work</a>
       <a href="/m/contact">Contact</a>
    </div>
  </footer>
</div>
`;

export function LeadsProgramMobilePage() {
  return <StaticMarkupPage html={html} />;
}

