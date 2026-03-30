# 삼양건설환경연구소 공식 웹사이트

삼양건설환경연구소(Samyang Environmental Research Institute) 공식 사이트입니다.  
회사 소개, 사업 영역(대기·수질·악취), 분석실, 사업실적, 소식, 문의 등을 **한국어·영어 URL**로 제공하는 SPA입니다.

## 기술 스택

| 구분 | 사용 |
|------|------|
| 빌드 | Vite 5, TypeScript, React 18 |
| 라우팅 | React Router 6 (`/` · `/en/…`) |
| 스타일 | Tailwind CSS, CSS Modules |
| UI | shadcn/ui(Radix) — 실사용 컴포넌트만 유지 |
| i18n | `LanguageContext`, `src/locales/ko.ts` · `en.ts` |
| SEO | `react-helmet-async`, `src/config/seo.ts`, `index.html` 기본 메타 |
| 차트 | Recharts(홈 데이터 섹션) |
| 폼 | Contact는 **Web3Forms** + 제어 컴포넌트(`useState`). RHF/Zod는 의존성만 포함 |

## 프로젝트 구조

```
├── api/                    # (선택) Vercel Serverless — AI 챗 RAG
│   ├── chat.ts
│   └── data/               # rag-content.md, embeddings.json
├── public/
│   ├── logo_2.svg          # OG/Twitter 카드용(절대 URL)
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   ├── replace-site-url.js
│   └── generate-rag-embeddings.js
└── src/
    ├── components/
    │   ├── common/         # DocumentHead, PageHero, ChatWidget 등
    │   ├── layout/
    │   └── ui/             # shadcn + ui/Home/* 홈 섹션
    ├── config/
    │   ├── site.ts         # SITE_URL (VITE_SITE_URL)
    │   └── seo.ts          # 경로별 이중언어 메타, canonical, hreflang
    ├── contexts/
    ├── data/
    ├── hooks/              # use-scroll-reveal, use-toast 등
    ├── locales/
    ├── pages/
    ├── styles/
    └── assets/
```

## 시작하기

```sh
npm install
npm run dev
```

개발 서버: **http://localhost:8080** (`vite.config.ts` 기준)

## 환경 변수

`.env`를 만들고 `.env.example`을 참고하세요.

| 변수 | 설명 |
|------|------|
| `VITE_SITE_URL` | 프로덕션 도메인(예: `https://samyangenv.com`). `site.ts`·빌드 시 URL 치환·SEO canonical에 사용 |
| `VITE_WEB3FORMS_ACCESS_KEY` | [Web3Forms](https://web3forms.com) Contact 폼 전송용 |
| `VITE_ENABLE_AI_CHAT` | `true` 또는 `1`이면 `ChatWidget` 표시 |
| `OPENAI_API_KEY` | 로컬/CI에서 `npm run generate-rag` 또는 Vercel API용(클라이언트 비노출) |

### 도메인 변경

1. `.env`에 `VITE_SITE_URL` 설정  
2. `npm run replace-site-url` 실행(또는 `npm run build` 시 `prebuild`로 자동 실행)

대상: `index.html`, `public/sitemap.xml`, `public/robots.txt`

배포: [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)

### 문의 폼(Web3Forms)

1. [web3forms.com](https://web3forms.com)에서 Access Key 발급  
2. `.env`에 `VITE_WEB3FORMS_ACCESS_KEY` 추가 후 개발 서버 재시작  

## SEO(요약)

- **초기 HTML**: `index.html` — 기본 title/description, Organization·LocalBusiness JSON-LD  
- **라우트 이동 후**: `DocumentHead` — 경로별 title·description, **canonical**, **hreflang(ko/en/x-default)**, Open Graph·Twitter, **WebPage** JSON-LD  
- **메타 소스**: `src/config/seo.ts`(정적 경로 이중언어 + 뉴스/포트폴리오 상세는 `data` 연동)  
- **정적**: `public/sitemap.xml`, `public/robots.txt`  
- SNS 미리보기 이미지: `{SITE_URL}/logo_2.svg` → `public/logo_2.svg` 필요  

운영 후 **Google Search Console** 등에서 색인·sitemap 제출을 권장합니다.

## AI 챗봇 · RAG

기본 비활성. 사용 시 [docs/AI_SETUP.md](./docs/AI_SETUP.md) 참고.

## npm 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드(`prebuild`: URL 치환) |
| `npm run preview` | 빌드 미리보기 |
| `npm run replace-site-url` | 사이트 URL 치환만 실행 |
| `npm run generate-rag` | RAG 임베딩 생성 |
| `npm run lint` | ESLint |
| `npm run test` | Vitest |

## 문서

- [PRD.md](./PRD.md) — 제품·구현 스냅샷
