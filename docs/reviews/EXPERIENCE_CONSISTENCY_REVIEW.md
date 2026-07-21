# NEXAH Experience Consistency Review

## Review scope

This review covers the complete rendered public Experience: Home, Explore and
all six doors, Library, all 61 publication pages, all seven local Reading
Spaces and their 79 selected pages, Living Atlas, About, Threshold,
Orientation and Departure. Desktop and compact responsive layouts were checked
before implementation changes were made.

The architecture and all ownership boundaries remain unchanged. The changes
below are presentation and editorial-language corrections only.

## 1. Experience Consistency Review

The Experience already reads as one calm system. Shared typography, navigation,
question continuity, restrained color and explicit authority language make the
rooms recognizably related. The strongest continuity is:

```text
Threshold or Explore → Publication → Reading Space → Living Atlas → Departure
```

The principal inconsistency was not visual. It was expectation: a publication
page did not always say whether the visitor was seeing a record, a selected
local Reading Space or the original publication. The revised pages now expose
that boundary before the visitor chooses an action.

## 2. Publication Consistency Review

### Publication with a local Reading Space — seven records

These pages remain enhanced Library presentations. They now state:

- the publication exists;
- a Reading Space is available here;
- the Reading Space is a curated selection;
- how many selected pages are available relative to recorded source pages;
- the original publication remains available on Are.na.

The primary action is **Enter Reading Space**. **Open original publication** is
the secondary action. This removes the previous implication that the local
selection was necessarily the complete original work.

### Publication record without a local Reading Space — 54 records

These pages now identify themselves as **Publication records**, not Reading
Spaces. They state that no Reading Space is available here and make **Open
original publication** the primary action. Catalog classification remains
visible but is labeled as classification rather than completion or review.

### Cover behavior

Remote cover delivery is not part of Library authority and may fail or arrive
late. A quiet title-and-form fallback now preserves publication identity when a
remote cover is unavailable. The fallback makes no claim about the original
cover.

## 3. Reader Consistency Review

All seven Reader entrances and all 79 selected pages use the same sequence,
navigation and ending. The Reader now makes three facts explicit:

1. it is a curated Reading Space;
2. the page count describes the local selection;
3. the original publication is not replaced.

Inside the Reader, **Selected page _n_ of _m_** describes progress without
claiming completeness. The final page uses the same ending pattern everywhere:

- primary: continue into the Living Atlas;
- secondary: open the original publication;
- optional returns: publication page or Library.

The Reading Space therefore ends deliberately rather than appearing broken.

## 4. Source Consistency Review

Canonical public wording is **Original publication**.

| Avoid | Use | Reason |
|---|---|---|
| Source | Original publication | “Source” is too abstract for a first-time visitor. |
| Source record | Original publication | The external destination contains the work, not only metadata. |
| Original edition | Original publication | Edition is already separate publication metadata. |
| Published on Are.na | Available on Are.na | Describes location without adding a publishing claim. |

Every publication page now exposes the original destination. Reader entrances
and endings do the same because those are the points where selection coverage
matters most.

## 5. Navigation Consistency Review

The permanent navigation remains unchanged: Home, Explore, Library, Living
Atlas, About and Begin. The rooms retain distinct responsibilities:

- Home and Threshold help a visitor find a supported beginning;
- Explore offers editorial entry doors;
- Library says what publications exist;
- a publication page explains local availability;
- Reader presents selected pages;
- Living Atlas presents declared relationships;
- Orientation presents the deterministic boundary;
- Departure makes leaving explicit.

No new route or workflow is required. Continuation language was added only at
publication and Reader endings, where the previous page could otherwise feel
unfinished.

## 6. Terminology Review

| Term | Canonical meaning |
|---|---|
| Publication | The work itself. |
| Publication record | A local metadata presentation without a local Reader. |
| Reading Space | The local page-by-page Reader experience. |
| Reading selection | The recorded pages presented in that Reading Space. |
| Original publication | The source work available outside the local Experience. |
| Edition | Existing editorial metadata for an enhanced publication. |
| Catalog classification | Existing Catalog classification; not evidence or review. |

**Book**, **Reader**, **source record** and **complete Reader** should not be
used as interchangeable public labels. “Reader” remains the architectural
component name; “Reading Space” is the public room.

## 7. Entry/Exit Review

The existing entries create compatible expectations. The most important exit
rules are now consistent:

- a Publication record exits primarily to the original publication;
- an enhanced Publication exits primarily to its Reading Space;
- a Reading Space exits primarily to the Living Atlas;
- every publication path retains a route back to the Library;
- Departure remains optional and does not claim closure.

Repeated actions at the bottom of long pages are intentional orientation
markers, not additional features.

## 8. Mobile Consistency Review

Compact layouts preserve the same content order and action hierarchy. Reader
page controls remain visible beside the spread, chapter navigation remains in
the sticky Reader bar and final actions become full-width targets.

Two horizontal layout leaks were found and corrected:

- the Library door carousel extended beyond its container;
- intrinsic width from the five-part Atlas route enlarged later Atlas sections.

Horizontal movement now remains inside the intended local carousels rather than
expanding the page. The publication status blocks, source links and Reader
endings stack without changing their meaning.

## 9. Recommended Improvements

### Implemented now

- use one publication vocabulary across cards, records, enhanced pages and
  Readers;
- expose Reading Space availability and selection coverage;
- use **Original publication** for the external source destination;
- add consistent publication and Reader endings;
- provide a remote-cover fallback;
- contain Library and Atlas horizontal overflow;
- preserve one visually dominant action per publication state.

### Later

- create local cover derivatives for additional catalog records when source
  rights and an import workflow are available;
- review whether every external original can be described as a publication
  rather than a collection, without changing Catalog identity;
- perform periodic keyboard-only and screen-reader passes when content volume
  changes.

### Never in this consistency layer

- infer completion from page count;
- infer recommendations from publication text;
- turn Catalog classification into evidence or validation;
- fabricate Reading Spaces for records without selected local pages;
- hide an unavailable original or silently replace it.

## 10. Priority List

| Priority | Recommendation | Status |
|---|---|---|
| P0 | Distinguish Publication record, Reading Space and original publication. | Implemented |
| P0 | Declare that local Reader pages are a curated selection. | Implemented |
| P0 | Keep small-screen horizontal movement inside intended regions. | Implemented |
| P1 | Give every publication and Reader an explicit next action. | Implemented |
| P1 | Preserve identity when a remote cover is unavailable. | Implemented |
| P2 | Import more local covers through an authorized reproducible workflow. | Later |
| P2 | Repeat accessibility review after future editorial expansion. | Later |

The resulting Experience does not add a new publication state. It makes the
existing states legible: Catalog inclusion, local Reading Space availability,
original-source availability and existing classification remain separate facts.
