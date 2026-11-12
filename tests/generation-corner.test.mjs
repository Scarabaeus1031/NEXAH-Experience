import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("Generation Corner is the unified editorial lens without merging source identities", async () => {
  const page = await read("src/pages/laboratory/roedelheim-observatory/generation-corner/index.astro");
  const fiveH = await read("src/pages/scc-003-r1/five-h-binding.astro");
  const review = await read("src/pages/scc-003-r1/index.astro");
  const notebook = await read("src/pages/scc-003-r1/generation-study/index.astro");

  assert.match(page, /ART:FIVE_H:ONE_Q_CUT/);
  assert.match(page, /MOD:ORIENTATION_DEMONSTRATORS/);
  assert.match(page, /five-h-one-q-cut\.html/);
  assert.match(page, /complex-fold-18x23\.html\?rev=crt-fold-address-20261110#root432-keystone-capsule/);
  assert.match(page, /13 intended · 9 executable sources present · 4 source HTMLs absent/);
  assert.match(page, /No new identity/);
  assert.match(page, /Instrument III · Polar Web · Red Balloon/);
  assert.match(page, /A0OE:PASCAL_PENTAGON_D5_TEST/);
  assert.match(page, /τ²=id/);
  assert.match(page, /The marker is not a quotient vertex/);
  assert.match(page, /SAME SCC-003 IDENTITY · NO GRAPH DELTA/);

  assert.match(fiveH, /Read Five H inside the unified Generation Corner/);
  assert.match(review, /Supplementary visual notebook/);
  assert.match(review, /Exploratory context only · not part of claims C1–C6/);
  assert.doesNotMatch(review, /Open Generation Corner · Five H \+ Complex Fold/);
  assert.match(notebook, /Continue through Generation Corner · Five H \+ Complex Fold/);
});
