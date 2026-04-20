import { type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/components/buttons/CTAButton.module.css';

type CommonProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
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

type EquipmentDetailButtonProps = LinkProps | ButtonProps;

export default function EquipmentDetailButton({
  children,
  className,
  style,
  fullWidth = false,
  ...props
}: EquipmentDetailButtonProps) {
  const classes = [
    styles.button,
    styles.primary,
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