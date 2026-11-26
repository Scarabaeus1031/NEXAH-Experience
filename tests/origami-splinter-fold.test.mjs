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

  assert.equal(contract.schema, "nexah.scc003.typed-splinter-comparison/1.1.0");
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

test("Origami Splinter connects the bounded C24 and exact length adapters", async () => {
  const html = await readFile(source, "utf8");
  const match = html.match(
    /<script type="application\/json" id="oss-typed-contract">\s*([\s\S]*?)\s*<\/script>/,
  );
  assert.ok(match, "typed comparison contract must be embedded");
  const contract = JSON.parse(match[1]);
  const adapter = contract.controlPlane;

  assert.equal(adapter.role, "SOURCE_BOUND_COMPARATOR");
  assert.equal(adapter.refinement24.modulus, 24);
  assert.deepEqual(adapter.refinement24.c6, [0, 4, 8, 12, 16, 20]);
  assert.deepEqual(adapter.refinement24.c8, [0, 3, 6, 9, 12, 15, 18, 21]);
  assert.deepEqual(adapter.refinement24.c8_d12_intersection, [0, 6, 12, 18]);
  assert.equal(adapter.mz24.positionMatches, 0);
  assert.equal(adapter.mz24.identityEstablished, false);
  assert.equal(adapter.crossProportion.product, 5040);
  assert.deepEqual(adapter.crossProportion.expanded84, [6, 7, 2]);
  assert.equal(adapter.length.ticksPerCentimeter, 50);
  assert.equal(adapter.length.ticksPerInch, 127);
  assert.deepEqual(adapter.length.disk10, { centimeters: "25.40", ticks: 1270 });
  assert.deepEqual(adapter.length.disk12, { centimeters: "30.48", ticks: 1524 });
  assert.deepEqual(adapter.length.commonReturn, { inches: 50, centimeters: 127, ticks: 6350 });
  assert.deepEqual(adapter.sourceAuthority, ["ART:A0:MATHEMATICAL_JOINTS", "MOD:NUMBER_VIEW_SUITE", "MOD:TESSAREC"]);

  for (const marker of [
    'id="oss-primecube-control-adapter"',
    'id="oss-c24-grid"',
    'data-inch-preset="10"',
    'data-inch-preset="12"',
    "90/60 = 84/56 = 3/2",
    "60·84 = 90·56 = 5040",
    "50″ = 127 cm = 6350 ticks",
    "constructed C24 ≠ retained MZ24",
  ]) assert.match(html, new RegExp(marker));
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
