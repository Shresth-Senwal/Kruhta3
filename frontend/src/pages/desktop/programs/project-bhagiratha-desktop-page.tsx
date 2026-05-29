/**
 * @file project-bhagiratha-desktop-page.tsx
 * @description Detailed profile for the Bhagiratha water conservation project.
 * @module frontend/src/pages/desktop/programs
 */

import { StaticMarkupPage } from "../../../components/ui/static-markup-page";
import { buildDesktopHeaderMarkup } from "../../../components/layout/site-navigation";

const html = String.raw`
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
  ${buildDesktopHeaderMarkup("/programs/bhagiratha")}

  <main class="flex-1">
    <!-- Hero Section -->
    <section class="relative bg-slate-900 text-white py-28 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <img class="w-full h-full object-cover" src="/projects/Bhagiratha.webp" alt="Bhagiratha water project" />
      </div>
      <!-- Glow Blurs -->
      <div class="absolute -top-12 -left-12 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-md border border-primary/10">
          <span class="material-symbols-outlined text-lg text-accent animate-pulse">waves</span> Project Bhagiratha
        </div>
        <h1 class="text-5xl lg:text-7xl font-editorial leading-tight mb-6">
          Project <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Bhagiratha</span>
        </h1>
        <p class="text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed italic">"Bringing the Heavens to the Earth"</p>
      </div>
    </section>

    <!-- Heritage Section -->
    <section class="py-24 max-w-7xl mx-auto px-6 relative">
      <!-- Glow Blurs -->
      <div class="absolute top-1/2 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl font-editorial text-slate-900 leading-tight">
            Heritage in Peril: <span class="text-primary italic">The Konaseema Water Crisis</span>
          </h2>
          <div class="prose prose-slate lg:prose-lg text-slate-600 space-y-4">
            <p>Konaseema's water is our heritage, but its future is at risk. Over the last 30 years, our groundwater has plummeted by 15 feet. As concrete roads cover our soil, the rain has no way to sink in; it simply flows into the sea, wasted.</p>
            <p>Inspired by King Bhagiratha’s relentless spirit, Krutha Foundation has launched <strong class="text-primary">Project Bhagiratha</strong>. Our mission is to create a path for the rain to return to the heart of the earth.</p>
          </div>
        </div>
        
        <div class="bg-white p-12 rounded-[2rem] border border-primary/10 shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500">
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
          <div class="flex items-center gap-4 mb-8">
            <div class="size-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span class="material-symbols-outlined text-4xl">local_drink</span>
            </div>
            <h3 class="text-2xl font-editorial text-slate-900 font-bold">Restoring the Balance</h3>
          </div>
          <p class="text-xl text-slate-700 leading-relaxed italic font-display">&quot;Protecting our water is our highest Dharma. By catching every drop, we are honoring the earth that sustains us.&quot;</p>
        </div>
      </div>
    </section>

    <!-- The Roadmap Section -->
    <section class="py-24 bg-white/60 border-y border-primary/10 relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span class="text-accent font-bold tracking-widest text-sm uppercase">Roadmap</span>
          <h2 class="text-4xl font-editorial text-slate-900 mb-4">The Bhagiratha Roadmap</h2>
          <p class="text-slate-500 text-lg">A stepped approach to securing our village's water future</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          
          <!-- Phase 1 -->
          <div class="p-10 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 group">
            <div class="text-5xl font-black text-primary/10 group-hover:text-primary mb-6 transition-colors font-editorial">01</div>
            <h4 class="font-editorial text-2xl font-bold mb-4 text-slate-900">Current Progress</h4>
            <p class="text-slate-600 leading-relaxed">Built our first 4 Rainwater Harvesting Pits (RHPs). ₹3 Lakhs invested to start the recharge.</p>
          </div>

          <!-- Phase 2 -->
          <div class="p-10 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 group">
            <div class="text-5xl font-black text-primary/10 group-hover:text-primary mb-6 transition-colors font-editorial">02</div>
            <h4 class="font-editorial text-2xl font-bold mb-4 text-slate-900">3-Year Goal</h4>
            <p class="text-slate-600 leading-relaxed">Construct 40 RHPs across the village. These will act as the primary gateways for aquifer recharge.</p>
          </div>

          <!-- Phase 3 -->
          <div class="p-10 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 group">
            <div class="text-5xl font-black text-primary/10 group-hover:text-primary mb-6 transition-colors font-editorial">03</div>
            <h4 class="font-editorial text-2xl font-bold mb-4 text-slate-900">10-Year Vision</h4>
            <p class="text-slate-600 leading-relaxed">Raise the water table by 10 feet. Securing Konaseema against saltwater intrusion and drought.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Support Section -->
    <section class="py-28 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-primary/10">
      <div class="absolute -right-20 -top-20 size-96 rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute -left-20 -bottom-20 size-96 rounded-full bg-accent/15 blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10 space-y-6">
        <h2 class="text-4xl lg:text-5xl font-editorial mb-8 leading-tight">
          Join this <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Bhagiratha Prayatna</span>
        </h2>
        <p class="text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed">
          Help us ensure that Konaseema remains the lush, green paradise it was meant to be—for us and for the generations to come.
        </p>
        <div class="flex gap-6">
          <a class="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20" href="/contact">Support a Water Pit</a>
          <a class="border border-primary/20 text-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all hover:bg-white/5" href="/our-work">Learn More</a>
        </div>
      </div>
      <div class="absolute right-0 bottom-0 translate-y-1/3 translate-x-1/4 opacity-10 pointer-events-none">
        <span class="material-symbols-outlined text-[35rem] text-primary">water_drop</span>
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

export function ProjectBhagirathaDesktopPage() {
  return <StaticMarkupPage html={html} />;
}

