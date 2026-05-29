import { StaticMarkupPage } from "../../components/ui/static-markup-page";
import meetingCollector from "../../assets/press/MeetingDisctricCollectorToTakePlasticReductionInitiatives.webp";
import newspaper2021 from "../../assets/press/Newspaper2021.webp";
import article from "../../assets/press/article.webp";
import cameraLogo from "../../assets/press/camera.webp";
import news2023 from "../../assets/press/news2023.webp";
import sportsUniforms from "../../assets/press/sportsUniforms.webp";

const html = String.raw`
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
  <header class="sticky top-0 z-50 flex items-center bg-background-light/80 backdrop-blur-md px-4 py-4 justify-between border-b border-primary/10">
    <a class="text-primary flex size-9 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer" href="/m">
      <span class="material-symbols-outlined text-[20px]">arrow_back</span>
    </a>
    <h2 class="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-editorial">Press Room</h2>
    <div class="flex w-9 items-center justify-end">
      <button class="flex items-center justify-center rounded-full size-9 hover:bg-primary/10 text-primary">
        <span class="material-symbols-outlined text-[18px]">share</span>
      </button>
    </div>
  </header>

  <main class="flex-1 pb-24">
    <!-- Hero Section -->
    <section class="p-6 text-center relative overflow-hidden">
      <div class="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-12 -right-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="inline-flex items-center gap-2 bg-primary/5 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
        <span class="material-symbols-outlined text-xs">public</span> Media Center
      </div>
      <h1 class="font-editorial text-4xl font-bold text-slate-900 mb-4 leading-tight">In The <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Press</span></h1>
      <p class="text-slate-600 text-[15px] leading-relaxed font-medium">
        Our commitment to rural transformation has captured the attention of mainstream media and community leaders alike.
      </p>
    </section>

    <!-- News Highlights Carousel -->
    <section class="px-4 py-4">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-editorial text-xl font-bold text-slate-900">News Coverage</h3>
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Swipe to Explore</span>
      </div>
      
      <div class="flex overflow-x-auto gap-4 pb-6 snap-x no-scrollbar">
        <!-- Item 1 -->
        <div class="min-w-[280px] snap-center bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-sm shadow-primary/5">
          <div class="aspect-square bg-slate-50 relative border-b border-primary/5">
            <img src="${meetingCollector}" alt="Collector Meeting" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
              <span class="text-white text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1">Governance <span class="size-1 bg-white/50 rounded-full"></span> 2024</span>
            </div>
          </div>
          <div class="p-5 space-y-3">
            <h4 class="font-editorial text-lg font-bold text-slate-900 leading-tight">District Collector Meeting for Plastic Reduction</h4>
            <a href="/m/contact" class="text-primary text-xs font-bold flex items-center gap-1">Read Article <span class="material-symbols-outlined text-xs">open_in_new</span></a>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="min-w-[280px] snap-center bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-sm shadow-primary/5">
          <div class="aspect-square bg-slate-50 relative border-b border-primary/5">
            <img src="${news2023}" alt="2023 News" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
              <span class="text-white text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1">Mainstream <span class="size-1 bg-white/50 rounded-full"></span> 2023</span>
            </div>
          </div>
          <div class="p-5 space-y-3">
            <h4 class="font-editorial text-lg font-bold text-slate-900 leading-tight">Regional Media Highlights Village Evolution</h4>
            <a href="/m/contact" class="text-primary text-xs font-bold flex items-center gap-1">Read Article <span class="material-symbols-outlined text-xs">open_in_new</span></a>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="min-w-[280px] snap-center bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-sm shadow-primary/5">
          <div class="aspect-square bg-slate-50 relative border-b border-primary/5">
            <img src="${article}" alt="Article" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
              <span class="text-white text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1">Feature <span class="size-1 bg-white/50 rounded-full"></span> 2023</span>
            </div>
          </div>
          <div class="p-5 space-y-3">
            <h4 class="font-editorial text-lg font-bold text-slate-900 leading-tight">Special Feature: Bridging Diaspora & Roots</h4>
            <a href="/m/contact" class="text-primary text-xs font-bold flex items-center gap-1">Read Article <span class="material-symbols-outlined text-xs">open_in_new</span></a>
          </div>
        </div>

        <!-- Item 4 -->
        <div class="min-w-[280px] snap-center bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-sm shadow-primary/5">
          <div class="aspect-square bg-slate-50 relative border-b border-primary/5">
            <img src="${sportsUniforms}" alt="Sports" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
              <span class="text-white text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1">Impact <span class="size-1 bg-white/50 rounded-full"></span> 2024</span>
            </div>
          </div>
          <div class="p-5 space-y-3">
            <h4 class="font-editorial text-lg font-bold text-slate-900 leading-tight">Empowering Youth through Modern Sports</h4>
            <a href="/m/contact" class="text-primary text-xs font-bold flex items-center gap-1">Read Article <span class="material-symbols-outlined text-xs">open_in_new</span></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Narrative Quote -->
    <section class="px-4 py-8">
      <div class="bg-slate-900 p-8 rounded-[2rem] text-center text-white shadow-xl border border-primary/10 relative overflow-hidden">
        <div class="absolute -right-6 -bottom-6 size-32 bg-primary/20 rounded-full blur-2xl"></div>
        <div class="absolute -left-6 -top-6 size-32 bg-accent/15 rounded-full blur-2xl"></div>
        <div class="relative z-10 flex flex-col items-center gap-3">
          <span class="material-symbols-outlined text-3xl text-accent">verified</span>
          <p class="font-serif text-[15px] font-medium leading-relaxed italic">
            "These reports serve as a testament to the transparency of our work and the growing momentum of the Krutha movement."
          </p>
        </div>
      </div>
    </section>

    <!-- Media Assets Mobile -->
    <section class="px-4 py-8">
      <h3 class="font-editorial text-xl font-bold text-slate-900 mb-4">Digital Media Kit</h3>
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-white p-4 rounded-2xl border border-primary/10 shadow-sm text-center flex flex-col items-center gap-2 active:scale-95 transition-transform duration-200">
          <span class="material-symbols-outlined text-2xl text-primary">description</span>
          <span class="text-[10px] font-bold uppercase text-slate-500 tracking-wider font-display">Fact Sheet</span>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-primary/10 shadow-sm text-center flex flex-col items-center gap-2 active:scale-95 transition-transform duration-200">
          <span class="material-symbols-outlined text-2xl text-primary">image</span>
          <span class="text-[10px] font-bold uppercase text-slate-500 tracking-wider font-display">Photos</span>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-primary/10 shadow-sm text-center flex flex-col items-center gap-2 active:scale-95 transition-transform duration-200">
          <span class="material-symbols-outlined text-2xl text-primary">play_circle</span>
          <span class="text-[10px] font-bold uppercase text-slate-500 tracking-wider font-display">B-Roll</span>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-primary/10 shadow-sm text-center flex flex-col items-center gap-2 active:scale-95 transition-transform duration-200">
          <span class="material-symbols-outlined text-2xl text-primary">logo_dev</span>
          <span class="text-[10px] font-bold uppercase text-slate-500 tracking-wider font-display">Logos</span>
        </div>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="px-4 py-8 pb-12">
      <div class="p-8 border border-dashed border-primary/25 rounded-[2rem] text-center bg-white shadow-sm relative overflow-hidden">
        <div class="absolute -right-6 -bottom-6 size-20 bg-accent/10 rounded-full blur-xl pointer-events-none"></div>
        <span class="material-symbols-outlined text-accent text-3xl mb-2">mail</span>
        <h4 class="font-editorial text-lg font-bold text-slate-900 mb-1">Media Inquiries</h4>
        <p class="text-slate-500 text-xs mb-4">Official assets and interviews</p>
        <a class="text-primary font-bold text-lg hover:text-accent transition-colors" href="mailto:press@krutha.org">press@krutha.org</a>
      </div>
    </section>
  </main>

  <nav class="fixed bottom-0 left-0 right-0 z-50 flex border-t border-primary/5 bg-white/80 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.04)] pb-8 pt-3 px-4">
    <a class="flex flex-1 flex-col items-center justify-center gap-1.5 text-slate-400 transition-all active:scale-95" href="/m">
      <span class="material-symbols-outlined text-[26px]">home</span>
      <p class="text-[9px] font-black uppercase tracking-[0.15em] leading-none">Home</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1.5 text-slate-400 transition-all active:scale-95" href="/m/impact-report">
      <span class="material-symbols-outlined text-[26px]">analytics</span>
      <p class="text-[9px] font-black uppercase tracking-[0.15em] leading-none">Impact</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1.5 text-primary transition-all active:scale-95" href="/m/press">
      <div class="relative flex items-center justify-center">
        <span class="material-symbols-outlined text-[26px]" style="font-variation-settings: 'FILL' 1">newspaper</span>
        <div class="absolute -bottom-1.5 size-1 rounded-full bg-primary"></div>
      </div>
      <p class="text-[9px] font-black uppercase tracking-[0.15em] leading-none">Press</p>
    </a>
    <a class="flex flex-1 flex-col items-center justify-center gap-1.5 text-slate-400 transition-all active:scale-95" href="/m/contact">
      <span class="material-symbols-outlined text-[26px]">mail</span>
      <p class="text-[9px] font-black uppercase tracking-[0.15em] leading-none">Contact</p>
    </a>
  </nav>
</div>`;

export function PressMobilePage() {
  return <StaticMarkupPage html={html} />;
}