import rawProjection from "./generated/publication-catalog.json";
import { books, type LibraryBook } from "./library";
import { getDoorIdsForPublication, type EditorialDoorId } from "./navigation";

export type CatalogRecord = {
  catalogKey: string;
  title: string;
  slug: string;
  registeredEntityId: string | null;
  type: string;
  form: string;
  series: string | null;
  catalogDepth: string;
  description: string;
  sourceUrl: string;
  cover: { src: string; width: number; height: number; alt: string | null };
  shelves: readonly string[];
  publicationStatus: string;
  revisionState: string;
  contentMaturity: string;
  classificationState: string;
  blockCount: number;
};

type CatalogProjection = {
  schemaVersion: string;
  projectionType: "read_only_publication_catalog";
  source: { schemaVersion: string; generatedAt: string; status: string; works: number };
  records: CatalogRecord[];
};

export type WebsitePublication = CatalogRecord & {
  routeSlug: string;
  localBook?: LibraryBook;
  doorIds: readonly EditorialDoorId[];
};

export const publicationCatalog = rawProjection as unknown as CatalogProjection;
const localBookByCatalogKey: ReadonlyMap<string, LibraryBook> = new Map(
  books.map((book) => [book.catalogKey, book]),
);

export const publications: readonly WebsitePublication[] = Object.freeze(
  publicationCatalog.records.map((record) => {
    const localBook = localBookByCatalogKey.get(record.catalogKey);
    return Object.freeze({
      ...record,
      routeSlug: localBook?.slug ?? record.slug,
      localBook,
      doorIds: getDoorIdsForPublication(record.catalogKey),
    });
  }),
);

export const publicationByCatalogKey: ReadonlyMap<string, WebsitePublication> = new Map(
  publications.map((publication) => [publication.catalogKey, publication]),
);

export const publicationByRouteSlug: ReadonlyMap<string, WebsitePublication> = new Map(
  publications.map((publication) => [publication.routeSlug, publication]),
);

export function getPublicationsForDoor(doorId: EditorialDoorId): readonly WebsitePublication[] {
  return publications.filter((publication) => publication.doorIds.includes(doorId));
}

export function getPublicationExcerpt(publication: WebsitePublication, length = 210): string {
  const text = publication.localBook?.description ?? publication.description;
  if (text.length <= length) return text;
  const shortened = text.slice(0, length).replace(/\s+\S*$/, "").trim();
  return `${shortened}…`;
}
