/**
 * @file project-vasundhara-desktop-page.tsx
 * @description Detailed profile for the Vasundhara waste management project.
 * @module frontend/src/pages/desktop/programs
 */

import { StaticMarkupPage } from "../../../components/ui/static-markup-page";
import { buildDesktopHeaderMarkup } from "../../../components/layout/site-navigation";

const html = String.raw`
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
  ${buildDesktopHeaderMarkup("/programs/vasundhara")}

  <main class="flex-1">
    <!-- Hero Section -->
    <section class="relative bg-slate-900 text-white py-28 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <img class="w-full h-full object-cover" src="/projects/Vasundhara.webp" alt="Vasundhara waste project" />
      </div>
      <!-- Glow Blurs -->
      <div class="absolute -top-12 -left-12 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-md border border-primary/10">
          <span class="material-symbols-outlined text-lg text-accent animate-pulse">eco</span> Project Vasundhara
        </div>
        <h1 class="text-5xl lg:text-7xl font-editorial leading-tight mb-6">
          Project <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Vasundhara</span>
        </h1>
        <p class="text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed italic">"Honouring the Wealth of Our Earth"</p>
      </div>
    </section>

    <!-- Treasures Section -->
    <section class="py-24 max-w-7xl mx-auto px-6 relative">
      <!-- Glow Blurs -->
      <div class="absolute top-1/2 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl font-editorial text-slate-900 leading-tight">
            Vasundhara: <span class="text-primary italic">The Holder of Treasures</span>
          </h2>
          <div class="prose prose-slate lg:prose-lg text-slate-600 space-y-4">
            <p>In our scriptures, the Earth is called <strong>Vasundhara</strong>—the "Holder of Treasures." From the grain that feeds us to the water that sustains us, the soil is our greatest bank. But today, this treasure is being buried under piles of unsegregated waste.</p>
            <p>Krutha Foundation believes that cleanliness is the highest form of respect we can show to our land. Through <strong class="text-primary">Project Vasundhara</strong>, we are transforming how our village handles its waste, turning a mounting problem into a sustainable solution.</p>
          </div>
        </div>
        
        <div class="bg-white p-12 rounded-[2rem] border border-primary/10 shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500">
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
          <div class="flex items-center gap-4 mb-8">
            <div class="size-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span class="material-symbols-outlined text-4xl">recycling</span>
            </div>
            <h3 class="text-2xl font-editorial text-slate-900 font-bold">Stop Mixing Waste</h3>
          </div>
          <p class="text-xl text-slate-700 leading-relaxed italic font-display">&quot;The biggest enemy of a clean village isn't 'trash'—it is mixing. When organic waste and plastic are thrown together, they create toxic landfills.&quot;</p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white/60 border-y border-primary/10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          
          <div class="p-8 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500">
            <h4 class="text-5xl font-editorial font-black text-primary mb-2">300</h4>
            <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Households Reached</p>
          </div>

          <div class="p-8 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500">
            <h4 class="text-5xl font-editorial font-black text-primary mb-2">600</h4>
            <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Specialized Bins Distributed</p>
          </div>

          <div class="p-8 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500">
            <h4 class="text-5xl font-editorial font-black text-primary mb-2">₹50K</h4>
            <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Initial Pilot Funding</p>
          </div>

          <div class="p-8 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500">
            <h4 class="text-5xl font-editorial font-black text-primary mb-2">100%</h4>
            <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Panchayat Partnership</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Waste Free Section -->
    <section class="py-24 relative overflow-hidden">
      <!-- Glow Blurs -->
      <div class="absolute top-1/2 -right-12 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16">
          
          <div class="space-y-8">
            <h2 class="text-3xl font-editorial font-bold text-slate-900">A Waste-Free Blueprint</h2>
            <div class="space-y-6">
              
              <div class="flex gap-6 items-start">
                <div class="size-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold shadow-md shadow-primary/20">1</div>
                <div>
                  <h5 class="font-editorial text-xl font-bold mb-1 text-slate-900">Twin-Bin System</h5>
                  <p class="text-slate-600">Empowering families to separate 'Wet' (Organic) and 'Dry' (Recyclable) waste at the source.</p>
                </div>
              </div>

              <div class="flex gap-6 items-start">
                <div class="size-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold shadow-md shadow-primary/20">2</div>
                <div>
                  <h5 class="font-editorial text-xl font-bold mb-1 text-slate-900">Vasundhara Rakshaks</h5>
                  <p class="text-slate-600">Volunteer leaders driving door-to-door awareness and community responsibility.</p>
                </div>
              </div>

              <div class="flex gap-6 items-start">
                <div class="size-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold shadow-md shadow-primary/20">3</div>
                <div>
                  <h5 class="font-editorial text-xl font-bold mb-1 text-slate-900">Closing the Loop</h5>
                  <p class="text-slate-600">Working hand-in-hand with local authorities to ensure regular, segregated collection.</p>
                </div>
              </div>

            </div>
          </div>

          <div class="bg-slate-900 p-12 rounded-[2.5rem] text-white relative flex flex-col justify-center border border-primary/10 shadow-2xl overflow-hidden">
            <div class="absolute -right-20 -top-20 size-80 rounded-full bg-primary/20 blur-3xl"></div>
            <h4 class="text-2xl font-editorial font-bold mb-6 text-accent italic">"A Waste-Free Konaseema"</h4>
            <p class="text-lg text-slate-300 leading-relaxed mb-8 relative z-10">Our success in initial wards is just the beginning. Our Resolve is strong. We aim to scale Project Vasundhara to every Ward and every household.</p>
            <a class="bg-primary text-white px-8 py-3 rounded-xl font-bold w-fit shadow-lg shadow-primary/25 hover:scale-105 transition-transform relative z-10" href="/contact">Support the Expansion</a>
          </div>

        </div>
      </div>
    </section>

    <!-- Support Section -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white text-center relative overflow-hidden border-t border-primary/10">
      <div class="absolute -right-20 -top-20 size-96 rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute -left-20 -bottom-20 size-96 rounded-full bg-accent/15 blur-3xl"></div>

      <div class="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
        <h2 class="text-4xl lg:text-5xl font-editorial mb-8 leading-tight">
          Don't just discard—<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Distinguish.</span>
        </h2>
        <p class="text-xl text-slate-300 mb-12 leading-relaxed">
          By supporting Project Vasundhara, you aren't just buying a bin; you are investing in a future where our village remains a "Holder of Treasures" for generations to come.
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <a class="bg-primary hover:opacity-90 text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20" href="/contact">Support the Project</a>
          <a class="border border-primary/20 text-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all hover:bg-white/5" href="/our-work">View Gallery</a>
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

export function ProjectVasundharaDesktopPage() {
  return <StaticMarkupPage html={html} />;
}

