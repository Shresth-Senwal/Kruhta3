/**
 * @file project-bhagiratha-desktop-page.tsx
 * @description Detailed profile for the Bhagiratha water conservation project.
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
            <span class="material-symbols-outlined">water_drop</span>
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
        <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBb-tKaKm525G-NCxAzRuZsXvkjDAqeWZwa6AQgyeZqVT1WCLxWfXS1SHA7TnEv9xJPnlHZPXWmBdWia97g2lckH4MlkWRmUw3mwkPCES7AeSajfGu7w02Ma3CH31SD4wJlu5vdMV_IuND3iCg-G0r9wblYYBGtbyskrs86FMpIyI5RD0yWaO1VRCl8f6Z2eQ2ES44nc866LMxip79B4GbJpBD9pB4zIDkUwYimSA0s8dLnXEx3KsSQ7jVfogAKU5KhxXeOHhJoie6" alt="Bhagiratha water project" />
      </div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
          <span class="material-symbols-outlined text-lg">waves</span> Water Conservation
        </div>
        <h1 class="text-5xl lg:text-7xl font-editorial leading-tight mb-6">Project Bhagiratha</h1>
        <p class="text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed italic">"Bringing the Heavens to the Earth"</p>
      </div>
    </section>

    <section class="py-24 max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-slate-900 leading-tight">Heritage in Peril: The Konaseema Water Crisis</h2>
          <div class="prose prose-slate lg:prose-lg text-slate-600 space-y-4">
            <p>Konaseema's water is our heritage, but its future is at risk. Over the last 30 years, our groundwater has plummeted by 15 feet. As concrete roads cover our soil, the rain has no way to sink in; it simply flows into the sea, wasted.</p>
            <p>Inspired by King Bhagiratha’s relentless spirit, Krutha Foundation has launched Project Bhagiratha. Our mission is to create a path for the rain to return to the heart of the earth.</p>
          </div>
        </div>
        <div class="bg-primary/5 p-12 rounded-3xl border border-primary/10">
          <div class="flex items-center gap-4 mb-8">
            <div class="size-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
              <span class="material-symbols-outlined text-4xl">local_drink</span>
            </div>
            <h3 class="text-2xl font-bold">Resoring the Balance</h3>
          </div>
          <p class="text-xl text-slate-700 leading-relaxed italic">&quot;Protecting our water is our highest Dharma. By catching every drop, we are honoring the earth that sustains us.&quot;</p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">The Bhagiratha Roadmap</h2>
          <p class="text-slate-500">A stepped approach to securing our village's water future</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-10 rounded-3xl bg-background-light border border-slate-100 hover:border-primary transition-all group">
            <div class="text-5xl font-black text-primary/10 group-hover:text-primary mb-6 transition-colors font-editorial">01</div>
            <h4 class="font-bold text-xl mb-4 text-primary">Current Progress</h4>
            <p class="text-slate-600 leading-relaxed">Built our first 4 Rainwater Harvesting Pits (RHPs). ₹3 Lakhs invested to start the recharge.</p>
          </div>
          <div class="p-10 rounded-3xl bg-background-light border border-slate-100 hover:border-primary transition-all group">
            <div class="text-5xl font-black text-primary/10 group-hover:text-primary mb-6 transition-colors font-editorial">02</div>
            <h4 class="font-bold text-xl mb-4 text-primary">3-Year Goal</h4>
            <p class="text-slate-600 leading-relaxed">Construct 40 RHPs across the village. These will act as the primary gateways for aquifer recharge.</p>
          </div>
          <div class="p-10 rounded-3xl bg-background-light border border-slate-100 hover:border-primary transition-all group">
            <div class="text-5xl font-black text-primary/10 group-hover:text-primary mb-6 transition-colors font-editorial">03</div>
            <h4 class="font-bold text-xl mb-4 text-primary">10-Year Vision</h4>
            <p class="text-slate-600 leading-relaxed">Raise the water table by 10 feet. Securing Konaseema against saltwater intrusion and drought.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-forest text-white overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <h2 class="text-4xl lg:text-5xl font-editorial mb-8 italic">Join this Bhagiratha Prayatna</h2>
        <p class="text-xl text-white/80 max-w-2xl mb-12">Help us ensure that Konaseema remains the lush, green paradise it was meant to be—for us and for the generations to come.</p>
        <div class="flex gap-6">
          <a class="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform" href="/contact">Support a Water Pit</a>
          <a class="border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors" href="/our-work">Learn More</a>
        </div>
      </div>
      <div class="absolute right-0 bottom-0 translate-y-1/2 translate-x-1/4 opacity-10">
        <span class="material-symbols-outlined text-[40rem]">water_drop</span>
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

export function ProjectBhagirathaDesktopPage() {
  return <StaticMarkupPage html={html} />;
}
