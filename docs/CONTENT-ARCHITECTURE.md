# Content Architecture

## Objective
Create an editorial and data architecture that supports a distinguished bilingual historical archive now, while allowing the collection to grow into a wider connected history of Deir Mawas, its diocese, clergy, churches, institutions, people and events.

## Primary collections
1. **People** — clergy, bishops, family members, mentors, friends, public officials, journalists, witnesses and other historically relevant figures.
2. **Events** — ordinations, elevations, church dedications, pastoral milestones, civic events, crises, attacks, restoration, official visits and commemorations.
3. **Places** — cities, villages, churches, monasteries, diocesan buildings, police stations, public institutions and historically significant sites.
4. **Organizations** — Diocese, churches, governorate, local administration, security bodies, media organizations, human-rights organizations and other institutions.
5. **Sources** — books, archival pages, newspapers, magazines, official records, interviews, social posts and external archives.
6. **Media** — photographs, video, audio, scanned documents, image galleries and embedded external media.
7. **Articles** — long-form biographies, historical essays, event reconstructions, oral-history features and source-critical studies.
8. **Claims** — atomic historical assertions linked to evidence.

## Canonical relationship model
Every important historical statement should be representable as a graph relationship:

`Person -> participated_in -> Event`

`Person -> served_at -> Organization`

`Person -> associated_with -> Person`

`Event -> occurred_at -> Place`

`Event -> documented_by -> Source`

`Source -> contains -> Claim`

`Claim -> concerns -> Person/Event/Place/Organization`

`Media -> depicts_or_documents -> Person/Event/Place`

`Source -> republishes_or_derives_from -> Source`

## Person pages
A person page should contain:
- canonical name;
- ecclesiastical title(s) with historical validity dates when known;
- Arabic and English names;
- aliases/transliterations;
- biography;
- chronology;
- service/ministry;
- relationships;
- associated places and institutions;
- related events;
- quotations;
- photographs/video/audio;
- source list;
- evidence notes and unresolved questions.

## Event pages
Each event should contain:
- event name in Arabic and English;
- date or date range;
- place;
- historical context;
- participants;
- narrative reconstruction;
- primary/independent sources;
- media;
- conflicting accounts;
- timeline links;
- related events.

## Source pages
A source record should preserve:
- title;
- publisher;
- author;
- publication date;
- event date if different;
- language;
- country;
- original URL;
- archived URL when available;
- source type;
- source relationship (original/republication/archive/translation/secondary);
- evidence grade;
- extracted claims;
- people/places/events mentioned;
- media contained;
- access/rights notes.

## Long-form editorial content
Articles should add interpretation and context without replacing source records. A historical article can synthesize dozens of sources, while each underlying claim remains traceable through the data layer.

## Bilingual publishing
Every canonical entity can expose Arabic and English editorial content under the same entity ID. Missing translations remain visible as unavailable rather than being silently fabricated. Future locales can be attached without duplicating entities.

## Media-first archival practice
Media is evidence. For each image/video/audio item record provenance, date, location, people shown when reliably identified, event, original publisher, rights status, source URL, archival URL, and whether the item is original, derivative or a repost.

## SEO
Build discoverability around meaningful entities and relationships, not keyword stuffing. Use localized titles/descriptions, canonical URLs, hreflang, Open Graph, structured data and strong internal linking between person/event/place/source pages.

## Future expansion
The same architecture can later support dedicated collections for:
- the history and legacy of Anba Agabius;
- Anba Boktor and the contemporary diocese;
- Diocese of Deir Mawas and Delga;
- Deir Mawas and Delga local history;
- individual churches and monasteries;
- diocesan clergy and service history;
- civil administration and local history;
- multilingual press archives.
