/**
 * RAG 임베딩 생성 스크립트
 * - api/data/rag-content.md 읽기
 * - 청크로 분할 후 OpenAI embeddings API 호출
 * - api/data/embeddings.json 저장
 *
 * 실행: npm run generate-rag
 * .env에 OPENAI_API_KEY가 있으면 자동으로 사용. 또는 환경 변수로 직접 설정.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** .env 파일에서 환경 변수 로드 */
function loadEnv() {
  const envPath = join(__dirname, '../.env');
  if (!existsSync(envPath)) return;
  const content = readFileSync(envPath, 'utf-8');
  for (const line of content.split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const val = match[2].trim().replace(/^["']|["']$/g, '');
      if (key && !process.env[key]) process.env[key] = val;
    }
  }
}
loadEnv();
const CHUNK_SIZE = 600;
const CHUNK_OVERLAP = 100;

function splitIntoChunks(text) {
  const chunks = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(start + CHUNK_SIZE, text.length);
    if (end < text.length) {
      const nextSpace = text.indexOf(' ', end);
      if (nextSpace !== -1 && nextSpace - start < CHUNK_SIZE + 200) {
        end = nextSpace + 1;
      }
    }
    chunks.push(text.slice(start, end).trim());
    start = end - CHUNK_OVERLAP;
    if (start < 0) start = 0;
    if (end >= text.length || start >= text.length) break;
  }
  return chunks.filter((c) => c.length > 30);
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('OPENAI_API_KEY 환경 변수를 설정하세요.');
    process.exit(1);
  }

  const contentPath = join(__dirname, '../api/data/rag-content.md');
  const content = readFileSync(contentPath, 'utf-8');
  const chunks = splitIntoChunks(content);

  console.log(`총 ${chunks.length}개 청크 생성`);

  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'text-embedding-3-small',
      input: chunks,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error('OpenAI API 오류:', response.status, err);
    process.exit(1);
  }

  const data = await response.json();
  const embeddings = data.data.map((d) => d.embedding);

  const output = chunks.map((text, i) => ({
    text,
    embedding: embeddings[i],
  }));

  const outPath = join(__dirname, '../api/data/embeddings.json');
  writeFileSync(outPath, JSON.stringify(output), 'utf-8');
  console.log(`저장 완료: ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
