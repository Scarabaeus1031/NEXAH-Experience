import readerSources from "./reader-sources.json";
import readerDimensions from "./reader-dimensions.json";

export type ReaderPage = {
  id: string;
  sequence: number;
  chapter: string;
  title: string;
  src: string;
  sourceFile: string;
  width: number;
  height: number;
};

export type ReaderPublication = {
  bookSlug: string;
  pages: readonly ReaderPage[];
  chapters: readonly { title: string; firstPageId: string }[];
};

type SourcePublication = {
  sourceFolder: string;
  pages: Array<{ chapter: string; title: string; sourceFile: string }>;
};

type PageDimension = readonly [width: number, height: number];

const sourceEntries = Object.entries(readerSources as Record<string, SourcePublication>);

export const readerPublications: readonly ReaderPublication[] = sourceEntries.map(([bookSlug, source]) => {
  const dimensions = (readerDimensions as unknown as Record<string, PageDimension[]>)[bookSlug];
  if (!dimensions || dimensions.length !== source.pages.length) {
    throw new Error(`Reader dimensions do not match recorded pages for ${bookSlug}`);
  }
  const pages = source.pages.map((page, index) => {
    const [width, height] = dimensions[index];
    return {
      id: String(index + 1).padStart(2, "0"),
      sequence: index + 1,
      chapter: page.chapter,
      title: page.title,
      src: `/images/reader/${bookSlug}/${String(index + 1).padStart(2, "0")}.webp`,
      sourceFile: page.sourceFile,
      width,
      height,
    };
  });
  const chapters = pages.map((page) => ({ title: page.chapter, firstPageId: page.id }));
  return Object.freeze({ bookSlug, pages: Object.freeze(pages), chapters: Object.freeze(chapters) });
});

export const readerByBookSlug: ReadonlyMap<string, ReaderPublication> = new Map(
  readerPublications.map((publication) => [publication.bookSlug, publication]),
);
