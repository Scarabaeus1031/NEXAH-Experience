export type Question = {
  slug: string;
  question: string;
  realm: string;
  visual: "leaf" | "river" | "sound" | "ruins" | "cosmos";
  relatedWorks: number;
};

export const questions: Question[] = [
  {
    slug: "observation-calendar",
    question: "How does observation reach the calendar?",
    realm: "Orientation",
    visual: "cosmos",
    relatedWorks: 4,
  },
  {
    slug: "rivers-meander",
    question: "Why do rivers meander?",
    realm: "Earth",
    visual: "river",
    relatedWorks: 5,
  },
  {
    slug: "music-move",
    question: "Why does music move us?",
    realm: "Mind",
    visual: "sound",
    relatedWorks: 6,
  },
  {
    slug: "civilizations-collapse",
    question: "Why do civilizations collapse?",
    realm: "Society",
    visual: "ruins",
    relatedWorks: 5,
  },
  {
    slug: "consciousness",
    question: "What is consciousness?",
    realm: "Cosmos",
    visual: "cosmos",
    relatedWorks: 6,
  },
];

export const atlasPaths = [
  {
    number: "01",
    title: "Ask a question",
    note: "Open an orientation with something that matters to you.",
    href: "/orientation/",
    symbol: "?",
  },
  {
    number: "02",
    title: "Explore questions",
    note: "Begin with a question that opens more than one perspective.",
    href: "/library/#questions",
    symbol: "✦",
  },
  {
    number: "03",
    title: "Enter a publication",
    note: "Continue through an existing book, atlas or field report.",
    href: "/library/#publications",
    symbol: "→",
  },
  {
    number: "04",
    title: "Browse Library rooms",
    note: "Enter through an editorial category or recurring concern.",
    href: "/library/#categories",
    symbol: "○",
  },
  {
    number: "05",
    title: "Inspect the method",
    note: "See how NEXAH separates orientation, evidence and choice.",
    href: "/about/#method",
    symbol: "⌖",
  },
  {
    number: "06",
    title: "Read the principles",
    note: "Understand the boundaries that protect the explorer.",
    href: "/about/#principles",
    symbol: "◇",
  },
];
