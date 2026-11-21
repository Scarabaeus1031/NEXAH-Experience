import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const data = readFileSync(new URL("../src/data/prediction-paper.ts", import.meta.url), "utf8");
const index = readFileSync(new URL("../src/pages/papers/index.astro", import.meta.url), "utf8");
const paper = readFileSync(new URL("../src/pages/papers/nexah-prediction-protocol-01/index.astro", import.meta.url), "utf8");
const research = readFileSync(new URL("../src/pages/forschen/index.astro", import.meta.url), "utf8");
const lens = readFileSync(new URL("../src/pages/laboratory/roedelheim-observatory/measurement-gate/interstellar-entry-exit/index.astro", import.meta.url), "utf8");
const review = readFileSync(new URL("../src/pages/review/nexah-prediction-protocol-01/index.astro", import.meta.url), "utf8");
const reviewForm = readFileSync(new URL("../public/review-assets/nexah-prediction-protocol-01/REVIEW_FORM.md", import.meta.url), "utf8");
const reviewReceipt = JSON.parse(readFileSync(new URL("../public/review-assets/nexah-prediction-protocol-01/PRELOCK_REVIEW_RECEIPT.json", import.meta.url), "utf8"));

test("projects the existing intake without creating research authority", () => {
  assert.match(data, /M-CURATE01_ATLAS_III_INTERSTELLAR_ENTRY_EXIT_LENS/);
  assert.match(data, /REUSE_EXISTING_INTAKE \/ ZERO_NAVIGATOR_COUNT_CHANGE/);
  assert.match(data, /publicationAuthorized: false/);
  assert.match(paper, /Draft, not authority/);
  assert.match(paper, /REVIEW SURFACE ONLY · PREDICTION NOT ACTIVATED/);
});

test("binds the projection to exact paper and preregistration hashes", () => {
  assert.match(data, /fa292b2a754aca9221f5311cf2a8cb4abcf2461c2d28afa0d8863d93b8455d8c/);
  assert.match(data, /17c64bd962b75d91ddc617cdbccacbca4a9511ba739bb976e0c593007f1119c2/);
  assert.match(data, /70d4fa4b68b7ef1b47880c46b3e09348e3cc9903c3f45473880f938028dada07/);
  assert.match(paper, /Paper SHA-256/);
  assert.match(paper, /Preregistration SHA-256/);
  assert.match(paper, /Pre-lock receipt/);
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
  assert.match(research, /href: "\/A0_SCIENTIFIC_POSITION_REPORT\.html#currentness-20261121"/);
  assert.match(research, /href: "\/A0_SCIENCE\.html#contributions"/);
  assert.match(research, /href: "\/A0_MATHEMATICAL_JOINTS\.html#register-cut-aperture"/);
  assert.match(research, /href: "\/NEXAH_C_CONNECT\.html#scientific-review"/);
  assert.match(research, /Unabhängiger Review offen/);
  assert.match(research, /Methodenkandidat · inaktiv/);
  assert.doesNotMatch(research, /PUBLIC_REVIEW · REVIEWER_PENDING/);
  assert.match(data, /METHOD_REVIEW_CANDIDATE/);
  assert.match(data, /OPEN_METHOD_REVIEW \/ REVIEWER_PENDING/);
  assert.match(research, /predictionPaper\.reviewRoute/);
});

test("opens a bounded method-review room without activating the forecast", () => {
  assert.match(review, /Review the method/);
  assert.match(review, /PASS/);
  assert.match(review, /REVISE/);
  assert.match(review, /STOP/);
  assert.match(review, /PREDICTION NOT ACTIVATED/);
  assert.match(reviewForm, /PASS_FOR_SEPARATE_OWNER_LOCK_DECISION/);
  assert.match(reviewForm, /STOP_PROTOCOL/);
  assert.equal(reviewReceipt.status, "PRELOCK_REVIEW_PACKET_FROZEN_PREDICTION_NOT_LOCKED");
  assert.equal(reviewReceipt.authority.activation_authorized, false);
  assert.equal(reviewReceipt.forecast_boundary.secondary_control_may_rescue_primary, false);
  assert.deepEqual(reviewReceipt.graph_delta, { identities: 0, relations: 0, aliases: 0, studies: 0, findings: 0 });
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
