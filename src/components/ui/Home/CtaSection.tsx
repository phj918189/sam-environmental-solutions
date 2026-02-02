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
          {t('환경 측정 · 분석 · 설계', 'Environmental Measurement · Analysis · Design')}
          <br />
          <span className="text-accent">{t('지금 상담하세요', 'Consult Now')}</span>
        </h2>
        <p className={styles.subtitle}>
          {t(
            '30년 이상의 경험을 바탕으로 귀사의 환경 문제를 함께 해결해 드립니다.\n무료 상담 및 견적을 요청하세요.',
            'With over 30 years of experience, we help solve your environmental challenges.\nRequest a free consultation and quote.'
          )}
        </p>
        <div className={styles.actions}>
          <Link to={`${prefix}/contact`}>
            <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Phone className="h-5 w-5" />
              {t('견적 문의하기', 'Request Quote')}
            </Button>
          </Link>
          <Link to={`${prefix}/portfolio`}>
            <Button size="lg" variant="outline" className="gap-2 group">
              {t('사업실적 보기', 'View Portfolio')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default CtaSection;
