import { type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import btnStyles from '@/styles/components/buttons/MoreLinkButton.module.css';

type MoreLinkButtonProps = {
  to: string;
  children: ReactNode;
  /** Link에 추가 클래스 (reveal 등) */
  className?: string;
  style?: CSSProperties;
  /**
   * true일 때 호버 배경을 업무 프로세스 섹션 전체 배경과 동일 그라데이션으로
   * (밝은 배경 섹션용)
   */
  processHoverBackground?: boolean;
};

/**
 * 슬라이드 패널·스트라이프 호버 + 화살표 등장 스타일의 내부 라우트 링크.
 * `import { MoreLinkButton, MoreLinkButtonRow } from '@/components/common/MoreLinkButton'`
 */
export function MoreLinkButton({
  to,
  children,
  className,
  style,
  processHoverBackground,
}: MoreLinkButtonProps) {
  return (
    <Link
      to={to}
      style={style}
      className={[
        btnStyles.moreLink,
        processHoverBackground ? btnStyles.hoverProcessBg : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className={btnStyles.moreLinkText}>{children}</span>
      <span className={btnStyles.moreLinkIcon} aria-hidden>
        <ArrowRight className={btnStyles.moreLinkArrow} strokeWidth={2.25} />
      </span>
    </Link>
  );
}

type MoreLinkButtonRowProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** true면 상단 여백 없음 (헤더 블록 안에서 쓸 때) */
  tight?: boolean;
};

/** 버튼을 가운데 정렬할 때 사용하는 래퍼 */
export function MoreLinkButtonRow({ children, className, style, tight }: MoreLinkButtonRowProps) {
  return (
    <div
      className={[
        btnStyles.moreLinkRow,
        tight ? btnStyles.moreLinkRowTight : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {children}
    </div>
  );
}
