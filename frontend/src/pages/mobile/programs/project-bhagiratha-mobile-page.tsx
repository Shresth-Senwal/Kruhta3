/**
 * @file project-bhagiratha-mobile-page.tsx
 * @description Mobile version of the Project Bhagiratha profile.
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
        <img class="w-full h-full object-cover" src="/projects/Bhagiratha.webp" alt="Water project background" />
      </div>
      <!-- Glow Blurs -->
      <div class="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 space-y-3">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-white px-3.5 py-1 rounded-full text-xs font-bold mb-2 backdrop-blur-md border border-primary/10">
          <span class="material-symbols-outlined text-sm text-accent animate-pulse">waves</span> Project Bhagiratha
        </div>
        <h1 class="text-4xl font-editorial leading-tight mb-2">
          Project <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic">Bhagiratha</span>
        </h1>
        <p class="text-sm opacity-80 uppercase tracking-widest font-bold">Restoring Konaseema's Water</p>
        <p class="text-base italic font-light text-slate-300 max-w-xs mx-auto pt-2">"Bringing the Heavens to the Earth"</p>
      </div>
    </section>

    <!-- Water Mission Section -->
    <section class="px-6 py-12 space-y-8 relative">
      <div class="absolute top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="space-y-4">
        <h3 class="text-2xl font-editorial text-slate-900 leading-tight">
          The <span class="text-primary italic">Water Mission</span>
        </h3>
        <p class="text-slate-600 leading-relaxed text-sm">Over 30 years, our groundwater has plummeted by 15 feet. As concrete roads cover our soil, the rain has no way to sink in; it simply flows into the sea, wasted.</p>
        <p class="text-slate-600 leading-relaxed text-sm">Inspired by King Bhagiratha’s relentless spirit, Krutha Foundation's mission is to create a path for the rain to return to the heart of the earth.</p>
      </div>
      
      <div class="bg-white p-6 rounded-[1.8rem] border border-primary/10 shadow-sm relative overflow-hidden group">
        <div class="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
        <p class="text-slate-700 italic leading-relaxed text-sm font-display">&quot;Catching every drop is our highest Dharma. By catching every drop, we are honoring the earth that sustains us.&quot;</p>
      </div>
    </section>

    <!-- Roadmap Section -->
    <section class="px-6 py-12 bg-white/60 border-y border-primary/10 relative">
      <div class="mb-10 text-center space-y-2">
        <span class="text-accent font-bold tracking-widest text-xs uppercase">Roadmap</span>
        <h3 class="text-3xl font-editorial text-slate-900">The Roadmap</h3>
      </div>
      
      <div class="space-y-4">
        <div class="flex gap-4 p-5 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-xl font-editorial font-black text-primary w-6 text-center">01</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-base">Current Progress</h4>
            <p class="text-xs text-slate-600 leading-relaxed mt-1">Built 4 Rainwater Harvesting Pits (RHPs). ₹3 Lakhs invested to start the recharge.</p>
          </div>
        </div>
        
        <div class="flex gap-4 p-5 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-xl font-editorial font-black text-primary w-6 text-center">02</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-base">3-Year Goal</h4>
            <p class="text-xs text-slate-600 leading-relaxed mt-1">Construct 40 RHPs across the village. Aquifer gateway recharge.</p>
          </div>
        </div>
        
        <div class="flex gap-4 p-5 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-xl font-editorial font-black text-primary w-6 text-center">03</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-base">10-Year Vision</h4>
            <p class="text-xs text-slate-600 leading-relaxed mt-1">Raise the water table by 10 feet. Securing Konaseema against saltwater intrusion.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <section class="px-6 py-16 bg-slate-900 text-white text-center relative overflow-hidden border-t border-primary/10">
      <div class="absolute -right-10 -top-10 size-48 rounded-full bg-primary/20 blur-3xl"></div>
      <h3 class="text-2xl font-editorial font-bold mb-6 text-white leading-tight">Secure Our Future</h3>
      <p class="text-slate-400 text-sm mb-10 leading-relaxed max-w-xs mx-auto">Help us ensure Konaseema remains a lush, green paradise for generations to come.</p>
      <a class="block w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all shadow-primary/20" href="/m/contact">Support Project Bhagiratha</a>
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

export function ProjectBhagirathaMobilePage() {
  return <StaticMarkupPage html={html} />;
}

