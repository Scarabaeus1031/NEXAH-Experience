import { access, readFile, readdir } from "node:fs/promises";
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

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function routeFor(file) {
  const path = relative(root, file).replaceAll("\\", "/");
  if (path === "index.html") return "/";
  if (path.endsWith("/index.html")) return `/${path.slice(0, -"index.html".length)}`;
  return `/${path}`;
}

const failures = [];
const htmlFiles = await collectHtml(root);

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const route = routeFor(file);
  for (const match of html.matchAll(/\bhref=["']([^"']+)["']/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (/^(mailto:|tel:|javascript:|#)/i.test(href)) continue;

    const target = new URL(href, `${origin}${route}`);
    if (target.origin !== origin) continue;

    const pathname = decodeURIComponent(target.pathname);
    const relativePath = pathname.replace(/^\//, "");
    const candidates = pathname.endsWith("/")
      ? [join(root, relativePath, "index.html")]
      : [join(root, relativePath), join(root, relativePath, "index.html")];

    if (!await Promise.any(candidates.map(async (candidate) => {
      if (await exists(candidate)) return true;
      throw new Error(candidate);
    })).catch(() => false)) {
      failures.push(`${route} -> ${href}`);
    }
  }
}

for (const required of ["robots.txt", "favicon.png", "sitemap-index.xml"]) {
  if (!await exists(join(root, required))) failures.push(`missing build artifact: /${required}`);
}

if (failures.length) {
  console.error(`Broken public references:\n${failures.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${htmlFiles.length} HTML pages: no broken internal links.`);
}
