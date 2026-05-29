# Context

## Project Overview

- Project: Krutha Foundation website rebuild.
- Goal: Recreate the provided reference designs as closely as possible using TypeScript, React 19, Tailwind CSS v4, and Bun only.
- Scope: Frontend-only implementation with separate desktop and mobile route sets and working client-side navigation.

## Tech Stack

- Runtime and package manager: Bun.
- Frontend: React 19 with TypeScript.
- Styling: Tailwind CSS v4 with PostCSS (Teal-based palette: Primary `#57c1bb`, Sage `#8acac5`, Forest `#2d5e5b`).
- Routing: React Router.
- Testing: Bun native test runner with server-side route smoke tests.
- Database: None.
- Backend/API: None.

## Architecture

- Root ledger: this file is the single source of truth.
- Application lives in `frontend/`.
- Route groups:
  - Desktop routes under canonical paths such as `/`, `/about`, `/events`.
  - Mobile routes under `/m/*` such as `/m`, `/m/about`, `/m/events`.
- Shared layers:
  - `frontend/src/data/` for content and route metadata.
  - `frontend/src/components/layout/` for shared desktop toolbar and mobile hamburger navigation markup.
  - `frontend/src/components/` for repeated layout and UI patterns.
  - `frontend/src/pages/desktop/` and `frontend/src/pages/mobile/` for page-specific layout fidelity.
  - `frontend/src/styles/` for Tailwind entry and shared utility styles.
  - `frontend/src/test/` for Bun-native route smoke coverage.

## Feature Status

- [x] Initial project plan defined.
- [x] Route strategy chosen: separate desktop and mobile routes.
- [x] Bun + React project scaffolded.
- [x] Tailwind CSS v4 baseline configured.
- [x] Shared data and layout components added.
- [x] Desktop routes implemented.
- [x] Mobile routes implemented.
- [x] Shared desktop toolbar applied across all desktop pages.
- [x] Shared mobile hamburger navigation applied across all mobile pages.
- [x] Shared desktop toolbar now exposes hamburger navigation on small viewports.
- [x] Shared branding now uses the provided logo asset suite across navigation, footer replacements, and press media-kit markup.
- [x] Shared navigation chrome now uses a single larger logo mark per placement instead of split logo combinations.
- [x] Desktop home page Pillars layout and Future Roadmap timeline were stabilized to prevent overlap and clipped roadmap labels.
- [x] Route smoke tests added.
- [x] Production build verified.
- [x] Our Work desktop and mobile routes now render category/subcategory grouped Google Drive project galleries.
- [x] Our Work section now uses category and project toolbars with thumbnail-first project cards and a Show Gallery reveal interaction.
- [x] Home, About, and Press pages (desktop + mobile) now use stakeholder-provided real foundation content for mission, programs, impact report, partners, and leadership roles.
- [x] About page Leadership Team (desktop + mobile) now shows only members with approved real photos (Surya Bandaru, K G Rao, Srinivasu B) served from local static assets via `frontend/public/team/*` for reliable rendering.
- [x] Dev and production pipelines now serve/copy `frontend/public/*` assets so leadership photos and other static files resolve at runtime.
- [x] About leadership portraits are now imported from `frontend/src/assets` using kebab-case filenames so Bun emits hashed image assets in output bundles.
- [x] Add TypeScript declaration file for image assets (`.png`, `.jpg`, etc.) to resolve module resolution errors.
- [x] Integrate "Our Program Philosophy" content into About pages (desktop + mobile) with SDG alignment.
- [x] Implement comprehensive L.E.A.D.S Program profile pages (desktop + mobile) with impact metrics, financial trajectory, and program pillars.
- [x] Fix SPA routing break on refresh by converting asset paths to absolute paths in `index.html`.
- [x] Fix broken logos on nested routes by ensuring absolute paths for brand assets in `site-brand.ts`.
- [x] Implement global theme update (Accent: Teal #57c1bb).
- [x] Cleanup hardcoded green hexes/RGBs in static markup across all pages (About, Press, Home Mobile).
- [x] Implement dedicated program detail pages for Project Bhagiratha, Project Vasundhara, and Project Samyamam (Desktop + Mobile).
- [x] Link program detail pages from "Our Work" galleries and home page pillars.
- [x] Optimize brand assets: migrated from PNG to WebP and updated toolbar to display side-by-side emblem and wordmark logos.
- [x] Integrated orange accent (#FF8C42) beautifully with the teal palette on desktop and mobile homepages, adding text gradients, glow blurs, and updated component accents.
- [x] Consolidated "Library" project media into the "L.E.A.D.S Program" gallery in `project-media.ts` and removed the standalone library project.
- [x] Fixed router smoke tests (`router.spec.tsx`) by updating route expectations to match the actual, correct text rendered on the refactored about and press pages, achieving a completely passing test suite (28/28 passing).
- [x] Refactored Our Work pages (`our-work-desktop-page.tsx` and `our-work-mobile-page.tsx`) to match the updated visual identity and typography of the homepage, featuring font-editorial headings, orange accents, glowing blur support banners, and an aligned footer layout.
- [x] Align Press page color scheme and visual identity (desktop + mobile) to match the homepage (editorial headings, orange accents, glow blurs, warm background, and consistent header/footer navigation).
- [x] Align Impact Report page color scheme and visual identity (desktop + mobile) to match the homepage (editorial headings, orange accents, glow blurs, warm background, and consistent header/footer navigation).
- [x] Align program pages (L.E.A.D.S Program, Project Bhagiratha, Project Vasundhara, Project Samyamam) on both desktop and mobile to the warm paper-light background scheme with editorial Playfair Display headings, glowing blurs, and premium cards.
- [x] Align Contact Us page (desktop + mobile) to the warm paper-light scheme, integrating dynamic side-by-side emblem & wordmark headers and a premium, lighter warm cream footer for high visual excellence.
- [x] Consolidate Contact Us desktop and mobile footers onto shared dark site footer builders for visual consistency with the rest of the site.
- [x] Soften all static footer dark palettes and tune shared top logo sizing to match the provided emblem-plus-wordmark reference.
- [x] Switch softened footer palette from green-teal to blue-slate and reverse shared top logo order to wordmark-first/emblem-second.
- [x] Apply the site orange accent (#FF8C42) to softened footers and refine shared top logo proportions to match the latest wordmark-left/emblem-right reference.
- [x] Correct footer orange to use the actual theme accent token (`bg-accent`, `#f7b35c`) instead of the prior hardcoded orange.
- [x] Reduce footer accent intensity to a light theme-matched wash (`bg-accent/10`) with dark readable text and softer accent borders.
- [x] Replace "Know More" button with CSS-driven parent-state "Show Gallery" and "Hide Gallery" buttons in Our Work sections (desktop + mobile) and rename program links to "View Impact".
- [x] Integrated `Bhagiratha.webp` for Project Bhagiratha across all desktop and mobile pages (home page, program profiles, galleries) and set homepage-aligned high-quality WebP images as thumbnails in "Our Work".
- [x] Merged School Adoption photos/gallery into L.E.A.D.S Program and removed the redundant School Adoption project record from the catalog.
- [x] Implemented a premium hover-expandable "Our Work" dropdown menu in the desktop header and an animated drawer accordion in the mobile menu overlay containing project categories (Education, Environment, Water & Sanitation).
- [x] Filtered Global Impact Alignment SDG list on About pages (desktop + mobile) to only display goals 3, 4, 5, 6, 8, 11, 12, 13, and 15.
- [x] Fixed SVG donut chart segment overlapping and mathematically aligned stroke proportions for PCT (39.5%) and APTA (7.8%) segments with zero overlap.
- [x] Changed SVG donut chart base ring color from `text-slate-100` to `text-slate-200` to make the Global Donors segment solid grey and beautifully matching the legend.
- [x] Improved financial transparency donut chart central layout (Rs.21,26,753 text made text-3xl font-extrabold for better breathing room and subtitle made 10px uppercase tracking-widest text-slate-400 mt-1.5) and removed amount from the Global Donors legend item to match the reference mockup perfectly.
- [x] Corrected leadership team spelling: updated Pedapudi Bapi Raju to Bapi Raju Pedapudi, and Srirama Chandra Murthy to Srirama Chandra Murthy P on both desktop and mobile about pages.

## Data Models
- Custom Bun dev/build scripts require explicit static asset handling; `public/*` is now wired into both dev serving and dist output copying.
- Route smoke tests verify static rendering of all 16 routes; they do not currently exercise client-side redirects or interactive form behavior.
- Mobile menu open/close behavior is wired through DOM event delegation in the shared static markup renderer and is not yet covered by client-side interaction tests.
- Home page contrast no longer depends on `dark:` utility variants; the remaining static pages should still be reviewed for any low-contrast text embedded directly in imported markup.
- Several page bodies still contain route-specific decorative icons and placeholder partner marks that are outside the shared branding replacement path.
- Embedded Google Drive previews depend on external sharing permissions and third-party iframe availability.
- Project card descriptions are currently curated copy and may need stakeholder wording review.
- Leadership section currently uses approved real photos for available members only; additional members remain hidden until verified image assets are provided and added to `frontend/public/team/`.
- Leadership section currently uses approved real photos for available members only; additional members remain hidden until verified image assets are provided and imported in `frontend/src/assets`.
- Press page references WhatsApp-shared media coverage images, but those assets are not yet present in the repository for direct embedding.
