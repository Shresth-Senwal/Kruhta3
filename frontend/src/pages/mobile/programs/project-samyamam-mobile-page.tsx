/**
 * @file project-samyamam-mobile-page.tsx
 * @description Mobile version of the Samyamam zero-plastic initiative.
 * @module frontend/src/pages/mobile/programs
 */

import { StaticMarkupPage } from "../../../components/ui/static-markup-page";

const html = String.raw`
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased">
  <header class="sticky top-0 z-50 flex items-center bg-background-light/80 backdrop-blur-md px-4 py-4 justify-between border-b border-primary/10">
    <a class="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer" href="/m/our-work">
      <span class="material-symbols-outlined">arrow_back</span>
    </a>
    <h2 class="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Project Samyamam</h2>
    <div class="flex w-10 items-center justify-end"></div>
  </header>

  <main class="flex-1">
    <section class="relative bg-slate-900 px-4 py-16 text-white text-center">
      <div class="absolute inset-0 opacity-30">
        <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwEBaMUpFSfwMjakWg58U0mIxI15iudHFA58iYNPe-hRh1wU-Xytvhp6I_BVysBFwaW1ypiWj_H_SqzYRPhNWwzzU6zcwHzkVoUAg8Tkdcr5b1e5osA1Z4yPgfR-no0S6QigAhiindjyVhT-oNh0M-G7ohZYPNgSyfUSzN7I_3MB9IbnJ2i6EgKgwAbCHRXiVhPTK4jGmvnh3SiBLldSuTUlucZ7w09Vr-8K_gz5ft46SX_1K-RXFkE3s5sQopxkTx-MTJGisttjAx" alt="Samyamam zero plastic" />
      </div>
      <div class="relative z-10">
        <h1 class="text-3xl font-black mb-4 uppercase">SAMYAMAM</h1>
        <p class="text-[10px] opacity-80 uppercase tracking-widest font-bold mb-6">Zero Plastic Revolution</p>
        <p class="text-lg italic font-medium max-w-xs mx-auto text-primary">"Responsible Living for a Sustainable Village"</p>
      </div>
    </section>

    <section class="px-6 py-12 space-y-6">
       <h3 class="text-2xl font-bold">Shared Accountability</h3>
       <p class="text-slate-600 leading-relaxed text-sm">Environmental damage is caused by convenience habits. Through SAMYAMAM, we inspire accountability toward land and water.</p>
       <div class="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-center gap-4">
          <div class="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
             <span class="material-symbols-outlined text-3xl">shopping_bag</span>
          </div>
          <p class="text-sm font-bold">2,000 Reusable Cotton Bags Injected.</p>
       </div>
    </section>

    <section class="px-6 py-12 bg-white space-y-8 text-center border-y border-slate-100">
       <h3 class="text-2xl font-bold">Borrow & Return</h3>
       <p class="text-slate-600 text-sm italic">"Removing the excuse of forgetting a bag."</p>
       <div class="grid grid-cols-1 gap-2 text-left">
          <div class="p-3 bg-background-light rounded-lg border border-slate-100 flex items-center gap-3">
             <span class="material-symbols-outlined text-primary">add_shopping_cart</span>
             <p class="text-xs font-medium">Pick up at any shop.</p>
          </div>
          <div class="p-3 bg-background-light rounded-lg border border-slate-100 flex items-center gap-3">
             <span class="material-symbols-outlined text-primary">home_repair_service</span>
             <p class="text-xs font-medium">Use and carry home.</p>
          </div>
          <div class="p-3 bg-background-light rounded-lg border border-slate-100 flex items-center gap-3">
             <span class="material-symbols-outlined text-primary">replay</span>
             <p class="text-xs font-medium">Return bag to any shop.</p>
          </div>
       </div>
    </section>

    <section class="px-6 py-16 bg-forest text-white text-center">
       <h3 class="text-2xl font-bold mb-6 italic">5 Days vs 500 Years</h3>
       <p class="text-slate-400 text-sm mb-10 leading-relaxed">A banana leaf lasts 5 days. Plastic lasts 500 years. Choose your legacy.</p>
       <a class="block w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all" href="/m/contact">Join Samyamam</a>
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

export function ProjectSamyamamMobilePage() {
  return <StaticMarkupPage html={html} />;
}
