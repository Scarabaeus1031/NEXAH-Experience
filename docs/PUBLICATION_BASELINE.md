# Experience Publication Baseline

## Status

**Publication candidate — not yet releasable.**

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

The first local Experience baseline is commit
`28d099c89a109a58385335652c394242ebea278d`. Its generated ORION source content
is present in local committed ORION baseline `0a9c031…`; subsequent ORION
commit `f16adc9…` adds compatibility evidence without changing consumed Python
sources. A public baseline still requires public immutable repository URLs and
revisions.

## Publication blockers

- repository-wide license requires owner approval;
- public repository identity and remote require owner/GitHub action;
- ORION public remote and immutable revision are not yet available;
- automated public CI cannot be finalized until the ORION source location is
  public and pinned;
- canonical host, TLS and redirect behavior remain external Operations work;
- legal hosting and tax/privacy facts remain owner or hosting input.

No blocker may be hidden by committing generated output alone.
