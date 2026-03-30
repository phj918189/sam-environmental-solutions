/**
 * 라우트별 title, description, canonical, hreflang, OG/Twitter, WebPage JSON-LD
 * (react-helmet-async — SPA 클라이언트 내비게이션 시 검색·SNS 메타 동기화)
 */
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  resolveSeo,
  OG_IMAGE_URL,
  webPageJsonLd,
  ogTypeForPath,
} from '@/config/seo';

const DocumentHead = () => {
  const { pathname } = useLocation();
  const seo = resolveSeo(pathname);
  const jsonLd = webPageJsonLd(seo);
  const ogType = ogTypeForPath(seo.pathKey);

  return (
    <Helmet
      htmlAttributes={{
        lang: seo.lang === 'en' ? 'en' : 'ko',
      }}
      prioritizeSeoTags
    >
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={seo.canonicalUrl} />
      <link rel="alternate" hrefLang="ko" href={seo.hreflang.ko} />
      <link rel="alternate" hrefLang="en" href={seo.hreflang.en} />
      <link rel="alternate" hrefLang="x-default" href={seo.hreflang.ko} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={seo.canonicalUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content="삼양건설환경연구소" />
      <meta property="og:locale" content={seo.ogLocale} />
      <meta property="og:locale:alternate" content={seo.ogLocaleAlternate} />
      <meta property="og:image" content={OG_IMAGE_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default DocumentHead;
