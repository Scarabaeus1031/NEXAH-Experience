export type AtlasEntityKind = "book" | "concept" | "operator" | "theme" | "visual";
export type AtlasRef = `${AtlasEntityKind}:${string}`;

export type Concept = {
  id: string;
  title: string;
  summary: string;
  description: string;
  guidingQuestion: string;
};

export type EditorialOperator = {
  id: string;
  title: string;
  summary: string;
  description: string;
  gesture: string;
};

export type AtlasTheme = {
  id: string;
  title: string;
  summary: string;
  description: string;
};

export type VisualCollection = {
  id: string;
  title: string;
  summary: string;
  cover: string;
};

export type RelationKind =
  | "book-concept"
  | "book-operator"
  | "book-theme"
  | "book-visual"
  | "related-publication"
  | "concept-operator"
  | "operator-theme"
  | "related-concept"
  | "concept-visual"
  | "operator-visual"
  | "theme-visual";

export type AtlasRelation = {
  id: string;
  kind: RelationKind;
  from: AtlasRef;
  to: AtlasRef;
};

export type AtlasEntity = {
  ref: AtlasRef;
  kind: AtlasEntityKind;
  id: string;
  title: string;
  summary: string;
  href?: string;
  cover?: string;
};

export const atlasRef = (kind: AtlasEntityKind, id: string): AtlasRef => `${kind}:${id}`;
