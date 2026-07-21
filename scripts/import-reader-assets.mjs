import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = process.env.NEXAH_PUBLICATIONS_PATH;

if (!sourceRoot) {
  throw new Error("Set NEXAH_PUBLICATIONS_PATH to the directory containing the recorded publication folders.");
}

const manifest = JSON.parse(readFileSync(join(repositoryRoot, "src/data/reader-sources.json"), "utf8"));
let imported = 0;

for (const [bookSlug, publication] of Object.entries(manifest)) {
  const outputDirectory = join(repositoryRoot, "public/images/reader", bookSlug);
  mkdirSync(outputDirectory, { recursive: true });

  publication.pages.forEach((page, index) => {
    const input = join(sourceRoot, publication.sourceFolder, page.sourceFile);
    const output = join(outputDirectory, `${String(index + 1).padStart(2, "0")}.webp`);
    if (!existsSync(input)) throw new Error(`Missing recorded reader source: ${publication.sourceFolder}/${page.sourceFile}`);
    execFileSync("cwebp", ["-quiet", "-q", "84", "-metadata", "none", input, "-o", output]);
    imported += 1;
  });
}

console.log(`Imported ${imported} recorded publication pages.`);
