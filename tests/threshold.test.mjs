import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { resolveThreshold, thresholdModes } from "../src/threshold/engine.mjs";
import { boundedClarifications, explicitThresholdIntents } from "../src/threshold/intents.mjs";
import { approvedExplanations } from "../src/threshold/knowledge.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(await readFile(path.join(root, "src/data/generated/publication-catalog.json"), "utf8"));
const interaction = JSON.parse(await readFile(path.join(root, "src/data/generated/orion-interaction.json"), "utf8"));
const localRoutes = new Map([
  ["arena:5404615", "visitors-guide"], ["arena:5421517", "language-book"],
  ["arena:5450904", "wonder-operator"], ["arena:5391199", "operators-handbook"],
  ["arena:5305692", "orientation-design"], ["arena:5386766", "cartography-laboratory"],
  ["arena:5344975", "cartography-perspectives"],
]);

const dependencies = {
  knowledge: approvedExplanations,
  intents: explicitThresholdIntents,
  clarifications: boundedClarifications,
  publications: catalog.records.map((record) => ({
    ...record,
    routeSlug: localRoutes.get(record.catalogKey) ?? record.slug,
    localBook: localRoutes.has(record.catalogKey) ? {} : undefined,
  })),
  doors: ["foundations", "language", "laboratory", "atlas", "mathematics", "journeys"].map((id) => ({
    id, label: id[0].toUpperCase() + id.slice(1), description: `Explicit ${id} door.`,
  })),
  guidedBeginnings: [
    { id: "new-to-nexah", title: "New to NEXAH", href: "/library/visitors-guide/" },
    { id: "study-the-system", title: "Study the system", href: "/explore/foundations/" },
    { id: "explore-visually", title: "Explore visually", href: "/explore/atlas/" },
  ],
  registeredRequests: [{
    id: "orion.observation-calendar",
    utterance: interaction.request.utterance,
    acceptedPhrases: [interaction.request.utterance],
  }],
};

test("the Threshold exposes only the six deterministic response modes", () => {
  assert.deepEqual(thresholdModes, ["EXPLAIN", "FIND", "ORIENT", "ORION_AVAILABLE", "CLARIFY", "BOUNDARY"]);
});

test("EXPLAIN returns a reviewed local record with provenance", () => {
  const response = resolveThreshold("What is NEXAH?", dependencies);
  assert.equal(response.mode, "EXPLAIN");
  assert.equal(response.reviewStatus, "human-reviewed");
  assert.match(response.provenance, /^docs\//);
  assert.equal(response.actions.length, 3);
});

test("FIND uses explicit Publication Catalog titles and reports availability", () => {
  const response = resolveThreshold("What is Odyssey 2040?", dependencies);
  assert.equal(response.mode, "FIND");
  assert.ok(response.publications.length >= 1);
  assert.ok(response.publications.every((item) => item.title.toLowerCase().includes("odyssey 2040")));
  assert.ok(response.publications.every((item) => ["locally-readable", "catalog-record-only"].includes(item.availability)));
});

test("ORIENT resolves only an explicit Navigation Catalog door", () => {
  const response = resolveThreshold("Take me to the mathematical research.", dependencies);
  assert.equal(response.mode, "ORIENT");
  assert.equal(response.actions[0].href, "/explore/mathematics/");
});

test("ORION_AVAILABLE recognizes only the registered canonical utterance", () => {
  const response = resolveThreshold(interaction.request.utterance, dependencies);
  assert.equal(response.mode, "ORION_AVAILABLE");
  assert.equal(response.requestId, "orion.observation-calendar");
  assert.match(response.actions[0].href, /^\/orientation\/\?question=/);
  assert.equal(resolveThreshold("Please make an ORION route", dependencies).mode, "BOUNDARY");
});

test("CLARIFY offers one finite declared option set without interpretation", () => {
  const response = resolveThreshold("I feel lost.", dependencies);
  assert.equal(response.mode, "CLARIFY");
  assert.equal(response.actions.length, 3);
  assert.deepEqual(response.actions.map((action) => action.href), ["/explore/journeys/", "/explore/foundations/", "/explore/atlas/"]);
});

test("BOUNDARY rejects general world knowledge and returns explicit exits", () => {
  const response = resolveThreshold("Who won the football match?", dependencies);
  assert.equal(response.mode, "BOUNDARY");
  assert.equal(response.actions.length, 3);
});

test("Threshold implementation contains no model, provider or network dependency", async () => {
  const files = ["engine.mjs", "intents.mjs", "knowledge.mjs", "runtime.ts"];
  const source = (await Promise.all(files.map((file) => readFile(path.join(root, "src/threshold", file), "utf8")))).join("\n");
  assert.doesNotMatch(source, /\b(fetch|XMLHttpRequest|WebSocket|EventSource)\b/);
  assert.doesNotMatch(source, /\b(Ollama|OpenAI|embedding|vector database)\b/i);
  assert.doesNotMatch(source, /src\/orion|src\/lyra|src\/lucy/i);
});

test("all reviewed records and finite references resolve against existing registries", () => {
  assert.ok(approvedExplanations.every((record) => record.reviewStatus === "human-reviewed"));
  for (const record of approvedExplanations) {
    const response = resolveThreshold(record.acceptedPhrases[0], dependencies);
    assert.equal(response.mode, "EXPLAIN");
    assert.ok(response.actions.length >= 1);
  }
  for (const clarification of boundedClarifications) assert.ok(clarification.options.length <= 3);
});
