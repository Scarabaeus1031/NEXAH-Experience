import type { AtlasTheme } from "./types";

export const themes = [
  { id: "beginning", title: "Beginning", summary: "Ways of entering a field without needing the whole map.", description: "Works concerned with arrival, first questions and deliberate entry points." },
  { id: "cartography", title: "Cartography", summary: "Maps, landmarks and paths that make relationships navigable.", description: "Editorial work that arranges existing relations into bounded views." },
  { id: "change", title: "Change", summary: "Difference across states, contexts and forms.", description: "Works that attend to becoming without erasing what remains." },
  { id: "language", title: "Language", summary: "Structures for reading and communicating relation and meaning.", description: "Works that make distinctions shareable across people and representations." },
  { id: "attention", title: "Attention", summary: "What is selected, sustained and allowed to become visible.", description: "Works that examine attention as a human condition of observation." },
  { id: "wonder", title: "Wonder", summary: "Curiosity, openness and the capacity to remain with a question.", description: "Works that preserve possibility without presenting possibility as proof." },
  { id: "operators", title: "Operators", summary: "Named gestures that reveal changes and relations.", description: "Editorial companions for seeing operations across different contexts." },
  { id: "transformation", title: "Transformation", summary: "Movement from one form or perspective into another.", description: "Works focused on transitions, preservation and information change." },
  { id: "research", title: "Research", summary: "Methods, questions and records from the NEXAH research field.", description: "Works that expose how investigations are framed, documented and bounded." },
  { id: "representation", title: "Representation", summary: "The forms through which a field is made visible.", description: "Works that place multiple views beside one another without collapsing their differences." },
  { id: "perspective", title: "Perspective", summary: "The possibilities and limits of a bounded point of view.", description: "Works that ask what each lens reveals and what it leaves outside the frame." },
  { id: "field", title: "Living Field", summary: "The observed world as a changing landscape of relations.", description: "Reports and scenes that keep orientation connected to lived contexts." },
] as const satisfies readonly AtlasTheme[];

export type ThemeId = (typeof themes)[number]["id"];
export const themeById: ReadonlyMap<string, AtlasTheme> = new Map(themes.map((theme) => [theme.id, theme]));
