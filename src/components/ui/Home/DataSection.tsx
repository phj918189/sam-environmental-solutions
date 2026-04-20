import type { CSSProperties } from 'react';
import { MoreLinkButton, MoreLinkButtonRow } from '@/components/common/buttons/MoreLinkButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { trustStats, trustHighlights, serviceCredibilityItems } from '@/data/home';
import styles from '@/styles/pages/Home/DataSection.module.css';
import CTAButton from '@/components/common/buttons/CTAButton';

const DataSection = () => {
  const { prefix, t, language } = useLanguage();
  const { ref: headerRef, inView } = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.sectionTop} ref={headerRef}>
          <h2 className={`${styles.sectionTitle} reveal reveal-up ${inView ? 'in-view' : ''}`}>
            {language === 'ko' ? '신뢰할 수 있는 환경 대응 역량' : 'Reliable Environmental Response Capability'}
          </h2>

          <p
            className={`${styles.sectionDesc} reveal reveal-up ${inView ? 'in-view' : ''}`}
            style={{ '--reveal-delay': '120ms' } as CSSProperties}
          >
            {language === 'ko'
              ? '장식적인 수치보다 실제 업무 수행 역량과 대응 기반이 보이도록 구성했습니다.'
              : 'This section highlights practical capabilities and response foundations rather than decorative metrics.'}
          </p>
        </div>

        <div className={styles.grid}>
          <div
            className={`${styles.statsCard} reveal reveal-left ${inView ? 'in-view' : ''}`}
            style={{ '--reveal-delay': '160ms' } as CSSProperties}
          >
            <div className={styles.cardHeader}>
              <span className={styles.kicker}>
                {language === 'ko' ? 'TRUST INDICATORS' : 'TRUST INDICATORS'}
              </span>
              <h3 className={styles.cardTitle}>
                {language === 'ko' ? '핵심 신뢰 지표' : 'Core Trust Indicators'}
              </h3>
              <p className={styles.cardDesc}>
                {language === 'ko'
                  ? '회사의 지속성, 현장 경험, 대응 역량을 한눈에 보여주는 핵심 기준입니다.'
                  : 'Key indicators showing continuity, field experience, and response capability.'}
              </p>
            </div>

            <div className={styles.statsGrid}>
              {trustStats.map((item) => (
                <div key={`${item.value}-${item.label.ko}`} className={styles.statItem}>
                  <strong className={styles.statValue}>
                    {item.value}
                    {item.suffix}
                  </strong>
                  <span className={styles.statLabel}>
                    {language === 'ko' ? item.label.ko : item.label.en}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.statsNote}>
  <h4 className={styles.statsNoteTitle}>
    {language === 'ko' ? '지속 가능한 환경 대응 기반' : 'Sustainable Response Foundation'}
  </h4>
  <p className={styles.statsNoteDesc}>
    {language === 'ko'
      ? '축적된 현장 경험과 분석 기반 대응 역량을 바탕으로 대기, 수질, 악취, 시설 분야의 실질적인 환경 솔루션을 제공합니다.'
      : 'Based on accumulated field experience and analysis-driven capabilities, we provide practical environmental solutions across air, water, odor, and facility sectors.'}
  </p>
</div>
<div className={styles.serviceCredibilityBox}>
              <span className={styles.serviceCredibilityTitle}>
                {language === 'ko' ? '주요 대응 분야' : 'Core Response Areas'}
              </span>

              <div className={styles.serviceCredibilityGrid}>
                {serviceCredibilityItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title.ko} className={styles.serviceCredibilityItem}>
                      <Icon className={styles.serviceCredibilityIcon} />
                      <span>{language === 'ko' ? item.title.ko : item.title.en}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          

          <div
            className={`${styles.trustCard} reveal reveal-right ${inView ? 'in-view' : ''}`}
            style={{ '--reveal-delay': '280ms' } as CSSProperties}
          >
            <div className={styles.cardHeader}>
              <span className={styles.kicker}>
                {language === 'ko' ? 'WHY SAMYANG' : 'WHY SAMYANG'}
              </span>
              <h3 className={styles.cardTitle}>
                {language === 'ko' ? '신뢰 포인트' : 'Why Clients Can Trust Us'}
              </h3>
              <p className={styles.cardDesc}>
                {language === 'ko'
                  ? '현장 대응부터 분석, 등록·지정 기반 수행까지 연결되는 핵심 강점입니다.'
                  : 'Core strengths that connect field response, analysis, and registered operational capability.'}
              </p>
            </div>

            <div className={styles.highlightList}>
              {trustHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title.ko} className={styles.highlightItem}>
                    <div className={styles.highlightIconWrap}>
                      <Icon className={styles.highlightIcon} />
                    </div>
                    <div className={styles.highlightBody}>
                      <h4 className={styles.highlightTitle}>
                        {language === 'ko' ? item.title.ko : item.title.en}
                      </h4>
                      <p className={styles.highlightDesc}>
                        {language === 'ko' ? item.description.ko : item.description.en}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

           

            <MoreLinkButtonRow>
              <CTAButton to={`${prefix}/contact`}>
                {t('home.requestQuote')}
              </CTAButton>
            </MoreLinkButtonRow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;