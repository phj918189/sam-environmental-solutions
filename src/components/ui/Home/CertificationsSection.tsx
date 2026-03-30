import { useState, type CSSProperties } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import styles from '@/styles/pages/Home/CertificationsSection.module.css';

import airAgency from '@/assets/certificates/air-agency.jpg';
import waterAgency from '@/assets/certificates/water-agency.jpg';
import odorAgency from '@/assets/certificates/odor-agency.jpg';
import airEnvironment from '@/assets/certificates/air-environment.jpg';
import waterEnvironment from '@/assets/certificates/water-environment.jpg';
import sewageRegistration from '@/assets/certificates/sewage-registration.jpg';
import constructionRegistration from '@/assets/certificates/construction-registration.jpg';

interface CertCard {
  authority: { ko: string; en: string };
  items: { ko: string; en: string }[];
  image: string;
}

const certCards: CertCard[] = [
  {
    authority: { ko: '대기 측정대행업', en: 'Air Measurement Agency' },
    items: [
      { ko: '대기 측정대행업 등록증', en: 'Air Measurement Agency Registration' },
      { ko: '환경부 등록 공인 측정기관', en: 'Ministry of Environment Certified' },
    ],
    image: airAgency,
  },
  {
    authority: { ko: '수질 측정대행업', en: 'Water Measurement Agency' },
    items: [
      { ko: '수질 측정대행업 등록증', en: 'Water Measurement Agency Registration' },
      { ko: '환경부 등록 공인 측정기관', en: 'Ministry of Environment Certified' },
    ],
    image: waterAgency,
  },
  {
    authority: { ko: '악취 측정대행업', en: 'Odor Measurement Agency' },
    items: [
      { ko: '악취 측정대행업 등록증', en: 'Odor Measurement Agency Registration' },
      { ko: '환경부 등록 공인 측정기관', en: 'Ministry of Environment Certified' },
    ],
    image: odorAgency,
  },
  {
    authority: { ko: '대기환경 관리 대행기관', en: 'Air Environment Management' },
    items: [
      { ko: '대기환경 관리 대행기관 지정서', en: 'Air Environment Management Designation' },
      { ko: '정부 지정 환경 관리기관', en: 'Government-Designated Management Agency' },
    ],
    image: airEnvironment,
  },
  {
    authority: { ko: '수질환경 관리 대행기관', en: 'Water Environment Management' },
    items: [
      { ko: '수질환경 관리 대행기관 지정서', en: 'Water Environment Management Designation' },
      { ko: '정부 지정 환경 관리기관', en: 'Government-Designated Management Agency' },
    ],
    image: waterEnvironment,
  },
  {
    authority: { ko: '개인하수처리시설 설계·시공업', en: 'Sewage Facility Construction' },
    items: [
      { ko: '설계·시공업 등록증', en: 'Design & Construction Registration' },
      { ko: '국토교통부 등록', en: 'Ministry of Land, Infrastructure & Transport' },
    ],
    image: sewageRegistration,
  },
  {
    authority: { ko: '건설업', en: 'Construction' },
    items: [
      { ko: '건설업 등록증', en: 'Construction Business Registration' },
      { ko: '국토교통부 등록', en: 'Ministry of Land, Infrastructure & Transport' },
    ],
    image: constructionRegistration,
  },
];

type PopupData = { image: string; title: string };

const CertificationsSection = () => {
  const { lang, t } = useLanguage();
  const [popup, setPopup] = useState<PopupData | null>(null);
  const { ref: headerRef, inView } = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className={styles.header} ref={headerRef}>
          <p className={`${styles.headerEyebrow} reveal reveal-up ${inView ? 'in-view' : ''}`}>
            {lang === 'ko' ? '공신력 있는 기관의 인정' : 'Recognized by Authorities'}
          </p>
          <h2
            className={`${styles.headerTitle} reveal reveal-up ${inView ? 'in-view' : ''}`}
            style={{ '--reveal-delay': '80ms' } as CSSProperties}
          >
            {t('home.certifications')}
          </h2>
          <p
            className={`${styles.headerSubtitle} reveal reveal-up ${inView ? 'in-view' : ''}`}
            style={{ '--reveal-delay': '160ms' } as CSSProperties}
          >
            {t('home.certificationsSubtitle')}
          </p>
        </div>

        {/* 카드 그리드 */}
        <div className={styles.grid}>
          {certCards.map((card, index) => (
            <button
              key={card.authority.ko}
              type="button"
              className={`${styles.card} reveal reveal-scale ${inView ? 'in-view' : ''}`}
              style={{ '--reveal-delay': `${220 + index * 75}ms` } as CSSProperties}
              onClick={() => setPopup({ image: card.image, title: card.authority[lang] })}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  <Award className={styles.icon} />
                </div>
                <ExternalLink className={styles.cardHint} />
              </div>
              <h3 className={styles.cardTitle}>{card.authority[lang]}</h3>
              <ul className={styles.cardList}>
                {card.items.map((item) => (
                  <li key={item.ko} className={styles.cardItem}>
                    <span className={styles.bullet} />
                    {item[lang]}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </div>

      {/* 이미지 팝업 */}
      <Dialog open={!!popup} onOpenChange={(open) => !open && setPopup(null)}>
        <DialogContent className="w-[88vw] max-w-md p-3 sm:p-5">
          <DialogHeader>
            <DialogTitle className="text-sm font-bold">{popup?.title}</DialogTitle>
          </DialogHeader>
          {popup && (
            <div
              className="relative w-full overflow-hidden rounded-lg bg-muted"
              style={{ maxHeight: 'min(60vh, 480px)' }}
            >
              <img
                src={popup.image}
                alt={popup.title}
                className="w-full h-full object-contain"
                style={{ maxHeight: 'min(60vh, 480px)' }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsSection;
