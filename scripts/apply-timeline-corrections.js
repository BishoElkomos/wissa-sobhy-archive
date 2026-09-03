#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const timelinePath = path.join(ROOT, 'dist', 'data', 'timeline.json');

if (!fs.existsSync(timelinePath)) {
  console.log('ℹ️ Timeline correction pass skipped: timeline is unavailable.');
  process.exit(0);
}

const timeline = JSON.parse(fs.readFileSync(timelinePath, 'utf8'));
let changed = 0;

for (const event of timeline.timeline || []) {
  if (event.year === 2007 && event.month === 4 && event.event_type === 'crisis') {
    const sources = new Set(event.sources || []);
    sources.add('almasryalyoum-2007-land-dispute-direct');
    event.sources = [...sources];
    event.provenance_note = 'The contemporaneous Al-Masry Al-Youm report explicitly names Father Wissa Sobhy among the diocesan priests present during the enforcement incident. This supports presence/participation, not a broader role claim.';
    changed++;
  }

  if (event.year === 2010 && event.month === 7 && event.event_type === 'crisis') {
    const sources = new Set(event.sources || []);
    sources.delete('international_media');
    sources.add('youm7-2010-wissa-cathedral');
    sources.add('egypt-independent-2010-kamilia');
    sources.add('akref-2010-wissa-sobhy-kamilia');
    event.sources = [...sources];
    event.provenance_note = 'Contemporaneous published coverage is used for the Father Wissa media-role chronology; international_media is retained only where a specific independently identified publication is recorded elsewhere.';
    changed++;
  }
}

timeline.metadata = timeline.metadata || {};
timeline.metadata.last_source_correction_run = '2026-09-03';
timeline.metadata.source_correction_ledger = 'source-corrections-2026-09.json';

fs.writeFileSync(timelinePath, JSON.stringify(timeline, null, 2) + '\n', 'utf8');
console.log(`✅ Timeline source corrections applied: ${changed} event(s).`);
