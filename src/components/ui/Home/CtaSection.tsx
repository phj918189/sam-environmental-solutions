import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import styles from '@/styles/pages/Home/CtaSection.module.css';

const CtaSection = () => {
  const { prefix, t } = useLanguage();
  const { ref, inView } = useScrollReveal<HTMLDivElement>();

  return (
    <Section variant="muted">
      <div
        ref={ref}
        className={`${styles.wrapper} reveal reveal-up ${inView ? 'in-view' : ''}`}
      >
        <h2 className={styles.title}>
          {t('home.ctaTitle')}
          <br />
          <span className="text-accent">{t('home.ctaHighlight')}</span>
        </h2>
        <p className={styles.subtitle}>
          {t('home.ctaDesc')}
        </p>
        <div className={styles.actions}>
          <Link to={`${prefix}/contact`}>
            <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Phone className="h-5 w-5" />
              {t('home.requestQuote')}
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default CtaSection;
