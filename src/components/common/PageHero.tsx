import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import styles from '@/styles/common/PageHero.module.css';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  iconContainerClassName?: string;
}

const PageHero = ({ title, subtitle, icon, iconContainerClassName }: PageHeroProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {icon && (
          <div className={styles.iconWrap}>
            <div className={cn(styles.iconBox, iconContainerClassName)}>{icon}</div>
          </div>
        )}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
