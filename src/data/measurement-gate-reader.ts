export type MeasurementGateReaderPage = {
  id: string;
  sequence: number;
  title: string;
  titleDe: string;
  src: string;
  width: number;
  height: number;
  sourceFile: string;
  sourceSha256: string;
  assetSha256: string;
  status: "CANONICAL_METHOD_CORE" | "INTAKE_ORIENTATION_ONLY" | "DECLARED_MATHEMATICAL_ORIENTATION" | "REUSED_ARTIFACT_VIEW";
  artifactId?: string;
  caption: string;
  captionDe: string;
  boundary: string;
  boundaryDe: string;
};

export const measurementGateReaderPages: readonly MeasurementGateReaderPage[] = [
  {
    id: "number-needs-a-type",
    sequence: 1,
    title: "A Number Needs a Type",
    titleDe: "Eine Zahl braucht einen Typ",
    src: "/images/measurement-gate-reader/01-number-needs-a-type.webp",
    width: 724,
    height: 1086,
    sourceFile: "66C8B7AE-3D29-470B-91EF-2C758EA7DF24_1_105_c.jpeg",
    sourceSha256: "f2c96a642b11be92202f018878d6572e11d03aa059b8d9996422084ac7b6e03d",
    assetSha256: "88dfcad81d8333a5d73b209bbc7eea8773b9266303a05737a188da59bf05b5af",
    status: "CANONICAL_METHOD_CORE",
    caption: "The visual seed of the gate: value = number + unit + quantity type + reference.",
    captionDe: "Der visuelle Kern des Gates: Wert = Zahl + Einheit + Größentyp + Referenz.",
    boundary: "The typing method is adopted here. Individual labels and rounded values on this intake plate remain source material until independently checked.",
    boundaryDe: "Die Typisierungsmethode wird hier übernommen. Einzelne Beschriftungen und gerundete Werte dieser Intake-Tafel bleiben Quellenmaterial, bis sie unabhängig geprüft sind.",
  },
  {
    id: "chiron-two-flows",
    sequence: 2,
    title: "Chiron — One Shell, Two Flows",
    titleDe: "Chiron — eine Schale, zwei Flüsse",
    src: "/images/measurement-gate-reader/02-chiron-two-flows.webp",
    width: 724,
    height: 1086,
    sourceFile: "4AC1A493-CA9C-4136-8683-55C5C2689E5E_1_105_c.jpeg",
    sourceSha256: "cc1abad06025b54e3bcdfc4ca25a729ddceb6ce98120a2c46a9d7411849e4180",
    assetSha256: "ede2dd527b1ce1a06f0dac9e8ce8f435f68193a1b6a772a667a3653053790e85",
    status: "INTAKE_ORIENTATION_ONLY",
    caption: "An orientation plate for keeping outward and returning crossings distinct on one declared shell.",
    captionDe: "Eine Orientierungstafel, die Auswärts- und Rückkehrdurchgänge auf einer deklarierten Schale unterscheidbar hält.",
    boundary: "The displayed formula, travel times and velocities are intake labels, not adopted scientific results. The plate is retained as an orientation proposal.",
    boundaryDe: "Die gezeigte Formel, Reisezeiten und Geschwindigkeiten sind Intake-Beschriftungen, keine übernommenen wissenschaftlichen Ergebnisse. Die Tafel bleibt ein Orientierungsvorschlag.",
  },
  {
    id: "jota-half-turn",
    sequence: 3,
    title: "Jota Wheel — The Half-Turn Return",
    titleDe: "Jota Wheel — die Halbturn-Rückkehr",
    src: "/images/measurement-gate-reader/03-jota-half-turn.webp",
    width: 724,
    height: 1086,
    sourceFile: "69EB5F3B-A5C1-4679-A119-4BCD65010BF4_1_105_c.jpeg",
    sourceSha256: "af1e3b3e1b17ce5b96e557039676a5c1e354aaaa1376e76ac9e1ab74ae218b45",
    assetSha256: "171801f65c79b53939b98f910b390f3d996ab6bef6ceb60c60ffc6a02464ca7e",
    status: "DECLARED_MATHEMATICAL_ORIENTATION",
    caption: "A two-sheet reading of square-root return: one turn exchanges the sheet; two restore the state.",
    captionDe: "Eine zweiblättrige Lesart der Quadratwurzel-Rückkehr: Eine Drehung wechselt das Blatt, zwei stellen den Zustand wieder her.",
    boundary: "The square-root double cover is the mathematical core. The i/j/k orientation planes are a declared extension, not a validated physical mechanism.",
    boundaryDe: "Die zweiblättrige Quadratwurzelstruktur ist der mathematische Kern. Die i/j/k-Orientierungsebenen sind eine deklarierte Erweiterung, kein validierter physikalischer Mechanismus.",
  },
  {
    id: "qrt-source-view",
    sequence: 4,
    title: "Saturn–Titan QRT Record — Source View",
    titleDe: "Saturn–Titan QRT Record — Quellansicht",
    src: "/images/measurement-gate-reader/04-qrt-source-view.webp",
    width: 988,
    height: 685,
    sourceFile: "134C621C-A006-4E70-BBE6-0C129EA95761_1_102_o.jpeg",
    sourceSha256: "c138ededcb5c1c0a1a485ec318b32e9910cf9bdf8d833a7d8f250aa7528c3fa4",
    assetSha256: "8fb6c51f1aaa6839388f2c1406a167f2580f712c037b7d64871c9b37398accf4",
    status: "REUSED_ARTIFACT_VIEW",
    artifactId: "ART:HTML:CAAEAD5F19ED",
    caption: "The preserved HTML view of the record analogy: flow, cut, trace and comparable return.",
    captionDe: "Die erhaltene HTML-Ansicht der Record-Analogie: Fluss, Schnitt, Spur und vergleichbarer Return.",
    boundary: "A view of the existing Saturn–Titan artifact. It is an analogy and does not report a measured planetary transfer function.",
    boundaryDe: "Eine Ansicht des bestehenden Saturn–Titan-Artefakts. Sie ist eine Analogie und berichtet keine gemessene planetare Übertragungsfunktion.",
  },
  {
    id: "qrt-designed-view",
    sequence: 5,
    title: "Saturn–Titan QRT Record — Designed View",
    titleDe: "Saturn–Titan QRT Record — gestaltete Ansicht",
    src: "/images/measurement-gate-reader/05-qrt-designed-view.webp",
    width: 2242,
    height: 1401,
    sourceFile: "7601DF4F-BB50-4D1B-8080-0005D35C31A9_1_102_o.jpeg",
    sourceSha256: "8b4df08ac34b9b072c9c3da48d13c37d0ecb35b332b1f03adb7962721ef239c7",
    assetSha256: "69e91a3b234265f30d1a786c6c87dd88272fecbafb83557a87f2734179998a86",
    status: "REUSED_ARTIFACT_VIEW",
    artifactId: "ART:HTML:CAAEAD5F19ED",
    caption: "A second representation of the same QRT carrier—not a second research object.",
    captionDe: "Eine zweite Darstellung desselben QRT-Trägers — kein zweites Forschungsobjekt.",
    boundary: "This plate and the preceding plate are two views of one preserved artifact. Representation count is not object count.",
    boundaryDe: "Diese und die vorherige Tafel sind zwei Ansichten eines erhaltenen Artefakts. Die Zahl der Darstellungen ist nicht die Zahl der Objekte.",
  },
] as const;
