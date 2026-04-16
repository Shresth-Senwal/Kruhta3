/**
 * @file about-desktop-page.tsx
 * @description Desktop about page rendered from the provided reference layout.
 * @module frontend/src/pages/desktop
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import { buildDesktopBrandLinkMarkup } from "../../components/layout/site-brand";
const suryaSrc = "/team/surya-bandaru.webp";
const kgRaoSrc = "/team/kg-rao.webp";
const srinivasuSrc = "/team/srinivasu-b.webp";
import pctLogo from "../../assets/PCT.webp";
import aptaLogo from "../../assets/APTA.webp";

const html = String.raw`
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-20 lg:px-40 py-4 bg-background-light/80 backdrop-blur-md sticky top-0 z-50">
    ${buildDesktopBrandLinkMarkup("/")}
    <div class="flex flex-1 justify-end gap-8 items-center">
      <nav class="hidden md:flex items-center gap-8">
        <a class="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="/">Home</a>
        <a class="text-primary text-sm font-bold transition-colors" href="/about">About Us</a>
        <a class="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="/our-work">Projects</a>
        <a class="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="/press">Transparency</a>
        <a class="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="/contact">Contact</a>
      </nav>
      <a class="flex min-w-[100px] items-center justify-center rounded-full h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-[#1a332a] transition-all shadow-sm" href="/contact">Donate</a>
    </div>
  </header>
  <main class="flex-1">
    <section class="px-6 md:px-20 lg:px-40 py-12">
      <div class="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-2xl">
        <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10"></div>
        <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz19yKKIXgvllFIZPFeIaYeh1GtyZi2A5Qx7q-_C-6nnGhYUlBYKYn_hngUteALTcnqO7HSyBMLLB830Gb6vnfyOobR2gmtg7NHBdCknZVorh8xofXDazRUs9GRbdxxNK7Co5EeYq9PG81SyUjJdwCGYub0DDGEdc_oxgXs9md61yjryicXY01dl9OrsY8A3ibIvM_0dNnd2akDIp1v-itUwFndU2QmQxpS36NJyx_wzjN8fuQ0ZDLZM1dnU0kuh6OjBemjWkEwogz" alt="Group of diverse people holding hands in a circle" />
        <div class="absolute bottom-0 left-0 p-8 md:p-12 z-20"><h1 class="text-white text-4xl md:text-5xl font-bold tracking-tight">Our Story</h1></div>
      </div>
    </section>
    <section class="px-6 md:px-20 lg:px-40 py-20 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-12 gap-12 items-start">
        <div class="md:col-span-7">
          <h2 class="text-primary uppercase tracking-widest text-sm font-bold mb-4">Our Core Philosophy</h2>
          <h3 class="text-slate-900 text-4xl md:text-5xl font-bold leading-tight mb-8">Nurturing Interdependence between People &amp; Environment</h3>
          <div class="text-slate-600 leading-relaxed text-lg space-y-6 text-justify">
            <p>At Krutha Foundation, our programs are centered on people and the environment—recognizing the deep interdependence between human behaviour and the health of <strong>Earth, Water, and Air</strong>. Each initiative is designed to be transformational rather than transactional, addressing root causes instead of symptoms.</p>
            <p>By nurturing responsibility, discipline, and conscious choice among <strong>children, youth, women, farmers, traders, and elders</strong>, our programs seek to reshape everyday habits and collective attitudes. The impact we envision goes beyond immediate outcomes, aiming to create a lasting shift in how villages live, consume, protect resources, and care for one another, thereby securing a healthier, dignified, and sustainable future for generations to come.</p>
            <div class="p-6 bg-primary/5 rounded-xl border border-primary/10 flex items-center gap-6 mt-8">
              <div class="size-16 shrink-0 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-3xl">public</span>
              </div>
              <div>
                <p class="text-slate-900 font-bold mb-1 font-display">Global Impact Commitment</p>
                <p class="text-sm">We aim big, and work on <strong>9 Sustainable Development Goals (SDGs)</strong> set by the United Nations (UN).</p>
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-5 md:sticky md:top-32 bg-primary/5 p-10 rounded-xl border-l-4 border-primary italic mt-12 md:mt-0">
          <span class="material-symbols-outlined text-primary text-4xl mb-4">format_quote</span>
          <blockquote class="text-2xl md:text-3xl font-display font-medium text-slate-800 leading-snug">&quot;Serve our Motherland and transform villages into self-sustainable thriving communities where life blossoms in all dimensions.&quot;</blockquote>
          <p class="mt-6 text-primary font-bold">&mdash; Krutha Foundation Vision</p>
        </div>
      </div>
    </section>

    <!-- Leadership Team Section -->
    <section class="px-6 md:px-20 lg:px-40 py-24 bg-[#fdfdfc]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-20">
          <span class="text-primary font-bold uppercase tracking-[0.3em] text-xs">Foundation Leadership</span>
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">Our Team</h2>
          <div style="height:2px;width:64px;background:#2d5e5b;margin:0 auto;border-radius:9999px;"></div>
        </div>

        <div style="border-top:1px solid #f1f5f9;">

          <!-- Surya Bandaru -->
          <div style="padding:48px 0;display:flex;gap:32px;align-items:flex-start;border-bottom:1px solid #f1f5f9;">
            <div style="flex-shrink:0;">
              <img src="${suryaSrc}" alt="Surya Bandaru" style="width:160px;height:160px;border-radius:16px;object-fit:cover;object-position:44% center;box-shadow:0 4px 16px rgba(0,0,0,0.12);" />
            </div>
            <div style="flex:1;min-width:0;">
              <h3 style="font-size:1.5rem;font-weight:700;color:#0f172a;margin:0 0 4px;">Surya Bandaru</h3>
              <p style="font-size:0.65rem;font-weight:700;color:#2d5e5b;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 16px;">Chairman</p>
              <div style="color:#475569;line-height:1.75;font-size:0.9375rem;">
                <p style="margin:0 0 12px;">Surya Bandaru is the visionary behind Krutha Foundation, driven by the mission to manifest a modern "Krutha Yuga" in rural India. An alumnus of NIT Warangal, Surya brings over 27 years of illustrious corporate experience from global giants including Motorola, GE, and Nokia.</p>
                <p style="margin:0 0 12px;">Having managed global teams and travelled extensively across multiple countries, Surya has gained a profound understanding of diverse cultures and world-class systemic efficiencies. This passion led him to volunteer with the Art of Living, Landmark Worldwide and Nizhal (Chennai), where he honed his approach to social transformation.</p>
                <p style="margin:0;">In April 2022, Surya took up the challenge to build sustainable village ecosystems with like-minded friends and a global network of the diaspora, blending corporate discipline with a deep-seated commitment to environmental and educational reforms.</p>
              </div>
            </div>
          </div>

          <!-- Srirama Chandra Murthy -->
          <div style="padding:48px 0;display:flex;gap:32px;align-items:flex-start;border-bottom:1px solid #f1f5f9;">
            <div style="flex-shrink:0;">
              <div style="width:160px;height:160px;border-radius:16px;background:#f1f5f9;border:1px solid #e2e8f0;display:flex;align-items:center;justify-content:center;">
                <span class="material-symbols-outlined" style="font-size:64px;color:#cbd5e1;">person</span>
              </div>
            </div>
            <div style="flex:1;min-width:0;">
              <h3 style="font-size:1.5rem;font-weight:700;color:#0f172a;margin:0 0 4px;">Srirama Chandra Murthy</h3>
              <p style="font-size:0.65rem;font-weight:700;color:#2d5e5b;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 16px;">Vice Chairman</p>
              <div style="color:#475569;line-height:1.75;font-size:0.9375rem;">
                <p style="margin:0 0 12px;">A distinguished veteran in education and sports administration with over three decades of leadership. A retired Physical Director for Government High Schools, he is widely recognized for his transformative work in reviving sports culture across the district—a career built on the belief that physical discipline is the cornerstone of academic and personal excellence.</p>
                <div style="background:#f0f9f8;border-left:3px solid #2d5e5b;border-radius:8px;padding:14px 16px;margin:12px 0;font-size:0.875rem;">
                  <p style="font-weight:600;color:#1e293b;margin:0 0 8px;">Key Leadership Positions:</p>
                  <p style="margin:0 0 4px;">• District Secretary, School Games Federation (SGF) of India — 3 years</p>
                  <p style="margin:0 0 4px;">• President, District Physical Education Association — 5 years</p>
                  <p style="margin:0;">• State Organizing Secretary, State Physical Education Association (2012–2014)</p>
                </div>
                <p style="margin:12px 0 0;">Currently serving as Secretary for the India Olympic Association (IOA), Konaseema District—organizing high-impact sports events for 2,000+ students across 100 high schools in 22 Mandals. As Vice Chairman, he is the visionary behind our sports-centric development strategy in the L.E.A.D.S. program.</p>
              </div>
            </div>
          </div>

          <!-- Anand Bandaru -->
          <div style="padding:48px 0;display:flex;gap:32px;align-items:flex-start;border-bottom:1px solid #f1f5f9;">
            <div style="flex-shrink:0;">
              <div style="width:160px;height:160px;border-radius:16px;background:#f1f5f9;border:1px solid #e2e8f0;display:flex;align-items:center;justify-content:center;">
                <span class="material-symbols-outlined" style="font-size:64px;color:#cbd5e1;">person</span>
              </div>
            </div>
            <div style="flex:1;min-width:0;">
              <h3 style="font-size:1.5rem;font-weight:700;color:#0f172a;margin:0 0 4px;">Anand Bandaru</h3>
              <p style="font-size:0.65rem;font-weight:700;color:#2d5e5b;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 16px;">General Secretary</p>
              <div style="color:#475569;line-height:1.75;font-size:0.9375rem;">
                <p style="margin:0 0 12px;">A founding member of Krutha Foundation, committed to enabling sustainable and inclusive development in his native village through education, community empowerment, and environmental restoration. An alumnus of BITS Pilani with over 25 years of distinguished corporate experience at IBM and Kyndryl.</p>
                <p style="margin:0 0 12px;">Throughout his career, he has led large, diverse teams delivering complex, large-scale technology and transformation programs. At Krutha Foundation, Anand focuses on scholarships, strengthening government schools, empowering women and youth, and rebuilding local ecological systems.</p>
                <p style="margin:0;">Deeply connected to his roots, Anand believes that true progress begins when communities are equipped with knowledge, confidence, and sustainable resources—blending corporate discipline with compassion, collaboration, and a strong sense of social responsibility.</p>
              </div>
            </div>
          </div>

          <!-- K G RAO -->
          <div style="padding:48px 0;display:flex;gap:32px;align-items:flex-start;border-bottom:1px solid #f1f5f9;">
            <div style="flex-shrink:0;">
              <img src="${kgRaoSrc}" alt="K G Rao" style="width:160px;height:160px;border-radius:16px;object-fit:cover;box-shadow:0 4px 16px rgba(0,0,0,0.12);" />
            </div>
            <div style="flex:1;min-width:0;">
              <h3 style="font-size:1.5rem;font-weight:700;color:#0f172a;margin:0 0 4px;">K G Rao</h3>
              <p style="font-size:0.65rem;font-weight:700;color:#2d5e5b;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 16px;">Joint Secretary</p>
              <div style="color:#475569;line-height:1.75;font-size:0.9375rem;">
                <p style="margin:0 0 12px;">A retired government professional and lifelong advocate for social justice. Having retired as an Assistant Manager from Alwyn Systems, Hyderabad, he brings decades of administrative expertise to the foundation's grassroots initiatives. Driven by the philosophy that one's birthplace is as sacred as a mother, he has dedicated his post-retirement life to giving back.</p>
                <p style="margin:0 0 12px;">He is widely recognized for his selfless service—assisting during medical emergencies, navigating bureaucratic complexities for fellow villagers, and his current pursuit of an LLB to further advocate for community welfare. Leads the foundation's dedicated five-member execution team overseeing both the Education and Environment pillars.</p>
                <p style="margin:0;font-style:italic;border-left:2px solid #cbd5e1;padding-left:14px;color:#64748b;">"Serving my village is not a choice, but a duty toward the land that raised me. Every step we take in education or ecology is a step toward honoring our roots."</p>
              </div>
            </div>
          </div>

          <!-- Srinivasu B -->
          <div style="padding:48px 0;display:flex;gap:32px;align-items:flex-start;border-bottom:1px solid #f1f5f9;">
            <div style="flex-shrink:0;">
              <img src="${srinivasuSrc}" alt="Srinivasu B" style="width:160px;height:160px;border-radius:16px;object-fit:cover;box-shadow:0 4px 16px rgba(0,0,0,0.12);" />
            </div>
            <div style="flex:1;min-width:0;">
              <h3 style="font-size:1.5rem;font-weight:700;color:#0f172a;margin:0 0 4px;">Srinivasu B</h3>
              <p style="font-size:0.65rem;font-weight:700;color:#2d5e5b;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 16px;">Treasurer</p>
              <div style="color:#475569;line-height:1.75;font-size:0.9375rem;">
                <p style="margin:0 0 12px;">Brings a unique blend of international exposure and entrepreneurial experience. A Mathematics and Computer Science graduate, he began his professional journey in Singapore before returning to India in 2009 to found Rohan Infrastructure—executing high-stakes projects for Reliance Communications, Reliance Retail, and a flagship Decathlon showroom in Hyderabad.</p>
                <p style="margin:0;">His transition from large-scale infrastructure to community-scale impact is driven by a deep sense of heritage. For the past two years, he has led the construction of a local temple in his native village. As Treasurer, Srinivasu applies rigorous financial discipline to ensure every donated rupee is utilized with maximum efficiency and transparency.</p>
              </div>
            </div>
          </div>

          <!-- Pedapudi Bapi Raju -->
          <div style="padding:48px 0;display:flex;gap:32px;align-items:flex-start;border-bottom:1px solid #f1f5f9;">
            <div style="flex-shrink:0;">
              <div style="width:160px;height:160px;border-radius:16px;background:#f1f5f9;border:1px solid #e2e8f0;display:flex;align-items:center;justify-content:center;">
                <span class="material-symbols-outlined" style="font-size:64px;color:#cbd5e1;">person</span>
              </div>
            </div>
            <div style="flex:1;min-width:0;">
              <h3 style="font-size:1.5rem;font-weight:700;color:#0f172a;margin:0 0 4px;">Pedapudi Bapi Raju</h3>
              <p style="font-size:0.65rem;font-weight:700;color:#2d5e5b;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 16px;">Trustee</p>
              <div style="color:#475569;line-height:1.75;font-size:0.9375rem;">
                <p style="margin:0 0 12px;">"Farmer to the Core" and tireless architect of social change in Konaseema for over three decades. Since 1990 with the Rotaract Club, he has led blood donation drives, life-changing eye surgery camps, and national Pulse-Polio campaigns.</p>
                <p style="margin:0 0 12px;">In 2000, he established the Pedapudi Bapi Raju Veeramma Society—empowering women through vocational training, supporting veterinary health, and fostering youth excellence in sports. Named "Best Youth Leader" and received "Best Youth Organization" award at the district level (2006-07).</p>
                <p style="margin:0;">As a Trustee of Krutha Foundation, Bapi Raju Garu brings the wisdom of a practitioner—advocating for organic agriculture, combating single-use plastic, and ensuring disadvantaged communities access government welfare, rooted in the "Krutha" ideal of selfless service.</p>
              </div>
            </div>
          </div>

          <!-- Subba Rao Karibandi -->
          <div style="padding:48px 0;display:flex;gap:32px;align-items:flex-start;">
            <div style="flex-shrink:0;">
              <div style="width:160px;height:160px;border-radius:16px;background:#f1f5f9;border:1px solid #e2e8f0;display:flex;align-items:center;justify-content:center;">
                <span class="material-symbols-outlined" style="font-size:64px;color:#cbd5e1;">person</span>
              </div>
            </div>
            <div style="flex:1;min-width:0;">
              <h3 style="font-size:1.5rem;font-weight:700;color:#0f172a;margin:0 0 4px;">Subba Rao Karibandi</h3>
              <p style="font-size:0.65rem;font-weight:700;color:#2d5e5b;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 16px;">Trustee</p>
              <div style="color:#475569;line-height:1.75;font-size:0.9375rem;">
                <p style="margin:0 0 12px;">The foundation's primary bridge between vision and ground-level execution. A humanitarian by heart and the "Torch Bearer" of the L.E.A.D.S. Program—serving as the primary liaison between our Partner Organization (PCT), school authorities, students, and parents.</p>
                <p style="margin:0 0 12px;">His maturity and soft-spoken nature allow him to guide parents through the complexities of their children's educational journeys with empathy. He works tirelessly to identify meritorious but underprivileged students, coordinating with PCT and APTA to bridge the financial gap for higher education.</p>
                <p style="margin:0;">Deeply spiritual and community-oriented, he also leads extensive volunteer temple restoration efforts in his native village—embodying Krutha Foundation's commitment to Integrity and Grassroots Empowerment, ensuring that no deserving student is left behind.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="px-6 md:px-20 lg:px-40 py-24 bg-white border-t border-slate-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Strategic Partners</h2>
          <div class="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p class="max-w-3xl mx-auto text-slate-600 text-lg">
            At Krutha Foundation, we believe in the power of collaboration. By uniting with world-class organizations, we combine local passion with global expertise to create a sustainable ecosystem for our students.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-10">
          <!-- PCT Card -->
          <div class="flex flex-col rounded-3xl bg-white border border-primary/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            <div class="p-8 pb-4 flex items-center gap-6">
              <div class="shrink-0 size-24 flex items-center justify-center bg-slate-50 rounded-2xl p-3 border border-slate-100 shadow-inner">
                <img src="${pctLogo}" alt="PCT Logo" class="max-h-full max-w-full object-contain" />
              </div>
              <div class="flex-1">
                <div class="flex items-start justify-between">
                  <h4 class="text-2xl font-bold text-primary leading-tight">Padala Charitable Trust (PCT)</h4>
                  <a href="https://pct-india.org" target="_blank" rel="noopener noreferrer" class="p-2 bg-primary/5 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <span class="material-symbols-outlined text-xl">language</span>
                  </a>
                </div>
                <p class="text-teal-600/70 text-sm font-bold uppercase tracking-wider mt-1">Primary Execution Partner</p>
              </div>
            </div>
            <div class="px-8 pb-8 space-y-6">
              <p class="text-slate-600 text-[15px] leading-relaxed">
                Padala Charitable Trust brings over two decades of experience in rural education reform. Their year-long curriculum at ZPHS Vadapalem provides students with foundational <strong>Life Skills, Adolescent Education, and Leadership training</strong> that bridges the gap in traditional schooling.
              </p>
              <div class="p-5 rounded-2xl bg-primary/5 border-l-2 border-primary italic">
                <p class="text-slate-700 text-[14px] leading-relaxed">
                  "Beyond the classroom, PCT is a pillar of our scholarship initiative, ensuring financial constraints never stand in the way of academic excellence for meritorious students."
                </p>
              </div>
            </div>
          </div>

          <!-- APTA Card -->
          <div class="flex flex-col rounded-3xl bg-white border border-primary/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            <div class="p-8 pb-4 flex items-center gap-6">
              <div class="shrink-0 size-24 flex items-center justify-center bg-slate-50 rounded-2xl p-3 border border-slate-100 shadow-inner">
                <img src="${aptaLogo}" alt="APTA Logo" class="max-h-full max-w-full object-contain" />
              </div>
              <div class="flex-1">
                <div class="flex items-start justify-between">
                  <h4 class="text-2xl font-bold text-primary leading-tight">APTA (USA)</h4>
                  <a href="https://ap-ta.org" target="_blank" rel="noopener noreferrer" class="p-2 bg-primary/5 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <span class="material-symbols-outlined text-xl">language</span>
                  </a>
                </div>
                <p class="text-teal-600/70 text-sm font-bold uppercase tracking-wider mt-1">Scholarship Support Partner</p>
              </div>
            </div>
            <div class="px-8 pb-8 space-y-6">
              <p class="text-slate-600 text-[15px] leading-relaxed">
                Representing the strength of the Telugu diaspora in the United States, APTA has been a vital supporter for the last two years. Their focus on empowering students to pursue <strong>high-level professional degrees</strong> transforms lives and entire families.
              </p>
              <div class="p-5 rounded-2xl bg-primary/5 border-l-2 border-primary italic">
                <p class="text-slate-700 text-[14px] leading-relaxed">
                  "Through APTA's contributions, we bridge the funding gap for students entering engineering and other professional streams, manifesting real social mobility."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-20 p-8 rounded-2xl bg-primary text-white text-center shadow-lg shadow-primary/20">
          <p class="text-xl font-medium">
            Together, these partnerships allow Krutha Foundation to maintain a <span class="font-bold underline decoration-sage decoration-4 underline-offset-4">100% transparency rate</span> and ensure that every rupee donated goes directly toward student transformation.
          </p>
        </div>
      </div>
    </section>
    <section class="px-6 md:px-20 lg:px-40 py-20 bg-primary/5">
      <div class="max-w-6xl mx-auto"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Financial Transparency</h2><p class="text-slate-600">100% transparent utilization with strategic NGO partnerships.</p></div><div class="grid lg:grid-cols-2 gap-16 items-center"><div class="flex flex-col items-center justify-center"><div class="relative size-72 flex items-center justify-center"><svg class="w-full h-full transform -rotate-90"><circle class="text-slate-200" cx="144" cy="144" fill="transparent" r="120" stroke="currentColor" stroke-width="24"></circle><circle class="text-[#8acac5]" cx="144" cy="144" fill="transparent" r="120" stroke="currentColor" stroke-dasharray="753.98" stroke-dashoffset="503" stroke-width="24"></circle><circle class="text-primary" cx="144" cy="144" fill="transparent" r="120" stroke="currentColor" stroke-dasharray="753.98" stroke-dashoffset="695" stroke-width="24"></circle></svg><div class="absolute text-center"><p class="text-3xl font-bold text-slate-900">Rs.21,26,753</p><p class="text-xs uppercase tracking-widest text-slate-500">Total Raised (2022-2025)</p></div></div><div class="mt-8 flex gap-6 text-sm"><div class="flex items-center gap-2"><div class="size-3 rounded-full bg-[#8acac5]"></div><span>PCT (Rs.8.40L)</span></div><div class="flex items-center gap-2"><div class="size-3 rounded-full bg-primary"></div><span>APTA (Rs.1.66L)</span></div><div class="flex items-center gap-2"><div class="size-3 rounded-full bg-slate-200"></div><span>Global Donors</span></div></div></div><div class="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm"><table class="w-full text-left"><thead class="bg-primary text-white"><tr><th class="px-6 py-4 font-semibold text-sm">Contributor Source</th><th class="px-6 py-4 font-semibold text-sm text-right">Amount (INR)</th></tr></thead><tbody class="divide-y divide-slate-100"><tr><td class="px-6 py-4 text-slate-700">Padala Charitable Trust (PCT)</td><td class="px-6 py-4 text-right font-medium text-slate-900">Rs.8,40,000</td></tr><tr><td class="px-6 py-4 text-slate-700">American Progressive Telugu Association (APTA)</td><td class="px-6 py-4 text-right font-medium text-slate-900">Rs.1,66,000</td></tr><tr><td class="px-6 py-4 text-slate-700">Individual Global Diaspora</td><td class="px-6 py-4 text-right font-medium text-slate-900">Rs.11,20,753</td></tr><tr class="bg-primary/5"><td class="px-6 py-4 font-bold text-primary">Total Funds Mobilized</td><td class="px-6 py-4 text-right font-bold text-primary">Rs.21,26,753</td></tr></tbody></table></div></div></div>
    </section>
  </main>
  <footer class="bg-[#2d5e5b] text-white/80 px-6 md:px-20 lg:px-40 py-16"><div class="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12"><div class="col-span-1 md:col-span-1"><div class="flex items-center gap-3 text-white mb-6"><span class="material-symbols-outlined text-2xl">foundation</span><span class="text-lg font-bold">Krutha Foundation</span></div><p class="text-sm leading-relaxed">Empowering communities through transparent philanthropy and sustainable development.</p></div><div><h5 class="text-white font-bold mb-6">Quick Links</h5><ul class="space-y-4 text-sm"><li><a class="hover:text-white transition-colors" href="/about">Our History</a></li><li><a class="hover:text-white transition-colors" href="/our-work">Active Projects</a></li><li><a class="hover:text-white transition-colors" href="/press">Trustee Reports</a></li><li><a class="hover:text-white transition-colors" href="/contact">Ways to Give</a></li></ul></div><div><h5 class="text-white font-bold mb-6">Transparency</h5><ul class="space-y-4 text-sm"><li><a class="hover:text-white transition-colors" href="/press">Financial Reports</a></li><li><a class="hover:text-white transition-colors" href="/about">Governance</a></li><li><a class="hover:text-white transition-colors" href="/blog">Impact Stories</a></li><li><a class="hover:text-white transition-colors" href="/contact">Compliance</a></li></ul></div><div><h5 class="text-white font-bold mb-6">Contact Us</h5><ul class="space-y-4 text-sm"><li class="flex items-start gap-3"><span class="material-symbols-outlined text-sm pt-1 text-primary/40">location_on</span><span>Hyderabad, Telangana, India</span></li><li class="flex items-center gap-3"><span class="material-symbols-outlined text-sm text-primary/40">mail</span><span>hello@krutha.org</span></li></ul></div></div><div class="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-white/40"><p>(c) 2024 Krutha Foundation. All rights reserved.</p><div class="flex gap-8 mt-4 md:mt-0"><a class="hover:text-white" href="/contact">Privacy Policy</a><a class="hover:text-white" href="/contact">Terms of Service</a></div></div></footer>

</div>`;

export function AboutDesktopPage() {
  return <StaticMarkupPage html={html} />;
}