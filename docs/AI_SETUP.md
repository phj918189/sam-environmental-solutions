# AI 챗봇 & RAG 설정 가이드

> 나중에 AI 기능을 활성화할 때 참고용 문서입니다.  
> 현재는 비활성화 상태이며, 프로젝트에 영향을 주지 않습니다.

---

## 1. 기능 개요

| 기능 | 설명 |
|------|------|
| **AI 챗봇** | 우측 하단 플로팅 버튼 → 회사·서비스·견적·연락처 질문에 AI가 답변 |
| **RAG** | 회사 문서(rag-content.md)를 검색해 AI 답변에 반영 |

---

## 2. 활성화 방법

### 2-1. 환경 변수 설정

`.env`에 추가:

```
# AI 챗봇 활성화 (true 또는 1로 설정 시 플로팅 버튼 표시)
VITE_ENABLE_AI_CHAT=true

# OpenAI API 키 (platform.openai.com에서 발급)
OPENAI_API_KEY=sk-xxx
```

### 2-2. RAG 임베딩 생성 (선택)

RAG를 사용하려면 한 번 실행:

```powershell
npm run generate-rag
```

- `api/data/rag-content.md` → 청크 분할 → OpenAI embeddings API 호출 → `embeddings.json` 생성
- `.env`에 `OPENAI_API_KEY`가 있으면 자동 사용
- OpenAI quota(429) 오류 시: [platform.openai.com/account/billing](https://platform.openai.com/account/billing)에서 결제 수단 등록

---

## 3. 배포 (Vercel)

1. Vercel에 프로젝트 배포
2. **Settings → Environment Variables**:
   - `OPENAI_API_KEY`: OpenAI 발급 키
   - `VITE_ENABLE_AI_CHAT`: `true` (챗봇 표시하려면)
3. `embeddings.json` 생성 후 커밋/푸시

---

## 4. 관련 파일

| 경로 | 역할 |
|------|------|
| `src/components/common/ChatWidget.tsx` | 챗봇 UI (플로팅 버튼 + 패널) |
| `api/chat.ts` | Vercel Serverless API (채팅 + RAG) |
| `api/data/rag-content.md` | RAG 지식 베이스 (수정 후 `generate-rag` 재실행) |
| `api/data/embeddings.json` | RAG 임베딩 (빈 배열 `[]`이면 RAG 미사용) |
| `scripts/generate-rag-embeddings.js` | 임베딩 생성 스크립트 |

---

## 5. 비활성화 상태 (현재)

- `VITE_ENABLE_AI_CHAT`가 설정되지 않았거나 `false`이면 챗봇 버튼이 표시되지 않음
- API·스크립트·데이터 파일은 그대로 두어도 빌드·배포에 영향 없음
