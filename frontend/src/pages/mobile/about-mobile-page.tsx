/**
 * @file about-mobile-page.tsx
 * @description Mobile about page rendered from the provided reference layout.
 * @module frontend/src/pages/mobile
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";
const suryaSrc = "/team/surya-bandaru.webp";
const kgRaoSrc = "/team/kg-rao.webp";
const srinivasuSrc = "/team/srinivasu-b.webp";
import pctLogo from "../../assets/PCT.webp";
import aptaLogo from "../../assets/APTA.webp";

const html = String.raw`
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased">
  <header class="sticky top-0 z-50 flex items-center bg-background-light/80 backdrop-blur-md px-4 py-4 justify-between border-b border-primary/10"><a class="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer" href="/m"><span class="material-symbols-outlined">arrow_back</span></a><h2 class="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">About Us</h2><div class="flex w-10 items-center justify-end"><button class="flex items-center justify-center rounded-full size-10 hover:bg-primary/10 text-primary"><span class="material-symbols-outlined">share</span></button></div></header>
  <main class="flex-1">
    <section class="px-4 py-6">
      <div class="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-xl shadow-sm" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz19yKKIXgvllFIZPFeIaYeh1GtyZi2A5Qx7q-_C-6nnGhYUlBYKYn_hngUteALTcnqO7HSyBMLLB830Gb6vnfyOobR2gmtg7NHBdCknZVorh8xofXDazRUs9GRbdxxNK7Co5EeYq9PG81SyUjJdwCGYub0DDGEdc_oxgXs9md61yjryicXY01dl9OrsY8A3ibIvM_0dNnd2akDIp1v-itUwFndU2QmQxpS36NJyx_wzjN8fuQ0ZDLZM1dnU0kuh6OjBemjWkEwogz")'></div>
      <div class="mt-8">
        <h1 class="text-slate-900 text-3xl font-bold leading-tight mb-4 text-center">Our Story</h1>
        <p class="text-slate-600 text-base font-normal leading-relaxed text-left">Founded in April 2022, Krutha Foundation connects people across the globe to their native village, Vadapalem, to build a self-sustainable thriving community.</p>
      </div>
    </section>
    <section class="px-4 py-8 bg-white">
      <h3 class="text-xl font-bold text-primary uppercase tracking-widest text-xs mb-4">Program Philosophy</h3>
      <div class="space-y-4 text-slate-600 leading-relaxed">
        <p>At Krutha Foundation, our programs are centered on people and the environment—recognizing the deep interdependence between human behaviour and the health of <strong>Earth, Water, and Air</strong>.</p>
        <p>Each initiative is designed to be transformational rather than transactional, addressing root causes through responsibility, discipline, and conscious choice among <strong>children, youth, women, farmers, traders, and elders</strong>.</p>
        <p>The impact we envision goes beyond immediate outcomes, securing a healthier, dignified, and sustainable future for generations to come. We work on <strong>9 Sustainable Development Goals (SDGs)</strong> set by the UN.</p>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="px-4 py-12 bg-slate-50 border-y border-slate-100">
      <div class="mb-10 text-center">
        <h3 class="text-2xl font-bold text-slate-900 mb-2">Our Strategic Partners</h3>
        <p class="text-slate-500 text-sm">Collaborating for sustainable impact.</p>
        <div class="h-1 w-12 bg-primary mx-auto rounded-full mt-4"></div>
      </div>
      
      <div class="space-y-6">
        <!-- PCT Mobile -->
        <div class="bg-white p-6 rounded-3xl border border-primary/5 shadow-sm space-y-5">
          <div class="flex items-center gap-4 border-b border-slate-50 pb-4">
            <div class="shrink-0 size-20 bg-slate-50 rounded-2xl p-2 flex items-center justify-center border border-slate-100">
              <img src="${pctLogo}" alt="PCT Logo" class="max-h-full max-w-full object-contain" />
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-primary text-lg leading-tight">Padala Charitable Trust (PCT)</h4>
              <a href="https://pct-india.org" class="text-[11px] text-primary font-bold uppercase tracking-wider flex items-center gap-1 mt-1">
                Official Site <span class="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          </div>
          <div class="space-y-4">
            <p class="text-slate-600 text-[13px] leading-relaxed">
              Our primary execution partner for the <strong>L.E.A.D.S. Program</strong>, providing Life Skills and Leadership training at ZPHS Vadapalem.
            </p>
            <div class="p-4 bg-primary/5 rounded-2xl border-l-2 border-primary italic">
              <p class="text-slate-700 text-[12px] leading-relaxed">
                "Ensuring financial constraints never stand in the way of academic excellence for our students."
              </p>
            </div>
          </div>
        </div>

        <!-- APTA Mobile -->
        <div class="bg-white p-6 rounded-3xl border border-primary/5 shadow-sm space-y-5">
          <div class="flex items-center gap-4 border-b border-slate-50 pb-4">
            <div class="shrink-0 size-20 bg-slate-50 rounded-2xl p-2 flex items-center justify-center border border-slate-100">
              <img src="${aptaLogo}" alt="APTA Logo" class="max-h-full max-w-full object-contain" />
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-primary text-lg leading-tight">APTA (USA)</h4>
              <a href="https://ap-ta.org" class="text-[11px] text-primary font-bold uppercase tracking-wider flex items-center gap-1 mt-1">
                Official Site <span class="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          </div>
          <div class="space-y-4">
            <p class="text-slate-600 text-[13px] leading-relaxed">
              Empowering students to pursue <strong>high-level professional degrees</strong> through vital scholarship contributions.
            </p>
            <div class="p-4 bg-primary/5 rounded-2xl border-l-2 border-primary italic">
              <p class="text-slate-700 text-[12px] leading-relaxed">
                "Representing the strength and generosity of the Telugu diaspora in the United States."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 p-5 bg-primary rounded-2xl shadow-lg shadow-primary/20">
        <p class="text-xs text-white font-medium text-center leading-relaxed">
          Together, we maintain a <span class="font-bold underline decoration-sage underline-offset-2">100% transparency rate</span> for every rupee donated.
        </p>
      </div>
    </section>
    <section class="px-4 py-8 space-y-6"><div class="bg-primary/5 p-6 rounded-xl border border-primary/10"><div class="flex items-center gap-3 mb-3 text-primary"><span class="material-symbols-outlined">target</span><h3 class="text-xl font-bold">Our Mission</h3></div><p class="text-slate-700 leading-relaxed">To connect people across the globe to their native village on one platform and enable them to serve their motherland by transforming Vadapalem into a self-sustainable thriving community.</p></div><div class="bg-primary/5 p-6 rounded-xl border border-primary/10"><div class="flex items-center gap-3 mb-3 text-primary"><span class="material-symbols-outlined">visibility</span><h3 class="text-xl font-bold">Our Vision</h3></div><p class="text-slate-700 leading-relaxed">A model village where children are guided, youth are directed, women are empowered, elders are supported, farmers thrive through natural methods, and surroundings remain plastic and garbage free.</p></div></section>    <!-- Leadership Team Section -->
    <section class="px-4 py-16 bg-white">
      <div class="mb-12 text-center">
        <h3 class="text-2xl font-bold text-slate-900 mb-2">Our Leadership</h3>
        <p class="text-slate-500 text-sm">Visionaries and execution experts.</p>
        <div class="h-1 w-12 bg-primary mx-auto rounded-full mt-4"></div>
      </div>

      <!-- Tier 1: Chairman -->
      <div class="mb-16">
        <div class="bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100 shadow-sm overflow-hidden text-center">
          <div class="size-48 mx-auto rounded-[2rem] overflow-hidden bg-slate-200 shadow-lg border-4 border-white mb-6">
            <img src="${suryaSrc}" alt="Surya Bandaru" class="w-full h-full object-cover" />
          </div>
          <h4 class="text-2xl font-bold text-slate-900">Surya Bandaru</h4>
          <p class="text-primary font-bold uppercase tracking-widest text-[10px] mb-6">Chairman & Founder</p>
          <div class="text-left space-y-4">
            <p class="text-slate-600 text-[14px] leading-relaxed">
              Visionary behind Krutha Foundation with 27+ years of corporate experience (Motorola, GE, Nokia) and extensive global exposure.
            </p>
            <p class="text-slate-600 text-[14px] leading-relaxed italic border-l-2 border-primary/20 pl-4 py-2 bg-white/50 rounded-r-xl">
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
            <div class="size-20 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-300 shrink-0">
              <span class="material-symbols-outlined text-4xl">person</span>
            </div>
            <div>
              <h4 class="text-lg font-bold text-slate-900 leading-tight">Srirama Chandra Murthy</h4>
              <p class="text-primary font-bold uppercase tracking-widest text-[9px]">Vice Chairman</p>
            </div>
          </div>
          <p class="text-slate-600 text-[13px] leading-relaxed">
            Distinguished veteran in education and sports administration. Secretary for India Olympic Association, Konaseema. Strategic lead for sports-centric development.
          </p>
        </div>

        <!-- General Secretary -->
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="size-20 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-300 shrink-0">
              <span class="material-symbols-outlined text-4xl">person</span>
            </div>
            <div>
              <h4 class="text-lg font-bold text-slate-900 leading-tight">Anand Bandaru</h4>
              <p class="text-primary font-bold uppercase tracking-widest text-[9px]">General Secretary</p>
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
              <h4 class="text-lg font-bold text-slate-900 leading-tight">K G Rao</h4>
              <p class="text-primary font-bold uppercase tracking-widest text-[9px]">Joint Secretary</p>
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
              <h4 class="text-lg font-bold text-slate-900 leading-tight">Srinivasu B</h4>
              <p class="text-primary font-bold uppercase tracking-widest text-[9px]">Treasurer</p>
            </div>
          </div>
          <p class="text-slate-600 text-[13px] leading-relaxed">
            Entrepreneur with global Singapore experience. Applies rigorous project management to ensure maximum donor efficiency.
          </p>
        </div>

      </div>

      <!-- Tier 3: Trustees -->
      <div class="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
        <h4 class="text-xl font-bold text-slate-900 mb-8 text-center">Board of Trustees</h4>
        <div class="space-y-8">
          <div class="space-y-2">
            <h5 class="font-bold text-slate-900">Pedapudi Bapi Raju</h5>
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
    </section><section class="px-4 py-10"><div class="mb-8"><h3 class="text-2xl font-bold text-slate-900 mb-2">Financial Transparency</h3><p class="text-slate-500 text-sm leading-tight">Strategic scholarship partnerships and donor accountability (2022-2025).</p></div><div class="space-y-6"><div class="relative pt-1"><div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/10">Global Donors + Programs</span><span class="text-xs font-bold text-primary">Rs.21,26,753</span></div><div class="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-primary/10"><div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary" style="width:100%"></div></div></div><div class="relative pt-1"><div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-600 bg-slate-100">PCT Scholarships</span><span class="text-xs font-bold text-slate-600">Rs.8,40,000</span></div><div class="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-slate-200"><div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-500" style="width:40%"></div></div></div><div class="relative pt-1"><div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-600 bg-slate-100">APTA Scholarships</span><span class="text-xs font-bold text-slate-600">Rs.1,66,000</span></div><div class="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-slate-200"><div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-400" style="width:8%"></div></div></div></div><div class="mt-10 p-6 bg-primary rounded-xl text-white text-center"><h4 class="text-lg font-bold mb-2">Support Our Work</h4><p class="text-primary/10 text-sm mb-6 opacity-90">Every contribution directly advances education and environmental resilience.</p><a class="w-full py-3 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-slate-50 transition-colors block" href="/m/contact">Donate Now</a></div></section></main>
  <footer class="sticky bottom-0 z-50 flex border-t border-primary/10 bg-background-light px-4 pb-4 pt-2 shadow-2xl"><a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m"><span class="material-symbols-outlined">home</span><p class="text-[10px] font-medium uppercase tracking-widest">Home</p></a><a class="flex flex-1 flex-col items-center justify-center gap-1 text-primary" href="/m/about"><span class="material-symbols-outlined">info</span><p class="text-[10px] font-bold uppercase tracking-widest">About</p></a><a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m/our-work"><span class="material-symbols-outlined">folder_shared</span><p class="text-[10px] font-medium uppercase tracking-widest">Projects</p></a><a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m/contact"><span class="material-symbols-outlined">volunteer_activism</span><p class="text-[10px] font-medium uppercase tracking-widest">Donate</p></a></footer>
</div>`;

export function AboutMobilePage() {
  return <StaticMarkupPage html={html} />;
}