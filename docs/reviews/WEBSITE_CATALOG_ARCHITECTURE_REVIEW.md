# Website Catalog Architecture Review

Status: editorial architecture proposal; no catalog or runtime changes
Catalog snapshot reviewed: 2026-07-20, 61 Works, 1,647 ordered Blocks
Website: `nexah-experience`
Source of truth: NEXAH Publication Catalog

> The website is not a bookshelf. It is an orientation instrument. Every page
> should help a reader understand where they are, why it matters, and where
> they can go next.

## Decision summary

The website should become a read-only consumer of the Publication Catalog and
an implementation of the Catalog's Navigation domain. It must not reproduce
the Catalog as a second hand-maintained dataset.

The proposed areas — Foundations, Language, Laboratory, Atlas, Mathematics and
Journeys — are **editorial entry doors**, not canonical categories, series or
new catalog domains. A Work may appear through several doors. Its catalog key,
type, form, series, review state and authority remain unchanged.

The resulting responsibility split is:

| Layer | Question | Authority |
|---|---|---|
| Publication Catalog | What exists? | Source-supported publication records |
| Website navigation | Where might I begin? | Human editorial entry points and paths |
| Publication page | What is this Work and how can I enter it? | Catalog metadata, rendered by the Experience |
| Reader | Which recorded pages can I read here? | Local Reader manifest |
| Living Atlas | Which curated relationships already exist? | Existing explicit Atlas registries |
| ORION | What deterministic route and evidence exist? | Frozen ORION reports |
| Human | What matters, what it means and where to continue? | The visitor |

No homepage placement accepts a Concept, registers an Operator, validates a
claim, creates a series, or changes a publication identity.

## 1. Website Architecture Review

### Evidence reviewed

- `docs/architecture/CATALOG_ARCHITECTURE.md`
- `docs/research/CATALOG_DOMAIN_AUDIT.md`
- `docs/research/VISUAL_RESEARCH_PASS_PLAN.md`
- `LIBRARY/catalog/website_catalog.yaml`
- all 61 records in `LIBRARY/catalog/works/`
- `LIBRARY/catalog/catalog_overrides.yaml`
- Batch A report and review boundary
- current Experience information architecture, Library data, Atlas registries,
  Reader manifests, routes and navigation
- frozen ORION and LYRA boundaries consumed by the Experience

### Current strengths

- The question-led Home already behaves as an orientation entrance rather than
  a search page.
- Library, Reader, Living Atlas, Orientation and Departure have explicit and
  separate ownership.
- Seven real publications already have local presentation and complete Reader
  paths.
- The browser remains static; ORION integration is deterministic and build-time.
- The design language is calm and suitable for editorial navigation.

### Current mismatch

The public Library currently knows seven locally modeled books, while the
Publication Catalog records 61 Works. The website's categories are handwritten
and exclusive, so they cannot express the Catalog's overlapping shelves,
forms, series, review depth or source identity. The website therefore presents
a curated sample as if it were the Library rather than acknowledging it as a
small readable subset of a larger catalog.

### Target website model

```text
Publication Catalog (source of truth)
        ↓ build-time, read-only catalog projection
Website Catalog View (presentation-safe records)
        ↓
Editorial Entry Doors (Navigation authority)
        ↓
Landing Page → Publication Page → Reader or source
        ↓
Explicit continuation → Living Atlas / another door / departure
```

The Website Catalog View is a generated projection, not a new authority. It
may add presentation fields such as a route, local-cover availability or local
Reader availability, but may not overwrite source fields.

### Critical terminology boundary

The proposed **Atlas door** presents atlas publications. The existing **Living
Atlas** presents explicit editorial relationships. They are related but not
identical.

- Recommended publication-door route: `/explore/atlas/`
- Existing relationship route: `/atlas/`
- Recommended public label for the existing route when ambiguity matters:
  “Connections” or “Living Atlas”

The routes need not be renamed during the first migration. The interface must
make their different purposes clear.

### Search boundary

The complete Library may offer deterministic client-side lookup over explicit
catalog fields: title, source description, type, form, series and editorial
entry-door IDs. It must not claim semantic similarity, infer relationships,
rank by hidden relevance or turn search terms into evidence.

## 2. Proposed Homepage Structure

The Home remains an arrival room. It should not display 61 equal book cards.

### First viewport — Begin with a question

Keep the current bounded question entrance as the dominant action. Add one
quiet secondary path: “Explore the Library”. The question path and catalog path
remain independent; neither silently triggers the other.

### Second movement — Choose an editorial door

Present six spatial entry points, each answering a human need rather than
describing a database field:

| Door | Visitor question | Initial editorial promise |
|---|---|---|
| Foundations | What is NEXAH built on? | Enter the emerging foundation program without declaring a canonical series. |
| Language | How does NEXAH describe change and relation? | Learn the vocabulary, grammar and operations of orientation. |
| Laboratory | How is the work investigated and reviewed? | Enter reports, field atlases, whiteboards and bounded research. |
| Atlas | Which maps make the landscape visible? | Browse maps, visual systems and representational collections. |
| Mathematics | Where are formal and geometric structures explored? | Enter Geometria Nova, Mathematica and transition research with visible evidence boundaries. |
| Journeys | What does orientation feel like in lived experience? | Enter personal, narrative and reflective Works without semantic research extraction. |

Each door should show one sentence, one primary entry and at most two
alternative starting points. It is a threshold, not a shelf carousel.

### Third movement — A guided beginning

Offer three explicit routes:

1. **New to NEXAH** → The Visitor's Guide → Foundations or Journeys.
2. **I want to study the system** → Foundations → Laboratory → Atlas.
3. **I want to explore visually** → Atlas → Mathematics or Journeys.

These are human editorial paths and must be stored as Navigation records, not
derived from titles or visitor behavior.

### Final movement — Complete Library

End with a quiet route to all 61 catalog records. The complete Library is
available, but it does not compete with the curated beginnings above it.

## 3. Navigation Tree

```text
Home
├── Begin orientation
│   └── existing Question → ORION → Library/Atlas continuation
├── Explore
│   ├── Foundations
│   ├── Language
│   ├── Laboratory
│   ├── Atlas (publication door)
│   ├── Mathematics
│   └── Journeys
├── Library
│   ├── All publications
│   ├── Deterministic catalog lookup
│   └── Publication detail
│       ├── Read here, when a local Reader exists
│       ├── Open source, when only a source record exists
│       └── Continue through explicit editorial doors
├── Living Atlas / Connections
│   ├── Concepts
│   ├── Editorial operators
│   └── Themes
├── About
└── Departure
```

Recommended permanent navigation remains small:

```text
Home · Explore · Library · Living Atlas · About
```

“Begin” remains a bounded action rather than another content section.

## 4. Reader Journey

### Catalog-led journey

```text
Arrival
  ↓
Choose a door
  ↓
Understand why this door matters
  ↓
Choose one Work
  ↓
Publication page
  ├── Local Reader available → enter Reading Space
  └── No local Reader → inspect catalog record and open the recorded source
  ↓
Return with context preserved
  ↓
Continue through an explicit door, Living Atlas relationship, or departure
```

Every room must answer:

1. Where am I?
2. Why does this matter here?
3. What is the one primary next action?

### Orientation-led journey

The current Human → LYRA → ORION → LYRA path remains unchanged. An ORION
report may continue only to already declared editorial records. The Experience
must not infer a catalog recommendation from the question or report.

### Publication availability

Catalog inclusion and local readability are separate facts:

- `cataloged`: the Work exists in the Publication Catalog;
- `reader_available`: recorded local Reader pages exist;
- `source_available`: the source URL is available;
- `reviewed`: a separate review state, never implied by readability.

The interface must show these states honestly. It must not produce empty Reader
rooms for the 54 Works that are not yet locally imported.

## 5. Recommended Landing Pages

All six pages should use one reusable editorial layout while retaining
different content. Each page contains: orientation statement, “begin here”, a
small set of alternative entries, optional paths, and the route to all matching
Works.

### `/explore/foundations/`

Purpose: explain the current Orientation Foundation program. Lead with
ORIENTATION SCIENCE, then explicitly show Volumes II–IV. State that the four
Works are strongly implied as a program but are not an accepted canonical
series. ORIENTATION ATLAS may be shown as an adjacent entry, not silently
declared Volume I.

### `/explore/language/`

Purpose: move from language of change to relations, orientation and operations.
Lead with THE LANGUAGE BOOK I–III; provide THE LANGUAGE ATLAS as the visual
continuation and the Operator Works as an operational branch.

### `/explore/laboratory/`

Purpose: show how questions become bounded research and review. Lead with THE
CARTOGRAPHY LABORATORY. Distinguish ongoing research activity, published
reports, whiteboards, visual review and queued Batch A records. Publication
status never means validation.

### `/explore/atlas/`

Purpose: navigate map and representation publications. Lead with THE ATLAS OF
ATLASES or NEXAH ATLAS — A CARTOGRAPHY OF PERSPECTIVES. Subpaths may include
field atlases, language maps, human maps, XV Atlases and historical maps. This
page does not create Living Atlas relationships.

### `/explore/mathematics/`

Purpose: expose formal and geometric explorations with careful claim boundaries.
Lead with GEOMETRIA NOVA and the four Mathematica volumes. Describe them as
published visual research, not accepted mathematics or scientific proof.

### `/explore/journeys/`

Purpose: provide lived, personal and narrative entry. Lead with THE WONDER
OPERATOR or CLEAR MIND, then expose The Human Journey sequence and Inner Works.
Do not apply semantic research extraction without a human decision.

### `/library/`

Purpose: provide the complete Publication Catalog view. This is the only place
where all Works are intentionally peers. Filters and lookup expose recorded
metadata; editorial doors remain optional ways out.

## 6. Book Placement Review

The following placements are Navigation proposals. “Additional doors” are
deliberate multiple entry points, not duplicate Works or inferred relations.

| Catalog key | Publication | Primary door | Additional doors | Basis / note |
|---|---|---|---|---|
| `arena:5201262` | NEXAH XV ATLAS — Volume I: Observation, Flow & Transition | Atlas | Laboratory | Research atlas; XV Atlas and Research shelves. |
| `arena:5201307` | NEXAH XV ATLAS — Volume II: Structure, Operators & Observer Geometry | Atlas | Laboratory, Language | Research atlas; operator language is a secondary editorial path. |
| `arena:5203074` | NEXAH XV COMPLEXA — Cartographies of Transition | Atlas | Laboratory, Mathematics | Living/research atlas of transition geometry. |
| `arena:5203312` | NEXAH MATHEMATICA I — PRIME RESIDUE GEOMETRY | Mathematics | Atlas, Laboratory | Mathematica research atlas. |
| `arena:5203387` | NEXAH MATHEMATICA II — DRIFT FIELDS & RECURSIVE STRUCTURES | Mathematics | Atlas, Laboratory | Mathematica research atlas. |
| `arena:5203476` | NEXAH MATHEMATICA III — RECURSIVE OPERATORS & STRUCTURAL NAVIGATION | Mathematics | Atlas, Laboratory, Language | Formal research with an explicit operator vocabulary. |
| `arena:5203499` | NEXAH MATHEMATICA IV — Unified Transition Fields & Basin Architectures | Mathematics | Atlas, Laboratory | One of two same-titled source records; retain identity. |
| `arena:5203528` | NEXAH MATHEMATICA IV — Unified Transition Fields & Basin Architectures | Mathematics | Atlas, Laboratory | Separate catalog key; editorial duplicate/revision decision required. |
| `arena:5216699` | NEXAH — MAPS OF HUMAN REALITY | Atlas | Journeys | Visual atlas linking human reality and navigation. |
| `arena:5217666` | NEXAH ATLAS — THE OPERATIONAL GEOMETRY OF TRANSITION | Atlas | Mathematics, Laboratory | Research atlas; Transition Geometry shelf. |
| `arena:5218362` | NEXAH XV ATLAS — TWO SIDES OF ONE MEDAL | Atlas | Laboratory | XV Atlas and Research shelves. |
| `arena:5224059` | ODYSSEE 2040 — THE RETURN ATLAS | Journeys | Atlas | Cinematic field atlas in Odyssey 2040. |
| `arena:5228606` | MAP ATLAS — A Visual History of Human Orientation | Atlas | Foundations | Historical atlas and broad orientation entry. |
| `arena:5246392` | NEXAH XV ATLAS — RELATIONAL CARTOGRAPHY OF HUMAN REALITY | Atlas | Laboratory | Relational research atlas. |
| `arena:5246418` | LEONARDO TRANSLATIONS — THE ROOM THAT LOOKS BACK | Laboratory | Atlas | Research-structured visual essay; representational secondary path. |
| `arena:5250350` | THE ARCHITECTURE OF ORIENTATION — VOLUME IV | Foundations | Atlas | Batch A foundation Work; strongly implied program only. |
| `arena:5279287` | THE ESSENCE ATLAS | Journeys | Atlas | Odyssey 2040 visual atlas. |
| `arena:5293283` | The Architecture of Becoming | Journeys | Atlas | Human/emergence entry expressed as a visual atlas. |
| `arena:5305692` | NEXAH — DESIGNING ORIENTATION | Laboratory | Foundations | Design challenge and research guide; not Volume II. |
| `arena:5309625` | ORIENTATION THEORY — VOLUME III | Foundations | Language | Batch A foundation Work and theory book. |
| `arena:5344975` | NEXAH ATLAS — A CARTOGRAPHY OF PERSPECTIVES | Atlas | Foundations | Broad visual atlas; existing local Reader. |
| `arena:5345064` | VOLUME V — MANY MAPS. ONE WORLD. | Journeys | Atlas | Human Journey visual compendium. |
| `arena:5345076` | VOLUME IV — THREADS OF YOU | Journeys | — | Human Journey visual book. |
| `arena:5345108` | VOLUME III — CLEAR MIND | Journeys | — | Human Journey field guide. |
| `arena:5345129` | VOLUME II — PATHFINDERS | Journeys | — | Human Journey visual book. |
| `arena:5345145` | VOLUME I — BE KIND. BE AWEFULL. BELONG. | Journeys | — | Human Journey visual book. |
| `arena:5345336` | DESIGNING ORIENTATION — WHITEBOARD SERIES | Laboratory | Foundations | Whiteboard Series; Orientation shelf. |
| `arena:5345353` | NEXAH PATHFINDER — WHITEBOARD SERIES | Laboratory | Foundations, Journeys | Whiteboard research with a human navigation entry. |
| `arena:5345385` | THE DUAL SPINE — Prime Orientation — WHITEBOARD SERIES | Laboratory | Mathematics, Atlas | Research whiteboard on structure and transition. |
| `arena:5345606` | NEXAH ECOSYSTEM — Introducing the Codex | Atlas | Foundations | System map; public framing decision required. |
| `arena:5345722` | NEXAH LANDSCAPES — Maps for Orientation, Meaning & Navigation | Atlas | Foundations | Landscape atlas and broad orientation entry. |
| `arena:5345822` | ODYSSEY 2°4° — The Journey Through Worlds & Observers | Journeys | Atlas | Narrative atlas in Odyssey 2040. |
| `arena:5345838` | THE LANDINGS — WHITEBOARD SERIES | Laboratory | Journeys | Research whiteboards framed as successive landings. |
| `arena:5345856` | THE CATHEDRAL OF RESONANCE — WHITEBOARD SERIES | Laboratory | Mathematics | Research whiteboard; resonance is not treated as validated mathematics. |
| `arena:5347685` | ODYSSEY 2040 — MANY MAPS. ONE WORLD. | Journeys | Atlas | Human Journey visual book. |
| `arena:5369070` | BEYOND INFORMATION | Journeys | Foundations | Human Journey essay and accessible statement of the orientation problem. |
| `arena:5386751` | LOGARITHMIC UNIVERSE — FIVE MOVEMENTS OF REALITY | Mathematics | Atlas | Visual essay; exact public framing requires review. |
| `arena:5386766` | THE CARTOGRAPHY LABORATORY | Laboratory | Foundations | Laboratory report; existing local Reader. |
| `arena:5386781` | FIELD ATLAS III — MORPHOLOGY | Laboratory | Atlas | Field Atlas research publication. |
| `arena:5391199` | THE OPERATOR'S HANDBOOK | Language | Foundations | Operational vocabulary; existing local Reader. |
| `arena:5393574` | THE OPERATOR MAP | Language | Atlas | Operator field guide presented through mapping. |
| `arena:5397157` | THE INNER CHILD — A PERSPECTIVE | Journeys | — | Knowledge-structured visual essay with a personal entry. |
| `arena:5397188` | THE INNER WORLD | Journeys | Foundations | Human Journey field guide; Awareness shelf. |
| `arena:5404576` | FIELD ATLAS II — THE ARCHITECTURE OF AGENCY | Laboratory | Atlas | Field Atlas research publication. |
| `arena:5404597` | THE WONDER HANDBOOK — FOR HUMAN CHILDREN | Journeys | Language | Wonder and Operator shelves; dramaturgic review depth. |
| `arena:5404615` | THE VISITOR'S GUIDE | Library | Foundations | Explicit website/library entrance; existing local Reader. |
| `arena:5407292` | THE ATLAS OF ATLASES | Atlas | Library | Meta-atlas described as an entrance hall. |
| `arena:5413103` | LIBRARYBOOK | Library | Atlas, Language | Large compendium; public role requires editorial review. |
| `arena:5415690` | ORIENTATION DESIGN — VOLUME II | Foundations | Laboratory | Batch A foundation Work; separate from DESIGNING ORIENTATION. |
| `arena:5415716` | ORIENTATION ATLAS — VOLUME I | Foundations | Atlas | Explicit Orientation Architecture series, but not Batch A's inferred Volume I. |
| `arena:5415765` | FIELD ATLAS I — WATER | Laboratory | Atlas | Field Atlas research publication. |
| `arena:5416617` | ORIENTATION SCIENCE | Foundations | Laboratory | Prospectus and Batch A foundation Work; not declared Volume I. |
| `arena:5421517` | THE LANGUAGE BOOK | Language | — | Language Series textbook; existing local Reader. |
| `arena:5426953` | THE LANGUAGE BOOK II | Language | — | Language Series textbook. |
| `arena:5426957` | THE LANGUAGE BOOK III | Language | — | Language Series textbook. |
| `arena:5426966` | THE LANGUAGE ATLAS | Language | Atlas | Language atlas and visual continuation. |
| `arena:5442532` | THE LIVING EQUATION — An Atlas of Orientation | Atlas | Mathematics | Orientation atlas with mathematical language; framing review needed. |
| `arena:5442697` | THE OPERATOR LIBRARY | Language | Library | Reference guide and Operator entry. |
| `arena:5442721` | THE OPERATOR | Language | Foundations | Operator Series foundation book. |
| `arena:5442781` | GEOMETRIA NOVA | Mathematics | Foundations | Foundation book and mathematical entry. |
| `arena:5450904` | THE WONDER OPERATOR | Journeys | Language | Wonder/Operator Work; existing local Reader. |

All 61 Works remain accessible through the complete Library regardless of
entry-door placement.

## 7. Books Requiring Human Editorial Decision

These questions must be resolved by editorial authority before public labels
or paths are frozen:

1. **The two Mathematica IV records** — determine edition, duplicate or
   parallel-publication presentation. Never merge their catalog identities
   automatically.
2. **Orientation foundation program** — approve public wording for the four
   Batch A Works. Do not call ORIENTATION SCIENCE Volume I without a decision.
3. **ORIENTATION ATLAS — VOLUME I** — decide whether it is adjacent to, part of,
   or separate from the Batch A foundation program.
4. **NEXAH — DESIGNING ORIENTATION vs ORIENTATION DESIGN — VOLUME II** — retain
   both; approve distinct public descriptions to prevent confusion.
5. **LIBRARYBOOK** — decide whether it is a public start, archive-like
   compendium or specialist Work.
6. **NEXAH ECOSYSTEM — Introducing the Codex** — decide how much internal
   system vocabulary belongs in the first public experience.
7. **LOGARITHMIC UNIVERSE** — decide whether Mathematics or Atlas is the safer
   primary public door.
8. **THE LIVING EQUATION** — decide whether mathematical language is thematic
   or a formal claim before emphasizing Mathematics.
9. **Leonardo Translations** — decide whether visitors should encounter it as
   Laboratory research or an Atlas/visual essay first.
10. **Journey Works with atlas form** — approve whether Odyssey atlases begin
    in Journeys or Atlas on the homepage while retaining both paths.
11. **The Visitor's Guide** — confirm it as the default “New to NEXAH” route.
12. **Public search fields** — approve which source-description text is safe
    and useful for deterministic lookup.

## 8. Migration Plan

### M0 — Baseline and ownership

- Record the exact Catalog snapshot and checksum consumed by the Experience.
- Keep all NEXAH Catalog files read-only.
- Approve the six door definitions as Navigation records, not classifications.

### M1 — Build-time Catalog projection

- Add a deterministic generator in the Experience that reads an explicitly
  supplied Catalog root at build time.
- Emit a versioned, presentation-safe generated artifact containing catalog
  keys, display metadata, source URL, cover reference, review depth and source
  fingerprint.
- Validate unique catalog keys, required source fields and record count.
- Store no machine-specific absolute path in committed output.
- Fail visibly when the Catalog is missing or incompatible; never fall back to
  a divergent handwritten 61-Work list.

### M2 — Compatibility mapping

- Map the seven current local books to their `arena:*` catalog keys.
- Preserve current slugs and Reader routes as presentation aliases.
- Add explicit `reader_available` and local-cover fields in the generated
  Experience projection.
- Keep Reader manifests authoritative for page order and local assets.

### M3 — Complete Library

- Render all 61 publication records from the generated projection.
- Add deterministic lookup and explicit filters only.
- Give every Work a stable publication page even when no local Reader exists.
- Use source links rather than empty or simulated local reading experiences.

### M4 — Editorial doors

- Encode the reviewed placement table as explicit Navigation data owned by the
  Experience/editorial layer.
- Build the six landing pages from one reusable layout.
- Add validation that every referenced catalog key exists and every Work
  remains reachable through the complete Library.

### M5 — Home and navigation

- Preserve the bounded question as the main action.
- Introduce Explore as the route to the six doors.
- Reduce homepage publication cards to deliberate starting points.
- Distinguish the Atlas publication door from the Living Atlas.

### M6 — Journey and release review

- Verify location, purpose and continuation on every new page.
- Verify source, catalog, editorial and ORION boundaries.
- Test desktop, mobile, keyboard, reduced motion and no-JavaScript reading.
- Review all public copy for claims that exceed catalog evidence.

## 9. Compatibility with the Current Website

| Current surface | Decision | Migration effect |
|---|---|---|
| Home | KEEP and REFOCUS | Bounded question remains primary; editorial doors become the secondary discovery movement. |
| Orientation | KEEP | Frozen LYRA/ORION path remains independent and unchanged. |
| Library | EXPAND | Seven handwritten records become compatibility-enhanced views of a 61-Work generated catalog. |
| Publication pages | KEEP and GENERALIZE | Existing seven retain rich local detail; other records use catalog-supported detail. |
| Reader | KEEP | Only Works with recorded local pages enter it. No simulated Reader. |
| Living Atlas | KEEP SEPARATE | Explicit relationship authority remains unchanged; not replaced by the Atlas publication door. |
| About | UPDATE COPY LATER | Explain Catalog/Website distinction without exposing repository internals. |
| Departure | KEEP | Leaving remains an allowed continuation. |
| Existing categories | POSTPONE/REPLACE AS NAVIGATION | Preserve until entry doors are validated; do not map them silently to canonical categories. |
| Existing local covers/pages | KEEP | Reuse as Experience assets with catalog-key compatibility mapping. |
| ORION build integration | KEEP EXACTLY | No Catalog logic enters ORION, LYRA or the Transformation Engine. |

The migration is additive until the generated Catalog view and editorial doors
pass validation. Existing routes should remain valid throughout.

## 10. Implementation Roadmap

### Phase A — Data boundary

Deliver a catalog adapter specification, generated artifact schema, provenance
record and validation tests. No page redesign yet.

Success: the Experience can prove which Catalog snapshot produced its public
publication records.

### Phase B — Complete catalog surface

Build all-publications and generic publication-detail rendering. Preserve the
seven enhanced local publications and Readers.

Success: all 61 source identities are reachable without inventing content.

### Phase C — Navigation layer

Implement the six editorial doors, explicit placement records and landing-page
template.

Success: a person can choose where to begin without scanning 61 covers.

### Phase D — Home integration

Introduce the doors beneath the existing question entrance, simplify competing
actions and update the permanent navigation.

Success: Home offers one question or one deliberate way into the landscape.

### Phase E — Cross-room refinement

Connect publication, Reader, Living Atlas and departure using only explicit
records. Review language, responsive behavior and accessibility.

Success: every room answers where the visitor is, why it matters and where
they may go next.

### Phase F — Editorial freeze

Resolve the human decisions above, record accepted Navigation placements and
freeze the first public website-catalog baseline.

Success: future Catalog growth requires data and editorial updates, not a new
website architecture.

## Acceptance criteria for the redesign

- The Publication Catalog is the only source of publication identity and
  source-supported metadata.
- The website owns presentation and explicit editorial navigation only.
- All 61 Works are reachable; none is forced into an exclusive category.
- The six homepage areas are clearly labeled as editorial doors.
- No Work becomes canonical, validated or related merely through placement.
- Reader availability is never confused with catalog inclusion.
- Atlas publications remain distinct from Living Atlas relationships.
- ORION, LYRA, Registry, Kernel, Operators, Batch A, Review Layer and Are.na
  remain unchanged.
- Every page communicates location, significance and an explicit continuation.
