/**
 * @file project-vasundhara-desktop-page.tsx
 * @description Detailed profile for the Vasundhara waste management project.
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
            <span class="material-symbols-outlined">delete_sweep</span>
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
        <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwEBaMUpFSfwMjakWg58U0mIxI15iudHFA58iYNPe-hRh1wU-Xytvhp6I_BVysBFwaW1ypiWj_H_SqzYRPhNWwzzU6zcwHzkVoUAg8Tkdcr5b1e5osA1Z4yPgfR-no0S6QigAhiindjyVhT-oNh0M-G7ohZYPNgSyfUSzN7I_3MB9IbnJ2i6EgKgwAbCHRXiVhPTK4jGmvnh3SiBLldSuTUlucZ7w09Vr-8K_gz5ft46SX_1K-RXFkE3s5sQopxkTx-MTJGisttjAx" alt="Vasundhara waste project" />
      </div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
          <span class="material-symbols-outlined text-lg">eco</span> Waste Management
        </div>
        <h1 class="text-5xl lg:text-7xl font-editorial leading-tight mb-6">Project Vasundhara</h1>
        <p class="text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed italic">"Honouring the Wealth of Our Earth"</p>
      </div>
    </section>

    <section class="py-24 max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-slate-900 leading-tight">Vasundhara: The Holder of Treasures</h2>
          <div class="prose prose-slate lg:prose-lg text-slate-600 space-y-4">
            <p>In our scriptures, the Earth is called <strong>Vasundhara</strong>—the "Holder of Treasures." From the grain that feeds us to the water that sustains us, the soil is our greatest bank. But today, this treasure is being buried under piles of unsegregated waste.</p>
            <p>Krutha Foundation believes that cleanliness is the highest form of respect we can show to our land. Through Project Vasundhara, we are transforming how our village handles its waste, turning a mounting problem into a sustainable solution.</p>
          </div>
        </div>
        <div class="bg-primary/5 p-12 rounded-3xl border border-primary/10">
          <div class="flex items-center gap-4 mb-8">
            <div class="size-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
              <span class="material-symbols-outlined text-4xl">recycling</span>
            </div>
            <h3 class="text-2xl font-bold">Stop Mixing Waste</h3>
          </div>
          <p class="text-xl text-slate-700 leading-relaxed italic">&quot;The biggest enemy of a clean village isn't 'trash'—it is mixing. When organic waste and plastic are thrown together, they create toxic landfills.&quot;</p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-4 gap-6 text-center">
          <div class="p-8 rounded-2xl bg-background-light border border-slate-100 shadow-sm">
            <h4 class="text-4xl font-black text-primary mb-2">300</h4>
            <p class="text-sm font-bold text-slate-500 uppercase tracking-wider">Households Reached</p>
          </div>
          <div class="p-8 rounded-2xl bg-background-light border border-slate-100 shadow-sm">
            <h4 class="text-4xl font-black text-primary mb-2">600</h4>
            <p class="text-sm font-bold text-slate-500 uppercase tracking-wider">Specialized Bins Distributed</p>
          </div>
          <div class="p-8 rounded-2xl bg-background-light border border-slate-100 shadow-sm">
            <h4 class="text-4xl font-black text-primary mb-2">₹50K</h4>
            <p class="text-sm font-bold text-slate-500 uppercase tracking-wider">Initial Pilot Funding</p>
          </div>
          <div class="p-8 rounded-2xl bg-background-light border border-slate-100 shadow-sm">
            <h4 class="text-4xl font-black text-primary mb-2">100%</h4>
            <p class="text-sm font-bold text-slate-500 uppercase tracking-wider">Panchayat Partnership</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-primary/5">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16">
          <div class="space-y-8">
            <h2 class="text-3xl font-bold">A Waste-Free Blueprint</h2>
            <div class="space-y-6">
              <div class="flex gap-6 items-start">
                <div class="size-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h5 class="font-bold text-lg mb-1">Twin-Bin System</h5>
                  <p class="text-slate-600">Empowering families to separate 'Wet' (Organic) and 'Dry' (Recyclable) waste at the source.</p>
                </div>
              </div>
              <div class="flex gap-6 items-start">
                <div class="size-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h5 class="font-bold text-lg mb-1">Vasundhara Rakshaks</h5>
                  <p class="text-slate-600">Volunteer leaders driving door-to-door awareness and community responsibility.</p>
                </div>
              </div>
              <div class="flex gap-6 items-start">
                <div class="size-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h5 class="font-bold text-lg mb-1">Closing the Loop</h5>
                  <p class="text-slate-600">Working hand-in-hand with local authorities to ensure regular, segregated collection.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-forest p-12 rounded-3xl text-white relative flex flex-col justify-center">
            <h4 class="text-2xl font-bold mb-6 italic">"A Waste-Free Konaseema"</h4>
            <p class="text-lg text-white/80 leading-relaxed mb-8">Our success in initial wards is just the beginning. OurResolve is strong. We aim to scale Project Vasundhara to every Ward and every household.</p>
            <a class="bg-primary text-white px-8 py-3 rounded-xl font-bold w-fit shadow-lg shadow-black/20" href="/contact">Support the Expansion</a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 text-center max-w-4xl mx-auto px-6">
       <h2 class="text-4xl font-editorial mb-8 italic">Don't just discard—Distinguish.</h2>
       <p class="text-xl text-slate-600 mb-12">By supporting Project Vasundhara, you aren't just buying a bin; you are investing in a future where our village remains a "Holder of Treasures" for generations to come.</p>
       <div class="flex flex-wrap justify-center gap-6">
          <a class="bg-forest text-white px-10 py-4 rounded-xl font-bold text-lg" href="/contact">Support the Project</a>
          <a class="border border-forest/20 text-forest px-10 py-4 rounded-xl font-bold text-lg" href="/our-work">View Gallery</a>
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

export function ProjectVasundharaDesktopPage() {
  return <StaticMarkupPage html={html} />;
}
