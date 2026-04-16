/**
 * @file leads-program-desktop-page.tsx
 * @description Detailed program profile for the L.E.A.D.S initiative.
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
            <span class="material-symbols-outlined">diversity_3</span>
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
        <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGW3QlcFFZtD6PeZMpD94F6niT7ssG87oherYUv3At43lRSmvoWw5dmbvQBlXQuEveweuaGPHhabh2HXZfSWA4kMOlTlMCr35k5mJ8t0cJqxsisSnc_aDuMroc_P_EwqvLW2dWrRQweT5HMW3EvYDPvEeVJ27I5svdoDkm747oOpE_WRl2e9AN7ls-mPtbq4t8M74xwTnDIQsHXjBtdJfvxbYzzdtQtoeHkwOFLcNV3aREORIe9bX2b5D-B72brwP_x_TsWNpd0wv7" alt="L.E.A.D.S background" />
      </div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
          <span class="material-symbols-outlined text-lg">verified</span> Flagship Education Program
        </div>
        <h1 class="text-5xl lg:text-7xl font-editorial leading-tight mb-6">L.E.A.D.S Program</h1>
        <p class="text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed italic">"Guiding the Critical Years, Building Leaders"</p>
      </div>
    </section>

    <section class="py-24 max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-slate-900 leading-tight">The "Vulnerable Window": Why 8th to 10th Grade Matters</h2>
          <div class="prose prose-slate lg:prose-lg text-slate-600 space-y-4">
            <p>The journey from Class 8 to Class 10 is the most defining period in a student's life. In our villages, this is the "vulnerable window" where teenagers often drift toward addiction and aimless distractions.</p>
            <p>The root cause lies in a fractured education ecosystem. At Krutha Foundation, we ensure that these three years lead to a <strong>career, not a crisis</strong>.</p>
            <p>As proud alumni of ZPHS Vadapalem, we adopted our alma mater in April 2022. Collaborating with the Padala Charitable Trust (PCT), we provide students with the mindset and mentorship required to succeed in the modern world.</p>
          </div>
        </div>
        <div class="bg-primary/5 p-12 rounded-3xl border border-primary/10">
          <div class="flex items-center gap-4 mb-8">
            <div class="size-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
              <span class="material-symbols-outlined text-4xl">emoji_objects</span>
            </div>
            <h3 class="text-2xl font-bold">Our Philosophy</h3>
          </div>
          <p class="text-xl text-slate-700 leading-relaxed italic">&quot;We are not just educating students; we are saving a generation. This program is an investment in our most precious resource: Human Potential.&quot;</p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">The L.E.A.D.S. Pillars</h2>
          <p class="text-slate-500">Five strategic areas of intervention for holistic transformation</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div class="p-8 rounded-2xl bg-background-light border border-slate-100 hover:border-primary transition-colors group">
            <div class="text-4xl font-black text-primary/20 group-hover:text-primary mb-4 transition-colors">L</div>
            <h4 class="font-bold text-lg mb-3">Life Skills</h4>
            <p class="text-sm text-slate-600 leading-relaxed">Teaching emotional intelligence, communication, and decision-making for a complex world.</p>
          </div>
          <div class="p-8 rounded-2xl bg-background-light border border-slate-100 hover:border-primary transition-colors group">
            <div class="text-4xl font-black text-primary/20 group-hover:text-primary mb-4 transition-colors">E</div>
            <h4 class="font-bold text-lg mb-3">Education</h4>
            <p class="text-sm text-slate-600 leading-relaxed">Providing adolescent health education to handle physical and emotional changes with maturity.</p>
          </div>
          <div class="p-8 rounded-2xl bg-background-light border border-slate-100 hover:border-primary transition-colors group">
            <div class="text-4xl font-black text-primary/20 group-hover:text-primary mb-4 transition-colors">A</div>
            <h4 class="font-bold text-lg mb-3">Awareness</h4>
            <p class="text-sm text-slate-600 leading-relaxed">Empowering the girl child through safety awareness and the confidence to claim her future.</p>
          </div>
          <div class="p-8 rounded-2xl bg-background-light border border-slate-100 hover:border-primary transition-colors group">
            <div class="text-4xl font-black text-primary/20 group-hover:text-primary mb-4 transition-colors">D</div>
            <h4 class="font-bold text-lg mb-3">Direction</h4>
            <p class="text-sm text-slate-600 leading-relaxed">Exposing students to modern career paths and corporate opportunities to replace aimless drifting.</p>
          </div>
          <div class="p-8 rounded-2xl bg-background-light border border-slate-100 hover:border-primary transition-colors group">
            <div class="text-4xl font-black text-primary/20 group-hover:text-primary mb-4 transition-colors">S</div>
            <h4 class="font-bold text-lg mb-3">Support Systems</h4>
            <p class="text-sm text-slate-600 leading-relaxed">Ensuring financial hardship never blocks brilliance through safety-net scholarships.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-primary/5">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">analytics</span> Scale of Impact
            </h2>
            <div class="space-y-6">
              <div class="bg-white p-8 rounded-2xl shadow-sm flex items-center gap-6">
                <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <span class="material-symbols-outlined text-4xl">groups</span>
                </div>
                <div>
                  <h4 class="text-3xl font-bold text-slate-900">500+</h4>
                  <p class="text-slate-600">Lives Transformed (Classes 8-10)</p>
                </div>
              </div>
              <div class="bg-white p-8 rounded-2xl shadow-sm flex items-center gap-6">
                <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <span class="material-symbols-outlined text-4xl">workspace_premium</span>
                </div>
                <div>
                  <h4 class="text-3xl font-bold text-slate-900">14</h4>
                  <p class="text-slate-600">Scholars in Higher Professional Education</p>
                </div>
              </div>
              <div class="p-8 border border-primary/20 rounded-2xl bg-primary/5">
                <p class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">"Professional First" Philosophy</p>
                <p class="text-2xl font-bold text-slate-800"><span class="text-primary">77%</span> of funds dedicated to Higher Professional Education.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">trending_up</span> Financial Trajectory (Scholarships)
            </h2>
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-24 text-sm font-bold text-slate-500">2023-24</div>
                <div class="flex-1 h-12 bg-white rounded-full overflow-hidden border border-slate-200 relative">
                  <div class="absolute inset-y-0 left-0 bg-sage/20" style="width: 38%"></div>
                  <div class="absolute inset-y-0 left-4 flex items-center text-forest font-bold">₹1,80,000</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-24 text-sm font-bold text-slate-500">2024-25</div>
                <div class="flex-1 h-12 bg-white rounded-full overflow-hidden border border-slate-200 relative">
                  <div class="absolute inset-y-0 left-0 bg-sage/40" style="width: 75%"></div>
                  <div class="absolute inset-y-0 left-4 flex items-center text-forest font-bold">₹3,54,000</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-24 text-sm font-bold text-slate-900">2025-26</div>
                <div class="flex-1 h-12 bg-white rounded-full overflow-hidden border border-primary/20 relative">
                  <div class="absolute inset-y-0 left-0 bg-primary" style="width: 100%"></div>
                  <div class="absolute inset-y-0 left-4 flex items-center text-white font-bold">₹4,72,000</div>
                </div>
              </div>
              <div class="mt-8 p-6 bg-slate-900 text-white rounded-2xl text-center">
                <p class="text-sm opacity-60 uppercase tracking-widest mb-1">Total Impact Mobilized</p>
                <p class="text-3xl font-bold">₹10,06,000</p>
                <p class="text-primary text-sm mt-2 font-bold">260% Growth Since Inception</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-4xl font-bold mb-8 italic">Restoring Discipline &amp; Academic Glory</h2>
        <p class="text-lg text-slate-600 leading-relaxed mb-12">By targeting the 8th to 10th-grade bracket, we catch students before they fall into harmful habits. We are restoring ZPHS Vadapalem to its peak, ensuring our boys remain focused and our girls remain empowered.</p>
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="p-8 rounded-2xl bg-white shadow-xl border border-primary/10">
            <h4 class="text-xl font-bold text-primary mb-4">PCT Alliance</h4>
            <p class="text-2xl font-black text-slate-900 mb-2">₹8.40 Lakhs</p>
            <p class="text-sm text-slate-500">Foundational &amp; Intermediate Degrees (B.Tech, BCA)</p>
          </div>
          <div class="p-8 rounded-2xl bg-white shadow-xl border border-primary/10">
            <h4 class="text-xl font-bold text-primary mb-4">APTA Alliance</h4>
            <p class="text-2xl font-black text-slate-900 mb-2">₹1.66 Lakhs</p>
            <p class="text-sm text-slate-500">High-Level Professional Degrees Support</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-primary/5">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Join the Mission to Save a Generation</h2>
        <p class="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">Help us turn these three critical years into a lifetime of excellence. Your support fuels human potential.</p>
        <div class="flex flex-wrap justify-center gap-6">
          <a class="bg-primary hover:bg-opacity-90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20" href="/contact">Support a Student</a>
          <a class="border border-primary/20 hover:bg-primary/5 text-primary px-10 py-4 rounded-xl font-bold text-lg transition-all" href="/our-work">View More Projects</a>
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

export function LeadsProgramDesktopPage() {
  return <StaticMarkupPage html={html} />;
}
