# Experience Deployment Readiness

## Status

**Public deployment observed; exact deployed artifact reconciliation pending.**

On 1 August 2026, [`https://nexah.de/`](https://nexah.de/) and the public
[`Laboratory`](https://nexah.de/laboratory/) returned live content over HTTPS.
This verifies reachability and visible presentation only. The deployed source
revision, artifact manifest and rollback identity remain unverified.

On 13 August 2026, a read-only recheck confirmed that
[`https://nexah.de/`](https://nexah.de/), the public
[`Visitor Guide`](https://nexah.de/visitor-guide/) and
[`https://nexahedron.com/`](https://nexahedron.com/) remained reachable. The
visible pages did not expose a 40-character source commit SHA. This confirms
public availability only: the deployed source revision, artifact manifest and
rollback identity remain **unknown**.

> Original pre-deployment status, 22 July 2026: **Locally reproducible;
> external publication and deployment remain pending.**

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

The approved ORION repository is
`https://github.com/Scarabaeus1031/NEXAH-ORION`. Publication verification uses
the immutable revision `d34fbb2f99334534f4db89465a29f8bdb16d14d3` and must
not replace it with a moving branch or handwritten report data.

## Build and verification

```sh
corepack enable
pnpm install --frozen-lockfile
ORION_REPOSITORY_PATH=/absolute/path/to/nexah-orion pnpm verify
```

Verified locally on 22 July 2026:

- Astro check: zero errors, warnings or hints;
- tests: 55 passed;
- static output: 204 HTML pages;
- internal links: no broken internal links.

## Expected deployment artifact

The deployable artifact is the generated `dist/` directory from the verified
Experience and ORION revisions. It excludes source repositories, `.workspace`,
dependencies, caches, environment files, credentials and private material.

Before upload, record an artifact inventory containing total file count, total
size and a SHA-256 manifest. Generate it only from the final immutable candidate.

## OVH publication workflow

The production host is the OVH Web Hosting plan
`nexahdy.cluster129.hosting.ovh.net`. Both `nexah.de` and `www.nexah.de` serve
the `www` directory. The deployment credential belongs only to the `nexahdy`
FTP/SFTP user and is stored in the local macOS Keychain under the service name
`NEXAH OVH SFTP`; it is never stored in this repository.

After a successful `pnpm verify`, publish the current `dist/` artifact with:

```sh
pnpm deploy:ovh
```

The nominal 100 MB OVH plan does not provide enough usable space for two copies
of this site. Before changing production, the deployment therefore downloads a
complete timestamped copy of the current `www` release to the sibling directory
`NEXAH deployment backups`. It then removes abandoned remote staging
directories and synchronizes the verified artifact to `www`. Individual files
are uploaded via temporary names, and interrupted transfers can be resumed by
running the command again. Transfers are deliberately sequential because the
shared SFTP host does not reliably create nested directories concurrently.
The script refuses artifacts above the hosting threshold. Run the production
smoke test immediately after synchronization.

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

Only hosting, DNS, TLS, legal hosting facts and deployment authorization remain.
Public remotes, immutable ORION input and licensing are recorded.
