# Editorial Library

## Purpose

The NEXAH Library is the complete public view of the read-only Publication
Catalog. It keeps recorded books, atlases, guides, reports and other Works
available for human exploration.

The Library helps a person continue after an orientation. It does not produce
an orientation and does not inherit ORION authority.

## Experience presentation authority

The Experience Library room owns:

- presentation and route compatibility;
- deterministic lookup over explicit catalog fields;
- local cover derivatives for enhanced publications;
- local descriptions, overviews and contents for imported Reading Spaces;
- the order and visual hierarchy in which Works are presented.

This authority is editorial. It does not include validation, evidence grading,
provenance transformation or deterministic navigation.

The canonical NEXAH Library Registry owns Work identity, Edition state and
accepted publication metadata. Its wider Publication Catalog provides the
source-supported projection for all 61 Works. Seven Sprint 03 entries remain
enhanced local Experience presentations with complete local Reader flows built
from curated page selections. Those selections do not claim to reproduce every
recorded source page. Placeholder books are not part of either data set.

## Relationship to ORION

The Library exists beside ORION.

ORION owns deterministic navigation, TransformationReports, evidence summaries,
validation and provenance. The Library neither reads nor modifies those
structures. No Library component imports ORION or LYRA, and the Library build
does not execute them.

Library language must never imply that a publication validates an ORION claim.
Editorial proximity is not evidence.

## Relationship to the Experience

The Experience owns presentation. It renders the derived Catalog projection as
a calm, complete Library and preserves richer pages for locally imported Works.
The projection remains subordinate to its canonical Library source.

Content is kept separate from presentation:

```text
src/data/library/
├── books.ts
├── categories.ts
└── index.ts

src/data/generated/publication-catalog.json
src/data/catalog.ts
src/data/navigation/doors.ts

src/components/library/
├── BookCard.astro
└── EditorialMetadata.astro

src/layouts/BookLayout.astro
src/pages/library.astro
src/pages/library/[slug].astro
```

Cover derivatives live in `public/images/library/`. They are local Experience
assets derived from the existing publication covers; the original source
collection remains outside this repository.

## Publication model

Each generated Catalog publication records:

- its source-keyed Catalog identity;
- source title, description and URL;
- type, form, series and catalog depth;
- cover reference and source dimensions;
- publication, revision, maturity and classification states;
- ordered source-page count.

Each of the seven enhanced local publications additionally records:

- a stable slug;
- title and subtitle;
- cover and accessible cover description;
- short description and overview;
- publication status and edition;
- selected contents;

Legacy categories remain local presentation metadata for the seven enhanced
Works. They are not mapped onto the six Navigation Catalog doors. Door
placements are explicit, overlapping catalog-key references. Themes, concepts,
operators, visual-collection assignments and related-publication paths remain
owned by the Living Atlas relations registry introduced in Sprint 04.

## Future relationship to evidence

Evidence integration is intentionally absent.

A future Experience may display an explicit source reference from an ORION
report beside a matching Library publication. Such a relationship must be
declared through an inspectable identifier or citation. It may never be inferred
from similar titles, shared themes, category membership or editorial wording.

Until that boundary exists, Library publications and ORION evidence remain
separate views with separate authority.
