# About NEXAH — language disposition

Status: `GERMAN_PUBLIC_BODY / ENGLISH_HEADINGS_RETAINED / ENGLISH_EDITION_SOURCE_PRESERVED`

Date: `2026-10-30`

## Current public rule

- explanatory body copy on `/about/` is German;
- headings, named concepts, work titles and action labels remain English;
- the HTML document language is `de` and the skip link is localized;
- machine-readable identity files remain English and unchanged.

## English edition source

The last complete English About page is preserved in Git at:

```text
commit 4932d78
src/pages/about.astro
```

The maintained English identity, hierarchy, authority map and public-view copy
remain in:

```text
src/data/nexah-identity.ts
```

The German presentation copy lives separately in:

```text
src/data/about-copy.de.ts
```

This record does not activate an English edition, language switcher, new URL,
deployment or publication. A future English edition must select its URL and
release boundary explicitly instead of overwriting the German public page.
