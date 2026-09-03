#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist', 'data');
const registryPath = path.join(dist, 'source-registry.json');
const additionsPath = path.join(dist, 'source-additions-2026-09.json');

if (!fs.existsSync(registryPath) || !fs.existsSync(additionsPath)) {
  console.log('ℹ️ Source registry merge skipped: build data files are not present.');
  process.exit(0);
}

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const additions = JSON.parse(fs.readFileSync(additionsPath, 'utf8'));
const existing = new Map((registry.sources || []).map((source) => [source.id, source]));
let added = 0;

for (const source of additions.sources || []) {
  if (!source || !source.id) continue;
  if (!existing.has(source.id)) {
    existing.set(source.id, source);
    added += 1;
  }
}

registry.sources = [...existing.values()];
registry.version = '2.7';
registry.last_updated = '2026-09-03';
registry.description = 'Canonical evidence registry. Supplemental verified source records are merged during production build; pending and metadata-only material remains explicitly marked.';

fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2) + '\n', 'utf8');
console.log(`✅ Production source registry merged: ${added} new source record(s); ${registry.sources.length} total.`);
