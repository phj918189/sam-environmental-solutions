import { type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { equipmentCategories } from '@/data/laboratory';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import styles from '@/styles/pages/Home/EquipmentSection.module.css';

const featuredItems = equipmentCategories
  .flatMap((cat) =>
    cat.items
      .filter((item) => item.featured)
      .map((item) => ({ ...item, categoryLabel: cat.category }))
  );

const EquipmentSection = () => {
  const { lang, prefix } = useLanguage();
  const { ref: headerRef, inView } = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.sectionTop}>
          <div className={styles.sectionTopContent} ref={headerRef}>
            <h2
              className={`${styles.sectionTitle} reveal reveal-up ${inView ? 'in-view' : ''}`}
            >
              {lang === 'ko' ? '보유 장비 현황' : 'Laboratory Equipment'}
            </h2>
            <p
              className={`${styles.sectionDesc} reveal reveal-up ${inView ? 'in-view' : ''}`}
              style={{ '--reveal-delay': '100ms' } as CSSProperties}
            >
              {lang === 'ko'
                ? '대기·수질·생태독성 분야의 최신 정밀 분석장비를 보유하고 있습니다.'
                : 'We operate state-of-the-art analytical instruments across air, water, and ecotoxicology fields.'}
            </p>
            <Link
              to={`${prefix}/laboratory`}
              className={`${styles.moreLink} reveal reveal-up ${inView ? 'in-view' : ''}`}
              style={{ '--reveal-delay': '180ms' } as CSSProperties}
            >
              {lang === 'ko' ? '더 보기' : 'More Equipment'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className={styles.equipmentGrid}>
          {featuredItems.map((item, index) => (
            <article
              key={item.id}
              className={`${styles.equipmentCard} reveal reveal-scale ${inView ? 'in-view' : ''}`}
              style={{ '--reveal-delay': `${160 + index * 60}ms` } as CSSProperties}
            >
              <div className={styles.photoWrap}>
                <img
                  src={item.image}
                  alt={`${item.id} ${item.type[lang]}`}
                  className={styles.photo}
                  loading="lazy"
                />
                <span className={styles.badge}>{item.id}</span>
                <span className={styles.categoryBadge}>{item.categoryLabel[lang]}</span>
              </div>
              <div className={styles.info}>
                <p className={styles.type}>{item.type[lang]}</p>
                {item.model !== '-' && (
                  <p className={styles.model}>{item.model}</p>
                )}
                <p className={styles.analysis}>{item.analysis[lang]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
