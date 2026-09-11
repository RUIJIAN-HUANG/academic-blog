import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const outputPath = resolve('public/cv/ruijian-huang-cv-template.pdf');
mkdirSync(dirname(outputPath), { recursive: true });

const escapePdfText = (value) => value.replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');
const lines = [
  ['Ruijian Huang', 24, 730, 0],
  ['Academic CV template', 11, 700, 0.42],
  ['Computer Science and Technology | Student', 11, 670, 0.2],
  ['Research interest: Embodied Intelligence and Robot Learning', 11, 648, 0.2],
  ['Education', 14, 590, 0],
  ['[Institution, degree, and dates to be added]', 11, 565, 0.3],
  ['Research experience', 14, 510, 0],
  ['[Research group, advisor, role, and dates to be added]', 11, 485, 0.3],
  ['Selected projects', 14, 430, 0],
  ['[Verified projects, roles, links, and dates to be added]', 11, 405, 0.3],
  ['Publications and talks', 14, 350, 0],
  ['[Traceable publications, preprints, reports, or talks to be added]', 11, 325, 0.3],
  ['Skills', 14, 270, 0],
  ['[Programming language]   [ML framework]   [Research tool]', 11, 245, 0.3],
  ['Replace this template with verified information before distribution.', 9, 150, 0.42],
];

const content = [
  'BT',
  ...lines.flatMap(([text, size, y, gray]) => [
    `${gray} g`,
    `/F1 ${size} Tf`,
    `1 0 0 1 72 ${y} Tm`,
    `(${escapePdfText(text)}) Tj`,
  ]),
  'ET',
].join('\n');

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  `<< /Length ${Buffer.byteLength(content, 'ascii')} >>\nstream\n${content}\nendstream`,
];

const header = '%PDF-1.4\n';
const chunks = [header];
const offsets = [0];
for (let index = 0; index < objects.length; index += 1) {
  offsets.push(Buffer.byteLength(chunks.join(''), 'ascii'));
  chunks.push(`${index + 1} 0 obj\n${objects[index]}\nendobj\n`);
}

const xrefOffset = Buffer.byteLength(chunks.join(''), 'ascii');
chunks.push(`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`);
for (const offset of offsets.slice(1)) {
  chunks.push(`${String(offset).padStart(10, '0')} 00000 n \n`);
}
chunks.push(`trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);

writeFileSync(outputPath, Buffer.from(chunks.join(''), 'ascii'));
console.log(`Wrote ${outputPath}`);
