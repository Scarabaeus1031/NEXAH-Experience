# SCC-003-R1 — Optional Pentagon Tile Review Addendum

Status: `SUPPLEMENTARY REVIEW QUESTION / OWNER_AUTHORIZED_PUBLIC_REVIEW`
Related identity: `SCC-003 / A0OE:PASCAL_PENTAGON_D5_TEST`  
Scientific home: `A0 Paper C §11.2 / bounded 28-address fold ledger`  
Review role: `METHOD EXAMPLE / SUPPLEMENTARY REVIEW POINT / NOT A NEW FINDING`  
Effect on frozen paper: `NONE`  
Effect on claims C1–C6: `NONE`

## Declared display

- The depth-six Pascal carrier has seven rows and
  `1 + 2 + ... + 7 = 28` positions.
- The compared TESA display has `4 × 7 = 28` internal addresses.
- Marker `29` remains external to both 28-address carriers.
- In the fold view, marker `29` is displayed as a held pentagonal tile or
  view controller.

The shared invariant is cardinality `28` only. The display does not identify
the two carriers and does not transport TESA adjacency, Pascal recurrence, a
29th vertex or a new seam into the frozen 106-node SCC-003 quotient.

## Double-tile count control

The notebook now records a second, deliberately non-geometric control. Two
faces with local addresses `(f,a)`, where `f in {L,R}` and `a in 1...28`,
contain 56 address occurrences. Their count depends on the declared namespace:

| Ledger | Records | Prime labels | Positions coprime to 30 |
| --- | ---: | ---: | ---: |
| Local face addresses `(f,a)` | 56 | `2 × pi(28) = 18` | `2 × 7 = 14` |
| Concatenated audit index `n in 1...56` | 56 | `pi(56) = 16` | `15` |

The unequal derived counts (`18 != 16`, `14 != 15`) do not describe a change
in the tile. They expose a change of namespace. This is the intended control:
equal record cardinality does not identify an indexing rule, adjacency or
placement operator.

## Prime-balance example

For a full 120-number package, the mod-30 wheel exposes exactly 32 positions
coprime to 2, 3 and 5. The notebook separates those positions into prime gates
and secondary composite stops:

- `1000 <= n < 1120`: `32 = 19 prime gates + 13 secondary stops`.
- `1120 <= n < 1240`: `32 = 16 prime gates + 16 secondary stops`.
- `1240 <= n < 1360`: `32 = 14 prime gates + 18 secondary stops`.

Across the declared extended audit `1120 <= n < 1360`, there are 30 primes
and 29 internal consecutive-prime gaps. Their exact frequency ledger is
`Delta2 × 6`, `Delta4 × 4`, `Delta6 × 9`, `Delta8 × 2`, `Delta10 × 3`,
`Delta12 × 3`, `Delta18 × 1`, `Delta22 × 1`. Gap 4 is the conventional
cousin-prime gap; gap 6 is the conventional sexy-prime gap.

The transition `1031 | 1032 | 1033` is typed separately. `1031` and `1033`
are consecutive primes (`p173`, `p174`); `1032 = 2^3 × 3 × 43` is their even
midpoint and a base stop outside the mod-30 wheel. Prime gaps are derived
distances between admitted prime gates, not additional nodes.

`1001 = 7 × 11 × 13` is a triple-marked secondary stop. This coincidence does
not exhaust the three factors, create a prime-free or prime-rich zone, or
predict the primality of following values.

Likewise, `1032 = 6 × 172` does not protect its two neighbours. Every multiple
of 6 has adjacent wheel candidates `6k-1` and `6k+1`; separate divisibility
tests determine whether either candidate is prime. The 120-package is four
repetitions of the mod-30 wheel. It is a useful ledger width, not a stronger
sieve and not a theorem that smooths higher-square effects.

As a placement control, the Dürer and Khajuraho 4×4 squares retain the same
labels `1...16` and magic sum 34 while using different declared operators
(`R180` and `T(2,2)`). Equal values and equal counts therefore do not establish
geometric identity.

## Optional human-review question

Is the fold display a clear and reversible address-preserving view of the
declared `1...28` source addresses, while keeping marker `29` visibly external
and avoiding any implication of carrier identity?

Please report the earliest address, fold step or return step that is ambiguous
or non-reconstructible. This is a display-review question, not a seventh SCC-003
formal claim.

## Inspection route

Open the source-bound comparator:

`/scc-003-r1/generation-study/#pascal-tesa-title`

Open the count-control ledger:

`/scc-003-r1/generation-study/#prime-balance-title`

The frozen review PDF, proof capsule, reproducible packet and their manifest
remain unchanged.
