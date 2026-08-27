# Archive Data Dictionary

This is the canonical vocabulary for the archive. The eventual Convex schema should preserve these concepts rather than flattening everything into articles.

## Person
A person connected to the archive. Fields should include names/aliases, biography note, role, and source-backed relationships.

## Event
A dated or date-ranged occurrence. Fields should include title, date precision, place, summary, participants, related records, and sources.

## Place
A geographic or institutional location such as Deir Mawas, Delga, a church, monastery, office, or cemetery.

## Organization
A church body, media outlet, government body, association, or other institution.

## Publication
A journalistic or reference item. Preserve title, author, publisher, publication date, URL, archive URL if available, quoted/attributed people, and source assessment.

## Source
The provenance record supporting one or more claims. A source can be primary, independent journalism, institutional, reference, archived reproduction, or family/archive material.

## MediaAsset
A photograph, video, scan, audio recording, or other media. Preserve provenance and rights metadata separately from the binary asset.

## Document
A letter, certificate, program, newspaper clipping, PDF, scan, or other documentary object.

## Claim
A discrete factual assertion that can point to one or more sources. Claims allow conflicting accounts to coexist without silently overwriting history.

## Relationship
An explicit connection between two records, e.g. Person participated in Event, Event occurred at Place, Publication covered Event, MediaAsset depicts Person.

## Confidence
Use controlled values: `verified`, `corroborated`, `needs-review`, `unverified`, `disputed`.

## Date precision
Do not force uncertain dates into exact dates. Use `exact`, `month`, `year`, `range`, or `unknown`, with a free-text note where necessary.
