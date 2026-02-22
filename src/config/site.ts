/**
 * 사이트 기본 URL (웹 주소)
 *
 * ⚠️ 커스텀 도메인 사용 시 .env 파일에 아래를 추가하세요:
 *   VITE_SITE_URL=https://내도메인.com
 *
 * 이 값이 적용되는 곳:
 * - SEO meta (og:url, canonical 등) - 빌드 시 index.html, sitemap, robots에 반영
 * - import.meta.env.VITE_SITE_URL 로 앱 내에서 참조 가능
 */
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string) || 'https://samyang-env.co.kr';
