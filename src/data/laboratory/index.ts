import { publicationByCatalogKey, type WebsitePublication } from "../catalog";

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
