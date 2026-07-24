# NEXAH Version 1 Editorial Architecture Update

## Canonical editorial rule

Every current public entrance should begin from the same identity:

> **NEXAH**<br />
> **The Orientation Ecosystem**<br />
> **Designing Human Orientation in Complex Systems.**

`Orientation Ecosystem` is the identity. `Designing Human Orientation in
Complex Systems` is the public positioning statement. Orientation Cartography,
Orientation Design, the Atlas of Atlases, the Human Orientation Atlas, the
Laboratory and the Library are disciplines or initiatives within NEXAH. None
of them is an alternative definition of NEXAH.

The existing public-system map remains a different, compatible view:
nexah.de, the NEXAH Repository, ORION and NEXAHEDRON are public places with
distinct responsibilities. The initiative hierarchy must not replace that
authority map.

## Website locations and replacement text

| Location | Current issue | Proposed replacement |
|---|---|---|
| `src/layouts/BaseLayout.astro` — default title | Defines the whole project as Orientation Cartography. | `NEXAH — The Orientation Ecosystem` |
| `src/layouts/BaseLayout.astro` — default description | Describes only the cartographic activity. | `NEXAH is the Orientation Ecosystem for designing Human orientation in complex systems through research, tools, maps, publications and applications.` |
| `src/components/Brand.astro` | `Orientation by design` is compatible but does not carry the frozen positioning. | `Designing Human Orientation` in the compact brand; use the complete sentence `Designing Human Orientation in Complex Systems.` wherever line length permits. |
| `src/pages/index.astro` — hero eyebrow | Already correct. | Keep `NEXAH — The Orientation Ecosystem`. |
| `src/pages/index.astro` — hero headline | Strong value statement, but the canonical positioning is not yet visible. | `Designing Human Orientation in Complex Systems.` |
| `src/pages/index.astro` — hero lead | Correctly names ecosystem participants, but does not explain that NEXAH is the umbrella. | `NEXAH connects research, tools, maps, publications and applications while keeping provenance, limits and Human judgment visible.` |
| `src/pages/index.astro` — “Two ways into the field” | “The field” is undefined and may make the featured entries look like the whole project. | Eyebrow: `Two ways into the ecosystem`. Heading: `Begin with a research project or a research discipline.` |
| `src/pages/index.astro` — Atlas feature | Describes the Atlas mainly as a visual doorway. | Lead: `A conceptual map of relationships between knowledge systems, representations and reference spaces.` Supporting sentence: `Enter one core research project within the wider NEXAH ecosystem.` |
| `src/pages/about.astro` — page title | Defines NEXAH as Orientation Cartography. | `About NEXAH — The Orientation Ecosystem` |
| `src/pages/about.astro` — meta description | Defines the project through mapping alone. | `Meet NEXAH, the Orientation Ecosystem for designing Human orientation in complex systems.` |
| `src/pages/about.astro` — opening lead | `NEXAH is orientation cartography` is the clearest competing definition. | `NEXAH is the Orientation Ecosystem. It connects research, tools, maps, publications and applications for designing Human orientation in complex systems.` |
| `src/pages/about.astro` — ecosystem heading | `One place` conflicts with the Visitor Guide’s four public places. | `One ecosystem.` / `Complementary disciplines and initiatives.` |
| `src/pages/about.astro` — ecosystem paragraph | `One orientation cartography connects…` makes the discipline the umbrella. | `Orientation Cartography, Orientation Design, the Atlas projects, the Laboratory and the Library contribute different forms of research, practice, encounter and publication without collapsing their responsibilities.` |
| `src/pages/about.astro` — NEXAH comparison card | The card says what NEXAH does but not what it is. | `NEXAH` / `Connects complementary disciplines and initiatives so relationships, boundaries and possible directions remain visible.` |
| `src/pages/visitor-guide.astro` — opening lead | Already structurally correct, but can carry the canonical identity more explicitly. | `NEXAH is the Orientation Ecosystem. Its public places and internal initiatives have distinct responsibilities; this guide shows where you are and where to continue.` |
| `src/pages/visitor-guide.astro` — map heading | `Four places` correctly describes public surfaces, not the whole internal ecosystem. | Keep `Four places. Four responsibilities.` Add no discipline list inside this map. |
| `src/pages/laboratory/index.astro` — title | Makes the Laboratory part of “NEXAH Orientation Cartography” rather than NEXAH. | `Laboratory — NEXAH` |
| `src/pages/laboratory/index.astro` — description | Correct activity, missing component relationship. | `The experimental environment within NEXAH where concepts, prototypes, operators and research are developed and validated.` |
| `src/pages/laboratory/index.astro` — lead | Describes only a publication path. | `The experimental environment where questions become concepts, prototypes, operators, research and reviewed publications.` |
| `src/pages/laboratory/repository.astro` — lead | “The Repository is where NEXAH is documented, tested and changed” can make one repository appear to contain the whole ecosystem. | `The Repository preserves and develops NEXAH’s research and framework work. This website remains the public entrance to the wider ecosystem.` |
| `src/pages/library.astro` — title | Makes the Library a subdivision of Orientation Cartography. | `Library — NEXAH` |
| `src/pages/library.astro` — description | Correct but incomplete role definition. | `The curated NEXAH collection of books, essays, visual atlases and educational material about Human orientation.` |
| `src/pages/atlas-of-atlases/index.astro` — description | Defines the project as a visual entrance hall only. | `A core NEXAH research project mapping relationships between knowledge systems, models, representations and reference spaces.` |
| `src/pages/atlas-of-atlases/index.astro` — lead and introduction | “Visual cartography of six fields” is accurate but too narrow as the primary definition. | Lead: `A conceptual framework for relationships between maps and knowledge systems.` Paragraph: `Move through six orientation fields to compare representations, reference spaces, scales and relations.` |
| `src/pages/explore/index.astro` — title | Presents Orientation Cartography as the scope of all exploration. | `Explore the NEXAH Ecosystem — NEXAH` |
| `src/pages/explore/index.astro` — description | Calls all fields and publications “NEXAH orientation cartography.” | `Six editorial doors into the research, maps, publications and practices of the NEXAH Orientation Ecosystem.` |
| `src/threshold/knowledge.mjs` — NEXAH explanation title | `NEXAH is an orientation space` competes with the canonical identity. | `NEXAH is the Orientation Ecosystem.` |
| `src/threshold/knowledge.mjs` — NEXAH explanation | Reduces NEXAH to a research and publication project. | `NEXAH connects research, tools, maps, publications and applications for designing Human orientation in complex systems. It keeps representations, provenance and boundaries visible without replacing Human interpretation.` |
| `src/components/about/EcosystemMap.astro` | Header is correct. Its four entries describe public places, not the six internal initiatives. | Keep the header and four-place map unchanged. Add no new cards; the About prose should explain the separate initiative hierarchy. |
| `src/components/SiteHeader.astro` | Navigation labels are distinct and do not redefine NEXAH. | No change required. `Atlas of Atlases`, `Laboratory` and `Library` correctly appear as destinations within NEXAH. |
| `src/components/SiteFooter.astro` | Navigation and ownership are correct; the brand subtitle inherits the weaker phrase from `Brand.astro`. | Keep links and copyright. Apply the revised compact brand line from `Brand.astro`. |
| `tests/site.test.mjs` | Assertions currently protect only the ecosystem label and old public copy. | Update the editorial assertions to require `The Orientation Ecosystem`, `Designing Human Orientation in Complex Systems`, and the statement that Orientation Cartography is a component rather than the whole project. |

## Repository and metadata locations

| Location | Current issue | Proposed replacement |
|---|---|---|
| `NEXAH-Experience/README.md` — opening | Already establishes the ecosystem and repository ownership correctly. | Keep the ownership paragraph. Add immediately below it: `NEXAH is the Orientation Ecosystem: designing Human orientation in complex systems.` |
| `NEXAH-Experience/.github/REPOSITORY_METADATA.md` — description | Describes the Experience inventory without its umbrella relationship. | `The static public home of NEXAH — The Orientation Ecosystem: Visitor Guide, Library, Atlas, Laboratory and bounded orientation journeys.` |
| Public GitHub description for `NEXAH-Experience` | Currently: “The public NEXAH orientation experience…” | Use the same description as `.github/REPOSITORY_METADATA.md`. |
| `NEXAH/README.md` — opening identity | `Evidence-bound orientation ecosystem` is accurate as a technical qualifier but currently competes with the simpler public identity. | `NEXAH is **The Orientation Ecosystem**, designing Human orientation in complex systems. This Research & Framework Repository preserves its evidence-bound scientific, linguistic, architectural, experimental and historical work.` |
| `NEXAH/README.md` — one-sentence definition | Begins again with `NEXAH is an evidence-bound orientation ecosystem`. | `Within this ecosystem, the Research & Framework Repository makes relationships, limits and possible transitions between bounded representations inspectable and navigable.` |
| `NEXAH/README.md` — repository organization | The six repository subsystems are valid, but may be mistaken for the six public initiatives. | Keep the subsystem table. Introduce it as `The repository organizes six technical and governance responsibilities. These are not alternative definitions of NEXAH and are distinct from its public disciplines and initiatives.` |
| `NEXAH/MANIFESTO.md` — hero image alternative text | Calls NEXAH “The Orientation Laboratory.” | `NEXAH — The Orientation Ecosystem` |
| `NEXAH/MANIFESTO.md` — “NEXAH in One Sentence” | Defines NEXAH primarily as infrastructure. | `NEXAH is the Orientation Ecosystem: a human-oriented, editorially governed and evidence-bound body of research, tools, maps, publications and applications for designing Human orientation in complex systems.` |
| `NEXAH/MANIFESTO.md` — architectural qualifier | `NEXAH is an evidence-bound orientation ecosystem` is compatible but secondary. | `Architecturally, the ecosystem is evidence-bound: it preserves the boundaries and provenance of the representations it connects.` |
| `NEXAH/MANIFESTO.md` — “The Orientation Laboratory” | `NEXAH is best understood as a computational research laboratory` makes the Laboratory the whole project. | `The Laboratory is NEXAH’s experimental environment for evidence-bound orientation research.` Keep the research lenses that follow as Laboratory responsibilities. |
| `NEXAH/MANIFESTO.md` — integrated responsibilities | Already concludes that the responsibilities create an integrated orientation ecosystem. | Keep. Add one preceding sentence: `No single discipline, subsystem or publication is NEXAH by itself.` |
| `NEXAH/.github/REPOSITORY_METADATA.md` — description | Leads with “framework,” which can make the repository appear to be the whole project. | `Research and framework repository for NEXAH — The Orientation Ecosystem: Orientation Language, evidence, experiments, governance and deterministic implementations.` |
| Public GitHub description for `NEXAH` | Currently begins “Evidence-bound framework…” | Use the same description as `.github/REPOSITORY_METADATA.md`. |
| `NEXAH/CITATION.cff` — abstract | Already says “orientation ecosystem,” but lacks the canonical positioning. | `NEXAH is the Orientation Ecosystem for designing Human orientation in complex systems, combining research, a published Orientation Language, implementations, applications, a Living Library and human-governed editorial infrastructure.` |
| `NEXAH/pyproject.toml` — description | Uses the technical qualifier as the complete identity. | `NEXAH — The Orientation Ecosystem` |
| `NEXAH/REPOSITORY_MAP.md` | Uses “evidence-bound orientation ecosystem” as the repository-level definition. | Begin with: `NEXAH is the Orientation Ecosystem. This repository organizes six coordinated, evidence-bound responsibilities within it.` |
| `NEXAH/ARCHITECTURE/README.md` | Same repository-level ambiguity. | Begin with the same identity sentence, then retain the technical authority model unchanged. |
| `NEXAH/ARCHITECTURE/SYSTEM_STATE.md` | Repeats the technical qualifier as the project identity. | Replace only current summary definitions with: `NEXAH is the Orientation Ecosystem; this system-state document describes its evidence-bound repository responsibilities.` Do not rewrite historical state records. |
| `NEXAH/ORIENTATION_LANGUAGE/README.md` | Explicitly says NEXAH is the wider ecosystem and Language is one subsystem. | No change required. This is the correct editorial pattern. |
| `NEXAH-ORION/README.md` | Correctly defines ORION as the certified deterministic Core within the NEXAH Orientation Ecosystem. | No change required. |
| `NEXAH-ORION/.github/REPOSITORY_METADATA.md` — description | Technically correct, but omits the umbrella relationship. | `The certified deterministic Core within NEXAH — The Orientation Ecosystem: structural representation, relations, navigation, orientation maps, Expression and provenance.` |
| Public GitHub description for `NEXAH-ORION` | Currently describes deterministic navigation without identifying its ecosystem role. | Use the same description as `.github/REPOSITORY_METADATA.md`. |
| ORION certified baselines, System Plate and certification documents | They describe certified responsibility boundaries rather than the public identity. | No change required. Do not rewrite frozen certification artifacts. |

## Definitions to use consistently

Use these sentences verbatim when a short definition is required:

- **NEXAH:** `NEXAH is the Orientation Ecosystem for designing Human orientation in complex systems.`
- **Orientation Cartography:** `Orientation Cartography is the NEXAH research discipline that studies how orientation can be represented, mapped and communicated across domains.`
- **Orientation Design:** `Orientation Design is the applied NEXAH discipline for designing navigable systems, interfaces, representations and decision environments.`
- **Atlas of Atlases:** `The Atlas of Atlases is a core NEXAH research project mapping relationships between knowledge systems, models, representations and reference spaces.`
- **Human Orientation Atlas:** `The Human Orientation Atlas is NEXAH’s public knowledge collection and long-term publication series for discoveries, operators, visual frameworks and applications.`
- **Laboratory:** `The Laboratory is NEXAH’s experimental environment for developing and validating concepts, prototypes, operators and research.`
- **Library:** `The Library is NEXAH’s curated collection of books, essays, visual atlases and educational material.`

## Material that should not be rewritten

- Publication titles such as `NEXAH Orientation Design` must retain their
  recorded editorial identity.
- Source snapshots, catalog transcriptions, research reports and archived
  prototypes must preserve their historical language.
- Domain-specific papers may define the bounded method they evaluate. They
  should not be retroactively rewritten as public ecosystem definitions.
- Frozen ORION architecture and certification records must remain unchanged.
- The public four-place ecosystem map must remain an authority and visitor map;
  it is not the initiative hierarchy.

## Implementation resolutions

1. **Human Orientation Atlas and Living Atlas remain separate.** The Living
   Atlas is the living relationship map. The Human Orientation Atlas is the
   long-term publication and educational series. The `/atlas/` route remains
   the Living Atlas and is not renamed.

2. **Orientation Science is the overarching research programme.** Orientation
   Cartography and Orientation Design are disciplines within that programme.
   Recorded publication identities remain unchanged.

3. **The two valid ecosystem views remain labelled.** The NEXAH Repository’s
   technical and governance responsibilities are not presented as the public
   initiative hierarchy. The four-place public ecosystem map remains the
   visitor and authority view.

4. **NEXAHEDRON retains its established role.** No public NEXAHEDRON repository
   was available in the reviewed GitHub organization. Its established
   description remains `Human-facing reference implementation within the NEXAH
   Orientation Ecosystem`.

5. **Published GitHub settings must match the local metadata.** The three
   public repository descriptions use the same approved ecosystem hierarchy.

## Final recommendation

The editorial architecture is coherent once the umbrella/component rule is
applied:

> NEXAH is the ecosystem.<br />
> Its disciplines investigate and design orientation.<br />
> Its projects, Laboratory and Library develop, map and publish the work.<br />
> Its public systems retain their separate authority boundaries.

No architectural redesign is required. The corrections are bounded copy
changes in the website’s default metadata, About page, component page titles,
Threshold explanation, Manifesto and repository descriptions. The Living Atlas
and Human Orientation Atlas are explicitly separate, and no competing current
public identity remains.
