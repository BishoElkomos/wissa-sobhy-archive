# Internationalization Architecture

## Decision
The archive is bilingual at launch: **العربية (ar)** and **English (en)**. The data model and UI must be designed from day one for additional languages without restructuring the archive.

## Language principles
- Arabic is a first-class canonical editorial language, not a translated afterthought.
- English is a first-class scholarly/international access language.
- Additional languages may be added later (for example French, German, Italian, Spanish and others) without duplicating entity identities.
- A person, place, event, organization or source has one canonical entity ID and multiple localized labels/content fields.
- Source quotations remain in their original language, with translations linked rather than replacing the original.

## Recommended route model
Use locale-prefixed routes:
- `/ar/` — العربية
- `/en/` — English
- future: `/fr/`, `/de/`, `/it/`, `/es/`, etc.

For the application, locale should be resolved from the URL first, then an explicit user preference, then browser preference, with Arabic as the safe default for the initial archive.

## Content model
Avoid separate independent records such as `wissa-ar` and `wissa-en`. Use one entity:

```text
entity_id: person-wissa-sobhy
labels:
  ar: القمص ويصا صبحي تادرس
  en: Archpriest Wissa Sobhy Tadrous
content:
  ar: ...
  en: ...
```

For future languages:

```text
labels:
  ar: ...
  en: ...
  fr: ...
```

Missing translations must remain explicitly missing; do not machine-fill published historical claims without editorial review.

## Ecclesiastical titles
Titles must be localized semantically, not mechanically. Preserve the Arabic ecclesiastical form where appropriate and provide a carefully reviewed English equivalent. Significant historical titles should retain the original Arabic in the record.

## Dates
Store dates in ISO form internally (`YYYY-MM-DD`) and render them according to locale. Preserve uncertain dates as structured uncertainty, e.g. `circa`, year-only, or conflicting claims, rather than inventing precision.

## Names and transliteration
Store:
- canonical entity name;
- Arabic display name;
- English display name;
- source-preserved spellings/transliterations;
- aliases and historical variants.

This is essential for multilingual discovery of Wissa Sobhy, Wissa Sobhy Tadrous, Wisa Soubhy Tadrous and other source spellings.

## Search
Search must index:
- Arabic names and aliases;
- English names and aliases;
- original-language source titles;
- transliterations;
- Arabic/English place variants;
- event aliases.

A search result should point to one canonical entity/event rather than duplicate records by language.

## SEO and structured metadata
Each localized page should have:
- localized `<title>`;
- localized meta description;
- canonical URL for that locale;
- `hreflang` links to available locales;
- Open Graph and social metadata in the page language;
- Schema.org structured data where appropriate;
- no false alternate-language URL if that translation does not exist.

## Editorial workflow
1. Research/source captured in original language.
2. Claim normalized into the canonical data model.
3. Arabic editorial version reviewed.
4. English scholarly version reviewed.
5. Additional translations added as localized derivatives of the same entity/claim.
6. Every translation retains a relationship to the original source.

## Future expansion
The architecture must support multilingual expansion across:
- Father Wissa Sobhy's biography and ministry;
- Anba Agabius;
- Anba Boktor;
- Diocese of Deir Mawas and Delga;
- Deir Mawas and Delga local history;
- churches and institutions;
- historical events;
- press coverage;
- photographs, video and audio;
- archival documents.
