/**
 * 사이트 URL 치환 스크립트
 * .env의 VITE_SITE_URL을 읽어 index.html, sitemap.xml, robots.txt에 반영합니다.
 *
 * 사용법:
 * 1. .env에 VITE_SITE_URL=https://내도메인.com 추가
 * 2. npm run replace-site-url 실행 (또는 npm run build 시 자동 실행)
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const DEFAULT_URL = 'https://samyangenv.com';

function getSiteUrl() {
  try {
    const envPath = join(root, '.env');
    const env = readFileSync(envPath, 'utf-8');
    const match = env.match(/VITE_SITE_URL\s*=\s*(.+)/);
    if (match) {
      const url = match[1].trim().replace(/^["']|["']$/g, '');
      if (url) return url;
    }
  } catch {
    // .env 없음 또는 VITE_SITE_URL 없음
  }
  return DEFAULT_URL;
}

function replaceInFile(filePath, oldUrl, newUrl) {
  const fullPath = join(root, filePath);
  let content = readFileSync(fullPath, 'utf-8');
  content = content.split(oldUrl).join(newUrl);
  writeFileSync(fullPath, content);
}

const siteUrl = getSiteUrl();
if (siteUrl === DEFAULT_URL) {
  console.log('[replace-site-url] .env에 VITE_SITE_URL 미설정 — 기본값 유지:', DEFAULT_URL);
} else {
  console.log('[replace-site-url] VITE_SITE_URL 적용:', siteUrl);
  replaceInFile('index.html', DEFAULT_URL, siteUrl);
  replaceInFile('public/sitemap.xml', DEFAULT_URL, siteUrl);
  replaceInFile('public/robots.txt', DEFAULT_URL, siteUrl);
}
