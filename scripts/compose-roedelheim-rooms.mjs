#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { basename, dirname, join, resolve } from "node:path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const experienceRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = join(experienceRoot, "dist");
const scienceRoot = process.argv[2];
const manifestPath = process.argv[3];
const expectedManifestId = "NEXAH_PUBLIC_FIELD_01_GATE0_CUT_V0_1";
const slugs = new Map([
  ["ROO:SEVEN_VIEWS", "one-carrier-seven-views"],
  ["ROO:THREAD_LOOM_0_4", "thread-loom"],
  ["ROO:DUAL_BELT_3_PLUS_1", "three-plus-one-dual-belt"],
  ["ROO:MIWA", "miwa-aperture-andromeda"],
  ["ROO:ROOT_SPACE_8_16", "root-space-eight-to-sixteen"],
  ["ROO:TESSAREC_Q_IOTA_PEARL", "tessarec-q-iota-pearl"],
]);
const supplementalDownloads = new Map([
  ["ROO:MIWA", [{
    source_path: "SCIENCE_LAB/EXPORTS/MIWA_PINEAP_STAR_MAP_TEMPLATE.csv",
    output_path: "MIWA_PINEAP_STAR_MAP_TEMPLATE.csv",
    sha256: "71bfe9779090d67113dd5e86c7e06147b47e48834abc12e8ebffe6b7f279418f",
    role: "NON_RUNTIME_DOWNLOAD_LINK_PRESENT_IN_FROZEN_HTML",
  }]],
]);

if (!scienceRoot || !manifestPath) {
  console.error("Usage: node scripts/compose-roedelheim-rooms.mjs /path/to/NEXAH-Science-Lab /path/to/PUBLIC_FIELD_RELEASE_MANIFEST_V0_1.json");
  process.exit(1);
}
if (!existsSync(join(distRoot, "index.html"))) throw new Error("Experience dist is missing. Run npm run build first.");

const manifest = JSON.parse(readFileSync(resolve(manifestPath), "utf8"));
if (manifest.manifest_id !== expectedManifestId) throw new Error(`Unexpected release manifest: ${manifest.manifest_id}`);
if (manifest.identity_effect !== "REUSE_AND_RELATE_EXISTING_IDENTITIES_ZERO_NAVIGATOR_COUNT_CHANGE") {
  throw new Error(`Unexpected identity effect: ${manifest.identity_effect}`);
}

const revision = manifest.roedelheim_source?.revision;
const instruments = manifest.roedelheim_source?.instruments;
if (!revision || !Array.isArray(instruments) || instruments.length !== slugs.size) throw new Error("The manifest does not contain the frozen six-room cut.");

const sha256 = (content) => createHash("sha256").update(content).digest("hex");
const readBlob = (path) => execFileSync("git", ["show", `${revision}:${path}`], { cwd: resolve(scienceRoot), maxBuffer: 64 * 1024 * 1024 });
const receipt = { manifest_id: manifest.manifest_id, revision, identity_effect: manifest.identity_effect, rooms: [] };

for (const instrument of instruments) {
  const slug = slugs.get(instrument.id);
  if (!slug) throw new Error(`Unrecognized Observatory identity: ${instrument.id}`);
  const roomDir = join(distRoot, "observatory-rooms", slug);
  mkdirSync(roomDir, { recursive: true });

  const html = readBlob(instrument.source_path);
  const actualSha = sha256(html);
  if (actualSha !== instrument.sha256) throw new Error(`SHA-256 mismatch for ${instrument.id}: ${actualSha}`);
  writeFileSync(join(roomDir, "index.html"), html);

  const dependencies = [];
  for (const dependency of instrument.runtime_dependencies ?? []) {
    const content = readBlob(dependency.source_path);
    const dependencySha = sha256(content);
    if (dependencySha !== dependency.sha256) throw new Error(`SHA-256 mismatch for ${instrument.id} dependency: ${dependencySha}`);
    const outputName = basename(dependency.public_path ?? dependency.source_path);
    writeFileSync(join(roomDir, outputName), content);
    dependencies.push({ path: outputName, sha256: dependencySha });
  }

  const downloads = [];
  for (const download of supplementalDownloads.get(instrument.id) ?? []) {
    const content = readBlob(download.source_path);
    const downloadSha = sha256(content);
    if (downloadSha !== download.sha256) throw new Error(`SHA-256 mismatch for ${instrument.id} supplemental download: ${downloadSha}`);
    writeFileSync(join(roomDir, download.output_path), content);
    downloads.push({ path: download.output_path, sha256: downloadSha, role: download.role });
  }

  receipt.rooms.push({ id: instrument.id, slug, source_path: instrument.source_path, sha256: actualSha, dependencies, supplemental_downloads: downloads });
}

mkdirSync(join(distRoot, "observatory-rooms"), { recursive: true });
writeFileSync(join(distRoot, "observatory-rooms", ".roedelheim-rooms-export.json"), `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`Composed ${receipt.rooms.length} frozen Rödelheim Observatory rooms from ${revision}.`);
