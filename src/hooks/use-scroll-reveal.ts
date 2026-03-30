import { useEffect, useRef, useState } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
}

/** 너무 크면 하단 섹션(CTA 등)이 끝까지 스크롤해도 교차하지 않아 영구 opacity:0 이 될 수 있음 */
const DEFAULT_THRESHOLD = 0.12;
/** px만 사용(vh는 일부 환경에서 rootMargin 파싱 이슈 보고). 하단 여백만 줄여 ‘조금 더 올라왔을 때’ 트리거 */
const DEFAULT_ROOT_MARGIN = '0px 0px -88px 0px';

/**
 * 요소가 뷰포트에 충분히 들어오면 inView를 true로 설정하는 훅.
 * 최초 1회만 트리거되고 이후 disconnect.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const threshold = options.threshold ?? DEFAULT_THRESHOLD;
    const rootMargin = options.rootMargin ?? DEFAULT_ROOT_MARGIN;

    let observer: IntersectionObserver;
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        },
        { threshold, rootMargin }
      );
    } catch {
      /* rootMargin 파싱 실패 시 폴백 — 화면이 비어 보이는 것 방지 */
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.08, rootMargin: '0px' }
      );
    }

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, inView };
}
