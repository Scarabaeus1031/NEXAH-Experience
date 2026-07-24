export type LibraryCategory = {
  id: string;
  label: string;
  description: string;
};

export const categories = [
  {
    id: "orientation",
    label: "Orientation",
    description: "Introductions and guides for entering the NEXAH Orientation Ecosystem.",
  },
  {
    id: "language",
    label: "Language",
    description: "Works about reading change, relation and meaning.",
  },
  {
    id: "architecture",
    label: "Architecture",
    description: "Structures, methods and frameworks for designing orientation.",
  },
  {
    id: "field-research",
    label: "Field Research",
    description: "Reports and observations from the living research field.",
  },
  {
    id: "visual-atlas",
    label: "Visual Atlas",
    description: "Cartographies that place several perspectives beside one another.",
  },
  {
    id: "operator-library",
    label: "Operator Library",
    description: "Companions for noticing transformations without forcing conclusions.",
  },
] as const satisfies readonly LibraryCategory[];

export type LibraryCategoryId = (typeof categories)[number]["id"];

export const categoryById = new Map(categories.map((category) => [category.id, category]));
