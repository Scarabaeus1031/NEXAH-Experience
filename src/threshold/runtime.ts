import { orientationAdapter } from "@/adapters/orientation-adapter";
import { publications } from "@/data/catalog";
import { editorialDoors, guidedBeginnings } from "@/data/navigation";
import { resolveThreshold } from "./engine.mjs";
import { boundedClarifications, explicitThresholdIntents } from "./intents.mjs";
import { approvedExplanations } from "./knowledge.mjs";

const dependencies = Object.freeze({
  knowledge: approvedExplanations,
  intents: explicitThresholdIntents,
  clarifications: boundedClarifications,
  publications,
  doors: editorialDoors,
  guidedBeginnings,
  registeredRequests: Object.freeze([
    {
      id: "orion.observation-calendar",
      utterance: orientationAdapter.request.utterance,
      acceptedPhrases: Object.freeze([orientationAdapter.request.utterance]),
    },
  ]),
});

export function resolveOrientationThreshold(question: string) {
  return resolveThreshold(question, dependencies);
}

export const orientationThresholdRegistry = dependencies;
