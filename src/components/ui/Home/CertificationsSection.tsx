import { Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '@/components/ui/section';
import styles from '@/styles/pages/Home/CertificationsSection.module.css';

const CertificationsSection = () => {
  const { t } = useLanguage();

  const certifications = [
    t('환경측정분석대행업 등록', 'Environmental Measurement Agency Registration'),
    t('품질경영시스템 인증 (예정)', 'Quality Management Certification (Planned)'),
    t('환경영향평가 협력기관', 'Environmental Impact Assessment Partner'),
  ];

  return (
    <Section>
      <SectionHeader
        title={t('인증 및 등록', 'Certifications & Registrations')}
        subtitle={t(
          '공인된 자격과 체계적인 품질관리로 신뢰를 드립니다.',
          'Certified qualifications and systematic quality management you can trust.'
        )}
      />
      <div className={styles.grid}>
        {certifications.map((cert) => (
          <div key={cert} className={styles.item}>
            <Award className="h-6 w-6 text-primary shrink-0" />
            <span className={styles.text}>{cert}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CertificationsSection;
