/**
 * @file router.spec.tsx
 * @description Route smoke tests covering all desktop and mobile pages.
 * @module frontend/src/test
 */

import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { RouterProviderContent } from "../app/router";
import { desktopRoutes, mobileRoutes } from "../data/routes";

const routeExpectations: Record<string, string> = {
  "/": "Transforming Communities",
  "/about": "Our Story",
  "/our-work": "Our Work",
  "/events": "Impact in Action",
  "/blog": "Our Stories",
  "/contact": "Contact Details",
  "/press": "Media &amp; Press Room",
  "/donation-confirmation": "Share Our Mission",
  "/m": "Roadmap 2026+",
  "/m/about": "Empowering Communities",
  "/m/our-work": "Our Work",
  "/m/events": "Featured Event",
  "/m/blog": "Latest Stories",
  "/m/contact": "Contact Details",
  "/m/press": "Featured Announcement",
  "/m/donation-confirmation": "Donation Summary"
};

function renderAt(path: string) {
  return renderToStaticMarkup(
    <MemoryRouter initialEntries={[path]}>
      <RouterProviderContent />
    </MemoryRouter>
  );
}

describe("RouterProviderContent", () => {
  for (const route of [...desktopRoutes, ...mobileRoutes]) {
    test(`renders ${route.path}`, () => {
      expect(renderAt(route.path)).toContain(routeExpectations[route.path]);
    });
  }

  test("renders the shared desktop header", () => {
    const markup = renderAt("/about");

    expect(markup).toContain('aria-label="Primary"');
    expect(markup).toContain("data-mobile-menu-toggle");
    expect(markup).toContain('href="/events"');
    expect(markup).toContain('href="/press"');
    expect(markup).toContain('href="/contact">Donate Now<');
  });

  test("renders the shared mobile hamburger menu", () => {
    const markup = renderAt("/m/about");

    expect(markup).toContain("data-mobile-menu-toggle");
    expect(markup).toContain('id="mobile-site-menu"');
    expect(markup).toContain('href="/m/press"');
  });
});