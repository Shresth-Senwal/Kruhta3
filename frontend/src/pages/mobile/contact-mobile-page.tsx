/**
 * @file contact-mobile-page.tsx
 * @description Mobile contact and donate page with a premium light theme.
 * @module frontend/src/pages/mobile
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import { buildMobilePageFooterMarkup } from "../../components/layout/site-navigation";

const html = String.raw`
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased">
  <header class="sticky top-0 z-50"></header>

  <main class="flex-1 pb-24 relative">
    <!-- Glow Blurs -->
    <div class="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Hero Banner Card -->
    <div class="p-4">
      <div class="relative overflow-hidden rounded-2xl shadow-md min-h-[180px] border border-primary/5">
        <img alt="Community gathering" class="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLIkQF83ozgfvBBdlugCWD2OEcb43JXyWBKPQOjJBllkhzq8FxnGKE7WPg0FbQSgwjB9hGx1U1gnHbvMfeSl_dHq5OAepAv4xB5yc0kUiqyVjUZzlX7ZjgEbvHPGh87NFAoW4qFvvwZk5nZdQFSd5cwUIUHW2-1sTXMveWv8V9qX4zXc1nKO0QrIitiQeDbyO_YLr3_GK-M1kITWqqh38BoVF4NqISk0izlbT9NSBzfk2cNqwngA6uXi9bMQr70zxo_-KoEeN_8O9K" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex flex-col justify-end p-6 z-10">
          <span class="text-accent font-bold tracking-widest text-[9px] uppercase">Get in Touch</span>
          <h2 class="font-editorial text-2xl font-bold text-white leading-tight">Connecting Hearts</h2>
          <p class="text-slate-300 text-xs mt-1 italic">&quot;Together, we build a future rooted in compassion.&quot;</p>
        </div>
      </div>
    </div>

    <!-- Support / Donation Section -->
    <section class="px-6 py-6 space-y-6">
      <div class="space-y-2">
        <h3 class="text-2xl font-editorial text-slate-900 leading-tight">
          Support Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic">Cause</span>
        </h3>
        <p class="text-sm text-slate-600 leading-relaxed">
          Your contribution helps us empower communities and drive sustainable change through targeted educational initiatives.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <button class="flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl border-2 border-primary/20 bg-white hover:border-primary active:scale-95 transition-all shadow-sm">
          <span class="text-base font-bold text-primary">$10</span>
          <span class="text-[9px] uppercase font-bold text-slate-400">Starter</span>
        </button>
        <button class="flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl border-2 border-primary bg-primary/10 active:scale-95 transition-all shadow-sm">
          <span class="text-base font-bold text-primary">$25</span>
          <span class="text-[9px] uppercase font-bold text-slate-500">Popular</span>
        </button>
        <button class="flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl border-2 border-primary/20 bg-white hover:border-primary active:scale-95 transition-all shadow-sm">
          <span class="text-base font-bold text-primary">$50</span>
          <span class="text-[9px] uppercase font-bold text-slate-400">Impact</span>
        </button>
        <button class="flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl border-2 border-primary/20 bg-white hover:border-primary active:scale-95 transition-all shadow-sm">
          <span class="text-base font-bold text-primary">$100</span>
          <span class="text-[9px] uppercase font-bold text-slate-400">Founder</span>
        </button>
      </div>

      <div class="mt-4">
        <a class="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform block text-center" href="/m/donation-confirmation">Donate Now</a>
      </div>
    </section>

    <div class="h-2 bg-primary/5 border-y border-primary/10"></div>

    <!-- Contact Details Section -->
    <section class="px-6 py-8 space-y-6">
      <h3 class="text-2xl font-editorial text-slate-900">Contact Details</h3>
      <div class="space-y-4">
        
        <div class="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-primary/10">
          <div class="bg-primary/10 p-2 rounded-lg text-primary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined">location_on</span>
          </div>
          <div>
            <p class="font-bold text-sm text-slate-900">Headquarters</p>
            <p class="text-xs text-slate-500 mt-0.5">Vadapalem, East Godavari District, Andhra Pradesh, India</p>
          </div>
        </div>

        <div class="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-primary/10">
          <div class="bg-primary/10 p-2 rounded-lg text-primary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined">mail</span>
          </div>
          <div>
            <p class="font-bold text-sm text-slate-900">Email Support</p>
            <p class="text-xs text-slate-500 mt-0.5">hello@kruthafoundation.org</p>
          </div>
        </div>

        <div class="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-primary/10">
          <div class="bg-primary/10 p-2 rounded-lg text-primary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined">phone</span>
          </div>
          <div>
            <p class="font-bold text-sm text-slate-900">Call Us</p>
            <p class="text-xs text-slate-500 mt-0.5">+91 987 654 3210</p>
          </div>
        </div>

      </div>
    </section>

    <div class="h-2 bg-primary/5 border-y border-primary/10"></div>

    <!-- Send a Message Section -->
    <section class="px-6 py-8 space-y-6">
      <div class="space-y-1">
        <h3 class="text-2xl font-editorial text-slate-900">Send a Message</h3>
        <p class="text-xs text-slate-500">We usually respond within 24 hours.</p>
      </div>
      
      <form class="space-y-5">
        <div>
          <label class="block text-[10px] font-bold text-primary/70 mb-1.5 ml-1 uppercase tracking-wider">Full Name</label>
          <input class="w-full rounded-xl border border-slate-200 bg-white py-3.5 px-4 focus:ring-primary focus:border-primary focus:outline-none text-sm" placeholder="John Doe" type="text" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-primary/70 mb-1.5 ml-1 uppercase tracking-wider">Email Address</label>
          <input class="w-full rounded-xl border border-slate-200 bg-white py-3.5 px-4 focus:ring-primary focus:border-primary focus:outline-none text-sm" placeholder="john@example.com" type="email" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-primary/70 mb-1.5 ml-1 uppercase tracking-wider">Message</label>
          <textarea class="w-full rounded-xl border border-slate-200 bg-white py-3.5 px-4 focus:ring-primary focus:border-primary focus:outline-none text-sm resize-none" placeholder="How can we help?" rows="4"></textarea>
        </div>
        <button class="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform" type="button">Send Message</button>
      </form>
    </section>
  </main>

  ${buildMobilePageFooterMarkup()}
</div>
`;

export function ContactMobilePage() {
  return <StaticMarkupPage html={html} />;
}
