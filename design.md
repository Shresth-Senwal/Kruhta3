# Frontend Design Source of Truth (design.md)

## 1. Visual Language & Color Palette
The Krutha Foundation web application uses a sophisticated, organic, and trustworthy visual identity tailored to community empowerment and sustainable development.

- **Primary Colors (Teal-based)**:
  - Primary Teal (`#57c1bb`): Represents community growth, trustworthiness, and health.
  - Sage (`#8acac5`): Used for softer backgrounds, secondary outlines, and pill badges.
  - Forest (`#2d5e5b`): Deep, grounding tone for high-contrast emphasis.
- **Accent Color (Orange-based)**:
  - Orange Accent (`#f7b35c` / `#FF8C42`): Represents energy, progress, and optimism. Used selectively for highlighting text gradients, key badges, glow blurs, and interactive element hover states.
- **Backgrounds**:
  - Main Background Light (`#fffaf5` / `--color-background-light`): A warm, off-white/cream paper-like hue that feels premium and organic compared to harsh digital white.
  - White (`#ffffff`): Used for content cards and modular containers to pop against the warm background.
  - Deep Forest / Dark (`#112220` / `bg-slate-900`): High-end dark backgrounds used for footers and call-to-action blocks to ground the layout.

## 2. Typography
A curated font scale balances editorial depth with digital precision:
- **Display/Sans**: `Inter` (`font-display`) - Sleek, legible, modern.
- **Editorial/Serif**: `Playfair Display` (`font-editorial`) - Premium, editorial serif used exclusively for headings (`h1`, `h2`, some `h3` and sections) to introduce elegance, human history, and authenticity.
- **Text Styling**: Combine sans-serif body copy for supreme legibility with beautiful italicized editorial gradients for key brand concepts (e.g., *Krutha Yuga*).

## 3. UI Patterns, Gradients & Micro-Animations
- **Text Gradients**: High-impact titles should use:
  ```html
  <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent italic pr-2">Krutha Yuga</span>
  ```
- **Glow Blurs**: Subtle organic depth is introduced using blurred colored circles placed behind images or interactive panels:
  ```html
  <div class="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
  <div class="absolute -top-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
  ```
- **Cards & Shadows**:
  - Container Border: Subtle border with primary tint `border-primary/10`.
  - Shadows: Very soft and elegant client-side shadows (`shadow-sm`, `shadow-md`, `shadow-xl shadow-primary/5`).
  - Interactions: Micro-animations on hover (`hover:scale-[1.02]`, `hover:border-primary`, transition-transform, and smooth color changes).
  - Borders: Roundness should utilize `rounded-3xl` (2rem) or `rounded-2xl` (1.5rem) to ensure a friendly, modern organic feel.

## 4. Header & Footer Placements
- **Desktop Navigation**:
  - Utilize the dynamically constructed header: `${buildDesktopHeaderMarkup(pathname)}`.
  - Footers must feature a clean, structured multi-column layout on deep slate/dark background rather than plain solid brand fills.
- **Mobile Navigation**:
  - Sticky clean top bars with explicit back buttons or context sharing headers.
  - Structured, highly interactive bottom tabs using `${buildMobileToolbarMarkup(pathname)}`.

## 5. UI Application to Press Room
- **Background**: Replaced raw gray/white backgrounds (`bg-[#fcfdfa]`, etc.) with `bg-background-light` (`#fffaf5`).
- **Headings**: Upgraded all standard headers to Playfair Display (`font-editorial`) with primary teal or gradient styles.
- **Banners & Quotes**: Enhanced solid banners with organic gradients, decorative glowing blurs (`bg-primary/20`, `bg-accent/20`), and sleek layout proportions.
- **Media Kits & Downloads**: Modular white cards featuring hover translation effects, high-contrast typography, and accent icons.

## 6. UI Application to Impact Report
- **Background**: Integrated the warm cream background `bg-background-light` (`#fffaf5`) on both desktop and mobile views.
- **Visual Depth**: Added custom orange gradient text titles and subtle glow blur effects (`bg-primary/10`, `bg-accent/10`) to create a premium atmosphere.
- **Cards & Data**: Upgraded financial summary and progress pillars to use clean, rounded white cards (`bg-white border-primary/10 rounded-[2rem]`) with organic drop shadows.
- **KPI Metrics**: Rebuilt solid stat highlights into a dark forest container (`bg-slate-900 rounded-[2.5rem]`) with glowing accents.
- **Navigation Aligned**:
  - Desktop utilizes `buildDesktopHeaderMarkup("/impact-report")` with the aligned dark multi-column footer.
  - Mobile utilizes active navigation tab state for "Impact" with clean stickiness.
