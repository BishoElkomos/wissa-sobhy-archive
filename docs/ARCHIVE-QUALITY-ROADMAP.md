# Wissa Sobhy Tadros Archive — Quality & Development Roadmap

**Assessment date:** 2026-09-02

## 1. Neutral assessment

The archive has moved beyond a simple biography website and now has the beginnings of a real digital historical archive: Arabic and English editions, a separate Metropolitan Agabius record, a biographical timeline, historical events, media, sources and search, plus a dedicated visual/archive design layer.

The strongest part of the current architecture is the separation between narrative pages and structured data. The main weakness is not lack of pages; it is **evidence architecture and consistency**. Several older source records use overly generous reliability labels, some metadata totals are inconsistent, and parts of the English navigation previously crossed into Arabic pages. The next phase therefore prioritizes data integrity and research traceability over adding more decorative UI.

## 2. Current priorities

### P0 — Evidence integrity
- Treat current and former roles as separate facts.
- Prefer institutional/primary records for institutional claims.
- Distinguish published reporting, family-held originals, oral testimony and secondary references.
- Never upgrade an uncertain event into a confirmed fact merely because it appears elsewhere in the archive.
- Keep source IDs stable so events, timeline records and citations can refer to them.

### P1 — Information architecture
Target model:

`Person → Event → Date → Place → Media → Source`

Each important historical claim should be traceable to one or more source IDs. People and places should eventually become first-class archive entities rather than being repeated as free text.

### P1 — Bilingual consistency
Arabic and English pages must have equivalent navigation and equivalent evidence standards. Internal links must remain inside the correct language edition unless an intentional language switch is being used.

### P2 — Media provenance
Every image/video record should eventually carry:
- source URL;
- original publisher/owner when known;
- date or approximate date;
- people/places shown;
- rights/provenance status;
- confidence level;
- whether the archive has an original copy.

No image should be presented as an archive-owned asset unless its provenance and rights are established.

### P2 — Accessibility and QA
The site should be checked for:
- keyboard navigation and visible focus;
- heading hierarchy;
- mobile layouts;
- reduced-motion behavior;
- broken internal links;
- missing external URLs;
- JSON loading failures;
- language/hreflang consistency;
- basic structured-data validity.

## 3. Development sequence

### Phase A — Stabilize
1. Fix cross-language links.
2. Validate all structured JSON.
3. Reconcile source counts and reliability tiers.
4. Audit every event's source references.
5. Verify the canonical current role of Father Wissa Sobhy Tadros.

### Phase B — Evidence graph
1. Add stable person IDs.
2. Add stable place IDs.
3. Add explicit source references to timeline milestones.
4. Add confidence/evidence status to claims.
5. Create a reusable source-card renderer.

### Phase C — Archive experience
1. Improve the homepage around archival discovery rather than dashboard metrics.
2. Add people/places indexes.
3. Add event detail pages where evidence warrants them.
4. Add media collections with provenance.
5. Add search facets for person, place, year, event type and evidence level.

### Phase D — Publication readiness
1. Validate Schema.org markup.
2. Validate sitemap/robots/hreflang.
3. Check canonical URLs.
4. Test all major routes on mobile and desktop.
5. Verify the production deployment after each release.

## 4. Quality rule

The archive should prefer **a smaller number of well-supported claims over a larger number of impressive-looking claims**. When evidence is incomplete, the correct archival behavior is to preserve the uncertainty visibly.

## 5. Current implementation in this release

- English biography navigation was corrected to use the English Events, Media, Sources and Search pages.
- English timeline navigation and its internal related links were corrected to remain inside the English edition.
- This roadmap has been added to the repository so future development can be evaluated against explicit archival-quality criteria.

## 6. Known next technical task

The source database requires a controlled metadata reconciliation pass. In particular, the existing source counts and evaluation tiers should be corrected and official Coptic Orthodox institutional records should be represented as first-class source records. This should be completed before treating the source index as publication-grade.
