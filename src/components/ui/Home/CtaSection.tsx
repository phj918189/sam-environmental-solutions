import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
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
          {t('환경 문제, 지금 상담하세요', 'Environmental Issues? Consult Now')}
        </h2>
        <p className={styles.subtitle}>
          {t(
            '전문가가 귀사의 환경 문제를 함께 해결해 드립니다. 무료 상담 및 견적을 요청하세요.',
            'Our experts will help solve your environmental challenges. Request a free consultation and quote.'
          )}
        </p>
        <div className={styles.actions}>
          <Link to={`${prefix}/contact`}>
            <Button size="lg" className="gap-2">
              <Phone className="h-5 w-5" />
              {t('문의하기', 'Contact Us')}
            </Button>
          </Link>
          <Link to={`${prefix}/portfolio`}>
            <Button size="lg" variant="outline">
              {t('수행 실적 보기', 'View Portfolio')}
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default CtaSection;
