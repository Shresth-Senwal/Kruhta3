/**
 * @file project-samyamam-desktop-page.tsx
 * @description Detailed profile for the Samyamam zero-plastic initiative.
 * @module frontend/src/pages/desktop/programs
 */

import { StaticMarkupPage } from "../../../components/ui/static-markup-page";

const html = String.raw`
<div class="bg-background-light font-display text-slate-900">
  <header class="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a href="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
            <span class="material-symbols-outlined">shopping_bag</span>
          </div>
          <h2 class="text-xl font-bold tracking-tight text-primary">Krutha Foundation</h2>
        </a>
      </div>
      <nav class="hidden lg:flex items-center gap-8">
        <a class="text-sm font-medium hover:text-primary transition-colors" href="/about">About Us</a>
        <a class="text-sm font-bold text-primary" href="/our-work">Our Work</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="/press">Transparency</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="/contact">Donate Now</a>
      </nav>
      <a class="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-md shadow-primary/20" href="/contact">Get Involved</a>
    </div>
  </header>

  <main>
    <section class="relative bg-slate-900 text-white py-24 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwEBaMUpFSfwMjakWg58U0mIxI15iudHFA58iYNPe-hRh1wU-Xytvhp6I_BVysBFwaW1ypiWj_H_SqzYRPhNWwzzU6zcwHzkVoUAg8Tkdcr5b1e5osA1Z4yPgfR-no0S6QigAhiindjyVhT-oNh0M-G7ohZYPNgSyfUSzN7I_3MB9IbnJ2i6EgKgwAbCHRXiVhPTK4jGmvnh3SiBLldSuTUlucZ7w09Vr-8K_gz5ft46SX_1K-RXFkE3s5sQopxkTx-MTJGisttjAx" alt="Samyamam zero plastic" />
      </div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
          <span class="material-symbols-outlined text-lg">do_not_disturb_on</span> Zero Plastic
        </div>
        <h1 class="text-5xl lg:text-7xl font-editorial leading-tight mb-6">Project Samyamam</h1>
        <p class="text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed italic">"Responsible Living for a Sustainable Village"</p>
      </div>
    </section>

    <section class="py-24 max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-slate-900 leading-tight">Shared Responsibility, Conscious Living</h2>
          <div class="prose prose-slate lg:prose-lg text-slate-600 space-y-4">
            <p><strong>SAMYAMAM</strong> is the belief that true village transformation begins with conscious self-restraint. It recognizes that environmental damage is not caused by lack of resources, but by excess and convenience-driven habits.</p>
            <p>SAMYAMAM inspires families, traders, and institutions to pause, choose wisely, and act with accountability toward the land and water they depend on.</p>
          </div>
        </div>
        <div class="bg-primary/5 p-12 rounded-3xl border border-primary/10 relative">
           <h4 class="text-2xl font-bold mb-6 italic">Enforcement with Purpose</h4>
           <p class="text-slate-700 leading-relaxed mb-8">Partnering with the Panchayat, we’ve issued "Stop Usage" notices to all <strong>80+ commercial establishments</strong>, moving from suggestion to systemic change.</p>
           <div class="flex items-center gap-3 text-primary font-bold">
              <span class="material-symbols-outlined">check_circle</span> 80+ Commercial Shops Notified
           </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">The Cotton Bag Revolution</h2>
          <p class="text-slate-500">Injecting sustainability into the local economy</p>
        </div>
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="bg-background-light p-10 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
             <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <span class="material-symbols-outlined text-4xl">inventory_2</span>
             </div>
             <h4 class="text-2xl font-bold mb-4">2,000 Bags</h4>
             <p class="text-slate-600">Reusable cotton bags injected into the village to replace single-use plastic forever.</p>
          </div>
          <div class="bg-background-light p-10 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
             <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <span class="material-symbols-outlined text-4xl">published_with_changes</span>
             </div>
             <h4 class="text-2xl font-bold mb-4">Borrow & Return</h4>
             <p class="text-slate-600">Pick up at any shop, use, and drop back. A circular system that removes the "forgetting" excuse.</p>
          </div>
          <div class="bg-background-light p-10 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
             <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <span class="material-symbols-outlined text-4xl">eco</span>
             </div>
             <h4 class="text-2xl font-bold mb-4">Tradition Restored</h4>
             <p class="text-slate-600">Leading local eateries back to natural Banana Leaves—nature's original biodegradable plate.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-forest text-white">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-4xl lg:text-5xl font-editorial mb-8 italic">5 Days vs 500 Years</h2>
        <p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">Plastic lasts for 500 years; a banana leaf lasts for 5 days. Which one do you want to leave for your grandchildren?</p>
        <div class="flex justify-center gap-6">
           <a class="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg" href="/contact">Support the Revolution</a>
           <a class="border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10" href="/our-work">Learn More</a>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 text-center">
         <h2 class="text-3xl font-bold mb-12">Leave a Legacy, Be the Change.</h2>
         <div class="p-8 border-forest border bg-forest/5 rounded-3xl max-w-3xl mx-auto">
            <p class="text-xl text-slate-700 font-medium italic italic leading-relaxed">"We aren't just cleaning a village; we are reviving a culture of respect for the Earth. Help us weave a future where our water is pure and our soil is rich."</p>
         </div>
      </div>
    </section>
  </main>

  <footer class="bg-forest text-white/70 py-16 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <div class="flex items-center justify-center gap-3 text-white mb-8">
        <div class="w-8 h-8 bg-white/20 rounded flex items-center justify-center backdrop-blur-sm"><span class="material-symbols-outlined text-sm">eco</span></div>
        <span class="font-bold text-lg text-white">Krutha Foundation</span>
      </div>
      <p class="text-sm max-w-xl mx-auto leading-relaxed mb-8 text-white/60">Empowering the architects of tomorrow. Dedicated to rural student transformation and professional excellence.</p>
      <div class="flex justify-center gap-8 text-xs font-bold uppercase tracking-widest">
        <a class="hover:text-white transition-colors" href="/about">About</a>
        <a class="hover:text-white transition-colors" href="/our-work">Work</a>
        <a class="hover:text-white transition-colors" href="/press">Press</a>
        <a class="hover:text-white transition-colors" href="/contact">Contact</a>
      </div>
      <p class="mt-8 text-[10px] opacity-40">&copy; 2024 Krutha Foundation. All rights reserved.</p>
    </div>
  </footer>
</div>
`;

export function ProjectSamyamamDesktopPage() {
  return <StaticMarkupPage html={html} />;
}
