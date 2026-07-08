/**
 * 라우트·데이터 기반 sitemap.xml 자동 생성
 * prebuild에서 실행 — hreflang, 뉴스/포트폴리오 상세 URL 포함
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const DEFAULT_URL = 'https://samyangenv.com';

function getSiteUrl() {
  try {
    const env = readFileSync(join(root, '.env'), 'utf-8');
    const match = env.match(/VITE_SITE_URL\s*=\s*(.+)/);
    if (match) {
      const url = match[1].trim().replace(/^["']|["']$/g, '');
      if (url) return url.replace(/\/$/, '');
    }
  } catch {
    // .env 없음
  }
  return DEFAULT_URL;
}

function extractNewsIds() {
  const content = readFileSync(join(root, 'src/data/news.ts'), 'utf-8');
  return [...content.matchAll(/id:\s*'(\d+)'/g)].map((m) => m[1]);
}

function extractPortfolioIds() {
  const content = readFileSync(join(root, 'src/data/portfolio.ts'), 'utf-8');
  const block = content.match(/export const portfolioDetails[^=]*=\s*\{([\s\S]*?)\n\};/);
  if (!block) return ['1', '2', '3'];
  return [...block[1].matchAll(/^\s*'(\d+)':/gm)].map((m) => m[1]);
}

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0', bilingual: true },
  { path: '/about', changefreq: 'monthly', priority: '0.9', bilingual: true },
  { path: '/services/air', changefreq: 'monthly', priority: '0.9', bilingual: true },
  { path: '/services/water', changefreq: 'monthly', priority: '0.9', bilingual: true },
  { path: '/services/odor', changefreq: 'monthly', priority: '0.9', bilingual: true },
  { path: '/portfolio', changefreq: 'weekly', priority: '0.9', bilingual: true },
  { path: '/laboratory', changefreq: 'monthly', priority: '0.9', bilingual: true },
  { path: '/contact', changefreq: 'monthly', priority: '0.9', bilingual: true },
  { path: '/news', changefreq: 'weekly', priority: '0.8', bilingual: true },
  { path: '/privacy', changefreq: 'yearly', priority: '0.5', bilingual: true },
  { path: '/terms', changefreq: 'yearly', priority: '0.5', bilingual: true },
];

function toEnPath(koPath) {
  return koPath === '/' ? '/en' : `/en${koPath}`;
}

function urlEntry(base, koPath, { changefreq, priority, bilingual, lastmod }) {
  const loc = koPath === '/' ? `${base}/` : `${base}${koPath}`;
  const lines = [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
  ];
  if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
  if (bilingual) {
    const enPath = toEnPath(koPath);
    const enLoc = enPath === '/en' ? `${base}/en` : `${base}${enPath}`;
    lines.push(`    <xhtml:link rel="alternate" hreflang="ko" href="${loc}"/>`);
    lines.push(`    <xhtml:link rel="alternate" hreflang="en" href="${enLoc}"/>`);
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>`);
  }
  lines.push('  </url>');
  return lines.join('\n');
}

function extractNewsDates() {
  const content = readFileSync(join(root, 'src/data/news.ts'), 'utf-8');
  const dates = {};
  const itemBlocks = content.matchAll(
    /id:\s*'(\d+)'[\s\S]*?date:\s*'(\d{4}-\d{2}-\d{2})'/g
  );
  for (const [, id, date] of itemBlocks) dates[id] = date;
  return dates;
}

const siteUrl = getSiteUrl();
const newsIds = extractNewsIds();
const portfolioIds = extractPortfolioIds();
const newsDates = extractNewsDates();
const today = new Date().toISOString().slice(0, 10);

const entries = [];

for (const route of STATIC_ROUTES) {
  entries.push(urlEntry(siteUrl, route.path, route));
  const enPath = toEnPath(route.path);
  entries.push(
    urlEntry(siteUrl, enPath, {
      changefreq: route.changefreq,
      priority: String(Math.max(0.5, Number(route.priority) - 0.1)),
      bilingual: route.bilingual,
    })
  );
}

for (const id of portfolioIds) {
  entries.push(
    urlEntry(siteUrl, `/portfolio/${id}`, {
      changefreq: 'monthly',
      priority: '0.8',
      bilingual: true,
    })
  );
  entries.push(
    urlEntry(siteUrl, `/en/portfolio/${id}`, {
      changefreq: 'monthly',
      priority: '0.7',
      bilingual: true,
    })
  );
}

for (const id of newsIds) {
  entries.push(
    urlEntry(siteUrl, `/news/${id}`, {
      changefreq: 'monthly',
      priority: '0.7',
      bilingual: true,
      lastmod: newsDates[id] ?? today,
    })
  );
  entries.push(
    urlEntry(siteUrl, `/en/news/${id}`, {
      changefreq: 'monthly',
      priority: '0.6',
      bilingual: true,
      lastmod: newsDates[id] ?? today,
    })
  );
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`[generate-sitemap] ${entries.length} URLs → public/sitemap.xml (${siteUrl})`);
