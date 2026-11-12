import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { buildSCC003Stage, choose, recurrenceForMember } from "../src/lib/scc003-quotient-construction.mjs";
import { verifySCC003 } from "../public/review-assets/scc-003-r1/proof/scc003-proof-verifier.mjs";

const certificate = JSON.parse(await readFile(new URL("../public/review-assets/scc-003-r1/proof/scc003-proof-certificate.json", import.meta.url), "utf8"));

test("construction stages reproduce the published finite ledger", () => {
  const stages = Array.from({ length: 7 }, (_, index) => buildSCC003Stage(index));
  assert.deepEqual(stages.map((stage) => stage.nodes.length), [140, 28, 49, 70, 91, 112, 106]);
  assert.deepEqual(stages.map((stage) => stage.edges.length), [210, 42, 78, 114, 150, 186, 180]);
  assert.deepEqual(stages.map((stage) => stage.incidenceCount), [210, 42, 84, 126, 168, 210, 210]);
  assert.equal(stages[6].identifications, 34);
});

test("closed animation state equals the independent verifier witness", () => {
  const stage = buildSCC003Stage(6);
  const proof = verifySCC003(certificate);
  assert.equal(proof.status, "PASS");
  assert.deepEqual(stage.nodes.map(({ id, weight, members }) => ({ id, weight, members })), proof.witness.nodes);
  const expectedEdges = new Set(proof.witness.edges.map(([source, target]) => `${proof.witness.nodes[source].id}>${proof.witness.nodes[target].id}`));
  assert.deepEqual(new Set(stage.edges.map(([source, target]) => `${source}>${target}`)), expectedEdges);
});

test("every displayed recurrence is the facewise Pascal recurrence", () => {
  for (let n = 0; n <= 6; n += 1) {
    for (let k = 0; k <= n; k += 1) {
      const recurrence = recurrenceForMember(`3:${n}:${k}`);
      if (n === 0) assert.equal(recurrence, null);
      else {
        assert.equal(recurrence.valid, true);
        assert.equal(recurrence.value, choose(n, k));
      }
    }
  }
});
