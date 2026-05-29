/**
 * @file about-desktop-page.tsx
 * @description Desktop about page rendered from the provided reference layout.
 * @module frontend/src/pages/desktop
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import { buildDesktopHeaderMarkup } from "../../components/layout/site-navigation";
import { buildDesktopBrandLinkMarkup } from "../../components/layout/site-brand";

const suryaSrc = "/team/surya-bandaru.webp";
const kgRaoSrc = "/team/kg-rao.webp";
const srinivasuSrc = "/team/srinivasu-b.webp";
const pctLogo = "/partners/PCT.webp";
const aptaLogo = "/partners/APTA.webp";

const html = String.raw`
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
  ${buildDesktopHeaderMarkup("/about")}
  <main class="flex-1">
    <section class="px-6 md:px-20 lg:px-40 py-12">
      <div class="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
        <div class="absolute inset-0 bg-linear-to-t from-black/70 to-transparent z-10"></div>
        <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz19yKKIXgvllFIZPFeIaYeh1GtyZi2A5Qx7q-_C-6nnGhYUlBYKYn_hngUteALTcnqO7HSyBMLLB830Gb6vnfyOobR2gmtg7NHBdCknZVorh8xofXDazRUs9GRbdxxNK7Co5EeYq9PG81SyUjJdwCGYub0DDGEdc_oxgXs9md61yjryicXY01dl9OrsY8A3ibIvM_0dNnd2akDIp1v-itUwFndU2QmQxpS36NJyx_wzjN8fuQ0ZDLZM1dnU0kuh6OjBemjWkEwogz" alt="Group of diverse people holding hands in a circle" />
        <div class="absolute bottom-0 left-0 p-8 md:p-12 z-20"><h1 class="font-editorial text-white text-5xl md:text-6xl leading-tight">Our Story</h1></div>
      </div>
    </section>
    <section class="px-6 md:px-20 lg:px-40 py-20 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-12 gap-12 items-start">
        <div class="md:col-span-7">
          <h2 class="text-accent uppercase tracking-widest text-sm font-bold mb-4 font-display">Our Core Philosophy</h2>
          <h3 class="font-editorial text-slate-900 text-4xl md:text-5xl leading-tight mb-8">Nurturing Interdependence between People &amp; Environment</h3>
          <div class="text-slate-600 leading-relaxed text-lg space-y-6 text-justify">
            <p>At Krutha Foundation, our programs are centered on people and the environment—recognizing the deep interdependence between human behaviour and the health of <strong>Earth, Water, and Air</strong>.</p>
            <p>Each initiative is designed to be transformational rather than transactional, addressing root causes instead of symptoms. By nurturing responsibility, discipline, and conscious choice among <strong>children, youth, women, farmers, traders, and elders</strong>, our programs seek to reshape everyday habits and collective attitudes. The impact we envision goes beyond immediate outcomes, aiming to create a lasting shift in how villages live, consume, protect resources, and care for one another, thereby securing a healthier, dignified, and sustainable future for generations to come.</p>
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
        <div class="md:col-span-5 md:sticky md:top-32 bg-accent/5 p-10 rounded-2xl border-l-4 border-accent italic mt-12 md:mt-0 shadow-sm">
          <span class="material-symbols-outlined text-accent text-4xl mb-4">format_quote</span>
          <blockquote class="text-2xl md:text-3xl font-serif font-medium text-slate-800 leading-snug">&quot;Serve our Motherland and transform villages into self-sustainable thriving communities where life blossoms in all dimensions.&quot;</blockquote>
          <p class="mt-6 text-accent font-bold">&mdash; Krutha Foundation Vision</p>
        </div>
      </div>
    </section>

    <!-- Leadership Team Section -->
    <section id="team" class="scroll-mt-32 px-6 md:px-20 lg:px-40 py-24 bg-white border-t border-primary/5">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-20">
          <span class="text-accent font-bold uppercase tracking-[0.3em] text-xs font-display">Foundation Leadership</span>
          <h2 class="font-editorial text-4xl md:text-5xl text-slate-900 mt-4 mb-6">Our Team</h2>
          <div class="h-1 w-16 bg-accent mx-auto rounded-full mt-4"></div>
        </div>

        <div class="border-t border-primary/10">

          <!-- Surya Bandaru -->
          <div class="py-12 flex gap-8 items-start border-b border-primary/10">
            <div class="shrink-0">
              <img src="${suryaSrc}" alt="Surya Bandaru" class="w-40 h-40 rounded-2xl object-cover shadow-md border border-primary/10" style="object-position:44% center;" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-editorial text-2xl text-slate-900 mb-1">Surya Bandaru</h3>
              <p class="text-xs font-bold text-accent uppercase tracking-widest mb-4 font-display">Chairman</p>
              <div class="text-slate-600 leading-relaxed text-sm space-y-3">
                <p>Surya Bandaru is the visionary behind Krutha Foundation, driven by the mission to manifest a modern "Krutha Yuga" in rural India. An alumnus of NIT Warangal, Surya brings over 27 years of illustrious corporate experience from global giants including Motorola, GE, and Nokia.</p>
                <p>Having managed global teams and travelled extensively across multiple countries, Surya has gained a profound understanding of diverse cultures and world-class systemic efficiencies. This passion led him to volunteer with the Art of Living, Landmark Worldwide and Nizhal (Chennai), where he honed his approach to social transformation.</p>
                <p>In April 2022, Surya took up the challenge to build sustainable village ecosystems with like-minded friends and a global network of the diaspora, blending corporate discipline with a deep-seated commitment to environmental and educational reforms.</p>
              </div>
            </div>
          </div>

          <!-- Srirama Chandra Murthy P -->
          <div class="py-12 flex gap-8 items-start border-b border-primary/10">
            <div class="shrink-0">
              <div class="w-40 h-40 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center shadow-inner">
                <span class="material-symbols-outlined text-5xl text-primary/40">person</span>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-editorial text-2xl text-slate-900 mb-1">Srirama Chandra Murthy P</h3>
              <p class="text-xs font-bold text-accent uppercase tracking-widest mb-4 font-display">Vice Chairman</p>
              <div class="text-slate-600 leading-relaxed text-sm space-y-3">
                <p>A distinguished veteran in education and sports administration with over three decades of leadership. A retired Physical Director for Government High Schools, he is widely recognized for his transformative work in reviving sports culture across the district—a career built on the belief that physical discipline is the cornerstone of academic and personal excellence.</p>
                <div class="bg-accent/5 border-l-4 border-accent rounded-xl p-4 my-4">
                  <p class="font-bold text-slate-800 mb-2 text-xs uppercase tracking-wider font-display">Key Leadership Positions:</p>
                  <ul class="space-y-1 text-xs">
                    <li>• District Secretary, School Games Federation (SGF) of India — 3 years</li>
                    <li>• President, District Physical Education Association — 5 years</li>
                    <li>• State Organizing Secretary, State Physical Education Association (2012–2014)</li>
                  </ul>
                </div>
                <p>Currently serving as Secretary for the India Olympic Association (IOA), Konaseema District—organizing high-impact sports events for 2,000+ students across 100 high schools in 22 Mandals. As Vice Chairman, he is the visionary behind our sports-centric development strategy in the L.E.A.D.S. program.</p>
              </div>
            </div>
          </div>

          <!-- Anand Bandaru -->
          <div class="py-12 flex gap-8 items-start border-b border-primary/10">
            <div class="shrink-0">
              <div class="w-40 h-40 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center shadow-inner">
                <span class="material-symbols-outlined text-5xl text-primary/40">person</span>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-editorial text-2xl text-slate-900 mb-1">Anand Bandaru</h3>
              <p class="text-xs font-bold text-accent uppercase tracking-widest mb-4 font-display">General Secretary</p>
              <div class="text-slate-600 leading-relaxed text-sm space-y-3">
                <p>A founding member of Krutha Foundation, committed to enabling sustainable and inclusive development in his native village through education, community empowerment, and environmental restoration. An alumnus of BITS Pilani with over 25 years of distinguished corporate experience at IBM and Kyndryl.</p>
                <p>Throughout his career, he has led large, diverse teams delivering complex, large-scale technology and transformation programs. At Krutha Foundation, Anand focuses on scholarships, strengthening government schools, empowering women and youth, and rebuilding local ecological systems.</p>
                <p>Deeply connected to his roots, Anand believes that true progress begins when communities are equipped with knowledge, confidence, and sustainable resources—blending corporate discipline with compassion, collaboration, and a strong sense of social responsibility.</p>
              </div>
            </div>
          </div>

          <!-- K G RAO -->
          <div class="py-12 flex gap-8 items-start border-b border-primary/10">
            <div class="shrink-0">
              <img src="${kgRaoSrc}" alt="K G Rao" class="w-40 h-40 rounded-2xl object-cover shadow-md border border-primary/10" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-editorial text-2xl text-slate-900 mb-1">K G Rao</h3>
              <p class="text-xs font-bold text-accent uppercase tracking-widest mb-4 font-display">Joint Secretary</p>
              <div class="text-slate-600 leading-relaxed text-sm space-y-3">
                <p>A retired government professional and lifelong advocate for social justice. Having retired as an Assistant Manager from Alwyn Systems, Hyderabad, he brings decades of administrative expertise to the foundation's grassroots initiatives. Driven by the philosophy that one's birthplace is as sacred as a mother, he has dedicated his post-retirement life to giving back.</p>
                <p>He is widely recognized for his selfless service—assisting during medical emergencies, navigating bureaucratic complexities for fellow villagers, and his current pursuit of an LLB to further advocate for community welfare. Leads the foundation's dedicated five-member execution team overseeing both the Education and Environment pillars.</p>
                <div class="border-l-4 border-accent bg-accent/5 rounded-r-xl p-4 my-4 italic text-slate-700">
                  "Serving my village is not a choice, but a duty toward the land that raised me. Every step we take in education or ecology is a step toward honoring our roots."
                </div>
              </div>
            </div>
          </div>

          <!-- Srinivasu B -->
          <div class="py-12 flex gap-8 items-start border-b border-primary/10">
            <div class="shrink-0">
              <img src="${srinivasuSrc}" alt="Srinivasu B" class="w-40 h-40 rounded-2xl object-cover shadow-md border border-primary/10" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-editorial text-2xl text-slate-900 mb-1">Srinivasu B</h3>
              <p class="text-xs font-bold text-accent uppercase tracking-widest mb-4 font-display">Treasurer</p>
              <div class="text-slate-600 leading-relaxed text-sm space-y-3">
                <p>Brings a unique blend of international exposure and entrepreneurial experience. A Mathematics and Computer Science graduate, he began his professional journey in Singapore before returning to India in 2009 to found Rohan Infrastructure—executing high-stakes projects for Reliance Communications, Reliance Retail, and a flagship Decathlon showroom in Hyderabad.</p>
                <p>His transition from large-scale infrastructure to community-scale impact is driven by a deep sense of heritage. For the past two years, he has led the construction of a local temple in his native village. As Treasurer, Srinivasu applies rigorous financial discipline to ensure every donated rupee is utilized with maximum efficiency and transparency.</p>
              </div>
            </div>
          </div>

          <!-- Bapi Raju Pedapudi -->
          <div class="py-12 flex gap-8 items-start border-b border-primary/10">
            <div class="shrink-0">
              <div class="w-40 h-40 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center shadow-inner">
                <span class="material-symbols-outlined text-5xl text-primary/40">person</span>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-editorial text-2xl text-slate-900 mb-1">Bapi Raju Pedapudi</h3>
              <p class="text-xs font-bold text-accent uppercase tracking-widest mb-4 font-display">Trustee</p>
              <div class="text-slate-600 leading-relaxed text-sm space-y-3">
                <p>"Farmer to the Core" and tireless architect of social change in Konaseema for over three decades. Since 1990 with the Rotaract Club, he has led blood donation drives, life-changing eye surgery camps, and national Pulse-Polio campaigns.</p>
                <p>In 2000, he established the Bapi Raju Pedapudi Veeramma Society—empowering women through vocational training, supporting veterinary health, and fostering youth excellence in sports. Named "Best Youth Leader" and received "Best Youth Organization" award at the district level (2006-07).</p>
                <p>As a Trustee of Krutha Foundation, Bapi Raju Garu brings the wisdom of a practitioner—advocating for organic agriculture, combating single-use plastic, and ensuring disadvantaged communities access government welfare, rooted in the "Krutha" ideal of selfless service.</p>
              </div>
            </div>
          </div>

          <!-- Subba Rao Karibandi -->
          <div class="py-12 flex gap-8 items-start">
            <div class="shrink-0">
              <div class="w-40 h-40 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center shadow-inner">
                <span class="material-symbols-outlined text-5xl text-primary/40">person</span>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-editorial text-2xl text-slate-900 mb-1">Subba Rao Karibandi</h3>
              <p class="text-xs font-bold text-accent uppercase tracking-widest mb-4 font-display">Trustee</p>
              <div class="text-slate-600 leading-relaxed text-sm space-y-3">
                <p>The foundation's primary bridge between vision and ground-level execution. A humanitarian by heart and the "Torch Bearer" of the L.E.A.D.S. Program—serving as the primary liaison between our Partner Organization (PCT), school authorities, students, and parents.</p>
                <p>His maturity and soft-spoken nature allow him to guide parents through the complexities of their children's educational journeys with empathy. He works tirelessly to identify meritorious but underprivileged students, coordinating with PCT and APTA to bridge the financial gap for higher education.</p>
                <p>Deeply spiritual and community-oriented, he also leads extensive volunteer temple restoration efforts in his native village—embodying Krutha Foundation's commitment to Integrity and Grassroots Empowerment, ensuring that no deserving student is left behind.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section id="partners" class="scroll-mt-32 px-6 md:px-20 lg:px-40 py-24 bg-background-light border-t border-primary/5">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-editorial text-3xl md:text-4xl text-slate-900 mb-4">Our Strategic Partners</h2>
          <div class="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
          <p class="max-w-3xl mx-auto text-slate-600 text-lg">
            At Krutha Foundation, we believe in the power of collaboration. By uniting with world-class organizations, we combine local passion with global expertise to create a sustainable ecosystem for our students.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-10">
          <!-- PCT Card -->
          <div class="flex flex-col rounded-3xl bg-white border border-primary/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-sm">
            <div class="p-8 pb-4 flex items-center gap-6">
              <div class="shrink-0 size-24 flex items-center justify-center bg-slate-50 rounded-2xl p-3 border border-slate-100 shadow-inner">
                <img src="${pctLogo}" alt="PCT Logo" class="max-h-full max-w-full object-contain" />
              </div>
              <div class="flex-1">
                <div class="flex items-start justify-between">
                  <h4 class="font-editorial text-2xl text-slate-900 leading-tight">Padala Charitable Trust (PCT)</h4>
                  <a href="https://pct-india.org" target="_blank" rel="noopener noreferrer" class="p-2 bg-primary/5 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <span class="material-symbols-outlined text-xl">language</span>
                  </a>
                </div>
                <p class="text-accent text-xs font-bold uppercase tracking-wider mt-2 font-display">Primary Execution Partner</p>
              </div>
            </div>
            <div class="px-8 pb-8 space-y-6">
              <p class="text-slate-600 text-[15px] leading-relaxed">
                Padala Charitable Trust brings over two decades of experience in rural education reform. Their year-long curriculum at ZPHS Vadapalem provides students with foundational <strong>Life Skills, Adolescent Education, and Leadership training</strong> that bridges the gap in traditional schooling.
              </p>
              <div class="p-5 rounded-2xl bg-accent/5 border-l-4 border-accent italic shadow-sm">
                <p class="text-slate-700 text-[14px] leading-relaxed">
                  "Beyond the classroom, PCT is a pillar of our scholarship initiative, ensuring financial constraints never stand in the way of academic excellence for meritorious students."
                </p>
              </div>
            </div>
          </div>

          <!-- APTA Card -->
          <div class="flex flex-col rounded-3xl bg-white border border-primary/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-sm">
            <div class="p-8 pb-4 flex items-center gap-6">
              <div class="shrink-0 size-24 flex items-center justify-center bg-slate-50 rounded-2xl p-3 border border-slate-100 shadow-inner">
                <img src="${aptaLogo}" alt="APTA Logo" class="max-h-full max-w-full object-contain" />
              </div>
              <div class="flex-1">
                <div class="flex items-start justify-between">
                  <h4 class="font-editorial text-2xl text-slate-900 leading-tight">APTA (USA)</h4>
                  <a href="https://ap-ta.org" target="_blank" rel="noopener noreferrer" class="p-2 bg-primary/5 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <span class="material-symbols-outlined text-xl">language</span>
                  </a>
                </div>
                <p class="text-accent text-xs font-bold uppercase tracking-wider mt-2 font-display">Scholarship Support Partner</p>
              </div>
            </div>
            <div class="px-8 pb-8 space-y-6">
              <p class="text-slate-600 text-[15px] leading-relaxed">
                Representing the strength of the Telugu diaspora in the United States, APTA has been a vital supporter for the last two years. Their focus on empowering students to pursue <strong>high-level professional degrees</strong> transforms lives and entire families.
              </p>
              <div class="p-5 rounded-2xl bg-accent/5 border-l-4 border-accent italic shadow-sm">
                <p class="text-slate-700 text-[14px] leading-relaxed">
                  "Through APTA's contributions, we bridge the funding gap for students entering engineering and other professional streams, manifesting real social mobility."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-20 p-8 rounded-3xl bg-primary text-white text-center shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform">
          <p class="text-xl font-medium">
            Together, these partnerships allow Krutha Foundation to maintain a <span class="font-bold underline decoration-accent decoration-4 underline-offset-4">100% transparency rate</span> and ensure that every rupee donated goes directly toward student transformation.
          </p>
        </div>
      </div>
    </section>

    <!-- Global Impact Alignment Section -->
    <section class="py-24 bg-white border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-20">
          <h2 class="font-editorial text-3xl md:text-5xl text-slate-900 mb-6">Global Impact Alignment</h2>
          <p class="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed font-display">Our programs are locally driven but globally aligned. We are committed to the United Nations Sustainable Development Goals to build a resilient and equitable future for all.</p>
          <div class="h-1.5 w-24 bg-accent mx-auto rounded-full mt-8"></div>
        </div>
        
        <div class="flex flex-wrap justify-center gap-4">
          <!-- Aligned SDGs - Centered layout -->
          ${[3, 4, 5, 6, 8, 11, 12, 13, 15].map(num => `
            <div class="group relative size-40 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              <img src="/sdgs/sdg${num}.webp" alt="SDG ${num}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section id="transparency" class="scroll-mt-32 px-6 md:px-20 lg:px-40 py-24 bg-background-light border-t border-primary/5">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-editorial text-3xl md:text-4xl text-slate-900 mb-4">Financial Transparency</h2>
          <p class="text-slate-600">100% transparent utilization with strategic NGO partnerships.</p>
        </div>
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="flex flex-col items-center justify-center bg-white p-10 rounded-3xl border border-primary/10 shadow-sm">
            <div class="relative size-72 flex items-center justify-center">
              <svg class="w-full h-full transform -rotate-90">
                <circle class="text-slate-200" cx="144" cy="144" fill="transparent" r="120" stroke="currentColor" stroke-width="24"></circle>
                <circle class="text-sage" cx="144" cy="144" fill="transparent" r="120" stroke="currentColor" stroke-dasharray="297.8 753.98" stroke-dashoffset="-58.8" stroke-width="24"></circle>
                <circle class="text-accent" cx="144" cy="144" fill="transparent" r="120" stroke="currentColor" stroke-dasharray="58.8 753.98" stroke-dashoffset="0" stroke-width="24"></circle>
              </svg>
              <div class="absolute text-center px-4">
                <p class="text-3xl font-extrabold text-slate-900 font-display tracking-tight">Rs.21,26,753</p>
                <p class="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1.5">TOTAL RAISED (2022-2025)</p>
              </div>
            </div>
            <div class="mt-8 flex flex-wrap justify-center gap-6 text-sm font-display">
              <div class="flex items-center gap-2">
                <div class="size-3 rounded-full bg-sage"></div>
                <span class="font-medium text-slate-700">PCT (Rs.8.40L)</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="size-3 rounded-full bg-accent"></div>
                <span class="font-medium text-slate-700">APTA (Rs.1.66L)</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="size-3 rounded-full bg-slate-200"></div>
                <span class="font-medium text-slate-700">Global Donors</span>
              </div>
            </div>
          </div>
          <div class="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm">
            <table class="w-full text-left">
              <thead class="bg-primary text-white font-display">
                <tr>
                  <th class="px-6 py-4 font-semibold text-sm">Contributor Source</th>
                  <th class="px-6 py-4 font-semibold text-sm text-right">Amount (INR)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-sm">
                <tr>
                  <td class="px-6 py-4 text-slate-700">Padala Charitable Trust (PCT)</td>
                  <td class="px-6 py-4 text-right font-semibold text-slate-900">Rs.8,40,000</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-slate-700">American Progressive Telugu Association (APTA)</td>
                  <td class="px-6 py-4 text-right font-semibold text-slate-900">Rs.1,66,000</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-slate-700">Individual Global Diaspora</td>
                  <td class="px-6 py-4 text-right font-semibold text-slate-900">Rs.11,20,753</td>
                </tr>
                <tr class="bg-accent/5 text-accent">
                  <td class="px-6 py-4 font-bold">Total Funds Mobilized</td>
                  <td class="px-6 py-4 text-right font-bold text-lg">Rs.21,26,753</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main>
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
</div>`;

export function AboutDesktopPage() {
  return <StaticMarkupPage html={html} />;
}