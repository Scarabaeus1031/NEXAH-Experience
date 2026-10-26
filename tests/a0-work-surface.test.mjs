import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("local A0 exposes exactly the three internal desks and keeps them out of public builds", async () => {
  const page = await readFile(new URL("../src/pages/a0.astro", import.meta.url), "utf8");
  assert.match(page, /import\.meta\.env\.DEV/);
  assert.match(page, /One field\. Three desks\./);
  assert.match(page, /Science Desk/);
  assert.match(page, /Builder Desk/);
  assert.match(page, /Mission Control/);
  assert.match(page, /Gemeinsame Arbeitsplatte · getrennte Zuständigkeiten · sichtbarer Return/);
  assert.equal((page.match(/title: "(?:Science Desk|Builder Desk|Mission Control)"/g) ?? []).length, 3);
  assert.match(page, /A0_RESEARCH_DESK\.html#desk-cabinet/);
  assert.match(page, /B0_BUILDER_DECK\/index\.html/);
  assert.match(page, /NEXAH-Mission-Control\/INTERNAL_NAVIGATOR\/index\.html/);
});
