# Information Architecture

## Public places

The permanent public navigation stays intentionally small:

```text
Home
Explore
Library
Living Atlas
About
```

Home opens the experience. Explore offers six overlapping editorial doors.
Library exposes the complete Publication Catalog view. Living Atlas reveals
explicitly curated relationships. About explains purpose, audience and
authority without exposing technical architecture.

The homepage enters the static Orientation Threshold before any existing ORION
confirmation flow. The Threshold can explain reviewed project concepts, locate
explicit publication records, expose Navigation Catalog doors or detect the one
registered canonical ORION request. It cannot create a request or report.

```text
Explore
├── Foundations
├── Language
├── Laboratory
├── Atlas (publications)
├── Mathematics
└── Journeys
```

These are Navigation Catalog entry doors, not publication categories. The
Atlas door at `/explore/atlas/` remains separate from Living Atlas at `/atlas/`.

Publications open into a Reading Space without adding a permanent navigation
item. The Reader is a room within the Library, not a separate content authority:

```text
Library → Publication → Reader → Atlas → Continue or return
```

## Orientation Journey

The journey is temporary state, not global navigation:

```text
Home
  ↓
Orientation Threshold
  ├─ EXPLAIN / FIND / ORIENT / CLARIFY / BOUNDARY
  └─ ORION_AVAILABLE
          ↓
Visitor Question
  ↓
Confirmation
  ↓
Existing Language Boundary
  ├─ Unsupported → Visible Translation Boundary
  │                  ├─ edit the question
  │                  ├─ enter Library or Atlas independently
  │                  └─ departure
  │
  └─ Supported → ORION Report
                      ↓
               The Cartography Laboratory
                      ↓
             Observation → Observe → Attention
                      ↓
               The Wonder Operator
                      ↓
                   Departure
```

The Human explicitly confirms the transition from Question to Orientation.
Unsupported language stops before ORION and receives no inferred editorial
recommendation. A supported canonical request opens the existing deterministic
report.

Evidence remains inspectable before the journey enters the Library. Reflection
is optional and cannot silently create a new request. The curated continuation
through the Library and Atlas is one path, while a quiet departure remains
available at every movement.

## Page responsibilities

| Place | Primary question | Must not become |
|---|---|---|
| Home | What are you trying to understand? | search box or chatbot lobby |
| Explore | Where would you like to begin? | exclusive classification or shelf wall |
| Library | What exists? | hidden recommendation system or second source of publication identity |
| Reader | What does this publication let me see? | catalogue page, PDF utility or infinite feed |
| Living Atlas | Which explicit relationships exist? | publication shelf, research poster or inferred graph |
| About | Why does NEXAH exist? | technical architecture manual |
| Orientation | What can be seen, supported and bounded? | answer feed |
| Reflection | What changed for you? | agent conversation or mandatory form |

## Visibility

- **NEXAH** is visible from arrival as the place and promise.
- **ORION** is visible only when an existing deterministic report is available,
  and then only through its route, status and boundary. It never becomes a
  persona.
- **LYRA** remains a language quality, not a visible assistant.
- **Library** appears first as an optional public place and later as editorial
  depth after an orientation. It is not an evidence trail.
- **LUCY** does not appear as a product name or component. The Reflection screen
  reserves a voluntary human space.

## Departure

Every major state offers a safe route back or out. Departure contains no
confirmation trap, retention prompt or automatic new question. The orientation
remains a map, not a decision.
