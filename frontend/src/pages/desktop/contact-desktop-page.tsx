/**
 * @file contact-desktop-page.tsx
 * @description Desktop contact and donate page with a premium light theme.
 * @module frontend/src/pages/desktop
 */

import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import { buildDesktopFooterMarkup, buildDesktopHeaderMarkup } from "../../components/layout/site-navigation";

const html = String.raw`
<div class="bg-background-light text-slate-900 font-display transition-colors duration-300 min-h-screen flex flex-col">
  ${buildDesktopHeaderMarkup("/contact")}

  <main class="flex-1 pt-32 pb-24 px-6 relative">
    <!-- Glow Blurs -->
    <div class="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 text-center max-w-2xl mx-auto space-y-4">
        <span class="text-accent font-bold tracking-widest text-sm uppercase">Get in Touch</span>
        <h2 class="font-editorial text-5xl font-bold text-slate-900 leading-tight">
          Connecting Hearts, <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Cultivating Change</span>
        </h2>
        <p class="text-slate-600 text-lg leading-relaxed">
          Whether you're looking to partner with us, volunteer, or contribute to our mission, we'd love to hear from you.
        </p>
      </div>

      <!-- Main Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <!-- Left Column: Image, Info & Donation -->
        <div class="space-y-12">
          <!-- Featured Image Card -->
          <div class="relative overflow-hidden rounded-[2rem] shadow-xl group border border-primary/5">
            <img alt="Community gathering" class="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYNGXxALJx0JxamWtVPEKESMjOkcPUcHPGKe7UriwlNfN8cTtG356joP9nrRKDrpolA8DDHvjgDdwnHfdbv5cat6cy-OGG8psEBzx-ky9o6FogVV_Kd11yRi1OshNlsOMwvHPmMlmhFmaBS7nXyUnRS-M81tHzhHQz9a1znl04qTxaCqfkeKRI99R564-GRYGt2bOXQbXkzMphGsX2cEEe_Qf11P_0BBCX__dbBXJ6Vw_CNRBWUkmxg_a9p9YoQsZzl0yB0mF0zW-B" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
              <p class="text-white text-xl italic font-editorial leading-relaxed">&quot;Together, we build a future rooted in compassion.&quot;</p>
            </div>
          </div>

          <!-- Info cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Details -->
            <div class="space-y-6 bg-white p-8 rounded-[1.8rem] border border-primary/10 shadow-sm">
              <h3 class="font-editorial text-2xl font-bold text-primary">Contact Details</h3>
              <ul class="space-y-5">
                <li class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-primary text-xl mt-0.5">mail</span>
                  <div>
                    <p class="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Email Us</p>
                    <p class="text-slate-800 text-sm font-semibold">contact@kruthafoundation.org</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-primary text-xl mt-0.5">call</span>
                  <div>
                    <p class="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Call Us</p>
                    <p class="text-slate-800 text-sm font-semibold">+91 98765 43210</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-primary text-xl mt-0.5">location_on</span>
                  <div>
                    <p class="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Visit Us</p>
                    <p class="text-slate-800 text-sm font-semibold">Vadapalem, Andhra Pradesh, India</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Donate Widget -->
            <div class="bg-primary/5 p-8 rounded-[1.8rem] border border-primary/10 shadow-inner flex flex-col justify-between">
              <div>
                <h3 class="font-editorial text-2xl font-bold text-primary mb-3">Support Our Cause</h3>
                <p class="text-xs text-slate-600 mb-6 italic">Your small contribution makes a huge difference in Vadapalem.</p>
                <div class="grid grid-cols-3 gap-2.5 mb-6">
                  <button class="py-2.5 border border-primary/30 text-primary bg-white rounded-xl font-bold text-xs hover:bg-primary hover:text-white transition-all shadow-sm">Rs.1,000</button>
                  <button class="py-2.5 border border-primary/30 text-primary bg-white rounded-xl font-bold text-xs hover:bg-primary hover:text-white transition-all shadow-sm">Rs.5,000</button>
                  <button class="py-2.5 border border-primary/30 text-primary bg-white rounded-xl font-bold text-xs hover:bg-primary hover:text-white transition-all shadow-sm">Rs.10,000</button>
                </div>
              </div>
              <a class="w-full bg-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 group hover:opacity-95 shadow-md shadow-primary/15 transition-all" href="/donation-confirmation">
                <span>Donate Now</span>
                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">favorite</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column: Send a Message Form -->
        <div class="bg-white p-10 md:p-14 rounded-[2.2rem] shadow-sm border border-primary/10 relative overflow-hidden">
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none"></div>
          <h3 class="font-editorial text-3xl font-bold text-slate-900 mb-2">Send a Message</h3>
          <p class="text-slate-500 text-sm mb-10">We usually respond within 24 hours.</p>
          
          <form class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="relative">
                <label class="text-[10px] font-bold uppercase text-primary/70 mb-2 block tracking-wider">Full Name</label>
                <input class="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900 text-sm" placeholder="John Doe" type="text" />
              </div>
              <div class="relative">
                <label class="text-[10px] font-bold uppercase text-primary/70 mb-2 block tracking-wider">Email Address</label>
                <input class="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900 text-sm" placeholder="john@example.com" type="email" />
              </div>
            </div>
            <div class="relative">
              <label class="text-[10px] font-bold uppercase text-primary/70 mb-2 block tracking-wider">Subject</label>
              <input class="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900 text-sm" placeholder="How can we help?" type="text" />
            </div>
            <div class="relative">
              <label class="text-[10px] font-bold uppercase text-primary/70 mb-2 block tracking-wider">Your Message</label>
              <textarea class="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900 text-sm resize-none" placeholder="Tell us more about your inquiry..." rows="4"></textarea>
            </div>
            <div class="flex items-center gap-3 py-2">
              <input class="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5 cursor-pointer" id="newsletter" type="checkbox" />
              <label class="text-xs text-slate-600 cursor-pointer select-none" for="newsletter">Join our newsletter to receive updates on our impact.</label>
            </div>
            <button class="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 transition-all" type="button">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  </main>

  ${buildDesktopFooterMarkup()}
</div>
`;

export function ContactDesktopPage() {
  return <StaticMarkupPage html={html} />;
}
