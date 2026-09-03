#!/usr/bin/env node
const fs=require('fs');
const path=require('path');
const ROOT=path.join(__dirname,'..');
const biographyPath=path.join(ROOT,'dist','data','biography.json');
const correctionsPath=path.join(ROOT,'data','biography-source-corrections-2026-09.json');
if(!fs.existsSync(biographyPath)||!fs.existsSync(correctionsPath)){console.log('ℹ️ Biography correction pass skipped: required files are unavailable.');process.exit(0)}
const biography=JSON.parse(fs.readFileSync(biographyPath,'utf8'));
const ledger=JSON.parse(fs.readFileSync(correctionsPath,'utf8'));
const get=(obj,pathString)=>pathString.split('.').reduce((v,k)=>v?.[k],obj);
let applied=0;
for(const c of ledger.corrections||[]){
  if(!c.replace_with)continue;
  const parts=c.path.split('.');let obj=biography;
  for(let i=0;i<parts.length-1;i++)obj=obj?.[parts[i]];
  const key=parts.at(-1);
  if(obj&&Object.prototype.hasOwnProperty.call(obj,key)){obj[key]=c.replace_with;applied++;}
}
biography.metadata=biography.metadata||{};
biography.metadata.last_source_correction_run='2026-09-03';
biography.metadata.source_correction_ledger='biography-source-corrections-2026-09.json';
fs.writeFileSync(biographyPath,JSON.stringify(biography,null,2)+'\n','utf8');
console.log(`✅ Biography source corrections applied: ${applied}`);
