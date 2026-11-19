import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the Rödelheim release cut exposes six source-bound standalone rooms", async () => {
  const data = await read("src/data/roedelheim-rooms.ts");
  const landing = await read("src/pages/laboratory/roedelheim-observatory.astro");
  const room = await read("src/pages/laboratory/roedelheim-observatory/rooms/[room].astro");

  for (const [identity, slug] of [
    ["ROO:SEVEN_VIEWS", "one-carrier-seven-views"],
    ["ROO:THREAD_LOOM_0_4", "thread-loom"],
    ["ROO:DUAL_BELT_3_PLUS_1", "three-plus-one-dual-belt"],
    ["ROO:MIWA", "miwa-aperture-andromeda"],
    ["ROO:ROOT_SPACE_8_16", "root-space-eight-to-sixteen"],
    ["ROO:TESSAREC_Q_IOTA_PEARL", "tessarec-q-iota-pearl"],
  ]) {
    assert.match(data, new RegExp(identity.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(data, new RegExp(`slug: "${slug}"`));
  }

  assert.match(landing, /roedelheimRooms\.map/);
  assert.match(landing, /Open room/);
  assert.match(landing, /Was die Instrumente unterscheidbar halten/);
  assert.match(landing, /Ein lokales Fenster in verschachtelte Himmelsbewegung/);
  assert.match(data, /descriptionDe/);
  assert.match(data, /questionDe/);
  assert.match(data, /claimBoundaryDe/);
  assert.match(room, /getStaticPaths/);
  assert.match(room, /\/observatory-rooms\/\$\{room\.slug\}\/index\.html/);
  assert.match(room, /Reading boundary/);
  assert.match(room, /Das eingebettete Original-Instrument ist derzeit englischsprachig/);
});
test("the Observatory composer reproduces the frozen Mission Control cut", async () => {
  const composer = await read("scripts/compose-roedelheim-rooms.mjs");
  assert.match(composer, /NEXAH_PUBLIC_FIELD_01_GATE0_CUT_V0_1/);
  assert.match(composer, /REUSE_AND_RELATE_EXISTING_IDENTITIES_ZERO_NAVIGATOR_COUNT_CHANGE/);
  assert.match(composer, /execFileSync\("git", \["show"/);
  assert.match(composer, /createHash\("sha256"\)/);
  assert.match(composer, /runtime_dependencies/);
  assert.match(composer, /NON_RUNTIME_DOWNLOAD_LINK_PRESENT_IN_FROZEN_HTML/);
  assert.match(composer, /71bfe9779090d67113dd5e86c7e06147b47e48834abc12e8ebffe6b7f279418f/);
  assert.match(composer, /\.roedelheim-rooms-export\.json/);
});

test("the Observatory presents the book as an external reading surface, not a finished native reader", async () => {
  const landing = await read("src/pages/laboratory/roedelheim-observatory.astro");
  assert.match(landing, /roedelheim-observatory-book-cover\.png/);
  assert.match(landing, /How a Moving World/);
  assert.match(landing, /https:\/\/www\.are\.na\/nexah-scarabaeus1031\/the-rodelhaeim-observatory/);
  assert.match(landing, /Native reader · in preparation/);
  assert.match(landing, /originale englischsprachige Are\.na-Kanal/);
});

