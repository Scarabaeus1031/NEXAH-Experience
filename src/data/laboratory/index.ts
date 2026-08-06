import { publicationByCatalogKey, type WebsitePublication } from "../catalog";
import { readerByBookSlug } from "../reader";
import { repositoryDocumentUrl } from "./repository-map";

export * from "./repository-map";

const laboratoryPublicationKeys = [
  "arena:5386766",
  "arena:5305692",
  "arena:5344975",
] as const;

function resolvePublication(catalogKey: string): WebsitePublication {
  const publication = publicationByCatalogKey.get(catalogKey);
  if (!publication) throw new Error(`Laboratory publication does not resolve: ${catalogKey}`);
  return publication;
}

export const laboratoryPublications: readonly WebsitePublication[] = Object.freeze(
  laboratoryPublicationKeys.map(resolvePublication),
);

export const featuredLaboratoryPublication = laboratoryPublications[0];

const scienceLabRepositoryUrl = "https://github.com/Scarabaeus1031/NEXAH-Science-Lab";

export const scientificBaselines = Object.freeze([
  Object.freeze({
    id: "nexah-science-lab-rc1",
    title: "NEXAH Science Lab — RC1",
    description: "First public scientific baseline",
    date: "07 August 2026",
    version: "v1.0.0-rc1",
    commit: "635dbe6d677170cd855db7e82b522565fac7ebca",
    repository: "Scarabaeus1031/NEXAH-Science-Lab",
    visual: Object.freeze({
      src: "/images/laboratory/nexah-science-lab-rc1.png",
      alt: "NEXAH Science Lab RC1 documentation marker",
      width: 1254,
      height: 1254,
    }),
    boundary: Object.freeze([
      "A versioned scientific baseline.",
      "It documents the framework, its constitutional foundation, and the research environment.",
      "It is not a proof of a theory, does not promote evidence, and does not automatically elevate scientific claims.",
    ]),
    links: Object.freeze({
      repository: scienceLabRepositoryUrl,
      tag: `${scienceLabRepositoryUrl}/tree/v1.0.0-rc1`,
      readme: `${scienceLabRepositoryUrl}/blob/v1.0.0-rc1/README.md`,
      constitution: `${scienceLabRepositoryUrl}/blob/v1.0.0-rc1/NEXAH_CONSTITUTION/SCIENTIFIC_CONSTITUTION.md`,
      commit: `${scienceLabRepositoryUrl}/commit/635dbe6d677170cd855db7e82b522565fac7ebca`,
    }),
  }),
]);

const laboratoryPublicationAccess = [
  {
    role: "Research Foundation",
    catalogKey: "arena:5305692",
    description: "Methods, questions, applications and principles for Orientation Design.",
  },
  {
    role: "Experiment / Laboratory Record",
    catalogKey: "arena:5386766",
    description: "A recorded tour through research wings, validation, experimental facilities and current boundaries.",
  },
  {
    role: "Visual Research / Explicit Boundary",
    catalogKey: "arena:5344975",
    description: "Many cartographic perspectives presented as lenses rather than a final theory.",
  },
] as const;

export const laboratoryAccessPoints = Object.freeze([
  ...laboratoryPublicationAccess.map((entry) => {
    const publication = resolvePublication(entry.catalogKey);
    return Object.freeze({
      role: entry.role,
      title: publication.localBook?.title ?? publication.title,
      description: entry.description,
      href: `/library/${publication.routeSlug}/`,
      readerHref: publication.localBook && readerByBookSlug.has(publication.routeSlug)
        ? `/library/${publication.routeSlug}/read/`
        : null,
      external: false,
    });
  }),
  Object.freeze({
    role: "Language / Specification",
    title: "Orientation Language",
    description: "Published semantics, declarations and conformance rules in the authoritative Repository.",
    href: repositoryDocumentUrl("ORIENTATION_LANGUAGE/README.md"),
    readerHref: null,
    external: true,
  }),
  Object.freeze({
    role: "Evidence / Provenance",
    title: "Research",
    description: "Hypotheses, experiments, bounded evidence and findings in the living research record.",
    href: repositoryDocumentUrl("RESEARCH/README.md"),
    readerHref: null,
    external: true,
  }),
]);
