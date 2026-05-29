/**
 * @file project-samyamam-mobile-page.tsx
 * @description Mobile version of the Samyamam zero-plastic initiative.
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
        <img class="w-full h-full object-cover" src="/projects/Samyamam.webp" alt="Samyamam zero plastic" />
      </div>
      <!-- Glow Blurs -->
      <div class="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 space-y-3">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-white px-3.5 py-1 rounded-full text-xs font-bold mb-2 backdrop-blur-md border border-primary/10">
          <span class="material-symbols-outlined text-sm text-accent animate-pulse">do_not_disturb_on</span> Project SAMYAMAM
        </div>
        <h1 class="text-4xl font-editorial leading-tight mb-2">
          Project <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic">SAMYAMAM</span>
        </h1>
        <p class="text-sm opacity-80 uppercase tracking-widest font-bold">Zero Plastic Revolution</p>
        <p class="text-base italic font-light text-slate-300 max-w-xs mx-auto pt-2">"Responsible Living for a Sustainable Village"</p>
      </div>
    </section>

    <!-- Accountability Section -->
    <section class="px-6 py-12 space-y-8 relative">
      <div class="absolute top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="space-y-4">
        <h3 class="text-2xl font-editorial text-slate-900 leading-tight">
          Shared <span class="text-primary italic">Accountability</span>
        </h3>
        <p class="text-slate-600 leading-relaxed text-sm">Environmental damage is caused by convenience habits. Through SAMYAMAM, we inspire accountability toward land and water.</p>
      </div>
      
      <div class="bg-white p-6 rounded-[1.8rem] border border-primary/10 shadow-sm relative overflow-hidden group">
        <div class="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="flex items-center gap-4 mb-4">
          <div class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md shadow-primary/15">
            <span class="material-symbols-outlined text-2xl">shopping_bag</span>
          </div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-sm">Action Delivered</h4>
            <p class="text-[11px] uppercase font-bold text-slate-400">Cotton Bags</p>
          </div>
        </div>
        <p class="text-slate-700 italic leading-relaxed text-sm font-display">&quot;2,000 Reusable Cotton Bags Injected. Partnering with the Panchayat, we’ve issued 'Stop Usage' notices to all 80+ commercial establishments.&quot;</p>
      </div>
    </section>

    <!-- Circular Economy Section -->
    <section class="px-6 py-8 bg-white/60 border-y border-primary/10">
      <div class="mb-6 text-center space-y-1">
        <span class="text-accent font-bold tracking-widest text-[10px] uppercase">Circular System</span>
        <h3 class="text-2xl font-editorial text-slate-900">Borrow & Return</h3>
      </div>
      <div class="grid grid-cols-1 gap-3">
        <div class="flex gap-4 p-4 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-base font-editorial font-black text-primary w-5 text-center">1</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-sm">Pick up at any shop</h4>
            <p class="text-[11px] text-slate-600 leading-relaxed mt-0.5">Grab a reusable bag when shopping without a container.</p>
          </div>
        </div>
        
        <div class="flex gap-4 p-4 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-base font-editorial font-black text-primary w-5 text-center">2</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-sm">Use and carry home</h4>
            <p class="text-[11px] text-slate-600 leading-relaxed mt-0.5">Transport goods safely back to your home using quality cotton.</p>
          </div>
        </div>
        
        <div class="flex gap-4 p-4 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-base font-editorial font-black text-primary w-5 text-center">3</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-sm">Return bag to any shop</h4>
            <p class="text-[11px] text-slate-600 leading-relaxed mt-0.5">Bring the bag back during your next visit, closing the loop.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contrast / Philosophy / Legacy Call to Action Section -->
    <section class="px-6 py-16 bg-slate-900 text-white text-center relative overflow-hidden border-t border-primary/10">
      <div class="absolute -right-10 -top-10 size-48 rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute -left-10 -bottom-10 size-48 rounded-full bg-accent/10 blur-3xl"></div>
      
      <h3 class="text-2xl font-editorial font-bold mb-4 text-white leading-tight">5 Days vs 500 Years</h3>
      <p class="text-slate-400 text-xs mb-8 leading-relaxed max-w-xs mx-auto">
        A banana leaf lasts 5 days. Plastic lasts 500 years. Choose your legacy today.
      </p>
      
      <div class="p-6 bg-white/5 border border-white/10 rounded-[1.5rem] mb-10 text-left relative overflow-hidden">
        <p class="text-slate-300 italic leading-relaxed text-xs font-display">
          &quot;We aren't just cleaning a village; we are reviving a culture of respect for the Earth. Help us weave a future where our water is pure and our soil is rich.&quot;
        </p>
      </div>

      <a class="block w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all shadow-primary/20" href="/m/contact">Join Project SAMYAMAM</a>
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

export function ProjectSamyamamMobilePage() {
  return <StaticMarkupPage html={html} />;
}
