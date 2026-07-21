import { bookBySlug, books } from "@/data/library/books";
import { conceptById, concepts } from "./concepts";
import { operatorById, operators } from "./operators";
import { relations } from "./relations";
import { themeById, themes } from "./themes";
import type { AtlasEntity, AtlasEntityKind, AtlasRef } from "./types";
import { assertAtlasIntegrity } from "./validation";
import { visualById, visualCollections } from "./visuals";

export * from "./concepts";
export * from "./operators";
export * from "./relations";
export * from "./themes";
export * from "./types";
export * from "./visuals";

assertAtlasIntegrity();

export function getAtlasEntity(ref: AtlasRef): AtlasEntity | undefined {
  const separator = ref.indexOf(":");
  const kind = ref.slice(0, separator) as AtlasEntityKind;
  const id = ref.slice(separator + 1);

  if (kind === "book") {
    const book = bookBySlug.get(id);
    return book && { ref, kind, id, title: book.title, summary: book.description, href: `/library/${id}/`, cover: book.cover };
  }
  if (kind === "concept") {
    const concept = conceptById.get(id);
    return concept && { ref, kind, id, title: concept.title, summary: concept.summary, href: `/atlas/concepts/${id}/` };
  }
  if (kind === "operator") {
    const operator = operatorById.get(id);
    return operator && { ref, kind, id, title: operator.title, summary: operator.summary, href: `/atlas/operators/${id}/` };
  }
  if (kind === "theme") {
    const theme = themeById.get(id);
    return theme && { ref, kind, id, title: theme.title, summary: theme.summary, href: `/atlas/themes/${id}/` };
  }
  const visual = visualById.get(id);
  return visual && { ref, kind, id, title: visual.title, summary: visual.summary, cover: visual.cover };
}

export function getRelationsFor(ref: AtlasRef) {
  return relations.filter((relation) => relation.from === ref || relation.to === ref);
}

export function getConnectedEntities(ref: AtlasRef, kind?: AtlasEntityKind): AtlasEntity[] {
  const entities = getRelationsFor(ref)
    .map((relation) => getAtlasEntity(relation.from === ref ? relation.to : relation.from))
    .filter((entity): entity is AtlasEntity => Boolean(entity))
    .filter((entity) => !kind || entity.kind === kind);

  return [...new Map(entities.map((entity) => [entity.ref, entity])).values()];
}

export const atlasCounts = {
  books: books.length,
  concepts: concepts.length,
  operators: operators.length,
  themes: themes.length,
  visuals: visualCollections.length,
  relations: relations.length,
} as const;
