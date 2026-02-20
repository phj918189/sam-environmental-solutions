import { Link } from 'react-router-dom';
import { Phone, FileText, Users, Microscope, ClipboardCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/styles/pages/Home/ProcessSection.module.css';

const ProcessSection = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';

  const steps = [
    { icon: Phone, title: t('상담', 'Consultation'), desc: t('전문가 상담 및 현장 파악', 'Expert consultation') },
    { icon: ClipboardCheck, title: t('현장조사', 'Survey'), desc: t('현장 방문 및 시료 채취', 'On-site sampling') },
    { icon: Microscope, title: t('분석', 'Analysis'), desc: t('정밀 분석 및 데이터 처리', 'Precision analysis') },
    { icon: FileText, title: t('보고', 'Report'), desc: t('종합 보고서 작성', 'Comprehensive report') },
    { icon: Users, title: t('사후관리', 'Follow-up'), desc: t('지속적인 모니터링', 'Ongoing monitoring') },
  ];

  return (
    <section className={styles.section}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('업무 프로세스', 'Our Process')}</h2>
          <Link to={`${prefix}/contact`} className={styles.moreLink}>
            {t('더 보기', 'More')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className={styles.sectionDesc}>
          {t(
            '체계적인 절차로 정확하고 신뢰할 수 있는 결과를 제공합니다.',
            'Systematic procedures ensure accurate and reliable results.'
          )}
        </p>
        <div className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.stepIcon}>
                <step.icon className="h-5 w-5 text-accent" />
              </div>
              <div className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
