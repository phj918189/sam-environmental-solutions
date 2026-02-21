import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '@/components/ui/section';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import styles from '@/styles/pages/Home/CertificationsSection.module.css';

// Import certificate images
import odorAgency from '@/assets/certificates/odor-agency.jpg';
import sewageRegistration from '@/assets/certificates/sewage-registration.jpg';
import constructionRegistration from '@/assets/certificates/construction-registration.jpg';
import airAgency from '@/assets/certificates/air-agency.jpg';
import airEnvironment from '@/assets/certificates/air-environment.jpg';
import waterAgency from '@/assets/certificates/water-agency.jpg';
import waterEnvironment from '@/assets/certificates/water-environment.jpg';

type Cert = { image: string; name: string };

const CertificationsSection = () => {
  const { t } = useLanguage();
  const [popupCert, setPopupCert] = useState<Cert | null>(null);

  const certifications: Cert[] = [
    { image: airAgency, name: t('대기 측정대행업 등록증', 'Air Measurement Agency') },
    { image: waterAgency, name: t('수질 측정대행업 등록증', 'Water Measurement Agency') },
    { image: odorAgency, name: t('악취 측정대행업 등록증', 'Odor Measurement Agency') },
    { image: airEnvironment, name: t('대기환경 관리 대행기관 지정서', 'Air Environment Management') },
    { image: waterEnvironment, name: t('수질환경 관리 대행기관 지정서', 'Water Environment Management') },
    { image: sewageRegistration, name: t('개인하수처리시설 설계·시공업 등록증', 'Sewage Facility Registration') },
    { image: constructionRegistration, name: t('건설업 등록증', 'Construction Registration') },
  ];

  // seamless infinite scroll: 3배 복제로 끊김 없이 연결
  const duplicatedCerts = [...certifications, ...certifications, ...certifications];

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
            <button
              key={`${cert.name}-${index}`}
              type="button"
              className={styles.item}
              onClick={() => setPopupCert(cert)}
              aria-label={t('이미지 크게 보기', 'View image')}
            >
              <div className={styles.imageWrap}>
                <img src={cert.image} alt={cert.name} className={styles.certImage} />
              </div>
              <span className={styles.text}>{cert.name}</span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!popupCert} onOpenChange={(open) => !open && setPopupCert(null)}>
        <DialogContent className="max-w-2xl p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="sr-only">{popupCert?.name}</DialogTitle>
          </DialogHeader>
          {popupCert && (
            <div className="space-y-3">
              <div className="relative aspect-[3/4] max-h-[70vh] w-full overflow-hidden rounded-lg bg-muted">
                <img
                  src={popupCert.image}
                  alt={popupCert.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-center text-sm font-medium text-foreground">
                {popupCert.name}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
};

export default CertificationsSection;
