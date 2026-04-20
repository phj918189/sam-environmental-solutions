import { Link } from 'react-router-dom';
import { Wind, Droplets, Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/styles/pages/Home/VisualSection.module.css';

const VisualSection = () => {
  const { language } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';

  const hero = {
    eyebrow: 'ENVIRONMENTAL SOLUTIONS',
    title:
      language === 'ko'
        ? '대기·수질·악취를\n 통합 관리하는\n환경 솔루션 파트너'
        : 'Integrated Environmental Solutions Partner\nfor Air, Water, and Odor',
    description:
      language === 'ko'
        ? '현장 진단부터 정밀 분석, 시설 설계·시공, 사후관리까지 연결하는 원스톱 환경 솔루션을 제공합니다.'
        : 'We provide one-stop environmental solutions connecting site diagnosis, precision analysis, facility design and construction, and follow-up management.',
    primaryCta: language === 'ko' ? '사업 분야 보기' : 'Explore Services',
    secondaryCta: language === 'ko' ? '문의하기' : 'Contact Us',
    serviceCards: [
      {
        icon: Wind,
        title: language === 'ko' ? '대기 환경' : 'Air Quality',
        description:
          language === 'ko'
            ? '배출가스 및 대기오염 측정, 관리, 대응 지원'
            : 'Emission measurement and air environment management support',
        href: `${prefix}/services/air`,
      },
      {
        icon: Droplets,
        title: language === 'ko' ? '수질 환경' : 'Water Quality',
        description:
          language === 'ko'
            ? '폐수처리, 수질 측정, 분석 기반 공정 지원'
            : 'Wastewater treatment and data-based water process support',
        href: `${prefix}/services/water`,
      },
      {
        icon: Factory,
        title: language === 'ko' ? '악취·시설 솔루션' : 'Odor & Facility Solutions',
        description:
          language === 'ko'
            ? '악취 저감, 시설 설계·시공, 현장 개선 지원'
            : 'Odor control, facility design and construction, and site improvement',
        href: `${prefix}/services/odor`,
      },
    ],
    process:
      language === 'ko'
        ? ['현장 진단', '정밀 분석', '설계·시공', '사후관리']
        : ['Site Diagnosis', 'Precision Analysis', 'Design & Build', 'Follow-up'],
  };

  return (
    <section className={styles.section}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>{hero.eyebrow}</span>

          <h1 className={styles.title}>
            {hero.title.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className={styles.description}>{hero.description}</p>

          <div className={styles.ctaRow}>
            <Link to={`${prefix}/services/air`} className={styles.primaryButton}>
              {hero.primaryCta}
              <ArrowRight className={styles.buttonIcon} />
            </Link>

            <Link to={`${prefix}/contact`} className={styles.secondaryButton}>
              {hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.servicePanel}>
            {hero.serviceCards.map((card) => (
              <Link key={card.title} to={card.href} className={styles.serviceCard}>
                <div className={styles.serviceCardTop}>
                  <div className={styles.iconWrap}>
                    <card.icon className={styles.serviceIcon} />
                  </div>
                  <ArrowRight className={styles.linkArrow} />
                </div>

                <h3 className={styles.serviceTitle}>{card.title}</h3>
                <p className={styles.serviceDescription}>{card.description}</p>
              </Link>
            ))}
          </div>

          <div className={styles.processBox}>
            {hero.process.map((item) => (
              <div key={item} className={styles.processItem}>
                <CheckCircle2 className={styles.processIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualSection;