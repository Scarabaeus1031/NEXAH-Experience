# NEXAH Version 1 Editorial Implementation Report

## Files changed

### NEXAH Experience

- `README.md`
- `.github/REPOSITORY_METADATA.md`
- `CITATION.cff`
- `src/components/Brand.astro`
- `src/components/SiteFooter.astro`
- `src/components/SiteHeader.astro`
- `src/components/about/EcosystemMap.astro`
- `src/data/library/categories.ts`
- `src/layouts/BaseLayout.astro`
- `src/pages/accessibility.astro`
- `src/pages/about.astro`
- `src/pages/atlas-of-atlases/index.astro`
- `src/pages/explore/index.astro`
- `src/pages/imprint.astro`
- `src/pages/index.astro`
- `src/pages/laboratory/index.astro`
- `src/pages/laboratory/repository.astro`
- `src/pages/library.astro`
- `src/pages/privacy.astro`
- `src/pages/visitor-guide.astro`
- `src/styles/global.css`
- `src/threshold/knowledge.mjs`
- `tests/site.test.mjs`
- `NEXAH_EXPERIENCE_FINAL_EDITORIAL_REPORT.md`
- `NEXAH_V1_EDITORIAL_ARCHITECTURE_UPDATE.md`
- `NEXAH_V1_EDITORIAL_IMPLEMENTATION_REPORT.md`
- `NEXAH_WEBSITE_RELEASE_CANDIDATE_AUDIT.md`

The Experience commit also records the approved but previously uncommitted
Version 1 front door, Visitor Guide, footer, accessibility and legal-page
presentation on which this terminology update depends.

### NEXAH Research & Framework

- `README.md`
- `MANIFESTO.md`
- `.github/REPOSITORY_METADATA.md`
- `CITATION.cff`
- `pyproject.toml`
- `REPOSITORY_MAP.md`
- `ARCHITECTURE/README.md`
- `ARCHITECTURE/SYSTEM_STATE.md`

### ORION

- `.github/REPOSITORY_METADATA.md`

The public GitHub descriptions for `NEXAH`, `NEXAH-Experience` and
`NEXAH-ORION` were updated to match their repository metadata.

## Terminology updated

- NEXAH is consistently the Orientation Ecosystem.
- `Designing Human Orientation in Complex Systems.` is the default public
  positioning statement.
- Orientation Science is the overarching research programme.
- Orientation Cartography is a research discipline within Orientation Science.
- Orientation Design is the applied discipline within Orientation Science.
- The Atlas of Atlases is a core research project.
- The Living Atlas remains the living relationship map.
- The Human Orientation Atlas is the long-term publication and educational
  series.
- The Laboratory is the experimental environment.
- The Library is the curated publication collection.
- ORION remains the certified deterministic Core within the ecosystem.
- Recorded publication titles, historical sources, archived material and frozen
  ORION certification documents were not changed.

## Verification

- NEXAH Experience: 56 tests passed.
- Astro: 0 errors, 0 warnings and 0 hints.
- Static website: 206 pages built.
- Internal links: no broken links.
- NEXAH Research & Framework: pytest suite completed successfully.
- ORION public-surface tests: 3 passed.
- ORION’s complete working-copy suite retains two pre-existing cross-repository
  failures caused by the documented NEXAHEDRON canonical-content fingerprint
  mismatch; the editorial metadata change does not touch that dependency.
- Terminology scans found no current public definition of NEXAH as Orientation
  Cartography, Orientation Design, an orientation space or a Laboratory.
- `git diff --check` is clean for the editorial changes.

## Remaining editorial questions

No terminology question remains in the approved hierarchy.

NEXAHEDRON has no public repository in the reviewed GitHub organization, so no
repository description could be updated there. Its established public role
remains the Human-facing reference implementation within NEXAH.
