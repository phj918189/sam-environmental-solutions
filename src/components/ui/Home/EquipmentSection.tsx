import { type CSSProperties } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { equipmentCategories, type EquipmentItem, type EquipmentCategory } from '@/data/laboratory';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import EquipmentDetailButton from '@/components/common/buttons/EquipmentDetailButton';
import styles from '@/styles/pages/Home/EquipmentSection.module.css';



function getCategory(key: string): EquipmentCategory | undefined {
  return equipmentCategories.find((c) => c.key === key);
}

type MarqueeDirection = 'rtl' | 'ltr';

function MarqueeRow({
  items,
  category,
  direction,
  lang,
}: {
  items: EquipmentItem[];
  category: EquipmentCategory;
  direction: MarqueeDirection;
  lang: 'ko' | 'en';
}) {
  if (items.length === 0) return null;

  const doubled = [...items, ...items];
  /* 길수록 느림 — 장비 수에 비례, 상한으로 무한 대기 방지 */
  const durationSec = Math.max(70, Math.min(200, items.length * 14));

  return (
    <div
      className={styles.marqueeViewport}
      role="presentation"
      aria-hidden="true"
    >
      <div
        className={`${styles.marqueeTrack} ${direction === 'ltr' ? styles.marqueeLtr : styles.marqueeRtl}`}
        style={{ animationDuration: `${durationSec}s` } as CSSProperties}
      >
        {doubled.map((item, i) => (
          <article key={`${item.id}-${i}`} className={styles.marqueeCard}>
            <div className={styles.marqueePhotoWrap}>
              <img
                src={item.image}
                alt=""
                className={styles.marqueePhoto}
                loading="lazy"
                decoding="async"
              />
              <span className={styles.marqueeBadge}>{item.id}</span>
              <span className={styles.marqueeCatBadge}>{category.category[lang]}</span>
            </div>
            <div className={styles.marqueeInfo}>
              <p className={styles.marqueeType}>{item.type[lang]}</p>
              {item.model !== '-' && <p className={styles.marqueeModel}>{item.model}</p>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

const EquipmentSection = () => {
  const { lang, prefix } = useLanguage();
  const { ref: headerRef, inView } = useScrollReveal<HTMLDivElement>();
  const reduceMotion = usePrefersReducedMotion();

  const air = getCategory('air');
  const water = getCategory('water');
  const bio = getCategory('bio');

  return (
    <section className={styles.section} aria-labelledby="equipment-section-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.sectionTop}>
          <div className={styles.sectionTopContent} ref={headerRef}>
            <span
              className={`${styles.kicker} reveal reveal-up ${inView ? 'in-view' : ''}`}>
              LAB EQUIPMENT
            </span>
            <h2
              id="equipment-section-title"
              className={`${styles.sectionTitle} reveal reveal-up ${inView ? 'in-view' : ''}`}
            >
              {lang === 'ko' ? '보유 장비 현황' : 'Laboratory Equipment'}
            </h2>
            <p
              className={`${styles.sectionDesc} reveal reveal-up ${inView ? 'in-view' : ''}`}
              style={{ '--reveal-delay': '100ms' } as CSSProperties}
            >
              {lang === 'ko'
                ? '대기·수질·생태특성 분야 보유 장비를 모두 확인하실 수 있습니다.'
                : 'All analytical instruments across air, water, and ecotoxicology labs.'}
            </p>
           
            <EquipmentDetailButton
              to={`${prefix}/laboratory`}
              className={`reveal reveal-up ${inView ? 'in-view' : ''}`}
              style={{ '--reveal-delay': '180ms' } as CSSProperties}
            >
              {lang === 'ko' ? '분석실 상세 보기' : 'View laboratory details'}
            </EquipmentDetailButton>
         
          </div>
        </div>

        <div className={`${styles.marqueeStack} reveal reveal-up ${inView ? 'in-view' : ''}`} style={{ '--reveal-delay': '160ms' } as CSSProperties}>
          {air && (
            <MarqueeRow
              items={air.items}
              category={air}
              direction="rtl"
              lang={lang}
            />
          )}
         
          {bio && (
            <MarqueeRow
              items={bio.items}
              category={bio}
              direction="ltr"
              lang={lang}
            />
          )}
           {water && (
            <MarqueeRow
              items={water.items}
              category={water}
              direction="rtl"
              lang={lang}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
