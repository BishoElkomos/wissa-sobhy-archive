# Archive Confidence & Date Standard

This document resolves vocabulary inconsistencies between the early archive documents and is the canonical editorial standard for the eventual Convex schema.

## Confidence values

Use exactly these values:

- `verified` — supported by a strong primary, institutional, or otherwise authoritative source, or by multiple independent sources where appropriate.
- `corroborated` — supported by two or more reasonably independent sources, but not yet strong enough to classify as verified.
- `reported` — stated by a single source and not independently confirmed.
- `needs-review` — potentially useful material whose provenance, identity, date, attribution, or interpretation still requires editorial checking.
- `disputed` — credible sources materially disagree; preserve the competing accounts.
- `unverified` — archival material has been collected but its factual status has not yet been established.

### Legacy values

Older documents may contain `supported` or `unverified`. `supported` should be migrated to `corroborated` or `verified` after review. `unverified` remains valid.

## Date precision

Use exactly one of:

- `exact` — complete date is established.
- `month` — month and year are established.
- `year` — year is established.
- `range` — a bounded period is established.
- `approximate` — an estimated date is available but not exact.
- `unknown` — no reliable date has yet been established.

Never convert an approximate or year-only date into an exact date merely to satisfy a database field.

## Claim discipline

A source record and a factual claim are separate objects. A source may support one claim while being insufficient to support another claim appearing in the same article.

For each significant claim, record:

1. the exact proposition being evaluated;
2. the date or date range involved;
3. the source(s) supporting it;
4. whether the source states the proposition directly or only permits an inference;
5. the current confidence value;
6. an editorial note when uncertainty remains.

## Non-negotiable rule

`Source exists` does not mean `claim verified`.
