import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import styles from '@/styles/pages/Home/HeroSection.module.css';

const HeroSection = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';

  return (
    <section className={styles.section}>
      <div className={styles.background} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className="inline-block px-4 py-1.5 bg-accent/20  rounded-full text-lg font-medium mb-6">
          {t('1992년 설립', 'Established 1992')}
        </div>
        <h1 className={styles.title}>
          {t('환경측정 전문기관', 'Environmental Measurement Experts')}
          <br />
          <span className="text-accent">
            {t('삼양건설환경연구소', 'Samyang Environmental')}
          </span>
        </h1>
        <p className={styles.subtitle}>
          {t(
            '대기 · 수질 · 악취 환경측정부터 시설 설계, 시공, 관리까지\n원스톱 솔루션을 제공합니다.',
            'From air, water, and odor measurement to facility design, construction, and management.\nWe provide one-stop solutions.'
          )}
        </p>
        <div className={styles.badgeRow}>
          {[
            t('정밀 측정·분석', 'Precision Analysis'),
            t('시설 설계·시공', 'Design & Construction'),
            t('통합 환경관리', 'Integrated Management'),
          ].map((item) => (
            <div key={item} className={styles.badge}>
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        {/* <div className={styles.actions}>
          <Link to={`${prefix}/contact`}>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              {t('견적 문의하기', 'Request a Quote')}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to={`${prefix}/services/air`}>
            <Button size="lg" variant="hero">
              {t('사업영역 보기', 'View Services')}
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
