# 삼양건설환경연구소 공식 웹사이트

삼양건설환경연구소(Samyang Environmental Research Institute)의 공식 기업 웹사이트입니다.  
회사 소개, 사업 영역, 분석실, 사업실적, 소식, 견적 문의 등을 제공합니다.

## 기술 스택

- **Vite** + TypeScript + React 18
- **React Router** 6 (한국어/영어 URL 기반)
- **Tailwind CSS** + CSS Modules
- **shadcn/ui** (Radix UI)
- React Hook Form + Zod (폼·검증)

## 프로젝트 구조

```
src/
├── components/     # 공통·레이아웃·UI 컴포넌트
│   ├── common/     # 페이지 간 공통 컴포넌트 (ChatWidget, PageHero 등)
│   ├── layout/     # Header, Footer, Layout
│   └── ui/         # shadcn/ui 및 페이지별 UI
├── config/         # site.ts (VITE_SITE_URL 기반 설정)
├── contexts/       # LanguageContext (다국어)
├── data/           # 정적 데이터 (contact, portfolio, about, news, services, laboratory, home)
├── locales/        # 번역 (ko.ts, en.ts) - key 기반 t()
├── pages/          # 라우트별 페이지 컴포넌트
├── styles/         # CSS Modules
└── assets/         # 정적 이미지·아이콘
api/               # Vercel Serverless (AI 챗봇+RAG)
├── chat.ts        # /api/chat 엔드포인트
└── data/
    ├── rag-content.md    # RAG 지식 베이스
    └── embeddings.json  # 임베딩 (npm run generate-rag로 생성)
scripts/
├── replace-site-url.js
└── generate-rag-embeddings.js
```

## 시작하기

```sh
# 의존성 설치
npm i

# 개발 서버 실행
npm run dev
```

## 필수 설정

프로젝트 루트에 `.env`를 생성하고 아래 값을 설정하세요. (`.env.example` 참고)

| 변수 | 설명 |
|------|------|
| `VITE_SITE_URL` | 사이트 도메인 (예: `https://samyang-env.co.kr`). SEO(sitemap, robots.txt)와 메타 태그에 반영됨. |
| `VITE_WEB3FORMS_ACCESS_KEY` | [Web3Forms](https://web3forms.com)에서 발급한 Access Key. Contact 페이지 문의 폼에서 사용. |
| `OPENAI_API_KEY` | (Vercel 배포 시) [OpenAI API Keys](https://platform.openai.com/api-keys) 발급. AI 챗봇+RAG에 사용. 클라이언트에는 노출되지 않음. |

### 웹 주소(도메인) 변경

1. `.env`에 `VITE_SITE_URL=https://내도메인.com` 추가
2. `npm run replace-site-url` 실행 (또는 `npm run build` 시 자동 실행)

적용 대상: `index.html`, `public/sitemap.xml`, `public/robots.txt`

**배포 + 커스텀 도메인**: [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) 참고

### 문의 폼 (Web3Forms)

Contact 페이지 문의 폼은 Web3Forms로 이메일 전송합니다.

1. [web3forms.com](https://web3forms.com) → Get Access Key → 이메일 입력 후 키 발급
2. `.env`에 `VITE_WEB3FORMS_ACCESS_KEY=발급키` 추가
3. `npm run dev` 재시작

## AI 챗봇 & RAG

**현재 비활성화 상태.** 나중에 사용 시 [docs/AI_SETUP.md](./docs/AI_SETUP.md) 참고.

## 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run replace-site-url` | 사이트 URL 치환 |
| `npm run generate-rag` | RAG 임베딩 생성 (OPENAI_API_KEY 필요) |
| `npm run test` | Vitest 테스트 |

## 문서

- [PRD.md](./PRD.md) - 제품 요구사항 문서
