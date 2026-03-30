import { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/common/PageHero';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { equipmentCategories, qualityFeatures } from '@/data/laboratory';
import styles from '@/styles/pages/LaboratoryPage.module.css';

import img8635 from '@/assets/lab_room/IMG_8635.JPG';
import img8636 from '@/assets/lab_room/IMG_8636.JPG';
import img8637 from '@/assets/lab_room/IMG_8637.JPG';
import img8638 from '@/assets/lab_room/IMG_8638.JPG';
import img8639 from '@/assets/lab_room/IMG_8639.JPG';
import img8640 from '@/assets/lab_room/IMG_8640.JPG';
import img8641 from '@/assets/lab_room/IMG_8641.JPG';

const overviewImages = [img8635, img8636, img8637, img8638, img8639, img8640, img8641];

const LaboratoryPage = () => {
  const { t, lang } = useLanguage();

  const [activeCategoryKey, setActiveCategoryKey] = useState(equipmentCategories[0].key);
  const [overviewPopupIndex, setOverviewPopupIndex] = useState<number | null>(null);

  const goPrev = useCallback(() => {
    setOverviewPopupIndex((i) =>
      i === null ? null : i <= 0 ? overviewImages.length - 1 : i - 1
    );
  }, []);
  const goNext = useCallback(() => {
    setOverviewPopupIndex((i) =>
      i === null ? null : i >= overviewImages.length - 1 ? 0 : i + 1
    );
  }, []);

  useEffect(() => {
    if (overviewPopupIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'Escape') setOverviewPopupIndex(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [overviewPopupIndex, goPrev, goNext]);

  const features = qualityFeatures.map((f) => ({
    icon: f.icon,
    title: f.title[lang],
    description: f.description[lang],
  }));

  return (
    <>
      <PageHero
        title={t('laboratory.title')}
        subtitle={t('laboratory.subtitle')}
      />

      {/* 보유장비 현황 */}
      <Section>
        <SectionHeader
          title={t('laboratory.equipmentOverview')}
          subtitle={t('laboratory.equipmentSubtitle')}
        />

        {/* 카테고리 탭 */}
        <div className={styles.categoryTabs}>
          {equipmentCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                type="button"
                className={`${styles.categoryTab} ${activeCategoryKey === cat.key ? styles.categoryTabActive : ''}`}
                onClick={() => setActiveCategoryKey(cat.key)}
              >
                <Icon className={styles.categoryTabIcon} />
                {cat.category[lang]}
                <span className={styles.categoryTabCount}>{cat.items.length}</span>
              </button>
            );
          })}
        </div>

        {/* 개별 장비 카드 그리드 — 전체 렌더 후 CSS로 show/hide (탭 전환 즉시) */}
        {equipmentCategories.map((cat) => (
          <div
            key={cat.key}
            className={`${styles.equipmentItemGrid} ${activeCategoryKey === cat.key ? styles.equipmentItemGridActive : ''}`}
          >
            {cat.items.map((item) => (
              <article key={item.id} className={styles.equipmentItemCard}>
                <div className={styles.equipmentItemPhotoWrap}>
                  <img
                    src={item.image}
                    alt={`${item.id} ${item.type[lang]}`}
                    className={styles.equipmentItemPhoto}
                    loading="lazy"
                  />
                  <span className={styles.equipmentItemBadge}>{item.id}</span>
                </div>
                <div className={styles.equipmentItemInfo}>
                  <p className={styles.equipmentItemType}>{item.type[lang]}</p>
                  {item.model !== '-' && (
                    <p className={styles.equipmentItemModel}>{item.model}</p>
                  )}
                  <div className={styles.equipmentItemAnalysisWrap}>
                    <span className={styles.equipmentItemAnalysisLabel}>
                      {lang === 'ko' ? '분석항목' : 'Analysis'}
                    </span>
                    <span className={styles.equipmentItemAnalysis}>{item.analysis[lang]}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ))}
      </Section>

      {/* 품질관리 */}
      <Section variant="dark">
        <SectionHeader
          title={t('laboratory.qualityControl')}
          subtitle={t(
            '정확한 분석 결과를 위한 체계적인 품질관리 시스템을 운영합니다.',
            'We operate a systematic quality management system for accurate analysis results.'
          )}
        />
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'hsl(160 60% 40% / 0.2)', border: '1px solid hsl(160 60% 45% / 0.4)' }}>
                <feature.icon className="h-6 w-6" style={{ color: 'hsl(160 65% 60%)' }} />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm" style={{ color: 'hsl(210 25% 65%)' }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 분석실 전경 */}
      <Section variant="muted">
        <SectionHeader
          title={t('laboratory.facilities')}
          subtitle={t('laboratory.facilitiesSubtitle')}
        />
        <div className={styles.overviewGrid}>
          {overviewImages.map((img, i) => (
            <button
              key={i}
              type="button"
              className={styles.tile}
              onClick={() => setOverviewPopupIndex(i)}
              aria-label={`${t('laboratory.overview')} ${i + 1}`}
            >
              <img src={img} alt={`${t('laboratory.overview')} ${i + 1}`} />
            </button>
          ))}
        </div>
      </Section>

      <Dialog
        open={overviewPopupIndex !== null}
        onOpenChange={(open) => !open && setOverviewPopupIndex(null)}
      >
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-auto border-none bg-black/95 p-0 overflow-hidden [&>button]:hidden">
          {overviewPopupIndex !== null && (
            <div className={styles.overviewPopup}>
              <button
                type="button"
                onClick={() => setOverviewPopupIndex(null)}
                className={styles.overviewPopupClose}
                aria-label={t('common.close')}
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <button
                type="button"
                onClick={goPrev}
                className={styles.overviewPopupNav}
                aria-label={t('common.previous')}
              >
                <ChevronLeft className="h-10 w-10 text-white" />
              </button>
              <img
                src={overviewImages[overviewPopupIndex]}
                alt={`${t('laboratory.overview')} ${overviewPopupIndex + 1}`}
                className={styles.overviewPopupImage}
              />
              <button
                type="button"
                onClick={goNext}
                className={styles.overviewPopupNavRight}
                aria-label={t('common.next')}
              >
                <ChevronRight className="h-10 w-10 text-white" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LaboratoryPage;
