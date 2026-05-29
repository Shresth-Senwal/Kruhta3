/**
 * @file project-vasundhara-mobile-page.tsx
 * @description Mobile version of the Project Vasundhara profile.
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
        <img class="w-full h-full object-cover" src="/projects/Vasundhara.webp" alt="Waste project background" />
      </div>
      <!-- Glow Blurs -->
      <div class="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 space-y-3">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-white px-3.5 py-1 rounded-full text-xs font-bold mb-2 backdrop-blur-md border border-primary/10">
          <span class="material-symbols-outlined text-sm text-accent animate-pulse">eco</span> Project Vasundhara
        </div>
        <h1 class="text-4xl font-editorial leading-tight mb-2">
          Project <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic">Vasundhara</span>
        </h1>
        <p class="text-sm opacity-80 uppercase tracking-widest font-bold">Cleaning Konaseema's Soil</p>
        <p class="text-base italic font-light text-slate-300 max-w-xs mx-auto pt-2">"Honouring the Wealth of Our Earth"</p>
      </div>
    </section>

    <!-- Treasures Section -->
    <section class="px-6 py-12 space-y-8 relative">
      <div class="absolute top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="space-y-4">
        <h3 class="text-2xl font-editorial text-slate-900 leading-tight">
          Treasures of <span class="text-primary italic">The Earth</span>
        </h3>
        <p class="text-slate-600 leading-relaxed text-sm">In our scriptures, the Earth is called <strong>Vasundhara</strong>—the "Holder of Treasures." From the grain that feeds us to the water that sustains us, the soil is our greatest bank. But today, this treasure is being buried under piles of unsegregated waste.</p>
        <p class="text-slate-600 leading-relaxed text-sm">Krutha Foundation believes cleanliness is the highest form of respect we can show to our land. Through <strong class="text-primary">Project Vasundhara</strong>, we are transforming how our village handles waste.</p>
      </div>
      
      <div class="bg-white p-6 rounded-[1.8rem] border border-primary/10 shadow-sm relative overflow-hidden group">
        <div class="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
        <p class="text-slate-700 italic leading-relaxed text-sm font-display">&quot;The biggest enemy of a clean village isn't 'trash'—it is mixing. When organic waste and plastic are thrown together, they create toxic landfills.&quot;</p>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="px-6 py-8 bg-white/60 border-y border-primary/10">
      <div class="grid grid-cols-2 gap-4">
        <div class="p-5 bg-white rounded-[1.5rem] shadow-sm text-center border border-primary/10">
          <p class="text-3xl font-editorial font-black text-primary">300</p>
          <p class="text-[9px] uppercase font-bold text-slate-500 tracking-wider mt-1">Households</p>
        </div>
        <div class="p-5 bg-white rounded-[1.5rem] shadow-sm text-center border border-primary/10">
          <p class="text-3xl font-editorial font-black text-primary">600</p>
          <p class="text-[9px] uppercase font-bold text-slate-500 tracking-wider mt-1">Bins Distributed</p>
        </div>
      </div>
    </section>

    <!-- Blueprint Section -->
    <section class="px-6 py-12 relative overflow-hidden">
      <div class="absolute top-1/2 -right-12 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="mb-10 text-center space-y-2">
        <span class="text-accent font-bold tracking-widest text-xs uppercase">Strategy</span>
        <h3 class="text-3xl font-editorial text-slate-900">Blueprint</h3>
      </div>
      
      <div class="space-y-4">
        <div class="flex gap-4 p-5 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-xl font-editorial font-black text-primary w-6 text-center">1</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-base">Twin-Bin System</h4>
            <p class="text-xs text-slate-600 leading-relaxed mt-1">Empowering families to separate 'Wet' (Organic) and 'Dry' (Recyclable) waste at source.</p>
          </div>
        </div>
        
        <div class="flex gap-4 p-5 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-xl font-editorial font-black text-primary w-6 text-center">2</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-base">Vasundhara Rakshaks</h4>
            <p class="text-xs text-slate-600 leading-relaxed mt-1">Volunteer leaders driving door-to-door awareness and community responsibility.</p>
          </div>
        </div>
        
        <div class="flex gap-4 p-5 rounded-[1.5rem] bg-white border border-primary/10 shadow-sm">
          <div class="text-xl font-editorial font-black text-primary w-6 text-center">3</div>
          <div>
            <h4 class="font-editorial font-bold text-slate-900 text-base">Closing the Loop</h4>
            <p class="text-xs text-slate-600 leading-relaxed mt-1">Working hand-in-hand with local authorities to ensure regular collection.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <section class="px-6 py-16 bg-slate-900 text-white text-center relative overflow-hidden border-t border-primary/10">
      <div class="absolute -right-10 -top-10 size-48 rounded-full bg-primary/20 blur-3xl"></div>
      <h3 class="text-2xl font-editorial font-bold mb-6 text-white leading-tight">Invest in Purity</h3>
      <p class="text-slate-400 text-sm mb-10 leading-relaxed max-w-xs mx-auto">Join us in transforming our village into a waste-free haven.</p>
      <a class="block w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all shadow-primary/20" href="/m/contact">Join Project Vasundhara</a>
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

export function ProjectVasundharaMobilePage() {
  return <StaticMarkupPage html={html} />;
}

