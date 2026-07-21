# The Reading Space

## Purpose

Sprint 07 turns recorded NEXAH publications into places that can be read. A
publication is still discovered and described by the Library, but opening it
now leads into a calm sequence of visual pages rather than ending at metadata.

```text
Library → Book → Reader → Atlas → Continue
```

The Reader is a presentation boundary. It neither creates a publication nor
changes the meaning, status or relationships of one.

## Ownership

The Reader owns:

- visual page flow and previous/next movement;
- chapter navigation;
- the transient, non-persistent reading-progress indicator;
- full-size image viewing;
- keyboard movement between recorded pages;
- calm entrance, return and continuation paths.

The Reader does not own:

- titles, descriptions, editions, categories or other publication metadata;
- concepts, editorial operators, themes or relationships in the Living Atlas;
- ORION reports, LYRA translation, evidence or provenance;
- accounts, bookmarks, persistent progress or recommendation logic.

Publication metadata remains authoritative in `src/data/library/`. Atlas
metadata and edges remain authoritative in `src/data/atlas/`. The Reader only
displays those existing records at the appropriate moment.

## Recorded source material

The first Reading Space contains seven existing publications and 79 recorded
visual pages. `src/data/reader-sources.json` is the deterministic import
manifest. It records, for every page:

- the Library publication identifier;
- its chapter and visible page title;
- the source publication folder;
- the original source filename;
- deterministic page order.

No publication prose is generated for the Reader. The checked-in WebP files are
optimized derivatives of the recorded source plates. Their stable public paths
are derived from the publication slug and two-digit page number.

To reproduce the derivatives from an authorized local source collection:

```sh
NEXAH_PUBLICATIONS_PATH=/path/to/publication-folders npm run import:reader
```

The environment variable is required so that no machine-specific absolute path
is stored in the repository. The import requires `cwebp`; it strips source
metadata and never runs as part of the normal build.

## Reading behavior

Each publication has a quiet entrance with its existing cover, subtitle,
selected-page count and table of contents for that selection. The Experience
states the selection count beside the source-recorded page count so that the
local Reading Space cannot be mistaken for the complete original publication.
Inside the Reader:

- the current book and chapter remain visible;
- previous and next movements follow the manifest order;
- Left and Right Arrow keys mirror those explicit movements;
- persistent controls beside the spread make previous and next movement visible;
- a separate enlarge control opens the same local image in a native dialog;
- the enlarged view preserves the same previous and next movement;
- every image uses its recorded source dimensions so portrait and landscape
  pages retain their original proportions;
- progress describes only the current page position and is never saved.

The final selected page reveals the publication's explicitly registered Atlas
concepts, editorial operators and themes. It does not calculate similarity or
create a new edge. A visitor may enter the Living Atlas, open the original
publication, return to the local publication page, or return to the Library.

## Authority boundary

The Library says what the publication is. The Reader determines how its
recorded pages are traversed. The Living Atlas says which curated relationships
exist. ORION remains entirely outside this path.

There is no runtime, API, CMS, search, semantic recommendation, account,
persistent reading history or inferred relationship in Sprint 07.
