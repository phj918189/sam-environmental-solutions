import { Award, Shield, FileCheck, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '@/components/ui/section';
import styles from '@/styles/pages/Home/CertificationsSection.module.css';

const CertificationsSection = () => {
  const { t } = useLanguage();

  const certifications = [
    { icon: Shield, name: t('환경측정분석대행업 등록', 'Environmental Measurement Agency') },
    { icon: FileCheck, name: t('대기환경측정대행업', 'Air Environment Measurement') },
    { icon: Award, name: t('수질환경측정대행업', 'Water Environment Measurement') },
    { icon: Building2, name: t('악취측정대행업', 'Odor Measurement Agency') },
    { icon: Shield, name: t('오수처리시설 설계·시공', 'Sewage Facility Design') },
    { icon: FileCheck, name: t('환경영향평가 협력기관', 'EIA Cooperation Agency') },
  ];

  // 슬라이딩 애니메이션을 위해 2배로 복제
  const duplicatedCerts = [...certifications, ...certifications];

  return (
    <Section>
      <SectionHeader
        title={t('인증 및 등록현황', 'Certifications & Registrations')}
        subtitle={t(
          '공인된 자격과 체계적인 품질관리로 신뢰를 드립니다.',
          'Certified qualifications and systematic quality management you can trust.'
        )}
      />
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {duplicatedCerts.map((cert, index) => (
            <div key={`${cert.name}-${index}`} className={styles.item}>
              <div className={styles.iconWrap}>
                <cert.icon className="h-6 w-6 text-accent" />
              </div>
              <span className={styles.text}>{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        {t('* 실제 인증서/등록증 이미지는 추후 업데이트 예정', '* Actual certification images to be updated')}
      </p>
    </Section>
  );
};

export default CertificationsSection;
