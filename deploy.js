// Deploys THIS folder to the Netlify project, wherever it is run from.
//   node deploy.js            production deploy
//   node deploy.js --draft    preview deploy (a unique URL, production untouched)
//
// The bare CLI form (`netlify deploy --dir . --site <id>`) publishes whatever
// the shell's current directory is. Run one level up by mistake, it began
// uploading every project in the parent folder to this site (2026-09-20) —
// so the directory comes from this file's location, never from the shell.
'use strict';

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SITE_ID = 'd2726fcf-7428-4e2f-ab56-6307414d702c'; // Netlify project "rawlens"
const dir = __dirname;

// refuse anything that is not plainly this site
const expected = ['index.html', 'privacy.html', 'netlify.toml'];
const missing = expected.filter((file) => !fs.existsSync(path.join(dir, file)));
if (missing.length) {
  console.error(`Not deploying: ${dir} is missing ${missing.join(', ')}.`);
  process.exit(1);
}
const folders = fs.readdirSync(dir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
  .map((entry) => entry.name);
const unexpected = folders.filter((name) => name !== 'shots');
if (unexpected.length) {
  console.error(`Not deploying: unexpected folders here (${unexpected.join(', ')}). ` +
    'This site is flat — add the folder to deploy.js if it belongs.');
  process.exit(1);
}

const args = ['deploy', '--dir', dir, '--site', SITE_ID];
if (!process.argv.includes('--draft')) args.push('--prod');
console.log(`Deploying ${dir}\n> netlify ${args.join(' ')}`);
const result = spawnSync('netlify', args, { stdio: 'inherit', shell: true });
process.exit(result.status === null ? 1 : result.status);
