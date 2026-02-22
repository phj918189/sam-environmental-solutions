import { Target, Eye, Heart, Users, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageHero from '@/components/common/PageHero';
import { values as valuesData, history as historyData, team as teamData } from '@/data/about';
import styles from '@/styles/pages/AboutPage.module.css';

const valueIcons = { accuracy: Target, integrity: Heart, expertise: Eye } as const;

const AboutPage = () => {
  const { language, t } = useLanguage();
  const lang = language as 'ko' | 'en';

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
                    <p className={styles.readableText}>
                      {t(
                        '안녕하십니까. 삼양건설환경연구소 대표 이의환입니다.\n저희는 1992년 설립 이후 대기·수질·악취 환경측정과 시설 설계·시공·운영까지, 현장에서 바로 적용되는 데이터와 솔루션을 제공해 왔습니다.\n고객의 목표를 먼저 이해하고, 측정–분석–개선까지 한 번에 책임지겠습니다.',
                        "Hello, I'm Lee Eui-hwan, CEO of Samyang Environmental Research Institute.\nSince 1992, we have delivered field-proven data and solutions across air, water, and odor measurement as well as facility design, construction, and operation.\nWe start from your goals and take responsibility from measurement to improvement."
                      )}
                    </p>
                    <p className={styles.signature}>
                      {t('about.ceoName')}
                    </p>
                  </div>

                  <div className={styles.infoBox}>
                    <h3 className={styles.infoTitle}>{t('about.companyOverview')}</h3>
                    <p className={styles.readableText}>
                      {t(
                        '삼양건설환경연구소는 환경 중시와 지속 가능한 발전을 목표로 1992년 오수처리시설 설계와 시공, 수질환경관리 대행을 시작으로 설립되어 현재 환경측정 및 분석 등 환경 통합 전문기업으로 성장하였습니다.',
                        'Samyang Environmental Research Institute was established in 1992, starting with sewage treatment facility design, construction, and water quality management. We have since grown into an integrated environmental company specializing in environmental measurement and analysis.'
                      )}
                    </p>
                  </div>

                  <div className={styles.infoBox}>
                    <h3 className={styles.infoTitle}>{t('about.businessAreas')}</h3>
                    <p className={styles.readableText}>
                      {t(
                        '대기, 수질, 악취 환경 측정부터 시설 설계, 시공, 관리까지 원스톱 솔루션을 제공합니다.',
                        'We provide one-stop solutions from air, water, and odor measurement to facility design, construction, and management.'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.iconPanel}>
                <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center">
                  <Leaf className="w-16 h-16 text-accent" />
                </div>
                <div className={styles.iconPanelText}>
                  <p className="font-semibold">
                    {t('about.tagline')}
                  </p>
                  <p className="text-sm text-muted-foreground break-keep leading-relaxed">
                    {t(
                      '현장에서 바로 적용되는 측정·분석·개선 솔루션을 제공합니다.',
                      'We deliver field-ready measurement, analysis, and improvement solutions.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Mission & Vision */}
          <TabsContent value="mission" className={styles.tabsContent}>
            <div className={styles.tabsHeader}>
              <h2 className={styles.sectionTitle}>{t('about.missionVision')}</h2>
              <p className={styles.sectionSubtitle}>
                {t(
                  '우리는 정확한 환경 측정과 분석으로 고객과 지역사회의 지속 가능한 발전에 기여합니다.',
                  'We contribute to sustainable development through accurate environmental measurement and analysis.'
                )}
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
                    {t(
                      '정확한 환경 측정과 분석을 통해 기업과 지역사회의 지속 가능한 발전에 기여합니다.',
                      'Contributing to sustainable development of businesses and communities through accurate environmental measurement and analysis.'
                    )}
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
                    {t(
                      '대한민국 환경 서비스 분야의 선도 기업이 되어 깨끗한 미래를 만들어갑니다.',
                      'Becoming a leading environmental services company in Korea, creating a cleaner future.'
                    )}
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
                <Card key={value.title} className={styles.valueCard}>
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
                  <div key={`${item.year}-${index}`} className={styles.historyItem}>
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
                <Card key={member.role}>
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
