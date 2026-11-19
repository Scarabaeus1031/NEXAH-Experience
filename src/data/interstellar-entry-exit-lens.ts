export type Direction = {
  longitudeDeg: number;
  latitudeDeg: number;
};

export type InterstellarLensObject = {
  id: "1I" | "2I" | "3I";
  label: string;
  designation: string;
  temporary: boolean;
  source: {
    authority: "NASA/JPL SBDB";
    orbit: string;
    solutionDate: string;
    epoch: string;
    frame: string;
    ephemeris: string;
    observations: number;
    dataArcDays: number;
    snapshotSha256: string;
    url: string;
    note: string;
    noteDe: string;
  };
  elements: {
    e: number;
    aAu: number;
    qAu: number;
    inclinationDeg: number;
    nodeDeg: number;
    perihelionArgumentDeg: number;
  };
  twoBody: {
    entry: Direction;
    exit: Direction;
    velocityKmS: number;
  };
  horizons: {
    entry: Direction;
    exit: Direction;
    entryDifferenceDeg: number;
    exitDifferenceDeg: number;
    entryDistanceAu: number;
    exitDistanceAu: number;
    snapshotSha256: string;
  };
};

export const interstellarLensObjects = [
  {
    id: "1I",
    label: "1I/ʻOumuamua",
    designation: "A/2017 U1",
    temporary: false,
    source: {
      authority: "NASA/JPL SBDB",
      orbit: "16",
      solutionDate: "2018-06-26",
      epoch: "2017-Nov-23.0 TDB",
      frame: "heliocentric IAU76/80 ecliptic · J2000",
      ephemeris: "DE431 / SB431-N16",
      observations: 207,
      dataArcDays: 80,
      snapshotSha256: "94166583a4dffe7dd427b417c9401ee1d71f6fc0807ffcd15a08714ffe078664",
      url: "https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=1I&full-prec=1&cd-epoch=1&cd-tp=1",
      note: "The fitted orbit includes non-gravitational accelerations; distant extrapolation remains model-dependent.",
      noteDe: "Der Bahnfit enthält nicht-gravitative Beschleunigungen; ferne Extrapolation bleibt modellabhängig.",
    },
    elements: {
      e: 1.201133796102373,
      aAu: -1.27234500742808,
      qAu: 0.2559115812959116,
      inclinationDeg: 122.7417062847286,
      nodeDeg: 24.59690955523242,
      perihelionArgumentDeg: 241.8105360304898,
    },
    twoBody: {
      entry: { longitudeDeg: 284.59393185611, latitudeDeg: 56.857771089353 },
      exit: { longitudeDeg: 8.442732473889, latitudeDeg: 23.397351557223 },
      velocityKmS: 26.405273249181,
    },
    horizons: {
      entry: { longitudeDeg: 284.561941617866, latitudeDeg: 56.822922493888 },
      exit: { longitudeDeg: 8.495276310976, latitudeDeg: 23.397057849269 },
      entryDifferenceDeg: 0.038994850449,
      exitDifferenceDeg: 0.048224261707,
      entryDistanceAu: 1220.039191414,
      exitDistanceAu: 1023.105256446,
      snapshotSha256: "436c5ef0ceb153f1bbeeeb73f422d5583c1a23f68199d237ec18c6cdcc5100b3",
    },
  },
  {
    id: "2I",
    label: "2I/Borisov",
    designation: "C/2019 Q4",
    temporary: false,
    source: {
      authority: "NASA/JPL SBDB",
      orbit: "54",
      solutionDate: "2024-06-24",
      epoch: "2020-Jan-05.0 TDB",
      frame: "heliocentric IAU76/80 ecliptic · J2000",
      ephemeris: "DE441 / SB441-N16",
      observations: 964,
      dataArcDays: 584,
      snapshotSha256: "11e54e021bbc8e5fe7af00a64dd6a18599710a20805409321797e2ee9a9907f4",
      url: "https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=2I&full-prec=1&cd-epoch=1&cd-tp=1",
      note: "The comet solution includes a fitted non-gravitational force model and perihelion offset.",
      noteDe: "Die Kometenlösung enthält ein angepasstes nicht-gravitatives Kraftmodell und einen Perihel-Offset.",
    },
    elements: {
      e: 3.356475782676596,
      aAu: -0.8514922551937886,
      qAu: 2.006520878500843,
      inclinationDeg: 44.05264247909138,
      nodeDeg: 308.1477292269942,
      perihelionArgumentDeg: 209.1236864378081,
    },
    twoBody: {
      entry: { longitudeDeg: 54.342713743518, latitudeDeg: 42.894395282136 },
      exit: { longitudeDeg: 273.812872056934, latitudeDeg: -28.62034324063 },
      velocityKmS: 32.277713317142,
    },
    horizons: {
      entry: { longitudeDeg: 54.297662007028, latitudeDeg: 42.870035554555 },
      exit: { longitudeDeg: 273.806162818718, latitudeDeg: -28.621748210266 },
      entryDifferenceDeg: 0.041026556084,
      exitDifferenceDeg: 0.006054681595,
      entryDistanceAu: 1502.878774275,
      exitDistanceAu: 1230.939192895,
      snapshotSha256: "2d901296786e5c074e22a5cfefb84f87f00a867d177a3a7547aaaf99572bfaba",
    },
  },
  {
    id: "3I",
    label: "3I/ATLAS",
    designation: "C/2025 N1",
    temporary: true,
    source: {
      authority: "NASA/JPL SBDB",
      orbit: "55",
      solutionDate: "2026-10-21",
      epoch: "2026-Oct-27.0 TDB",
      frame: "heliocentric IAU76/80 ecliptic · J2000",
      ephemeris: "DE441 / SB441-N16",
      observations: 117,
      dataArcDays: 378,
      snapshotSha256: "cf809f4901fa1a67d1bc580af8a9bac5b001cefe1119152357950e43245907bf",
      url: "https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=3I&full-prec=1&cd-epoch=1&cd-tp=1",
      note: "JPL labels orbit 55 a temporary solution supporting JWST Program 13145.",
      noteDe: "JPL kennzeichnet Orbit 55 als temporäre Lösung zur Unterstützung des JWST-Programms 13145.",
    },
    elements: {
      e: 6.123467394525528,
      aAu: -0.2638835217034532,
      qAu: 1.351998619400212,
      inclinationDeg: 175.2403121571192,
      nodeDeg: 323.0251782090054,
      perihelionArgumentDeg: 128.7969426041922,
    },
    twoBody: {
      entry: { longitudeDeg: 293.711656579745, latitudeDeg: 2.33436998211 },
      exit: { longitudeDeg: 94.927752076525, latitudeDeg: -3.546184348636 },
      velocityKmS: 57.981170084726,
    },
    horizons: {
      entry: { longitudeDeg: 293.61403968741, latitudeDeg: 2.339803175615 },
      exit: { longitudeDeg: 94.911295333881, latitudeDeg: -3.545460205773 },
      entryDifferenceDeg: 0.097686905356,
      exitDifferenceDeg: 0.016441193757,
      entryDistanceAu: 2763.305316438,
      exitDistanceAu: 2132.175958298,
      snapshotSha256: "7e794bbe69fe820ff7f5f1a8be13245815cac3e7f1b69fec7b8280ce6b43e4c8",
    },
  },
] as const satisfies readonly InterstellarLensObject[];

export const interstellarHistoricalDeclaration = {
  status: "HISTORICAL_DECLARED_HYPOTHESIS",
  sourceSha256: "dafad2726538e2f72eef788e41bb3a817a5f8f43b9948896f7d3b9be1ed4604b",
  rules: [
    "ALGO = phase(3I exit) + 120° + 2°",
    "OLGO = phase(3I exit) + 240° + 2°",
    "Axis 7 = ALGO + φ°",
    "Axis 8 = OLGO − 2φ°",
  ],
  unresolved: [
    "phase operator",
    "latitude rule",
    "covariance propagation",
    "acceptance corridor",
  ],
} as const;
