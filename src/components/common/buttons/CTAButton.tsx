import { type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/components/buttons/CTAButton.module.css';

type Variant = 'primary' | 'secondary' | 'outline';

type CommonProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: Variant;
  fullWidth?: boolean;
};

type LinkProps = CommonProps & {
  to: string; 
  onClick?: never;
  type?: never;
};

type ButtonProps = CommonProps & {
  to?: never;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  type?: 'button' | 'submit' | 'reset';
};

type CTAButtonProps = LinkProps | ButtonProps;

export default function CTAButton({
  children,
  className,
  style,
  variant = 'primary',
  fullWidth = false,
  ...props
}: CTAButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} style={style}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={classes}
      style={style}
    >
      <span>{children}</span>
    </button>
  );
}