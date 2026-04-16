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
import { LeadsProgramDesktopPage } from "../pages/desktop/programs/leads-program-desktop-page";
import { ProjectBhagirathaDesktopPage } from "../pages/desktop/programs/project-bhagiratha-desktop-page";
import { ProjectSamyamamDesktopPage } from "../pages/desktop/programs/project-samyamam-desktop-page";
import { ProjectVasundharaDesktopPage } from "../pages/desktop/programs/project-vasundhara-desktop-page";
import { ImpactReportDesktopPage } from "../pages/desktop/impact-report-desktop-page";
import { AboutMobilePage } from "../pages/mobile/about-mobile-page";
import { BlogMobilePage } from "../pages/mobile/blog-mobile-page";
import { ContactMobilePage } from "../pages/mobile/contact-mobile-page";
import { DonationConfirmationMobilePage } from "../pages/mobile/donation-confirmation-mobile-page";
import { EventsMobilePage } from "../pages/mobile/events-mobile-page";
import { HomeMobilePage } from "../pages/mobile/home-mobile-page";
import { OurWorkMobilePage } from "../pages/mobile/our-work-mobile-page";
import { PressMobilePage } from "../pages/mobile/press-mobile-page";
import { LeadsProgramMobilePage } from "../pages/mobile/programs/leads-program-mobile-page";
import { ProjectBhagirathaMobilePage } from "../pages/mobile/programs/project-bhagiratha-mobile-page";
import { ProjectSamyamamMobilePage } from "../pages/mobile/programs/project-samyamam-mobile-page";
import { ProjectVasundharaMobilePage } from "../pages/mobile/programs/project-vasundhara-mobile-page";
import { ImpactReportMobilePage } from "../pages/mobile/impact-report-mobile-page";

const desktopPageMap = {
  home: HomeDesktopPage,
  about: AboutDesktopPage,
  "our-work": OurWorkDesktopPage,
  events: EventsDesktopPage,
  blog: BlogDesktopPage,
  contact: ContactDesktopPage,
  press: PressDesktopPage,
  "donation-confirmation": DonationConfirmationDesktopPage,
  "programs-leads": LeadsProgramDesktopPage,
  "programs-bhagiratha": ProjectBhagirathaDesktopPage,
  "programs-vasundhara": ProjectVasundharaDesktopPage,
  "programs-samyamam": ProjectSamyamamDesktopPage,
  "impact-report": ImpactReportDesktopPage
};

const mobilePageMap = {
  home: HomeMobilePage,
  about: AboutMobilePage,
  "our-work": OurWorkMobilePage,
  events: EventsMobilePage,
  blog: BlogMobilePage,
  contact: ContactMobilePage,
  press: PressMobilePage,
  "donation-confirmation": DonationConfirmationMobilePage,
  "programs-leads": LeadsProgramMobilePage,
  "programs-bhagiratha": ProjectBhagirathaMobilePage,
  "programs-vasundhara": ProjectVasundharaMobilePage,
  "programs-samyamam": ProjectSamyamamMobilePage,
  "impact-report": ImpactReportMobilePage
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