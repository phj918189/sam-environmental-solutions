import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '@/components/ui/section';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { certificationNames } from '@/data/home';
import styles from '@/styles/pages/Home/CertificationsSection.module.css';

// Import certificate images (순서: certificationNames와 동일)
import airAgency from '@/assets/certificates/air-agency.jpg';
import waterAgency from '@/assets/certificates/water-agency.jpg';
import odorAgency from '@/assets/certificates/odor-agency.jpg';
import airEnvironment from '@/assets/certificates/air-environment.jpg';
import waterEnvironment from '@/assets/certificates/water-environment.jpg';
import sewageRegistration from '@/assets/certificates/sewage-registration.jpg';
import constructionRegistration from '@/assets/certificates/construction-registration.jpg';

const certImages = [
  airAgency,
  waterAgency,
  odorAgency,
  airEnvironment,
  waterEnvironment,
  sewageRegistration,
  constructionRegistration,
];

type Cert = { image: string; name: string };

const CertificationsSection = () => {
  const { language, t } = useLanguage();
  const lang = language as 'ko' | 'en';
  const [popupCert, setPopupCert] = useState<Cert | null>(null);

  const certifications: Cert[] = certificationNames.map((cert, i) => ({
    image: certImages[i],
    name: cert[lang],
  }));

  // seamless infinite scroll: 3배 복제로 끊김 없이 연결
  const duplicatedCerts = [...certifications, ...certifications, ...certifications];

  return (
    <Section>
      <SectionHeader
        title={t('home.certifications')}
        subtitle={t('home.certificationsSubtitle')}
      />
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {duplicatedCerts.map((cert, index) => (
            <button
              key={`${cert.name}-${index}`}
              type="button"
              className={styles.item}
              onClick={() => setPopupCert(cert)}
              aria-label={t('common.viewImage')}
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
