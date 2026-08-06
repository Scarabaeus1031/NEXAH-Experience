import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import { join } from "node:path";
import { test } from "node:test";
import { promisify } from "node:util";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const execute = promisify(execFile);

test("the public experience exposes the complete first orientation routes", async () => {
  for (const route of ["index", "visitor-guide", "library", "about", "atlas", "orientation", "departure", "contact", "accessibility", "privacy", "imprint"]) {
    const page = await read(`src/pages/${route}.astro`);
    assert.ok(page.includes("BaseLayout"), `${route} must use the shared experience layout`);
  }
});

test("the public ecosystem map assigns the four current Version 1 responsibilities", async () => {
  const home = await read("src/pages/index.astro");
  const guide = await read("src/pages/visitor-guide.astro");
  const map = await read("src/components/about/EcosystemMap.astro");
  const review = await read("docs/reviews/ECOSYSTEM_MAP_INTEGRATION.md");

  assert.doesNotMatch(home, /import EcosystemMap|<EcosystemMap/);
  assert.match(home, /Understand how NEXAH is organized · Ecosystem Map/);
  assert.match(home, /href="\/visitor-guide\/#map-title"/);
  assert.match(guide, /EcosystemMap/);
  assert.match(guide, /Orientation Ecosystem/);
  for (const concept of [
    "nexah.de",
    "NEXAH Repository",
    "ORION",
    "NEXAHEDRON",
    "Public and intellectual home",
    "Research and framework",
    "Certified deterministic core",
    "Human-facing reference implementation",
  ]) assert.match(map, new RegExp(concept));
  assert.match(map, /You are here/);
  assert.match(map, /Shared foundations/);
  assert.doesNotMatch(map, /Future Applications|SDK|fetch\s*\(/);
  assert.match(review, /orientation surface rather than a static illustration/);
  assert.match(review, /Repository Map continues to answer a different question/);
});

test("the public identity keeps NEXAH above its programmes, disciplines, projects and collections", async () => {
  const layout = await read("src/layouts/BaseLayout.astro");
  const home = await read("src/pages/index.astro");
  const about = await read("src/pages/about.astro");
  const architecture = await read("src/data/research-architecture.ts");
  const threshold = await read("src/threshold/knowledge.mjs");

  for (const source of [layout, threshold]) {
    assert.match(source, /Orientation Ecosystem/);
  }
  assert.match(home, /NEXAH develops Orientation as a discipline for navigating complex systems/);
  assert.match(home, /Designing Human Orientation in Complex Systems\./);
  assert.match(home, /Orientation begins between them/);
  assert.match(about, /Developing Orientation as a discipline/);
  assert.match(about, /NEXAH is the laboratory developing it/);
  assert.match(architecture, /Six responsibilities\. No shared authority\./);
  assert.match(about, /Scientific Constitution defines the enduring methodological direction/);
  assert.doesNotMatch(about, /NEXAH is orientation cartography/i);
  assert.doesNotMatch(about, /Orientation is an established discipline/i);
  assert.doesNotMatch(layout, /NEXAH — Orientation Cartography/);
  assert.doesNotMatch(threshold, /NEXAH is an orientation space/);
});

test("About is a concise institutional introduction with outward scientific references", async () => {
  const about = await read("src/pages/about.astro");

  assert.match(about, /The world does not lack information/);
  assert.match(about, /It lacks orientation between representations/);
  assert.match(about, /Orientation is the situated capacity to understand where we are/);
  for (const dimension of ["Position", "Perspective", "Relation", "Possible direction"]) {
    assert.match(about, new RegExp(`"${dimension}"`));
  }
  assert.match(about, /Scientific foundation/);
  assert.match(about, /Read the Scientific Constitution/);
  assert.match(about, /Explore Orientation Science/);
  assert.match(about, /Research Record/);
  assert.match(about, /A developing field, documented across connected volumes/);
  assert.match(about, /orientation-atlas-vol-i/);
  assert.match(about, /the-architecture-of-orientation-vol-iv/);
  assert.match(about, /View the complete publication record/);
  assert.match(about, /NEXAH was initiated by Thomas K\. R\. Hofmann as an independent research and design laboratory/);
  assert.match(about, /We are not looking for agreement/);
  assert.match(about, /about-position-thesis__landscape/);
  assert.match(about, /href="\/atlas\/"[\s\S]*href="\/library\/"[\s\S]*href="\/laboratory\/"[\s\S]*href="\/contact\/"/);
  assert.doesNotMatch(about, /OrientationScienceEntry|Manifesto Principles|The NEXAH Movement|researchArchitectureView|invitedPractices/);
  assert.doesNotMatch(about, /Search<\/h3>|Encyclopedia<\/h3>|EcosystemMap/);
});

test("every current public ecosystem destination is explicit and navigable", async () => {
  const map = await read("src/components/about/EcosystemMap.astro");
  const repositoryData = await read("src/data/laboratory/repository-map.ts");

  for (const destination of [
    'href: "/"',
    'href: "https://github.com/Scarabaeus1031/NEXAH"',
    'href: "https://github.com/Scarabaeus1031/NEXAH-ORION"',
    'href: "https://nexahedron.com"',
  ]) assert.match(map, new RegExp(destination.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));

  assert.match(map, /target=\{chapter\.external \? "_blank"/);
  assert.match(map, /ecosystem-chapter--current/);
  assert.match(repositoryData, /https:\/\/github\.com\/Scarabaeus1031\/NEXAH/);
  assert.doesNotMatch(map, /Future direction|Orientation Studio/);
});

test("the Laboratory is a shallow editorial bridge to the Repository", async () => {
  const pages = await Promise.all([
    read("src/pages/laboratory/index.astro"),
    read("src/pages/laboratory/process.astro"),
    read("src/pages/laboratory/repository.astro"),
    read("src/pages/laboratory/current-work.astro"),
  ]);
  const combined = pages.join("\n");
  const repositoryMap = await read("src/data/laboratory/repository-map.ts");
  const laboratoryData = await read("src/data/laboratory/index.ts");
  const about = await read("src/pages/about.astro");

  for (const page of pages) assert.match(page, /BaseLayout/);
  assert.match(pages[0], /Follow the research process/);
  assert.match(pages[1], /Publication is a transition/);
  assert.match(pages[2], /repositoryGuide\.repositoryUrl/);
  assert.match(repositoryMap, /https:\/\/github\.com\/Scarabaeus1031\/NEXAH/);
  assert.match(pages[2], /id="scientific-baselines"/);
  assert.match(pages[2], /scientificBaselines/);
  assert.match(laboratoryData, /It is not a proof of a theory/);
  assert.match(laboratoryData, /NEXAH Science Lab — RC1/);
  assert.match(laboratoryData, /v1\.0\.0-rc1/);
  assert.match(laboratoryData, /635dbe6d677170cd855db7e82b522565fac7ebca/);
  assert.match(laboratoryData, /github\.com\/Scarabaeus1031\/NEXAH-Science-Lab/);
  assert.match(about, /The first NEXAH Science Lab baseline preserves that foundation/);
  assert.match(about, /href="\/laboratory\/repository\/#scientific-baselines"/);
  assert.match(pages[3], /not a schedule or status dashboard/);
  assert.doesNotMatch(combined, /fetch\s*\(|orientationAdapter|LyraOrientationExecutor|TransformationEngine/);
});

test("the Laboratory boundary and navigation are explicit", async () => {
  const header = await read("src/components/SiteHeader.astro");
  const footer = await read("src/components/SiteFooter.astro");
  const navigation = await read("src/components/laboratory/LaboratoryNav.astro");
  const landing = await read("src/pages/laboratory/index.astro");
  const document = await read("docs/LABORATORY.md");

  assert.match(header, /\["Laboratory", "\/laboratory\/"\]/);
  assert.match(footer, /href="\/laboratory\/"/);
  assert.ok(navigation.indexOf('["Research process", "/laboratory/process/"]') < navigation.indexOf('["Laboratory", "/laboratory/"]'));
  assert.match(landing, /How did this work come into being\?/);
  assert.match(document, /The Laboratory summarizes, contextualizes and links/);
  assert.match(document, /Repository remains authoritative/);
  assert.match(document, /Do not add activity feeds, issue trackers, dashboards/);
});

test("the Laboratory resolves its featured reading through the existing Catalog identity", async () => {
  const catalog = JSON.parse(await read("src/data/generated/publication-catalog.json"));
  const library = await read("src/data/library/books.ts");
  const reader = JSON.parse(await read("src/data/reader-sources.json"));
  const laboratoryData = await read("src/data/laboratory/index.ts");
  const landing = await read("src/pages/laboratory/index.astro");
  const record = catalog.records.find((item) => item.catalogKey === "arena:5386766");

  assert.equal(record.title, "THE CARTOGRAPHY LABORATORY");
  assert.equal(record.sourceUrl, "https://www.are.na/nexah-scarabaeus1031/the-cartography-laboratory");
  assert.match(library, /catalogKey: "arena:5386766"[\s\S]*slug: "cartography-laboratory"/);
  assert.ok(reader["cartography-laboratory"]);
  assert.match(laboratoryData, /"arena:5386766"/);
  assert.match(landing, /featuredLaboratoryPublication/);
  assert.match(landing, /Reading Selection available/);
  assert.match(landing, /Original Publication remains authoritative on Are\.na/);
  assert.doesNotMatch(landing, /https:\/\/www\.are\.na/);
});

test("the Repository Map is a small safe projection of public territories", async () => {
  const source = await read("src/data/laboratory/repository-map.ts");
  const page = await read("src/pages/laboratory/repository.astro");
  const ids = [...source.matchAll(/\n\s+id: "([^"]+)"/g)].map((match) => match[1]);
  const paths = [...source.matchAll(/\n\s+path: "([^"]+)"/g)].map((match) => match[1]);

  assert.equal(ids.length, 8);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(paths).size, paths.length);
  assert.match(source, /https:\/\/github\.com\/Scarabaeus1031\/NEXAH/);
  assert.match(source, /README\.md/);
  assert.match(source, /REPOSITORY_MAP\.md/);
  assert.doesNotMatch(paths.join("\n"), /(^|\/)(\.git|\.workspace|node_modules|vendor|outputs|archive|__pycache__)(\/|$)/i);
  assert.match(page, /Browse the Repository/);
  assert.match(page, /Read the Project README/);
  assert.match(page, /RepositoryMap/);

  if (process.env.NEXAH_REPOSITORY_PATH) {
    for (const path of paths) await access(join(process.env.NEXAH_REPOSITORY_PATH, path));
  }
});

test("the orientation journey renders the generated adapter without runtime transport", async () => {
  const page = await read("src/pages/orientation.astro");
  assert.match(page, /orientationAdapter/);
  assert.match(page, /This reflection is yours/);
  assert.match(page, /Continue into the field/);
  assert.match(page, /cartography-laboratory/);
  assert.doesNotMatch(page, /fetch\s*\(/);
  assert.match(page, /textarea/);
  assert.match(page, /data-question-form/);
  assert.match(page, /translation-boundary/);
  await assert.rejects(read("src/data/orientation.ts"));
});

test("the Home page connects orientation in complexity to an explicit choice of place", async () => {
  const page = await read("src/pages/index.astro");
  assert.match(page, /Designing Human Orientation in Complex Systems\./);
  assert.match(page, /One world\./);
  assert.match(page, /Many ways of seeing\./);
  assert.match(page, /Orientation begins between them\./);
  assert.match(page, /home-hero__landscape/);
  assert.match(page, /class="home-hero__relations" aria-hidden="true"/);
  assert.equal((page.match(/class="home-hero__relation-trace home-hero__relation-trace--/g) ?? []).length, 4);
  assert.match(page, /class="home-hero__comparison-point"/);
  assert.match(page, /bounded representations, their purposes, evidence, limits and relations comparable/);
  for (const projection of ["Mercator", "Equal Earth", "Azimuthal Equidistant"]) {
    assert.match(page, new RegExp(`name: "${projection}"`));
  }
  assert.equal((page.match(/ilau:/g) ?? []).length, 3);
  for (const key of ["I", "L", "A", "U"]) {
    assert.equal((page.match(new RegExp(`key: "${key}"`, "g")) ?? []).length, 3);
  }
  assert.match(page, /Information preserved/);
  assert.match(page, /Information lost/);
  assert.match(page, /Artifacts introduced/);
  assert.match(page, /Outside declared scope/);
  assert.match(page, /class="home-projection-field"/);
  assert.match(page, /class="home-projection-world"/);
  assert.equal((page.match(/class="home-projection-beam home-projection-beam--/g) ?? []).length, 3);
  for (const projection of ["mercator", "equal-earth", "azimuthal-equidistant"]) {
    assert.match(page, new RegExp(`home-projection-beam--${projection}`));
  }
  assert.match(page, /home-projection-card home-projection-card--\$\{projection\.id\}/);
  assert.match(page, /home-projection-card--\$\{projection\.id\}`} tabindex="0"/);
  const projectionField = page.match(/<div class="home-projection-field"[\s\S]*?<\/div>\n    <div class="container">/)?.[0] ?? "";
  assert.doesNotMatch(projectionField, /<svg|<img/);
  assert.match(page, /No map is the whole world/);
  assert.match(page, /representation-specific artifacts/);
  assert.match(page, /Every representation is built for a purpose/);
  assert.match(page, /what it preserves, loses, introduces and leaves outside its declared scope/);
  assert.match(page, /Comparison is not identity/);
  assert.match(page, /Orientation supports Human judgment; it does not replace it/);
  assert.match(page, /Begin with what draws you in\./);
  for (const number of ["01", "02", "03"]) {
    assert.match(page, new RegExp(`number: "${number}"`));
  }
  assert.match(page, /See the field/);
  assert.match(page, /Find a work/);
  assert.match(page, /Inspect the research/);
  assert.match(page, /href: "\/atlas-of-atlases\/"/);
  assert.match(page, /href: "\/atlas\/"/);
  assert.match(page, /href: "\/laboratory\/"/);
  assert.match(page, /import \{ publications \} from "@\/data\/catalog"/);
  assert.match(page, /value: publications\.length\.toString\(\)/);
  assert.match(page, /repositoryDocumentUrl\("ORIENTATION_LANGUAGE\/README\.md"\)/);
  assert.match(page, /Research & Applications/);
  assert.match(page, /href="\/library\/"/);
  assert.match(page, /href="\/about\/"/);
  assert.match(page, /NEXAHEDRON/);
  assert.match(page, /Experimental access/);
  assert.match(page, /href="https:\/\/nexahedron\.com"/);
  assert.equal((page.match(/class="home-entrance"/g) ?? []).length, 1);
  assert.doesNotMatch(page, /HOW A WORLD IS HELD|HOW_A_WORLD_IS_HELD|Projection Field/);
  assert.doesNotMatch(page, /Begin with the books|Open the Visitor Guide|Browse everything/);
  assert.doesNotMatch(page, /<form|<input|<textarea|threshold-examples|LYRA|QuestionCard|message history|chat-message|chat-thread/i);
});

test("The Atlas of Atlases is a first-class static website route", async () => {
  const data = await read("src/data/atlas-of-atlases.ts");
  const landing = await read("src/pages/atlas-of-atlases/index.astro");
  const section = await read("src/pages/atlas-of-atlases/[section].astro");

  assert.match(landing, /THE ATLAS OF ATLASES/);
  assert.match(landing, /Six Atlas Volumes/);
  assert.match(landing, /Canonical Reading Route/);
  assert.match(section, /getStaticPaths/);
  assert.match(section, /atlasSections\.map/);
  assert.match(section, /width="800"/);
  assert.match(section, /height="1200"/);
  assert.match(section, /publicationByRouteSlug\.get\("the-atlas-of-atlases"\)/);
  assert.match(section, /Open Original Publication/);
  assert.match(section, /target="_blank"/);
  assert.match(section, /Previous/);
  assert.match(section, /Next/);
  assert.equal((data.match(/volume: true/g) ?? []).length, 6);
  assert.equal((data.match(/plate\("/g) ?? []).length, 59);
});

test("Home and permanent navigation expose the two Atlases in distinct roles", async () => {
  const home = await read("src/pages/index.astro");
  const library = await read("src/pages/library.astro");
  const header = await read("src/components/SiteHeader.astro");
  const footer = await read("src/components/SiteFooter.astro");
  const atlas = await read("src/pages/atlas.astro");

  assert.match(home, /title: "See the field"[\s\S]*href: "\/atlas-of-atlases\/"/);
  assert.match(home, /title: "Find a work"[\s\S]*href: "\/atlas\/"/);
  assert.match(home, /import \{ atlasCover \} from "@\/data\/atlas-of-atlases"/);
  assert.match(home, /The Atlas of Atlases is a core NEXAH research project and its principal visual study of orientation between maps/);
  assert.match(home, /Across six visual fields/);
  assert.match(home, /not treated as physically or mathematically identical/);
  assert.match(home, /Explore the Atlas of Atlases/);
  assert.doesNotMatch(home, /OrientationScienceEntry context="home"|home-atlas-feature/);
  assert.doesNotMatch(library, /library-atlas-feature|library-atlas-volumes/);
  assert.match(library, /library-human-feature/);
  assert.match(library, /Five Books · One Human Journey/);
  assert.match(header, /\["Atlas of Atlases", "\/atlas-of-atlases\/"\]/);
  assert.match(header, /\["Start Here", "\/atlas\/"\]/);
  assert.match(footer, /href="\/atlas-of-atlases\/"/);
  assert.match(footer, /href="\/visitor-guide\/#map-title">Ecosystem Map/);
  assert.match(atlas, /Start Here · The Living Atlas/);
  assert.match(atlas, /readerByBookSlug/);
  assert.match(atlas, /href="\/atlas-of-atlases\/"/);
});

test("the permanent navigation makes Start Here primary while the Brand owns Home", async () => {
  const header = await read("src/components/SiteHeader.astro");
  const brand = await read("src/components/Brand.astro");
  assert.match(brand, /href="\/"/);
  assert.match(brand, /aria-current=\{isHome \? "page"/);
  assert.match(brand, /Home · Designing Human Orientation/);
  assert.doesNotMatch(header, /\["Home", "\/"\]|\["Visitor Guide"/);
  const labels = ["Start Here", "Library", "Laboratory", "Atlas of Atlases", "About"];
  for (const label of labels) assert.match(header, new RegExp(`\\["${label}"`));
  for (let index = 1; index < labels.length; index += 1) {
    assert.ok(header.indexOf(`["${labels[index - 1]}"`) < header.indexOf(`["${labels[index]}"`));
  }
});

test("the existing orientation remains discoverable without internal Home language", async () => {
  const navigation = await read("src/data/navigation/doors.ts");
  const explore = await read("src/pages/explore/index.astro");
  assert.match(navigation, /title: "See one orientation"/);
  assert.match(navigation, /href: "\/threshold\/\?question=I%20want%20to%20understand/);
  assert.match(explore, /beginning\.id === "study-the-system" \? undefined : true/);
});

test("the orientation pause is transparent and does not simulate processing", async () => {
  const page = await read("src/pages/orientation.astro");
  assert.match(page, /Your question has reached the boundary\./);
  assert.match(page, /See what is available/);
  assert.doesNotMatch(page, /window\.setTimeout|processing-list|data-processing-continue disabled/);
});

test("the generated interaction is a complete frozen ORION report", async () => {
  const generated = JSON.parse(await read("src/data/generated/orion-interaction.json"));
  assert.equal(
    generated.request.utterance,
    "I want to understand how this observation reaches the calendar.",
  );
  assert.deepEqual(generated.translation.intents, ["Navigate", "Explain"]);
  assert.equal(generated.translation.source_representation, "Observation");
  assert.equal(generated.translation.target.representation_type, "Calendar Projection");
  assert.equal(generated.report.status, "blocked");
  assert.equal(generated.report.produced_representation, null);
  assert.ok(generated.report.plan.path.length > 0);
  assert.equal(generated.explanation.status, generated.report.status);
  assert.equal(generated.orion_source_sha256.length, 64);
});

test("ORION generation is deterministic", async () => {
  const before = await read("src/data/generated/orion-interaction.json");
  await execute("./scripts/generate-orion-interaction", [], {
    cwd: new URL("..", import.meta.url),
  });
  const after = await read("src/data/generated/orion-interaction.json");
  assert.equal(after, before);
});

test("the design system supports reduced motion", async () => {
  const motion = await read("src/styles/motion.css");
  assert.match(motion, /prefers-reduced-motion:\s*reduce/);
});

test("the design documents preserve human authority", async () => {
  const language = await read("docs/DESIGN_LANGUAGE.md");
  const principles = await read("docs/DESIGN_PRINCIPLES.md");
  assert.match(language, /The Human always decides/);
  assert.match(principles, /Reflection belongs to the Human/);
});

test("the editorial Library contains only the recorded Sprint 03 publications", async () => {
  const source = await read("src/data/library/books.ts");
  const slugs = [...source.matchAll(/\n\s+slug: "([^"]+)"/g)].map((match) => match[1]);

  assert.deepEqual(slugs, [
    "visitors-guide",
    "language-book",
    "wonder-operator",
    "operators-handbook",
    "orientation-design",
    "cartography-laboratory",
    "cartography-perspectives",
  ]);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.doesNotMatch(source, /Geometria Nova|The Language Atlas|demonstration fixture/i);
});

test("every Library publication has a local cover derivative", async () => {
  for (const cover of [
    "visitors-guide.jpg",
    "language-book.jpg",
    "wonder-operator.jpg",
    "operators-handbook.jpg",
    "orientation-design.jpg",
    "cartography-laboratory.jpg",
    "cartography-perspectives.jpg",
  ]) {
    await access(new URL(`../public/images/library/${cover}`, import.meta.url));
  }
});

test("Library presentation remains independent from ORION and LYRA", async () => {
  const sources = await Promise.all([
    read("src/pages/library.astro"),
    read("src/pages/library/[slug].astro"),
    read("src/layouts/BookLayout.astro"),
    read("src/components/library/BookCard.astro"),
    read("src/components/library/EditorialMetadata.astro"),
    read("src/data/library/books.ts"),
  ]);
  const combined = sources.join("\n");

  assert.doesNotMatch(combined, /orientationAdapter|LyraOrientationExecutor|from\s+["'][^"']*orion/i);
  assert.doesNotMatch(sources[0], /role="search"|library-search|demonstration fixtures/i);
  assert.match(sources[1], /getStaticPaths/);
});

test("the Library presents one primary reading path before optional journeys and the complete Catalog", async () => {
  const page = await read("src/pages/library.astro");
  assert.match(page, /What would you like to read\?/);
  assert.match(page, /Start here · Primary reading/);
  assert.match(page, /primaryReading = visitorGuide/);
  assert.match(page, /Begin reading/);
  assert.match(page, /Five Books · One Human Journey/);
  assert.match(page, /publicationByRouteSlug\.get\("visitors-guide"\)/);
  assert.match(page, /Your first orientation through NEXAH\./);
  assert.match(page, /Publication Catalog/);
  assert.match(page, /library-disclosure--journey/);
  assert.match(page, /library-disclosure--catalog/);
  assert.doesNotMatch(page, /Other Ways to Enter|library-door-nav|library-alternative-entrances|library-entrance/);
  assert.ok(page.indexOf('class="container library-human-feature"') < page.indexOf('class="library-human-journey"'));
  assert.ok(page.indexOf('class="library-human-journey"') < page.indexOf('id="publication-catalog"'));
});

test("the editorial Library boundary is documented", async () => {
  const editorial = await read("docs/EDITORIAL_LIBRARY.md");
  assert.match(editorial, /The Library exists beside ORION/);
  assert.match(editorial, /Editorial proximity is not evidence/);
  assert.match(editorial, /may never be inferred/);
});

test("the Experience consumes a complete read-only Publication Catalog projection", async () => {
  const projection = JSON.parse(await read("src/data/generated/publication-catalog.json"));
  const keys = projection.records.map((record) => record.catalogKey);

  assert.equal(projection.projectionType, "read_only_publication_catalog");
  assert.equal(projection.source.status, "noncanonical_read_only_overlay");
  assert.equal(projection.source.works, 61);
  assert.equal(projection.records.length, 61);
  assert.equal(new Set(keys).size, 61);
  for (const record of projection.records) {
    assert.match(record.catalogKey, /^arena:\d+$/);
    assert.ok(record.title);
    assert.ok(record.sourceUrl);
    assert.ok(record.cover.src);
    assert.ok(record.blockCount > 0);
  }
});

test("the Navigation Catalog exposes six overlapping editorial doors", async () => {
  const source = await read("src/data/navigation/doors.ts");
  const card = await read("src/components/navigation/DoorCard.astro");
  const projection = JSON.parse(await read("src/data/generated/publication-catalog.json"));
  const placementKeys = [...source.matchAll(/^\s+"(arena:\d+)": \[/gm)].map((match) => match[1]);

  for (const id of ["foundations", "language", "laboratory", "atlas", "mathematics", "journeys"]) {
    assert.match(source, new RegExp(`id: "${id}"`));
  }
  assert.match(card, /`\/explore\/\$\{door\.id\}\//);
  assert.equal(placementKeys.length, 61);
  assert.equal(new Set(placementKeys).size, 61);
  assert.deepEqual(new Set(placementKeys), new Set(projection.records.map((record) => record.catalogKey)));
  assert.match(source, /"arena:5201307": \["atlas", "laboratory", "language"\]/);
});

test("Explore and Library preserve orientation instead of creating a second catalog", async () => {
  const home = await read("src/pages/index.astro");
  const explore = await read("src/pages/explore/index.astro");
  const door = await read("src/pages/explore/[door].astro");
  const library = await read("src/pages/library.astro");
  const publication = await read("src/pages/library/[slug].astro");

  assert.match(home, /class="home-entrance-grid"/);
  assert.match(home, /href: "\/atlas\/"/);
  assert.match(home, /href="https:\/\/nexahedron\.com"/);
  const homeSequence = [
    'class="home-hero"',
    'class="home-projection-example section--line"',
    'id="public-entrances"',
    'class="home-atlas-depth section--line"',
    'class="home-evidence section--line"',
    'class="home-invitation section--line"',
  ];
  for (let index = 1; index < homeSequence.length; index += 1) {
    assert.ok(home.indexOf(homeSequence[index - 1]) < home.indexOf(homeSequence[index]));
  }
  assert.match(home, /Evidence that the work exists/);
  assert.match(home, /Your question can be the beginning/);
  assert.doesNotMatch(home, /<EcosystemMap|Browse everything/);
  assert.doesNotMatch(home, /Six ways to begin/);
  assert.match(explore, /remainingDoors\.map/);
  assert.match(explore, /OrientationScienceEntry/);
  assert.match(explore, /editorial doors, not categories/i);
  assert.match(door, /getStaticPaths/);
  assert.match(door, /Three deliberate starting points/);
  assert.match(library, /publications\.map/);
  assert.match(library, /no inferred ranking/i);
  assert.match(publication, /CatalogPublicationLayout/);
  assert.match(publication, /BookLayout/);
  assert.doesNotMatch([home, explore, door, library, publication].join("\n"), /orientationAdapter|LyraOrientationExecutor|TransformationEngine/);
});

test("Reader availability remains explicit and cannot be fabricated", async () => {
  const catalog = await read("src/data/catalog.ts");
  const genericLayout = await read("src/layouts/CatalogPublicationLayout.astro");
  const localBooks = await read("src/data/library/books.ts");
  const localKeys = [...localBooks.matchAll(/catalogKey: "(arena:\d+)"/g)].map((match) => match[1]);

  assert.equal(localKeys.length, 7);
  assert.equal(new Set(localKeys).size, 7);
  assert.match(catalog, /localBook\?\.slug/);
  assert.match(genericLayout, /Reading Space/);
  assert.match(genericLayout, /Not available here/);
  assert.match(genericLayout, /local publication record, not a Reading Space/);
  assert.doesNotMatch(genericLayout, /\/read\//);
});

test("the Living Atlas stores relationships as explicit inspectable records", async () => {
  const relations = await read("src/data/atlas/relations.ts");
  const ids = [...relations.matchAll(/id: "(R\d{3})"/g)].map((match) => match[1]);

  assert.equal(ids.length, 138);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(ids[0], "R001");
  assert.equal(ids.at(-1), "R138");
  assert.match(relations, /kind: "book-concept"/);
  assert.match(relations, /kind: "concept-operator"/);
  assert.match(relations, /kind: "operator-theme"/);
  assert.match(relations, /kind: "related-publication"/);
});

test("Atlas registries own metadata independently from relationships", async () => {
  const books = await read("src/data/library/books.ts");
  const registries = await Promise.all([
    read("src/data/atlas/concepts.ts"),
    read("src/data/atlas/operators.ts"),
    read("src/data/atlas/themes.ts"),
    read("src/data/atlas/visuals.ts"),
  ]);

  assert.doesNotMatch(books, /\bthemes:\s*\[/);
  assert.doesNotMatch(books, /\brelated:\s*\[/);
  for (const registry of registries) assert.doesNotMatch(registry, /book-concept|concept-operator|operator-theme/);
});

test("concept, operator and theme pages are generated from their registries", async () => {
  for (const page of [
    "src/pages/atlas/concepts/[slug].astro",
    "src/pages/atlas/operators/[slug].astro",
    "src/pages/atlas/themes/[slug].astro",
  ]) {
    const source = await read(page);
    assert.match(source, /getStaticPaths/);
    assert.match(source, /AtlasEntityLayout/);
  }
});

test("the Living Atlas has no reasoning or search dependency", async () => {
  const sources = await Promise.all([
    read("src/pages/atlas.astro"),
    read("src/layouts/AtlasEntityLayout.astro"),
    read("src/data/atlas/index.ts"),
    read("src/data/atlas/relations.ts"),
  ]);
  const combined = sources.join("\n");

  assert.doesNotMatch(combined, /orientationAdapter|LyraOrientationExecutor|FakeBackend|fetch\s*\(|role="search"/);
  assert.match(sources[0], /No similarity engine constructed this route/);
  assert.match(sources[0], /What would you like to understand\?/);
  assert.match(sources[0], /No recommendation engine is involved/);
  assert.match(sources[0], /Continue into the Living Atlas/);
  assert.match(sources[0], /atlas-exploration-disclosure/);
  assert.doesNotMatch(sources[0], /Enter through a collection|Publications in the landscape/);
  assert.ok(sources[0].indexOf('id="concepts"') < sources[0].indexOf('id="operators"'));
  assert.ok(sources[0].indexOf('id="operators"') < sources[0].indexOf('id="themes"'));
});

test("the Living Atlas authority boundary is documented", async () => {
  const atlas = await read("docs/LIVING_ATLAS.md");
  assert.match(atlas, /The Atlas reveals a landscape\. It does not generate one/);
  assert.match(atlas, /They are not entries in ORION's executable Operator\s+Registry/);
  assert.match(atlas, /It may not:[\s\S]*infer a relationship/);
});

test("Sprint 05 defines one explicit uninterrupted journey", async () => {
  const source = await read("src/data/journey.ts");
  const refs = [...source.matchAll(/currentRef: "([^"]+)"/g)].map((match) => match[1]);
  const destinations = [...source.matchAll(/nextHref: "([^"]+)"/g)].map((match) => match[1]);

  assert.deepEqual(refs, [
    "book:cartography-laboratory",
    "concept:observation",
    "operator:observe",
    "theme:attention",
    "book:wonder-operator",
  ]);
  assert.deepEqual(destinations, [
    "/atlas/concepts/observation/#first-orientation",
    "/atlas/operators/observe/#first-orientation",
    "/atlas/themes/attention/#first-orientation",
    "/library/wonder-operator/#first-orientation",
    "/departure/",
  ]);
});

test("the curated journey is presentation-only and leaves ownership intact", async () => {
  const sources = await Promise.all([
    read("src/data/journey.ts"),
    read("src/components/journey/JourneyContinuation.astro"),
    read("src/pages/departure.astro"),
  ]);
  const combined = sources.join("\n");

  assert.doesNotMatch(combined, /orientationAdapter|LyraOrientationExecutor|TransformationEngine|fetch\s*\(/);
  assert.match(sources[2], /The question can remain open/);
  assert.match(sources[2], /kept only in this browser tab/);
});

test("Library and Atlas layouts expose the same restrained continuation", async () => {
  const bookLayout = await read("src/layouts/BookLayout.astro");
  const atlasLayout = await read("src/layouts/AtlasEntityLayout.astro");
  for (const source of [bookLayout, atlasLayout]) {
    assert.match(source, /JourneyContinuation/);
    assert.match(source, /getFirstOrientationContinuation/);
  }
});

test("the first journey philosophy and exit are documented", async () => {
  const journey = await read("docs/FIRST_ORIENTATION_JOURNEY.md");
  assert.match(journey, /Leaving is a valid final interaction/);
  assert.match(journey, /The Experience owns sequence, pacing and presentation/);
  assert.match(journey, /No runtime, AI, search, account, personalization/);
});

test("Sprint 06 preserves one real question as transparent tab-local session state", async () => {
  const session = await read("src/components/journey/SessionQuestion.astro");
  const layout = await read("src/layouts/BaseLayout.astro");

  assert.match(session, /sessionStorage/);
  assert.match(session, /nexah\.orientation\.question/);
  assert.match(session, /data-session-question-text/);
  assert.match(session, /data-carry-question/);
  assert.match(session, /data-end-session/);
  assert.match(layout, /SessionQuestion/);
  assert.doesNotMatch(session, /localStorage|fetch\s*\(/);
});

test("unsupported wording stops before ORION without editorial recommendation", async () => {
  const page = await read("src/pages/orientation.astro");

  assert.match(page, /Did not plan a route/);
  assert.match(page, /No TransformationReport exists for this wording/);
  assert.match(page, /No publication is being recommended/);
  assert.match(page, /No relationship was inferred from your question/);
  assert.match(page, /isCanonicalQuestion/);
  assert.match(page, /return question === canonicalQuestion/);
  assert.doesNotMatch(page, /includes\(|similarity|embedding/i);
});

test("the Orientation Interface documents lifecycle, clarification and authority", async () => {
  const document = await read("docs/ORIENTATION_INTERFACE.md");

  assert.match(document, /The visitor owns the wording/);
  assert.match(document, /sessionStorage/);
  assert.match(document, /Clarification is not a conversation/);
  assert.match(document, /ORION[^\n]*either produced the existing deterministic report or was\s+not invoked/);
  assert.match(document, /no LLM, provider, runtime service, API, embeddings/);
});

test("every enhanced Library publication has a complete deterministic local Reading Space selection", async () => {
  const manifest = JSON.parse(await read("src/data/reader-sources.json"));
  const dimensions = JSON.parse(await read("src/data/reader-dimensions.json"));
  const bookSource = await read("src/data/library/books.ts");
  const bookSlugs = [...bookSource.matchAll(/\n\s+slug: "([^"]+)"/g)].map((match) => match[1]);

  assert.deepEqual(Object.keys(manifest), bookSlugs);
  assert.deepEqual(Object.keys(dimensions), bookSlugs);
  assert.equal(Object.values(manifest).reduce((count, publication) => count + publication.pages.length, 0), 79);

  for (const [slug, publication] of Object.entries(manifest)) {
    assert.ok(publication.sourceFolder);
    assert.equal(new Set(publication.pages.map((page) => page.sourceFile)).size, publication.pages.length);
    assert.equal(dimensions[slug].length, publication.pages.length);
    for (const [index, page] of publication.pages.entries()) {
      assert.ok(page.chapter);
      assert.ok(page.title);
      assert.ok(page.sourceFile);
      const id = String(index + 1).padStart(2, "0");
      await access(new URL(`../public/images/reader/${slug}/${id}.webp`, import.meta.url));
      assert.ok(dimensions[slug][index][0] > 0);
      assert.ok(dimensions[slug][index][1] > 0);
    }
  }
});

test("the Reader exposes page flow, chapters, image viewing and a calm return", async () => {
  const entrance = await read("src/pages/library/[slug]/read/index.astro");
  const page = await read("src/pages/library/[slug]/read/[page].astro");
  const layout = await read("src/layouts/ReaderLayout.astro");

  assert.match(entrance, /getStaticPaths/);
  assert.match(entrance, /Begin reading/);
  assert.match(entrance, /table of contents/);
  assert.match(page, /getStaticPaths/);
  assert.match(page, /ReaderLayout/);
  assert.match(layout, /reader-progress/);
  assert.match(layout, /Previous/);
  assert.match(layout, /Next/);
  assert.match(layout, /<dialog/);
  assert.match(layout, /ArrowLeft/);
  assert.match(layout, /ArrowRight/);
  assert.match(layout, /reader-spread-control--previous/);
  assert.match(layout, /reader-spread-control--next/);
  assert.match(layout, /reader-zoom/);
  assert.match(layout, /reader-dialog__page--previous/);
  assert.match(layout, /reader-dialog__page--next/);
  assert.match(layout, /width=\{page\.width\}/);
  assert.match(layout, /height=\{page\.height\}/);
  assert.match(layout, /Return to the Library/);
  assert.match(layout, /Selected page/);
  assert.match(layout, /Open original publication/);
});

test("publication availability and source terminology remain explicit", async () => {
  const enhanced = await read("src/layouts/BookLayout.astro");
  const catalog = await read("src/layouts/CatalogPublicationLayout.astro");
  const entrance = await read("src/pages/library/[slug]/read/index.astro");
  const metadata = await read("src/components/library/EditorialMetadata.astro");

  assert.match(enhanced, /Enter Reading Space/);
  assert.match(enhanced, /curated selection/);
  assert.match(catalog, /Publication record/);
  assert.match(catalog, /Open original publication/);
  assert.match(entrance, /selected pages from/);
  assert.match(metadata, /Reading selection/);
  assert.match(metadata, /Available on Are\.na/);
});

test("the Reader displays existing ownership records without acquiring their authority", async () => {
  const sources = await Promise.all([
    read("src/data/reader.ts"),
    read("src/layouts/ReaderLayout.astro"),
    read("src/pages/library/[slug]/read/index.astro"),
    read("src/pages/library/[slug]/read/[page].astro"),
  ]);
  const combined = sources.join("\n");

  assert.doesNotMatch(combined, /orientationAdapter|LyraOrientationExecutor|TransformationEngine|fetch\s*\(/);
  assert.match(sources[1], /getConnectedEntities/);
  assert.match(sources[1], /The Reader displays them but does not create them/);
  assert.doesNotMatch(sources[0], /concept:|operator:|theme:/);
});

test("the Reading Space boundary and reproducible source provenance are documented", async () => {
  const document = await read("docs/READING_SPACE.md");

  assert.match(document, /The Reader is a presentation boundary/);
  assert.match(document, /seven existing publications and 79 recorded\s+visual pages/);
  assert.match(document, /No publication prose is generated/);
  assert.match(document, /NEXAH_PUBLICATIONS_PATH/);
  assert.match(document, /The Library says what the publication is/);
  assert.match(document, /ORION remains entirely outside this path/);
});

test("responsive launch rules preserve one place without hidden mobile navigation", async () => {
  const tokens = await read("src/styles/tokens.css");
  const styles = await read("src/styles/global.css");
  const review = await read("docs/reviews/EXPERIENCE_REVIEW_06_RESPONSIVE_LAUNCH_READINESS.md");

  assert.match(tokens, /--gold: #8f6526/);
  assert.match(tokens, /--ink-faint: #68717a/);
  assert.match(styles, /\.mobile-nav nav a \{[^}]*min-height: 2\.75rem/s);
  assert.match(await read("src/pages/library.astro"), /library-disclosure--catalog/);
  assert.match(styles, /\.laboratory-nav \{[^}]*grid-template-columns: repeat\(2, minmax\(0, 1fr\)\)[^}]*overflow: visible/s);
  assert.match(styles, /\.method-steps \{[^}]*grid-template-columns: 1fr[^}]*overflow: visible/s);
  assert.match(styles, /\.home-projection-grid \{[^}]*grid-template-columns: 1fr[^}]*border-bottom: 0/s);
  assert.match(styles, /\.home-hero__relation-trace--three, \.home-hero__relation-trace--four \{ display: none; \}/);
  assert.match(styles, /\.home-hero__comparison-point \{ display: none; \}/);
  assert.match(styles, /\.home-projection-beams \{ display: none; \}/);
  assert.match(styles, /\.home-atlas-depth__inner \{[^}]*grid-template-columns: 1fr[^}]*gap: var\(--space-5\)/s);
  assert.match(styles, /\.atlas-registry__intro \{[^}]*grid-template-columns: auto 1fr[^}]*align-items: start/s);
  assert.match(styles, /\.atlas-entry-grid, \.atlas-entry-grid--operators \{[^}]*grid-template-columns: 1fr/s);
  assert.match(styles, /\.atlas-route ol \{[^}]*grid-template-columns: 1fr[^}]*overflow: visible/s);
  assert.match(styles, /\.footer-base small \{[^}]*font-size: \.62rem[^}]*line-height: 1\.4/s);
  assert.match(review, /introduces no feature, page, animation or interaction/i);
  assert.match(review, /4\.71:1/);
  assert.match(review, /4\.52:1/);
  assert.match(review, /Public deployment and release operations remain separate/);
});

test("public launch metadata and legal navigation remain complete and inspectable", async () => {
  const layout = await read("src/layouts/BaseLayout.astro");
  const footer = await read("src/components/SiteFooter.astro");
  const imprint = await read("src/pages/imprint.astro");
  const privacy = await read("src/pages/privacy.astro");
  const contact = await read("src/pages/contact.astro");
  const config = await read("astro.config.mjs");
  const robots = await read("public/robots.txt");
  const packageSource = await read("package.json");
  const report = await read("docs/reviews/EXPERIENCE_REVIEW_07_PUBLIC_LAUNCH.md");

  assert.match(layout, /rel="canonical"/);
  assert.match(layout, /property="og:title"/);
  assert.match(layout, /property="og:description"/);
  assert.match(layout, /property="og:url"/);
  assert.match(layout, /rel="icon"/);
  assert.match(config, /site: "https:\/\/nexah\.de"/);
  assert.match(config, /sitemap\(\)/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /sitemap-index\.xml/);
  await access(new URL("../public/favicon.png", import.meta.url));

  for (const href of ["/contact/", "/privacy/", "/imprint/"]) assert.match(footer, new RegExp(href));
  assert.match(imprint, /Haptikdesign GmbH/);
  assert.match(imprint, /Thomas Hofmann/);
  assert.match(imprint, /HRB 87166/);
  assert.match(imprint, /contact@nexah\.de/);
  assert.doesNotMatch(imprint, /Umsatzsteuer-Identifikationsnummer|Wirtschafts-Identifikationsnummer/);
  assert.match(contact, /mailto:contact@nexah\.de/);
  assert.match(privacy, /Server-Logs/);
  assert.match(privacy, /Ansprechpartner für Datenschutz: Thomas Hofmann/);
  assert.doesNotMatch(privacy, /Hostinganbieter, Serverstandort/);
  assert.match(privacy, /Sitzungsspeicher/);
  assert.match(privacy, /images\.are\.na/);
  assert.match(privacy, /keine Webanalyse/);
  assert.match(privacy, /keine personalisierte Empfehlung/);
  assert.match(privacy, /kein automatisiertes Entscheidungsverfahren/);
  assert.match(packageSource, /check:links/);
  assert.match(report, /Remaining Required Information/);
  assert.match(report, /No commit and no deployment/);
});
