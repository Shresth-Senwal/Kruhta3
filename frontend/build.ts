/**
 * @file build.ts
 * @description Production build script for the Bun-native React frontend.
 * @module frontend
 */

import { cp, mkdir, readdir, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

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

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

try {
  await cp(publicDir, distDir, { recursive: true, force: true });
} catch (error) {
  const fileSystemError = error as NodeJS.ErrnoException;
  if (fileSystemError.code !== "ENOENT") {
    throw error;
  }
}

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

const buildResult = await Bun.build({
  entrypoints: [jsInputPath],
  outdir: distDir,
  minify: true,
  target: "browser",
  sourcemap: "external",
  splitting: false
});

if (!buildResult.success) {
  for (const log of buildResult.logs) {
    console.error(log);
  }
  throw new Error("Bun build failed");
}

const distFiles = await readdir(distDir);
const entryFile = distFiles.find((fileName) => fileName.endsWith(".js") && fileName !== "app.js");

if (!entryFile) {
  throw new Error("Unable to locate built JavaScript entry file");
}

await rename(path.join(distDir, entryFile), path.join(distDir, "app.js"));

const sourceMapFile = `${entryFile}.map`;
if (distFiles.includes(sourceMapFile)) {
  await rename(path.join(distDir, sourceMapFile), path.join(distDir, "app.js.map"));
}

const html = await Bun.file(htmlPath).text();
await writeFile(path.join(distDir, "index.html"), html, "utf8");