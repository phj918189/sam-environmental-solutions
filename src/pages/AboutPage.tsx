import { Target, Eye, Heart, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ceoPhoto from '@/assets/news/img_8824.JPG';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageHero from '@/components/common/PageHero';
import { values as valuesData, history as historyData, team as teamData } from '@/data/about';
import styles from '@/styles/pages/AboutPage.module.css';

const valueIcons = { accuracy: Target, integrity: Heart, expertise: Eye } as const;

const AboutPage = () => {
  const { lang, t } = useLanguage();

  const values = valuesData.map((v) => ({
    icon: valueIcons[v.key as keyof typeof valueIcons],
    title: v.title[lang],
    description: v.description[lang],
  }));

  const history = historyData.map((item) => ({
    year: typeof item.year === 'string' ? item.year : item.year[lang],
    event: item.event[lang],
  }));

  const team = teamData.map((m) => ({
    id: m.id,
    role: m.role[lang],
    name: m.name[lang],
    description: m.description[lang],
  }));

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('about.title')}
        subtitle={t('about.subtitle')}
      />

      <Section>
        <Tabs defaultValue="greeting" className="w-full">
          <TabsList className={styles.tabsList}>
            <TabsTrigger value="greeting" className={styles.tabsTrigger}>
              {t('about.greeting')}
            </TabsTrigger>
            <TabsTrigger value="mission" className={styles.tabsTrigger}>
              {t('about.missionVision')}
            </TabsTrigger>
            <TabsTrigger value="values" className={styles.tabsTrigger}>
              {t('about.coreValues')}
            </TabsTrigger>
            <TabsTrigger value="history" className={styles.tabsTrigger}>
              {t('about.history')}
            </TabsTrigger>
            <TabsTrigger value="organization" className={styles.tabsTrigger}>
              {t('about.organization')}
            </TabsTrigger>
          </TabsList>

          {/* Greeting */}
          <TabsContent value="greeting" className={styles.tabsContent}>
            <div className={styles.missionGrid}>
              <div>
                <h2 className={styles.sectionTitle}>{t('about.greeting')}</h2>
                <div className="space-y-6">
                  <div className={styles.infoBox}>
                    <div className={`space-y-4 ${styles.readableText}`}>
                      <p>{t('about.greetingP1')}</p>
                      <p>{t('about.greetingP2')}</p>
                      <p>{t('about.greetingP3')}</p>
                    </div>
                    <p className={styles.signature}>
                      {t('about.ceoName')}
                    </p>
                  </div>

                  <div className={styles.infoBox}>
                    <h3 className={styles.infoTitle}>{t('about.companyOverview')}</h3>
                    <p className={styles.readableText}>
                      {t('about.companyOverviewText')}
                    </p>
                  </div>

                  <div className={styles.infoBox}>
                    <h3 className={styles.infoTitle}>{t('about.businessAreas')}</h3>
                    <p className={styles.readableText}>
                      {t('about.businessAreasText')}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.iconPanel}>
                <img
                  src={ceoPhoto}
                  alt={t('about.ceoName')}
                  className={styles.ceoPhoto}
                />
              </div>
            </div>
          </TabsContent>

          {/* Mission & Vision */}
          <TabsContent value="mission" className={styles.tabsContent}>
            <div className={styles.tabsHeader}>
              <h2 className={styles.sectionTitle}>{t('about.missionVision')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('about.missionLead')}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-accent" />
                    {t('about.mission')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={styles.readableText}>
                    {t('about.missionStatement')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-accent" />
                    {t('about.vision')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={styles.readableText}>
                    {t('about.visionStatement')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Values */}
          <TabsContent value="values" className={styles.tabsContent}>
            <div className={styles.tabsHeader}>
              <h2 className={styles.sectionTitle}>{t('about.coreValues')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('about.valuesDesc')}
              </p>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((value) => (
                <Card key={value.title} className={styles.teamCard}>
                  <CardHeader>
                    <div className={styles.valueIconWrap}>
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={styles.readableText}>{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* History */}
          <TabsContent value="history" className={styles.tabsContent}>
            <div className={styles.tabsHeader}>
              <h2 className={styles.sectionTitle}>{t('about.history')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('about.historyDesc')}
              </p>
            </div>
            <div className={styles.historyWrap}>
              <div className="relative">
                <div className={styles.historyLine} />
                {history.map((item, index) => (
                  <div key={`${String(item.year)}-${index}`} className={styles.historyItem}>
                    <div className={styles.historyBadge}>
                      <span className={styles.historyBadgeText}>{index + 1}</span>
                    </div>
                    <div className={styles.historyCard}>
                      <span className={styles.historyYear}>{item.year}</span>
                      <p className="text-foreground break-keep">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              {t('about.historyNote')}
            </p>
          </TabsContent>

          {/* Organization */}
          <TabsContent value="organization" className={styles.tabsContent}>
            <div className={styles.tabsHeader}>
              <h2 className={styles.sectionTitle}>{t('about.organization')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('about.orgDesc')}
              </p>
            </div>
            <div className={styles.teamGrid}>
              {team.map((member) => (
                <Card key={member.id}>
                  <CardContent className="pt-6 text-center">
                    <div className={styles.teamAvatar}>
                      <Users className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <p className={styles.teamRole}>{member.role}</p>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className={styles.teamDesc}>{member.description}</p>
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

export default AboutPage;
