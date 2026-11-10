import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { copyFile, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repository = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(
  repository,
  "../../30 SCIENCE LAB/NEXAH-Science-Lab/SCIENCE_LAB/EXPORTS/NEXAH_FIVE_H_ONE_Q_CUT.html"
);
const projection = resolve(
  repository,
  "public/review-assets/scc-003-r1/demonstrators/five-h-one-q-cut.html"
);
const manifestPath = resolve(
  repository,
  "public/review-assets/scc-003-r1/demonstrators/five-h-binding.json"
);
const write = process.argv.includes("--write");
const digest = (data) => createHash("sha256").update(data).digest("hex");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const sourceData = await readFile(source);
assert.equal(digest(sourceData), manifest.canonical.sha256, "canonical Five-H hash drift");

if (write) await copyFile(source, projection);

const projectionData = await readFile(projection);
assert.equal(digest(projectionData), manifest.canonical.sha256, "Experience projection is not byte-identical");

const text = projectionData.toString("utf8");
for (const token of manifest.contract) {
  assert.ok(text.includes(token), `projection is missing ${token}`);
}

console.log(JSON.stringify({
  status: "PASS",
  mode: write ? "SYNC_AND_VERIFY" : "VERIFY",
  source,
  projection,
  sha256: manifest.canonical.sha256,
  identity_effect: manifest.identity_effect
}, null, 2));
