#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist', 'data');
const registryPath = path.join(dist, 'source-registry.json');

if (!fs.existsSync(registryPath)) {
  console.log('ℹ️ Source registry merge skipped: build data files are not present.');
  process.exit(0);
}

const additionFiles = fs.readdirSync(dist)
  .filter((name) => /^source-additions-.*\.json$/.test(name))
  .sort();

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const existing = new Map((registry.sources || []).map((source) => [source.id, source]));
let added = 0;
let ledgers = 0;

for (const filename of additionFiles) {
  const additionsPath = path.join(dist, filename);
  let additions;
  try {
    additions = JSON.parse(fs.readFileSync(additionsPath, 'utf8'));
  } catch (error) {
    console.warn(`⚠️ Source ledger skipped: ${filename} (${error.message})`);
    continue;
  }

  ledgers += 1;
  for (const source of additions.sources || []) {
    if (!source || !source.id) continue;
    if (!existing.has(source.id)) {
      existing.set(source.id, source);
      added += 1;
    }
  }
}

registry.sources = [...existing.values()];
registry.version = '2.8';
registry.last_updated = '2026-09-03';
registry.description = 'Canonical evidence registry. All supplemental source ledgers are merged during production build; pending and metadata-only material remains explicitly marked.';

fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2) + '\n', 'utf8');
console.log(`✅ Production source registry merged: ${added} new source record(s) from ${ledgers} ledger(s); ${registry.sources.length} total.`);
