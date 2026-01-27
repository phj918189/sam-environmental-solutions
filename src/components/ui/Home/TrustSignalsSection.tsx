import { useLanguage } from '@/contexts/LanguageContext';
import { Section } from '@/components/ui/section';
import styles from '@/styles/pages/Home/TrustSignalsSection.module.css';

const TrustSignalsSection = () => {
  const { t } = useLanguage();

  const trustSignals = [
    { value: '500+', label: t('프로젝트 수행', 'Projects Completed') },
    { value: '15+', label: t('업력 (년)', 'Years Experience') },
    { value: '100%', label: t('고객 만족도', 'Client Satisfaction') },
    { value: '24/7', label: t('긴급 대응', 'Emergency Response') },
  ];

  return (
    <Section variant="primary">
      <div className={styles.grid}>
        {trustSignals.map((signal) => (
          <div key={signal.label}>
            <div className={styles.value}>{signal.value}</div>
            <div className={styles.label}>{signal.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TrustSignalsSection;
