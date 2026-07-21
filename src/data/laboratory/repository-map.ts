export type RepositoryTerritory = {
  id: string;
  label: string;
  path: string;
  description: string;
  answers: string;
};

const repositoryUrl = "https://github.com/Scarabaeus1031/NEXAH";
const branch = "main";

export const repositoryGuide = Object.freeze({
  repositoryUrl,
  readme: Object.freeze({
    label: "Project README",
    path: "README.md",
    description: "The primary overview of NEXAH, its six responsibilities, current state and reader entry points.",
    url: `${repositoryUrl}/blob/${branch}/README.md`,
  }),
  map: Object.freeze({
    label: "Repository Map",
    path: "REPOSITORY_MAP.md",
    description: "The authoritative directory-level guide for choosing a responsible subsystem and following its local entry point.",
    url: `${repositoryUrl}/blob/${branch}/REPOSITORY_MAP.md`,
  }),
  sourceNote: "Curated from the Project README and Repository Map; updated when the Experience is rebuilt.",
});

export const repositoryTerritories: readonly RepositoryTerritory[] = Object.freeze([
  {
    id: "research",
    label: "Research",
    path: "RESEARCH/README.md",
    description: "Hypotheses, experiments, bounded evidence and findings.",
    answers: "Where is active research?",
  },
  {
    id: "orientation-language",
    label: "Orientation Language",
    path: "ORIENTATION_LANGUAGE/README.md",
    description: "Published semantics, declarations and conformance rules.",
    answers: "Where are canonical semantics defined?",
  },
  {
    id: "implementation",
    label: "Implementation",
    path: "nexah/README.md",
    description: "The maintained Python implementation and its declared limits.",
    answers: "Where is the software implemented?",
  },
  {
    id: "applications",
    label: "Applications",
    path: "APPLICATIONS/README.md",
    description: "Domain studies and validation within explicit claim boundaries.",
    answers: "Where is NEXAH applied?",
  },
  {
    id: "library",
    label: "Living Library",
    path: "LIBRARY/README.md",
    description: "Works, editorial identity, editions and reader journeys.",
    answers: "Where are publications organized?",
  },
  {
    id: "editorial-system",
    label: "Editorial Operating System",
    path: "EDITORIAL_OPERATING_SYSTEM/README.md",
    description: "Human review, editorial governance and controlled execution.",
    answers: "How is editorial work governed?",
  },
  {
    id: "architecture",
    label: "Architecture",
    path: "ARCHITECTURE/README.md",
    description: "System relationships, boundaries, methods and implementation state.",
    answers: "Where is the project structure explained?",
  },
  {
    id: "experimental",
    label: "Experimental",
    path: "EXPERIMENTAL/README.md",
    description: "Active labs, prototypes and historical systems with provisional status.",
    answers: "Where does unfinished exploration live?",
  },
]);

export function repositoryDocumentUrl(path: string): string {
  return `${repositoryUrl}/blob/${branch}/${path}`;
}
