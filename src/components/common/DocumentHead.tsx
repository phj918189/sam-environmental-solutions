/**
 * 페이지별 title/meta 설정 (react-helmet-async)
 * SPA 클라이언트 내비게이션 시 탭 제목 업데이트
 */
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE_TITLE = '삼양건설환경연구소 | 삼양환경 대기환경 수질환경 전문 대전';
const BASE_DESC =
  '삼양건설환경연구소 - 대전 대기환경, 수질환경, 악취환경 측정·분석 전문기관. 1992년 설립.';

const PAGE_META: Record<
  string,
  { title: string; description: string } | ((path: string) => { title: string; description: string })
> = {
  '/': { title: BASE_TITLE, description: BASE_DESC },
  '/about': {
    title: '회사소개 | 삼양건설환경연구소',
    description: '삼양건설환경연구소 회사소개. 1992년 설립, 대기·수질·악취 환경측정 전문기관.',
  },
  '/services/air': {
    title: '대기환경 서비스 | 삼양건설환경연구소',
    description: '대기오염물질 측정, 배출시설 허가, 대기환경 컨설팅. 삼양환경 대기환경 전문.',
  },
  '/services/water': {
    title: '수질환경 서비스 | 삼양건설환경연구소',
    description: '수질분석, 폐수처리 컨설팅, 방류수 모니터링. 삼양환경 수질환경 전문.',
  },
  '/services/odor': {
    title: '악취환경 서비스 | 삼양건설환경연구소',
    description: '악취측정, 악취저감시설 설계, 악취방지계획서. 삼양환경 악취환경 전문.',
  },
  '/portfolio': {
    title: '사업실적 | 삼양건설환경연구소',
    description: '폐수·오수처리시설 운영 실적, 공사 실적, 휴게소 시설. 삼양건설환경.',
  },
  '/laboratory': {
    title: '분석실 | 삼양건설환경연구소',
    description: '대기·수질·악취 분석장비, 품질관리. 삼양건설환경연구소 분석실.',
  },
  '/contact': {
    title: '문의하기 | 삼양건설환경연구소',
    description: '삼양건설환경연구소 문의. 대전 환경측정·분석 견적 문의.',
  },
  '/news': {
    title: '소식 & 자료 | 삼양건설환경연구소',
    description: '삼양건설환경연구소 소식, 환경측정 관련 자료.',
  },
  '/privacy': { title: '개인정보처리방침 | 삼양건설환경연구소', description: BASE_DESC },
  '/terms': { title: '이용약관 | 삼양건설환경연구소', description: BASE_DESC },
};

const DocumentHead = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/^\/en/, '') || '/';
  let meta = PAGE_META[path];
  if (!meta && path.startsWith('/portfolio/')) {
    meta = { title: '사업실적 상세 | 삼양건설환경연구소', description: BASE_DESC };
  }
  if (!meta && path.startsWith('/news/')) {
    meta = { title: '소식 상세 | 삼양건설환경연구소', description: BASE_DESC };
  }
  let title = BASE_TITLE;
  let description = BASE_DESC;
  if (meta) {
    const resolved = typeof meta === 'function' ? meta(pathname) : meta;
    title = resolved.title;
    description = resolved.description;
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default DocumentHead;
