/**
 * @file leads-program-mobile-page.tsx
 * @description Mobile version of the L.E.A.D.S program profile.
 * @module frontend/src/pages/mobile/programs
 */

import { StaticMarkupPage } from "../../../components/ui/static-markup-page";

const html = String.raw`
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased">
  <header class="sticky top-0 z-50 flex items-center bg-background-light/80 backdrop-blur-md px-4 py-4 justify-between border-b border-primary/10">
    <a class="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer" href="/m/our-work">
      <span class="material-symbols-outlined">arrow_back</span>
    </a>
    <h2 class="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">L.E.A.D.S Program</h2>
    <div class="flex w-10 items-center justify-end"></div>
  </header>

  <main class="flex-1">
    <section class="relative bg-slate-900 px-4 py-16 text-white text-center">
      <div class="absolute inset-0 opacity-30">
        <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGW3QlcFFZtD6PeZMpD94F6niT7ssG87oherYUv3At43lRSmvoWw5dmbvQBlXQuEveweuaGPHhabh2HXZfSWA4kMOlTlMCr35k5mJ8t0cJqxsisSnc_aDuMroc_P_EwqvLW2dWrRQweT5HMW3EvYDPvEeVJ27I5svdoDkm747oOpE_WRl2e9AN7ls-mPtbq4t8M74xwTnDIQsHXjBtdJfvxbYzzdtQtoeHkwOFLcNV3aREORIe9bX2b5D-B72brwP_x_TsWNpd0wv7" alt="Hero background" />
      </div>
      <div class="relative z-10">
        <h1 class="text-4xl font-black mb-4">L.E.A.D.S</h1>
        <p class="text-sm opacity-80 uppercase tracking-widest font-bold mb-6">Building Tomorrow's Leaders</p>
        <p class="text-lg italic font-medium max-w-xs mx-auto text-primary">"Guiding the Critical Years, Building Leaders"</p>
      </div>
    </section>

    <section class="px-6 py-12 space-y-8">
      <div class="space-y-4">
        <h3 class="text-2xl font-bold text-slate-900">The Mission</h3>
        <p class="text-slate-600 leading-relaxed">The journey from Class 8 to 10 is defining. In villages, this "vulnerable window" is where students need mentorship most to ensure a <strong>career, not a crisis</strong>.</p>
        <p class="text-slate-600 leading-relaxed">Adopted in April 2022, our alumni-led initiative at ZPHS Vadapalem restores the academic glory of our alma mater.</p>
      </div>
      <div class="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
        <p class="text-slate-800 italic leading-relaxed">"We are not just educating students; we are saving a generation."</p>
      </div>
    </section>

    <section class="px-6 py-12 bg-white">
      <div class="mb-10 text-center">
        <h3 class="text-2xl font-bold">The Pillars</h3>
        <div class="w-10 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
      </div>
      <div class="space-y-4">
        <div class="flex gap-4 p-4 rounded-xl bg-background-light border border-slate-100">
          <div class="text-2xl font-black text-primary">L</div>
          <div><h4 class="font-bold">Life Skills</h4><p class="text-sm text-slate-500">EQ, Communication, Decision-making.</p></div>
        </div>
        <div class="flex gap-4 p-4 rounded-xl bg-background-light border border-slate-100">
          <div class="text-2xl font-black text-primary">E</div>
          <div><h4 class="font-bold">Education</h4><p class="text-sm text-slate-500">Adolescent health & maturity.</p></div>
        </div>
        <div class="flex gap-4 p-4 rounded-xl bg-background-light border border-slate-100">
          <div class="text-2xl font-black text-primary">A</div>
          <div><h4 class="font-bold">Awareness</h4><p class="text-sm text-slate-500">Girl child empowerment & safety.</p></div>
        </div>
        <div class="flex gap-4 p-4 rounded-xl bg-background-light border border-slate-100">
          <div class="text-2xl font-black text-primary">D</div>
          <div><h4 class="font-bold">Direction</h4><p class="text-sm text-slate-500">Career guidance & corporate exposure.</p></div>
        </div>
        <div class="flex gap-4 p-4 rounded-xl bg-background-light border border-slate-100">
          <div class="text-2xl font-black text-primary">S</div>
          <div><h4 class="font-bold">Support</h4><p class="text-sm text-slate-500">Scholarships for brilliant students.</p></div>
        </div>
      </div>
    </section>

    <section class="px-6 py-12">
      <h3 class="text-2xl font-bold mb-8 text-center">Impact at Scale</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="p-6 bg-white rounded-2xl shadow-sm text-center border border-slate-100">
          <p class="text-2xl font-black text-primary">500+</p>
          <p class="text-[10px] uppercase font-bold text-slate-500">Students Trained</p>
        </div>
        <div class="p-6 bg-white rounded-2xl shadow-sm text-center border border-slate-100">
          <p class="text-2xl font-black text-primary">14</p>
          <p class="text-[10px] uppercase font-bold text-slate-500">Scholars Supported</p>
        </div>
      </div>
      <div class="mt-4 p-6 bg-primary rounded-2xl text-white text-center">
        <p class="text-3xl font-black mb-1">77%</p>
        <p class="text-xs font-bold opacity-80 uppercase">Of funds for Professional Education</p>
      </div>
    </section>

    <section class="px-6 py-12 bg-primary/5">
      <h3 class="text-2xl font-bold mb-8 text-center">Scholarship Growth</h3>
      <div class="space-y-6">
        <div class="p-4 bg-white rounded-xl border border-primary/10 text-center">
          <p class="text-xs text-slate-500 font-bold mb-1">TOTAL DISBURSED</p>
          <p class="text-2xl font-black text-slate-900">₹10,06,000</p>
          <p class="text-xs text-primary font-bold mt-1">+260% Since Inception</p>
        </div>
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="text-[10px] font-bold text-slate-400 w-12">2024-25</span>
            <div class="flex-1 h-8 bg-white rounded-full border border-slate-100 relative overflow-hidden">
               <div class="absolute inset-y-0 left-0 bg-primary/40" style="width: 75%"></div>
               <div class="absolute inset-y-0 left-2 flex items-center text-[10px] font-bold">₹3,54,000</div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[10px] font-bold text-slate-900 w-12">2025-26</span>
            <div class="flex-1 h-8 bg-white rounded-full border border-primary/20 relative overflow-hidden">
               <div class="absolute inset-y-0 left-0 bg-primary" style="width: 100%"></div>
               <div class="absolute inset-y-0 left-2 flex items-center text-[10px] font-bold text-white">₹4,72,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 py-16 bg-slate-900 text-white text-center">
      <h3 class="text-2xl font-bold mb-6">Invest in Potential</h3>
      <p class="text-slate-400 text-sm mb-10 leading-relaxed">Help us turn these students' transition into a lifetime of excellence. Every rupee counts.</p>
      <a class="block w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all" href="/m/contact">Donate to L.E.A.D.S</a>
    </section>
  </main>

  <footer class="bg-slate-950 p-8 text-center border-t border-white/5 pb-24">
    <div class="flex items-center justify-center gap-2 text-white mb-6">
       <span class="material-symbols-outlined text-sm">eco</span>
       <span class="font-bold text-sm">Krutha Foundation</span>
    </div>
    <div class="flex justify-center gap-6 text-[10px] text-slate-500 font-bold">
       <a href="/m/about">About</a>
       <a href="/m/our-work">Work</a>
       <a href="/m/contact">Contact</a>
    </div>
  </footer>
  
  <footer class="fixed bottom-0 z-50 flex border-t border-primary/10 bg-background-light px-4 pb-4 pt-2 shadow-2xl w-full">
    <a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m">
      <span class="material-symbols-outlined">home</span>
      <p class="text-[10px] font-medium uppercase tracking-widest">Home</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1 text-primary" href="/m/our-work">
      <span class="material-symbols-outlined">folder_shared</span>
      <p class="text-[10px] font-bold uppercase tracking-widest">Work</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m/contact">
      <span class="material-symbols-outlined">volunteer_activism</span>
      <p class="text-[10px] font-medium uppercase tracking-widest">Donate</p>
    </a>
  </footer>
</div>
`;

export function LeadsProgramMobilePage() {
  return <StaticMarkupPage html={html} />;
}
