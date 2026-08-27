# Architecture Decisions

## ADR-001 — Archive-first architecture

The product is an archival knowledge system first and a presentation website second. Public pages are projections of structured records, not the canonical data store.

## ADR-002 — Provenance is first-class

Historical claims, media, and documents retain source/provenance metadata. This enables corrections, competing accounts, and future scholarly review without rewriting history.

## ADR-003 — Stable URLs

Public records receive stable human-readable slugs. URL changes should use redirects rather than silently breaking citations.

## ADR-004 — Arabic-first, bilingual-ready

Arabic RTL is the primary experience. Data structures and routing reserve room for English equivalents, aliases, transliteration, and future hreflang support.

## ADR-005 — Private intake, public publishing

Unreviewed family material and editorial drafts remain private. Only approved records become public. Storage and publication permissions are separate concerns.

## ADR-006 — Progressive enhancement

Core historical content must remain usable without client-heavy interactions. JavaScript enhances search, filtering, galleries, maps, and relationships rather than becoming a prerequisite for reading.

## ADR-007 — No premature lock-in

The data model should allow future expansion into Deir Mawas, Delga, the diocese, Anba Agabius, churches, clergy, local history, and related collections without redesigning the core entities.
