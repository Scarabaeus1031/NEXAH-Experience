# Ecosystem Map Integration

## 1. Interaction Review

The Ecosystem Map is an orientation surface rather than a static illustration.
Every element that names an existing destination now carries a quiet editorial
invitation. Structural containers such as **Publication path** and **Research
path** remain informational, while each place inside those paths is a link.

Interaction follows three rules:

1. an existing place links to the closest existing public destination;
2. an external authority opens its canonical source in a new tab; and
3. a future concept remains inactive and says so directly.

No button treatment, new route or intermediate explanation page was added.

## 2. Destination Mapping

| Map element | Destination | Why it is interactive |
|---|---|---|
| Experience | `/` | Returns to the current public entry. |
| Library | `/library/` | Opens the complete read-only Publication Catalog view. |
| Laboratory | `/laboratory/` | Opens the public orientation to research. |
| Living Atlas | `/atlas/` | Opens the curated relationship registries. |
| Publication Catalog | `/library/#publication-catalog` | Moves directly to the existing catalog section. |
| Reading Spaces | `/library/visitors-guide/read/` | Opens a canonical existing Reading Space. |
| Original Publications | `/library/cartography-laboratory/` | Opens an editorial record that makes local selection and original-source provenance explicit. |
| Project README | canonical GitHub README | Opens the authoritative project introduction. |
| Repository Map | `/laboratory/repository/` | Opens the existing Laboratory explanation and human-readable Repository Map. |
| Repository | canonical public GitHub repository | Opens the living public source. |
| ORION | `/orientation/` | Opens the existing bounded orientation journey. |
| Orientation Studio | none | It is a planned direction, not a current destination. |

The Ecosystem Map explains how responsibilities relate. The Laboratory's
Repository Map continues to answer a different question: how the source
Repository is organized.

## 3. Hover & Accessibility Review

Interactive cards and path entries use native links, a pointer cursor, visible
focus outlines and restrained border/background changes on hover. Each link has
an explicit invitation such as **Open Library**, **Read the README** or **Open
orientation**. External destinations include an external-direction mark and the
appropriate `noopener noreferrer` relationship.

The DOM order matches the visual reading order: Experience, public rooms,
publication path, research path, ORION and finally the future direction. The
future card has no link, hover transition or pointer cursor and is labelled
**Informational only** for both visible and assistive reading.

## 4. Mobile Review

On narrow screens the public rooms and both paths become a single vertical
sequence. Every link retains a comfortable touch area, while the arrows remain
descriptive rather than tappable. No interaction depends on hover, connecting
lines or color. External and internal destinations remain distinguishable in
their invitation text.

## 5. Experience Consistency Review

The completed interaction model uses the existing typography, border language,
spacing, colors and global focus treatment. It rewards exploration without
adding controls or turning the map into a navigation dashboard. Authority stays
visible: the Experience links, the Library owns publications, the Laboratory
orients research, the Living Atlas owns curated relations, the Repository and
original publications remain sources, and ORION retains deterministic routing.

The map remains placed after **Why NEXAH exists** and before **How NEXAH
works**, where a visitor first needs the whole-system relationship.

## 6. Implementation Summary

- Converted Experience and ORION into links to existing destinations.
- Added editorial invitations to the existing public-room links.
- Added links for all six publication and research path entries.
- Reused the Laboratory repository configuration for canonical external URLs.
- Added a stable anchor to the existing Publication Catalog section.
- Kept Orientation Studio inactive and explicitly informational.
- Added interaction, destination and external-link conformance tests.
- Did not modify any catalog, Repository, Laboratory, Living Atlas, Reader or
  ORION authority.
