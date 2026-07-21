# ORION Experience Build Integration

## Status

- Sprint: Product Sprint 02 — Prove the Existing Architecture
- Integration type: deterministic build-time execution
- ORION authority: unchanged
- Browser output: static HTML, CSS and minimal client-side journey state
- Runtime transport: intentionally absent

## Purpose

Sprint 02 verifies that the frozen LYRA and Transformation architecture can
already produce the structured content rendered by the Experience. It does not
add a new execution path.

The integration uses the existing composition unchanged:

```text
HumanLanguageRequest
        ↓
LyraOrientationExecutor
        ↓
TransformationEngine
        ↓
TransformationReport
        ↓
LyraExplanation
```

The Reasoning Boundary, `OrientationRequest`, `FakeBackend` and
`OrientationResponse` are not involved.

## Why build-time integration is correct now

The Experience is a static Astro application. The browser cannot and should not
import a local Python package. Connecting browser input to Python would require
a transport and a continuously available process. No such boundary exists in
the frozen baseline, and Sprint 02 is not authorized to invent one.

Build-time execution proves the existing architecture without creating a
service:

```text
Experience build
        ↓
scripts/generate_orion_interaction.py
        ↓
existing local ORION checkout
        ↓
existing LyraOrientationExecutor
        ↓
exact TransformationReport + LyraExplanation
        ↓
src/data/generated/orion-interaction.json
        ↓
thin TypeScript projection
        ↓
static Astro rendering
```

The generated JSON is reproducible and records the ORION version plus a digest
of the ORION Python source used for generation. It contains the complete report,
not a rewritten report fixture.

## Canonical request

Sprint 02 uses the already supported LYRA request:

> I want to understand how this observation reaches the calendar.

The Experience supplies an immutable `OrientationObject` whose current
Representation is `Observation`. LYRA resolves the existing target `Calendar
Projection`; the Transformation Engine selects only registered edges and
returns the existing blocked report with its exact path, issues, validation,
evidence and provenance.

No synonym, domain mapping or translation rule is added.

## Boundaries

| Responsibility | Owner | Experience behavior |
|---|---|---|
| canonical language translation | LYRA | sends the existing canonical utterance |
| route selection | Transformation Engine | renders the returned path unchanged |
| contracts and invariants | ORION registries | exposes returned versions and checks |
| blockers and evidence | TransformationReport | preserves kind, reason, location and level |
| human explanation | LYRA | renders the returned explanation sentences |
| layout and disclosure | Experience | chooses typography, grouping and navigation only |
| meaning and next action | Human | may inspect, reflect, continue or leave |

The TypeScript adapter performs no routing, validation, evidence ranking,
translation or inference. It exposes generated fields with presentation-friendly
property names while retaining the exact report.

## Rendering responsibilities

The Experience may:

- label the current screen;
- lay out the registered path in sequence;
- show issue records and validation fields;
- disclose evidence and provenance progressively;
- render LYRA's exact explanation sentences;
- preserve optional Reflection and Departure actions.

The Experience may not:

- convert `blocked` into success;
- claim that a target Representation was produced;
- omit a blocker to improve presentation;
- infer a cause or recommendation from an issue;
- upgrade evidence or validation;
- create Library evidence from source references.

The existing static Library remains independent and is not integrated in this
sprint.

## Why runtime integration is postponed

A future browser-to-ORION interaction requires an explicit transport boundary.
That boundary must define process ownership, request serialization, error
semantics, version compatibility, lifecycle, security and local-versus-remote
deployment. None of those responsibilities belongs in a presentation adapter.

Possible transports are intentionally not selected here. Any future choice must
be reviewed outside Sprint 02 and must consume ORION without moving its
authority into the Experience.

## Reproduction

From the Experience repository:

```sh
pnpm generate:orion
pnpm verify
```

When the ORION checkout is not an ancestor of the Experience repository, set
`ORION_REPOSITORY_PATH` to that checkout for the build command. The path is used
only by the build process and is never serialized into browser assets.

The generator requires Python 3.10 or newer, matching the frozen ORION source.
It selects a compatible local Python executable deterministically. Set
`ORION_PYTHON` when a specific executable is required.
