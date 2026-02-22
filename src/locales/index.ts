/**
 * i18n locales - key 기반 조회 + legacy t(ko, en) fallback
 */
type Language = 'ko' | 'en';
import { ko } from './ko';
import { en } from './en';

const locales = { ko, en } as const;

/**
 * key 경로로 번역 조회 (예: 'nav.about' -> locales[lang].nav.about)
 */
function getByKey(lang: Language, key: string): string | undefined {
  const parts = key.split('.');
  let current: unknown = locales[lang];
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : undefined;
}

/**
 * t 함수 시그니처
 * - t(key: string): key 기반 조회 (nav.about 등)
 * - t(ko: string, en: string): legacy - 데이터 소스(CONTACT 등)용
 */
export type TFunction = {
  (key: string): string;
  (ko: string, en: string): string;
};

export function createT(language: Language): TFunction {
  const t = (a: string, b?: string): string => {
    if (b !== undefined) {
      return language === 'ko' ? a : b;
    }
    const value = getByKey(language, a);
    return value ?? a;
  };
  return t as TFunction;
}

export { ko, en, locales };
