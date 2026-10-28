export type NexahPublicPlace = {
  readonly chapter: string;
  readonly symbol: string;
  readonly name: string;
  readonly role: string;
  readonly owns: string;
  readonly next: string;
  readonly href: string;
  readonly current?: boolean;
  readonly external?: boolean;
};

export type NexahAuthoritySource = {
  readonly name: string;
  readonly role: string;
  readonly authority: string;
  readonly boundary: string;
  readonly href: string;
};

export type NexahPublicView = {
  readonly id: "human-view" | "science-view" | "builder-view";
  readonly name: string;
  readonly title: string;
  readonly role: string;
  readonly boundary: string;
  readonly href: string;
  readonly action: string;
  readonly external?: boolean;
};

export type NexahOrientationMovement = {
  readonly name: string;
  readonly question: string;
  readonly description: string;
};

export const nexahIdentity = Object.freeze({
  name: "NEXAH",
  fullName: "NEXAH Orientation Ecosystem",
  publicUrl: "https://nexah.de/",
  definition:
    "NEXAH is an evidence-bound orientation ecosystem for making relationships, limits and possible transitions between bounded representations inspectable and navigable while keeping meaning, judgment and responsibility Human.",
  purpose:
    "NEXAH helps people investigate questions across sources and representations while keeping provenance, context, uncertainty, authority and unresolved difference visible.",
  compactBoundary:
    "Orientation supports understanding. It does not decide, recommend, authorize action or replace a source.",
  instrumentBoundary:
    "NEXAH may guide a person through several source-bound views and instruments. They do not thereby become one shared simulation, and state is not silently carried from one instrument to another.",
  nonClaims: Object.freeze([
    "NEXAH is not a universal theory or universal world model.",
    "NEXAH is not an autonomous decision-maker or a replacement for domain expertise.",
    "A visual similarity, interactive instrument or passing implementation test is not by itself scientific evidence.",
    "Internal reproducibility is not external validation, and an incomplete prior-art search is not proof of worldwide novelty.",
  ]),
  hierarchy: Object.freeze([
    {
      name: "NEXAH",
      role: "The complete orientation ecosystem.",
      boundary: "No programme, repository, instrument or result is identical with the whole ecosystem.",
    },
    {
      name: "NEXAH Science",
      role: "The research layer that connects bounded questions, methods, evidence, results and open review gates.",
      boundary: "It does not turn every NEXAH work, image or instrument into a scientific result.",
    },
    {
      name: "A0",
      role: "A bounded mathematical and methodological research programme within NEXAH Science.",
      boundary: "A0 is not identical with NEXAH or NEXAH Science.",
    },
  ]),
  publicViews: Object.freeze<NexahPublicView[]>([
    {
      id: "human-view",
      name: "Human View",
      title: "Experience before system.",
      role: "A bounded Human-facing experience for attention, interaction, reflection and Return.",
      boundary: "The Human View does not create scientific, semantic or decision authority.",
      href: "https://nexahedron.com",
      action: "Enter NEXAHEDRON",
      external: true,
    },
    {
      id: "science-view",
      name: "Science",
      title: "Test only what can be bounded.",
      role: "Research questions, methods, evidence, results, negative findings and open review gates.",
      boundary: "Science does not turn every NEXAH work, image or instrument into a scientific result.",
      href: "/laboratory/",
      action: "Open NEXAH Science",
    },
    {
      id: "builder-view",
      name: "Builder",
      title: "Make the frame inspectable.",
      role: "Languages, contracts, records, interfaces and instruments that expose selection, relation, change and unresolved difference.",
      boundary: "Builder capability does not establish meaning, validity or permission to act.",
      href: "/how-nexah-works/",
      action: "See how NEXAH is built",
    },
  ]),
  orientationSequence: Object.freeze<NexahOrientationMovement[]>([
    {
      name: "Source",
      question: "What is being viewed?",
      description: "Name the object, record or situation and retain a route back to its owning source.",
    },
    {
      name: "Aperture",
      question: "How was this view selected?",
      description: "Declare the position, question, purpose and boundary that shape the representation.",
    },
    {
      name: "Difference",
      question: "What changed or disappeared?",
      description: "Keep what is preserved, lost, introduced and unavailable distinct.",
    },
    {
      name: "Boundary",
      question: "Where does the representation stop?",
      description: "State what the view can support and what it cannot establish.",
    },
    {
      name: "Human Return",
      question: "What remains for the Human?",
      description: "Return the comparison to context, revision and Human judgment instead of automating meaning.",
    },
  ]),
  publicPlaces: Object.freeze<NexahPublicPlace[]>([
    {
      chapter: "Place 01",
      symbol: "◎",
      name: "nexah.de",
      role: "Public and intellectual home",
      owns: "The public introduction, Library, Atlas and routes into the ecosystem.",
      next: "Begin here",
      href: "/",
      current: true,
    },
    {
      chapter: "Place 02",
      symbol: "⌕",
      name: "NEXAH Repository",
      role: "Research and framework",
      owns: "The Framework, Orientation Language, implementations, applications, Library sources and governance.",
      next: "Open the framework",
      href: "https://github.com/Scarabaeus1031/NEXAH",
      external: true,
    },
    {
      chapter: "Place 03",
      symbol: "◇",
      name: "ORION",
      role: "Certified deterministic core",
      owns: "Revision-bound structural orientation within its certified responsibility boundaries.",
      next: "Inspect the core",
      href: "https://github.com/Scarabaeus1031/NEXAH-ORION",
      external: true,
    },
    {
      chapter: "Place 04",
      symbol: "⬡",
      name: "NEXAHEDRON",
      role: "Human-facing reference implementation",
      owns: "A bounded Human-facing view for reading, interaction, reflection and Return.",
      next: "Enter the Human View",
      href: "https://nexahedron.com",
      external: true,
    },
  ]),
  authoritySources: Object.freeze<NexahAuthoritySource[]>([
    {
      name: "nexah.de",
      role: "Public orientation",
      authority: "Public explanation, routes, Library and presentation.",
      boundary: "Presentation does not create scientific or semantic authority.",
      href: "https://nexah.de/",
    },
    {
      name: "NEXAH Core",
      role: "Framework authority",
      authority: "Framework, Orientation Language, governance, implementations, applications and source Library.",
      boundary: "The repository is not the public home, Science Lab, ORION or Human-facing View.",
      href: "https://github.com/Scarabaeus1031/NEXAH",
    },
    {
      name: "NEXAH Science Lab",
      role: "Evidence authority",
      authority: "Study identities, protocols, evidence, results, negative findings, reviews and lifecycle state.",
      boundary: "A file, build or visualization does not promote a scientific claim.",
      href: "https://github.com/Scarabaeus1031/NEXAH-Science-Lab",
    },
    {
      name: "ORION",
      role: "Certified execution authority",
      authority: "Deterministic structural execution inside the certified Version 1 scope.",
      boundary: "ORION does not own Human meaning, decisions, the public site or scientific validity.",
      href: "https://github.com/Scarabaeus1031/NEXAH-ORION",
    },
    {
      name: "NEXAHEDRON",
      role: "Human-facing presentation authority",
      authority: "The bounded public A0 Human View, its interactions and transient local presentation state.",
      boundary: "NEXAHEDRON creates no scientific, semantic or decision authority of its own.",
      href: "https://github.com/Scarabaeus1031/NEXAHEDRON",
    },
  ]),
  identifiers: Object.freeze([
    {
      prefix: "SCC-*",
      meaning: "Scientific contribution or novelty candidate.",
      boundary: "A candidate identity is not a validated novelty claim.",
    },
    {
      prefix: "A0-BL-*",
      meaning: "An admitted A0 study or research branch.",
      boundary: "A study is not automatically a new SCC candidate.",
    },
    {
      prefix: "LABREPORT-*",
      meaning: "A bounded Science Lab result and closure report.",
      boundary: "Its conclusions remain limited to the declared study scope.",
    },
  ]),
  researchRelations: Object.freeze([
    {
      subject: "SCC-003",
      relation: "is generalized in a bounded static construction family by",
      object: "A0-BL-020 — General Pascal Quotients",
      status:
        "A0-BL-020 is an owner-accepted bounded internal result. It is not named SCC-004 and does not establish novelty, utility or a universal gluing theory.",
      subjectUrl:
        "https://github.com/Scarabaeus1031/NEXAH-Science-Lab/blob/main/SCIENCE_LAB/SCIENTIFIC_CONTRIBUTION_CANDIDATES/SCC_003_PASCAL_PENTAGON_106_NODE_QUOTIENT_2026-10-10.md",
      objectUrl:
        "https://github.com/Scarabaeus1031/NEXAH-Science-Lab/blob/main/SCIENCE_LAB/LABREPORTS/MATHEMATICS/LABREPORT_A0_BL_020_GENERAL_PASCAL_QUOTIENTS_001.md",
    },
  ]),
  publicRoutes: Object.freeze([
    { name: "About NEXAH", href: "https://nexah.de/about/", description: "Purpose, definition, hierarchy and authority boundaries." },
    { name: "Visitor Guide", href: "https://nexah.de/visitor-guide/", description: "A Human entrance and public ecosystem map." },
    { name: "Laboratory", href: "https://nexah.de/laboratory/", description: "Public research orientation and routes to authoritative records." },
    { name: "Research Architecture", href: "https://nexah.de/research-architecture/", description: "Six coordinated responsibilities without shared authority." },
    { name: "A0", href: "https://nexah.de/a0/", description: "A bounded current mathematical and methodological programme." },
  ]),
});

export function renderNexahMarkdown(): string {
  const sourceRows = nexahIdentity.authoritySources
    .map((source) => `- [${source.name}](${source.href}): ${source.authority} Boundary: ${source.boundary}`)
    .join("\n");
  const hierarchyRows = nexahIdentity.hierarchy
    .map((entry) => `- **${entry.name}:** ${entry.role} ${entry.boundary}`)
    .join("\n");
  const identifierRows = nexahIdentity.identifiers
    .map((entry) => `- \`${entry.prefix}\`: ${entry.meaning} ${entry.boundary}`)
    .join("\n");
  const relationRows = nexahIdentity.researchRelations
    .map((entry) => `- [${entry.subject}](${entry.subjectUrl}) ${entry.relation} [${entry.object}](${entry.objectUrl}). ${entry.status}`)
    .join("\n");
  const boundaryRows = nexahIdentity.nonClaims.map((claim) => `- ${claim}`).join("\n");
  const viewRows = nexahIdentity.publicViews
    .map((view) => `- [${view.name}](${view.href}): ${view.role} Boundary: ${view.boundary}`)
    .join("\n");
  const movementRows = nexahIdentity.orientationSequence
    .map((movement, index) => `${index + 1}. **${movement.name} — ${movement.question}** ${movement.description}`)
    .join("\n");

  return `# ${nexahIdentity.fullName}\n\n> ${nexahIdentity.definition}\n\n${nexahIdentity.purpose}\n\n## Three public views\n\n${viewRows}\n\n## How NEXAH works\n\n${movementRows}\n\n${nexahIdentity.instrumentBoundary}\n\n## Identity hierarchy\n\n${hierarchyRows}\n\n## Source and authority map\n\n${sourceRows}\n\n## Research identifiers\n\n${identifierRows}\n\n## Important research relations\n\n${relationRows}\n\n## Interpretation boundaries\n\n${boundaryRows}\n\nFor dated scientific status, follow the NEXAH Science Lab and its maintained Lab Register. Public summaries do not replace the linked source records.\n`;
}

export function renderLlmsTxt(): string {
  const routes = nexahIdentity.publicRoutes
    .map((route) => `- [${route.name}](${route.href}): ${route.description}`)
    .join("\n");
  const sources = nexahIdentity.authoritySources
    .filter((source) => source.href.startsWith("https://github.com/"))
    .map((source) => `- [${source.name}](${source.href}): ${source.role}; ${source.authority}`)
    .join("\n");

  return `# ${nexahIdentity.name}\n\n> ${nexahIdentity.definition}\n\n${nexahIdentity.compactBoundary} NEXAH Science and A0 are bounded parts of NEXAH, not synonyms for the complete ecosystem. The Human View, Science and Builder are distinct public entrances with different responsibilities. Prefer the linked original repositories for technical, semantic and scientific claims.\n\n## Start here\n\n${routes}\n\n## AI-readable overview\n\n- [NEXAH overview](https://nexah.de/ai/nexah.md): Identity, public views, method, hierarchy, authority map, identifiers, research relations and claim boundaries.\n- [NEXAH ecosystem data](https://nexah.de/ai/ecosystem.json): Machine-readable projection of the same maintained identity source.\n\n## Authoritative repositories\n\n${sources}\n`;
}

export function nexahStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nexah.de/#website",
        name: nexahIdentity.name,
        alternateName: nexahIdentity.fullName,
        url: nexahIdentity.publicUrl,
        description: nexahIdentity.definition,
        inLanguage: ["en", "de"],
      },
      {
        "@type": "Project",
        "@id": "https://nexah.de/#nexah",
        name: nexahIdentity.fullName,
        alternateName: nexahIdentity.name,
        url: nexahIdentity.publicUrl,
        description: nexahIdentity.definition,
        mainEntityOfPage: "https://nexah.de/about/",
        sameAs: nexahIdentity.authoritySources.map((source) => source.href),
      },
    ],
  };
}
