import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '@/components/ui/section';
import styles from '@/styles/pages/Home/CertificationsSection.module.css';

// Import certificate images
import odorAgency from '@/assets/certificates/odor-agency.jpg';
import sewageRegistration from '@/assets/certificates/sewage-registration.jpg';
import constructionRegistration from '@/assets/certificates/construction-registration.jpg';
import airAgency from '@/assets/certificates/air-agency.jpg';
import airEnvironment from '@/assets/certificates/air-environment.jpg';
import waterAgency from '@/assets/certificates/water-agency.jpg';
import waterEnvironment from '@/assets/certificates/water-environment.jpg';

const CertificationsSection = () => {
  const { t } = useLanguage();

  const certifications = [
    { image: airAgency, name: t('대기 측정대행업 등록증', 'Air Measurement Agency') },
    { image: waterAgency, name: t('수질 측정대행업 등록증', 'Water Measurement Agency') },
    { image: odorAgency, name: t('악취 측정대행업 등록증', 'Odor Measurement Agency') },
    { image: airEnvironment, name: t('대기환경 관리 대행기관 지정서', 'Air Environment Management') },
    { image: waterEnvironment, name: t('수질환경 관리 대행기관 지정서', 'Water Environment Management') },
    { image: sewageRegistration, name: t('개인하수처리시설 설계·시공업 등록증', 'Sewage Facility Registration') },
    { image: constructionRegistration, name: t('건설업 등록증', 'Construction Registration') },
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
              <div className={styles.imageWrap}>
                <img src={cert.image} alt={cert.name} className={styles.certImage} />
              </div>
              <span className={styles.text}>{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CertificationsSection;
