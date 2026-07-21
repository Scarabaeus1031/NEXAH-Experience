# Navigation Catalog

## Purpose

The Experience is the first public implementation of the NEXAH Navigation
Catalog. It consumes the Publication Catalog and answers a different question:

```text
Publication Catalog → What exists?
Navigation Catalog  → Where should I begin?
Experience          → What can I do next?
```

The website is a read-only consumer. It does not own publication identity,
source metadata, canonical status, Concepts, Operators, evidence or review.

## Build-time projection

`src/data/generated/publication-catalog.json` is a deterministic projection of
the 61 source-keyed Work records in `LIBRARY/catalog/`. It preserves catalog
keys, source URLs, catalog metadata, cover references and source status.

The projection can be reproduced from an authorized local NEXAH checkout:

```sh
NEXAH_CATALOG_PATH=/path/to/LIBRARY/catalog npm run generate:catalog
```

The source path is never stored in the generated artifact. Normal website
rendering reads the checked-in projection and never writes to NEXAH or Are.na.

## Editorial doors

The six public doors are Navigation records:

- Foundations
- Language
- Laboratory
- Atlas
- Mathematics
- Journeys

They are not categories, canonical series or exclusive classifications. Their
definitions and explicit catalog-key placements live in
`src/data/navigation/doors.ts`. A Work may appear through several doors without
changing its identity.

Each door presents three deliberate starting points. Remaining Works stay
available behind a voluntary “see all” disclosure so orientation comes before
inventory.

## Routes

```text
Home
├── bounded Orientation question
├── Explore
│   └── /explore/{door}/
├── guided beginnings
└── complete Library

Library
├── /library/                  complete Catalog view
├── /library/{slug}/           publication orientation
└── /library/{slug}/read/      only when locally imported

Living Atlas
└── /atlas/                    explicit curated relationships
```

The Atlas publication door is `/explore/atlas/`. It does not replace or merge
with the Living Atlas at `/atlas/`.

## Publication pages

Every publication page answers:

1. What is this?
2. Why is it presented through these editorial doors?
3. Can it be read locally?
4. Where may the visitor continue?

Seven existing publications retain enhanced local metadata, relationships and
complete Reading Spaces. The remaining catalog records provide source-backed
metadata and an external source link. They never fabricate Reader pages.

## Search boundary

The complete Library includes deterministic client-side filtering over visible
catalog fields. It performs substring matching only. There is no semantic
search, similarity, hidden relevance score, recommendation, inference or
network request.

## Validation

Repository tests verify:

- exactly 61 unique Catalog records;
- exactly six editorial doors;
- one explicit placement record for every Catalog key;
- seven and only seven local Reading Spaces;
- separation of the Atlas door and Living Atlas;
- absence of ORION, LYRA and Transformation Engine dependencies in catalog
  presentation;
- static generation of every route.

## Authority boundary

The website may select, order, excerpt and present. It may never accept a
Concept, register an Operator, validate a publication assertion, create a
scientific relationship, change provenance, or alter an ORION report.

The Human owns interpretation and continuation.
