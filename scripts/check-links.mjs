import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const distRoot = resolve('dist');
const configuredBase = process.env.BASE_PATH || '/';
const basePrefix = configuredBase === '/' ? '/' : (configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`);
const htmlFiles = [];

function collect(directory) {
  for (const entry of readdirSync(directory)) {
    const fullPath = join(directory, entry);
    if (statSync(fullPath).isDirectory()) collect(fullPath);
    else if (entry.endsWith('.html')) htmlFiles.push(fullPath);
  }
}

function resolveLocalTarget(href) {
  const withoutHash = href.split('#')[0].split('?')[0];
  if (!withoutHash) return null;

  let pathname = withoutHash.startsWith('/') ? withoutHash : `/${withoutHash}`;
  if (basePrefix !== '/' && pathname.startsWith(basePrefix)) {
    pathname = `/${pathname.slice(basePrefix.length)}`;
  }
  const relativePath = pathname.replace(/^\/+/, '');
  const direct = join(distRoot, relativePath);
  const candidates = [direct];

  if (pathname.endsWith('/')) candidates.unshift(join(distRoot, relativePath, 'index.html'));
  else if (!relativePath.includes('.')) candidates.unshift(join(distRoot, relativePath, 'index.html'));

  return candidates;
}

if (!existsSync(distRoot)) {
  console.error('dist/ does not exist. Run npm run build first.');
  process.exit(1);
}

collect(distRoot);
const missing = [];
const hrefPattern = /(?:href|src)=["']([^"']+)["']/g;

for (const htmlFile of htmlFiles) {
  const html = readFileSync(htmlFile, 'utf8');
  for (const match of html.matchAll(hrefPattern)) {
    const href = match[1];
    if (/^(?:https?:|mailto:|tel:|javascript:|data:|#|\/\/)/i.test(href)) continue;
    const candidates = resolveLocalTarget(href);
    if (candidates && !candidates.some((candidate) => existsSync(candidate))) {
      missing.push({ file: relative(distRoot, htmlFile), href });
    }
  }
}

if (missing.length) {
  console.error('Broken local links found:');
  for (const item of missing) console.error(`- ${item.file}: ${item.href}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files: no broken local links found.`);
