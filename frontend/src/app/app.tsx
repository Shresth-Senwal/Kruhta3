/**
 * @file app.tsx
 * @description Top-level app component that mounts the route tree.
 * @module frontend/src/app
 */

import { ScrollToAnchor } from "../components/ui/scroll-to-anchor";
import { RouterProviderContent } from "./router";

export function App() {
  return (
    <>
      <ScrollToAnchor />
      <RouterProviderContent />
    </>
  );
}