# Wissa Sobhy Archive — Project Roadmap

## Vision
Build a polished, bilingual-ready digital historical archive for Fr. Wissa Sobhy Tadros. The archive must preserve provenance, distinguish verified facts from claims, and remain useful as the collection grows.

## Product principles
- Archive first, website second: the data model and provenance are the foundation.
- Evidence before assertion: every historical claim should have provenance or be explicitly marked as unverified.
- No irreversible publication of private family material.
- Mobile-first, accessible, fast, and search-engine friendly.
- Arabic is the primary language; architecture should support English without duplicating the data model.
- Every public page should have a stable, human-readable URL.

## Delivery phases

### Phase 0 — Foundation
- [x] Private GitHub repository
- [x] Initial Next.js application
- [x] Initial visual direction
- [x] Architecture and editorial policy
- [x] Data model draft
- [ ] Pin production dependencies
- [ ] Add automated build/lint/typecheck checks
- [ ] Add security/privacy baseline

### Phase 1 — Archive core
- [ ] Convex project and schema
- [ ] People
- [ ] Events
- [ ] Places and churches
- [ ] Sources and citations
- [ ] Articles / press items
- [ ] Photos and media metadata
- [ ] Documents
- [ ] Relationships between records
- [ ] Verification status and editorial notes

### Phase 2 — Public website
- [ ] Refined visual identity
- [ ] Home page
- [ ] Biography
- [ ] Timeline
- [ ] Events
- [ ] People
- [ ] Places
- [ ] Press archive
- [ ] Photo archive
- [ ] Sources
- [ ] Global search
- [ ] Breadcrumbs and related-content navigation

### Phase 3 — SEO and discoverability
- [ ] Metadata per page
- [ ] Open Graph / social cards
- [ ] Sitemap
- [ ] robots.txt
- [ ] Canonicals
- [ ] JSON-LD structured data
- [ ] Internal linking strategy
- [ ] Arabic/English indexing strategy

### Phase 4 — Editorial workflow
- [ ] Admin/editor area
- [ ] Draft → review → verified → published states
- [ ] Source quality classification
- [ ] Conflict/uncertainty notes
- [ ] Change history
- [ ] Media rights metadata

### Phase 5 — Preservation and scale
- [ ] External object storage for originals
- [ ] Backups/export strategy
- [ ] Accessibility audit
- [ ] Performance audit
- [ ] Broken-link monitoring
- [ ] Search quality improvements
- [ ] Optional English public layer

## Content status labels
- VERIFIED — supported by strong evidence
- CORROBORATED — supported by multiple independent sources
- PRIMARY_SOURCE — direct/first-hand material, not necessarily independently corroborated
- FAMILY_ARCHIVE — supplied from the private family archive
- UNVERIFIED — retained for research but not presented as established fact
- DISPUTED — conflicting evidence exists

## Publication rule
No historical claim should be upgraded to VERIFIED merely because it appears on another website. Duplicate copying is not independent corroboration.
