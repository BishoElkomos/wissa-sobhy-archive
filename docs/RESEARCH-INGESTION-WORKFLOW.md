# Research Ingestion Workflow

## Purpose
Convert every useful discovery into a durable, auditable archive record without losing duplicates, provenance, media or uncertainty.

## Pipeline
`Discover → Capture → Identify → Normalize → Deduplicate → Link → Evaluate → Review → Publish`

### 1. Discover
Search Arabic, English and other relevant languages using:
- canonical names;
- aliases/transliterations;
- event-first queries;
- place-first queries;
- institution names;
- newspaper/archive names;
- distinctive quotations;
- image/video/audio searches;
- public social-media pages/posts.

### 2. Capture
Record the source immediately:
- URL;
- title;
- publisher;
- publication date;
- language;
- access date;
- media presence;
- archive reference when available.

### 3. Identify
Determine whether the material concerns the intended person/event/place. A name match alone is insufficient.

### 4. Normalize
Create or reuse canonical entities and attach aliases, titles, dates, locations and relationships.

### 5. Deduplicate
Cluster syndicated copies, mirrors and reposts. Preserve every useful source trace while selecting a canonical source record.

### 6. Link
Connect sources to claims and claims to people, events, places, organizations and media.

### 7. Evaluate
Assign evidence status and note conflicts, source independence and provenance.

### 8. Review
Important public claims require editorial review. High-impact identity claims, quotations, allegations and historical dates receive additional scrutiny.

### 9. Publish
Publish only the appropriate public-facing representation. Keep internal research leads and sensitive information out of public pages unless justified.

## Media ingestion
For images/video/audio, capture source metadata before downloading or transforming anything. Preserve original filenames and distinguish original material from derivatives. Record rights status before public republication.

## Social media ingestion
For public posts, record account/page identity, post date, URL, caption, media, relevant substantive comments, and capture date. Distinguish original testimony from reposted material.

## Source independence
Two sites repeating identical text are not automatically two independent sources. Track syndication/republication relationships.

## Conflicting evidence
Never overwrite a disputed date or identity without recording the competing claim and the evidence used to reach the editorial conclusion.

## Research queues
Maintain explicit queues for:
- `high_priority`
- `needs_corroboration`
- `needs_original_source`
- `media_to_verify`
- `rights_to_verify`
- `identity_to_verify`
- `translation_review`
- `excluded_or_collision`

## Definition of done
A research item is complete when its identity, source provenance, relevant claims, relationships, media and rights status have been evaluated and the resulting record is reproducible by another editor.
