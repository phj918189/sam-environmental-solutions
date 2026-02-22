# PRD (Product Requirements Document)
## 삼양건설환경연구소 공식 웹사이트

**버전**: 0.2.0  
**최종 수정일**: 2025-02-21  
**상태**: MVP 완성 (운영 가능)

---

## 1. 개요

### 1.1 목적
삼양건설환경연구소(Samyang Environmental Research Institute)의 공식 기업 웹사이트를 구축하여 회사 소개, 사업 영역, 분석실, 사업실적, 견적 문의 등을 제공하는 정보 제공형 웹사이트.

### 1.2 대상 사용자
- 환경 측정·분석 서비스를 찾는 B2B 고객
- 공사·건설 발주 기관
- 환경 인허가·컨설팅이 필요한 기업
- 일반 방문자 (정보 탐색)

### 1.3 핵심 가치 제안
- 1992년 설립, 30년 이상의 경험을 보유한 환경 전문기관
- 대기·수질·악취 전 분야 인증 보유
- 60개 이상 시설 운영, 100% 유지율

---

## 2. 기술 스택

| 영역 | 기술 | 버전 |
|------|------|------|
| 빌드 | Vite | 5.4.x |
| 언어 | TypeScript | 5.8.x |
| UI | React | 18.3.x |
| 라우팅 | React Router DOM | 6.30.x |
| 스타일 | Tailwind CSS, CSS Modules | 3.4.x |
| UI 컴포넌트 | shadcn/ui (Radix UI) | - |
| 상태 | React Context | - |
| 차트 | Recharts | 2.15.x |
| 폼 | React Hook Form, Zod | 7.61.x, 3.25.x |
| 아이콘 | Lucide React | 0.462.x |
| 테스트 | Vitest, Testing Library | 3.2.x |

---

## 3. 라우팅 및 페이지 구조

### 3.1 언어 지원
- **한국어**: 기본 (`/` prefix)
- **영어**: `/en` prefix
- URL 기반 언어 전환, `LanguageContext`로 전역 관리
- `src/locales/ko.ts`, `en.ts` key 기반 `t(key)` 번역 (예: `t('nav.about')`)

### 3.2 라우트 정의

| 경로 (한국어) | 경로 (영어) | 페이지 | 상태 |
|--------------|-------------|--------|------|
| `/` | `/en` | HomePage (랜딩) | ✅ |
| `/about` | `/en/about` | AboutPage (회사소개) | ✅ |
| `/services/:serviceType` | `/en/services/:serviceType` | ServiceDetailPage | ✅ |
| `/portfolio` | `/en/portfolio` | PortfolioPage | ✅ |
| `/portfolio/:id` | `/en/portfolio/:id` | PortfolioDetailPage | ✅ |
| `/laboratory` | `/en/laboratory` | LaboratoryPage | ✅ |
| `/contact` | `/en/contact` | ContactPage | ✅ |
| `/privacy` | `/en/privacy` | PrivacyPage | ✅ |
| `/terms` | `/en/terms` | TermsPage | ✅ |
| `/news` | `/en/news` | NewsPage | ✅ |
| `/news/:id` | `/en/news/:id` | NewsDetailPage | ✅ |
| `*` | `*` | NotFound (404) | ✅ |

---

## 4. 페이지별 상세 요구사항

### 4.1 홈페이지 (HomePage)
**목적**: 첫인상, 핵심 정보 전달, 주요 섹션으로의 진입 유도

| 섹션 | 컴포넌트 | 내용 |
|------|----------|------|
| 히어로 | VisualSection | 회사명, 슬로건, KST 실시간 시계, 서비스 태그(#대기환경 #수질환경 등), 바로가기 카드 (Services, Laboratory, Portfolio, Contact) |
| 통계 | DataSection | 서비스 비율 파이 차트 (대기 35%, 수질 40%, 악취 25%), 애니메이션 통계 (설립 1992, 30년+, 시설 60+, 유지율 100%) |
| 프로세스 | ProcessSection | 5단계 프로세스: 상담 → 현장조사 → 분석 → 보고 → 사후관리 |
| 인증현황 | CertificationsSection | 7개 인증서 무한 스크롤 캐러셀, 모달로 확대 보기 |
| CTA | CtaSection | 견적 문의/사업실적 버튼 |

### 4.2 회사소개 (AboutPage)
**목적**: 회사 신뢰도 및 정체성 전달

- **탭 구성**: 인사말, 미션/비전, 핵심가치, 연혁, 조직도
- **핵심 인물**: 대표 이의환(35년), 이사 김동은(13년), 연구소장 김명훈(15년)
- **콘텐츠**: 연혁, 조직 구조 시각화

### 4.3 사업영역 상세 (ServiceDetailPage)
**목적**: 서비스별 상세 정보 제공

- **파라미터**: `serviceType` = `air` | `water` | `odor`
- **공통 구성**: 범위, 산출물, FAQ 아코디언, 프로세스 단계
- **서비스별 차이**:
  - **대기환경**: 측정, 허가, 컨설팅, EIA 지원
  - **수질환경**: BOD, COD, SS, T-N, T-P 분석, 시설 컨설팅, 모니터링
  - **악취환경**: 측정, 발생원 분석, 저감 시설 설계

### 4.4 사업실적 (PortfolioPage, PortfolioDetailPage)
**목적**: 실적 기반 신뢰 확보

- **탭**: 운영시설, 시공사업, 휴게소
- **운영시설**: 17개 이상 (1995~현재)
- **시공사업**: 9개 대표 프로젝트 (2024~2025)
- **휴게소**: 12개 시설 운영
- **상세페이지**: 프로젝트별 상세 설명 (id 기반)

### 4.5 분석실 (LaboratoryPage)
**목적**: 분석 역량 및 시설 소개

- **장비 분류**: 대기·수질·악취 분석 장비 목록
- **품질관리**: 품질관리 체계 소개
- **시설 이미지**: 시설 사진 그리드 (현재 플레이스홀더)

### 4.6 견적문의 (ContactPage)
**목적**: 문의 유도 및 연락처 제공

- **연락처**: 주소, 전화, 이메일 (현재 TBD 플레이스홀더)
- **문의 폼**: 유효성 검사 (React Hook Form + Zod)
- **제출**: 현재 시뮬레이션 (백엔드 미연동)
- **지도**: 플레이스홀더

### 4.7 소식 (NewsPage, NewsDetailPage)
**목적**: 공지, 보도자료, 자료실 제공

- **구분**: 공지(Notice), 소식(News), 자료(Resources)
- **데이터**: `src/data/news.ts` 정적 데이터
- **라우팅**: `/news`, `/news/:id` (한/영) + Header·Footer 네비게이션 연결 완료

### 4.8 법적 페이지 (PrivacyPage, TermsPage)
**목적**: 개인정보처리방침, 이용약관 제공

- LegalPageLayout 기반 레이아웃
- 스크롤 가능한 긴 텍스트 콘텐츠

---

## 5. 컴포넌트 구조

### 5.1 레이아웃
| 컴포넌트 | 역할 |
|----------|------|
| Layout | Header + main + Footer + ScrollToTop |
| Header | 로고, 네비게이션, 언어 전환, 모바일 메뉴 |
| Footer | 회사 정보, 연락처, 법적 링크 |

### 5.2 공통 컴포넌트 (components/common)
| 컴포넌트 | 용도 |
|----------|------|
| PageHero | 페이지별 히어로 (제목, 부제목, 아이콘) |
| ProcessSteps | 프로세스 단계 시각화 |
| IconList | 아이콘 리스트 |
| LegalPageLayout | 법적 페이지 래퍼 |
| ScrollToTop | 라우트 변경 시 스크롤 복원 |
| ScrollToTopButton | 상단 이동 버튼 |

### 5.3 UI 컴포넌트 (components/ui)
- **페이지별**: Home (VisualSection, DataSection, ProcessSection, CertificationsSection, CtaSection)
- **shadcn/ui**: Button, Card, Dialog, Accordion, Tabs, Dropdown 등 50개 이상
- **커스텀**: section.tsx (섹션 래퍼 variants)

---

## 6. 데이터 및 콘텐츠

### 6.1 현재 데이터 관리 방식
- **백엔드 없음**: `src/data/` 폴더에 분리 저장 (contact, portfolio, about, news, services, laboratory, home)
- **CMS 없음**: 정적 콘텐츠
- **이미지**: `src/assets/` 정적 파일

### 6.2 인증서 (7종)
1. 대기 측정대행업 등록증
2. 수질 측정대행업 등록증
3. 악취 측정대행업 등록증
4. 대기환경 관리 대행기관 지정서
5. 수질환경 관리 대행기관 지정서
6. 개인하수처리시설 설계·시공업 등록증
7. 건설업 등록증

### 6.3 회사 기본 정보
- **상호**: 삼양건설환경연구소
- **설립**: 1992년
- **주소/연락처**: `src/data/contact.ts`에서 수정 가능

---

## 7. 미완성 항목 (현재 상태)

| 항목 | 설명 | 우선순위 |
|------|------|----------|
| ~~News 라우팅~~ | 라우트·Header·Footer 연결 완료 | ✅ 완료 |
| ~~연락처 정보~~ | `src/data/contact.ts` 반영 완료 | ✅ 완료 |
| ~~문의 폼 연동~~ | Web3Forms 연동 완료 | ✅ 완료 |
| ~~지도~~ | ContactPage 카카오맵 연동 완료 | ✅ 완료 |
| ~~SEO~~ | 메타 태그, OG, JSON-LD, sitemap, robots.txt 완료 | ✅ 완료 |
| 분석실 사진 | Laboratory 시설 사진 플레이스홀더 | 중간 |
| 접근성 | ARIA 개선, 키보드 네비게이션 | 낮음 |

---

## 8. 향후 개발 권장사항

### 8.1 단기 (MVP 완성)
1. ~~News 라우트 연결 및 네비게이션 추가~~ (완료)
2. 분석실 실제 시설 사진 교체

### 8.2 중기
1. ~~SEO 메타 태그, sitemap.xml, robots.txt~~ (완료)
2. 이미지 최적화 (WebP, lazy load)
3. CMS 연동 검토 (뉴스/자료 관리)
4. 404 페이지 개선
5. 폼 스팸 방지 (reCAPTCHA 등)

### 8.3 장기
1. 블로그/자료실 확장
2. 다국어 추가 (중국어, 일본어 등)
3. 접근성 감사 및 개선
4. 성능 모니터링
5. A/B 테스트

---

## 9. 디렉토리 규칙 (프로젝트 컨벤션)

- **페이지**: `src/pages/` - 라우트별 페이지 컴포넌트
- **공통 컴포넌트**: `src/components/common/`
- **페이지별 UI**: `src/components/ui/{PageName}/`
- **레이아웃**: `src/components/layout/`
- **스타일**: `src/styles/` - CSS Modules (components/, pages/, common/)
- **애셋**: `src/assets/`, `public/`

---

## 10. 참고사항

- Next.js 미사용: Vite + React Router 기반 SPA
- 사용자 규칙의 "views directory" 패턴은 현재 미적용 (페이지에서 컴포넌트 직접 렌더링)
- 반응형: Tailwind breakpoints, 모바일 퍼스트
- 폼: sonner 토스트로 피드백

---

## 11. PRD 분석: 문제점 및 대안

### 11.1 가장 치명적: 견적문의(Contact)의 실질적 기능 부재

**상황**  
- 연락처(주소, 전화, 이메일)가 TBD  
- 문의 폼 제출이 시뮬레이션만 수행  
→ B2B 환경 사이트의 핵심 목적(견적·문의 유도)이 사실상 동작하지 않음.

**대안**

| 우선순위 | 방안 | 설명 |
|----------|------|------|
| 1 | `mailto:` + `tel:` 사용 | 폼 대신 이메일/전화 링크라도 실제 연락 가능하게 함 |
| 2 | 주소·전화·이메일 확정 | 실제 정보 확보 후 즉시 반영 (최우선) |
| 3 | Formspree/EmailJS 등 무료 서비스 | 백엔드 없이 폼 제출 → 이메일 전달 |
| 4 | Google Form 임베드 | 임시용으로 가장 빠름 |

---

### 11.2 i18n 방식 `t(ko, en)`의 구조적 한계

**상황**  
- 컴포넌트마다 `t('한국어', 'English')` 수동 입력  
- 누락·오타·비대칭 번역 가능성  
- 언어 추가 시 모든 컴포넌트 수정 필요

**대안**

| 방안 | 장점 | 단점 |
|------|------|------|
| **react-i18next + JSON** | 키 기반, 번역 파일 분리, 확장 용이 | 초기 마이그레이션 필요 |
| **번역 파일만 분리** | `locales/ko.json`, `locales/en.json`로 분리 후 `t(key)` 사용 | 기존 `t()` 시그니처 변경 |
| **현행 유지** | 변경 없음 | 언어 추가 시 대규모 수정 |

현재 2개 언어만 사용한다면, 단기적으로는 번역을 `locales/*.json`으로만 분리해도 일관성·유지보수가 크게 개선됨.

---

### 11.3 ~~구현된 News 페이지의 미연결~~ ✅ 완료

- NewsPage, NewsDetailPage 라우트 등록 완료  
- Header·Footer에 News 링크 추가 완료

---

### 11.4 데이터 하드코딩 및 유지보수성

**상황**  
- 회사 정보, 포트폴리오, 뉴스 등이 컴포넌트 내부에 하드코딩  
- 비개발자가 콘텐츠 수정 불가

**대안**

| 단계 | 방안 | 비고 |
|------|------|------|
| 즉시 | `src/data/` 폴더에 `*.ts` 또는 `*.json`로 분리 | 수정 위치가 명확해짐 |
| 중기 | Strapi, Sanity 등 headless CMS | 비개발자 직접 수정 가능 |
| 대안 | Notion + API | 저비용, 빠른 적용 |

---

### 11.5 `serviceType` 파라미터 검증 부재

**상황**  
- `/services/air`, `/water`, `/odor`만 유효  
- `/services/xyz`, `/services/123` 등 잘못된 경로에 대한 처리 방식이 PRD·구현에 명시되지 않음

**대안**

- `serviceType`이 `air | water | odor`가 아니면  
  - 404 페이지로 리다이렉트, 또는  
  - `/portfolio`로 리다이렉트  
- `ServiceDetailPage` 진입 시 파라미터 유효성 검사 후, 비정상 값이면 위와 같이 처리

---

### 11.6 React Query 미활용

**상황**  
- 백엔드 API 없음  
- TanStack React Query가 의존성에만 포함되어 실제로 사용되지 않음

**대안**

- **제거**: API가 없으면 불필요한 의존성 제거  
- **유지**: 향후 API/CMS 연동 예정이면 그때 사용  
- **현재 활용**: 정적 데이터를 `queryFn`으로 래핑해 prefetch/cache 용도로 사용 가능 (선택 사항)

---

### 11.7 SEO 및 SPA 구조

**상황**  
- Vite + React SPA → 기본적으로 검색 엔진 크롤링에 불리  
- 메타 태그, Open Graph 등 SEO 설정 부재

**대안**

| 방안 | 설명 |
|------|------|
| react-helmet-async | 페이지별 `<title>`, `<meta>` 동적 설정 |
| prerender (vite-plugin) | 정적 페이지 pre-render로 크롤링 개선 |
| 향후 마이그레이션 | Next.js 등 SSR/SSG로 전환 검토 |

---

### 11.8 기타

- **Footer**: News 링크 추가 완료 (Privacy, Terms와 함께 노출)
- **포트폴리오 상세 ID**: `portfolio/:id`에서 존재하지 않는 `id` 처리 방식(404 vs 리스트로 리다이렉트)이 명확해야 함.

---

### 11.9 권장 우선순위 요약

| 순위 | 항목 | 상태 |
|------|------|------|
| 1 | 연락처 정보 | ✅ `src/data/contact.ts` |
| 2 | 문의 폼 (Web3Forms) | ✅ 완료 |
| 3 | News 라우트 + 네비게이션 | ✅ 완료 |
| 4 | 데이터 파일 분리 | ✅ `src/data/` |
| 5 | i18n key 기반 | ✅ `src/locales/` |
| 6 | `serviceType` 검증 | ✅ `isValidServiceType` + 404 |
| 7 | SEO 기본 설정 | ✅ 메타/OG/JSON-LD/sitemap/robots |
| 8 | React Query 제거 | ✅ 미사용 의존성 제거 |
