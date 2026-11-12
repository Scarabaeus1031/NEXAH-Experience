export const SCC003_DEPTH = 6;
export const SCC003_FACES = 5;

const rawKey = (face, n, k) => `${face}:${n}:${k}`;
export const parseRawKey = (value) => value.split(":").map(Number);

export function choose(n, k) {
  if (k < 0 || k > n) return 0;
  let value = 1;
  for (let i = 1; i <= Math.min(k, n - k); i += 1) value = (value * (n - i + 1)) / i;
  return value;
}

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

function rawPositions(faceCount) {
  const rows = [];
  for (let face = 0; face < faceCount; face += 1) {
    for (let n = 0; n <= SCC003_DEPTH; n += 1) {
      for (let k = 0; k <= n; k += 1) rows.push(rawKey(face, n, k));
    }
  }
  return rows;
}

function classId(members, detached) {
  const triples = members.map(parseRawKey);
  const [face, n, k] = triples[0];
  if (detached) return `R_${face}_${n}_${k}`;
  if (n === 0) return "A";
  if (members.length === 2) {
    const right = triples.find(([, level, position]) => position === level);
    return `S_${n}_${right[0]}`;
  }
  return `I_${face}_${n}_${k}`;
}

function orderKey(node) {
  if (node.id === "A") return [0, 0, 0, 0];
  const [kind, a, b, c = "0"] = node.id.split("_");
  if (kind === "S") return [Number(a), 0, Number(b), 0];
  return [Number(b), 1, Number(a), Number(c)];
}

function compareTuple(left, right) {
  for (let i = 0; i < Math.max(left.length, right.length); i += 1) {
    if ((left[i] ?? 0) !== (right[i] ?? 0)) return (left[i] ?? 0) - (right[i] ?? 0);
  }
  return 0;
}

export const SCC003_STAGES = Object.freeze([
  { key: "raw", label: "Five detached carriers", notation: "5 × P₆", faces: 5, detached: true, closed: false },
  { key: "open-1", label: "One carrier", notation: "K_open(1)", faces: 1, detached: false, closed: false },
  { key: "open-2", label: "First seam identification", notation: "K_open(2)", faces: 2, detached: false, closed: false },
  { key: "open-3", label: "Open chain of three", notation: "K_open(3)", faces: 3, detached: false, closed: false },
  { key: "open-4", label: "Open chain of four", notation: "K_open(4)", faces: 4, detached: false, closed: false },
  { key: "open-5", label: "Open chain of five", notation: "K_open(5)", faces: 5, detached: false, closed: false },
  { key: "closed", label: "Cyclic quotient", notation: "K_closed", faces: 5, detached: false, closed: true },
]);

export function buildSCC003Stage(index) {
  const specification = SCC003_STAGES[index];
  if (!specification) throw new RangeError(`Unknown SCC-003 construction stage ${index}`);
  const raw = rawPositions(specification.faces);
  const unionFind = new UnionFind(raw);

  if (!specification.detached) {
    for (let face = 1; face < specification.faces; face += 1) {
      unionFind.union(rawKey(0, 0, 0), rawKey(face, 0, 0));
    }
    for (let face = 0; face < specification.faces - 1; face += 1) {
      for (let n = 1; n <= SCC003_DEPTH; n += 1) {
        unionFind.union(rawKey(face, n, n), rawKey(face + 1, n, 0));
      }
    }
    if (specification.closed) {
      for (let n = 1; n <= SCC003_DEPTH; n += 1) {
        unionFind.union(rawKey(specification.faces - 1, n, n), rawKey(0, n, 0));
      }
    }
  }

  const grouped = new Map();
  for (const member of raw) {
    const root = unionFind.find(member);
    if (!grouped.has(root)) grouped.set(root, []);
    grouped.get(root).push(member);
  }

  const nodes = [...grouped.values()].map((members) => {
    members.sort();
    const [, n, k] = parseRawKey(members[0]);
    return {
      id: classId(members, specification.detached),
      weight: choose(n, k),
      members,
      level: n,
      seam: members.length === 2,
    };
  }).sort((a, b) => compareTuple(orderKey(a), orderKey(b)));

  const rawToId = new Map();
  for (const node of nodes) for (const member of node.members) rawToId.set(member, node.id);
  const edgeKeys = new Set();
  const incidences = [];
  for (let face = 0; face < specification.faces; face += 1) {
    for (let n = 0; n < SCC003_DEPTH; n += 1) {
      for (let k = 0; k <= n; k += 1) {
        const source = rawToId.get(rawKey(face, n, k));
        for (const child of [k, k + 1]) {
          const target = rawToId.get(rawKey(face, n + 1, child));
          edgeKeys.add(`${source}>${target}`);
          incidences.push([source, target]);
        }
      }
    }
  }

  return {
    ...specification,
    index,
    nodes,
    edges: [...edgeKeys].map((edge) => edge.split(">")),
    incidenceCount: incidences.length,
    rawCount: raw.length,
    identifications: raw.length - nodes.length,
  };
}

export function projectRawMember(member, stageIndex, width = 760, height = 620) {
  const [face, n, k] = parseRawKey(member);
  if (stageIndex === 0) {
    const centers = [[190, 155], [380, 112], [570, 155], [270, 405], [490, 405]];
    const [cx, cy] = centers[face];
    return [cx + (k - n / 2) * 16, cy + n * 18];
  }
  const stage = SCC003_STAGES[stageIndex];
  const centerX = width / 2;
  const centerY = height / 2 + 8;
  const radius = n * 42;
  const step = (Math.PI * 2) / SCC003_FACES;
  const leftAngle = -Math.PI / 2 + face * step;
  const rightAngle = leftAngle + step;
  const left = [centerX + Math.cos(leftAngle) * radius, centerY + Math.sin(leftAngle) * radius];
  const right = [centerX + Math.cos(rightAngle) * radius, centerY + Math.sin(rightAngle) * radius];
  let x = left[0] + (right[0] - left[0]) * (n === 0 ? 0 : k / n);
  let y = left[1] + (right[1] - left[1]) * (n === 0 ? 0 : k / n);
  if (!stage.closed && stage.faces === SCC003_FACES && n > 0) {
    if (face === 0 && k === 0) { x -= 12; y -= 4; }
    if (face === 4 && k === n) { x += 12; y -= 4; }
  }
  return [x, y];
}

export function projectNode(node, stageIndex, width = 760, height = 620) {
  const points = node.members.map((member) => projectRawMember(member, stageIndex, width, height));
  return [
    points.reduce((sum, point) => sum + point[0], 0) / points.length,
    points.reduce((sum, point) => sum + point[1], 0) / points.length,
  ];
}

export function recurrenceForMember(member) {
  const [face, n, k] = parseRawKey(member);
  if (n === 0) return null;
  const left = choose(n - 1, k - 1);
  const right = choose(n - 1, k);
  return { face, n, k, left, right, value: choose(n, k), valid: left + right === choose(n, k) };
}
