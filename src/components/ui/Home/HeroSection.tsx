import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import styles from '@/styles/pages/Home/HeroSection.module.css';

const HeroSection = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';

  return (
    <section className={styles.section}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          {t('대기 · 수질 · 악취', 'Air · Water · Odor')}
          <br />
          {t('환경 전문 기관', 'Environmental Specialists')}
        </h1>
        <p className={styles.subtitle}>
          {t(
            '정확한 측정, 신뢰할 수 있는 분석, 체계적인 관리로  더 나은 환경을 만들어갑니다.',
            'Creating a better environment through accurate measurement, reliable analysis, and systematic management.'
          )}
        </p>
        <div className={styles.badgeRow}>
          {[
            t('정밀 측정·분석', 'Precision Analysis'),
            t('맞춤형 컨설팅', 'Custom Consulting'),
            t('신속한 보고', 'Fast Reporting'),
          ].map((item) => (
            <div key={item} className={styles.badge}>
              <CheckCircle className={styles.badgeIcon} />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <Link to={`${prefix}/contact`}>
            <Button size="lg" className={styles.primaryButton}>
              {t('견적 문의하기', 'Request a Quote')}
              <ArrowRight className={styles.primaryButtonIcon} />
            </Button>
          </Link>
          <Link to={`${prefix}/services/air`}>
            <Button size="lg" variant="hero">
              {t('서비스 알아보기', 'Explore Services')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
