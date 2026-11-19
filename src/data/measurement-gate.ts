export type MeasurementQuantity = {
  id: string;
  symbol: string;
  type: string;
  typeDe: string;
  display: string;
  unit: string;
  qualifier: string;
  qualifierDe: string;
  note: string;
  noteDe: string;
};

export type MeasurementCase = {
  id: string;
  label: string;
  subtitle: string;
  subtitleDe: string;
  operator: "CONIC_GATE" | "ORBIT_COMPARATOR" | "RESONANCE_SORTER" | "QRT_RECORD";
  analogy: boolean;
  source: {
    authority: string;
    title: string;
    url: string;
    version: string;
    epoch: string;
    retrieved: string;
    references?: readonly { authority: string; title: string; url: string }[];
  };
  carrier: {
    object: string;
    frame: string;
    frameDe: string;
  };
  quantities: readonly MeasurementQuantity[];
  trace: {
    title: string;
    titleDe: string;
    text: string;
    textDe: string;
  };
  return: {
    status: string;
    class: string;
    preserves: readonly string[];
    preservesDe: readonly string[];
    suppresses: readonly string[];
    suppressesDe: readonly string[];
    nonclaims: readonly string[];
    nonclaimsDe: readonly string[];
  };
};

export const measurementGateCases = [
  {
    id: "earth-sun-control",
    label: "Earth–Sun",
    subtitle: "Bound conic control",
    subtitleDe: "Gebundene Kegelschnitt-Kontrolle",
    operator: "CONIC_GATE",
    analogy: false,
    source: {
      authority: "NASA NSSDC",
      title: "Earth Fact Sheet",
      url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html",
      version: "reference fact sheet",
      epoch: "reference values",
      retrieved: "2026-11-19",
    },
    carrier: {
      object: "Earth around the Sun",
      frame: "heliocentric two-body orientation model",
      frameDe: "heliozentrisches Zweikörper-Orientierungsmodell",
    },
    quantities: [
      {
        id: "e",
        symbol: "e",
        type: "orbital eccentricity",
        typeDe: "Bahnexzentrizität",
        display: "0.0167",
        unit: "dimensionless",
        qualifier: "rounded reference value",
        qualifierDe: "gerundeter Referenzwert",
        note: "0 ≤ e < 1 classifies the idealized conic as elliptic.",
        noteDe: "0 ≤ e < 1 klassifiziert den idealisierten Kegelschnitt als elliptisch.",
      },
      {
        id: "a",
        symbol: "a",
        type: "semi-major axis",
        typeDe: "große Halbachse",
        display: "1.000",
        unit: "au",
        qualifier: "declared reference scale",
        qualifierDe: "deklarierte Referenzskala",
        note: "A semi-major axis is a distance scale, not a diameter or separation.",
        noteDe: "Eine große Halbachse ist eine Distanzskala, kein Durchmesser und keine Separation.",
      },
    ],
    trace: {
      title: "Elliptic return class",
      titleDe: "Elliptische Return-Klasse",
      text: "The typed value crosses the conic classifier and returns BOUND / ELLIPTIC.",
      textDe: "Der typisierte Wert passiert den Kegelschnitt-Klassifikator und liefert BOUND / ELLIPTIC zurück.",
    },
    return: {
      status: "PASS_TYPED_CLASSIFICATION",
      class: "ELLIPTIC",
      preserves: ["source identity", "quantity type", "unit", "conic class"],
      preservesDe: ["Quellenidentität", "Größentyp", "Einheit", "Kegelschnitt-Klasse"],
      suppresses: ["perturbations", "full ephemeris", "uncertainty propagation"],
      suppressesDe: ["Störungen", "vollständige Ephemeride", "Unsicherheitsfortpflanzung"],
      nonclaims: ["a perfect two-body universe", "an ephemeris drawn to scale"],
      nonclaimsDe: ["ein perfektes Zweikörperuniversum", "eine maßstäbliche Ephemeride"],
    },
  },
  {
    id: "3i-atlas-jpl-55",
    label: "3I/ATLAS",
    subtitle: "Hyperbolic passage",
    subtitleDe: "Hyperbolischer Durchgang",
    operator: "CONIC_GATE",
    analogy: false,
    source: {
      authority: "NASA/JPL SBDB",
      title: "C/2025 N1 (ATLAS)",
      url: "https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=3I%2FATLAS&full-prec=1&cd-epoch=1",
      version: "solution 55 · 2026-10-21",
      epoch: "2026-10-27.0 TDB",
      retrieved: "2026-11-19",
    },
    carrier: {
      object: "C/2025 N1 (ATLAS)",
      frame: "heliocentric J2000 ecliptic osculating orbit",
      frameDe: "heliozentrische oskulierende J2000-Ekliptikbahn",
    },
    quantities: [
      {
        id: "e",
        symbol: "e",
        type: "orbital eccentricity",
        typeDe: "Bahnexzentrizität",
        display: "6.123467",
        unit: "dimensionless",
        qualifier: "JPL solution 55",
        qualifierDe: "JPL-Lösung 55",
        note: "e > 1 classifies this pinned osculating conic as hyperbolic.",
        noteDe: "e > 1 klassifiziert diesen eingefrorenen oskulierenden Kegelschnitt als hyperbolisch.",
      },
      {
        id: "a",
        symbol: "a",
        type: "semi-major axis",
        typeDe: "große Halbachse",
        display: "−0.263884",
        unit: "au",
        qualifier: "JPL solution 55",
        qualifierDe: "JPL-Lösung 55",
        note: "The negative value is the conventional hyperbolic-orbit parameter, not a negative measured distance.",
        noteDe: "Der negative Wert ist der konventionelle Hyperbelparameter, keine negativ gemessene Entfernung.",
      },
      {
        id: "q",
        symbol: "q",
        type: "perihelion distance",
        typeDe: "Periheldistanz",
        display: "1.351999",
        unit: "au",
        qualifier: "JPL solution 55",
        qualifierDe: "JPL-Lösung 55",
        note: "Perihelion distance is distinct from semi-major axis and eccentricity.",
        noteDe: "Die Periheldistanz ist von großer Halbachse und Exzentrizität zu unterscheiden.",
      },
    ],
    trace: {
      title: "Hyperbolic passage class",
      titleDe: "Hyperbolische Durchgangsklasse",
      text: "The pinned solution returns PASSAGE / HYPERBOLIC and keeps solution and epoch attached.",
      textDe: "Die eingefrorene Lösung liefert PASSAGE / HYPERBOLIC und hält Lösung sowie Epoche gebunden.",
    },
    return: {
      status: "PASS_TYPED_CLASSIFICATION",
      class: "HYPERBOLIC",
      preserves: ["JPL solution", "epoch", "quantity type", "conic class"],
      preservesDe: ["JPL-Lösung", "Epoche", "Größentyp", "Kegelschnitt-Klasse"],
      suppresses: ["future orbit updates", "full covariance", "non-gravitational detail"],
      suppressesDe: ["künftige Bahnupdates", "vollständige Kovarianz", "nicht-gravitative Details"],
      nonclaims: ["that future values remain unchanged", "that NEXAH caused the orbit"],
      nonclaimsDe: ["dass künftige Werte unverändert bleiben", "dass NEXAH die Bahn verursacht hat"],
    },
  },
  {
    id: "2026-ed138-eris-comparator",
    label: "2026 ED₁₃₈",
    subtitle: "Candidate at Neptune's 12:7 edge",
    subtitleDe: "Kandidat am Rand der Neptun-12:7-Resonanz",
    operator: "ORBIT_COMPARATOR",
    analogy: false,
    source: {
      authority: "Holman et al. / arXiv",
      title: "2026 ED138: A Large Trans-Neptunian Object in Early Rubin Observatory Data",
      url: "https://arxiv.org/abs/2610.38693",
      version: "arXiv:2610.38693 · discovery paper",
      epoch: "barycentric elements · published 2026-10-28",
      retrieved: "2026-11-19",
      references: [
        {
          authority: "NASA/JPL SBDB",
          title: "136199 Eris",
          url: "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=136199",
        },
        {
          authority: "NSF–DOE Vera C. Rubin Observatory",
          title: "Rubin's first dwarf-planet candidate",
          url: "https://rubinobservatory.org/news/rubin-first-dwarf-planet-candidate",
        },
      ],
    },
    carrier: {
      object: "2026 ED138 / Eris comparison",
      frame: "barycentric orbital elements; Eris only as an explicitly separate reference orbit",
      frameDe: "baryzentrische Bahnelemente; Eris nur als ausdrücklich getrennte Referenzbahn",
    },
    quantities: [
      {
        id: "a",
        symbol: "a",
        type: "barycentric semi-major axis",
        typeDe: "baryzentrische große Halbachse",
        display: "43.0910",
        unit: "au",
        qualifier: "adopted discovery-paper fit",
        qualifierDe: "übernommener Fit der Entdeckungsarbeit",
        note: "Eris reaches much farther outward; a comparable perihelion does not make the two orbits equivalent.",
        noteDe: "Eris reicht sehr viel weiter nach außen; ein vergleichbares Perihel macht die beiden Bahnen nicht gleich.",
      },
      {
        id: "e",
        symbol: "e",
        type: "barycentric orbital eccentricity",
        typeDe: "baryzentrische Bahnexzentrizität",
        display: "0.1387",
        unit: "dimensionless",
        qualifier: "rounded from the discovery-paper fit",
        qualifierDe: "aus dem Fit der Entdeckungsarbeit gerundet",
        note: "ED138 is substantially less eccentric than Eris (approximately 0.44).",
        noteDe: "ED138 ist deutlich weniger exzentrisch als Eris (ungefähr 0,44).",
      },
      {
        id: "i",
        symbol: "i",
        type: "orbital inclination",
        typeDe: "Bahnneigung",
        display: "24.4339",
        unit: "degrees",
        qualifier: "barycentric ecliptic J2000",
        qualifierDe: "baryzentrische J2000-Ekliptik",
        note: "The high inclination supports the hot-classical classification; it is not a direct record of one unique encounter.",
        noteDe: "Die hohe Neigung stützt die Hot-Classical-Klassifikation; sie ist kein direkter Nachweis einer einzelnen Begegnung.",
      },
      {
        id: "q",
        symbol: "q",
        type: "perihelion distance",
        typeDe: "Periheldistanz",
        display: "37.1130",
        unit: "au",
        qualifier: "adopted discovery-paper fit",
        qualifierDe: "übernommener Fit der Entdeckungsarbeit",
        note: "Its perihelion lies in the same broad outer-system neighborhood as Eris, while the full orbit remains distinct.",
        noteDe: "Sein Perihel liegt in derselben weiten Außensystem-Nachbarschaft wie das von Eris, während die Gesamtbahn verschieden bleibt.",
      },
      {
        id: "diameter",
        symbol: "D",
        type: "albedo-dependent diameter estimate",
        typeDe: "albedoabhängige Durchmesserschätzung",
        display: "612–1530",
        unit: "km",
        qualifier: "for assumed geometric albedo 0.25–0.04",
        qualifierDe: "bei angenommener geometrischer Albedo 0,25–0,04",
        note: "This range makes ED138 a dwarf-planet candidate, not a confirmed dwarf planet or a measured 1530 km body.",
        noteDe: "Diese Spanne macht ED138 zu einem Zwergplanetenkandidaten, nicht zu einem bestätigten Zwergplaneten oder einem gemessenen 1530-km-Körper.",
      },
      {
        id: "resonance",
        symbol: "12:7",
        type: "candidate mean-motion resonance with Neptune",
        typeDe: "mögliche mittlere Bewegungsresonanz mit Neptun",
        display: "93 / 201",
        unit: "integrated clones",
        qualifier: "46% resonant fraction in the discovery paper",
        qualifierDe: "46 % resonanter Anteil in der Entdeckungsarbeit",
        note: "The nominal orbit lies at the resonance edge; membership is not settled.",
        noteDe: "Die nominelle Bahn liegt am Resonanzrand; die Zugehörigkeit ist nicht geklärt.",
      },
    ],
    trace: {
      title: "Same neighborhood, different orbit",
      titleDe: "Gleiche Nachbarschaft, andere Bahn",
      text: "The comparison keeps ED138's measured fit, Eris as a separate reference, and the unsettled resonance status visible at once.",
      textDe: "Der Vergleich hält ED138s gemessenen Fit, Eris als getrennte Referenz und den ungeklärten Resonanzstatus zugleich sichtbar.",
    },
    return: {
      status: "PASS_SOURCE_BOUND_COMPARISON",
      class: "HOT_CLASSICAL_TNO / RESONANCE_EDGE_CANDIDATE",
      preserves: ["discovery-paper source", "barycentric frame", "quantity type", "candidate labels"],
      preservesDe: ["Quelle der Entdeckungsarbeit", "baryzentrischer Rahmen", "Größentyp", "Kandidatenkennzeichnungen"],
      suppresses: ["full covariance", "clone histories", "Eris ephemeris", "surface-composition inference"],
      suppressesDe: ["vollständige Kovarianz", "Clone-Verläufe", "Eris-Ephemeride", "Ableitung der Oberflächenzusammensetzung"],
      nonclaims: ["confirmed 12:7 membership", "confirmed dwarf-planet status", "physical identity with Eris", "a unique Neptune encounter history"],
      nonclaimsDe: ["bestätigte 12:7-Zugehörigkeit", "bestätigter Zwergplanetenstatus", "physische Identität mit Eris", "eine eindeutige Neptun-Begegnungsgeschichte"],
    },
  },
  {
    id: "jupiter-resonance-sorter",
    label: "Jupiter",
    subtitle: "Resonance coordinates",
    subtitleDe: "Resonanzkoordinaten",
    operator: "RESONANCE_SORTER",
    analogy: false,
    source: {
      authority: "NASA/JPL Solar System Dynamics",
      title: "Asteroid Main-Belt Distribution",
      url: "https://ssd.jpl.nasa.gov/diagrams/mb_hist.html",
      version: "derived fixture · aJ = 5.203 au",
      epoch: "declared comparison scale",
      retrieved: "2026-11-19",
    },
    carrier: {
      object: "Jupiter / inner small-body resonances",
      frame: "heliocentric semi-major-axis comparison",
      frameDe: "heliozentrischer Vergleich großer Halbachsen",
    },
    quantities: [
      ["4:1", "2.065"], ["3:1", "2.501"], ["5:2", "2.825"], ["7:3", "2.958"],
      ["2:1", "3.278"], ["3:2", "3.971"], ["1:1", "5.203"],
    ].map(([ratio, value]) => ({
      id: ratio,
      symbol: `a${ratio}`,
      type: `${ratio} mean-motion resonance radius`,
      typeDe: `${ratio}-Radius der mittleren Bewegungsresonanz`,
      display: value,
      unit: "au",
      qualifier: "derived from declared aJ = 5.203 au",
      qualifierDe: "aus deklariertem aJ = 5.203 au abgeleitet",
      note: "A resonance coordinate is not an automatic fate for every body.",
      noteDe: "Eine Resonanzkoordinate ist kein automatisches Schicksal jedes Körpers.",
    })),
    trace: {
      title: "Resonance coordinate",
      titleDe: "Resonanzkoordinate",
      text: "The ratio returns a derived semi-major-axis location. Clear, trap and scatter still require conditions and time.",
      textDe: "Das Verhältnis liefert eine abgeleitete Position der großen Halbachse. Clear, Trap und Scatter benötigen weiterhin Bedingungen und Zeit.",
    },
    return: {
      status: "PASS_DERIVATION_REPRODUCED",
      class: "MEAN_MOTION_RESONANCE_LOCATION",
      preserves: ["declared Jupiter scale", "ratio", "derived radius", "unit"],
      preservesDe: ["deklarierte Jupiterskala", "Verhältnis", "abgeleiteter Radius", "Einheit"],
      suppresses: ["eccentricity", "inclination", "libration", "long-term integration"],
      suppressesDe: ["Exzentrizität", "Inklination", "Libration", "Langzeitintegration"],
      nonclaims: ["that every resonance clears", "that every object is trapped"],
      nonclaimsDe: ["dass jede Resonanz räumt", "dass jedes Objekt eingefangen wird"],
    },
  },
  {
    id: "saturn-titan-qrt",
    label: "Saturn–Titan",
    subtitle: "QRT record analogy",
    subtitleDe: "QRT-Schallplattenanalogie",
    operator: "QRT_RECORD",
    analogy: true,
    source: {
      authority: "NEXAH Solar Clockwork custody",
      title: "Saturn–Titan · QRT Record",
      url: "/laboratory/roedelheim-observatory/measurement-gate/#source-boundaries",
      version: "preserved source HTML",
      epoch: "custody 2026-09-14",
      retrieved: "2026-11-19",
    },
    carrier: {
      object: "Record-format analogy",
      frame: "carrier / cut / mask / trace / return",
      frameDe: "Träger / Schnitt / Maske / Spur / Return",
    },
    quantities: [
      {
        id: "ep45", symbol: "EP", type: "record carrier format", typeDe: "Tonträgerformat", display: "7″ · 45", unit: "rpm",
        qualifier: "typical format association", qualifierDe: "typische Formatzuschreibung",
        note: "A compact cut and playback format.", noteDe: "Ein kompaktes Schnitt- und Wiedergabeformat.",
      },
      {
        id: "lp33", symbol: "LP", type: "record carrier format", typeDe: "Tonträgerformat", display: "12″ · 33⅓", unit: "rpm",
        qualifier: "typical format association", qualifierDe: "typische Formatzuschreibung",
        note: "A slower long-playing carrier format.", noteDe: "Ein langsameres Langspiel-Trägerformat.",
      },
      {
        id: "sh78", symbol: "78", type: "record carrier format", typeDe: "Tonträgerformat", display: "10″ · 78", unit: "rpm",
        qualifier: "historical shellac association", qualifierDe: "historische Schellack-Zuschreibung",
        note: "A historical rapid format with materially recorded grooves.", noteDe: "Ein historisches schnelles Format mit materiell gespeicherter Rillenspur.",
      },
    ],
    trace: {
      title: "Material record analogy",
      titleDe: "Materielle Record-Analogie",
      text: "The groove stands for a stored trace that can be compared on return.",
      textDe: "Die Rille steht für eine gespeicherte Spur, die beim Return verglichen werden kann.",
    },
    return: {
      status: "N_A_ANALOGY_ONLY",
      class: "ORIENTATION_ANALOGY",
      preserves: ["carrier identity", "selected format", "trace comparison"],
      preservesDe: ["Trägeridentität", "gewähltes Format", "Spurvergleich"],
      suppresses: ["measured Saturn–Titan dynamics", "physical transfer function"],
      suppressesDe: ["gemessene Saturn–Titan-Dynamik", "physische Übertragungsfunktion"],
      nonclaims: ["that Saturn is a record player", "that QRT is a universal physical operator"],
      nonclaimsDe: ["dass Saturn ein Plattenspieler ist", "dass QRT ein universeller physischer Operator ist"],
    },
  },
] as const satisfies readonly MeasurementCase[];
