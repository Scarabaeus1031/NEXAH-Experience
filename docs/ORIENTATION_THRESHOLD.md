# Orientation Threshold

## Purpose

The Orientation Threshold is the deterministic guided entrance to the NEXAH
Experience. It replaces the appearance of unrestricted question answering with
an inspectable boundary:

```text
visitor wording
      ↓
normalization
      ↓
approved explanation | registered request | explicit intent
      ↓
explicit Catalog lookup | Navigation record
      ↓
EXPLAIN | FIND | ORIENT | ORION_AVAILABLE | CLARIFY | BOUNDARY
```

The Threshold does not simulate understanding. It makes the structures already
supported by the Experience visible.

## Authority

| Owner | Threshold use | Boundary |
|---|---|---|
| Human | supplies, revises and interprets the question | remains free to continue or leave |
| Experience | normalizes wording and renders deterministic results | does not reason, validate or recommend |
| LYRA | owns the existing canonical language boundary | is not modified or duplicated |
| Publication Catalog | supplies publication identity and recorded metadata | matches are not evidence claims |
| Navigation Catalog | supplies six doors and three guided beginnings | no route is invented at runtime |
| ORION | owns the existing registered request and report | the Threshold detects availability but never invokes ORION |
| LUCY | remains the optional future reflection boundary | no LUCY runtime exists in this sprint |

## Static implementation

All records are shipped with the static Astro build. No API, model provider,
network request, embeddings, semantic ranking or server process is required.

- `src/threshold/knowledge.mjs` contains reviewed explanation records.
- `src/threshold/intents.mjs` contains accepted phrases and finite clarification
  options.
- `src/threshold/engine.mjs` contains normalization and deterministic matching.
- `src/threshold/runtime.ts` supplies the existing Catalog, Navigation and
  registered ORION records to the pure engine.
- `/threshold/` renders the result and explicit continuation actions.

Direct Explore doors remain useful without JavaScript. Typed comparison on the
Threshold page uses a small local browser script and has a visible no-script
fallback.

## Approved explanation schema

Every record contains a stable `id`, explicit `acceptedPhrases`, reviewed
`title` and short `explanation`, up to three explicit `continuations`, an
owning-document `provenance` reference and `reviewStatus: human-reviewed`.

Explanations are never assembled from arbitrary repository content and are not
summarized at runtime.

## Normalization and matching

Normalization is deliberately small and public:

1. Unicode NFKD normalization;
2. removal of combining marks;
3. lowercase conversion;
4. normalization of typographic apostrophes;
5. replacement of undeclared punctuation with spaces;
6. whitespace collapse.

Accepted phrases and aliases require equality after normalization. Publication
lookup is available only through declared query forms:

- `find …`, `find publication …`, `what is …`, `show me publication …`, `open …`;
- `catalog key …`;
- `find series …`, `find type …`, `find form …`.

Title lookup uses deterministic substring matching and preserves Catalog order.
Metadata lookup requires equality against the explicitly named field. There is
no fuzzy search, relevance score or behavioral profiling.

## Supported initial phrases

### EXPLAIN

- What is NEXAH?
- What is Orientation?
- What does Orientation mean here?
- What is the Library?
- What is Explore?
- What is the Living Atlas?
- What is ORION?
- What is the Laboratory?
- Where should I begin?

Declared aliases are stored beside each explanation record.

### FIND

- What is Odyssey 2040?
- Find Odyssey 2040.
- Explicit publication titles through the declared lookup prefixes.
- Exact Catalog key, form, type or series through the declared metadata forms.

Results expose whether a Work is readable locally or is only a Catalog record,
whether a source link exists and which review state was recorded.

### ORIENT

- Show me the language books.
- Take me to the mathematical research.
- I would rather begin with a journey.

All results resolve existing door identifiers.

### ORION_AVAILABLE

Only the exact canonical registered request is recognized:

> I want to understand how this observation reaches the calendar.

The result offers the existing confirmation flow. The Threshold never creates
or executes a report.

### CLARIFY

- I feel lost.
- Show me orientation.

Each produces one finite set of three recorded choices. There is no second
open-ended dialogue turn.

### BOUNDARY

All other wording receives an honest unsupported boundary. General knowledge,
therapy, inferred relationships and newly invented routes are outside scope.

## Limitations

The Threshold understands only the reviewed phrases, declared aliases and
explicit lookup forms recorded above. Adding language coverage requires a
reviewed record change. Model-assisted language remains a separate future
architecture decision.
