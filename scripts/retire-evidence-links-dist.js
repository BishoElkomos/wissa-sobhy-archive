#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');
let changed = 0;
let scanned = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) {
      scanned += 1;
      const relative = path.relative(DIST, full).replace(/\\/g, '/');
      const english = relative.startsWith('en/');
      const target = english ? 'sources-media.html' : 'sources-media.html';
      let html = fs.readFileSync(full, 'utf8');
      const before = html;
      html = html.replace(/<a([^>]*?)href=["'](?:\.\.\/)?evidence\.html(?:#[^"']*)?["']([^>]*)>([\s\S]*?)<\/a>/gi,
        `<a$1href="${target}"$2>${english ? 'Sources & Evidence' : 'المصادر والأدلة'}</a>`);
      if (html !== before) {
        fs.writeFileSync(full, html, 'utf8');
        changed += 1;
      }
    }
  }
}

walk(DIST);
console.log(`✅ Retired public evidence links: scanned ${scanned} HTML file(s), updated ${changed}.`);
