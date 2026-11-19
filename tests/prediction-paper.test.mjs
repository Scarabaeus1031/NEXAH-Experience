import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const data = readFileSync(new URL("../src/data/prediction-paper.ts", import.meta.url), "utf8");
const index = readFileSync(new URL("../src/pages/papers/index.astro", import.meta.url), "utf8");
const paper = readFileSync(new URL("../src/pages/papers/nexah-prediction-protocol-01/index.astro", import.meta.url), "utf8");
const research = readFileSync(new URL("../src/pages/forschen/index.astro", import.meta.url), "utf8");
const lens = readFileSync(new URL("../src/pages/laboratory/roedelheim-observatory/measurement-gate/interstellar-entry-exit/index.astro", import.meta.url), "utf8");

test("projects the existing intake without creating research authority", () => {
  assert.match(data, /M-CURATE01_ATLAS_III_INTERSTELLAR_ENTRY_EXIT_LENS/);
  assert.match(data, /REUSE_EXISTING_INTAKE \/ ZERO_NAVIGATOR_COUNT_CHANGE/);
  assert.match(data, /publicationAuthorized: false/);
  assert.match(paper, /Draft, not authority/);
  assert.match(paper, /NOT AUTHORIZED · LOCAL CANDIDATE/);
});

test("binds the projection to exact paper and preregistration hashes", () => {
  assert.match(data, /552061a9b96e2f87036801eb0193a776d76139c25ae2db1586aaf1d6e6ce7789/);
  assert.match(data, /68da7a315c0cbaa3eee3c4baef7a6ace31bfbac66b6bdc5304b93672f25de590/);
  assert.match(paper, /Paper SHA-256/);
  assert.match(paper, /Preregistration SHA-256/);
});

test("keeps every admissible return and the unresolved lock visible", () => {
  for (const outcome of ["HIT", "MISS", "INDETERMINATE", "INVALID_FRAME", "INVALID_SOURCE", "UNINFORMATIVE"]) assert.match(data, new RegExp(outcome));
  assert.match(data, /NOT_YET_ACTIVATED/);
  assert.match(paper, /The forecast is not active/);
  assert.match(paper, /Agreement is not a corridor/);
});

test("connects the paper section and instrument in both directions", () => {
  assert.match(index, /predictionPaper\.slug/);
  assert.match(index, /href="\/forschen\/"/);
  assert.match(research, /Paper-Section öffnen/);
  assert.match(research, /predictionPaper\.slug/);
  assert.match(lens, /\/papers\/nexah-prediction-protocol-01\//);
  assert.match(paper, /measurement-gate\/interstellar-entry-exit/);
});

test("routes the research entrances through canonical A0 science and keeps review gates distinct", () => {
  assert.match(research, /href: "\/A0_SCIENTIFIC_POSITION_REPORT\.html#currentness-20261019"/);
  assert.match(research, /href: "\/A0_SCIENCE\.html#contributions"/);
  assert.match(research, /href: "\/A0_MATHEMATICAL_JOINTS\.html#register-cut-aperture"/);
  assert.match(research, /href: "\/NEXAH_C_CONNECT\.html#scientific-review"/);
  assert.match(research, /PUBLIC_REVIEW · REVIEWER_PENDING/);
  assert.match(data, /METHOD_REVIEW_CANDIDATE/);
  assert.match(research, /No activated prediction and not yet a public scientific review/);
});

test("returns the public projection to the A0 Science Desk record", () => {
  assert.match(data, /prediction-protocol-01-method-review-return-20261119/);
  assert.match(paper, /Science Desk return/);
  assert.match(paper, /predictionPaper\.scienceDeskReturn/);
});

test("keeps draft routes out of search indexing", () => {
  assert.match(index, /noindex, follow/);
  assert.match(paper, /noindex, follow/);
});
