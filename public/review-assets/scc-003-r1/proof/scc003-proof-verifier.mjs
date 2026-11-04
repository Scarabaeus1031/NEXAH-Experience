const DEFAULT_DEPTH = 6;
const DEFAULT_FACES = 5;

class UnionFind {
  constructor(items) {
    this.parent = new Map(items.map((item) => [item, item]));
  }

  find(item) {
    const parent = this.parent.get(item);
    if (parent === item) return item;
    const root = this.find(parent);
    this.parent.set(item, root);
    return root;
  }

  union(left, right) {
    const a = this.find(left);
    const b = this.find(right);
    if (a !== b) this.parent.set(a < b ? b : a, a < b ? a : b);
  }
}

const rawKey = (face, n, k) => `${face}:${n}:${k}`;
const parseRaw = (value) => value.split(":").map(Number);

function choose(n, k) {
  if (k < 0 || k > n) return 0;
  let value = 1;
  for (let i = 1; i <= Math.min(k, n - k); i += 1) value = (value * (n - i + 1)) / i;
  return value;
}

function allRaw(faceCount, depth) {
  const rows = [];
  for (let face = 0; face < faceCount; face += 1) {
    for (let n = 0; n <= depth; n += 1) {
      for (let k = 0; k <= n; k += 1) rows.push(rawKey(face, n, k));
    }
  }
  return rows;
}

function classId(members) {
  const triples = members.map(parseRaw);
  if (triples[0][1] === 0) return "A";
  const n = triples[0][1];
  if (triples.length === 2) {
    const right = triples.find(([, level, k]) => k === level);
    if (!right) throw new Error(`Cannot orient seam class ${members.join(",")}`);
    return `S_${n}_${right[0]}`;
  }
  const [face, level, k] = triples[0];
  return `I_${face}_${level}_${k}`;
}

function canonicalOrder(id) {
  if (id === "A") return [0, 0, 0, 0];
  const [kind, a, b, c = "0"] = id.split("_");
  if (kind === "S") return [Number(a), 0, Number(b), 0];
  return [Number(b), 1, Number(a), Number(c)];
}

function compareTuple(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i += 1) {
    if ((a[i] ?? 0) !== (b[i] ?? 0)) return (a[i] ?? 0) - (b[i] ?? 0);
  }
  return 0;
}

function buildQuotient(faceCount, depth, closed) {
  const raw = allRaw(faceCount, depth);
  const unionFind = new UnionFind(raw);
  for (let face = 1; face < faceCount; face += 1) unionFind.union(rawKey(0, 0, 0), rawKey(face, 0, 0));
  for (let face = 0; face < faceCount - 1; face += 1) {
    for (let n = 1; n <= depth; n += 1) unionFind.union(rawKey(face, n, n), rawKey(face + 1, n, 0));
  }
  if (closed) {
    for (let n = 1; n <= depth; n += 1) unionFind.union(rawKey(faceCount - 1, n, n), rawKey(0, n, 0));
  }

  const grouped = new Map();
  for (const item of raw) {
    const root = unionFind.find(item);
    if (!grouped.has(root)) grouped.set(root, []);
    grouped.get(root).push(item);
  }
  const classes = [...grouped.values()].map((members) => members.sort());
  const byId = new Map(classes.map((members) => [classId(members), members]));
  const ids = [...byId.keys()].sort((a, b) => compareTuple(canonicalOrder(a), canonicalOrder(b)));
  const rawToId = new Map();
  for (const [id, members] of byId) for (const member of members) rawToId.set(member, id);
  return { raw, classes, byId, ids, rawToId };
}

function buildEdges(quotient, faceCount, depth) {
  const edges = new Set();
  const incidences = [];
  for (let face = 0; face < faceCount; face += 1) {
    for (let n = 0; n < depth; n += 1) {
      for (let k = 0; k <= n; k += 1) {
        const source = quotient.rawToId.get(rawKey(face, n, k));
        for (const child of [k, k + 1]) {
          const target = quotient.rawToId.get(rawKey(face, n + 1, child));
          edges.add(`${source}>${target}`);
          incidences.push([source, target]);
        }
      }
    }
  }
  return { edges, incidences };
}

function connectedComponents(ids, edges) {
  const adjacency = new Map(ids.map((id) => [id, new Set()]));
  for (const edge of edges) {
    const [source, target] = edge.split(">");
    adjacency.get(source).add(target);
    adjacency.get(target).add(source);
  }
  const unseen = new Set(ids);
  let components = 0;
  while (unseen.size) {
    components += 1;
    const queue = [unseen.values().next().value];
    unseen.delete(queue[0]);
    while (queue.length) {
      const current = queue.shift();
      for (const neighbor of adjacency.get(current)) {
        if (unseen.delete(neighbor)) queue.push(neighbor);
      }
    }
  }
  return components;
}

function permutations(values) {
  if (values.length <= 1) return [values];
  const result = [];
  values.forEach((value, index) => {
    const rest = [...values.slice(0, index), ...values.slice(index + 1)];
    for (const tail of permutations(rest)) result.push([value, ...tail]);
  });
  return result;
}

const cycleEdge = (a, b) => `${Math.min(a, b)}:${Math.max(a, b)}`;

function faceCycleAutomorphisms(size) {
  const edges = new Set(Array.from({ length: size }, (_, i) => cycleEdge(i, (i + 1) % size)));
  return permutations(Array.from({ length: size }, (_, i) => i)).filter((permutation) =>
    Array.from({ length: size }, (_, i) => edges.has(cycleEdge(permutation[i], permutation[(i + 1) % size]))).every(Boolean),
  );
}

function liftFaceAction(faceAction, quotient) {
  const forward = faceAction[1] === (faceAction[0] + 1) % faceAction.length;
  const nodeMap = new Map();
  for (const [id, members] of quotient.byId) {
    const targets = new Set(members.map((member) => {
      const [face, n, k] = parseRaw(member);
      return quotient.rawToId.get(rawKey(faceAction[face], n, forward ? k : n - k));
    }));
    if (targets.size !== 1) return null;
    nodeMap.set(id, targets.values().next().value);
  }
  return nodeMap;
}

function mapPreservesEdges(nodeMap, edges) {
  for (const edge of edges) {
    const [source, target] = edge.split(">");
    if (!edges.has(`${nodeMap.get(source)}>${nodeMap.get(target)}`)) return false;
  }
  return true;
}

function mapPreservesWeights(nodeMap, weights) {
  return [...nodeMap].every(([source, target]) => weights.get(source) === weights.get(target));
}

function compose(left, right, ids) {
  return new Map(ids.map((id) => [id, left.get(right.get(id))]));
}

function power(mapping, exponent, ids) {
  let result = new Map(ids.map((id) => [id, id]));
  for (let i = 0; i < exponent; i += 1) result = compose(mapping, result, ids);
  return result;
}

function sameMap(left, right, ids) {
  return ids.every((id) => left.get(id) === right.get(id));
}

export function verifySCC003(certificate) {
  const depth = certificate?.parameters?.depth ?? DEFAULT_DEPTH;
  const faceCount = certificate?.parameters?.faces ?? DEFAULT_FACES;
  const expected = certificate.expected;
  const checks = {};
  const check = (name, condition) => { checks[name] = Boolean(condition); };

  const openCounts = [];
  for (let faces = 1; faces <= faceCount; faces += 1) openCounts.push(buildQuotient(faces, depth, false).classes.length);
  const quotient = buildQuotient(faceCount, depth, true);
  const { edges, incidences } = buildEdges(quotient, faceCount, depth);

  const weights = new Map();
  let weightsCompatible = true;
  for (const [id, members] of quotient.byId) {
    const values = new Set(members.map((member) => {
      const [, n, k] = parseRaw(member);
      return choose(n, k);
    }));
    if (values.size !== 1) weightsCompatible = false;
    weights.set(id, values.values().next().value);
  }

  let recurrenceChecks = 0;
  let recurrencePass = true;
  for (let face = 0; face < faceCount; face += 1) {
    for (let n = 1; n <= depth; n += 1) {
      for (let k = 0; k <= n; k += 1) {
        recurrenceChecks += 1;
        recurrencePass &&= choose(n, k) === choose(n - 1, k - 1) + choose(n - 1, k);
      }
    }
  }

  const faceActions = faceCycleAutomorphisms(faceCount);
  const lifted = faceActions.map((action) => ({ action, map: liftFaceAction(action, quotient) }));
  const validLifts = lifted.filter(({ map }) => map && mapPreservesEdges(map, edges) && mapPreservesWeights(map, weights));
  const liftFingerprints = new Set(validLifts.map(({ map }) => quotient.ids.map((id) => map.get(id)).join("|")));
  const rotation = validLifts.find(({ action }) => action.every((value, index) => value === (index + 1) % faceCount))?.map;
  const reflection = validLifts.find(({ action }) => action.every((value, index) => value === (faceCount - index) % faceCount))?.map;
  const identity = new Map(quotient.ids.map((id) => [id, id]));

  check("raw_face_positions_are_140", quotient.raw.length === expected.raw_face_positions);
  check("open_counts_are_28_49_70_91_112", JSON.stringify(openCounts) === JSON.stringify(expected.open_nodes));
  check("cyclic_closure_identifies_six_vertices", openCounts.at(-1) - quotient.classes.length === expected.closure_identifications);
  check("closed_quotient_has_106_vertices", quotient.classes.length === expected.closed_nodes);
  check("directed_edge_set_has_180_edges", edges.size === expected.directed_edges);
  check("face_incidence_has_210_directed_edges", incidences.length === expected.face_edge_incidences);
  check("underlying_quotient_is_connected", connectedComponents(quotient.ids, edges) === expected.connected_components);
  check("seam_equivalence_preserves_weights", weightsCompatible);
  check("all_facewise_pascal_recurrences_hold", recurrencePass && recurrenceChecks === 135);
  check("face_cycle_has_exactly_ten_automorphisms", faceActions.length === expected.typed_automorphism_group_order);
  check("all_face_cycle_actions_have_valid_typed_lifts", validLifts.length === faceActions.length);
  check("the_ten_typed_lifts_are_distinct", liftFingerprints.size === expected.typed_automorphism_group_order);
  check("identity_face_action_has_trivial_lift", sameMap(liftFaceAction([0, 1, 2, 3, 4], quotient), identity, quotient.ids));
  check("rotation_has_order_five", rotation && sameMap(power(rotation, 5, quotient.ids), identity, quotient.ids));
  check("reflection_has_order_two", reflection && sameMap(power(reflection, 2, quotient.ids), identity, quotient.ids));
  check("dihedral_relation_mrm_equals_r_inverse", rotation && reflection && sameMap(compose(reflection, compose(rotation, reflection, quotient.ids), quotient.ids), power(rotation, 4, quotient.ids), quotient.ids));

  const failures = Object.entries(checks).filter(([, pass]) => !pass).map(([name]) => name);
  const nodeIndex = new Map(quotient.ids.map((id, index) => [id, index]));
  return {
    schema: "nexah.scc-003-browser-proof-result/1.0.0",
    identity: certificate.identity,
    source_manifest_sha256: certificate.source_manifest_sha256,
    status: failures.length ? "FAIL" : "PASS",
    verification_mode: certificate.verification_mode,
    summary: {
      open_nodes: openCounts,
      closed_nodes: quotient.classes.length,
      directed_edges: edges.size,
      connected_components: connectedComponents(quotient.ids, edges),
      facewise_recurrence_checks: recurrenceChecks,
      typed_automorphism_group: failures.length ? "UNRESOLVED" : "D5",
      typed_automorphism_group_order: validLifts.length,
    },
    checks,
    failures,
    exactness_argument: certificate.exactness_argument,
    claim_ceiling: certificate.claim_ceiling,
    witness: {
      nodes: quotient.ids.map((id) => ({ id, weight: weights.get(id), members: quotient.byId.get(id) })),
      edges: [...edges].map((edge) => edge.split(">").map((id) => nodeIndex.get(id))),
    },
  };
}

if (typeof process !== "undefined" && process.argv?.[1]?.endsWith("scc003-proof-verifier.mjs")) {
  const { readFile } = await import("node:fs/promises");
  const certificatePath = process.argv[2] ?? new URL("./scc003-proof-certificate.json", import.meta.url);
  const certificate = JSON.parse(await readFile(certificatePath, "utf8"));
  const result = verifySCC003(certificate);
  console.log(JSON.stringify(result, null, 2));
  if (result.status !== "PASS") process.exitCode = 1;
}
