/**
 * @file leads-program-desktop-page.tsx
 * @description Detailed program profile for the L.E.A.D.S initiative.
 * @module frontend/src/pages/desktop/programs
 */

import { StaticMarkupPage } from "../../../components/ui/static-markup-page";
import { buildDesktopHeaderMarkup } from "../../../components/layout/site-navigation";

const html = String.raw`
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
  ${buildDesktopHeaderMarkup("/programs/leads")}

  <main class="flex-1">
    <!-- Hero Section -->
    <section class="relative bg-slate-900 text-white py-28 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <img class="w-full h-full object-cover" src="/projects/leads.webp" alt="L.E.A.D.S background" />
      </div>
      <!-- Glow Blurs -->
      <div class="absolute -top-12 -left-12 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-md border border-primary/10">
          <span class="material-symbols-outlined text-lg text-accent animate-pulse">verified</span> L.E.A.D.S Program
        </div>
        <h1 class="text-5xl lg:text-7xl font-editorial leading-tight mb-6">
          L.E.A.D.S <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Program</span>
        </h1>
        <p class="text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed italic">"Guiding the Critical Years, Building Leaders"</p>
      </div>
    </section>

    <!-- Vulnerable Window Section -->
    <section class="py-24 max-w-7xl mx-auto px-6 relative">
      <!-- Glow Blurs -->
      <div class="absolute top-1/2 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl font-editorial text-slate-900 leading-tight">
            The "Vulnerable Window": <span class="text-primary italic">Why 8th to 10th Grade Matters</span>
          </h2>
          <div class="prose prose-slate lg:prose-lg text-slate-600 space-y-4">
            <p>The journey from Class 8 to Class 10 is the most defining period in a student's life. In our villages, this is the "vulnerable window" where teenagers often drift toward addiction and aimless distractions.</p>
            <p>The root cause lies in a fractured education ecosystem. At Krutha Foundation, we ensure that these three years lead to a <strong class="text-primary">career, not a crisis</strong>.</p>
            <p>As proud alumni of ZPHS Vadapalem, we adopted our alma mater in April 2022. Collaborating with the Padala Charitable Trust (PCT), we provide students with the mindset and mentorship required to succeed in the modern world.</p>
          </div>
        </div>
        
        <div class="bg-white p-12 rounded-[2rem] border border-primary/10 shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500">
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
          <div class="flex items-center gap-4 mb-8">
            <div class="size-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span class="material-symbols-outlined text-4xl">emoji_objects</span>
            </div>
            <h3 class="text-2xl font-editorial text-slate-900 font-bold">Our Philosophy</h3>
          </div>
          <p class="text-xl text-slate-700 leading-relaxed italic font-display">&quot;We are not just educating students; we are saving a generation. This program is an investment in our most precious resource: Human Potential.&quot;</p>
        </div>
      </div>
    </section>

    <!-- The L.E.A.D.S. Pillars Section -->
    <section class="py-24 bg-white/60 border-y border-primary/10 relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span class="text-accent font-bold tracking-widest text-sm uppercase">Framework</span>
          <h2 class="text-4xl font-editorial text-slate-900 mb-4">The L.E.A.D.S. Pillars</h2>
          <p class="text-slate-500 text-lg">Five strategic areas of intervention for holistic transformation</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          
          <!-- Pillar L -->
          <div class="p-8 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between">
            <div>
              <div class="text-4xl font-black text-primary/20 group-hover:text-primary mb-6 transition-colors font-editorial">L</div>
              <h4 class="font-editorial text-xl font-bold mb-3 text-slate-900">Life Skills</h4>
              <p class="text-sm text-slate-600 leading-relaxed">Teaching emotional intelligence, communication, and decision-making for a complex world.</p>
            </div>
          </div>

          <!-- Pillar E -->
          <div class="p-8 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between">
            <div>
              <div class="text-4xl font-black text-primary/20 group-hover:text-primary mb-6 transition-colors font-editorial">E</div>
              <h4 class="font-editorial text-xl font-bold mb-3 text-slate-900">Education</h4>
              <p class="text-sm text-slate-600 leading-relaxed">Providing adolescent health education to handle physical and emotional changes with maturity.</p>
            </div>
          </div>

          <!-- Pillar A -->
          <div class="p-8 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between">
            <div>
              <div class="text-4xl font-black text-primary/20 group-hover:text-primary mb-6 transition-colors font-editorial">A</div>
              <h4 class="font-editorial text-xl font-bold mb-3 text-slate-900">Awareness</h4>
              <p class="text-sm text-slate-600 leading-relaxed">Empowering the girl child through safety awareness and the confidence to claim her future.</p>
            </div>
          </div>

          <!-- Pillar D -->
          <div class="p-8 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between">
            <div>
              <div class="text-4xl font-black text-primary/20 group-hover:text-primary mb-6 transition-colors font-editorial">D</div>
              <h4 class="font-editorial text-xl font-bold mb-3 text-slate-900">Direction</h4>
              <p class="text-sm text-slate-600 leading-relaxed">Exposing students to modern career paths and corporate opportunities to replace aimless drifting.</p>
            </div>
          </div>

          <!-- Pillar S -->
          <div class="p-8 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between">
            <div>
              <div class="text-4xl font-black text-primary/20 group-hover:text-primary mb-6 transition-colors font-editorial">S</div>
              <h4 class="font-editorial text-xl font-bold mb-3 text-slate-900">Support Systems</h4>
              <p class="text-sm text-slate-600 leading-relaxed">Ensuring financial hardship never blocks brilliance through safety-net scholarships.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Impact & Trajectory Section -->
    <section class="py-24 relative overflow-hidden">
      <!-- Glow Blurs -->
      <div class="absolute top-1/2 -right-12 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16">
          
          <!-- Scale of Impact -->
          <div>
            <h2 class="text-3xl font-editorial font-bold mb-12 flex items-center gap-3 text-slate-900">
              <span class="material-symbols-outlined text-primary text-3xl">analytics</span> Scale of Impact
            </h2>
            <div class="space-y-6">
              
              <div class="bg-white p-8 rounded-[2rem] border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 flex items-center gap-6">
                <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <span class="material-symbols-outlined text-4xl">groups</span>
                </div>
                <div>
                  <h4 class="text-4xl font-editorial font-bold text-slate-900">500+</h4>
                  <p class="text-slate-600">Lives Transformed (Classes 8-10)</p>
                </div>
              </div>

              <div class="bg-white p-8 rounded-[2rem] border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 flex items-center gap-6">
                <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <span class="material-symbols-outlined text-4xl">workspace_premium</span>
                </div>
                <div>
                  <h4 class="text-4xl font-editorial font-bold text-slate-900">14</h4>
                  <p class="text-slate-600">Scholars in Higher Professional Education</p>
                </div>
              </div>

              <div class="p-8 border border-primary/20 rounded-[2rem] bg-primary/5 relative overflow-hidden">
                <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <p class="text-accent font-bold mb-2 uppercase tracking-widest text-xs">"Professional First" Philosophy</p>
                <p class="text-2xl font-editorial font-bold text-slate-800"><span class="text-primary italic">77%</span> of funds dedicated to Higher Professional Education.</p>
              </div>

            </div>
          </div>

          <!-- Financial Trajectory -->
          <div>
            <h2 class="text-3xl font-editorial font-bold mb-12 flex items-center gap-3 text-slate-900">
              <span class="material-symbols-outlined text-primary text-3xl">trending_up</span> Financial Trajectory (Scholarships)
            </h2>
            <div class="space-y-6">
              
              <div class="flex items-center gap-4">
                <div class="w-24 text-sm font-bold text-slate-500">2023-24</div>
                <div class="flex-1 h-12 bg-white rounded-full overflow-hidden border border-slate-200 relative shadow-inner">
                  <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/30 to-primary/40" style="width: 38%"></div>
                  <div class="absolute inset-y-0 left-4 flex items-center text-slate-700 font-bold">₹1,80,000</div>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-24 text-sm font-bold text-slate-500">2024-25</div>
                <div class="flex-1 h-12 bg-white rounded-full overflow-hidden border border-slate-200 relative shadow-inner">
                  <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/50 to-primary/60" style="width: 75%"></div>
                  <div class="absolute inset-y-0 left-4 flex items-center text-slate-800 font-bold">₹3,54,000</div>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-24 text-sm font-bold text-slate-900">2025-26</div>
                <div class="flex-1 h-12 bg-white rounded-full overflow-hidden border border-primary/20 relative shadow-inner">
                  <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent" style="width: 100%"></div>
                  <div class="absolute inset-y-0 left-4 flex items-center text-white font-bold">₹4,72,000</div>
                </div>
              </div>

              <div class="mt-8 p-10 bg-slate-900 text-white rounded-[2rem] text-center relative overflow-hidden border border-primary/10 shadow-xl">
                <div class="absolute -right-20 -top-20 size-60 rounded-full bg-primary/10 blur-3xl"></div>
                <p class="text-sm opacity-60 uppercase tracking-widest mb-2 relative z-10">Total Impact Mobilized</p>
                <p class="text-4xl font-editorial font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent relative z-10">₹10,06,000</p>
                <p class="text-primary text-sm mt-3 font-bold relative z-10 flex items-center justify-center gap-1.5">
                  <span class="material-symbols-outlined text-base">trending_up</span> 260% Growth Since Inception
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Restoring Discipline Section -->
    <section class="py-24 max-w-7xl mx-auto px-6 relative border-t border-primary/10">
      <div class="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="text-center max-w-3xl mx-auto space-y-6">
        <h2 class="text-4xl font-editorial mb-8 text-slate-900">
          Restoring <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Discipline</span> & Academic Glory
        </h2>
        <p class="text-lg text-slate-600 leading-relaxed mb-12">
          By targeting the 8th to 10th-grade bracket, we catch students before they fall into harmful habits. We are restoring ZPHS Vadapalem to its peak, ensuring our boys remain focused and our girls remain empowered.
        </p>
        <div class="grid sm:grid-cols-2 gap-6 text-left">
          
          <div class="p-8 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500">
            <h4 class="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-base">handshake</span> PCT Alliance
            </h4>
            <p class="text-3xl font-editorial font-black text-slate-900 mb-2">₹8.40 Lakhs</p>
            <p class="text-sm text-slate-500">Foundational &amp; Intermediate Degrees (B.Tech, BCA)</p>
          </div>

          <div class="p-8 rounded-[2rem] bg-white border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500">
            <h4 class="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-base">school</span> APTA Alliance
            </h4>
            <p class="text-3xl font-editorial font-black text-slate-900 mb-2">₹1.66 Lakhs</p>
            <p class="text-sm text-slate-500">High-Level Professional Degrees Support</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-primary/10">
      <div class="absolute -right-20 -top-20 size-96 rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute -left-20 -bottom-20 size-96 rounded-full bg-accent/15 blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 text-center relative z-10 space-y-6">
        <h2 class="text-4xl lg:text-5xl font-editorial mb-8">
          Join the Mission to <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Save a Generation</span>
        </h2>
        <p class="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Help us turn these three critical years into a lifetime of excellence. Your support fuels human potential.
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <a class="bg-primary hover:opacity-90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 hover:scale-105" href="/contact">Support a Student</a>
          <a class="border border-primary/20 hover:bg-white/5 text-primary px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105" href="/our-work">View More Projects</a>
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

export function LeadsProgramDesktopPage() {
  return <StaticMarkupPage html={html} />;
}

