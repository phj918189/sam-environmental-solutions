import { type CSSProperties } from 'react';
import { MoreLinkButton, MoreLinkButtonRow } from '@/components/common/buttons/MoreLinkButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { processStepsData } from '@/data/home';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import styles from '@/styles/pages/Home/ProcessSection.module.css';
import CTAButton from '@/components/common/buttons/CTAButton';

const ProcessSection = () => {
  const { lang, prefix, t } = useLanguage();
  const { ref: headerRef, inView } = useScrollReveal<HTMLDivElement>();

  const steps = processStepsData.map((step) => ({
    icon: step.icon,
    title: step.title[lang],
    desc: step.description[lang],
  }));

  return (
    <section className={styles.section}>
      <div className={styles.bgGrid} aria-hidden />
      <div className={styles.bgGlow} aria-hidden />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={styles.header} ref={headerRef}>
          <span className={`${styles.kicker} reveal reveal-up ${inView ? 'in-view' : ''}`}>
            PROCESS
          </span>

          <h2 className={`${styles.title} reveal reveal-up ${inView ? 'in-view' : ''}`}>
            {t('home.ourProcess')}
          </h2>

          <p
            className={`${styles.desc} reveal reveal-up ${inView ? 'in-view' : ''}`}
            style={{ '--reveal-delay': '120ms' } as CSSProperties}
          >
            {t('home.processDesc')}
          </p>
        </div>

        <div className={styles.processWrap}>
          <div className={styles.connectorLine} aria-hidden />

          <div className={styles.diagram}>
            {steps.map((step, index) => (
              <article
                key={step.title}
                className={`${styles.card} reveal reveal-up ${inView ? 'in-view' : ''}`}
                style={{ '--reveal-delay': `${200 + index * 90}ms` } as CSSProperties}
              >
                <div className={styles.iconArea}>
                  <div className={styles.iconGlow} />
                  <div className={styles.iconCircle}>
                    <step.icon className={styles.stepIcon} />
                  </div>
                  <span className={styles.stepNumBadge}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <MoreLinkButtonRow>
          <CTAButton to={`${prefix}/contact`}>
            {t('home.requestQuote')}
          </CTAButton>
        </MoreLinkButtonRow>
      </div>
    </section>
  );
};

export default ProcessSection;