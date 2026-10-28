# NEXAH.de Public Content Map

Date: `2026-10-28`
Status: `WORKING INVENTORY / M-PUB01 / NO PUBLICATION AUTHORITY`
Implementation master: `NEXAH-Experience`
Owner review frame: `A0 Owner Control Plane`

## Purpose

This map establishes one public information architecture for `nexah.de`
without deleting, renaming or silently publishing existing HTMLs. It records
where the current Experience routes and the allowlisted A0 Science export
belong before the homepage and navigation are simplified.

The map creates no new Navigator identity, Study, Library record, scientific
claim or release state. Source authority remains with the named source; this
repository owns only the public implementation and presentation.

## Current-state finding

- `NEXAH-Experience` contains `31` Astro page sources and a generated Library
  projection containing `61` publication records.
- the A0 Book currently contains `75` root-level HTML files;
- the verified A0 public-export receipt allowlists `13` HTML pages or
  applications plus their declared assets;
- all other A0 HTMLs remain source/internal objects unless a later receipt
  explicitly admits them;
- `src/pages/forschen/index.astro` is the development-shell route, while
  `scripts/compose-a0-public` replaces the built `/forschen/` page with the
  verified `A0_SCIENCE.html` export. A raw Astro development server and the
  composed A0 candidate can therefore show different pages at the same route.

That last distinction explains part of the recent staging ambiguity. The A0
Owner frame must review the composed candidate, not an uncomposed development
server presented as if it were the same artifact.

## Target public navigation

The persistent public header should expose the four visitor routes and one
complete index:

1. `Orientieren`
2. `Forschen`
3. `Lesen & erkunden`
4. `Anwenden & erleben`
5. `Navigation +`

`Human`, `Science` and `Builder` remain methodological functions and source
perspectives. NEXAHEDRON and Scarabæus remain distinct outward houses. They
belong inside the relevant route pages and full index rather than replacing
the four visitor routes in the primary header.

## Route map

### 1 · Orientieren

| Public route or source | Role | Decision |
|---|---|---|
| `/` | concise public definition, mission, boundary and four-route entrance | `KEEP / DEDUPLICATE` |
| `/about/` | full public self-description and responsibilities | `KEEP` |
| `/how-nexah-works/` | method explanation: source, aperture, difference, boundary and Human Return | `KEEP` |
| `/ai/nexah.md`, `/ai/ecosystem.json`, `/llms.txt` | machine-readable identity and discovery views | `KEEP / DERIVE FROM ONE IDENTITY SOURCE` |
| `/orientation/`, `/visitor-guide/`, `/research-architecture/` | earlier orientation entrances with overlapping roles | `REVIEW / RETAIN UNTIL REDIRECT DECISION` |

The homepage should introduce NEXAH once. It should not repeat the same route
through separate house cards, route cards, room cards and status cards.

### 2 · Forschen

| Public route or source | Role | Decision |
|---|---|---|
| `/forschen/` | leading public NEXAH Science surface | `KEEP / COMPOSE FROM VERIFIED A0 EXPORT` |
| `A0_SCIENTIFIC_POSITION_REPORT.html` | current position, limits and next scientific gate | `KEEP / SOURCE-BOUND` |
| `A0_MATHEMATICAL_JOINTS.html` | Mathfield and declared joints | `KEEP / SOURCE-BOUND` |
| `A0_NEXAH_RESEARCH_METHOD.html` | bounded research-method account | `KEEP / SOURCE-BOUND` |
| `A0_NEXAH_FAMILY_METHOD_WHITE_PAPER.html` | family-method paper | `KEEP / SOURCE-BOUND` |
| `A0_RETURN_WITHOUT_IDENTITY_PAPER.html` | Return paper | `KEEP / SOURCE-BOUND` |
| `A0_FIELDS_AND_JOINTS_ATLAS.html` | fields-and-joints research atlas | `KEEP / SOURCE-BOUND` |
| `A0_BOUNDARY_GRAPH_DEMONSTRATOR.html` | bounded demonstrator | `KEEP / SOURCE-BOUND` |
| `NEXAH_C_CONNECT.html#scientific-review` | review and research-question return | `KEEP / SOURCE-BOUND` |
| all other A0 research desks, benches and reports | internal or not allowlisted by the current export receipt | `SOURCE ONLY` |

Science Desk / Science Lab retains wording, provenance, evidence class,
uncertainty and Claim Ceiling. Experience may order and present these pages but
must not summarize them into stronger claims.

### 3 · Lesen & erkunden

| Public route or source | Role | Decision |
|---|---|---|
| `/library/` | all `61` recorded publication records and curated reading paths | `KEEP` |
| `/library/[slug]/` and `/library/[slug]/read/` | publication record and Reading Space | `KEEP` |
| `/atlas-of-atlases/` | map and atlas entrance | `KEEP` |
| `/atlas/` and `/atlas/*` | existing Living Atlas entities and relations | `KEEP / PLACE UNDER THIS ROUTE` |
| `01_FROM_LINE_TO_READOUT.html` | A0 Book entry and chapters 01–08 | `KEEP / SOURCE-BOUND` |
| `/explore/*` | earlier editorial doors and journeys | `REVIEW / RETAIN UNTIL ROUTE MERGE` |

Library records are not inferred from an A0 label. New publications still
require canonical identity, owning source, rights and explicit release state.

### 4 · Anwenden & erleben

| Public route or source | Role | Decision |
|---|---|---|
| `A0_TOURS.html#explanation-path` | current guided public tour | `KEEP / SOURCE-BOUND` |
| `/laboratory/` and its public subroutes | public bridge to process, repository and current work | `KEEP` |
| allowlisted Pascal Pentagon and three-domain transition applications | bounded public instruments | `KEEP / SOURCE-BOUND` |
| `https://nexahedron.com` | Human-facing public house | `KEEP AS EXTERNAL HOUSE` |
| `https://www.scarabaeus1033.net` | independent Builder/studio house | `KEEP AS EXTERNAL HOUSE` |
| `/threshold/`, `/departure/` | existing interaction and return states | `REVIEW / RETAIN` |
| Builder Toy Store, Workbench, Cockpit and private A0 benches | internal build and inspection surfaces | `SOURCE ONLY` |

Tour is a guided explanation, not a claim that every linked instrument is one
shared application or runtime.

## Cross-cutting and legal routes

`/contact/`, `/accessibility/`, `/privacy/` and `/imprint/` remain reachable
from the footer and from appropriate contextual returns. They are not a fifth
content house.

## Immediate duplicate and ambiguity risks

1. The current primary header lists `Human`, `Science`, `Builder`, `About` and
   `Tour`, while the open navigation panel teaches four different visitor
   routes. The two models compete.
2. The homepage repeats destinations through houses, four routes, existing
   rooms and carrying-work cards.
3. Raw Astro `/forschen/` and composed A0 `/forschen/` are different artifacts
   at the same public path.
4. `A0_TOURS.html` is correctly allowlisted, but should be presented as the
   Tour inside `Anwenden & erleben`, not as a second global site structure.
5. Older orientation/explore entrances remain valuable but require a later
   explicit merge or redirect decision; they must not be removed during the
   navigation pass.

## Safe transition sequence

1. preserve the current sources and the A0 allowlist receipt;
2. make the four routes the primary header in `SciencePublicHeader.astro`;
3. reduce the homepage to definition, mission, boundary and one four-route
   entrance while keeping every existing destination reachable through its
   route page or `Navigation +`;
4. keep `/forschen/` composition explicit and label raw development previews
   as uncomposed;
5. verify links, routes, A0 reachability, responsive navigation and the exact
   composed artifact;
6. show only that exact artifact in the A0 Owner frame.

No commit, push, deployment or publication follows from this inventory.
