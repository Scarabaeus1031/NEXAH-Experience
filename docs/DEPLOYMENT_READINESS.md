# Experience Deployment Readiness

## Status

**Locally reproducible; external publication not yet authorized.**

NEXAH Experience is a static Astro site. The browser contains no Python
runtime, ORION service, provider call, account system, persistence layer or
hidden inference.

## Immutable inputs

A deployment candidate must record:

- Experience commit SHA;
- ORION public repository URL and exact commit SHA;
- generated ORION source digest from
  `src/data/generated/orion-interaction.json`;
- Node.js and pnpm versions; and
- canonical host.

The current local ORION working tree is not yet a public immutable input. A
deployment must not replace it with handwritten report data.

## Build and verification

```sh
corepack enable
pnpm install --frozen-lockfile
ORION_REPOSITORY_PATH=/absolute/path/to/nexah-orion pnpm verify
```

Verified locally on 21 July 2026:

- Astro check: zero errors, warnings or hints;
- tests: 53 passed;
- static output: 195 HTML pages;
- internal links: no broken internal links.

## Expected deployment artifact

The deployable artifact is the generated `dist/` directory from the verified
Experience and ORION revisions. It excludes source repositories, `.workspace`,
dependencies, caches, environment files, credentials and private material.

Before upload, record an artifact inventory containing total file count, total
size and a SHA-256 manifest. Generate it only from the final immutable candidate.

## External configuration

The hosting owner must provide:

- hosting provider and deployment target;
- canonical host: `nexah.de` or `www.nexah.de`;
- DNS records for both names;
- TLS certificate coverage for both names;
- permanent redirect from the non-canonical host;
- server location, log recipients and log-retention period; and
- rollback target or previous immutable deployment.

## Production smoke test

After deployment verify:

1. canonical host returns HTTPS without certificate error;
2. alternate host performs one permanent redirect to the canonical host;
3. Home, Library, Atlas, Laboratory, Reader, Orientation and legal pages load;
4. internal navigation and the canonical orientation journey work;
5. `robots.txt`, sitemap, canonical links, Open Graph data and favicon resolve;
6. Contact, Privacy and Imprint are reachable from the footer;
7. `contact@nexah.de` receives a controlled test message; and
8. no browser request exposes a local path or calls ORION, an LLM or a provider.

## Remaining gates

Only owner-approved license, public remote, immutable ORION revision, hosting,
DNS, TLS, legal hosting facts and deployment authorization remain.
