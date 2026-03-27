/**
 * @file app.tsx
 * @description Top-level app component that mounts the route tree.
 * @module frontend/src/app
 */

import { RouterProviderContent } from "./router";

export function App() {
  return <RouterProviderContent />;
}