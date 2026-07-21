import type { LibraryCategoryId } from "./categories";

export type PublicationStatus = "Existing publication";

export type LibraryBook = {
  catalogKey: string;
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  coverAlt: string;
  description: string;
  overview: readonly string[];
  status: PublicationStatus;
  category: LibraryCategoryId;
  chapters: readonly string[];
  edition: string;
};

export const books = [
  {
    catalogKey: "arena:5404615",
    slug: "visitors-guide",
    title: "The Visitor’s Guide",
    subtitle: "How to Navigate the NEXAH Library",
    cover: "/images/library/visitors-guide.jpg",
    coverAlt: "Cover of NEXAH The Visitor’s Guide showing a traveler entering a divided doorway.",
    description: "An entry point into the NEXAH Library and its rooms, paths and ways of exploring.",
    overview: [
      "The Visitor’s Guide begins with why NEXAH exists and what orientation means.",
      "It then introduces the Library as a place to walk through deliberately: through language, perspectives, practice, journeys and origins.",
    ],
    status: "Existing publication",
    category: "orientation",
    chapters: [
      "Why does NEXAH exist?",
      "What is orientation?",
      "How to use this Library",
      "How to experience this Library",
      "Room 01 — Core",
      "Room 02 — Language",
      "The Gallery of Perspectives",
      "Practice",
      "Journey and Origins",
    ],
    edition: "NEXAH Library edition",
  },
  {
    catalogKey: "arena:5421517",
    slug: "language-book",
    title: "The NEXAH Language Book",
    subtitle: "Read to See — Learning the Language of Change",
    cover: "/images/library/language-book.jpg",
    coverAlt: "White and gold cover of The NEXAH Language Book with a compass and sound field.",
    description: "A visual language book for reading change, context, relation and composition.",
    overview: [
      "The Language Book treats language as a way to notice change rather than merely name objects.",
      "Its lessons move from an alphabet through nouns, verbs, context and composition toward fluent reading of the world.",
    ],
    status: "Existing publication",
    category: "language",
    chapters: [
      "Part I — Learning the Language",
      "The Alphabet",
      "Nouns",
      "Verbs",
      "Adjectives",
      "Articles, Pronouns and Prepositions",
      "Context and Cases",
      "Part II — Seven Lessons",
      "Operator Chains and Composition",
      "Part III — Becoming Fluent",
      "Reading the World",
      "Glossary and Afterword",
    ],
    edition: "Read to See edition",
  },
  {
    catalogKey: "arena:5450904",
    slug: "wonder-operator",
    title: "The Wonder Operator",
    subtitle: "Scenes from the Living Field",
    cover: "/images/library/wonder-operator.jpg",
    coverAlt: "Dark gold cover of The Wonder Operator showing a child overlooking a vast landscape.",
    description: "A journey through orientation, attention and awe, told through scenes from the living field.",
    overview: [
      "The Wonder Operator follows attention through systems, loops, play, regulation, culture, art, love and belonging.",
      "It does not present wonder as an answer. It returns wonder to its role as an opening through which a person can see again.",
    ],
    status: "Existing publication",
    category: "field-research",
    chapters: [
      "Before Words",
      "The Natural Operator",
      "The Divided Mind",
      "The Economy of Attention",
      "The 404 Loop",
      "Anxiety and Regulation",
      "The Village",
      "The Loss of Play",
      "Remembering",
      "The Art of Expression",
      "Love",
      "Belonging",
    ],
    edition: "Odyssee 204° edition",
  },
  {
    catalogKey: "arena:5391199",
    slug: "operators-handbook",
    title: "The Operator’s Handbook",
    subtitle: "How Orientation Emerges",
    cover: "/images/library/operators-handbook.jpg",
    coverAlt: "Black cover of The Operator’s Handbook showing a traveler approaching a split monolith.",
    description: "A visual companion for seeing operations, contrasts and recurring transformations.",
    overview: [
      "The handbook organizes orientation around operations rather than fixed objects.",
      "Each operation is approached as a repeatable way of seeing: arrive, contrast, project, connect and observe.",
    ],
    status: "Existing publication",
    category: "operator-library",
    chapters: [
      "Arrival",
      "Fold",
      "Shear",
      "Stretch",
      "Projection",
      "Triangle → Pyramid",
      "Grid",
      "Mirror",
      "Observer",
      "Landscape",
      "The Seven Bridges",
      "The Whole",
    ],
    edition: "Operator Library edition",
  },
  {
    catalogKey: "arena:5305692",
    slug: "orientation-design",
    title: "NEXAH Orientation Design",
    subtitle: "A Research Guide",
    cover: "/images/library/orientation-design.jpg",
    coverAlt: "White, blue and gold cover of NEXAH Orientation Design — A Research Guide.",
    description: "A practical introduction to the research and practice of orientation design.",
    overview: [
      "The guide frames orientation as a phenomenon that can be studied, represented and improved.",
      "It sets out research questions, methods, outputs, applications and principles for work across complex systems.",
    ],
    status: "Existing publication",
    category: "architecture",
    chapters: [
      "The NEXAH Research Program",
      "Research Outputs",
      "Research Methods",
      "Applications",
      "Research Principles",
      "Research Questions",
      "Visual Language",
      "The NEXAH Library",
      "Repository",
      "Contributing",
      "The Future",
    ],
    edition: "Visual Research Series — Volume II",
  },
  {
    catalogKey: "arena:5386766",
    slug: "cartography-laboratory",
    title: "The Cartography Laboratory",
    subtitle: "NEXAH Laboratory Reports — Report I",
    cover: "/images/library/cartography-laboratory.jpg",
    coverAlt: "Night-sky cover of The Cartography Laboratory showing an observer between two telescopes.",
    description: "A visitor’s guide to the NEXAH repository, its research wings and experimental facilities.",
    overview: [
      "Report I maps the Cartography Laboratory as an active research environment.",
      "It separates repository orientation, research, validation, experimentation, visual work and future directions into inspectable rooms.",
    ],
    status: "Existing publication",
    category: "field-research",
    chapters: [
      "Welcome to the Laboratory",
      "The Cartography Perspective",
      "Repository Overview",
      "Navigation Guide",
      "Architecture Wing",
      "Research Wing",
      "Validation Laboratory",
      "The Demonstrator",
      "Visual Laboratory",
      "Applications Laboratory",
      "Core Discoveries",
      "Current Status",
      "Future Directions",
    ],
    edition: "Laboratory Reports — Report I",
  },
  {
    catalogKey: "arena:5344975",
    slug: "cartography-perspectives",
    title: "NEXAH Atlas",
    subtitle: "A Cartography of Perspectives",
    cover: "/images/library/cartography-perspectives.jpg",
    coverAlt: "Dark mosaic cover of NEXAH Atlas — A Cartography of Perspectives.",
    description: "A visual cartography that gathers multiple lenses on structure, flow, coherence and transformation.",
    overview: [
      "The Atlas places many maps beside one another without declaring any single view complete.",
      "Its recurring movement is to observe, question, map, connect, understand, navigate, transform and evolve.",
    ],
    status: "Existing publication",
    category: "visual-atlas",
    chapters: [
      "A Lens, Not a Final Theory",
      "One Topology — Many Scales",
      "The Story of Ether and the Fields",
      "The In-Between",
      "The Geometry of Possibilities",
      "The Universe as a Transport Network",
      "The NEXAH Scale Map",
      "The Tube Hypothesis",
      "The Universal Breather",
      "An Open Question",
    ],
    edition: "NEXAH Atlas edition",
  },
] as const satisfies readonly LibraryBook[];

export const bookBySlug: ReadonlyMap<string, LibraryBook> = new Map(
  books.map((book) => [book.slug, book]),
);

export const featuredBooks = books.slice(0, 4);
