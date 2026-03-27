# Context

## Project Overview

- Project: Krutha Foundation website rebuild.
- Goal: Recreate the provided reference designs as closely as possible using TypeScript, React 19, Tailwind CSS v4, and Bun only.
- Scope: Frontend-only implementation with separate desktop and mobile route sets and working client-side navigation.

## Tech Stack

- Runtime and package manager: Bun.
- Frontend: React 19 with TypeScript.
- Styling: Tailwind CSS v4 with PostCSS.
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

## Data Models

- No backend data model.
- Frontend content model will include:
  - route metadata
  - navigation items
  - page section content
  - card and list item collections

## API Contracts

- No external or internal API contracts in the current scope.
- Forms are visual-only unless explicitly expanded later.

## Technical Debt

- Exact HTML-to-JSX parity across 16 routes is large in scope and may require selective duplication to preserve fidelity.
- Remote image URLs from the source designs may remain in place initially for visual parity.
- Fonts and icon delivery may initially use provider-hosted assets before any later self-hosting pass.
- Development/build pipeline uses Bun build plus Tailwind CLI instead of Vite or other prohibited bundlers.
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