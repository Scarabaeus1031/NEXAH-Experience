# Contributing to NEXAH-Experience

NEXAH Experience owns presentation, navigation, accessibility and temporary
interaction state. Contributions must stay inside that boundary.

## Before contributing

1. Read the adopted [NEXAH Ecosystem Constitution
   v1.0](https://github.com/Scarabaeus1031/NEXAH/blob/main/GOVERNANCE/ECOSYSTEM_CONSTITUTION.md).
2. Read [`docs/README.md`](docs/README.md) and the document governing the room
   or interaction being changed.
3. Confirm that the proposed change belongs to Experience.
4. Preserve the authority of ORION reports, Library records, Living Atlas
   relations and Human interpretation.

## Accepted scope

- presentation and responsive layout;
- accessible navigation and reading flow;
- static rendering of already owned source data;
- temporary browser-tab interaction state;
- Experience documentation and verification.

Changes to Framework semantics, ORION planning, Library identity, publication
metadata authority or Living Atlas relationship meaning belong to their
canonical owners, not this repository.

## Verification

The full local check is:

```sh
ORION_REPOSITORY_PATH=/absolute/path/to/nexah-orion pnpm verify
```

The referenced ORION checkout must be the exact revision declared by the
publication candidate. Generated ORION output remains derived and must not be
edited by hand.

## Publication status

The repository is a locally prepared publication candidate under the approved
identity `NEXAH-Experience`. A public contribution workflow begins after the
repository and remote exist and the published baseline is identified.

## Contribution licensing

Software contributions are submitted under the
[Apache License 2.0](LICENSE). Original documentation, specifications,
research, books and visual material are submitted under
[CC BY 4.0](LICENSE-DOCS.md) where applicable. Contributors must preserve
third-party licenses and provenance. See [Licensing Scope](LICENSES.md).
