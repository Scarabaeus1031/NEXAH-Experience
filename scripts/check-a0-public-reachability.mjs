import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const origin = "https://nexah.de";

async function collectHtml(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtml(path));
    else if (entry.name.endsWith(".html")) files.push(path);
  }
  return files;
}

function localPath(file) {
  return relative(root, file).replaceAll("\\", "/");
}

function routeFor(path) {
  if (path === "index.html") return "/";
  if (path.endsWith("/index.html")) return `/${path.slice(0, -"index.html".length)}`;
  return `/${path}`;
}

const htmlFiles = await collectHtml(root);
const known = new Set(htmlFiles.map(localPath));
const links = new Map();

for (const file of htmlFiles) {
  const path = localPath(file);
  const html = await readFile(file, "utf8");
  const targets = new Set();
  for (const match of html.matchAll(/\bhref=["']([^"']+)["']/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (/^(mailto:|tel:|javascript:|#)/i.test(href)) continue;
    const target = new URL(href, `${origin}${routeFor(path)}`);
    if (target.origin !== origin) continue;
    const pathname = decodeURIComponent(target.pathname).replace(/^\//, "");
    const candidates = pathname.endsWith("/")
      ? [`${pathname}index.html`]
      : [pathname, `${pathname}/index.html`];
    const resolved = candidates.find((candidate) => known.has(candidate));
    if (resolved) targets.add(resolved);
  }
  links.set(path, targets);
}

const reachable = new Set(["index.html"]);
const queue = ["index.html"];
while (queue.length) {
  const current = queue.shift();
  for (const target of links.get(current) ?? []) {
    if (reachable.has(target)) continue;
    reachable.add(target);
    queue.push(target);
  }
}

const receipt = JSON.parse(await readFile(join(root, ".a0-public-export.json"), "utf8"));
const publicPages = receipt.pages
  .filter((path) => path.endsWith(".html"))
  .map((path) => path === "A0_SCIENCE.html" ? "forschen/index.html" : path);
const missing = publicPages.filter((path) => !known.has(path));
const unreachable = publicPages.filter((path) => known.has(path) && !reachable.has(path));

if (missing.length || unreachable.length) {
  if (missing.length) console.error(`Missing allowlisted A0 pages:\n${missing.join("\n")}`);
  if (unreachable.length) console.error(`Unreachable allowlisted A0 pages:\n${unreachable.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`All ${publicPages.length} allowlisted A0 HTML pages are reachable from the nexah.de start page.`);
}
