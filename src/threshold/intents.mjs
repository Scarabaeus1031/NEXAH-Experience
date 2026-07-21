export const explicitThresholdIntents = Object.freeze([
  {
    id: "intent.find.odyssey-2040",
    mode: "FIND",
    acceptedPhrases: ["what is odyssey 2040", "find odyssey 2040", "show me odyssey 2040"],
    catalogQuery: "odyssey 2040",
    continuationDoorId: "journeys",
  },
  {
    id: "intent.orient.language",
    mode: "ORIENT",
    acceptedPhrases: ["show me the language books", "which books explain the language of orientation", "take me to language"],
    doorId: "language",
  },
  {
    id: "intent.orient.mathematics",
    mode: "ORIENT",
    acceptedPhrases: ["show me the mathematical research", "take me to the mathematical research", "take me to mathematics"],
    doorId: "mathematics",
  },
  {
    id: "intent.orient.journeys",
    mode: "ORIENT",
    acceptedPhrases: ["i would rather begin with a journey", "begin with a journey", "take me to journeys"],
    doorId: "journeys",
  },
  {
    id: "intent.clarify.lost",
    mode: "CLARIFY",
    acceptedPhrases: ["i feel lost", "help me find a way in"],
    clarificationId: "clarify.entry-medium",
  },
  {
    id: "intent.clarify.orientation",
    mode: "CLARIFY",
    acceptedPhrases: ["show me orientation"],
    clarificationId: "clarify.orientation",
  },
]);

export const boundedClarifications = Object.freeze([
  {
    id: "clarify.entry-medium",
    title: "Choose the kind of entrance that feels useful.",
    explanation: "No personal meaning has been inferred. Select one declared editorial door, revise the question or leave.",
    options: [
      { label: "Begin through experience", kind: "door", id: "journeys" },
      { label: "Begin through ideas", kind: "door", id: "foundations" },
      { label: "Begin through maps", kind: "door", id: "atlas" },
    ],
  },
  {
    id: "clarify.orientation",
    title: "Which recorded meaning of Orientation do you want?",
    explanation: "The phrase maps to a finite set of existing entrances. Choose one without creating a new interpretation.",
    options: [
      { label: "Orientation as the NEXAH field", kind: "explanation", id: "explain.orientation" },
      { label: "Orientation publications", kind: "door", id: "foundations" },
      { label: "The registered ORION route", kind: "registered-request", id: "orion.observation-calendar" },
    ],
  },
]);
