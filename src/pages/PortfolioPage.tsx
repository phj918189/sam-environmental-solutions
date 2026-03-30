import { Droplets, Building, MapPin, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageHero from '@/components/common/PageHero';
import { operationItems, constructionItems, restAreaItems } from '@/data/portfolio';
import styles from '@/styles/pages/PortfolioPage.module.css';

const PortfolioPage = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('portfolio.title')}
        subtitle={t('portfolio.subtitle')}
      />

      {/* Overview Stats */}
      <Section variant="dark">
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>60+</div>
            <div className={styles.statLabel}>{t('portfolio.managedCompanies')}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>30+</div>
            <div className={styles.statLabel}>{t('portfolio.constructionProjects')}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>12+</div>
            <div className={styles.statLabel}>{t('portfolio.restAreaFacilities')}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>1995</div>
            <div className={styles.statLabel}>{t('portfolio.since')}</div>
          </div>
        </div>
      </Section>

      {/* Tabbed Content */}
      <Section variant="muted">
        <Tabs defaultValue="operation" className="w-full">
          <TabsList className={styles.tabsList}>
            <TabsTrigger value="operation" className={styles.tabTrigger}>
              <Droplets className="h-4 w-4" />
              {t('portfolio.operations')}
            </TabsTrigger>
            <TabsTrigger value="construction" className={styles.tabTrigger}>
              <Wrench className="h-4 w-4" />
              {t('portfolio.construction')}
            </TabsTrigger>
            <TabsTrigger value="restarea" className={styles.tabTrigger}>
              <Building className="h-4 w-4" />
              {t('portfolio.restAreas')}
            </TabsTrigger>
          </TabsList>

          {/* Operation Tab */}
          <TabsContent value="operation">
            <SectionHeader
              title={t('portfolio.facilityOp')}
              subtitle={t('portfolio.facilityOpSubtitle')}
            />
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>{t('portfolio.facility')}</th>
                    <th>{t('portfolio.period')}</th>
                    <th>{t('portfolio.treatmentMethod')}</th>
                  </tr>
                </thead>
                <tbody>
                  {operationItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title[lang]}</td>
                      <td>{item.period}</td>
                      <td>
                        <Badge variant="outline">{item.method[lang]}</Badge>
                      </td>
                    </tr>
                  ))}
                  <tr className={styles.summaryRow}>
                    <td colSpan={3}>
                      {t('portfolio.otherCompanies')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Construction Tab */}
          <TabsContent value="construction">
            <SectionHeader
              title={t('portfolio.majorProjects')}
              subtitle={t('portfolio.constructionSubtitle')}
            />
            <div className={styles.grid}>
              {constructionItems.map((item) => (
                <Card key={item.id} className={styles.card}>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit">
                      <Wrench className="h-3 w-3 mr-1" />
                      {item.year}
                    </Badge>
                    <CardTitle className={styles.cardTitle}>
                      {item.title[lang]}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Rest Area Tab */}
          <TabsContent value="restarea">
            <SectionHeader
              title={t('portfolio.restAreaMgmt')}
              subtitle={t('portfolio.restAreaSubtitle')}
            />
            <div className={styles.restAreaGrid}>
              {restAreaItems.map((item) => (
                <Card key={item.id} className={styles.restAreaCard}>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{item.region[lang]}</span>
                    </div>
                    <h3 className="font-semibold">{item.title[lang]}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Section>
    </>
  );
};

export default PortfolioPage;
