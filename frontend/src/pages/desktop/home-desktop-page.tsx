/**
 * @file home-desktop-page.tsx
 * @description Desktop home page rendered from the provided reference layout.
 * @module frontend/src/pages/desktop
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";

const html = String.raw`
<div class="bg-background-light font-display text-slate-900">
  <header class="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
          <span class="material-symbols-outlined">eco</span>
        </div>
        <h2 class="text-xl font-bold tracking-tight text-primary">Krutha Foundation</h2>
      </div>
      <nav class="hidden lg:flex items-center gap-8">
        <a class="text-sm font-medium text-primary" href="/">Home</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="/about">About Us</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="/our-work">Our Work</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="/events">Events</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="/blog">Blog</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="/contact">Contact Us</a>
      </nav>
      <a class="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-md shadow-primary/20" href="/contact">Donate Now</a>
    </div>
  </header>
  <main>
    <section class="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <h1 class="font-editorial text-5xl lg:text-7xl leading-[1.1] text-slate-900">
            Transforming Communities, Manifesting the <span class="text-primary italic">Krutha Yuga</span> Ideals.
          </h1>
          <p class="text-lg text-slate-600 max-w-lg leading-relaxed">
            Dedicated to sustainable development and community empowerment through holistic initiatives that honor our heritage and secure our future.
          </p>
          <div class="flex gap-4">
            <a class="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform" href="/our-work">Explore Our Impact</a>
            <a class="border border-primary/20 text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-colors" href="/about">Our Story</a>
          </div>
        </div>
        <div class="relative flex justify-center">
          <div class="w-full max-w-lg aspect-4/5 overflow-hidden" style="border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;">
            <img alt="Happy village children playing in nature" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOlFcrn9OVSowWxQ9P5dZC6qeJzk-OuQ2VrABvjsg7rtHh1Fmd8mP-7UbPYymugu_iiZEae-ekkciFof8ubiIk0MIve47_L3DQvo4E2xdzLKjJr-lY2q0pRAAxxsTvKzkD4WPKPXZjI0BdR2vXegcAzfUG25BwblfbSWu7dK3QNRwrwFp2e-j8x5D-JF7EEoxD86G_Ke5AypaJce6gbPESok5G_wMTVlW4IAwi8s72qFIxYwZevIP7XqRlnNZhFMy9dmGkompNNlMj" />
          </div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
    <section class="bg-primary/5 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="font-editorial text-3xl lg:text-4xl mb-4">3-Year Impact Metrics</h2>
          <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-primary/5 text-center group hover:border-primary transition-colors">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary"><span class="material-symbols-outlined">payments</span></div>
            <h3 class="text-3xl font-bold text-slate-900 mb-2">Rs. 21,26,753</h3>
            <p class="text-slate-500 font-medium">Raised Globally</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-primary/5 text-center group hover:border-primary transition-colors">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary"><span class="material-symbols-outlined">school</span></div>
            <h3 class="text-3xl font-bold text-slate-900 mb-2">498</h3>
            <p class="text-slate-500 font-medium">Students Trained (8-10)</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-primary/5 text-center group hover:border-primary transition-colors">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary"><span class="material-symbols-outlined">water_drop</span></div>
            <h3 class="text-3xl font-bold text-slate-900 mb-2">4</h3>
            <p class="text-slate-500 font-medium">Rainwater Harvesting Pits</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-primary/5 text-center group hover:border-primary transition-colors">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary"><span class="material-symbols-outlined">home</span></div>
            <h3 class="text-3xl font-bold text-slate-900 mb-2">300+</h3>
            <p class="text-slate-500 font-medium">Households Reached</p>
          </div>
        </div>
        <div class="text-center">
          <a class="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-xl font-extrabold hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/5" href="/impact-report">
            View Detailed 3-Year Impact Report <span class="material-symbols-outlined">summarize</span>
          </a>
        </div>
      </div>
    </section>
    <section class="py-24 space-y-32">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="font-editorial text-4xl mb-4">Pillars of Progress</h2>
          <p class="text-slate-500">Core initiatives driving change in our communities</p>
        </div>
        <div class="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div class="min-w-0">
            <div class="aspect-video rounded-3xl overflow-hidden shadow-xl">
              <img alt="Students studying" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGW3QlcFFZtD6PeZMpD94F6niT7ssG87oherYUv3At43lRSmvoWw5dmbvQBlXQuEveweuaGPHhabh2HXZfSWA4kMOlTlMCr35k5mJ8t0cJqxsisSnc_aDuMroc_P_EwqvLW2dWrRQweT5HMW3EvYDPvEeVJ27I5svdoDkm747oOpE_WRl2e9AN7ls-mPtbq4t8M74xwTnDIQsHXjBtdJfvxbYzzdtQtoeHkwOFLcNV3aREORIe9bX2b5D-B72brwP_x_TsWNpd0wv7" />
            </div>
            <div class="mt-4 ml-auto w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
              <p class="text-primary font-bold text-2xl">Rs. 16.37L</p>
              <p class="text-xs text-slate-500 uppercase tracking-wider">Invested in Education</p>
            </div>
          </div>
          <div class="space-y-6 min-w-0">
            <span class="text-primary font-bold tracking-widest text-sm uppercase">Education</span>
            <h3 class="font-editorial text-3xl">L.E.A.D.S Program</h3>
            <p class="text-slate-600 leading-relaxed">Guiding the critical years from Class 8 to 10, the L.E.A.D.S Program builds leaders through life skills, adolescent education, girl child safety, career direction, and scholarships for deserving students.</p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-slate-600"><span class="material-symbols-outlined text-primary text-sm">check_circle</span>500+ students supported with life skills and direction</li>
              <li class="flex items-center gap-3 text-slate-600"><span class="material-symbols-outlined text-primary text-sm">check_circle</span>Rs. 10,06,000 scholarships mobilized through partner alliances</li>
            </ul>
            <a class="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all mt-4" href="/programs/leads">View Program Details <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center pt-24">
          <div class="order-2 lg:order-1 space-y-6 min-w-0">
            <span class="text-primary font-bold tracking-widest text-sm uppercase">Conservation</span>
            <h3 class="font-editorial text-3xl">Project Bhagiratha</h3>
            <p class="text-slate-600 leading-relaxed">Inspired by Bhagiratha Prayatna, this mission channels rainwater back into the earth. We have built 4 Rainwater Harvesting Pits and are scaling toward 40 pits in 3 years to raise groundwater resilience.</p>
            <div class="flex gap-4">
              <div class="bg-primary/5 p-4 rounded-xl flex-1"><p class="text-primary font-bold">4 Pits</p><p class="text-xs text-slate-500">Harvesting Structures</p></div>
              <div class="bg-primary/5 p-4 rounded-xl flex-1"><p class="text-primary font-bold">10-Year Goal</p><p class="text-xs text-slate-500">+10 ft Water Table Rise</p></div>
            </div>
            <a class="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all mt-4" href="/programs/bhagiratha">View Program Details <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
          <div class="order-1 lg:order-2 min-w-0">
            <div class="aspect-video rounded-3xl overflow-hidden shadow-xl"><img alt="Water conservation project" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBb-tKaKm525G-NCxAzRuZsXvkjDAqeWZwa6AQgyeZqVT1WCLxWfXS1SHA7TnEv9xJPnlHZPXWmBdWia97g2lckH4MlkWRmUw3mwkPCES7AeSajfGu7w02Ma3CH31SD4wJlu5vdMV_IuND3iCg-G0r9wblYYBGtbyskrs86FMpIyI5RD0yWaO1VRCl8f6Z2eQ2ES44nc866LMxip79B4GbJpBD9pB4zIDkUwYimSA0s8dLnXEx3KsSQ7jVfogAKU5KhxXeOHhJoie6" /></div>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center pt-24">
          <div class="aspect-video rounded-3xl overflow-hidden shadow-xl min-w-0"><img alt="Sanitation and cleaning drive" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwEBaMUpFSfwMjakWg58U0mIxI15iudHFA58iYNPe-hRh1wU-Xytvhp6I_BVysBFwaW1ypiWj_H_SqzYRPhNWwzzU6zcwHzkVoUAg8Tkdcr5b1e5osA1Z4yPgfR-no0S6QigAhiindjyVhT-oNh0M-G7ohZYPNgSyfUSzN7I_3MB9IbnJ2i6EgKgwAbCHRXiVhPTK4jGmvnh3SiBLldSuTUlucZ7w09Vr-8K_gz5ft46SX_1K-RXFkE3s5sQopxkTx-MTJGisttjAx" /></div>
          <div class="space-y-6 min-w-0">
            <span class="text-primary font-bold tracking-widest text-sm uppercase">Sanitation</span>
            <h3 class="font-editorial text-3xl">Vasundhara &amp; Samyamam</h3>
            <p class="text-slate-600 leading-relaxed">Honoring Earth as Vasundhara, we drive wet-dry segregation and zero-plastic discipline. The twin-bin household model and reusable bag circulation are building a cleaner, conscious village ecosystem.</p>
            <div class="flex items-center gap-4 p-4 bg-primary text-white rounded-2xl max-w-sm">
              <span class="material-symbols-outlined text-4xl">shopping_bag</span>
              <div><p class="text-xl font-bold">2,000+</p><p class="text-xs opacity-80 uppercase font-medium">Reusable Cotton Bags Distributed</p></div>
            </div>
            <div class="flex flex-wrap gap-4 mt-4">
              <a class="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all" href="/programs/vasundhara">Project Vasundhara <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
              <a class="inline-flex items-center gap-2 border border-primary text-primary px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/5 transition-all" href="/programs/samyamam">Project Samyamam <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24 bg-background-light border-t border-primary/5">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-20">
          <h2 class="font-editorial text-4xl mb-4">Future Roadmap 2026+</h2>
          <p class="text-slate-500">Our vision for the coming years</p>
        </div>
        <div class="max-w-3xl mx-auto">
          <ol class="relative border-l-2 border-primary/20" style="margin-left: 24px; padding-left: 0; display: flex; flex-direction: column; gap: 48px;">
            <li class="relative" style="padding-left: 48px;">
              <span class="bg-primary rounded-full border-4 border-background-light z-10 flex items-center justify-center text-white text-sm font-bold" style="position: absolute; top: 0; left: -24px; width: 48px; height: 48px;">1</span>
              <h4 class="font-bold text-2xl text-slate-900 mb-2">Krutha Raithu Nestham</h4>
              <p class="text-slate-600 leading-relaxed">Transitioning farmers to natural farming with stronger market linkages and village-level producer support.</p>
            </li>
            <li class="relative" style="padding-left: 48px;">
              <span class="bg-primary rounded-full border-4 border-background-light z-10 flex items-center justify-center text-white text-sm font-bold" style="position: absolute; top: 0; left: -24px; width: 48px; height: 48px;">2</span>
              <h4 class="font-bold text-2xl text-slate-900 mb-2">Shakti Sangamam</h4>
              <p class="text-slate-600 leading-relaxed">Implementing formal empowerment and practical skill programs for women across the community.</p>
            </li>
            <li class="relative" style="padding-left: 48px;">
              <span class="bg-primary rounded-full border-4 border-background-light z-10 flex items-center justify-center text-white text-sm font-bold" style="position: absolute; top: 0; left: -24px; width: 48px; height: 48px;">3</span>
              <h4 class="font-bold text-2xl text-slate-900 mb-2">Aasara</h4>
              <p class="text-slate-600 leading-relaxed">Building a structured support system for elderly care, dignity, and access to essentials.</p>
            </li>
            <li class="relative" style="padding-left: 48px;">
              <span class="bg-primary rounded-full border-4 border-background-light z-10 flex items-center justify-center text-white text-sm font-bold" style="position: absolute; top: 0; left: -24px; width: 48px; height: 48px;">4</span>
              <h4 class="font-bold text-2xl text-slate-900 mb-2">Dharma Vyapaar</h4>
              <p class="text-slate-600 leading-relaxed">Training local businesses in eco-friendly and ethical practices with community responsibility.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </main>
  <footer class="bg-slate-900 text-slate-400 py-20 border-t border-white/5">
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
</div>`;

export function HomeDesktopPage() {
  return <StaticMarkupPage html={html} />;
}
