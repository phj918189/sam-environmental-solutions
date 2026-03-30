# PRD (Product Requirements Document)
## 삼양건설환경연구소 공식 웹사이트

**버전**: 0.4.0  
**최종 수정일**: 2026-03-30  
**상태**: 운영 가능 (MVP+). 코드 정리·홈 UX·SEO(경로별 메타) 반영

---

## 1. 개요

### 1.1 목적
삼양건설환경연구소(Samyang Environmental Research Institute)의 공식 기업 웹사이트로, 회사 소개, 사업 영역, 분석실·장비, 사업실적, 견적 문의 등을 제공하는 **정적 콘텐츠 중심의 정보형 SPA**이다.

### 1.2 대상 사용자
- 환경 측정·분석 서비스를 찾는 B2B 고객
- 공사·건설 발주 기관
- 환경 인허가·컨설팅이 필요한 기업
- 일반 방문자(정보 탐색)

### 1.3 핵심 가치 제안
- 1992년 설립, 30년 이상의 현장 경험
- 대기·수질·악취 전 분야 공인·등록 기반
- 60개 이상 시설 운영, 높은 유지율(홈 통계 카피 기준)

---

## 2. 기술 스택

| 영역 | 기술 | 비고 |
|------|------|------|
| 빌드 | Vite 5.4.x | `prebuild`에서 `replace-site-url` 스크립트 실행 |
| 언어 | TypeScript 5.8.x | |
| UI | React 18.3.x | |
| 라우팅 | React Router DOM 6.30.x | 한/영 경로 이중 등록(동일 컴포넌트) |
| 스타일 | Tailwind CSS 3.4.x + CSS Modules | `src/styles/**/*.module.css` |
| UI 프리미티브 | shadcn/ui (Radix 기반) | **실사용 컴포넌트만** `src/components/ui/`에 유지(약 18개 + Home 하위) |
| 전역 상태 | React Context | `LanguageContext` |
| 메타/SEO | react-helmet-async + `src/config/seo.ts` | `DocumentHead`: canonical, hreflang, OG/Twitter, WebPage JSON-LD |
| 차트 | Recharts 2.15.x | 홈 DataSection 파이 차트 |
| 폼(의존성) | react-hook-form, zod, @hookform/resolvers | 패키지 포함. **ContactPage는 현재 `useState` 제어 컴포넌트 + 수동 검증** |
| 토스트 | Radix Toast (`use-toast` / `<Toaster />`) | App에 마운트. `sonner` 패키지는 있으나 App에서는 미사용 |
| 아이콘 | Lucide React | |
| 테스트 | Vitest, Testing Library | |
| 선택 기능 | AI 채팅 위젯 | `VITE_ENABLE_AI_CHAT` 활성 시 `ChatWidget` 표시, `api/` RAG 연동 문서 참고 |

---

## 3. 라우팅 및 페이지 구조

### 3.1 언어 지원
- **한국어**: 경로 접두사 없음 (`/…`)
- **영어**: `/en` 접두사 (`/en/…`)
- `LanguageContext`: URL과 동기화, `useLanguage()`가 **`language`**, **`lang`**(동일 값), **`prefix`**(`''` 또는 `'/en'`), **`t`**, **`setLanguage`** 제공 → 라우트용 링크에서 `prefix` 하드코딩 반복 제거
- 번역: `src/locales/ko.ts`, `en.ts` + `createT` (`t('키')` 및 레거시 `t(ko, en)` 오버로드)

### 3.2 라우트 정의

| 경로 (한국어) | 경로 (영어) | 페이지 | 비고 |
|--------------|-------------|--------|------|
| `/` | `/en` | HomePage | |
| `/about` | `/en/about` | AboutPage | |
| `/services/:serviceType` | `/en/services/:serviceType` | ServiceDetailPage | `air` \| `water` \| `odor`만 유효, 그 외 `NotFound` |
| `/portfolio` | `/en/portfolio` | PortfolioPage | |
| `/portfolio/:id` | `/en/portfolio/:id` | PortfolioDetailPage | 미존재 id → 안내 UI |
| `/laboratory` | `/en/laboratory` | LaboratoryPage | 장비·시설 이미지 |
| `/contact` | `/en/contact` | ContactPage | Web3Forms |
| `/news` | `/en/news` | NewsPage | 라우트 유지 |
| `/news/:id` | `/en/news/:id` | NewsDetailPage | |
| `/privacy` | `/en/privacy` | PrivacyPage | |
| `/terms` | `/en/terms` | TermsPage | |
| `*` | `*` | NotFound | |

### 3.3 네비게이션 정책
- **Header**: 메인 메뉴에서 **소식(News) 항목은 주석 처리**되어 비노출. URL 직접 접근은 가능.
- **Footer**: 소식·개인정보·약관 링크 유지.

---

## 4. 페이지별 상세 요구사항

### 4.1 홈페이지 (HomePage)
**목적**: 첫인상, 핵심 정보, 하위 페이지 진입 유도

| 순서 | 섹션 | 컴포넌트 | 구현 요약 |
|------|------|----------|-----------|
| 1 | 히어로 | VisualSection | 배경·오버레이, 제목/슬로건, 서비스 태그 링크, KST 시계, 우측(또는 그리드) 바로가기 카드 |
| 2 | 데이터 | DataSection | 서비스 비율 파이 차트, 스크롤 시 카운트업 통계, 회사 소개 링크 |
| 3 | 프로세스 | ProcessSection | 5단계(상담→현장조사→분석→보고→사후관리). **모바일: 그리드 3+2(아래 2개 가운데 정렬)**, 태블릿 이상: 5열 1행 |
| 4 | 장비 | EquipmentSection | `laboratory` 데이터 중 featured 장비 요약, 분석실 페이지 링크 |
| 5 | 인증 | CertificationsSection | **7개 카드 그리드**, 클릭 시 **Dialog**로 등록증 이미지 확대(캐러셀 아님) |
| 6 | CTA | CtaSection | 견적 문의 버튼(포트폴리오 버튼은 코드상 주석 가능) |

**스크롤 리빌 애니메이션**  
- `src/hooks/use-scroll-reveal.ts`: `IntersectionObserver`로 섹션 헤더 등 관찰, 최초 1회 `in-view` 클래스 부여  
- 기본값: `threshold` 0.12, `rootMargin` `0px 0px -88px 0px`(하단 일부 구간 제외해 너무 이른 트리거 방지; 과도한 값은 하단 섹션이 영구 숨김 위험)  
- `src/index.css` 유틸: `.reveal`, `.reveal-up` / `left` / `right` / `scale`, `.in-view`, `--reveal-delay`  
- 적용 대상: Data / Process / Equipment / Certifications / CTA 섹션(Visual은 제외)

**비포함(의도적)**  
- 홈에서 **ServicesSection**은 import/렌더 주석 처리(서비스는 헤더·히어로 링크로 진입).

### 4.2 회사소개 (AboutPage)
- 탭: 인사말, 미션/비전, 핵심가치, 연혁, 조직
- 데이터: `src/data/about.ts`, 이미지 등 에셋

### 4.3 사업영역 상세 (ServiceDetailPage)
- `serviceType`: `air` | `water` | `odor`
- 범위·산출물·FAQ(Accordion)·공통 프로세스 스텝
- 상세 카피·FAQ: `src/data/services.ts`

### 4.4 사업실적 (PortfolioPage / PortfolioDetailPage)
- 탭: 운영 / 시공 / 휴게소
- 상세: `portfolioDetails` id 기반

### 4.5 분석실 (LaboratoryPage)
- 장비 카테고리 탭, 카드 그리드, 품질관리 블록
- **분석실 전경**: `lab_room` 등 정적 이미지, 라이트박스(Dialog) 네비게이션

### 4.6 견적문의 (ContactPage)
- 연락처·영업시간: `src/data/contact.ts`
- 지도: embed URL + 외부 지도 링크
- 폼: Web3Forms (`VITE_WEB3FORMS_ACCESS_KEY`), 개인정보 동의, Select 문의 유형
- 피드백: Radix `toast`

### 4.7 소식 (NewsPage / NewsDetailPage)
- 정적 데이터 `src/data/news.ts`
- Header에서는 비노출이나 라우트·Footer는 유지

### 4.8 법적 페이지
- `LegalPageLayout` + locale 키 기반 본문

---

## 5. 컴포넌트 구조

### 5.1 레이아웃
| 컴포넌트 | 역할 |
|----------|------|
| Layout | DocumentHead, ScrollToTop, Header, main, Footer, ScrollToTopButton, 조건부 ChatWidget |
| Header | 로고, 드롭다운(서비스), 언어 전환, 모바일 메뉴 |
| Footer | 연락처, 소식·법적 링크 |

### 5.2 공통 (`components/common`)
PageHero, ProcessSteps, IconList, LegalPageLayout, ScrollToTop, ScrollToTopButton, DocumentHead, ChatWidget 등

### 5.3 UI (`components/ui`)
- **홈**: VisualSection, DataSection, ProcessSection, EquipmentSection, CertificationsSection, CtaSection  
- **shadcn 계열(프로젝트에 남긴 것)**: accordion, badge, button, card, chart, checkbox, dialog, dropdown-menu, input, label, select, section, sonner(파일만), tabs, textarea, toast, toaster, tooltip 등  
- 미사용 프리셋 컴포넌트는 제거되어 번들/저장소 부담 감소

---

## 6. 데이터 및 콘텐츠

- **백엔드/CMS 없음**: `src/data/*.ts` + `src/locales/*`
- **연락처·지도**: `contact.ts`
- **인증서 이미지**: `src/assets/certificates/`
- **장비·실험실 이미지**: `src/assets/equipment/`, `lab_room/` 등
- **사이트 URL·SEO 로직**: `src/config/site.ts`, `src/config/seo.ts`, 빌드 시 `replace-site-url`

### 6.1 SEO 구현 요약
| 구분 | 내용 |
|------|------|
| 정적 진입 | `index.html`: title, description, keywords, canonical(홈), OG/Twitter 기본, Organization + LocalBusiness JSON-LD |
| SPA 내비게이션 | `DocumentHead` + `resolveSeo(pathname)` |
| 이중언어 메타 | `seo.ts`의 `PAGE_SEO` — 동일 논리 경로에 대해 ko/en 제목·설명 |
| 동적 상세 | `/news/:id` → `news` 데이터, `/portfolio/:id` → `portfolioDetails` 기반 title·description(길이 truncate) |
| 링크 태그 | `rel="canonical"`, `hreflang`(ko, en, x-default→한국어 URL) |
| 소셜 | `og:*`, `twitter:card` + 이미지 URL `SITE_URL/logo_2.svg` — **`public/logo_2.svg` 배포 필요** |
| 구조화 데이터 | 경로별 `WebPage` JSON-LD(Organization은 index.html과 병행) |
| 색인 보조 | `public/sitemap.xml`, `public/robots.txt`(빌드 시 URL 치환 스크립트 대상) |

---

## 7. 미완성·조정 가능 항목

| 항목 | 설명 | 우선순위 |
|------|------|----------|
| Header 소식 메뉴 | 재노출 시 주석 해제 + 카피 확인 | 낮음 |
| 홈 ServicesSection | 필요 시 주석 해제 및 스타일 정비 | 낮음 |
| 이미지 최적화 | WebP/리사이즈, LCP 개선 | 중간 |
| Contact 폼 | RHF+Zod로 리팩터(의존성 활용) 또는 현행 유지 | 낮음 |
| 라우트 중복 | `App.tsx` 한/영 Route 중복을 배열 순회 등으로 단일화 | 낮음 |
| 접근성 | 키보드·스크린리더·포커스 순서 | 중간 |

---

## 8. 향후 개발 권장

1. **콘텐츠**: 뉴스·실적 정기 반영 워크플로(비개발자용은 CMS 검토)
2. **성능**: 이미지 WebP·리사이즈, LCP, 필요 시 route-based code splitting
3. **품질**: E2E 스모크(주요 라우트·폼 제출 모킹)
4. **보안/스팸**: reCAPTCHA 등 폼 보강
5. **SEO**: Search Console·Bing Webmaster에 sitemap 제출, 클릭률 모니터링; 소셜용 **1200×630** 규격 이미지 검토(SVG 대신 PNG 권장)

---

## 9. 디렉토리 규칙

| 경로 | 용도 |
|------|------|
| `src/pages/` | 라우트 단위 페이지 |
| `src/config/` | `site.ts`(SITE_URL), `seo.ts`(경로별 이중언어 메타) |
| `src/components/layout/` | Header, Footer, Layout |
| `src/components/common/` | 공통 블록 |
| `src/components/ui/` | shadcn·공용 UI + `ui/Home/*` 홈 섹션 |
| `src/styles/` | CSS Modules (components / pages / common) |
| `src/data/` | 정적 데이터 |
| `src/locales/` | i18n |
| `src/hooks/` | `use-toast`, `use-scroll-reveal`, `use-mobile` 등 |
| `public/` | `logo_2.svg`(OG 등), sitemap, robots |
| `api/` | (선택) Vercel 등 서버리스·RAG 관련 |

---

## 10. 아키텍처 메모

- **SPA**: Vite + React Router, SSR 없음. SEO는 `index.html` 기본 메타 + `DocumentHead` 동적 보강.
- **i18n**: URL 단일 소스, `prefix`·`lang`으로 링크 일관성 유지.
- **스크롤 리빌**: JS 훅 + 전역 CSS 유틸 조합; `prefers-reduced-motion` 시 전환만 완화(필요 시 가시성 정책 추가 검토 가능).

---

## 11. 검토 이력 및 설계 메모 (2025–2026)

### 11.1 해소된 이슈 (문서·구현 기준)
- 연락처·지도·Web3Forms·SEO 기본(sitemap/robots/OG 등) 반영
- News 라우트 존재; Header 노출만 정책적으로 끔
- `serviceType` 검증 및 잘못된 경로 → NotFound
- 미사용 shadcn 파일 대량 제거, 데드 코드(ServicesSection 파일) 제거
- 언어별 `prefix`/`lang` 중앙화로 중복 제거
- 홈 프로세스 모바일 레이아웃(3+2) 및 스크롤 애니메이션 도입·조정
- 경로별 SEO 강화: `seo.ts` + `DocumentHead`(canonical, hreflang, OG/Twitter, WebPage JSON-LD), `public/logo_2.svg`로 OG 이미지 URL 보장

### 11.2 지속적 리스크
| 주제 | 내용 |
|------|------|
| 이중 라우트 정의 | `/`와 `/en`에 동일 컴포넌트 반복 → 신규 페이지 추가 시 누락 위험 |
| 정적 데이터 동기화 | 뉴스 목록/상세 등 id·제목 중복 시 불일치 가능 → 단일 소스 파생 권장 |
| IntersectionObserver 튜닝 | `rootMargin`/`threshold` 과도 시 하단 콘텐츠가 보이지 않을 수 있음 → px 기본값·try/catch 폴백 유지 |
| 패키지 대비 실사용 | RHF/Zod/Sonner 등은 도입만 되어 있고 일부 미사용 → 정리 또는 실제 적용 선택 |

### 11.3 i18n 확장 시
- 키 기반 `locales` 유지 시 언어 추가가 수월. 레거시 `t(ko, en)` 혼용 구간은 점진적 키화 권장.

---

## 12. 변경 요약

### v0.4.0
- **SEO**: `src/config/seo.ts` 도입, `DocumentHead`에서 canonical·hreflang·OG/Twitter·WebPage JSON-LD 동기화, 뉴스/포트폴리오 상세 동적 메타.
- **자산**: `public/logo_2.svg`로 소셜 미리보기 URL 일치.
- **문서**: README 재구성(구조·환경변수·SEO·스크립트), PRD에 SEO 절(6.1) 및 v0.4 반영.

### v0.3.0 (이전)
- 홈 섹션·프로세스 반응형·스크롤 리빌, Context `prefix`/`lang`, shadcn 축소, PRD 현행화.

---

*이 문서는 제품 요구와 구현 스냅샷을 동시에 기술한다. 배포·마케팅 전 별도 스펙과 diff를 권장한다.*
