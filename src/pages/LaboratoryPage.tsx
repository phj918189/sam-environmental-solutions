import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/common/PageHero';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { equipmentCategories, qualityFeatures } from '@/data/laboratory';
import styles from '@/styles/pages/LaboratoryPage.module.css';

const LaboratoryPage = () => {
  const { t, language } = useLanguage();
  const lang = language as 'ko' | 'en';

  const equipment = equipmentCategories.map((cat) => ({
    category: cat.category[lang],
    icon: cat.icon,
    items: cat.items.map((item) => item[lang]),
  }));

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

      {/* Equipment Section */}
      <Section>
        <SectionHeader
          title={t('laboratory.equipmentOverview')}
          subtitle={t('laboratory.equipmentSubtitle')}
        />
        <div className="grid gap-8 md:grid-cols-3">
          {equipment.map((category) => (
            <Card key={category.category} className="h-full">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <category.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Quality Section */}
      <Section className="bg-secondary">
        <SectionHeader
          title={t('laboratory.qualityControl')}
          subtitle={t(
            '정확한 분석 결과를 위한 체계적인 품질관리 시스템을 운영합니다.',
            'We operate a systematic quality management system for accurate analysis results.'
          )}
        />
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Placeholder for images */}
      <Section>
        <SectionHeader
          title={t('laboratory.facilities')}
          subtitle={t('laboratory.facilitiesSubtitle')}
        />
        <div className={styles.facilityGrid}>
          <div className={`${styles.tile} aspect-[16/9] sm:col-span-2 lg:col-span-7`}>
            <div className={styles.placeholder}>
              <div className={styles.placeholderLabel}>
                <p className={styles.tileTitle}>{t('laboratory.overview')}</p>
                <p className={styles.tileHint}>{t('laboratory.imageComing')}</p>
              </div>
            </div>
          </div>

          <div className={`${styles.tile} aspect-[4/3] lg:col-span-5`}>
            <div className={styles.placeholder}>
              <div className={styles.placeholderLabel}>
                <p className={styles.tileTitle}>{t('laboratory.waterLab')}</p>
                <p className={styles.tileHint}>{t('laboratory.imageComing')}</p>
              </div>
            </div>
          </div>

          <div className={`${styles.tile} aspect-[4/3] lg:col-span-4`}>
            <div className={styles.placeholder}>
              <div className={styles.placeholderLabel}>
                <p className={styles.tileTitle}>{t('laboratory.airLab')}</p>
                <p className={styles.tileHint}>{t('laboratory.imageComing')}</p>
              </div>
            </div>
          </div>

          <div className={`${styles.tile} aspect-square lg:col-span-4`}>
            <div className={styles.placeholder}>
              <div className={styles.placeholderLabel}>
                <p className={styles.tileTitle}>{t('laboratory.odorLab')}</p>
                <p className={styles.tileHint}>{t('laboratory.imageComing')}</p>
              </div>
            </div>
          </div>

          <div className={`${styles.tile} aspect-[4/3] lg:col-span-4`}>
            <div className={styles.placeholder}>
              <div className={styles.placeholderLabel}>
                <p className={styles.tileTitle}>{t('laboratory.samplePrep')}</p>
                <p className={styles.tileHint}>{t('laboratory.imageComing')}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default LaboratoryPage;
