import { SITE_URL } from '@/config/site';
import { newsItems, newsDetails } from '@/data/news';
import { portfolioDetails } from '@/data/portfolio';
import { isValidServiceType } from '@/data/services';

const BRAND_KO = '삼양건설환경연구소';
const BRAND_EN = 'Samyang Environmental Research Institute';

type Lang = 'ko' | 'en';

type BilingualSeo = { title: Record<Lang, string>; description: Record<Lang, string> };

function truncateMeta(s: string, max = 158): string {
  const t = s.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trimEnd()}…`;
}

/** `/en`, `/en/about` → `/`, `/about` */
export function normalizePathKey(pathname: string): string {
  if (!pathname.startsWith('/en')) return pathname || '/';
  if (pathname === '/en') return '/';
  const rest = pathname.slice(3);
  return rest.startsWith('/') ? rest : `/${rest}`;
}

export function isEnglishPath(pathname: string): boolean {
  return pathname === '/en' || pathname.startsWith('/en/');
}

export function absoluteUrl(pathname: string): string {
  const base = SITE_URL.replace(/\/$/, '');
  if (pathname === '/') return `${base}/`;
  return `${base}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}

export function hreflangUrls(pathKey: string): { ko: string; en: string } {
  const base = SITE_URL.replace(/\/$/, '');
  const koPath = pathKey === '/' ? '/' : pathKey;
  const enPath = pathKey === '/' ? '/en' : `/en${pathKey}`;
  return {
    ko: koPath === '/' ? `${base}/` : `${base}${koPath}`,
    en: `${base}${enPath}`,
  };
}

const PAGE_SEO: Record<string, BilingualSeo> = {
  '/': {
    title: {
      ko: `${BRAND_KO} | 삼양환경·삼양건설 대기환경 수질환경 악취측정 전문 (대전)`,
      en: `${BRAND_EN} | Air, Water & Odor Environmental Services (Daejeon, Korea)`,
    },
    description: {
      ko: '삼양건설환경연구소(삼양환경·삼양건설환경)은 대전 대기환경, 수질환경, 악취환경 측정·분석 전문기관입니다. 1992년 설립, 환경측정 대행·컨설팅.',
      en: 'Samyang Environmental Research Institute provides air, water, and odor measurement and analysis in Daejeon, Korea. Established in 1992, certified environmental services.',
    },
  },
  '/about': {
    title: { ko: `회사소개 | ${BRAND_KO}`, en: `About Us | ${BRAND_EN}` },
    description: {
      ko: `${BRAND_KO} 회사소개. 1992년 설립, 대기·수질·악취 환경측정 전문기관.`,
      en: `About ${BRAND_EN}. Established in 1992, specializing in air, water, and odor environmental measurement.`,
    },
  },
  '/services/air': {
    title: { ko: `대기환경 서비스 | ${BRAND_KO}`, en: `Air Quality Services | ${BRAND_EN}` },
    description: {
      ko: '대기오염물질 측정, 배출시설 허가, 대기환경 컨설팅. 삼양환경 대기환경 전문.',
      en: 'Air pollutant measurement, emission permits, and air environmental consulting.',
    },
  },
  '/services/water': {
    title: { ko: `수질환경 서비스 | ${BRAND_KO}`, en: `Water Quality Services | ${BRAND_EN}` },
    description: {
      ko: '수질분석, 폐수처리 컨설팅, 방류수 모니터링. 삼양환경 수질환경 전문.',
      en: 'Water quality analysis, wastewater consulting, and effluent monitoring.',
    },
  },
  '/services/odor': {
    title: { ko: `악취환경 서비스 | ${BRAND_KO}`, en: `Odor Control Services | ${BRAND_EN}` },
    description: {
      ko: '악취측정, 악취저감시설 설계, 악취방지계획서. 삼양환경 악취환경 전문.',
      en: 'Odor measurement, reduction facility design, and odor management planning.',
    },
  },
  '/portfolio': {
    title: { ko: `사업실적 | ${BRAND_KO}`, en: `Portfolio | ${BRAND_EN}` },
    description: {
      ko: '폐수·오수처리시설 운영 실적, 공사 실적, 휴게소 시설. 삼양건설환경.',
      en: 'Wastewater facility operations, construction projects, and rest-area facilities.',
    },
  },
  '/laboratory': {
    title: { ko: `분석실 | ${BRAND_KO}`, en: `Laboratory | ${BRAND_EN}` },
    description: {
      ko: '대기·수질·악취 분석장비, 품질관리. 삼양건설환경연구소 분석실.',
      en: 'Air, water, and odor analytical equipment and quality management.',
    },
  },
  '/contact': {
    title: { ko: `문의하기 | ${BRAND_KO}`, en: `Contact | ${BRAND_EN}` },
    description: {
      ko: `${BRAND_KO} 문의. 대전 환경측정·분석 견적 문의.`,
      en: `Contact ${BRAND_EN} for environmental measurement and analysis inquiries.`,
    },
  },
  '/news': {
    title: { ko: `소식 & 자료 | ${BRAND_KO}`, en: `News & Resources | ${BRAND_EN}` },
    description: {
      ko: `${BRAND_KO} 소식, 환경측정 관련 자료.`,
      en: `News and resources from ${BRAND_EN}.`,
    },
  },
  '/privacy': {
    title: { ko: `개인정보처리방침 | ${BRAND_KO}`, en: `Privacy Policy | ${BRAND_EN}` },
    description: {
      ko: `${BRAND_KO} 개인정보처리방침.`,
      en: `Privacy policy of ${BRAND_EN}.`,
    },
  },
  '/terms': {
    title: { ko: `이용약관 | ${BRAND_KO}`, en: `Terms of Service | ${BRAND_EN}` },
    description: {
      ko: `${BRAND_KO} 이용약관.`,
      en: `Terms of service of ${BRAND_EN}.`,
    },
  },
};

const FALLBACK: BilingualSeo = PAGE_SEO['/'];

function newsSeo(id: string): BilingualSeo | null {
  const detail = newsDetails[id as keyof typeof newsDetails];
  const item = newsItems.find((n) => n.id === id);
  if (!detail && !item) return null;
  const titleKo = detail?.title.ko ?? item?.title.ko ?? '';
  const titleEn = detail?.title.en ?? item?.title.en ?? '';
  const descKo = item?.excerpt.ko ?? truncateMeta(detail?.content.ko ?? '');
  const descEn = item?.excerpt.en ?? truncateMeta(detail?.content.en ?? '');
  return {
    title: {
      ko: `${titleKo} | ${BRAND_KO}`,
      en: `${titleEn} | ${BRAND_EN}`,
    },
    description: { ko: truncateMeta(descKo), en: truncateMeta(descEn) },
  };
}

function portfolioSeo(id: string): BilingualSeo | null {
  const p = portfolioDetails[id as keyof typeof portfolioDetails];
  if (!p) return null;
  return {
    title: {
      ko: `${p.title.ko} | 사업실적 | ${BRAND_KO}`,
      en: `${p.title.en} | Portfolio | ${BRAND_EN}`,
    },
    description: {
      ko: truncateMeta(p.overview.ko),
      en: truncateMeta(p.overview.en),
    },
  };
}

export interface ResolvedSeo {
  title: string;
  description: string;
  canonicalUrl: string;
  pathKey: string;
  lang: Lang;
  hreflang: { ko: string; en: string };
  ogLocale: string;
  ogLocaleAlternate: string;
  robots: string;
  isKnown: boolean;
  articlePublishedTime?: string;
}

/** 크롤러·사이트맵용 유효 경로 판별 */
export function isKnownPath(pathKey: string): boolean {
  if (PAGE_SEO[pathKey]) return true;

  const serviceMatch = pathKey.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) return isValidServiceType(serviceMatch[1]);

  const newsMatch = pathKey.match(/^\/news\/([^/]+)$/);
  if (newsMatch) {
    const id = newsMatch[1];
    return id in newsDetails || newsItems.some((n) => n.id === id);
  }

  const portfolioMatch = pathKey.match(/^\/portfolio\/([^/]+)$/);
  if (portfolioMatch) return portfolioMatch[1] in portfolioDetails;

  return false;
}

const NOT_FOUND_SEO: BilingualSeo = {
  title: {
    ko: `페이지를 찾을 수 없습니다 | ${BRAND_KO}`,
    en: `Page Not Found | ${BRAND_EN}`,
  },
  description: {
    ko: '요청하신 페이지가 존재하지 않습니다. 삼양건설환경연구소 홈으로 이동해 주세요.',
    en: 'The page you requested does not exist. Return to Samyang Environmental homepage.',
  },
};

export function resolveSeo(pathname: string): ResolvedSeo {
  const pathKey = normalizePathKey(pathname);
  const lang: Lang = isEnglishPath(pathname) ? 'en' : 'ko';
  const canonicalUrl = absoluteUrl(canonicalPathname(pathname));
  const hreflang = hreflangUrls(pathKey);
  const known = isKnownPath(pathKey);

  let bilingual: BilingualSeo = known ? (PAGE_SEO[pathKey] ?? FALLBACK) : NOT_FOUND_SEO;
  let articlePublishedTime: string | undefined;

  const newsMatch = pathKey.match(/^\/news\/([^/]+)$/);
  if (newsMatch) {
    const n = newsSeo(newsMatch[1]);
    if (n) bilingual = n;
    const detail = newsDetails[newsMatch[1] as keyof typeof newsDetails];
    const item = newsItems.find((x) => x.id === newsMatch[1]);
    articlePublishedTime = detail?.date ?? item?.date;
  }

  const portfolioMatch = pathKey.match(/^\/portfolio\/([^/]+)$/);
  if (portfolioMatch) {
    const p = portfolioSeo(portfolioMatch[1]);
    if (p) bilingual = p;
  }

  return {
    title: bilingual.title[lang],
    description: bilingual.description[lang],
    canonicalUrl,
    pathKey,
    lang,
    hreflang,
    ogLocale: lang === 'en' ? 'en_US' : 'ko_KR',
    ogLocaleAlternate: lang === 'en' ? 'ko_KR' : 'en_US',
    robots: known ? 'index, follow' : 'noindex, follow',
    isKnown: known,
    articlePublishedTime,
  };
}

function canonicalPathname(pathname: string): string {
  return pathname || '/';
}

export const OG_IMAGE_URL = `${SITE_URL.replace(/\/$/, '')}/logo_2.svg`;
export const OG_IMAGE_ALT = '삼양건설환경연구소 로고';

const ORG_ID = `${SITE_URL.replace(/\/$/, '')}/#organization`;

/** 경로별 WebPage 구조화 데이터 (Organization JSON-LD는 index.html 유지) */
export function webPageJsonLd(resolved: ResolvedSeo): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: resolved.title,
    description: resolved.description,
    url: resolved.canonicalUrl,
    inLanguage: resolved.lang === 'en' ? 'en-US' : 'ko-KR',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL.replace(/\/$/, '')}/#website`,
      url: SITE_URL.replace(/\/$/, ''),
      name: BRAND_KO,
      alternateName: [BRAND_EN, 'Samyang Environmental'],
    },
    publisher: { '@id': ORG_ID },
  };
}

function articleJsonLd(resolved: ResolvedSeo): Record<string, unknown> | null {
  const match = resolved.pathKey.match(/^\/news\/([^/]+)$/);
  if (!match) return null;
  const id = match[1];
  const detail = newsDetails[id as keyof typeof newsDetails];
  const item = newsItems.find((n) => n.id === id);
  if (!detail && !item) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: resolved.title,
    description: resolved.description,
    url: resolved.canonicalUrl,
    datePublished: resolved.articlePublishedTime,
    inLanguage: resolved.lang === 'en' ? 'en-US' : 'ko-KR',
    image: OG_IMAGE_URL,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: resolved.canonicalUrl,
  };
}

function breadcrumbJsonLd(resolved: ResolvedSeo): Record<string, unknown> | null {
  if (resolved.pathKey === '/' || !resolved.isKnown) return null;

  const homeLabel = resolved.lang === 'en' ? 'Home' : '홈';
  const homeUrl = resolved.lang === 'en' ? absoluteUrl('/en') : absoluteUrl('/');
  const items: { name: string; url: string }[] = [{ name: homeLabel, url: homeUrl }];

  const segments = resolved.pathKey.split('/').filter(Boolean);
  let acc = '';
  for (const seg of segments) {
    acc += `/${seg}`;
    const page = PAGE_SEO[acc];
    if (page) {
      items.push({
        name: page.title[resolved.lang].split(' | ')[0],
        url: resolved.lang === 'en' ? absoluteUrl(`/en${acc}`) : absoluteUrl(acc),
      });
    }
  }

  const newsMatch = resolved.pathKey.match(/^\/news\/([^/]+)$/);
  if (newsMatch) {
    const list = PAGE_SEO['/news'];
    if (list) {
      items.push({
        name: list.title[resolved.lang].split(' | ')[0],
        url: resolved.lang === 'en' ? absoluteUrl('/en/news') : absoluteUrl('/news'),
      });
    }
    items.push({ name: resolved.title.split(' | ')[0], url: resolved.canonicalUrl });
  }

  const portfolioMatch = resolved.pathKey.match(/^\/portfolio\/([^/]+)$/);
  if (portfolioMatch) {
    const list = PAGE_SEO['/portfolio'];
    if (list) {
      items.push({
        name: list.title[resolved.lang].split(' | ')[0],
        url: resolved.lang === 'en' ? absoluteUrl('/en/portfolio') : absoluteUrl('/portfolio'),
      });
    }
    items.push({ name: resolved.title.split(' | ')[0], url: resolved.canonicalUrl });
  }

  if (items.length < 2) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Helmet에 넣을 JSON-LD 배열 (WebPage + Article/Breadcrumb) */
export function structuredDataGraph(resolved: ResolvedSeo): Record<string, unknown>[] {
  const graph: Record<string, unknown>[] = [webPageJsonLd(resolved)];
  const article = articleJsonLd(resolved);
  if (article) graph.push(article);
  const breadcrumb = breadcrumbJsonLd(resolved);
  if (breadcrumb) graph.push(breadcrumb);
  return graph;
}

export function ogTypeForPath(pathKey: string): 'website' | 'article' {
  return /^\/news\/[^/]+$/.test(pathKey) ? 'article' : 'website';
}
