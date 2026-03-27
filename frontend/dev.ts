/**
 * @file dev.ts
 * @description Development watcher and static server for the Bun-native frontend.
 * @module frontend
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const rootDir = import.meta.dir;
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");
const htmlPath = path.join(rootDir, "index.html");
const cssInputPath = path.join(rootDir, "src", "styles", "globals.css");
const cssOutputPath = path.join(distDir, "app.css");
const jsInputPath = path.join(rootDir, "src", "main.tsx");

await mkdir(distDir, { recursive: true });
await writeFile(path.join(distDir, "index.html"), await Bun.file(htmlPath).text(), "utf8");

const cssWatcher = Bun.spawn(
  [
    "bunx",
    "--bun",
    "@tailwindcss/cli",
    "-i",
    cssInputPath,
    "-o",
    cssOutputPath,
    "--watch"
  ],
  {
    cwd: rootDir,
    stdout: "inherit",
    stderr: "inherit"
  }
);

const jsWatcher = Bun.spawn(
  [
    "bun",
    "build",
    jsInputPath,
    "--outdir",
    distDir,
    "--entry-naming",
    "app.js",
    "--asset-naming",
    "assets/[name]-[hash].[ext]",
    "--target",
    "browser",
    "--watch"
  ],
  {
    cwd: rootDir,
    stdout: "inherit",
    stderr: "inherit"
  }
);

const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const url = new URL(request.url);
    let pathname = url.pathname === "/" ? "/index.html" : url.pathname;
    const filePath = path.join(distDir, pathname.replace(/^\//, ""));
    const file = Bun.file(filePath);
    const publicFilePath = path.join(publicDir, pathname.replace(/^\//, ""));
    const publicFile = Bun.file(publicFilePath);

    return file.exists().then((exists) => {
      if (exists) {
        return new Response(file);
      }

      return publicFile.exists().then((publicExists) => {
        if (publicExists) {
          return new Response(publicFile);
        }

        return new Response(Bun.file(path.join(distDir, "index.html")));
      });
    });
  }
});

console.log(`Dev server running at http://localhost:${server.port}`);

const shutdown = async () => {
  cssWatcher.kill();
  jsWatcher.kill();
  server.stop();
  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);