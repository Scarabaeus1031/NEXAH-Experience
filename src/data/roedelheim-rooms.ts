export type RoedelheimRoom = {
  number: string;
  id: string;
  slug: string;
  title: string;
  description: string;
  descriptionDe: string;
  question: string;
  questionDe: string;
  claimBoundary: string;
  claimBoundaryDe: string;
  sourcePath: string;
  sha256: string;
};

export const roedelheimRooms: readonly RoedelheimRoom[] = [
  {
    number: "01",
    id: "ROO:SEVEN_VIEWS",
    slug: "one-carrier-seven-views",
    title: "One Carrier · Seven Views",
    description: "One source can support several declared views.",
    descriptionDe: "Eine Quelle kann mehrere deklarierte Ansichten tragen.",
    question: "What changed when the view changed?",
    questionDe: "Was hat sich verändert, als sich die Ansicht verändert hat?",
    claimBoundary: "Closure belongs to the declared comparator—not to visual similarity.",
    claimBoundaryDe: "Der Abschluss gehört zum deklarierten Vergleichsmaßstab – nicht zur visuellen Ähnlichkeit.",
    sourcePath: "SCIENCE_LAB/EXPORTS/ROEDELHEIM_OBSERVATORY_SEVEN_VIEWS_REFERENCE.html",
    sha256: "adf4b6d721049c871a9c9c16521334495a8a4d0f770a4fdbbd75021205de12ef",
  },
  {
    number: "02",
    id: "ROO:THREAD_LOOM_0_4",
    slug: "thread-loom",
    title: "Thread Loom",
    description: "A translation trace keeps what was carried, transformed and lost visible.",
    descriptionDe: "Eine Übersetzungsspur hält sichtbar, was übertragen, verändert und verloren wurde.",
    question: "Can you follow what was carried, transformed and lost?",
    questionDe: "Lässt sich verfolgen, was übertragen, verändert und verloren wurde?",
    claimBoundary: "An incomplete chain stays incomplete; a caption or resemblance does not repair it.",
    claimBoundaryDe: "Eine unvollständige Kette bleibt unvollständig; eine Beschriftung oder Ähnlichkeit repariert sie nicht.",
    sourcePath: "NEXAH_TRANSLATION_AUDIT_REPORT_01/FROZEN_CHAIN/03_HTML_INSTRUMENT/ROEDELHEIM_OBSERVATORY_THREAD_LOOM_PROJECTION_LAB_0_4.html",
    sha256: "d02c7046efb79efccdc86533fee3a885806e86c99b6f27cfe5b9de0a769ad1f6",
  },
  {
    number: "03",
    id: "ROO:DUAL_BELT_3_PLUS_1",
    slug: "three-plus-one-dual-belt",
    title: "3+1 Dual Belt",
    description: "Inside, outside, direction, seam and return remain distinguishable.",
    descriptionDe: "Innen, außen, Richtung, Naht und Return bleiben unterscheidbar.",
    question: "Which side and which direction are you looking from?",
    questionDe: "Von welcher Seite und in welche Richtung wird geblickt?",
    claimBoundary: "This is a representation instrument—not a physical belt or universal mechanism.",
    claimBoundaryDe: "Dies ist ein Darstellungsinstrument – kein physisches Band und kein universeller Mechanismus.",
    sourcePath: "SCIENCE_LAB/EXPORTS/NEXAH_3_PLUS_1_DUAL_BELT.html",
    sha256: "18270c0ba0b7a9a8f9cfc5d7cfa928abe5c1afa36cf18ac5ae401049eceda069",
  },
  {
    number: "04",
    id: "ROO:MIWA",
    slug: "miwa-aperture-andromeda",
    title: "MIWA · Aperture · Andromeda",
    description: "Named frames keep observer position and projection explicit.",
    descriptionDe: "Benannte Rahmen halten Beobachterposition und Projektion explizit.",
    question: "Which record belongs to which frame?",
    questionDe: "Welcher Eintrag gehört zu welchem Rahmen?",
    claimBoundary: "No ephemeris, measurement or physical-coupling claim is made here.",
    claimBoundaryDe: "Hier wird keine Aussage über Ephemeriden, Messungen oder physische Kopplungen getroffen.",
    sourcePath: "SCIENCE_LAB/EXPORTS/MIWA_PINEAP_AN_DROMEDA.html",
    sha256: "936708636b7193543bdc31e3069c7836b14057730f39633319e909e5e2f3fb84",
  },
  {
    number: "05",
    id: "ROO:ROOT_SPACE_8_16",
    slug: "root-space-eight-to-sixteen",
    title: "Root Space 8 → 16",
    description: "A finite carrier is separated from what its lifted representation introduces.",
    descriptionDe: "Ein endlicher Träger wird von dem getrennt, was seine angehobene Darstellung einführt.",
    question: "What becomes available in the lifted view—and what did the representation introduce?",
    questionDe: "Was wird in der angehobenen Ansicht verfügbar – und was hat die Darstellung selbst eingeführt?",
    claimBoundary: "This is a finite sign-state relation—not a literal physical four-dimensional object.",
    claimBoundaryDe: "Dies ist eine endliche Zeichen-Zustands-Relation – kein buchstäbliches physisches vierdimensionales Objekt.",
    sourcePath: "SCIENCE_LAB/EXPORTS/NEXAH_TESSERACT_ROOT_SPACE_8_TO_16.html",
    sha256: "fcae2a8d1955be4102622747fb48d585c066352e784f0a749b424fa81fe25388",
  },
  {
    number: "06",
    id: "ROO:TESSAREC_Q_IOTA_PEARL",
    slug: "tessarec-q-iota-pearl",
    title: "Tessarec · Qι Pearl",
    description: "Cut, aperture, local address and return close the bounded sequence.",
    descriptionDe: "Schnitt, Apertur, lokale Adresse und Return schließen die begrenzte Sequenz.",
    question: "What can return without making two views identical?",
    questionDe: "Was kann zurückkehren, ohne zwei Ansichten identisch zu machen?",
    claimBoundary: "No universal operator or physical Tessarec/Pearl claim is made here.",
    claimBoundaryDe: "Hier wird keine Aussage über einen universellen Operator oder ein physisches Tessarec-/Pearl-Objekt getroffen.",
    sourcePath: "SCIENCE_LAB/EXPORTS/NEXAH_TESSAREC_Q_IOTA_PEARL.html",
    sha256: "9a3a22a9e1736ea4042a96bf095d225011d937aa4d2229ec212881eb5b3cb2d6",
  },
] as const;
