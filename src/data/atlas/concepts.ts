import type { Concept } from "./types";

export const concepts = [
  {
    id: "orientation",
    title: "Orientation",
    summary: "Finding position, direction and a possible next step without surrendering human choice.",
    description: "Orientation makes a field legible enough to navigate. It does not decide on behalf of the observer.",
    guidingQuestion: "Where am I, and what becomes possible from here?",
  },
  {
    id: "observation",
    title: "Observation",
    summary: "Attending to what is present before naming, explaining or concluding.",
    description: "Observation holds the source open long enough for structure, limits and differences to become visible.",
    guidingQuestion: "What is here before I decide what it means?",
  },
  {
    id: "wonder",
    title: "Wonder",
    summary: "An opening of attention that allows another perspective to become possible.",
    description: "Wonder is treated as a human capacity for staying with a question, not as evidence or explanation.",
    guidingQuestion: "What becomes visible when certainty loosens?",
  },
  {
    id: "transition",
    title: "Transition",
    summary: "The passage in which one state, view or representation becomes another.",
    description: "A transition directs attention to what changes, what remains and what may be lost between views.",
    guidingQuestion: "What remains the same while the representation changes?",
  },
  {
    id: "reflection",
    title: "Reflection",
    summary: "A human pause for considering what an orientation changes in one’s own perspective.",
    description: "Reflection belongs to the Human. In the Atlas it is an editorial theme of inquiry, never a deterministic decision.",
    guidingQuestion: "What does this orientation change for me?",
  },
  {
    id: "language",
    title: "Language",
    summary: "A shared structure for noticing and communicating relations, change and meaning.",
    description: "Language makes distinctions portable. It can reveal a pattern without making the pattern authoritative.",
    guidingQuestion: "Which distinctions help this field become readable?",
  },
  {
    id: "perspective",
    title: "Perspective",
    summary: "A bounded view that reveals some information while leaving other information outside the frame.",
    description: "The Atlas treats perspectives as partial and useful. No single view is promoted into the whole territory.",
    guidingQuestion: "What does this view reveal, and what does it hide?",
  },
  {
    id: "cartography",
    title: "Cartography",
    summary: "The editorial practice of arranging landmarks, relationships and paths into navigable maps.",
    description: "Cartography makes a landscape explorable. It records relationships without claiming to discover them automatically.",
    guidingQuestion: "Which landmarks and paths make this landscape navigable?",
  },
  {
    id: "representation",
    title: "Representation",
    summary: "A particular form through which an orientation object or field becomes visible.",
    description: "Representations preserve selected aspects and hide others. Their value depends on declared purpose and boundaries.",
    guidingQuestion: "Why is this view useful here?",
  },
] as const satisfies readonly Concept[];

export type ConceptId = (typeof concepts)[number]["id"];
export const conceptById: ReadonlyMap<string, Concept> = new Map(concepts.map((concept) => [concept.id, concept]));
