/**
 * @file project-bhagiratha-mobile-page.tsx
 * @description Mobile version of the Project Bhagiratha profile.
 * @module frontend/src/pages/mobile/programs
 */

import { StaticMarkupPage } from "../../../components/ui/static-markup-page";

const html = String.raw`
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased">
  <header class="sticky top-0 z-50 flex items-center bg-background-light/80 backdrop-blur-md px-4 py-4 justify-between border-b border-primary/10">
    <a class="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer" href="/m/our-work">
      <span class="material-symbols-outlined">arrow_back</span>
    </a>
    <h2 class="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Project Bhagiratha</h2>
    <div class="flex w-10 items-center justify-end"></div>
  </header>

  <main class="flex-1">
    <section class="relative bg-slate-900 px-4 py-16 text-white text-center">
      <div class="absolute inset-0 opacity-30">
        <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBb-tKaKm525G-NCxAzRuZsXvkjDAqeWZwa6AQgyeZqVT1WCLxWfXS1SHA7TnEv9xJPnlHZPXWmBdWia97g2lckH4MlkWRmUw3mwkPCES7AeSajfGu7w02Ma3CH31SD4wJlu5vdMV_IuND3iCg-G0r9wblYYBGtbyskrs86FMpIyI5RD0yWaO1VRCl8f6Z2eQ2ES44nc866LMxip79B4GbJpBD9pB4zIDkUwYimSA0s8dLnXEx3KsSQ7jVfogAKU5KhxXeOHhJoie6" alt="Water project background" />
      </div>
      <div class="relative z-10">
        <h1 class="text-3xl font-black mb-4">BHAGIRATHA</h1>
        <p class="text-xs opacity-80 uppercase tracking-widest font-bold mb-6">Restoring Konaseema's Water</p>
        <p class="text-lg italic font-medium max-w-xs mx-auto text-primary">"Bringing the Heavens to the Earth"</p>
      </div>
    </section>

    <section class="px-6 py-12 space-y-6">
       <h3 class="text-2xl font-bold">The Water Mission</h3>
       <p class="text-slate-600 leading-relaxed text-sm">Over 30 years, our groundwater has plummeted by 15 feet. Rain flows into the sea, wasted.</p>
       <div class="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
          <p class="text-slate-800 italic text-sm leading-relaxed">"Catching every drop is our highest Dharma."</p>
       </div>
    </section>

    <section class="px-6 py-12 bg-white space-y-8">
       <h3 class="text-2xl font-bold text-center">Roadmap</h3>
       <div class="space-y-4">
          <div class="p-4 rounded-xl bg-background-light border border-slate-100 flex gap-4">
             <div class="text-xl font-black text-primary">01</div>
             <p class="text-sm font-medium"><strong>Built 4 RHPs</strong>: First ₹3 Lakhs invested.</p>
          </div>
          <div class="p-4 rounded-xl bg-background-light border border-slate-100 flex gap-4">
             <div class="text-xl font-black text-primary">02</div>
             <p class="text-sm font-medium"><strong>3-Year Goal</strong>: Construct 40 RHPs village-wide.</p>
          </div>
          <div class="p-4 rounded-xl bg-background-light border border-slate-100 flex gap-4">
             <div class="text-xl font-black text-primary">03</div>
             <p class="text-sm font-medium"><strong>10-Year Vision</strong>: +10 ft water table rise.</p>
          </div>
       </div>
    </section>

    <section class="px-6 py-16 bg-forest text-white text-center">
       <h3 class="text-2xl font-bold mb-6">Secure Our Future</h3>
       <p class="text-slate-400 text-sm mb-10 leading-relaxed">Help us ensure Konaseema remains a lush, green paradise for generations to come.</p>
       <a class="block w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all" href="/m/contact">Support Project Bhagiratha</a>
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
      <span class="material-symbols-outlined text-[24px]">home</span>
      <p class="text-[10px] font-medium uppercase tracking-widest">Home</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1 text-primary" href="/m/our-work">
      <span class="material-symbols-outlined text-[24px]">folder_shared</span>
      <p class="text-[10px] font-bold uppercase tracking-widest">Work</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m/contact">
      <span class="material-symbols-outlined text-[24px]">volunteer_activism</span>
      <p class="text-[10px] font-medium uppercase tracking-widest">Donate</p>
    </a>
  </footer>
</div>
`;

export function ProjectBhagirathaMobilePage() {
  return <StaticMarkupPage html={html} />;
}
