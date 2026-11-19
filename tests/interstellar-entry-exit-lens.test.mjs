import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const data = readFileSync(new URL("../src/data/interstellar-entry-exit-lens.ts", import.meta.url), "utf8");
const page = readFileSync(new URL("../src/pages/laboratory/roedelheim-observatory/measurement-gate/interstellar-entry-exit/index.astro", import.meta.url), "utf8");
const gate = readFileSync(new URL("../src/pages/laboratory/roedelheim-observatory/measurement-gate/index.astro", import.meta.url), "utf8");
const observatory = readFileSync(new URL("../src/pages/laboratory/roedelheim-observatory.astro", import.meta.url), "utf8");

test("freezes one explicit JPL solution for each admitted object", () => {
  assert.match(data, /id: "1I"[\s\S]*?orbit: "16"/);
  assert.match(data, /id: "2I"[\s\S]*?orbit: "54"/);
  assert.match(data, /id: "3I"[\s\S]*?temporary: true[\s\S]*?orbit: "55"/);
  assert.equal((data.match(/snapshotSha256: "[a-f0-9]{64}"/g) ?? []).length, 6);
});

test("keeps declared hypotheses apart from plotted astronomy", () => {
  assert.match(data, /HISTORICAL_DECLARED_HYPOTHESIS/);
  assert.match(data, /ALGO = phase\(3I exit\) \+ 120° \+ 2°/);
  assert.match(data, /phase operator/);
  assert.match(page, /NOT PLOTTED/);
  assert.match(page, /NO CORRIDOR · NO TARGET · NO \+1/);
});

test("exposes the four-stage source discipline without live or 3D dependencies", () => {
  for (const room of ["SOURCE", "TRANSFORM", "DECLARE", "RETURN"]) assert.match(page, new RegExp(room));
  assert.match(page, /data-interstellar-object/);
  assert.doesNotMatch(page, /fetch\s*\(/);
  assert.doesNotMatch(page, /<model-viewer|\.glb/i);
});

test("is nested in the existing Measurement Gate rather than becoming a new identity", () => {
  assert.match(gate, /measurement-gate\/interstellar-entry-exit\//);
  assert.match(page, /REUSE_EXISTING_IDENTITIES_ZERO_COUNT_CHANGE/);
  assert.match(page, /ZERO NAVIGATOR COUNT CHANGE/);
});

test("has a direct and honestly classified Observatory entry", () => {
  assert.match(observatory, /Prediction module · source-bound candidate/);
  assert.match(observatory, /NEXAH's first formally prepared prediction line/);
  assert.match(observatory, /measurement-gate\/interstellar-entry-exit\//);
  assert.match(observatory, /NO \+1 YET/);
  const heading = observatory.indexOf("What the instruments keep distinct.");
  const module = observatory.indexOf("observatory-prediction-entry");
  const rooms = observatory.indexOf("<ol>", heading);
  assert.ok(heading < module && module < rooms, "prediction module must sit below the six-room heading and above the room list");
});
