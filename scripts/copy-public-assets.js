/**
 * public/ 정적 자산 동기화 (OG 이미지, favicon 등)
 */
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');

const copies = [
  { from: 'src/assets/logo_2.svg', to: 'public/logo_2.svg' },
];

mkdirSync(publicDir, { recursive: true });

for (const { from, to } of copies) {
  const src = join(root, from);
  const dest = join(root, to);
  if (!existsSync(src)) {
    console.warn(`[copy-public-assets] skip (missing): ${from}`);
    continue;
  }
  copyFileSync(src, dest);
  console.log(`[copy-public-assets] ${from} → ${to}`);
}

// SNS 공유용 PNG가 있으면 OG 기본 이미지로 사용 (Facebook/카카오는 SVG 미지원)
const ogPng = join(publicDir, 'og-image.png');
if (existsSync(ogPng)) {
  console.log('[copy-public-assets] og-image.png detected — set OG_IMAGE_URL to /og-image.png in seo.ts if needed');
}
