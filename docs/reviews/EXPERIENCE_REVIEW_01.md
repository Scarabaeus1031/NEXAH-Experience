# NEXAH Experience Review 01 — Room by Room

## Review basis

This review evaluates the rendered local Experience after Sprint 07 and checks
the corresponding page and layout sources. It follows the existing journey and
authority model. It does not propose a new room, runtime, workflow or system.

Each room is evaluated against three questions:

1. Where am I?
2. What is the one primary thing I can do here?
3. Where can I go next?

# Overall Impression

The Experience already has a distinct character. Its ivory field, dark blue
type, restrained gold accents, serif headings and generous vertical space feel
calm and deliberate. Home, the Question state and Departure communicate that
NEXAH is not chat. The Reader is the most complete expression of the spatial
idea: the publication becomes the focus, movement is bounded and the exits are
understandable.

The main weakness is not missing functionality. It is accumulated explanation.
The Experience frequently explains its architecture, authority and exclusions
inside the public rooms. Library and Living Atlas also present their complete
inventories at once. This makes two rooms feel like catalogues rather than
places. ORION is accurate, but its first view gives internal identifiers and
representation details before a visitor has absorbed the simple result.

One statement must be corrected because it crosses an existing authority
boundary:

> Every well-bounded question adds another piece to the atlas.

The current Living Atlas is static and editorially curated. A visitor question
does not write to it. Repeating this sentence on Home and in the shared footer
implies persistence and automatic Atlas growth that do not exist.

The review therefore recommends subtraction: remove repeated inventories,
artificial processing, duplicated actions and public implementation language.
The architecture itself should remain unchanged.

# Room Reviews

## Home

### Purpose

Home is the arrival room. It establishes the tone, gives the visitor confidence
that one honest question is enough and offers a clear way to enter.

### Primary action

Enter the existing Question room.

The current Home page also collects the full question. As a result, a visitor
who uses Home moves directly to confirmation, while a visitor who opens the
Orientation page directly sees a second question form. Home and Question
therefore compete for ownership of the same act.

### What works

- The central question is immediately understandable.
- The page is spacious and the main control is visually dominant.
- “One question. One bounded attempt. No conversation begins.” establishes a
  valuable boundary without sounding defensive.
- The visitor retains ownership of the question.

### What creates friction

- Home and Question both ask for the question.
- Three “not” statements explain product positioning before the visitor has
  experienced the place.
- The manifesto beneath the hero is repeated almost verbatim in the footer.
- The Atlas-growth statement implies an unauthorized write to the Living Atlas.

### What can be simplified

- Let Home be arrival and let the existing Question room own question entry.
- Retain one short boundary sentence instead of three product comparisons.
- Remove the duplicated manifesto block or remove its duplicate from the footer.
- Replace the Atlas-growth claim with a non-persistent statement such as “A
  well-bounded question creates a place to begin.”

### Suggested refinements

- **Now:** make the Living Atlas claim truthful.
- **Now:** establish one owner for question entry. The calmest sequence is Home
  as arrival, followed by the existing Question room.
- **Now:** show one primary entrance and one quiet route to leave or browse.
- **Later:** test whether the comparison row is still needed after the first
  five minutes of use; it should disappear if the experience explains itself.

### Boundary and continuation

The Human clearly owns the question. Home should not imply that asking changes
the Library or Atlas. Its explicit exits should be the Question room, the small
global navigation and leaving the site.

## Question

### Purpose

The Question room receives one piece of human language, preserves it unchanged
and asks for deliberate confirmation before ORION is consulted.

### Primary action

Confirm this question.

### What works

- The textarea is bounded and does not imitate a conversation.
- The wording remains visible through the later rooms.
- Confirmation preserves human authority.
- Unsupported wording is not silently mapped to a supported request.

### What creates friction

- The five numbered journey markers make rooms look like a mandatory workflow.
- Confirmation exposes “deterministic language boundary” and “registered
  request” before those details are useful to a first-time visitor.
- The processing panel waits before enabling “See the boundary,” although the
  report was already generated at build time.
- Four processing rows marked “Ready” resemble simulated runtime activity.

### What can be simplified

- Replace numbered progress with a quiet current-room label, or remove it. The
  question does not need to promise five mandatory stages.
- Keep confirmation to the exact wording and one sentence explaining that no
  interpretation has happened.
- Remove the artificial processing delay and its status list. Confirmation can
  open the existing result or language boundary directly.
- Keep implementation terms available only where a visitor explicitly inspects
  the boundary.

### Suggested refinements

- **Now:** remove simulated processing and the 850 ms delay.
- **Now:** reduce confirmation to the question, its unchanged status and the
  primary action.
- **Now:** make “Edit the question” the only secondary action.
- **Later:** replace the numbered journey strip with a non-progressive spatial
  locator if visitors still need stronger location cues.

### Boundary and continuation

The Experience may preserve and present the wording, but it may not translate
unsupported language or infer a target. The two valid exits are confirmation or
return. After confirmation, ORION either supplies the existing report or remains
explicitly unavailable.

## ORION

### Purpose

The ORION room shows the authoritative deterministic result: whether a route
exists, whether it can execute, what evidence accompanies it and where it stops.

### Primary action

Inspect where the deterministic route stops.

### What works

- The blocked status is stated plainly.
- The page never claims that a target representation was produced.
- The registered path, evidence levels, blockers and provenance remain
  inspectable.
- The transition to editorial reading is explicitly described as non-validating.
- Leaving and optional reflection remain available.

### What creates friction

- The first result repeats “blocked” several times.
- Transition IDs, evidence codes and six representation cards dominate the
  initial view before the human meaning of the result is settled.
- “Existing LYRA request” exposes an internal boundary as public journey copy.
- “Inspect,” “Pause and reflect” and “Leave” compete at the same decision point.
- The unsupported-language state presents a five-part authority ledger and four
  actions, although its central truth is simple: ORION was not invoked.

### What can be simplified

- First show only: status, route availability, why execution stops and whether
  an output exists.
- Move transition cards, identifiers, schema, build digest and complete blocker
  lists behind the existing inspection action.
- Keep one primary action: inspect the boundary. Keep leaving as the quiet exit.
- In the unsupported state, preserve the question, say that no registered
  request exists and offer clarification. Library and Atlas can remain quiet
  independent exits without an authority ledger.

### Suggested refinements

- **Now:** separate the human summary from the inspectable report details.
- **Now:** remove internal LYRA terminology from the primary result view.
- **Now:** reduce competing actions in both result states.
- **Later:** validate that evidence, provenance and blocker views remain usable
  with longer reports without turning into a dashboard.

### Boundary and continuation

ORION correctly owns routing, validation, evidence and the blocked status. The
Experience owns only how these fields are revealed. Library continuation must
remain explicitly editorial and must never appear to resolve the blocked report.

## Library

### Purpose

The Library is the editorial room in which existing publications can be entered
and read.

### Primary action

Open one publication.

### What works

- Every work is real, locally represented and opens into a Reader.
- Covers, titles and categories are clear.
- No search, inferred recommendation or ORION dependency is present.
- The editorial boundary is correct.

### What creates friction

- The same publications appear in “Begin with a room,” “Reading rooms” and
  “Rooms in the Library.”
- Category pills, featured works, all works and category rooms compete as four
  entry systems for only seven publications.
- The page explains `TransformationReport` authority in public copy.
- Its length makes the Library feel like an inventory rather than a reading room.

### What can be simplified

- Display every publication once on the Library landing page.
- Keep categories as quiet editorial orientation, not a second list of the same
  works.
- Remove either the featured shelf or the complete shelf duplication.
- Replace technical boundary language with one quiet sentence: editorial reading
  does not change the orientation result.

### Suggested refinements

- **Now:** reduce the landing page to one publication shelf and one secondary
  category orientation.
- **Now:** remove repeated book cards and links.
- **Now:** make “open a publication” visually dominant.
- **Later:** evaluate a single rotating editorial entrance only if its selection
  remains explicit and inspectable; never introduce hidden ranking.

### Boundary and continuation

The Library owns publication metadata. It may lead into the Reader or to a
publication’s explicit Atlas relationships. It must not present a publication
as evidence for an ORION report unless such a reference is already registered.

## Reader

### Purpose

The Reader gives one publication a calm, bounded place in which its recorded
pages can be read.

### Primary action

Read the current page and continue to the next recorded page.

### What works

- The publication becomes the visual center.
- Page order, chapter navigation, progress and previous/next movement are clear.
- Progress is positional and non-persistent.
- Full-size image viewing does not introduce another content authority.
- The final Atlas continuation uses only explicit relationships.
- The footer is already removed, which protects concentration.

### What creates friction

- Global header, persistent question bar and Reader bar create three horizontal
  context layers before the publication.
- Chapter and page title are often identical and therefore appear twice.
- The Reading Space entrance does not protect the cover's intrinsic proportion.
  In the current desktop composition the cover can become visibly elongated.
- Every click on the large page opens the full-screen image dialog. The image
  therefore behaves primarily like a zoom control, although the visitor's
  primary intention is to continue reading.
- Previous and next movement exists only below the complete spread. On a large
  landscape page, the small “Next” link can sit outside the first viewport and
  is too quiet to communicate the Reader's primary action.
- The full-screen image dialog contains only “Close.” Once it is open, page
  movement disappears and the visitor has to leave the image view before
  continuing.
- Reader images declare the same `1122 × 1402` HTML dimensions even when the
  recorded source is landscape. CSS eventually uses the raster's natural ratio,
  but the incorrect intrinsic dimensions can reserve a portrait-shaped space,
  cause layout movement and make future fitting behavior unreliable.

### What can be simplified

- Let the Reader bar replace the global header while reading.
- Keep the question in one thin, quiet context line so Sprint 06 transparency is
  preserved without dominating the book.
- When chapter and page title are identical, render the title once.
- Give every cover and recorded page its true intrinsic dimensions. Covers
  should use a stable cover ratio with `object-fit: contain`; spreads should fit
  their own landscape or portrait ratio without cropping or stretching.
- Place unmistakable previous and next controls at the left and right edges of
  the reading spread. They should remain visible beside the page, use accessible
  names, provide large targets and retain keyboard-arrow support.
- Do not use the entire page as an ambiguous zoom button. Keep reading movement
  primary and expose enlargement through a small, explicit zoom control.
- If the full-screen image view remains, include the same previous and next
  controls inside it so enlargement is not a navigational dead end.
- Keep the lower textual page links as an accessible secondary path and retain
  the final Atlas exit.

### Suggested refinements

- **Now:** reduce the stacked navigation chrome.
- **Now:** remove duplicate chapter/page headings.
- **Now:** correct cover and page proportions using real intrinsic dimensions;
  no publication image may be stretched to fit a layout slot.
- **Now:** make the left/right page arrows permanently visible next to the
  spread. The next-page control must not depend on scrolling below the image.
- **Now:** separate “zoom” from “continue reading” and give the full-screen view
  its own page navigation if it remains.
- **Now:** keep reading as the only dominant action; enlargement is secondary.
- **Later:** test image enlargement and chapter navigation with a full range of
  source aspect ratios and small mobile viewports.

### Boundary and continuation

Reader ownership is currently strong. It controls traversal and presentation,
not metadata or relationships. Its exits—about the work, chapters, next/previous
page and explicit Atlas continuation—are understandable and bounded.

## Living Atlas

### Purpose

The Living Atlas reveals curated relationships between existing publications,
concepts, editorial operators, themes and visual collections.

### Primary action

Follow one explicit path.

### What works

- The first route demonstrates a real, inspectable editorial relationship.
- The page states that no similarity engine constructed the route.
- Concepts, operators and themes have independent registry pages.
- Library and Atlas ownership remain distinct.
- No graph database, semantic search or inferred edge is present.

### What creates friction

- Five numerical counters make the opening feel like a dashboard.
- The landing page exposes every concept, operator, theme, publication and visual
  collection in one long inventory.
- Publications are listed again even though the Library already owns their
  discovery.
- Repeated explanations of what the Atlas does not do make the room read like
  architecture documentation.

### What can be simplified

- Lead with the one explicit path and make following it the primary action.
- Remove dashboard counts from the visual opening.
- Use the existing registry pages for full inventories instead of reproducing
  all entries on the landing page.
- Remove the full publication list from the Atlas landing page.
- Replace the technical negative list with one human sentence: every path shown
  here was deliberately curated.

### Suggested refinements

- **Now:** make the explicit path the dominant landscape.
- **Now:** remove counts and duplicated inventories from the opening room.
- **Now:** retain Concepts, Operators and Themes as secondary exits to their
  existing registries.
- **Later:** explore a more spatial arrangement only if every relationship stays
  explicit, accessible and equally understandable without the visual treatment.

### Boundary and continuation

The Atlas correctly owns only declared relationships. It may lead to a concept,
operator, theme or Library publication. It may never imply that the current
question generated, ranked or personalized any path.

## Departure

### Purpose

Departure allows the visitor to leave without resolution, pressure or a new
engagement loop.

### Primary action

End the session and return home.

### What works

- The room is visually quiet and emotionally complete.
- It explicitly permits an open question.
- Leaving is not framed as failure.
- “Keep reading” remains a secondary, optional continuation.
- Temporary session state is explained honestly.

### What creates friction

- The persistent question bar offers “End this session” while the page repeats
  “End session and return home.”
- “You followed a visible boundary into observation, attention and wonder” is
  tied to one curated journey and is not truthful for every possible question.

### What can be simplified

- Hide the session-bar end action inside Departure; the room already owns that
  decision.
- Use wording that is true for every route: the visitor followed a question to a
  visible boundary.
- Keep only one primary exit and one secondary reading continuation.

### Suggested refinements

- **Now:** remove the duplicated end-session action.
- **Now:** make the main copy route-neutral and question-faithful.
- **Now:** preserve “Keep reading” as clearly optional.

### Boundary and continuation

The Human owns departure, interpretation and what continues. The Experience may
clear its temporary state; it may not claim that insight, wonder or understanding
occurred.

# Cross-room observations

## Typography

The serif/sans-serif pairing and restrained palette are consistent. Large serif
headings establish presence, but repeated eyebrow, heading, lead, status and
boundary labels create a predictable documentation stack. Reader should avoid
repeating identical chapter and page titles. Technical identifiers should use
the quieter typographic layer only after inspection is requested.

## Spacing

Home, Question, Reader and Departure use whitespace as orientation. Library and
Atlas use generous spacing inside too many consecutive sections, resulting in
long pages rather than calm pages. Removing repeated sections will improve the
rhythm more than increasing margins.

## Navigation

Global navigation and the persistent question provide continuity. Inside the
Reader they combine with a third bar and become heavy. Departure duplicates the
session-ending action. The numbered Orientation journey communicates progress
rather than place and makes optional states appear mandatory.

## Transitions

The transition from Question to ORION currently inserts simulated processing.
Because the report is already a deterministic build artifact, this delay reduces
transparency. Library-to-Reader and Reader-to-Atlas transitions are clearer:
their labels describe what belongs to the next room.

## Language

Public language is strongest when it says what the visitor can do. It is weakest
when it names internal mechanisms: registered requests, deterministic language
boundary, LYRA, schema, digest and `TransformationReport`. These details remain
valuable in inspection and documentation, but they should not dominate the
first encounter with a room.

The Atlas-growth sentence must be removed because it conflicts with the static,
editorial authority model. Departure copy must not claim a specific change in
the visitor.

## Visual rhythm

The Experience begins and ends quietly. Its center grows progressively denser:
ORION cards, repeated Library shelves and complete Atlas registries. The desired
rhythm is not achieved by adding atmosphere; it is achieved by revealing one
layer at a time and letting existing detail remain available on demand.

# Experience principles

| Principle | Current assessment | Required refinement |
|---|---|---|
| One primary action | Partial | Question and Reader are clear; ORION, Library and Atlas need fewer competing actions. |
| Calm | Strong visually, partial structurally | Remove simulated processing, repeated inventories and repeated authority explanations. |
| Spaciousness | Strong | Preserve whitespace, but shorten Library and Atlas rather than adding more space. |
| Explicit boundaries | Strong | Keep boundaries inspectable; move implementation language out of the primary layer. |
| No hidden inference | Strong | Correct the Atlas-growth claim so the copy matches actual behavior. |
| Human remains in control | Strong | Avoid copy that claims understanding, wonder or a specific personal change. |
| Leaving is always allowed | Strong | Remove duplicate departure controls while retaining a quiet exit in every major state. |

# Priority

## Now

These are corrections or low-risk subtractions that improve truth and calm
without changing architecture:

1. Remove or replace every claim that a visitor question adds to the Living
   Atlas.
2. Give question entry one clear owner: Home as arrival, Question as focus and
   confirmation.
3. Remove the artificial processing delay and “Ready” checklist.
4. Reduce the ORION first view to status, boundary, reason and output state;
   retain details behind inspection.
5. Display Library publications once rather than across three overlapping
   sections.
6. Make the Atlas explicit path primary; remove dashboard counts and duplicated
   inventories from its opening.
7. Correct Reader image proportions, expose persistent left/right page arrows,
   separate zoom from page movement and reduce duplicate chrome and headings.
8. Remove the duplicated Departure action and make its copy route-neutral.
9. Move technical authority explanations from primary public copy into existing
   inspection or documentation surfaces.

## Later

These require observation across devices or more content, not new architecture:

1. Test a non-progressive spatial locator if visitors cannot tell where they are
   after the numbered Orientation strip is removed.
2. Validate the inspectable ORION report with longer routes and issue lists.
3. Test Reader image behavior across all source aspect ratios and mobile sizes.
4. Explore a more spatial Atlas arrangement only as an alternative presentation
   of the same explicit registry records.
5. Re-evaluate whether Home still needs product-comparison language after the
   refined journey can communicate the distinction by itself.

## Never

These would blur frozen authority or turn the Experience into another product:

- no chat interface or open-ended conversational loop;
- no inferred, personalized or semantically ranked Library recommendations;
- no automatically generated Atlas relationships;
- no graph visualization presented as inferred knowledge;
- no persistent reading or question history without a separate approved phase;
- no UI text that upgrades evidence, changes ORION status or claims personal
  understanding;
- no additional journey rooms merely to explain internal architecture;
- no simulated processing intended only to make a static result feel active.

## Final assessment

The current Experience does not need more surface area. Its identity is already
visible. The highest-value refinement is to let each authority speak once:

- the Human brings and confirms the question;
- ORION reports the deterministic boundary;
- the Library presents publications;
- the Reader supports reading;
- the Living Atlas reveals curated relationships;
- the Experience makes movement and departure clear.

Removing repetition will make these boundaries more visible than adding another
explanation ever could.
