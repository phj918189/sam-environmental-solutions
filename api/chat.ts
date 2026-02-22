/**
 * AI 챗봇 + RAG API (Vercel Serverless)
 * - 회사 컨텍스트 + RAG 검색 결과를 반영해 GPT가 답변
 */
import path from 'path';
import fs from 'fs';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const EMBEDDING_MODEL = 'text-embedding-3-small';
const CHAT_MODEL = 'gpt-4o-mini';

const SYSTEM_PROMPT_KO = `당신은 삼양건설환경연구소 웹사이트 AI 어시스턴트입니다.
회사와 무관한 질문에는 "삼양건설환경연구소 관련 질문만 답해 드릴 수 있습니다"라고 답하세요.
견적, 측정 범위, 인증, 연락처 등은 아래 컨텍스트와 검색 결과를 바탕으로 답하세요.
답변은 2~3문장으로 간결하게 작성하세요. 필요한 경우 웹사이트 문의 폼(/contact)이나 전화(042-533-6270)로 안내하세요.`;

const SYSTEM_PROMPT_EN = `You are the AI assistant for Samyang Environmental Research Institute's website.
For questions unrelated to the company, reply: "I can only answer questions about Samyang Environmental Research Institute."
Answer questions about quotes, measurement scope, certifications, contact info based on the context and search results below.
Keep answers concise (2-3 sentences). When appropriate, direct users to the contact form (/contact) or phone (042-533-6270).`;

function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB) || 1);
}

async function getEmbedding(text: string, apiKey: string): Promise<number[]> {
  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model: EMBEDDING_MODEL, input: text }),
  });
  if (!res.ok) throw new Error(`Embedding API error: ${res.status}`);
  const data = await res.json();
  return data.data[0].embedding;
}

async function searchRAG(
  query: string,
  apiKey: string,
  embeddings: Array<{ text: string; embedding: number[] }>
): Promise<string[]> {
  if (embeddings.length === 0) return [];
  const queryEmbedding = await getEmbedding(query, apiKey);
  const scored = embeddings.map((item) => ({
    text: item.text,
    score: cosineSimilarity(queryEmbedding, item.embedding),
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 5).map((s) => s.text);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OPENAI_API_KEY not configured' });
  }

  try {
    const { messages, language = 'ko' } = req.body as {
      messages: Array<{ role: string; content: string }>;
      language?: string;
    };

    if (!messages?.length) {
      return res.status(400).json({ error: 'messages required' });
    }

    const lastMessage = messages[messages.length - 1];
    const userQuery = lastMessage?.content?.trim?.() || '';

    let contextParts: string[] = [];
    try {
      const embeddingsPath = path.join(process.cwd(), 'api', 'data', 'embeddings.json');
      if (fs.existsSync(embeddingsPath)) {
        const raw = fs.readFileSync(embeddingsPath, 'utf-8');
        const data = JSON.parse(raw) as Array<{ text: string; embedding: number[] }>;
        contextParts = await searchRAG(userQuery, apiKey, data);
      }
    } catch {
      // RAG 파일 없으면 스킵
    }

    const systemContent =
      (language === 'en' ? SYSTEM_PROMPT_EN : SYSTEM_PROMPT_KO) +
      (contextParts.length > 0 ? `\n\n[관련 문서]\n${contextParts.join('\n\n')}` : '');

    const chatMessages = [
      { role: 'system' as const, content: systemContent },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant' | 'system',
        content: m.content,
      })),
    ];

    const chatRes = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: CHAT_MODEL,
        messages: chatMessages,
        max_tokens: 500,
        temperature: 0.5,
      }),
    });

    if (!chatRes.ok) {
      const errText = await chatRes.text();
      return res.status(chatRes.status).json({ error: `OpenAI error: ${errText}` });
    }

    const chatData = (await chatRes.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const reply = chatData.choices?.[0]?.message?.content ?? '';

    return res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: err instanceof Error ? err.message : 'Internal server error',
    });
  }
}
