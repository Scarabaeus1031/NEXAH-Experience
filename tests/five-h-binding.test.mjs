import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("Five H remains a hash-bound read-only projection over the SCC-003 context", async () => {
  const manifest = JSON.parse(await read("public/review-assets/scc-003-r1/demonstrators/five-h-binding.json"));
  const projection = await read("public/review-assets/scc-003-r1/demonstrators/five-h-one-q-cut.html");
  const page = await read("src/pages/scc-003-r1/five-h-binding.astro");
  const hash = createHash("sha256").update(projection).digest("hex");

  assert.equal(hash, manifest.canonical.sha256);
  assert.equal(manifest.canonical.entity_id, "ART:FIVE_H:ONE_Q_CUT");
  assert.equal(manifest.canonical.module_id, "MOD:FIVE_H_PHASE_CUT");
  assert.equal(manifest.related_identity, "SCC-003 / A0OE:PASCAL_PENTAGON_D5_TEST");
  assert.equal(manifest.identity_effect, "REUSES_EXISTING_IDENTITIES_ONLY");
  assert.deepEqual(manifest.contract, ["Hⱼ", "Q°", "ΠQ", "TRACE", "MASK", "T³(q)"]);
  assert.deepEqual(manifest.navigator_effect, { new_entities: 0, new_relations: 0, new_aliases: 0 });
  assert.equal(manifest.scc_003_claim_effect, "NONE");
  assert.equal(manifest.publication_authorized, false);

  for (const token of manifest.contract) assert.match(projection, new RegExp(token.replace(/[°³()]/g, "\\$&")));
  assert.match(projection, /ι · IOTA CUT/);
  assert.match(projection, /CODED ROLES · OPERATOR LAYER/);
  assert.match(projection, /HELD READING · reader aliases, no operator identity/);
  assert.match(page, /documentary lens · no new identity/);
  assert.match(page, /The canonical instrument, byte for byte/);
  assert.match(page, /No new Navigator entity, relation or alias/);
  assert.match(page, /does not alter SCC-003 claims C1–C6/);
});
