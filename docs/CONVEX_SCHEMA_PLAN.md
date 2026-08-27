# Convex Schema Plan

This document defines the first production data layer for the archive. It is intentionally implementation-neutral until the application package is finalized.

## Core tables

### people
- `slug`
- `displayName`
- `aliases[]`
- `role`
- `bio`
- `confidence`
- `createdAt`
- `updatedAt`

### events
- `slug`
- `title`
- `summary`
- `dateStart`
- `dateEnd`
- `datePrecision`
- `placeId`
- `confidence`
- `createdAt`
- `updatedAt`

### places
- `slug`
- `name`
- `type`
- `parentPlaceId`
- `description`
- `latitude`
- `longitude`

### organizations
- `slug`
- `name`
- `type`
- `website`
- `description`

### publications
- `slug`
- `title`
- `author`
- `publisher`
- `publishedAt`
- `url`
- `archiveUrl`
- `sourceType`
- `sourceAssessment`

### sources
- `title`
- `publisher`
- `author`
- `publishedAt`
- `url`
- `archiveUrl`
- `sourceType`
- `assessment`
- `notes`

### claims
- `statement`
- `eventId`
- `personId`
- `sourceIds[]`
- `confidence`
- `notes`

### mediaAssets
- `type`
- `storageId`
- `title`
- `capturedAt`
- `placeId`
- `eventId`
- `description`
- `rightsStatus`
- `provenance`

### documents
- `storageId`
- `title`
- `documentType`
- `documentDate`
- `sourceId`
- `rightsStatus`
- `description`

### relationships
- `fromType`
- `fromId`
- `relation`
- `toType`
- `toId`
- `sourceIds[]`
- `confidence`

## Design constraints

- Slugs must be stable and human-readable.
- Dates must preserve uncertainty rather than invent precision.
- Search indexes should support Arabic and English aliases.
- Public records should expose provenance.
- Private archival intake must be separable from published content.
- Relationships are first-class records so the archive can evolve into a knowledge graph.
