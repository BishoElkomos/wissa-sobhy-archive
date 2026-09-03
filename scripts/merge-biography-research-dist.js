#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'dist', 'data');
const biographyPath = path.join(dataDir, 'biography.json');
const researchPath = path.join(dataDir, 'biography-research-2026-09.json');

if (!fs.existsSync(biographyPath) || !fs.existsSync(researchPath)) {
  console.log('ℹ️ Biography research merge skipped: required data files are not present.');
  process.exit(0);
}

const biography = JSON.parse(fs.readFileSync(biographyPath, 'utf8'));
const research = JSON.parse(fs.readFileSync(researchPath, 'utf8'));

biography.research_enrichment = {
  last_updated: research.last_updated,
  source_ids: research.source_ids || [],
  claims: research.claims || [],
  timeline_additions: research.timeline_additions || [],
  note: 'Research-derived enrichment. Claims retain their source-specific status and wording rules; this section does not override existing primary data or upgrade uncertain claims automatically.'
};

if (biography.metadata) {
  biography.metadata.last_updated = research.last_updated || biography.metadata.last_updated;
  biography.metadata.data_version = '2.2';
}

fs.writeFileSync(biographyPath, JSON.stringify(biography, null, 2) + '\n', 'utf8');
console.log(`✅ Biography research merged: ${(research.claims || []).length} claims and ${(research.timeline_additions || []).length} timeline additions.`);
