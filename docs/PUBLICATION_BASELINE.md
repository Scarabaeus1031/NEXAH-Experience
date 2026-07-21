# Experience Publication Baseline

## Status

**Publication candidate — locally publication-ready.**

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

On 21 July 2026 the local workspace produced:

- Astro check: 0 errors, warnings or hints;
- automated tests: 53 passed;
- static build: 195 HTML pages;
- internal link check: 195 pages with no broken internal links.

The local Experience baseline before license adoption is commit
`a1e031cb51978ca1207851cc7f292a4a5c37b115`; the current clean commit also
contains the approved licensing and repository identity. Its executable alpha
entered at `28d099c89a109a58385335652c394242ebea278d`. Generated ORION source
content is present in local committed ORION executable baseline `0a9c031…`;
later ORION publication commits do not change consumed Python sources. A public
baseline still requires public immutable repository URLs and revisions.

## Publication gates

- Apache 2.0 for software and CC BY 4.0 for original documentation and visual
  material are recorded in `LICENSE`, `LICENSE-DOCS.md` and `LICENSES.md`;
- approved repository identity is `NEXAH-Experience`; repository creation and
  remote configuration require GitHub owner action;
- ORION public remote and immutable revision are not yet available;
- automated public CI cannot be finalized until the ORION source location is
  public and pinned;
- canonical host, TLS and redirect behavior remain external Operations work;
- legal hosting and tax/privacy facts remain owner or hosting input.

No publication gate may be hidden by committing generated output alone.
