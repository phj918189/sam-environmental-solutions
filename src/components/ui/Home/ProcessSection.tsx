import { type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { processStepsData } from '@/data/home';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import styles from '@/styles/pages/Home/ProcessSection.module.css';

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 헤더 */}
        <div className={styles.header} ref={headerRef}>
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

        {/* 카드 그리드 — 모바일 3+2, 데스크탑 5열 */}
        <div className={styles.diagram}>
          {steps.map((step, index) => (
            <div
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`${styles.ctaRow} reveal reveal-up ${inView ? 'in-view' : ''}`}
          style={{ '--reveal-delay': `${200 + steps.length * 90 + 60}ms` } as CSSProperties}
        >
          <Link to={`${prefix}/contact`} className={styles.ctaLink}>
            {lang === 'ko' ? '분석 의뢰 바로가기' : 'Request Analysis'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
