/**
 * @file project-vasundhara-mobile-page.tsx
 * @description Mobile version of the Project Vasundhara profile.
 * @module frontend/src/pages/mobile/programs
 */

import { StaticMarkupPage } from "../../../components/ui/static-markup-page";

const html = String.raw`
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased">
  <header class="sticky top-0 z-50 flex items-center bg-background-light/80 backdrop-blur-md px-4 py-4 justify-between border-b border-primary/10">
    <a class="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer" href="/m/our-work">
      <span class="material-symbols-outlined">arrow_back</span>
    </a>
    <h2 class="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Project Vasundhara</h2>
    <div class="flex w-10 items-center justify-end"></div>
  </header>

  <main class="flex-1">
    <section class="relative bg-slate-900 px-4 py-16 text-white text-center">
      <div class="absolute inset-0 opacity-30">
        <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwEBaMUpFSfwMjakWg58U0mIxI15iudHFA58iYNPe-hRh1wU-Xytvhp6I_BVysBFwaW1ypiWj_H_SqzYRPhNWwzzU6zcwHzkVoUAg8Tkdcr5b1e5osA1Z4yPgfR-no0S6QigAhiindjyVhT-oNh0M-G7ohZYPNgSyfUSzN7I_3MB9IbnJ2i6EgKgwAbCHRXiVhPTK4jGmvnh3SiBLldSuTUlucZ7w09Vr-8K_gz5ft46SX_1K-RXFkE3s5sQopxkTx-MTJGisttjAx" alt="Waste project background" />
      </div>
      <div class="relative z-10">
        <h1 class="text-3xl font-black mb-4 uppercase">Vasundhara</h1>
        <p class="text-[10px] opacity-80 uppercase tracking-widest font-bold mb-6">Cleaning Konaseema's Soil</p>
        <p class="text-lg italic font-medium max-w-xs mx-auto text-primary">"Honouring the Wealth of Our Earth"</p>
      </div>
    </section>

    <section class="px-6 py-12 space-y-6">
       <h3 class="text-2xl font-bold">The Science of Segregation</h3>
       <p class="text-slate-600 leading-relaxed text-sm">Mixing is the enemy. By separating wet and dry at source, we turn waste into wisdom.</p>
       <div class="grid grid-cols-2 gap-4 mt-8">
          <div class="p-4 bg-white rounded-xl border border-slate-100 text-center">
             <p class="text-xl font-black text-primary">300</p>
             <p class="text-[10px] uppercase font-bold text-slate-500">Homes</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-100 text-center">
             <p class="text-xl font-black text-primary">600</p>
             <p class="text-[10px] uppercase font-bold text-slate-500">Bins</p>
          </div>
       </div>
    </section>

    <section class="px-6 py-12 bg-white space-y-8">
       <h3 class="text-2xl font-bold text-center">Blueprint</h3>
       <div class="space-y-4">
          <div class="p-4 rounded-xl bg-background-light border border-slate-100 flex gap-4">
             <div class="text-primary font-bold">1</div>
             <p class="text-sm"><strong>Twin-Bin System</strong>: Households separate Wet/Dry waste.</p>
          </div>
          <div class="p-4 rounded-xl bg-background-light border border-slate-100 flex gap-4">
             <div class="text-primary font-bold">2</div>
             <p class="text-sm"><strong>Vasundhara Rakshaks</strong>: Awareness and Protection leaders.</p>
          </div>
          <div class="p-4 rounded-xl bg-background-light border border-slate-100 flex gap-4">
             <div class="text-primary font-bold">3</div>
             <p class="text-sm"><strong>Loop Closed</strong>: Regular, segregated collection by Panchayat.</p>
          </div>
       </div>
    </section>

    <section class="px-6 py-16 bg-forest text-white text-center">
       <h3 class="text-2xl font-bold mb-6">Invest in Purity</h3>
       <p class="text-slate-400 text-sm mb-10 leading-relaxed">Join us in transforming our village into a waste-free haven.</p>
       <a class="block w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all" href="/m/contact">Join Project Vasundhara</a>
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

export function ProjectVasundharaMobilePage() {
  return <StaticMarkupPage html={html} />;
}
