/**
 * @file build.ts
 * @description Production build script for the Bun-native React frontend.
 * @module frontend
 */

import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { desktopRoutes, mobileRoutes } from "./src/data/routes";

const rootDir = import.meta.dir;
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");
const htmlPath = path.join(rootDir, "index.html");
const cssInputPath = path.join(rootDir, "src", "styles", "globals.css");
const cssOutputPath = path.join(distDir, "app.css");
const jsInputPath = path.join(rootDir, "src", "main.tsx");

async function runCommand(command: string[]) {
  const process = Bun.spawn(command, {
    cwd: rootDir,
    stdout: "inherit",
    stderr: "inherit"
  });

  const exitCode = await process.exited;
  if (exitCode !== 0) {
    throw new Error(`Command failed: ${command.join(" ")}`);
  }
}

// Clean and prepare dist directory
await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

// Copy public assets if public directory exists
try {
  await cp(publicDir, distDir, { recursive: true, force: true });
} catch (error) {
  const fileSystemError = error as NodeJS.ErrnoException;
  if (fileSystemError.code !== "ENOENT") {
    throw error;
  }
}

// Compile Tailwind CSS bundle
await runCommand([
  "bunx",
  "--bun",
  "@tailwindcss/cli",
  "-i",
  cssInputPath,
  "-o",
  cssOutputPath,
  "--minify"
]);

// Build JavaScript bundle with Bun native builder
const buildResult = await Bun.build({
  entrypoints: [jsInputPath],
  outdir: distDir,
  minify: true,
  target: "browser",
  sourcemap: "external",
  splitting: false,
  naming: {
    entry: "app.js",
    asset: "assets/[name]-[hash].[ext]"
  }
});

if (!buildResult.success) {
  for (const log of buildResult.logs) {
    console.error(log);
  }
  throw new Error("Bun build failed");
}

// Write root HTML template and 404 fallback
const html = await Bun.file(htmlPath).text();
await writeFile(path.join(distDir, "index.html"), html, "utf8");
await writeFile(path.join(distDir, "404.html"), html, "utf8");

// Generate physical directory mirrors with index.html for all known desktop and mobile routes
const allRoutes = [...desktopRoutes, ...mobileRoutes];
const uniqueRoutePaths = new Set(
  allRoutes
    .map((route) => route.path.replace(/^\/|\/$/g, ""))
    .filter((cleanPath) => cleanPath.length > 0)
);

for (const cleanPath of uniqueRoutePaths) {
  const routeDir = path.join(distDir, cleanPath);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html, "utf8");
}