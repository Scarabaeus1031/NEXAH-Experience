import { books } from "@/data/library/books";
import { concepts } from "./concepts";
import { operators } from "./operators";
import { relations } from "./relations";
import { themes } from "./themes";
import type { AtlasEntityKind, AtlasRef, RelationKind } from "./types";
import { visualCollections } from "./visuals";

const expectedKinds: Record<RelationKind, readonly [AtlasEntityKind, AtlasEntityKind]> = {
  "book-concept": ["book", "concept"],
  "book-operator": ["book", "operator"],
  "book-theme": ["book", "theme"],
  "book-visual": ["book", "visual"],
  "related-publication": ["book", "book"],
  "concept-operator": ["concept", "operator"],
  "operator-theme": ["operator", "theme"],
  "related-concept": ["concept", "concept"],
  "concept-visual": ["concept", "visual"],
  "operator-visual": ["operator", "visual"],
  "theme-visual": ["theme", "visual"],
};

const refKind = (ref: AtlasRef): AtlasEntityKind => ref.split(":", 1)[0] as AtlasEntityKind;

export function assertAtlasIntegrity(): void {
  const refs = new Set<AtlasRef>([
    ...books.map((book) => `book:${book.slug}` as const),
    ...concepts.map((concept) => `concept:${concept.id}` as const),
    ...operators.map((operator) => `operator:${operator.id}` as const),
    ...themes.map((theme) => `theme:${theme.id}` as const),
    ...visualCollections.map((visual) => `visual:${visual.id}` as const),
  ]);
  const relationIds = new Set<string>();
  const edges = new Set<string>();

  for (const relation of relations) {
    if (relationIds.has(relation.id)) throw new Error(`Duplicate Atlas relation ID: ${relation.id}`);
    relationIds.add(relation.id);

    if (!refs.has(relation.from) || !refs.has(relation.to)) {
      throw new Error(`Unknown Atlas relation endpoint: ${relation.id}`);
    }
    if (relation.from === relation.to) throw new Error(`Self-referential Atlas relation: ${relation.id}`);

    const [fromKind, toKind] = expectedKinds[relation.kind];
    if (refKind(relation.from) !== fromKind || refKind(relation.to) !== toKind) {
      throw new Error(`Invalid Atlas relation direction: ${relation.id}`);
    }

    const edgeKey = `${relation.kind}:${relation.from}:${relation.to}`;
    if (edges.has(edgeKey)) throw new Error(`Duplicate Atlas relation edge: ${relation.id}`);
    edges.add(edgeKey);
  }

  for (const ref of refs) {
    if (refKind(ref) === "visual") continue;
    if (!relations.some((relation) => relation.from === ref || relation.to === ref)) {
      throw new Error(`Atlas entity has no explicit relationship: ${ref}`);
    }
  }
}
