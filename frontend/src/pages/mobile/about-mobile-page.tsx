/**
 * @file about-mobile-page.tsx
 * @description Mobile about page rendered from the provided reference layout.
 * @module frontend/src/pages/mobile
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";
const suryaSrc = "/team/surya-bandaru.webp";
const kgRaoSrc = "/team/kg-rao.webp";
const srinivasuSrc = "/team/srinivasu-b.webp";
const pctLogo = "/partners/PCT.webp";
const aptaLogo = "/partners/APTA.webp";

const html = String.raw`
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased">
  <header class="sticky top-0 z-50 flex items-center bg-background-light/80 backdrop-blur-md px-4 py-4 justify-between border-b border-primary/10">
    <a class="text-primary flex size-9 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer" href="/m">
      <span class="material-symbols-outlined text-[20px]">arrow_back</span>
    </a>
    <h2 class="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">About Us</h2>
    <div class="flex w-9 items-center justify-end">
      <button class="flex items-center justify-center rounded-full size-9 hover:bg-primary/10 text-primary">
        <span class="material-symbols-outlined text-[18px]">share</span>
      </button>
    </div>
  </header>
  <main class="flex-1">
    <section class="px-4 py-6">
      <div class="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-xl shadow-sm" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz19yKKIXgvllFIZPFeIaYeh1GtyZi2A5Qx7q-_C-6nnGhYUlBYKYn_hngUteALTcnqO7HSyBMLLB830Gb6vnfyOobR2gmtg7NHBdCknZVorh8xofXDazRUs9GRbdxxNK7Co5EeYq9PG81SyUjJdwCGYub0DDGEdc_oxgXs9md61yjryicXY01dl9OrsY8A3ibIvM_0dNnd2akDIp1v-itUwFndU2QmQxpS36NJyx_wzjN8fuQ0ZDLZM1dnU0kuh6OjBemjWkEwogz")'></div>
      <div class="mt-8">
        <h1 class="font-editorial text-slate-900 text-4xl leading-tight mb-4 text-center">Our Story</h1>
        <p class="text-slate-600 text-base font-normal leading-relaxed text-left">Founded in April 2022, Krutha Foundation connects people across the globe to their native village, Vadapalem, to build a self-sustainable thriving community.</p>
      </div>
    </section>
    <section class="px-4 py-8 bg-white border-y border-primary/5">
      <h3 class="text-accent uppercase tracking-widest text-xs font-bold mb-4 font-display">Program Philosophy</h3>
      <div class="space-y-4 text-slate-600 leading-relaxed text-[15px]">
        <p>At Krutha Foundation, our programs are centered on people and the environment—recognizing the deep interdependence between human behaviour and the health of <strong>Earth, Water, and Air</strong>.</p>
        <p>Each initiative is designed to be transformational rather than transactional, addressing root causes through responsibility, discipline, and conscious choice among <strong>children, youth, women, farmers, traders, and elders</strong>.</p>
        <p>The impact we envision goes beyond immediate outcomes, securing a healthier, dignified, and sustainable future for generations to come. We work on <strong>9 Sustainable Development Goals (SDGs)</strong> set by the UN.</p>
      </div>
    </section>

    <!-- Partners Section -->
    <section id="partners" class="scroll-mt-24 px-4 py-12 bg-slate-50 border-b border-slate-100">
      <div class="mb-10 text-center">
        <h3 class="font-editorial text-3xl text-slate-900 mb-2">Our Strategic Partners</h3>
        <p class="text-slate-500 text-sm">Collaborating for sustainable impact.</p>
        <div class="h-1 w-12 bg-accent mx-auto rounded-full mt-4"></div>
      </div>
      
      <div class="space-y-6">
        <!-- PCT Mobile -->
        <div class="bg-white p-6 rounded-3xl border border-primary/5 shadow-sm space-y-5">
          <div class="flex items-center gap-4 border-b border-slate-50 pb-4">
            <div class="shrink-0 size-20 bg-slate-50 rounded-2xl p-2 flex items-center justify-center border border-slate-100 shadow-inner">
              <img src="${pctLogo}" alt="PCT Logo" class="max-h-full max-w-full object-contain" />
            </div>
            <div class="flex-1">
              <h4 class="font-editorial text-lg text-slate-900 leading-tight">Padala Charitable Trust (PCT)</h4>
              <a href="https://pct-india.org" class="text-[11px] text-accent font-bold uppercase tracking-wider flex items-center gap-1 mt-1 font-display">
                Official Site <span class="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          </div>
          <div class="space-y-4">
            <p class="text-slate-600 text-[13px] leading-relaxed">
              Our primary execution partner for the <strong>L.E.A.D.S. Program</strong>, providing Life Skills and Leadership training at ZPHS Vadapalem.
            </p>
            <div class="p-4 bg-accent/5 rounded-2xl border-l-2 border-accent italic">
              <p class="text-slate-700 text-[12px] leading-relaxed">
                "Ensuring financial constraints never stand in the way of academic excellence for our students."
              </p>
            </div>
          </div>
        </div>

        <!-- APTA Mobile -->
        <div class="bg-white p-6 rounded-3xl border border-primary/5 shadow-sm space-y-5">
          <div class="flex items-center gap-4 border-b border-slate-50 pb-4">
            <div class="shrink-0 size-20 bg-slate-50 rounded-2xl p-2 flex items-center justify-center border border-slate-100 shadow-inner">
              <img src="${aptaLogo}" alt="APTA Logo" class="max-h-full max-w-full object-contain" />
            </div>
            <div class="flex-1">
              <h4 class="font-editorial text-lg text-slate-900 leading-tight">APTA (USA)</h4>
              <a href="https://ap-ta.org" class="text-[11px] text-accent font-bold uppercase tracking-wider flex items-center gap-1 mt-1 font-display">
                Official Site <span class="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          </div>
          <div class="space-y-4">
            <p class="text-slate-600 text-[13px] leading-relaxed">
              Empowering students to pursue <strong>high-level professional degrees</strong> through vital scholarship contributions.
            </p>
            <div class="p-4 bg-accent/5 rounded-2xl border-l-2 border-accent italic">
              <p class="text-slate-700 text-[12px] leading-relaxed">
                "Representing the strength and generosity of the Telugu diaspora in the United States."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 p-5 bg-primary rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform">
        <p class="text-xs text-white font-medium text-center leading-relaxed">
          Together, we maintain a <span class="font-bold underline decoration-accent underline-offset-2">100% transparency rate</span> for every rupee donated.
        </p>
      </div>
    </section>

    <section class="px-4 py-8 space-y-6">
      <div class="bg-accent/5 p-6 rounded-xl border border-accent/10">
        <div class="flex items-center gap-3 mb-3 text-accent"><span class="material-symbols-outlined font-fill">target</span><h3 class="text-lg font-bold font-display">Our Mission</h3></div>
        <p class="text-slate-700 leading-relaxed text-[14px]">To connect people across the globe to their native village on one platform and enable them to serve their motherland by transforming Vadapalem into a self-sustainable thriving community.</p>
      </div>
      <div class="bg-accent/5 p-6 rounded-xl border border-accent/10">
        <div class="flex items-center gap-3 mb-3 text-accent"><span class="material-symbols-outlined font-fill">visibility</span><h3 class="text-lg font-bold font-display">Our Vision</h3></div>
        <p class="text-slate-700 leading-relaxed text-[14px]">A model village where children are guided, youth are directed, women are empowered, elders are supported, farmers thrive through natural methods, and surroundings remain plastic and garbage free.</p>
      </div>
    </section>

    <!-- Leadership Team Section -->
    <section id="team" class="scroll-mt-24 px-4 py-16 bg-white border-t border-primary/5">
      <div class="mb-12 text-center">
        <h3 class="font-editorial text-3xl text-slate-900 mb-2">Our Leadership</h3>
        <p class="text-slate-500 text-sm">Visionaries and execution experts.</p>
        <div class="h-1 w-12 bg-accent mx-auto rounded-full mt-4"></div>
      </div>

      <!-- Tier 1: Chairman -->
      <div class="mb-16">
        <div class="bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100 shadow-sm overflow-hidden text-center">
          <div class="size-48 mx-auto rounded-[2rem] overflow-hidden bg-slate-200 shadow-lg border-4 border-white mb-6">
            <img src="${suryaSrc}" alt="Surya Bandaru" class="w-full h-full object-cover" />
          </div>
          <h4 class="font-editorial text-2xl text-slate-900">Surya Bandaru</h4>
          <p class="text-accent font-bold uppercase tracking-widest text-[10px] mb-6 font-display">Chairman & Founder</p>
          <div class="text-left space-y-4">
            <p class="text-slate-600 text-[14px] leading-relaxed">
              Visionary behind Krutha Foundation with 27+ years of corporate experience (Motorola, GE, Nokia) and extensive global exposure.
            </p>
            <p class="text-slate-600 text-[14px] leading-relaxed italic border-l-2 border-accent/20 pl-4 py-2 bg-white/50 rounded-r-xl">
              "Blending corporate discipline with a deep commitment to environmental and educational reforms."
            </p>
          </div>
        </div>
      </div>

      <!-- Tier 2: Executives -->
      <div class="grid grid-cols-1 gap-12 mb-16">
        
        <!-- Vice Chairman -->
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="size-20 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary/40 shrink-0 shadow-inner">
              <span class="material-symbols-outlined text-4xl">person</span>
            </div>
            <div>
              <h4 class="font-editorial text-lg text-slate-900 leading-tight">Srirama Chandra Murthy P</h4>
              <p class="text-accent font-bold uppercase tracking-widest text-[9px] font-display">Vice Chairman</p>
            </div>
          </div>
          <p class="text-slate-600 text-[13px] leading-relaxed">
            Distinguished veteran in education and sports administration. Secretary for India Olympic Association, Konaseema. Strategic lead for sports-centric development.
          </p>
        </div>

        <!-- General Secretary -->
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="size-20 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary/40 shrink-0 shadow-inner">
              <span class="material-symbols-outlined text-4xl">person</span>
            </div>
            <div>
              <h4 class="font-editorial text-lg text-slate-900 leading-tight">Anand Bandaru</h4>
              <p class="text-accent font-bold uppercase tracking-widest text-[9px] font-display">General Secretary</p>
            </div>
          </div>
          <p class="text-slate-600 text-[13px] leading-relaxed">
            BITS Pilani alumnus with 25+ years at IBM/Kyndryl. Focuses on scholarships, government schools, and rebuilding natural ecosystems.
          </p>
        </div>

        <!-- Joint Secretary -->
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="size-20 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-slate-100">
              <img src="${kgRaoSrc}" alt="K G Rao" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="font-editorial text-lg text-slate-900 leading-tight">K G Rao</h4>
              <p class="text-accent font-bold uppercase tracking-widest text-[9px] font-display">Joint Secretary</p>
            </div>
          </div>
          <p class="text-slate-600 text-[13px] leading-relaxed">
            Retired government professional leading ground-level execution. Brings administrative discipline to Education and Environment initiatives.
          </p>
        </div>

        <!-- Treasurer -->
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="size-20 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-slate-100">
              <img src="${srinivasuSrc}" alt="Srinivasu B" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="font-editorial text-lg text-slate-900 leading-tight">Srinivasu B</h4>
              <p class="text-accent font-bold uppercase tracking-widest text-[9px] font-display">Treasurer</p>
            </div>
          </div>
          <p class="text-slate-600 text-[13px] leading-relaxed">
            Entrepreneur with global Singapore experience. Applies rigorous project management to ensure maximum donor efficiency.
          </p>
        </div>

      </div>

      <!-- Tier 3: Trustees -->
      <div class="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
        <h4 class="font-editorial text-xl text-slate-900 mb-8 text-center">Board of Trustees</h4>
        <div class="space-y-8">
          <div class="space-y-2">
            <h5 class="font-bold text-slate-900">Bapi Raju Pedapudi</h5>
            <p class="text-slate-600 text-[13px] leading-relaxed italic">
              Legacy youth leader and social change architect with 30+ years of grassroots intervention in Konaseema.
            </p>
          </div>
          <div class="h-px bg-slate-200"></div>
          <div class="space-y-2">
            <h5 class="font-bold text-slate-900">Subba Rao Karibandi</h5>
            <p class="text-slate-600 text-[13px] leading-relaxed italic">
              The foundation's "Torch Bearer" for the L.E.A.D.S. Program and primary operational bridge for NGO partners.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Impact Alignment Section -->
    <section class="px-4 py-12 bg-white border-t border-slate-100">
      <div class="text-center mb-10">
        <h3 class="font-editorial text-3xl text-slate-900 mb-2">Global Alignment</h3>
        <p class="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold font-display">Local actions, Global goals</p>
      </div>
      
      <div class="flex flex-wrap justify-center gap-2">
        <!-- Aligned SDGs - Centered layout -->
        ${[3, 4, 5, 6, 8, 11, 12, 13, 15].map(num => `
          <div class="size-[28%] aspect-square bg-slate-50 rounded-lg overflow-hidden border border-slate-100 p-0.5">
            <img src="/sdgs/sdg${num}.webp" alt="SDG ${num}" class="w-full h-full object-contain" />
          </div>
        `).join('')}
      </div>
    </section>

    <section id="transparency" class="scroll-mt-24 px-4 py-10 border-t border-primary/5">
      <div class="mb-8">
        <h3 class="font-editorial text-3xl text-slate-900 mb-2">Financial Transparency</h3>
        <p class="text-slate-500 text-sm leading-tight">Strategic scholarship partnerships and donor accountability (2022-2025).</p>
      </div>
      <div class="space-y-6">
        <div class="relative pt-1">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-accent bg-accent/10 font-display">Global Donors + Programs</span>
            <span class="text-xs font-bold text-accent font-display">Rs.21,26,753</span>
          </div>
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-accent/10">
            <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent" style="width:100%"></div>
          </div>
        </div>
        <div class="relative pt-1">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-sage bg-sage/10 font-display">PCT Scholarships</span>
            <span class="text-xs font-bold text-sage font-display">Rs.8,40,000</span>
          </div>
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-sage/10">
            <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sage" style="width:40%"></div>
          </div>
        </div>
        <div class="relative pt-1">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-100 font-display">APTA Scholarships</span>
            <span class="text-xs font-bold text-slate-500 font-display">Rs.1,66,000</span>
          </div>
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-slate-200">
            <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-400" style="width:8%"></div>
          </div>
        </div>
      </div>
      <div class="mt-10 p-6 bg-primary rounded-xl text-white text-center shadow-lg shadow-primary/10">
        <h4 class="text-lg font-bold mb-2">Support Our Work</h4>
        <p class="text-white/80 text-sm mb-6 leading-relaxed">Every contribution directly advances education and environmental resilience.</p>
        <a class="w-full py-3 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-slate-50 transition-colors block font-display" href="/m/contact">Donate Now</a>
      </div>
    </section>
  </main>
</div>`;

export function AboutMobilePage() {
  return <StaticMarkupPage html={html} />;
}