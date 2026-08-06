export type ResearchQuestion = {
  readonly eyebrow: string;
  readonly question: string;
  readonly status: string;
  readonly sourceSection: string;
  readonly horizon?: boolean;
};

export type ArchitectureResponsibility = {
  readonly name: string;
  readonly role: string;
  readonly sourceSection: string;
};

export type ArchitecturePlace = {
  readonly name: string;
  readonly role: string;
  readonly sourceSection: string;
};

export type ArchitectureLegend = {
  readonly heading: string;
  readonly values: readonly string[];
  readonly sourceSection: string;
};

export type ResearchArchitectureViewContent = {
  readonly sourceArchitectureTitle: string;
  readonly adoptedCommitSha: string;
  readonly sourceUrl: string;
  readonly publicEntrances: {
    readonly about: {
      readonly eyebrow: string;
      readonly headline: string;
      readonly text: string;
      readonly linkLabel: string;
      readonly href: string;
      readonly sourceSection: string;
    };
    readonly laboratory: {
      readonly text: string;
      readonly linkLabel: string;
      readonly href: string;
      readonly sourceSection: string;
    };
  };
  readonly introduction: {
    readonly eyebrow: string;
    readonly headlineLines: readonly string[];
    readonly text: string;
    readonly sourceSection: string;
  };
  readonly questions: readonly [ResearchQuestion, ResearchQuestion];
  readonly orientationSpace: {
    readonly eyebrow: string;
    readonly concepts: readonly string[];
    readonly responsibilities: readonly ArchitectureResponsibility[];
    readonly visualContext: string;
    readonly sourceSection: string;
  };
  readonly humanAxis: {
    readonly eyebrow: string;
    readonly steps: readonly string[];
    readonly anchor: string;
    readonly sourceSection: string;
  };
  readonly places: {
    readonly eyebrow: string;
    readonly introduction: string;
    readonly entries: readonly ArchitecturePlace[];
  };
  readonly legends: readonly [ArchitectureLegend, ArchitectureLegend];
  readonly legendBoundary: string;
  readonly provenance: {
    readonly eyebrow: string;
    readonly statement: string;
    readonly linkLabel: string;
  };
};

export const researchArchitectureView = {
  sourceArchitectureTitle: "NEXAH Research & Ecosystem Architecture",
  adoptedCommitSha: "2a0986ff1aa40da1bb745176d647b5013ecc07ff",
  sourceUrl:
    "https://github.com/Scarabaeus1031/NEXAH/blob/2a0986ff1aa40da1bb745176d647b5013ecc07ff/ARCHITECTURE/NEXAH_RESEARCH_ECOSYSTEM_ARCHITECTURE.md",
  publicEntrances: {
    about: {
      eyebrow: "Research Architecture",
      headline: "Six responsibilities. No shared authority.",
      text:
        "NEXAH coordinates six distinct responsibilities without transferring their authority into one central system.",
      linkLabel: "Explore the Research Architecture",
      href: "/research-architecture/",
      sourceSection: "§5 Today’s Research Architecture; §8 Authority and STOP Boundaries",
    },
    laboratory: {
      text:
        "The Laboratory is one place within a wider, cross-repository Research Architecture. It contributes research without owning the architecture as a whole.",
      linkLabel: "Explore the Research Architecture",
      href: "/research-architecture/",
      sourceSection: "§5.3 NEXAH Framework; §5.10 NEXAH Experience; §7 Repository Responsibilities",
    },
  },
  introduction: {
    eyebrow: "Open Research Architecture",
    headlineLines: ["One field.", "Distinct responsibilities."],
    text:
      "NEXAH coordinates research, semantics, implementations, applications, publications and Human encounter without transferring their authority into one central system.",
    sourceSection: "Purpose; §5 Today’s Research Architecture",
  },
  questions: [
    {
      eyebrow: "Umbrella Orientation Research Question",
      question:
        "How can Humans orient within complex fields of heterogeneous, bounded representations while preserving evidence, provenance, uncertainty, methodological boundaries and Human authority?",
      status: "Active research",
      sourceSection: "§2.1 Umbrella Orientation Research Question",
    },
    {
      eyebrow: "Open Systems / Rails Research Question",
      question:
        "Can replaceable knowledge and intelligence systems contribute within that Orientation Space without silently acquiring source, semantic, interpretive or effect authority?",
      status: "Open research horizon",
      sourceSection: "§2.2 Open Systems and Rails Research Question; §6 Methodological Rails",
      horizon: true,
    },
  ],
  orientationSpace: {
    eyebrow: "Shared Orientation Space",
    concepts: [
      "Questions",
      "Representations",
      "Relations",
      "Boundaries",
      "Uncertainty",
      "Possible transitions",
    ],
    responsibilities: [
      {
        name: "Research",
        role: "Questions · hypotheses · experiments · evidence",
        sourceSection: "§5.2 Research",
      },
      {
        name: "Orientation Language",
        role: "Published semantics · contracts · conformance",
        sourceSection: "§5.4 Orientation Language / OLS 1.0",
      },
      {
        name: "Implementations",
        role: "Deterministic behavior · inspectable execution",
        sourceSection: "§5.5 Orientation Kernel; §5.6 ORION Version 1",
      },
      {
        name: "Applications",
        role: "Domain-local use · validation boundaries",
        sourceSection: "§3.3 Applications and public encounter; §7 Repository Responsibilities",
      },
      {
        name: "Living Library",
        role: "Works · Editions · encounter · curated relations",
        sourceSection: "§5.8 Library Registry and Living Atlas",
      },
      {
        name: "Editorial Operating System",
        role: "Identity · provenance · review · controlled change",
        sourceSection: "§5.8 Library Registry and Living Atlas; §8 Authority and STOP Boundaries",
      },
    ],
    visualContext:
      "The six responsibilities surround one shared Orientation Space. Their visual proximity expresses coordination only; it does not transfer authority or imply a linear execution pipeline.",
    sourceSection: "§5 Today’s Research Architecture",
  },
  humanAxis: {
    eyebrow: "Human authority",
    steps: [
      "Question & Intention",
      "Shared Orientation Space",
      "Reflection & Interpretation",
      "Rest · Decision · New Question",
    ],
    anchor:
      "Systems may contribute structure. Meaning, acceptance and decision remain Human.",
    sourceSection: "§5.1 Human; §8 Authority and STOP Boundaries",
  },
  places: {
    eyebrow: "Where the research lives",
    introduction:
      "These are locations and ownership surfaces—not additional constitutional responsibilities.",
    entries: [
      {
        name: "NEXAH Repository",
        role: "Research & Framework",
        sourceSection: "§7 Repository Responsibilities",
      },
      {
        name: "ORION",
        role:
          "Certified structural orientation within Version 1; wider methodological rails remain research",
        sourceSection: "§5.6 ORION Version 1; §7 Repository Responsibilities",
      },
      {
        name: "NEXAHEDRON",
        role: "Experimental Human-facing interface",
        sourceSection: "§5.9 NEXAHEDRON; §7 Repository Responsibilities",
      },
      {
        name: "NEXAH Experience",
        role: "Public entrance and navigation",
        sourceSection: "§5.10 NEXAH Experience and nexah.de; §7 Repository Responsibilities",
      },
    ],
  },
  legends: [
    {
      heading: "Maturity / evidence",
      values: [
        "certified capability",
        "implemented capability",
        "bounded experiment",
        "active research",
        "historical lineage",
        "open research horizon",
      ],
      sourceSection: "§1 Axis A — Maturity and evidence status",
    },
    {
      heading: "Authority",
      values: [
        "constitutional governance",
        "semantic authority",
        "execution authority",
        "certification authority",
        "editorial identity authority",
        "presentation authority",
        "Human meaning and decision authority",
      ],
      sourceSection: "§1 Axis B — Authority class",
    },
  ],
  legendBoundary: "Status describes maturity. It does not transfer authority.",
  provenance: {
    eyebrow: "Provenance",
    statement:
      "Faithful public view of the adopted NEXAH Research & Ecosystem Architecture.",
    linkLabel: "Inspect the adopted source",
  },
} as const satisfies ResearchArchitectureViewContent;
