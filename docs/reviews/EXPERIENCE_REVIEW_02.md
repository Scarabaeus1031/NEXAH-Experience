# NEXAH Experience Review 02 — Cohesion, Language & Journey

## Review basis

This review reads the rendered local Experience as a first-time visitor. It
covers Home, Explore, the six editorial doors, Laboratory and its three
subrooms, Library, Reading Spaces, Living Atlas, About, the Orientation
Threshold, the deterministic Orientation journey and Departure.

The review does not redefine architecture or authority. It asks whether the
existing rooms form one understandable journey and implements only the two
issues classified as Critical.

## 1. Experience Narrative Review

The Experience already feels recognizably coherent. The restrained palette,
large editorial headings, consistent header, repeated question strip and quiet
page openings establish one place rather than a collection of microsites. Its
clearest story is:

```text
Arrive → choose a beginning → understand what exists → read or research →
follow declared relationships → leave with the question
```

The rooms also hold their authority well:

- the Human owns the question and continuation;
- the Experience presents entrances and temporary session state;
- the Library records publications;
- Reading Spaces present bounded selections;
- the Laboratory explains the research process and points to the Repository;
- the Living Atlas owns declared editorial relationships;
- ORION owns only its registered deterministic route and report.

The principal narrative break was discoverability. The only registered ORION
request existed in the generated architecture, but none of the four visible
Home examples opened it. A new visitor could explore explanations, catalog
lookup and editorial doors without ever discovering the deterministic journey
that the Experience claims to contain. The canonical request is now one of the
Home examples. No translation rule or route was added.

The second break was the short processing performance between confirmation and
the boundary. The report already exists at build time, yet the interface
disabled the continuation, waited 850 ms and displayed four simulated “Ready”
states. That made a deterministic boundary look like runtime activity. The room
now offers a deliberate pause without pretending that work is happening.

### Narrative by visitor

#### Curious visitor

- **Confident:** Home, Explore and the Visitor’s Guide offer understandable
  entrances without requiring specialist knowledge.
- **Hesitates:** “Living Atlas” and “Laboratory” need their opening explanations
  before the names become meaningful; both currently provide them.
- **May leave:** the very long complete Library can feel like inventory after
  the initial editorial doors.

#### Researcher

- **Confident:** the Laboratory distinguishes publication, research and source
  repository; provenance links are explicit.
- **Hesitates:** the shift from editorial Laboratory language to GitHub and
  repository terminology is necessarily sharper than the rest of the site.
- **May leave:** if “Current work” is read as a status dashboard rather than a
  bounded editorial view. Its current introductory copy prevents most of this
  misunderstanding.

#### Designer

- **Confident:** room openings, typography and the repeated spatial language
  make the system legible.
- **Hesitates:** the global navigation mixes places (“Library”), actions
  (“Explore”, “Begin”) and a document convention (“About”).
- **May leave:** at dense registry or catalog stretches where the visual rhythm
  becomes more archival than experiential.

#### Developer

- **Confident:** About’s Ecosystem Map and the Laboratory Repository Map expose
  boundaries and source destinations without hiding them.
- **Hesitates:** the public phrase “ORION” appears before a first-time visitor
  necessarily knows why it matters.
- **May leave:** nowhere structurally; repository and README exits are direct
  and correctly marked as external.

## 2. Language Review

### Current navigation language

| Label | Function | Assessment |
|---|---|---|
| Home | place / return | familiar and stable |
| Explore | action / editorial entrance | clear, but grammatically unlike the room labels |
| Laboratory | place | strong once its opening sentence is read |
| Library | place | immediately understandable |
| Living Atlas | place / concept | distinctive and explained before its registries |
| About | document convention | understandable but least aligned with the spatial language |
| Begin | action | clear as the bounded threshold entrance |

“About” remains usable, but **Why NEXAH** would tell the narrative more
directly and match the first major section on the page. Changing a permanent
navigation label affects every route and should be tested as one terminology
decision rather than applied during this cohesion pass. It is Important, not
Critical.

“Question”, “Confirm”, “Orient”, “Boundary” and “Continue” form a consistent
journey vocabulary. They describe human states rather than software stages.
The processing copy previously contradicted that vocabulary by performing a
technical check. It now describes arrival at a boundary and leaves the next
movement to the visitor.

### Canonical public terms

- Use **Publication Catalog** for the record of what exists.
- Use **Library** for the public editorial room.
- Use **Reading Space** for a local reading selection.
- Use **Living Atlas** for explicit editorial relationships.
- Use **Laboratory** for the public view of research practice.
- Use **Repository** only for the external living source.
- Use **Orientation Threshold** for the deterministic entrance.
- Use **ORION boundary/report** only once a registered request is being shown.

## 3. Navigation Review

The permanent navigation is stable and predictable across rooms. Current-room
highlighting works, the mobile menu uses the same labels and “Begin” remains
visually distinct. The question strip preserves context without replacing the
navigation.

### What works

- Home, Explore, Laboratory, Library, Living Atlas and About remain reachable
  from every standard page.
- Laboratory subnavigation is shallow and consistently ordered.
- Publication and Reading Space pages preserve routes back to their owning
  rooms.
- Leaving is always possible through Departure or the session control.
- External Repository and README destinations are marked with an external
  arrow and open separately.

### Friction

- “Begin” opens the Threshold while Home already contains a threshold form.
  This is intentional reuse, but the label does not reveal that it is the same
  bounded entrance.
- Home offers both six editorial doors and three guided beginnings. The two
  systems are explained, but they still create a dense first-page decision
  field after the primary question.
- Library and Living Atlas are long. A visitor deep in either room relies on
  the global header or local links rather than a quiet closing continuation.

### Recommendation

Keep the current routes. Consider **Why NEXAH** for “About” and a single quiet
end-of-room continuation on the Library and Atlas only after observing real
visitor hesitation. Do not add another navigation layer.

## 4. Orientation Journey Review

### Question

The Threshold correctly distinguishes approved explanation, exact Catalog
lookup, editorial door, registered ORION request and unsupported wording. It
never disguises a boundary as an answer.

### Confirm

The confirmation room preserves the exact sentence and makes clear that no
interpretation has happened. “Edit the question” is the correct secondary
action.

### Orient

The former timed “Ready” sequence looked like runtime work even though the
result is generated at build time. This was a Critical transparency problem.
The room now says that the unchanged question has reached the existing
boundary. Its continuation is immediately available; the visitor may pause by
choice rather than because of a timer.

### Boundary

Supported and unsupported language separate cleanly:

- the canonical request opens the real blocked TransformationReport;
- unsupported wording stays unchanged and creates no report;
- no publication or Atlas relationship is inferred from either state.

The report’s first view is accurate, though still technical. Transition IDs,
evidence levels and detailed blockers belong in the existing inspection view;
future editorial simplification should not remove report information.

### Continue

Editorial continuation is correctly described as independent from report
authority. Reflection remains optional, and Departure does not claim closure.

### Critical journey correction implemented

Home now exposes the exact registered request:

> I want to understand how this observation reaches the calendar.

The link still enters through the Threshold. ORION is not invoked until the
visitor confirms the unchanged request.

## 5. Interaction Review

### Consistent

- primary buttons use the dark filled treatment;
- secondary actions remain outlined or quiet;
- cards that act as destinations are whole-card links;
- external destinations use `↗`;
- informational boundaries use panels, not links;
- text links within Atlas registries are explicit rather than hidden in images.

### Ecosystem Map

The Ecosystem Map now passes the destination test:

- Experience, Library, Laboratory, Living Atlas, Publication Catalog, Reading
  Spaces, Original Publications, README, Repository Map, Repository and ORION
  are navigable;
- README and Repository are visibly external;
- Orientation Studio is an inactive `aside` labeled “Informational only”;
- Repository Map and Ecosystem Map answer different questions and remain
  separate.

### Remaining interaction concerns

- Explore’s guided beginnings end in arrow-only links. The surrounding row is
  understandable visually, but a text action would be more explicit for some
  visitors.
- Atlas operator cards are informational while concept and theme elements are
  navigable. Their styling is related enough that a new visitor may initially
  expect every registry item to open.
- Long catalog and registry pages repeat many similar affordances; hover alone
  should never be the only signal of clickability.

These are Important consistency refinements, not broken paths.

## 6. Editorial Review

Every major editorial room now explains itself before presenting inventory:

- **Laboratory:** purpose, research-process action, then featured reading and
  repository distinctions;
- **Library:** what the complete Library is, how doors differ from the Catalog,
  then the six doors and records;
- **Living Atlas:** its relationship to the Library, explicit counts and one
  declared path before registries;
- **About:** why NEXAH exists before the Ecosystem Map and method.

The strongest editorial sentence is the Living Atlas opening: “A Library
stores works. An Atlas reveals the curated paths between them.” It explains a
responsibility through contrast without exposing implementation.

The densest language appears in authority copy. Terms such as “registered
request”, “deterministic language boundary”, “Representation Target” and
“TransformationReport” are truthful but should remain near inspection and not
become the dominant public voice. The current Threshold and report keep most of
this detail appropriately bounded.

## 7. Visual Rhythm Review

### What holds the Experience together

- consistent ivory background, navy typography and restrained gold accents;
- wide room openings with one large statement;
- stable header proportions and current-room color;
- recurring eyebrow, lead and section-divider hierarchy;
- generous spacing around purpose statements;
- calm transitions without modal interruptions.

### Where rhythm tightens

- Home becomes decision-dense after its quiet hero because six doors, three
  guided paths and the Catalog invitation appear in succession;
- Library and Living Atlas shift from spacious introductions into long archival
  grids;
- About becomes denser after the Ecosystem Map because method, principles and
  authority each introduce another explanatory system;
- the ORION inspection view necessarily resembles a report more than a room.

These changes in density are appropriate when they correspond to deeper
inspection. They become a problem only when several entry systems compete at
the same level.

## 8. Prioritized Improvement List

### Critical — implemented

1. **Expose the existing canonical ORION journey at Home.** The architecture’s
   defining interaction was otherwise undiscoverable to a first-time visitor.
   One existing example was replaced; no interface region or rule was added.
2. **Remove simulated processing from the Orientation transition.** The timed
   delay and “Ready” list implied runtime work that did not occur. The room is
   now a truthful, visitor-controlled pause.

### Important — documented, not implemented

1. Test **Why NEXAH** as the permanent replacement for “About”. It better
   expresses purpose, but requires a site-wide terminology decision.
2. Reduce Home’s secondary decision density if observation shows hesitation.
   Prefer removing one entry system over adding guidance.
3. Give Library and Living Atlas a quiet closing continuation if visitors reach
   their ends without knowing where to go next.
4. Make informational Atlas registry items more visibly distinct from linked
   entries without adding another interaction type.
5. Keep internal ORION terms in inspection views and continue simplifying the
   first human summary without removing evidence or provenance.
6. Replace arrow-only guided-beginning affordances with explicit text if
   keyboard and first-time testing shows uncertainty.

### Nice to Have — no action

1. Tune section spacing on the longest Catalog and Atlas pages after real
   content growth stabilizes.
2. Review whether the global question strip needs to appear on every editorial
   page during a session; it currently preserves context correctly.
3. Refine end-of-room microcopy so Library, Atlas and About close with the same
   quiet cadence as Departure.

### Never

- add a chatbot, hidden recommendation or semantic route to solve
  discoverability;
- infer Library or Atlas continuations from the visitor’s wording;
- make the Ecosystem Map a dashboard or graph explorer;
- conceal a blocked ORION report behind more reassuring language;
- turn reflection into a required step;
- add navigation merely to explain existing navigation.

## Conclusion

The Experience already tells one credible story. Its remaining cohesion work
is mostly subtraction and terminology, not architecture. With the registered
route now discoverable and the simulated processing removed, the central
journey is both easier to enter and more honest once entered.
