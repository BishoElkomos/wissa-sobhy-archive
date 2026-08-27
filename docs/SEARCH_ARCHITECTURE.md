# Search Architecture

## Goal

Make the archive discoverable by people and machines without sacrificing historical precision.

## Searchable entities

People, aliases, events, places, churches, organizations, publications, sources, documents, and media captions.

## Arabic search

Normalize common Arabic presentation differences for indexing/search while preserving the original display value. Support exact names, aliases, transliteration, and meaningful keyword combinations.

## Facets

- record type
- year/date range
- place
- person
- organization
- source type
- confidence/publication status

## Ranking

Prefer exact title/name matches, then aliases, then high-quality source-backed records and contextual relevance. Do not rank a claim higher simply because it contains more repeated keywords.

## Public vs private

Search indexes contain only public records. Draft, private, withdrawn, and internal editorial material must never leak through search results.

## Future capabilities

- autocomplete
- related-record suggestions
- timeline filtering
- map filtering
- bilingual search
- typo tolerance where safe
