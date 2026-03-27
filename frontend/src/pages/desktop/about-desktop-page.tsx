/**
 * @file about-desktop-page.tsx
 * @description Desktop about page rendered from the provided reference layout.
 * @module frontend/src/pages/desktop
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import suryaPhoto from "../../assets/surya-bandaru.png";
import kgRaoPhoto from "../../assets/kg-rao.png";
import srinivasuPhoto from "../../assets/srinivasu-b.png";

const suryaSrc = suryaPhoto;
const kgRaoSrc = kgRaoPhoto;
const srinivasuSrc = srinivasuPhoto;

const html = String.raw`
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-20 lg:px-40 py-4 bg-background-light/80 backdrop-blur-md sticky top-0 z-50">
    <div class="flex items-center gap-4 text-primary"><div class="size-8 flex items-center justify-center bg-primary rounded-lg text-white"><span class="material-symbols-outlined text-2xl">foundation</span></div><h2 class="text-slate-900 text-lg font-bold leading-tight tracking-tight">Krutha Foundation</h2></div>
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
      <div class="grid md:grid-cols-12 gap-12 items-center">
        <div class="md:col-span-7"><h2 class="text-primary uppercase tracking-widest text-sm font-bold mb-4">Our Program Philosophy</h2><h3 class="text-slate-900 text-4xl md:text-5xl font-bold leading-tight mb-8">Mission &amp; Vision</h3><div class="text-slate-600 leading-relaxed text-lg"><p class="mb-6">At Krutha Foundation, our programs are centered on people and the environment, recognizing the interdependence between human behavior and the health of Earth, Water, and Air. Our work is transformational, addressing root causes through responsibility, discipline, and conscious choice.</p><p class="mb-6">Founded in April 2022, we connect people across the globe to their native village, Vadapalem, and channel collective effort to build a self-sustainable thriving community where life blossoms in all dimensions.</p><p>We aim big and align our efforts with 9 United Nations Sustainable Development Goals, with focus on children, youth, women, farmers, traders, and elders.</p></div></div>
        <div class="md:col-span-5 bg-primary/5 p-10 rounded-xl border-l-4 border-primary italic"><span class="material-symbols-outlined text-primary text-4xl mb-4">format_quote</span><blockquote class="text-2xl md:text-3xl font-display font-medium text-slate-800 leading-snug">&quot;Serve our Motherland and transform villages into self-sustainable thriving communities.&quot;</blockquote><p class="mt-6 text-primary font-bold">&mdash; Krutha Foundation Mission</p></div>
      </div>
    </section>
    <section class="px-6 md:px-20 lg:px-40 py-20 bg-white">
      <div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2><div class="h-1 w-20 bg-primary mx-auto rounded-full"></div></div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="flex flex-col items-center text-center group"><div class="relative size-64 mb-6 overflow-hidden rounded-xl bg-slate-200 shadow-lg"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${suryaSrc}" alt="Portrait of Surya Bandaru" width="256" height="256" /></div><h4 class="text-xl font-bold text-slate-900">Surya Bandaru</h4><p class="text-primary font-medium text-sm">Chairman</p></div>
        <div class="flex flex-col items-center text-center group"><div class="relative size-64 mb-6 overflow-hidden rounded-xl bg-slate-200 shadow-md"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${kgRaoSrc}" alt="Portrait of K G Rao" width="256" height="256" /></div><h4 class="text-xl font-bold text-slate-900">K G Rao</h4><p class="text-primary font-medium text-sm">Joint Secretary</p></div>
        <div class="flex flex-col items-center text-center group"><div class="relative size-64 mb-6 overflow-hidden rounded-xl bg-slate-200 shadow-md"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${srinivasuSrc}" alt="Portrait of Srinivasu B" width="256" height="256" /></div><h4 class="text-xl font-bold text-slate-900">Srinivasu B</h4><p class="text-primary font-medium text-sm">Treasurer</p></div>
      </div>
    </section>
    <section class="px-6 md:px-20 lg:px-40 py-20 bg-primary/5">
      <div class="max-w-6xl mx-auto"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Financial Transparency</h2><p class="text-slate-600">100% transparent utilization with strategic NGO partnerships.</p></div><div class="grid lg:grid-cols-2 gap-16 items-center"><div class="flex flex-col items-center justify-center"><div class="relative size-72 flex items-center justify-center"><svg class="w-full h-full transform -rotate-90"><circle class="text-slate-200" cx="144" cy="144" fill="transparent" r="120" stroke="currentColor" stroke-width="24"></circle><circle class="text-[#648277]" cx="144" cy="144" fill="transparent" r="120" stroke="currentColor" stroke-dasharray="753.98" stroke-dashoffset="503" stroke-width="24"></circle><circle class="text-primary" cx="144" cy="144" fill="transparent" r="120" stroke="currentColor" stroke-dasharray="753.98" stroke-dashoffset="695" stroke-width="24"></circle></svg><div class="absolute text-center"><p class="text-3xl font-bold text-slate-900">Rs.21,26,753</p><p class="text-xs uppercase tracking-widest text-slate-500">Total Raised (2022-2025)</p></div></div><div class="mt-8 flex gap-6 text-sm"><div class="flex items-center gap-2"><div class="size-3 rounded-full bg-[#648277]"></div><span>PCT (Rs.8.40L)</span></div><div class="flex items-center gap-2"><div class="size-3 rounded-full bg-primary"></div><span>APTA (Rs.1.66L)</span></div><div class="flex items-center gap-2"><div class="size-3 rounded-full bg-slate-200"></div><span>Global Donors</span></div></div></div><div class="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm"><table class="w-full text-left"><thead class="bg-primary text-white"><tr><th class="px-6 py-4 font-semibold text-sm">Contributor Source</th><th class="px-6 py-4 font-semibold text-sm text-right">Amount (INR)</th></tr></thead><tbody class="divide-y divide-slate-100"><tr><td class="px-6 py-4 text-slate-700">Padala Charitable Trust (PCT)</td><td class="px-6 py-4 text-right font-medium text-slate-900">Rs.8,40,000</td></tr><tr><td class="px-6 py-4 text-slate-700">American Progressive Telugu Association (APTA)</td><td class="px-6 py-4 text-right font-medium text-slate-900">Rs.1,66,000</td></tr><tr><td class="px-6 py-4 text-slate-700">Individual Global Diaspora</td><td class="px-6 py-4 text-right font-medium text-slate-900">Rs.11,20,753</td></tr><tr class="bg-primary/5"><td class="px-6 py-4 font-bold text-primary">Total Funds Mobilized</td><td class="px-6 py-4 text-right font-bold text-primary">Rs.21,26,753</td></tr></tbody></table></div></div></div>
    </section>
  </main>
  <footer class="bg-[#1a332a] text-white/80 px-6 md:px-20 lg:px-40 py-16"><div class="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12"><div class="col-span-1 md:col-span-1"><div class="flex items-center gap-3 text-white mb-6"><span class="material-symbols-outlined text-2xl">foundation</span><span class="text-lg font-bold">Krutha Foundation</span></div><p class="text-sm leading-relaxed">Empowering communities through transparent philanthropy and sustainable development.</p></div><div><h5 class="text-white font-bold mb-6">Quick Links</h5><ul class="space-y-4 text-sm"><li><a class="hover:text-white transition-colors" href="/about">Our History</a></li><li><a class="hover:text-white transition-colors" href="/our-work">Active Projects</a></li><li><a class="hover:text-white transition-colors" href="/press">Trustee Reports</a></li><li><a class="hover:text-white transition-colors" href="/contact">Ways to Give</a></li></ul></div><div><h5 class="text-white font-bold mb-6">Transparency</h5><ul class="space-y-4 text-sm"><li><a class="hover:text-white transition-colors" href="/press">Financial Reports</a></li><li><a class="hover:text-white transition-colors" href="/about">Governance</a></li><li><a class="hover:text-white transition-colors" href="/blog">Impact Stories</a></li><li><a class="hover:text-white transition-colors" href="/contact">Compliance</a></li></ul></div><div><h5 class="text-white font-bold mb-6">Contact Us</h5><ul class="space-y-4 text-sm"><li class="flex items-start gap-3"><span class="material-symbols-outlined text-sm pt-1 text-primary/40">location_on</span><span>Hyderabad, Telangana, India</span></li><li class="flex items-center gap-3"><span class="material-symbols-outlined text-sm text-primary/40">mail</span><span>hello@krutha.org</span></li></ul></div></div><div class="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-white/40"><p>(c) 2024 Krutha Foundation. All rights reserved.</p><div class="flex gap-8 mt-4 md:mt-0"><a class="hover:text-white" href="/contact">Privacy Policy</a><a class="hover:text-white" href="/contact">Terms of Service</a></div></div></footer>
</div>`;

export function AboutDesktopPage() {
  return <StaticMarkupPage html={html} />;
}