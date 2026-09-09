#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'data');
const WEBSITE = path.join(ROOT, 'website');
const errors = [];
const warnings = [];

function readJson(name) {
  const file = path.join(DATA, name);
  if (!fs.existsSync(file)) {
    errors.push(`Missing data file: ${name}`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    errors.push(`Invalid JSON in ${name}: ${error.message}`);
    return null;
  }
}

function collectSourceIds(value, output = new Set()) {
  if (Array.isArray(value)) value.forEach(item => collectSourceIds(item, output));
  else if (value && typeof value === 'object') {
    if (Array.isArray(value.source_ids)) value.source_ids.forEach(id => output.add(id));
    if (Array.isArray(value.sources)) value.sources.forEach(id => {
      if (typeof id === 'string') output.add(id);
      else if (id && typeof id.source_id === 'string') output.add(id.source_id);
    });
    Object.values(value).forEach(child => collectSourceIds(child, output));
  }
  return output;
}

const registry = readJson('source-registry.json');
const additions = fs.readdirSync(DATA).filter(name => /^source-additions-.*\.json$/.test(name)).sort();
const corrections = fs.readdirSync(DATA).filter(name => /^source-corrections-.*\.json$/.test(name)).sort();
const sourceMap = new Map();
const sourceOccurrences = new Map();

for (const source of registry?.sources || []) {
  if (!source?.id) continue;
  sourceMap.set(source.id, source);
  sourceOccurrences.set(source.id, ['source-registry.json']);
}

for (const file of additions) {
  const value = readJson(file);
  for (const source of value?.sources || []) {
    if (!source?.id) continue;
    const locations = sourceOccurrences.get(source.id) || [];
    locations.push(file);
    sourceOccurrences.set(source.id, locations);
    if (!sourceMap.has(source.id)) sourceMap.set(source.id, source);
  }
}

for (const file of corrections) {
  const value = readJson(file);
  for (const source of value?.sources || []) {
    if (!source?.id) continue;
    const locations = sourceOccurrences.get(source.id) || [];
    locations.push(file);
    sourceOccurrences.set(source.id, locations);
    sourceMap.set(source.id, source);
  }
}

for (const [id, locations] of sourceOccurrences) {
  const unique = [...new Set(locations)];
  if (unique.length > 1 && !corrections.some(file => unique.includes(file))) {
    warnings.push(`Source ID appears in multiple non-correction ledgers: ${id} (${unique.join(', ')})`);
  }
}

const research = readJson('biography-research-2026-09.json');
const matrix = readJson('evidence-matrix.json');
const biography = readJson('biography.json');
const timeline = readJson('timeline.json');
const media = readJson('media-registry.json');

const requiredSourceIds = new Set();
collectSourceIds(research, requiredSourceIds);
collectSourceIds(matrix, requiredSourceIds);
collectSourceIds(timeline, requiredSourceIds);
collectSourceIds(media, requiredSourceIds);

for (const id of requiredSourceIds) {
  if (!sourceMap.has(id)) errors.push(`Unresolved source ID in archive data: ${id}`);
}

if (biography) {
  const currentTitle = biography.person?.title;
  const currentEnglish = biography.person?.church_position;
  const vicar = biography.administrative_roles?.vicar_of_diocese;
  if (currentTitle !== 'كاهن كنيسة السيدة العذراء بديرمواس') {
    errors.push(`Current Arabic role drift detected: ${currentTitle || '(missing)'}`);
  }
  if (currentEnglish !== 'Priest of the Church of the Virgin Mary, Deir Mawas') {
    errors.push(`Current English role drift detected: ${currentEnglish || '(missing)'}`);
  }
  if (vicar) {
    const end = String(vicar.end_date || '');
    if (end !== '2025') errors.push(`Historical vicar role must end in 2025, found: ${end || '(missing)'}`);
  }
}

const websiteFiles = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) websiteFiles.push(full);
  }
}
walk(WEBSITE);
for (const file of websiteFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const retiredRouteLinked = html.includes('href="evidence.html"') ||
    html.includes("href='evidence.html'") ||
    html.includes('href="../evidence.html"') ||
    html.includes("href='../evidence.html'");
  if (retiredRouteLinked) {
    warnings.push(`Retired evidence route still linked from public source: ${path.relative(ROOT, file)}`);
  }
}

const facebook = sourceMap.get('facebook-wissa-appearance-19xfy');
if (!facebook) errors.push('Expected Facebook evidence record is missing: facebook-wissa-appearance-19xfy');
else if (facebook.date !== '2025-07-10') errors.push(`Facebook evidence date drift: ${facebook.date || '(missing)'}`);

const mediaStatuses = new Set(['metadata_only', 'link_only']);
const uninspected = (media?.media || []).filter(item => mediaStatuses.has(item?.verification_status));
if (uninspected.length) warnings.push(`${uninspected.length} media item(s) remain metadata_only/link_only and must not be treated as content-verified.`);

console.log('🔐 Running archive integrity gate...');
console.log(`📚 Resolved source IDs: ${sourceMap.size}`);
console.log(`🧾 Research/evidence references checked: ${requiredSourceIds.size}`);
console.log(`🖼️ Public HTML files scanned: ${websiteFiles.length}`);
console.log(`🎞️ Uninspected media: ${uninspected.length}`);

if (errors.length) {
  console.error(`❌ Archive integrity gate failed with ${errors.length} error(s).`);
  errors.forEach(error => console.error(`  • ${error}`));
  if (warnings.length) {
    console.warn(`⚠️ Warnings: ${warnings.length}`);
    warnings.slice(0, 25).forEach(warning => console.warn(`  • ${warning}`));
  }
  process.exit(1);
}

console.log(`✅ Archive integrity gate passed with ${warnings.length} warning(s).`);
warnings.slice(0, 25).forEach(warning => console.warn(`  • ${warning}`));
