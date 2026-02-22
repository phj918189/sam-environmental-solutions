# 배포 및 커스텀 도메인 가이드

## 1. 사전 준비

- 도메인 보유 (예: `samyang-env.co.kr`, `www.example.com`)
- GitHub에 프로젝트 푸시 완료

---

## 2. Vercel 배포

### 2-1. 프로젝트 연결

1. [vercel.com](https://vercel.com) 로그인
2. **Add New** → **Project**
3. GitHub 저장소 선택 → **Import**
4. **Framework Preset**: Vite (자동 감지됨)
5. **Build Command**: `npm run build` (기본값)
6. **Output Directory**: `dist` (기본값)

### 2-2. 환경 변수 설정 (배포 전에 추가)

**Project Settings → Environment Variables**에 아래 추가:

| 변수 | 값 | 용도 |
|------|-----|------|
| `VITE_SITE_URL` | `https://내도메인.com` | **커스텀 주소**. SEO(sitemap, robots, 메타)에 사용 |
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms 발급 키 | 문의 폼 이메일 전송 |

> `VITE_SITE_URL`은 **최종 사용할 도메인**으로 설정하세요. (예: `https://samyang-env.co.kr`)

### 2-3. 배포 실행

**Deploy** 클릭 → 배포 완료 후 `https://프로젝트명.vercel.app` 주소로 접속 가능

---

## 3. 커스텀 도메인 연결

### 3-1. Vercel에서 도메인 추가

1. 프로젝트 **Settings** → **Domains**
2. **Add** → 사용할 도메인 입력 (예: `samyang-env.co.kr` 또는 `www.samyang-env.co.kr`)
3. **Add** 클릭

### 3-2. DNS 설정 (도메인 구매처에서)

Vercel이 안내하는 **DNS 레코드**를 도메인 관리 페이지에 추가합니다.

#### A 레코드 (루트 도메인 `example.com`)

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |

#### CNAME 레코드 (서브도메인 `www.example.com`)

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `cname.vercel-dns.com` |

> 정확한 값은 Vercel Domains 화면에 표시되는 내용을 따르세요.

### 3-3. 적용 대기

- DNS 전파: 보통 **몇 분 ~ 24시간**
- Vercel에서 **Valid Configuration** 표시되면 연결 완료

---

## 4. 커스텀 주소가 사이트 전체에 반영되도록

`VITE_SITE_URL`을 커스텀 도메인으로 설정하면:

- `npm run build` 시 `replace-site-url` 스크립트가 자동 실행
- `index.html` 메타 태그
- `public/sitemap.xml`
- `public/robots.txt`

위 파일들에 설정한 도메인이 적용됩니다.

---

## 5. 체크리스트

| 단계 | 완료 |
|------|------|
| 1. GitHub에 코드 푸시 | □ |
| 2. Vercel에 프로젝트 Import | □ |
| 3. `VITE_SITE_URL` 환경 변수에 커스텀 주소 설정 | □ |
| 4. `VITE_WEB3FORMS_ACCESS_KEY` 환경 변수 설정 | □ |
| 5. Deploy 실행 | □ |
| 6. Settings → Domains에서 커스텀 도메인 추가 | □ |
| 7. DNS 레코드 설정 (A 또는 CNAME) | □ |
| 8. DNS 전파 후 접속 확인 | □ |
