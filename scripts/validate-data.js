#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'data');

const requiredFiles = [
  'biography.json',
  'timeline.json',
  'events.json',
  'sources.json',
  'source-registry.json',
  'media-registry.json'
];

const errors = [];
const warnings = [];
const loaded = {};

function loadJson(file) {
  const fullPath = path.join(DATA, file);
  if (!fs.existsSync(fullPath)) {
    errors.push(`Missing data file: ${file}`);
    return null;
  }
  try {
    const value = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    loaded[file] = value;
    return value;
  } catch (error) {
    errors.push(`Invalid JSON in ${file}: ${error.message}`);
    return null;
  }
}

console.log('🔎 Validating archive data...');
requiredFiles.forEach(loadJson);

const registry = loaded['source-registry.json'];
if (registry) {
  if (!Array.isArray(registry.sources)) {
    errors.push('source-registry.json: "sources" must be an array');
  } else {
    const ids = registry.sources.map((source) => source && source.id).filter(Boolean);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicates.length) errors.push(`Duplicate source IDs: ${[...new Set(duplicates)].join(', ')}`);
    registry.sources.forEach((source, index) => {
      if (!source || !source.id) errors.push(`source-registry.json: source ${index + 1} has no id`);
      if (!source || !source.title) warnings.push(`source-registry.json: ${source?.id || `source ${index + 1}`} has no title`);
      if (source && source.status === 'published' && !source.url) warnings.push(`Published source without URL: ${source.id}`);
    });
  }
}

const timeline = loaded['timeline.json'];
if (timeline && !Array.isArray(timeline.timeline)) errors.push('timeline.json: "timeline" must be an array');

const events = loaded['events.json'];
if (events && !Array.isArray(events.major_events)) errors.push('events.json: "major_events" must be an array');

const media = loaded['media-registry.json'];
if (media && !Array.isArray(media.media)) errors.push('media-registry.json: "media" must be an array');

if (loaded['biography.json'] && (!loaded['biography.json'].person || !loaded['biography.json'].ecclesiastical_career)) {
  warnings.push('biography.json: expected legacy person/ecclesiastical_career sections were not both found');
}

const sourceIds = new Set((registry?.sources || []).map((source) => source.id));
const aliases = registry?.aliases || {};
function resolves(id) {
  return sourceIds.has(id) || (aliases[id] && sourceIds.has(aliases[id]));
}

function auditItems(items, label) {
  if (!Array.isArray(items)) return;
  items.forEach((item, index) => {
    const refs = Array.isArray(item.sources) ? item.sources : [];
    refs.forEach((id) => {
      if (!resolves(id)) warnings.push(`${label} #${index + 1} references unregistered source ID: ${id}`);
    });
  });
}

auditItems(timeline?.timeline, 'Timeline event');
auditItems(events?.major_events, 'Major event');

if (errors.length) {
  console.error(`❌ Validation failed with ${errors.length} error(s).`);
  errors.forEach((error) => console.error(`  • ${error}`));
  process.exit(1);
}

console.log(`✅ JSON integrity passed (${requiredFiles.length} core files).`);
console.log(`📚 Canonical sources: ${(registry?.sources || []).length}`);
console.log(`⚠️ Warnings: ${warnings.length}`);
warnings.slice(0, 25).forEach((warning) => console.warn(`  • ${warning}`));
if (warnings.length > 25) console.warn(`  • ... ${warnings.length - 25} more warning(s)`);
console.log('✅ Archive data validation completed.');
