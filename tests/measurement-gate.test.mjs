import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the Measurement Gate exposes five source-bound cases including a bounded ED138 comparison", async () => {
  const data = await read("src/data/measurement-gate.ts");
  const page = await read("src/pages/laboratory/roedelheim-observatory/measurement-gate/index.astro");
  const landing = await read("src/pages/laboratory/roedelheim-observatory.astro");

  for (const caseId of ["earth-sun-control", "3i-atlas-jpl-55", "2026-ed138-eris-comparator", "jupiter-resonance-sorter", "saturn-titan-qrt"]) {
    assert.match(data, new RegExp(caseId));
  }
  assert.match(data, /PASS_SOURCE_BOUND_COMPARISON/);
  assert.match(data, /confirmed 12:7 membership/);
  assert.match(page, /SOURCE.*TYPE.*CUT.*TRACE.*COMPARE.*RETURN/s);
  assert.match(page, /A number needs a type/);
  assert.match(page, /Measurement Gate receipts/);
  assert.match(page, /miwa-aperture-andromeda/);
  assert.match(page, /resonance-edge candidate/i);
  assert.match(landing, /measurement-gate/);
  assert.match(landing, /Measurement Gate öffnen/);
});

test("every Measurement Gate case retains source, frame and return boundaries", async () => {
  const data = await read("src/data/measurement-gate.ts");
  assert.equal((data.match(/\n    source: \{/g) ?? []).length, 5); // five case-level source records
  assert.equal((data.match(/frameDe:/g) ?? []).length, 6); // type declaration + five cases
  assert.equal((data.match(/nonclaimsDe:/g) ?? []).length, 6); // type declaration + five cases
  assert.match(data, /N_A_ANALOGY_ONLY/);
  assert.match(data, /PASS_DERIVATION_REPRODUCED/);
});

test("the visual fieldbook binds five real plates to status, provenance and claim boundaries", async () => {
  const reader = await read("src/data/measurement-gate-reader.ts");
  const page = await read("src/pages/laboratory/roedelheim-observatory/measurement-gate/index.astro");

  for (const id of ["number-needs-a-type", "chiron-two-flows", "jota-half-turn", "qrt-source-view", "qrt-designed-view"]) {
    assert.match(reader, new RegExp(`id: "${id}"`));
  }
  assert.match(reader, /CANONICAL_METHOD_CORE/);
  assert.match(reader, /INTAKE_ORIENTATION_ONLY/);
  assert.match(reader, /DECLARED_MATHEMATICAL_ORIENTATION/);
  assert.equal((reader.match(/artifactId: "ART:HTML:CAAEAD5F19ED"/g) ?? []).length, 2);
  assert.doesNotMatch(reader, /Photos Library\.photoslibrary/);
  assert.match(page, /data-reader-image/);
  assert.match(page, /data-reader-thumbs/);
  assert.match(page, /data-reader-dialog/);
  assert.match(page, /Aussagegrenze/);
});

test("visual fieldbook asset hashes match their bound manifest", async () => {
  const expected = new Map([
    ["01-number-needs-a-type.webp", "88dfcad81d8333a5d73b209bbc7eea8773b9266303a05737a188da59bf05b5af"],
    ["02-chiron-two-flows.webp", "ede2dd527b1ce1a06f0dac9e8ce8f435f68193a1b6a772a667a3653053790e85"],
    ["03-jota-half-turn.webp", "171801f65c79b53939b98f910b390f3d996ab6bef6ceb60c60ffc6a02464ca7e"],
    ["04-qrt-source-view.webp", "8fb6c51f1aaa6839388f2c1406a167f2580f712c037b7d64871c9b37398accf4"],
    ["05-qrt-designed-view.webp", "69e91a3b234265f30d1a786c6c87dd88272fecbafb83557a87f2734179998a86"],
  ]);

  for (const [file, digest] of expected) {
    const asset = await readFile(new URL(`../public/images/measurement-gate-reader/${file}`, import.meta.url));
    assert.equal(createHash("sha256").update(asset).digest("hex"), digest);
  }
});

test("the Measurement Gate preserves the QRT instrument and keeps connected layers distinct", async () => {
  const page = await read("src/pages/laboratory/roedelheim-observatory/measurement-gate/index.astro");
  const qrt = await readFile(new URL("../public/review-assets/measurement-gate/saturn-titan-qrt-record.html", import.meta.url));

  assert.equal(createHash("sha256").update(qrt).digest("hex"), "d95993f32cd1e828fcecaa6596e9e99b1d738be0420f724759a2bcf11869c72d");
  assert.match(page, /saturn-titan-qrt-record\.html/);
  assert.match(page, /sandbox="allow-scripts"/);
  assert.match(page, /ART:HTML:CAAEAD5F19ED/);
  assert.match(page, /generation-corner\/#five-h/);
  assert.match(page, /ART:RUNTIME:ADAPTER/);
  assert.match(page, /IMPLEMENTATION: NO · EXECUTION: NO/);
  assert.match(page, /DESCRIPTIVE SUPPLEMENT/);
  assert.match(page, /A0 \/ Zeta Timegear/);
});
