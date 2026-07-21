# NEXAH Experience

The first public, local-first NEXAH experience.

**Publication status:** locally prepared candidate; no public release or
production deployment has been declared.

This is an independent application repository. It does not belong to ORION and
does not redefine the frozen ORION v1 Architecture Baseline.

The adopted
[NEXAH Ecosystem Constitution v1.0](https://github.com/Scarabaeus1031/NEXAH/blob/main/GOVERNANCE/ECOSYSTEM_CONSTITUTION.md)
is the highest governance baseline. Under it, Experience presents: this
repository owns public presentation, navigation and temporary interaction
state, but not Framework semantics, ORION reports, Library identity, Living
Atlas relationships or Human interpretation.

## Current Alpha scope

- Home, Explore, Laboratory, editorial Library, About and simplified Atlas
- one complete build-time ORION Orientation Journey
- seven existing NEXAH publications with reusable static detail pages
- seven calm reading spaces containing 79 recorded publication pages
- a Living Atlas of concepts, editorial operators, themes and explicit relationships
- one continuous path from the ORION boundary through the Library and Living Atlas to a quiet departure
- one real visitor question held transparently for the duration of a browser-tab session
- responsive desktop and mobile layouts
- accessibility and reduced-motion support
- no backend, provider, API, account, CMS, persistence or deployment

## Local workflow

```sh
pnpm install
pnpm dev
pnpm verify
```

The reproducible publication check requires an external, immutable ORION
checkout:

```sh
ORION_REPOSITORY_PATH=/absolute/path/to/nexah-orion pnpm verify
```

See [`docs/PUBLICATION_BASELINE.md`](docs/PUBLICATION_BASELINE.md) for the exact
build boundary, verified local result and remaining publication blockers.
The deployment handoff, immutable inputs and production smoke test are prepared
in [`docs/DEPLOYMENT_READINESS.md`](docs/DEPLOYMENT_READINESS.md).

Sprint 02 generates one canonical `TransformationReport` and `LyraExplanation`
from the existing local ORION checkout during the build. The browser remains
static and calls no ORION process, LLM or external service.

Sprint 03 adds the Experience presentation of the Library. The canonical
Library Registry remains outside this repository; the presentation has no
ORION or LYRA dependency and does not reinterpret reports or evidence.

Sprint 04 adds the Living Atlas as a static editorial relationship layer. Its
registries and links are curated, inspectable and independent from ORION.

Sprint 05 curates one uninterrupted orientation journey across the existing
layers. The Experience owns only its sequence and presentation; ORION, the
Library and the Atlas retain their separate authority.

Sprint 06 adds the Orientation Interface. Any question may be carried through a
transient local session, but only the already supported canonical LYRA wording
opens the existing ORION report. Unsupported wording stops at a visible
translation boundary; nothing is inferred or substituted.

Sprint 07 turns every recorded publication into a static Reading Space. The
Reader owns page flow, chapter navigation, image viewing and calm return paths;
publication metadata remains with the Library and every displayed relationship
continues to come explicitly from the Living Atlas.

The Laboratory adds a minimal editorial bridge to the public NEXAH Repository.
It explains the research process and the distinction between living work and
published work without mirroring repository content or introducing a runtime
dependency.

## Public references

- Public Experience: [nexah.de](https://nexah.de) — domain and TLS verification
  remain an Operations launch item.
- Canonical Framework and Governance:
  [`Scarabaeus1031/NEXAH`](https://github.com/Scarabaeus1031/NEXAH)
- Contribution boundary: [`CONTRIBUTING.md`](CONTRIBUTING.md)
- Security reporting: [`SECURITY.md`](SECURITY.md)
- Community conduct: [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)

The approved public repository identity is `NEXAH-Experience`. Repository
creation, remote configuration and publication remain GitHub owner actions;
this local repository has not been renamed.

## Licensing

Original software is licensed under the [Apache License 2.0](LICENSE).
Original documentation, specifications, research, books and visual material
are licensed under [CC BY 4.0](LICENSE-DOCS.md) where applicable. Third-party,
publication and source-derived material retains its stated terms. See the
complete [Licensing Scope](LICENSES.md).
