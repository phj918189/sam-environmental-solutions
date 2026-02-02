import { useLanguage } from '@/contexts/LanguageContext';
import { Section } from '@/components/ui/section';
import styles from '@/styles/pages/Home/TrustSignalsSection.module.css';

const TrustSignalsSection = () => {
  const { t } = useLanguage();

  const trustSignals = [
    { value: '1992', label: t('설립연도', 'Established') },
    { value: '30+', label: t('업력 (년)', 'Years Experience') },
    { value: '(TBD)', label: t('수행실적 (건)', 'Projects') },
    { value: '100%', label: t('고객 재계약율', 'Retention Rate') },
  ];

  return (
    <Section variant="primary">
      <div className={styles.grid}>
        {trustSignals.map((signal) => (
          <div key={signal.label} className={styles.item}>
            <div className={styles.value}>{signal.value}</div>
            <div className={styles.label}>{signal.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TrustSignalsSection;
