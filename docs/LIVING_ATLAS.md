# Living Atlas

## Purpose

The Living Atlas is the editorial relationship layer of the NEXAH Experience.
The Library owns publications. The Atlas makes declared relationships between
those publications, concepts, operators, themes and visual collections
navigable.

The Atlas reveals a landscape. It does not generate one.

## Editorial relationship model

Every Atlas entity has a stable registry identifier. Every connection is a
versioned source record in `src/data/atlas/relations.ts`.

```text
book:language-book
  ── book-concept ──> concept:language

concept:language
  ── concept-operator ──> operator:connect

operator:connect
  ── operator-theme ──> theme:language
```

There is no title matching, tag matching, semantic similarity or repository
crawling. Reverse navigation is a view of the same registered edge, not a new
relationship.

The integrity check rejects:

- duplicate relation identifiers;
- duplicate directed edges;
- missing registry entries;
- self-relations;
- relations with an invalid source or target kind;
- non-visual entities with no declared relationship.

## Registry ownership

Independent registries own their own metadata:

| Registry | Owns | Does not own |
|---|---|---|
| Publications | title, subtitle, edition, cover, contents | Atlas relationships |
| Concepts | definition, summary, guiding question | publication content |
| Editorial operators | name, gesture, editorial description | executable ORION operators |
| Themes | title, summary, editorial field | evidence classification |
| Visual collections | title, summary, representative cover | rendering or generation |
| Relations | explicit source and target identifiers | inference |

The term **editorial operator** is deliberate. These entries describe movements
through the public Atlas. They are not entries in ORION's executable Operator
Registry and cannot execute transformations.

## Static architecture

```text
src/data/atlas/
├── concepts.ts
├── operators.ts
├── themes.ts
├── visuals.ts
├── relations.ts
├── validation.ts
├── types.ts
└── index.ts

src/pages/atlas/
├── concepts/[slug].astro
├── operators/[slug].astro
└── themes/[slug].astro
```

The build generates one static page per registry entry. Navigation uses normal
links. No graph database, API, client-side search or runtime service exists.

## Authority boundaries

The Atlas is editorial.

It may:

- register a relationship after editorial review;
- describe concepts and recurring themes;
- arrange paths through existing publications;
- show where visual collections were explicitly assigned.

It may not:

- infer a relationship;
- create evidence;
- upgrade uncertainty;
- interpret a TransformationReport;
- execute an operator;
- select an ORION route;
- modify Library publications.

## Relationship to ORION

ORION remains unchanged and independent. The Atlas imports no ORION or LYRA
runtime code.

A future ORION report may carry an Atlas identifier as a provider-neutral
reference. That future transport must preserve the distinction between an
ORION source reference and an editorial Atlas relationship. Referencing an
Atlas entry never makes that entry evidence.

## Relationship to the Library

The Library continues to own each publication. Book pages may present Atlas
relationships by resolving their explicit `book:*` edges. This is a view into
the Atlas registry, not a transfer of publication ownership.

Related-publication paths moved from book metadata into the Relations Registry
in Sprint 04. Themes likewise belong to the Atlas registry. This prevents
relationship strings from being duplicated across publications.

## Growth model

To extend the Atlas:

1. add metadata to the appropriate registry;
2. add explicit relation records with stable identifiers;
3. run the repository verification;
4. review the resulting static pages editorially.

No component, route shape or storage architecture needs to change when new
entries and relations are added.
