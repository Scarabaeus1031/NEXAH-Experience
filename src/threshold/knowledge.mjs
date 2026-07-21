export const thresholdKnowledgeSchemaVersion = "1.0";

export const approvedExplanations = Object.freeze([
  {
    id: "explain.nexah",
    acceptedPhrases: ["what is nexah", "explain nexah", "tell me about nexah"],
    title: "NEXAH is an orientation space.",
    explanation:
      "NEXAH is a research and publication project for making complex fields more legible through explicit representations, paths and boundaries. It does not replace human interpretation or present its publications as validated evidence.",
    continuations: [
      { kind: "guided", id: "new-to-nexah" },
      { kind: "door", id: "foundations" },
      { kind: "route", href: "/library/", label: "Explore the complete Library" },
    ],
    provenance: "docs/INFORMATION_ARCHITECTURE.md",
    reviewStatus: "human-reviewed",
  },
  {
    id: "explain.orientation",
    acceptedPhrases: ["what is orientation", "what does orientation mean", "what does orientation mean here"],
    title: "Orientation makes a field navigable.",
    explanation:
      "In NEXAH, Orientation means seeing what is present, which representations and paths exist, where their boundaries lie and what remains unknown. It offers direction without transferring interpretation or choice away from the human.",
    continuations: [
      { kind: "door", id: "foundations" },
      { kind: "door", id: "language" },
      { kind: "guided", id: "new-to-nexah" },
    ],
    provenance: "docs/ORIENTATION_INTERFACE.md",
    reviewStatus: "human-reviewed",
  },
  {
    id: "explain.library",
    acceptedPhrases: ["what is the library", "explain the library", "how does the library work"],
    title: "The Library is the editorial reading space.",
    explanation:
      "The Library presents recorded NEXAH publications and their source-supported metadata. Some works are readable locally; others remain catalog records with a source link. A matching publication is not automatically evidence for a claim.",
    continuations: [
      { kind: "route", href: "/library/", label: "Open the complete Library" },
      { kind: "guided", id: "new-to-nexah" },
    ],
    provenance: "docs/EDITORIAL_LIBRARY.md",
    reviewStatus: "human-reviewed",
  },
  {
    id: "explain.explore",
    acceptedPhrases: ["what is explore", "explain explore", "how can i explore"],
    title: "Explore offers six explicit ways to begin.",
    explanation:
      "Explore presents six overlapping editorial doors. They are curated entrances, not canonical categories, inferred recommendations or exclusive classifications.",
    continuations: [{ kind: "route", href: "/explore/", label: "See all six doors" }],
    provenance: "docs/NAVIGATION_CATALOG.md",
    reviewStatus: "human-reviewed",
  },
  {
    id: "explain.living-atlas",
    acceptedPhrases: ["what is the living atlas", "explain the living atlas"],
    title: "The Living Atlas reveals explicit relationships.",
    explanation:
      "The Living Atlas connects publications, concepts, operators and themes through curated registry records. It does not infer similarity, create new relationships or perform reasoning.",
    continuations: [{ kind: "route", href: "/atlas/", label: "Enter the Living Atlas" }],
    provenance: "docs/LIVING_ATLAS.md",
    reviewStatus: "human-reviewed",
  },
  {
    id: "explain.orion",
    acceptedPhrases: ["what is orion", "explain orion"],
    title: "ORION is the deterministic navigation architecture.",
    explanation:
      "ORION plans only registered transformations, preserves provenance and reports evidence and blockers. This threshold cannot create a request or report; it can only recognize an already registered request and offer the existing confirmation flow.",
    continuations: [{ kind: "route", href: "/orientation/", label: "See the existing orientation boundary" }],
    provenance: "docs/EXPERIENCE_BUILD_INTEGRATION.md",
    reviewStatus: "human-reviewed",
  },
  {
    id: "explain.laboratory",
    acceptedPhrases: ["what is the laboratory", "explain the laboratory"],
    title: "The Laboratory is the editorial workbench.",
    explanation:
      "The Laboratory gathers bounded research, field atlases, reports and working surfaces. It makes investigation visible while keeping publication, review and validation distinct.",
    continuations: [{ kind: "door", id: "laboratory" }],
    provenance: "docs/NAVIGATION_CATALOG.md",
    reviewStatus: "human-reviewed",
  },
  {
    id: "explain.begin",
    acceptedPhrases: ["where should i begin", "how should i begin", "i am new to nexah"],
    title: "Begin with one bounded entrance.",
    explanation:
      "A new visitor can start with the Visitor's Guide, study the foundations or enter through a visual atlas. No path is mandatory, and leaving remains a valid choice.",
    continuations: [
      { kind: "guided", id: "new-to-nexah" },
      { kind: "guided", id: "study-the-system" },
      { kind: "guided", id: "explore-visually" },
    ],
    provenance: "docs/NAVIGATION_CATALOG.md",
    reviewStatus: "human-reviewed",
  },
]);
