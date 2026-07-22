export type EditorialDoorId = "foundations" | "language" | "laboratory" | "atlas" | "mathematics" | "journeys";

export type EditorialDoor = {
  id: EditorialDoorId;
  label: string;
  question: string;
  description: string;
  invitation: string;
  featuredKeys: readonly string[];
};

export const editorialDoors = [
  {
    id: "foundations",
    label: "Orientation Science",
    question: "How can orientation become a discipline?",
    description: "Research foundations for mapping how humans and systems find direction within complexity.",
    invitation: "Begin with the prospectus, then follow its methods and structures.",
    featuredKeys: ["arena:5416617", "arena:5415690", "arena:5309625"],
  },
  {
    id: "language",
    label: "Language",
    question: "How does NEXAH describe change?",
    description: "Books and maps for reading relations, transitions and recurring operations.",
    invitation: "Learn a vocabulary, then notice what it makes visible.",
    featuredKeys: ["arena:5421517", "arena:5426953", "arena:5426957"],
  },
  {
    id: "laboratory",
    label: "Laboratory",
    question: "How is the work investigated?",
    description: "Reports, field atlases and whiteboards from bounded research and review.",
    invitation: "Enter the workbench and keep publication separate from validation.",
    featuredKeys: ["arena:5386766", "arena:5305692", "arena:5415765"],
  },
  {
    id: "atlas",
    label: "Atlas",
    question: "Which maps reveal the landscape?",
    description: "Visual cartographies of relationships, fields and representational systems across many scales.",
    invitation: "Choose a map without mistaking it for the territory.",
    featuredKeys: ["arena:5407292", "arena:5344975", "arena:5228606"],
  },
  {
    id: "mathematics",
    label: "Mathematics",
    question: "Where are formal structures explored?",
    description: "Geometric, arithmetic and transition research with visible evidence boundaries.",
    invitation: "Explore the forms while keeping claims and status explicit.",
    featuredKeys: ["arena:5442781", "arena:5203312", "arena:5203387"],
  },
  {
    id: "journeys",
    label: "Journeys",
    question: "What does orientation feel like?",
    description: "Personal, narrative and experiential works about attention, wonder and becoming.",
    invitation: "Enter through lived experience and leave with your own next question.",
    featuredKeys: ["arena:5450904", "arena:5345108", "arena:5369070"],
  },
] as const satisfies readonly EditorialDoor[];

export const doorById: ReadonlyMap<EditorialDoorId, EditorialDoor> = new Map(
  editorialDoors.map((door) => [door.id, door]),
);

export const publicationDoorPlacements = {
  "arena:5201262": ["atlas", "laboratory"],
  "arena:5201307": ["atlas", "laboratory", "language"],
  "arena:5203074": ["atlas", "laboratory", "mathematics"],
  "arena:5203312": ["mathematics", "atlas", "laboratory"],
  "arena:5203387": ["mathematics", "atlas", "laboratory"],
  "arena:5203476": ["mathematics", "atlas", "laboratory", "language"],
  "arena:5203499": ["mathematics", "atlas", "laboratory"],
  "arena:5203528": ["mathematics", "atlas", "laboratory"],
  "arena:5216699": ["atlas", "journeys"],
  "arena:5217666": ["atlas", "mathematics", "laboratory"],
  "arena:5218362": ["atlas", "laboratory"],
  "arena:5224059": ["journeys", "atlas"],
  "arena:5228606": ["atlas", "foundations"],
  "arena:5246392": ["atlas", "laboratory"],
  "arena:5246418": ["laboratory", "atlas"],
  "arena:5250350": ["foundations", "atlas"],
  "arena:5279287": ["journeys", "atlas"],
  "arena:5293283": ["journeys", "atlas"],
  "arena:5305692": ["laboratory", "foundations"],
  "arena:5309625": ["foundations", "language"],
  "arena:5344975": ["atlas", "foundations"],
  "arena:5345064": ["journeys", "atlas"],
  "arena:5345076": ["journeys"],
  "arena:5345108": ["journeys"],
  "arena:5345129": ["journeys"],
  "arena:5345145": ["journeys"],
  "arena:5345336": ["laboratory", "foundations"],
  "arena:5345353": ["laboratory", "foundations", "journeys"],
  "arena:5345385": ["laboratory", "mathematics", "atlas"],
  "arena:5345606": ["atlas", "foundations"],
  "arena:5345722": ["atlas", "foundations"],
  "arena:5345822": ["journeys", "atlas"],
  "arena:5345838": ["laboratory", "journeys"],
  "arena:5345856": ["laboratory", "mathematics"],
  "arena:5347685": ["journeys", "atlas"],
  "arena:5369070": ["journeys", "foundations"],
  "arena:5386751": ["mathematics", "atlas"],
  "arena:5386766": ["laboratory", "foundations"],
  "arena:5386781": ["laboratory", "atlas"],
  "arena:5391199": ["language", "foundations"],
  "arena:5393574": ["language", "atlas"],
  "arena:5397157": ["journeys"],
  "arena:5397188": ["journeys", "foundations"],
  "arena:5404576": ["laboratory", "atlas"],
  "arena:5404597": ["journeys", "language"],
  "arena:5404615": ["foundations"],
  "arena:5407292": ["atlas"],
  "arena:5413103": ["atlas", "language"],
  "arena:5415690": ["foundations", "laboratory"],
  "arena:5415716": ["foundations", "atlas"],
  "arena:5415765": ["laboratory", "atlas"],
  "arena:5416617": ["foundations", "laboratory"],
  "arena:5421517": ["language"],
  "arena:5426953": ["language"],
  "arena:5426957": ["language"],
  "arena:5426966": ["language", "atlas"],
  "arena:5442532": ["atlas", "mathematics"],
  "arena:5442697": ["language"],
  "arena:5442721": ["language", "foundations"],
  "arena:5442781": ["mathematics", "foundations"],
  "arena:5450904": ["journeys", "language"],
} as const satisfies Readonly<Record<string, readonly EditorialDoorId[]>>;

export const guidedBeginnings = [
  {
    id: "new-to-nexah",
    title: "New to NEXAH",
    description: "Enter through the Visitor's Guide, then choose a foundation or a human journey.",
    href: "/library/visitors-guide/",
  },
  {
    id: "study-the-system",
    title: "See one orientation",
    description: "Follow an existing question until its visible path reaches a boundary.",
    href: "/threshold/?question=I%20want%20to%20understand%20how%20this%20observation%20reaches%20the%20calendar.",
  },
  {
    id: "explore-visually",
    title: "Explore visually",
    description: "Begin with an atlas, then follow a mathematical or experiential path.",
    href: "/explore/atlas/",
  },
] as const;

export function getDoorIdsForPublication(catalogKey: string): readonly EditorialDoorId[] {
  return publicationDoorPlacements[catalogKey as keyof typeof publicationDoorPlacements] ?? [];
}
