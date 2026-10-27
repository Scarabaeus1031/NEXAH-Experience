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

<a id="field-geometry-balance-return"></a>

## Field Geometry of Balance — A0 and NSN return

Date: 2026-10-19. Status: local source-bound concept bridge; not a new public
Library record, Reader import, scientific result or deployment.

The local source collection contains 17 original plates under
`THE FIELD GEOMETRY BALANCE`. The checked Experience snapshot still has 61
catalog records and seven curated Readers; it has no exact title match for
this book. This return preserves that missing-admission boundary rather than
borrowing the identity of Geometria Nova or another existing publication.

The plates explain one connected reading:

Relation → Potential → Rotation/Torsion → G (Geometry/Grotte) → H (Habitable
Interior) → Transport → Persistence → Topology → Navigation.

Leo and Lilith name active/outward and receptive/inward perspectives in the
source vocabulary. J names a junction; repeated L forms are captioned as
line/direction and surface/form. G and H distinguish the formed boundary from
the interior it enables. This is a visual-conceptual explanation, not an
executed derivation or a universal physical law. Source equations and hermetic
text remain artwork content.

The A0 bridge places the source plates beside the existing Joint wheel and
Grey/Pink window. It explicitly does not identify Leo/Lilith with numeric A/B,
Janus with Bench-J, L with ILAU Lost or Roman 50, or book G/H with Grey Heart.
The 111/1111 seam mapping remains open. These distinctions explain how several
views can be related without silently merging their objects.

Local workspace return path (cross-repository links; not public website URLs):

- [Read the three plates, all-17 index and typed crosswalk](../../../30%20SCIENCE%20LAB/NEXAH-Science-Lab/RESEARCH_PROGRAM_B_MATHEMATICAL_FOUNDATIONS/AXIOM0_QMODE_ORIENTATION_TO_MEASUREMENT_FOUNDATION_PACKAGE_2026-10-01/A0_BOOK/A0_NUMBERMAGICK_GRID_RESEARCH.html#field-geometry-book).
- [A0 Science Desk return](../../../30%20SCIENCE%20LAB/NEXAH-Science-Lab/RESEARCH_PROGRAM_B_MATHEMATICAL_FOUNDATIONS/AXIOM0_QMODE_ORIENTATION_TO_MEASUREMENT_FOUNDATION_PACKAGE_2026-10-01/A0_BOOK/A0_RESEARCH_DESK.html#field-geometry-book-return-20261019).
- [NSN: existing A0 evidence-lineage lens](../../../30%20SCIENCE%20LAB/NEXAH-Science-Lab/SCIENCE_LAB/NAVIGATION/APP/index.html#a0-orientation-evidence).
- [Native source and catalog-check receipt](../../../30%20SCIENCE%20LAB/NEXAH-Science-Lab/RESEARCH_PROGRAM_B_MATHEMATICAL_FOUNDATIONS/AXIOM0_QMODE_ORIENTATION_TO_MEASUREMENT_FOUNDATION_PACKAGE_2026-10-01/A0_BOOK/results/a0-field-geometry-book-source-return-2026-10-19.json).

Reuse: MOD:NUMBER_VIEW_SUITE. No new canonical ID or graph relation. Experience
owns this explanatory return; A0 owns its local instrument boundaries; the
source book retains its content authority. No catalog/Reader data, public
routes, production deployment or publication status changed.
