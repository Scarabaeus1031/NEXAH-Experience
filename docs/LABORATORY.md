# NEXAH Laboratory

The Laboratory is the public bridge between the NEXAH Experience and the
living NEXAH Repository. It makes the research process legible without copying
the Repository into the website or turning unfinished work into publication.

## 1. Laboratory information architecture

The section contains four deliberately shallow rooms:

```text
Laboratory
├── Research process
├── Repository
└── Current work
```

- **Laboratory** explains why the section exists and distinguishes it from the
  Library and Living Atlas.
- **Research process** describes the editorial movement from observation to
  publication.
- **Repository** explains the living source and provides the canonical external
  link.
- **Current work** names five durable fields without presenting a roadmap,
  sprint board or status dashboard.

No deeper hierarchy is needed. Detailed research remains in the Repository.

## 2. Navigation integration

`Laboratory` is a top-level destination beside Explore, Library, Living Atlas
and About. A quiet local navigation connects the four Laboratory rooms. The
section does not replace Explore and is not inserted into the Orientation
journey.

Every room has an explicit continuation. The Repository room returns visitors
to the Library, Living Atlas or Explore, so the external GitHub link is never a
dead end in the public Experience.

## 3. Repository integration

The canonical public repository link is:

<https://github.com/Scarabaeus1031/NEXAH>

The Experience uses a normal external link. It does not call the GitHub API,
mirror repository content, infer repository status or introduce a runtime
dependency. The Repository remains authoritative for source code,
architecture, documentation, publication sources, experiments and
implementation records.

## 4. Content review

The Laboratory copy is intentionally high level. It explains:

- how questions can become observations, visual systems and publications;
- why review is an explicit threshold;
- why unfinished research remains visible as unfinished;
- how the public Library differs from living repository work; and
- which durable fields are currently held open.

Dates, sprints, issue counts, activity feeds and implementation details are
excluded because they would age quickly and duplicate the Repository.

## 5. Authority review

| Place | Owns | Does not own |
|---|---|---|
| Laboratory | editorial explanation of the research process | research records, publications, relationships or evidence |
| Repository | living project sources and their history | public Experience presentation |
| Library | published works and editorial metadata | unfinished repository work |
| Living Atlas | explicit curated relationships | inferred research connections |
| Experience | presentation, navigation and context | the authority of any source it links |

The Laboratory summarizes, contextualizes and links. It does not validate
research, promote evidence, execute ORION or reinterpret Library and Atlas
material.

## 6. Recommended improvements

### Now

- Keep the Laboratory shallow and preserve one primary action per room.
- Review the external Repository link whenever the canonical project location
  changes.
- Maintain explicit return paths from Repository to Library, Living Atlas and
  Explore.

### Later

- Add editorial links from selected publications to a specific repository
  source only when a stable, curated source identifier exists.
- Add a small number of named research notes only after their publication
  threshold and ownership have been defined.

### Never

- Do not add activity feeds, issue trackers, dashboards, inferred status,
  semantic recommendations or duplicated repository documentation.
- Do not treat repository presence, recency or activity as evidence quality.

## Sprint 02 integration review

### 1. Laboratory Integration Review

The existing four-room structure remains sufficient. No new route was added.
The landing page now introduces one primary publication, a compact Repository
Map, the Project README and the existing paths into Process, Repository and
Current Work. The Repository room contains the complete public handoff.

### 2. Featured Publication Review

**The Cartography Laboratory** is the primary reading threshold because it is
already a visitor's guide to the Repository and its research wings. It is
resolved through Catalog Key `arena:5386766`; the Laboratory does not maintain
a second publication record.

The sequence remains explicit:

```text
Laboratory
→ Publication Record
→ local Reading Selection, when available
→ Original Publication on Are.na
```

`NEXAH Orientation Design` and `NEXAH Atlas — A Cartography of Perspectives`
form a small secondary reading list. They are resolved through the same
Publication Catalog projection. Availability labels come from the presence of
an existing local Library and Reader record, not from Laboratory copy.

### 3. Repository Map Design

The Repository already contains the authoritative
[`REPOSITORY_MAP.md`](https://github.com/Scarabaeus1031/NEXAH/blob/main/REPOSITORY_MAP.md).
It is a comprehensive Markdown navigation document rather than a stable data
manifest. The Experience therefore keeps one deliberately small, typed
curatorial projection in `src/data/laboratory/repository-map.ts`.

The projection contains only stable public territories and canonical links:
Research, Orientation Language, Implementation, Applications, Living Library,
Editorial Operating System, Architecture and Experimental. It excludes files,
generated output, caches, vendors, workspaces, archives and private material.
Every item remains subordinate to the authoritative Repository Map.

### 4. README Integration Review

The Project README is linked directly at
[`README.md`](https://github.com/Scarabaeus1031/NEXAH/blob/main/README.md). The
Experience explains that it provides the project overview, six coordinated
responsibilities, authority boundaries and current public entry points. No
README prose is copied wholesale into the site.

`Browse the Repository` and `Read the Project README` are separate actions:
the first opens the root working environment; the second opens the recommended
orientation document.

### 5. Source and Authority Review

| Projection | Authority |
|---|---|
| Featured and related publication links | existing Publication Catalog |
| Reading Selection availability | existing local Library and Reader records |
| Original Publication relationship | Catalog `sourceUrl` |
| Repository address | recorded NEXAH Git remote and existing project data |
| Repository structure | Project README and `REPOSITORY_MAP.md` |
| Public Repository Map display | small subordinate Laboratory configuration |

The Laboratory consumes these sources. It does not change their identity,
status, relationships, evidence or authority.

### 6. Update and Maintenance Model

Publication Catalog updates are reflected after the Catalog projection and the
Experience are rebuilt. Original Publication links remain sourced from the
Catalog. The Repository Map is **not live-synchronized**: its small list of
stable territories requires a curatorial update only when a major public
territory changes. The Project README and authoritative Repository Map links
always hand the visitor to the Repository versions selected by GitHub.

```text
Repository structure changes
→ update README.md or REPOSITORY_MAP.md in NEXAH
→ review the small Laboratory map only if a major territory changed
→ rebuild the Experience

Publication metadata changes
→ regenerate the existing Publication Catalog projection
→ rebuild the Experience
```

### 7. Navigation Review

The global navigation remains unchanged. README, Repository Map and featured
publication links live inside the Laboratory. The Repository room returns to
Laboratory, Library, Living Atlas and Explore, preserving calm global
navigation and avoiding dead ends.

### 8. Implementation Summary

- one featured publication section sourced by Catalog Key;
- two existing secondary publication links;
- one reusable Repository Map component;
- one typed, high-level Repository Map projection;
- distinct Project README and Repository handoffs;
- local, network-independent consistency checks.

No API, database, GitHub client, runtime filesystem scan or network-dependent
build step was introduced.

### 9. Verification Results

The repository test suite verifies Catalog identity, Reading Selection
availability, canonical URLs, unique map entries, safe public paths and the
absence of Laboratory runtime dependencies. When `NEXAH_REPOSITORY_PATH` is
set, configured README and map paths are additionally checked against the
local Repository. Rendered desktop and compact-mobile review remains part of
the sprint closeout.

### 10. Remaining Curatorial Decisions

- Review the three-publication selection when the Catalog gains another
  explicitly Laboratory-owned work.
- Review the small map only when the authoritative Repository Map adds,
  removes or renames a major public territory.
- Do not expose individual experiments until a stable public editorial entry
  and status language exist.
