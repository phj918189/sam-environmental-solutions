/**
 * 삼양건설환경연구소 연락처 정보
 *
 * ⚠️ 실제 연락처로 교체 필요
 * 아래 값을 회사 측 확인 후 수정해주세요.
 * 한 곳만 수정하면 ContactPage, Footer, PrivacyPage 등 전역에 반영됩니다.
 */

export interface ContactInfo {
  /** 상세 주소 (한국어) */
  addressKo: string;
  /** 상세 주소 (영어) */
  addressEn: string;
  /** 전화번호 (하이픈 포함, tel: 링크용) */
  phone: string;
  /** 일반 문의 이메일 */
  email: string;
  /** 개인정보보호 담당 이메일 (Privacy Policy용) */
  privacyEmail: string;
  /** 영업시간 (한국어) */
  businessHoursKo: string;
  /** 영업시간 (영어) */
  businessHoursEn: string;
  /** 휴무 안내 (한국어) */
  closedDaysKo: string;
  /** 휴무 안내 (영어) */
  closedDaysEn: string;
}

export const CONTACT: ContactInfo = {
  addressKo: '대전광역시 서구 가수원로 39 2층',
  addressEn: '39 Gasuwon-ro, Seo-gu, Daejeon, South Korea',
  phone: '042-533-6270', // TODO: 실제 전화번호로 교체
  email: 'phj918189@gmail.com', // TODO: 실제 문의 이메일로 교체
  privacyEmail: 'privacy@samyang-env.co.kr',
  businessHoursKo: '월-금 09:00 - 18:00',
  businessHoursEn: 'Mon-Fri 09:00 - 18:00',
  closedDaysKo: '토/일/공휴일 휴무',
  closedDaysEn: 'Closed on weekends/holidays',
};

/** Google Maps - 새 탭에서 보기 */
export const CONTACT_MAP_URL =
  'https://maps.google.com/?q=' + encodeURIComponent(CONTACT.addressKo);

/** 지도 임베드용 iframe URL (Google Maps, API 키 불필요) */
export const CONTACT_MAP_EMBED_URL =
  'https://www.google.com/maps?q=' + encodeURIComponent(CONTACT.addressKo) + '&output=embed';
