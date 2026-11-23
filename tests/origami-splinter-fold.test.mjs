import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = new URL(
  "../public/review-assets/scc-003-r1/demonstrators/origami-splinter-fold.html",
  import.meta.url,
);

test("Origami Splinter keeps plate address separate from fold geometry", async () => {
  const html = await readFile(source, "utf8");

  assert.match(html, /Number \/ Prime Plate/);
  assert.match(html, /new URLSearchParams\(location\.search\)\.get\('plate'\)/);
  assert.match(html, /die Faltung berechnet oder klassifiziert die Zahl nicht/);
  assert.match(html, /PROJEKTION · 5 \+ 2 \/ V \+ II/);
  assert.match(html, /A4_FOLD_CARRIER|FALTTRÄGER · A4/);
  assert.match(html, /P₅-Hülle \+ T₁\/T₂/);
});

test("Origami Splinter freezes the typed SCC and Prime Cube comparison", async () => {
  const html = await readFile(source, "utf8");
  const match = html.match(
    /<script type="application\/json" id="oss-typed-contract">\s*([\s\S]*?)\s*<\/script>/,
  );

  assert.ok(match, "typed comparison contract must be embedded");
  const contract = JSON.parse(match[1]);

  assert.equal(contract.schema, "nexah.scc003.typed-splinter-comparison/1.0.0");
  assert.deepEqual(contract.scc, {
    role: "OUTER_SPLINTER_RESIDUAL",
    formula: "((T1 SYMMETRIC_DIFFERENCE T2) INTERSECT P5)",
    zones: ["NP", "PN"],
  });
  assert.deepEqual(contract.primeCube, {
    role: "SPLINTER_SAIL_DIAGONAL",
    layout: "2x3_LADDER",
    boundaryCycle: [1, 8, 11, 22, 27, 33],
    diagonals: [[8, 33], [11, 27]],
    sails: [[1, 8, 33], [8, 27, 33], [8, 11, 27], [11, 22, 27]],
  });
  assert.equal(contract.identityMerge, false);
  assert.equal(contract.relationChange, false);
  assert.equal(contract.claimPromotion, false);
});

test("Origami Splinter clips both views to P5 and removes the old point heuristic", async () => {
  const html = await readFile(source, "utf8");

  assert.match(html, /const triAInCarrier = clipConvex\(triA, pentagon\)/);
  assert.match(html, /const triBInCarrier = clipConvex\(triB, pentagon\)/);
  assert.match(html, /const overlap = clipConvex\(triAInCarrier, triBInCarrier\)/);
  assert.match(html, /S<sub>out<\/sub> = \(T₁ △ T₂\) ∩ P₅ = NP ∪ PN/);
  assert.doesNotMatch(html, /const splinter = triB\.reduce/);
  assert.match(html, /data-action="reset"/);
  assert.match(html, /localStorage\.removeItem\(storageKey\)/);
});
