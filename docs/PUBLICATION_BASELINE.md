# Experience Publication Baseline

## Status

**Publication candidate — source repository publication-ready.**

The Experience is a static presentation repository. It does not contain the
ORION runtime, Framework, canonical Library Registry or a backend service.

## Reproducible build contract

The checked build requires:

- Node.js and pnpm compatible with `pnpm-lock.yaml`;
- Python 3.10 or newer;
- an external ORION checkout selected with `ORION_REPOSITORY_PATH`;
- the exact ORION revision approved for the publication candidate; and
- the local static assets and generated catalog projection tracked by this
  repository.

```sh
pnpm install --frozen-lockfile
ORION_REPOSITORY_PATH=/absolute/path/to/nexah-orion pnpm verify
```

`src/data/generated/orion-interaction.json` records the ORION repository
version and a SHA-256 digest over the consumed ORION Python sources. It is a
derived build artifact and must be regenerated, never interpreted as ORION
authority.

## Current verified result

On 22 July 2026 the local workspace produced:

- Astro check: 0 errors, warnings or hints;
- automated tests: 55 passed;
- static build: 204 HTML pages;
- internal link check: 204 pages with no broken internal links.

The Experience baseline before license adoption is commit
`a1e031cb51978ca1207851cc7f292a4a5c37b115`; subsequent publication work
records the approved licensing and repository identity without rewriting that
history. Its executable alpha entered at
`28d099c89a109a58385335652c394242ebea278d`. Generated ORION source
content is consumed from the public ORION publication commit
`d34fbb2f99334534f4db89465a29f8bdb16d14d3`; that publication commit does not
change the consumed Python sources.

## Publication gates

- Apache 2.0 for software and CC BY 4.0 for original documentation and visual
  material are recorded in `LICENSE`, `LICENSE-DOCS.md` and `LICENSES.md`;
- approved repository identity is `NEXAH-Experience` at
  `https://github.com/Scarabaeus1031/NEXAH-Experience`;
- ORION is consumed from the public immutable revision recorded above;
- public CI checks out that exact ORION revision and runs the complete
  Experience verification command;
- canonical host, TLS and redirect behavior remain external Operations work;
- legal hosting and tax/privacy facts remain owner or hosting input.

No publication gate may be hidden by committing generated output alone.
