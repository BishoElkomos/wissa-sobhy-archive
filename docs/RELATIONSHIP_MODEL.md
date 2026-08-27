# Relationship Model

The archive is a historical knowledge graph. Relationships are records with provenance, not informal labels.

## Core relationship types

- `disciple_of` — documented spiritual/educational discipleship
- `spiritual_teacher_of` — teacher/student relationship where direction is explicit
- `ordained_by` — ordination relationship
- `served_with` — documented shared service
- `served_at` — person/service relationship to a church or institution
- `bishop_of` — episcopal office relationship
- `member_of` — institutional membership
- `located_in` — geographic containment
- `part_of_diocese` — church/institutional relationship to diocese
- `participated_in` — participation in an event
- `reported_on` — journalist/publication relationship to event/person
- `mentioned_in` — source mentions entity without proving a stronger relationship
- `pictured_in` — entity is depicted in a media item

## Evidence requirements

A relationship that materially affects a biography or historical interpretation must carry provenance. Direct relationships should cite evidence that supports the relationship itself, not merely co-occurrence.

## Current high-priority relationships

### Father Wissa Sobhy
- `disciple_of` Anba Agabius — family/direct testimony; historical documentary corroboration pending; distinguish pre-monastic and post-monastic phases.
- `disciple_of` Father Sorial Abdo — family/direct testimony; documentary corroboration pending.
- `disciple_of` Father/Archpriest Saleeb Kebeish — family/direct testimony; documentary corroboration pending.
- `ordained_by` Anba Agabius — published 2026 anniversary reporting supports the role; exact co-ordainers should be verified from the original church record.

### Nader Shokry
- `reported_on` Deir Mawas events and Father Wissa — supported by published reporting.
- Personal relationship with Father Wissa — **not assumed**; requires direct evidence.

### Anba Botros / Bakhter
- `bishop_of` Diocese of Deir Mawas and Delga — supported by church/public reporting.
- Relationship to Father Wissa — record only when an event/source explicitly supports it.

## Temporal relationships

When possible, relationships should include `start_date`, `end_date`, and `date_precision`. A relationship can be true for one period and not another; the model must not flatten historical change.
