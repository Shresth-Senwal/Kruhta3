import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import meetingCollector from "../../assets/press/MeetingDisctricCollectorToTakePlasticReductionInitiatives.webp";
import newspaper2021 from "../../assets/press/Newspaper2021.webp";
import article from "../../assets/press/article.webp";
import cameraLogo from "../../assets/press/camera.webp";
import news2023 from "../../assets/press/news2023.webp";
import sportsUniforms from "../../assets/press/sportsUniforms.webp";

const html = String.raw`
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#fcfdfa] font-display text-slate-900">
  <header class="sticky top-0 z-50 flex items-center bg-white/95 backdrop-blur-sm p-4 border-b border-primary/10 justify-between">
    <a class="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors" href="/m">
      <span class="material-symbols-outlined text-slate-900">arrow_back</span>
    </a>
    <h2 class="text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display uppercase tracking-widest text-primary">Press Room</h2>
    <div class="flex w-10 items-center justify-end">
      <button class="flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
        <span class="material-symbols-outlined text-slate-900">share</span>
      </button>
    </div>
  </header>

  <main class="flex-1 pb-24">
    <!-- Hero Section -->
    <section class="p-6 text-center">
      <div class="inline-flex items-center gap-2 bg-primary/5 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
        <span class="material-symbols-outlined text-xs">public</span> Media Center
      </div>
      <h1 class="text-4xl font-bold text-primary mb-4 leading-tight">In The Press</h1>
      <p class="text-slate-600 text-[15px] leading-relaxed font-medium">
        Our commitment to rural transformation has captured the attention of mainstream media and community leaders alike.
      </p>
    </section>

    <!-- News Highlights Carousel -->
    <section class="px-4 py-4">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-bold text-primary">News Coverage</h3>
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Swipe to Explore</span>
      </div>
      
      <div class="flex overflow-x-auto gap-4 pb-6 snap-x no-scrollbar">
        <!-- Item 1 -->
        <div class="min-w-[280px] snap-center bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm shadow-primary/5">
          <div class="aspect-square bg-slate-100 relative">
            <img src="${meetingCollector}" alt="Collector Meeting" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-4">
              <span class="text-white text-[10px] font-bold uppercase tracking-widest">Governance • 2024</span>
            </div>
          </div>
          <div class="p-5">
            <h4 class="font-bold text-slate-900 leading-tight mb-2">District Collector Meeting for Plastic Reduction</h4>
            <a href="/m/contact" class="text-primary text-xs font-bold flex items-center gap-1">Read Article <span class="material-symbols-outlined text-xs">open_in_new</span></a>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="min-w-[280px] snap-center bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm shadow-primary/5">
          <div class="aspect-square bg-slate-100 relative">
            <img src="${news2023}" alt="2023 News" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-4">
              <span class="text-white text-[10px] font-bold uppercase tracking-widest">Mainstream • 2023</span>
            </div>
          </div>
          <div class="p-5">
            <h4 class="font-bold text-slate-900 leading-tight mb-2">Regional Media Highlights Village Evolution</h4>
            <a href="/m/contact" class="text-primary text-xs font-bold flex items-center gap-1">Read Article <span class="material-symbols-outlined text-xs">open_in_new</span></a>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="min-w-[280px] snap-center bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm shadow-primary/5">
          <div class="aspect-square bg-slate-100 relative">
            <img src="${article}" alt="Article" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-4">
              <span class="text-white text-[10px] font-bold uppercase tracking-widest">Feature • 2023</span>
            </div>
          </div>
          <div class="p-5">
            <h4 class="font-bold text-slate-900 leading-tight mb-2">Special Feature: Bridging Diaspora & Roots</h4>
            <a href="/m/contact" class="text-primary text-xs font-bold flex items-center gap-1">Read Article <span class="material-symbols-outlined text-xs">open_in_new</span></a>
          </div>
        </div>

        <!-- Item 4 -->
        <div class="min-w-[280px] snap-center bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm shadow-primary/5">
          <div class="aspect-square bg-slate-100 relative">
            <img src="${sportsUniforms}" alt="Sports" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-4">
              <span class="text-white text-[10px] font-bold uppercase tracking-widest">Impact • 2024</span>
            </div>
          </div>
          <div class="p-5">
            <h4 class="font-bold text-slate-900 leading-tight mb-2">Empowering Youth through Modern Sports</h4>
            <a href="/m/contact" class="text-primary text-xs font-bold flex items-center gap-1">Read Article <span class="material-symbols-outlined text-xs">open_in_new</span></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Narrative Quote -->
    <section class="px-4 py-8">
      <div class="bg-primary p-8 rounded-[2rem] text-center text-white shadow-xl shadow-primary/10 relative overflow-hidden">
        <div class="absolute -right-4 -bottom-4 size-24 bg-white/10 rounded-full blur-2xl"></div>
        <p class="text-[15px] font-medium leading-relaxed italic relative z-10">
          "These reports serve as a testament to the transparency of our work and the growing momentum of the Krutha movement."
        </p>
      </div>
    </section>

    <!-- Media Assets Mobile -->
    <section class="px-4 py-8">
      <h3 class="text-lg font-bold text-primary mb-4">Digital Media Kit</h3>
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center gap-2 transition-active:scale-95">
          <span class="material-symbols-outlined text-2xl text-primary">description</span>
          <span class="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Fact Sheet</span>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center gap-2 transition-active:scale-95">
          <span class="material-symbols-outlined text-2xl text-primary">image</span>
          <span class="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Photos</span>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center gap-2 transition-active:scale-95">
          <span class="material-symbols-outlined text-2xl text-primary">play_circle</span>
          <span class="text-[10px] font-bold uppercase text-slate-500 tracking-widest">B-Roll</span>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center gap-2 transition-active:scale-95">
          <span class="material-symbols-outlined text-2xl text-primary">logo_dev</span>
          <span class="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Logos</span>
        </div>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="px-4 py-8 pb-12">
      <div class="p-8 border-2 border-dashed border-primary/20 rounded-[2rem] text-center bg-primary/5">
        <span class="material-symbols-outlined text-primary text-3xl mb-2">mail</span>
        <h4 class="font-bold text-slate-900 mb-1">Media Inquiries</h4>
        <p class="text-slate-500 text-[13px] mb-4">Official assets and interviews</p>
        <a class="text-primary font-bold text-lg" href="mailto:press@krutha.org">press@krutha.org</a>
      </div>
    </section>
  </main>

  <nav class="fixed bottom-0 left-0 right-0 z-50 flex border-t border-primary/10 bg-white/95 backdrop-blur-md px-4 pb-6 pt-2">
    <a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m">
      <span class="material-symbols-outlined">home</span>
      <p class="text-[10px] font-medium leading-normal">Home</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m/impact-report">
      <span class="material-symbols-outlined text-[24px]">analytics</span>
      <p class="text-[10px] font-medium leading-normal">Impact</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1 text-primary" href="/m/press">
      <span class="material-symbols-outlined">newspaper</span>
      <p class="text-[10px] font-bold leading-normal">Press</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500" href="/m/contact">
      <span class="material-symbols-outlined">mail</span>
      <p class="text-[10px] font-medium leading-normal">Contact</p>
    </a>
  </nav>
</div>`;

export function PressMobilePage() {
  return <StaticMarkupPage html={html} />;
}