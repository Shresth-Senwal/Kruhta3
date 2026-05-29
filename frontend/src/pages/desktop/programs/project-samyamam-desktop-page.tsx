/**
 * @file project-samyamam-desktop-page.tsx
 * @description Detailed profile for the Samyamam zero-plastic initiative.
 * @module frontend/src/pages/desktop/programs
 */

import { StaticMarkupPage } from "../../../components/ui/static-markup-page";
import { buildDesktopHeaderMarkup } from "../../../components/layout/site-navigation";

const html = String.raw`
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
  ${buildDesktopHeaderMarkup("/programs/samyamam")}

  <main class="flex-1">
    <!-- Hero Section -->
    <section class="relative bg-slate-900 text-white py-28 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <img class="w-full h-full object-cover" src="/projects/Samyamam.webp" alt="Samyamam zero plastic" />
      </div>
      <!-- Glow Blurs -->
      <div class="absolute -top-12 -left-12 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-md border border-primary/10">
          <span class="material-symbols-outlined text-lg text-accent animate-pulse">do_not_disturb_on</span> Project Samyamam
        </div>
        <h1 class="text-5xl lg:text-7xl font-editorial leading-tight mb-6">
          Project <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Samyamam</span>
        </h1>
        <p class="text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed italic">"Responsible Living for a Sustainable Village"</p>
      </div>
    </section>

    <!-- Responsibility Section -->
    <section class="py-24 max-w-7xl mx-auto px-6 relative">
      <!-- Glow Blurs -->
      <div class="absolute top-1/2 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl font-editorial text-slate-900 leading-tight">
            Shared Responsibility, <span class="text-primary italic">Conscious Living</span>
          </h2>
          <div class="prose prose-slate lg:prose-lg text-slate-600 space-y-4">
            <p><strong>SAMYAMAM</strong> is the belief that true village transformation begins with conscious self-restraint. It recognizes that environmental damage is not caused by lack of resources, but by excess and convenience-driven habits.</p>
            <p>SAMYAMAM inspires families, traders, and institutions to pause, choose wisely, and act with accountability toward the land and water they depend on.</p>
          </div>
        </div>
        
        <div class="bg-white p-12 rounded-[2rem] border border-primary/10 shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500">
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
          <div class="flex items-center gap-4 mb-8">
            <div class="size-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span class="material-symbols-outlined text-4xl">storefront</span>
            </div>
            <h3 class="text-2xl font-editorial text-slate-900 font-bold">Enforcement with Purpose</h3>
          </div>
          <p class="text-slate-700 leading-relaxed mb-8 italic">Partnering with the Panchayat, we’ve issued "Stop Usage" notices to all <strong class="text-primary">80+ commercial establishments</strong>, moving from suggestion to systemic change.</p>
          <div class="flex items-center gap-3 text-primary font-bold">
            <span class="material-symbols-outlined">check_circle</span> 80+ Commercial Shops Notified
          </div>
        </div>
      </div>
    </section>

    <!-- The Cotton Bag Revolution -->
    <section class="py-24 bg-white/60 border-y border-primary/10 relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span class="text-accent font-bold tracking-widest text-sm uppercase">Revolution</span>
          <h2 class="text-4xl font-editorial text-slate-900 mb-4">The Cotton Bag Revolution</h2>
          <p class="text-slate-500 text-lg">Injecting sustainability into the local economy</p>
        </div>
        <div class="grid lg:grid-cols-3 gap-8">
          
          <div class="p-10 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center">
             <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 shadow-inner">
                <span class="material-symbols-outlined text-4xl">inventory_2</span>
             </div>
             <h4 class="font-editorial text-2xl font-bold mb-4 text-slate-900">2,000 Bags</h4>
             <p class="text-slate-600 leading-relaxed">Reusable cotton bags injected into the village to replace single-use plastic forever.</p>
          </div>

          <div class="p-10 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center">
             <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 shadow-inner">
                <span class="material-symbols-outlined text-4xl">published_with_changes</span>
             </div>
             <h4 class="font-editorial text-2xl font-bold mb-4 text-slate-900">Borrow & Return</h4>
             <p class="text-slate-600 leading-relaxed">Pick up at any shop, use, and drop back. A circular system that removes the "forgetting" excuse.</p>
          </div>

          <div class="p-10 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center">
             <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 shadow-inner">
                <span class="material-symbols-outlined text-4xl">eco</span>
             </div>
             <h4 class="font-editorial text-2xl font-bold mb-4 text-slate-900">Tradition Restored</h4>
             <p class="text-slate-600 leading-relaxed">Leading local eateries back to natural Banana Leaves—nature's original biodegradable plate.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Action Section -->
    <section class="py-24 relative overflow-hidden bg-slate-900 text-white border-t border-primary/10">
      <div class="absolute -right-20 -top-20 size-96 rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute -left-20 -bottom-20 size-96 rounded-full bg-accent/15 blur-3xl"></div>

      <div class="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
        <h2 class="text-4xl lg:text-5xl font-editorial mb-8 leading-tight">
          5 Days vs <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">500 Years</span>
        </h2>
        <p class="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Plastic lasts for 500 years; a banana leaf lasts for 5 days. Which one do you want to leave for your grandchildren?
        </p>
        <div class="flex flex-wrap justify-center gap-6">
           <a class="bg-primary hover:opacity-90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-primary/20" href="/contact">Support the Revolution</a>
           <a class="border border-primary/20 hover:bg-white/5 text-primary px-10 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105" href="/our-work">Learn More</a>
        </div>
      </div>
    </section>

    <!-- Legacy Section -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6 text-center">
         <h2 class="text-3xl font-editorial font-bold mb-12 text-slate-900">Leave a Legacy, Be the Change.</h2>
         <div class="p-12 border border-primary/20 bg-primary/5 rounded-[2rem] max-w-3xl mx-auto relative overflow-hidden">
            <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <p class="text-xl text-slate-700 font-medium italic leading-relaxed">"We aren't just cleaning a village; we are reviving a culture of respect for the Earth. Help us weave a future where our water is pure and our soil is rich."</p>
         </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-400 py-20 border-t border-white/5 font-display">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div class="space-y-6">
          <div class="flex items-center gap-3 text-white"><div class="w-8 h-8 bg-primary rounded flex items-center justify-center"><span class="material-symbols-outlined text-sm">eco</span></div><span class="font-bold text-lg">Krutha Foundation</span></div>
          <p class="text-sm leading-relaxed">Dedicated to creating self-sustaining rural ecosystems that thrive on the principles of equity, sustainability, and traditional wisdom.</p>
        </div>
        <div class="space-y-6"><h4 class="text-white font-bold uppercase tracking-widest text-xs">Quick Links</h4><ul class="space-y-4 text-sm"><li><a class="hover:text-primary transition-colors" href="/about">Our History</a></li><li><a class="hover:text-primary transition-colors" href="/our-work">Project Portfolio</a></li><li><a class="hover:text-primary transition-colors" href="/press">Annual Reports</a></li><li><a class="hover:text-primary transition-colors" href="/contact">Volunteer With Us</a></li></ul></div>
        <div class="space-y-6"><h4 class="text-white font-bold uppercase tracking-widest text-xs">Contact Us</h4><div class="space-y-4 text-sm"><p class="flex gap-3"><span class="material-symbols-outlined text-primary text-sm">location_on</span>Vadapalem, East Godavari District, Andhra Pradesh, India</p><p class="flex gap-3"><span class="material-symbols-outlined text-primary text-sm">mail</span>info@kruthafoundation.org</p></div></div>
        <div class="space-y-6"><h4 class="text-white font-bold uppercase tracking-widest text-xs">Our Partners</h4><div class="flex flex-wrap gap-4"><div class="h-10 px-4 bg-white/5 rounded flex items-center justify-center border border-white/10"><span class="font-bold text-white text-xs">PCT</span></div><div class="h-10 px-4 bg-white/5 rounded flex items-center justify-center border border-white/10"><span class="font-bold text-white text-xs">APTA</span></div></div></div>
      </div>
      <div class="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"><p>(c) 2024 Krutha Foundation. All rights reserved.</p><div class="flex gap-6"><a class="hover:text-white" href="/contact">Privacy Policy</a><a class="hover:text-white" href="/contact">Terms of Service</a></div></div>
    </div>
  </footer>
</div>
`;

export function ProjectSamyamamDesktopPage() {
  return <StaticMarkupPage html={html} />;
}
