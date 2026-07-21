import type { VisualCollection } from "./types";

export const visualCollections = [
  { id: "library-rooms", title: "Library Rooms", summary: "Arrival, thresholds and rooms from The Visitor’s Guide.", cover: "/images/library/visitors-guide.jpg" },
  { id: "language-plates", title: "Language Plates", summary: "Alphabet, grammar, context and composition plates.", cover: "/images/library/language-book.jpg" },
  { id: "living-field-scenes", title: "Scenes from the Living Field", summary: "Narrative scenes of attention, wonder, play and belonging.", cover: "/images/library/wonder-operator.jpg" },
  { id: "operation-plates", title: "Operation Plates", summary: "Visual studies of fold, projection, mirror, observer and landscape.", cover: "/images/library/operators-handbook.jpg" },
  { id: "research-plates", title: "Orientation Design Plates", summary: "Research questions, methods, outputs and applications.", cover: "/images/library/orientation-design.jpg" },
  { id: "laboratory-maps", title: "Laboratory Maps", summary: "Repository rooms, research wings and experimental facilities.", cover: "/images/library/cartography-laboratory.jpg" },
  { id: "atlas-mosaics", title: "Cartography of Perspectives", summary: "Multiple lenses arranged as a visual atlas.", cover: "/images/library/cartography-perspectives.jpg" },
] as const satisfies readonly VisualCollection[];

export const visualById: ReadonlyMap<string, VisualCollection> = new Map(visualCollections.map((visual) => [visual.id, visual]));
