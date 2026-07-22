export type AtlasPlate = {
  file: string;
  title: string;
};

export type AtlasSection = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  plates: readonly AtlasPlate[];
  volume: boolean;
};

const plate = (file: string, title: string): AtlasPlate => ({ file, title });

export const atlasSections = [
  {
    number: "00",
    slug: "entrance-hall",
    title: "Entrance Hall",
    shortTitle: "Entrance Hall",
    description: "The visual grammar, architecture and six worlds of orientation.",
    volume: false,
    plates: [
      plate("001-47625553.jpg", "Cover"),
      plate("002-47625552.jpg", "Foreword"),
      plate("003-48119842.jpg", "How to Read This Library"),
      plate("004-47625542.jpg", "Design as Orientation"),
      plate("005-47625549.jpg", "The Atlas of Atlases"),
      plate("006-48120614.jpg", "Recurring Motifs"),
      plate("007-48120611.jpg", "Atlas Grammar"),
      plate("008-48119841.jpg", "Atlas Architecture Map"),
      plate("018-48119840.jpg", "The Six Worlds of Orientation"),
      plate("019-47625548.jpg", "Plate 0 — Human Orientation Field"),
    ],
  },
  {
    number: "01",
    slug: "human-orientation-field",
    title: "Human Orientation Field",
    shortTitle: "Human",
    description: "The human scale: presence, perception and orientation.",
    volume: true,
    plates: [
      plate("009-48119955.jpg", "Plate I"),
      plate("010-48119956.jpg", "Plate II"),
      plate("011-48119959.jpg", "Plate III"),
      plate("012-48119958.jpg", "Plate IV"),
      plate("013-48119961.jpg", "Plate V"),
      plate("014-48119970.jpg", "Plate VI"),
      plate("029-48119974.jpg", "Transition I"),
    ],
  },
  {
    number: "02",
    slug: "microscopic-orientation-field",
    title: "Microscopic Orientation Field",
    shortTitle: "Microscopic",
    description: "Structures and relations made visible at the smallest scales.",
    volume: true,
    plates: [
      plate("030-48120056.jpg", "Plate I"),
      plate("031-48120050.jpg", "Plate II"),
      plate("032-48120052.jpg", "Plate III"),
      plate("033-48120051.jpg", "Plate IV"),
      plate("034-48120057.jpg", "Plate V"),
      plate("035-48120053.jpg", "Plate VI"),
      plate("036-48120215.jpg", "Transition II"),
    ],
  },
  {
    number: "03",
    slug: "cosmic-orientation-field",
    title: "Cosmic Orientation Field",
    shortTitle: "Cosmic",
    description: "Cycles, scales and landmarks across the celestial field.",
    volume: true,
    plates: [
      plate("037-48120237.jpg", "Plate I"),
      plate("038-48120240.jpg", "Plate II"),
      plate("039-48120242.jpg", "Plate III"),
      plate("040-48120239.jpg", "Plate IV"),
      plate("041-48120243.jpg", "Plate V"),
      plate("042-48120241.jpg", "Plate VI"),
      plate("043-48120283.jpg", "Transition III"),
    ],
  },
  {
    number: "04",
    slug: "mathematical-orientation-field",
    title: "Mathematical Orientation Field",
    shortTitle: "Mathematical",
    description: "Patterns, proportions and formal structures of orientation.",
    volume: true,
    plates: [
      plate("044-48120380.jpg", "Plate I"),
      plate("045-48120385.jpg", "Plate II"),
      plate("046-48120381.jpg", "Plate III"),
      plate("047-48120383.jpg", "Plate IV"),
      plate("048-48120344.jpg", "Plate V"),
      plate("049-48120359.jpg", "Plate VI"),
      plate("050-48120505.jpg", "Transition IV"),
    ],
  },
  {
    number: "05",
    slug: "cultural-orientation-field",
    title: "Cultural Orientation Field",
    shortTitle: "Cultural",
    description: "Symbols, artefacts and shared systems across cultures.",
    volume: true,
    plates: [
      plate("051-48120520.jpg", "Plate I"),
      plate("052-48120521.jpg", "Plate II"),
      plate("054-48120524.jpg", "Plate III"),
      plate("053-48120525.jpg", "Plate IV"),
      plate("056-48120522.jpg", "Plate V"),
      plate("055-48120523.jpg", "Plate VI"),
      plate("057-48120538.jpg", "Transition V"),
    ],
  },
  {
    number: "06",
    slug: "cognitive-orientation-field",
    title: "Cognitive Orientation Field",
    shortTitle: "Cognitive",
    description: "Attention, memory and meaning within human understanding.",
    volume: true,
    plates: [
      plate("058-48120543.jpg", "Plate I"),
      plate("059-48120547.jpg", "Plate II"),
      plate("060-48120546.jpg", "Plate III"),
      plate("061-48120548.jpg", "Plate IV"),
      plate("062-48120544.jpg", "Plate V"),
      plate("063-48120545.jpg", "Plate VI"),
    ],
  },
  {
    number: "07",
    slug: "library-appendix",
    title: "Library Appendix",
    shortTitle: "Appendix",
    description: "Designers, chronology and the path into the wider Library.",
    volume: false,
    plates: [
      plate("064-48120610.jpg", "The Continuing Atlas"),
      plate("066-48119793.jpg", "Architects of Orientation"),
      plate("067-48119809.jpg", "Orientation Designers"),
      plate("065-48120613.jpg", "Periodic Table of Orientation Designers"),
      plate("071-48120609.jpg", "How to Build Your Own Atlas"),
      plate("070-48120612.jpg", "About NEXAH Library"),
      plate("028-48120617.jpg", "Atlas Timeline"),
      plate("072-48120619.jpg", "The Complete NEXAH Library"),
    ],
  },
] as const satisfies readonly AtlasSection[];

export const atlasVolumes = atlasSections.filter((section) => section.volume);
export const atlasCover = `/images/atlas-of-atlases/${atlasSections[0].plates[0].file}`;
export const atlasSectionBySlug = new Map(atlasSections.map((section) => [section.slug, section]));

export const atlasImage = (file: string) => `/images/atlas-of-atlases/${file}`;
export const atlasSectionHref = (slug: string) => `/atlas-of-atlases/${slug}/`;
