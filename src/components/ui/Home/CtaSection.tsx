import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import CTAButton from '@/components/common/buttons/CTAButton';
import { Section } from '@/components/ui/section';
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
        <span className={styles.kicker}>CONTACT US</span>

        <h2 className={styles.title}>
          {t('home.ctaTitle')}
          <br />
          <span className={styles.highlight}>{t('home.ctaHighlight')}</span>
        </h2>

        <p className={styles.subtitle}>
          {t('home.ctaDesc')}
        </p>

        <div className={styles.actions}>
          <CTAButton to={`${prefix}/contact`} variant="primary">
            {t('home.requestQuote')}
          </CTAButton>
        </div>
      </div>
    </Section>
  );
};

export default CtaSection;