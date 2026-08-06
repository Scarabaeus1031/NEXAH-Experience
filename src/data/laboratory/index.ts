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
