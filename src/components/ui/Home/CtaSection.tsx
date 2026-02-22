import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import styles from '@/styles/pages/Home/CtaSection.module.css';

const CtaSection = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';

  return (
    <Section variant="muted">
      <div className={styles.wrapper}>
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
          <Link to={`${prefix}/portfolio`}>
            <Button size="lg" variant="outline" className="gap-2 group">
              {t('home.viewPortfolio')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default CtaSection;
