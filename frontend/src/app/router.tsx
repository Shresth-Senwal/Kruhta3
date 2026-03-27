/**
 * @file router.tsx
 * @description Route definitions for desktop and mobile page variants.
 * @module frontend/src/app
 */

import { Routes, Route, Navigate } from "react-router-dom";
import { desktopRoutes, mobileRoutes } from "../data/routes";
import { AboutDesktopPage } from "../pages/desktop/about-desktop-page";
import { BlogDesktopPage } from "../pages/desktop/blog-desktop-page";
import { ContactDesktopPage } from "../pages/desktop/contact-desktop-page";
import { DonationConfirmationDesktopPage } from "../pages/desktop/donation-confirmation-desktop-page";
import { EventsDesktopPage } from "../pages/desktop/events-desktop-page";
import { HomeDesktopPage } from "../pages/desktop/home-desktop-page";
import { OurWorkDesktopPage } from "../pages/desktop/our-work-desktop-page";
import { PressDesktopPage } from "../pages/desktop/press-desktop-page";
import { AboutMobilePage } from "../pages/mobile/about-mobile-page";
import { BlogMobilePage } from "../pages/mobile/blog-mobile-page";
import { ContactMobilePage } from "../pages/mobile/contact-mobile-page";
import { DonationConfirmationMobilePage } from "../pages/mobile/donation-confirmation-mobile-page";
import { EventsMobilePage } from "../pages/mobile/events-mobile-page";
import { HomeMobilePage } from "../pages/mobile/home-mobile-page";
import { OurWorkMobilePage } from "../pages/mobile/our-work-mobile-page";
import { PressMobilePage } from "../pages/mobile/press-mobile-page";

const desktopPageMap = {
  home: HomeDesktopPage,
  about: AboutDesktopPage,
  "our-work": OurWorkDesktopPage,
  events: EventsDesktopPage,
  blog: BlogDesktopPage,
  contact: ContactDesktopPage,
  press: PressDesktopPage,
  "donation-confirmation": DonationConfirmationDesktopPage
};

const mobilePageMap = {
  home: HomeMobilePage,
  about: AboutMobilePage,
  "our-work": OurWorkMobilePage,
  events: EventsMobilePage,
  blog: BlogMobilePage,
  contact: ContactMobilePage,
  press: PressMobilePage,
  "donation-confirmation": DonationConfirmationMobilePage
};

export function RouterProviderContent() {
  return (
    <Routes>
      {desktopRoutes.map((route) => {
        const Component = desktopPageMap[route.key];
        return <Route key={route.path} path={route.path} element={<Component />} />;
      })}
      {mobileRoutes.map((route) => {
        const Component = mobilePageMap[route.key];
        return <Route key={route.path} path={route.path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}