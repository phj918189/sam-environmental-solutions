import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import styles from '@/styles/components/Section.module.css';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'muted' | 'primary';
}

const Section = ({ children, className, variant = 'default' }: SectionProps) => {
  const variantClass = {
    default: styles.sectionDefault,
    muted: styles.sectionMuted,
    primary: styles.sectionPrimary,
  }[variant];

  return (
    <section className={cn(styles.section, variantClass, className)}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ title, subtitle, centered = true, className }: SectionHeaderProps) => {
  return (
    <div className={cn(styles.header, centered && styles.headerCentered, className)}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export { Section, SectionHeader };
