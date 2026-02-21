import { Target, Eye, Heart, Users, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageHero from '@/components/common/PageHero';
import styles from '@/styles/pages/AboutPage.module.css';

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('정확성', 'Accuracy'),
      description: t(
        '정밀한 측정과 분석으로 신뢰할 수 있는 데이터를 제공합니다.',
        'Providing reliable data through precise measurement and analysis.'
      ),
    },
    {
      icon: Heart,
      title: t('진정성', 'Integrity'),
      description: t(
        '고객의 환경 문제를 자사의 문제처럼 책임감 있게 해결합니다.',
        "Solving clients' environmental issues with responsibility and care."
      ),
    },
    {
      icon: Eye,
      title: t('전문성', 'Expertise'),
      description: t(
        '30년 이상 축적된 경험과 전문 지식으로 최적의 솔루션을 제안합니다.',
        'Proposing optimal solutions with over 30 years of accumulated experience.'
      ),
    },
  ];

  const history = [
    { year: '1992', event: t('오수처리시설 설계 및 시공, 수질환경관리 대행 사업 시작', 'Started sewage treatment facility design and water quality management') },
    { year: '(연도)', event: t('환경측정분석대행업 등록', 'Environmental Measurement Agency Registration') },
    { year: '(연도)', event: t('대기환경측정대행업 등록', 'Air Environment Measurement Registration') },
    { year: '(연도)', event: t('악취측정대행업 등록', 'Odor Measurement Registration') },
    { year: '(연도)', event: t('(추가 연혁 입력 예정)', '(Additional history to be added)') },
    { year: t('현재', 'Present'), event: t('환경측정 및 분석 통합 전문기업으로 성장', 'Grown as an integrated environmental measurement company') },
  ];

  const team = [
    {
      role: t('대표', 'CEO'),
      name: t('이의환', 'Lee Eui-hwan'),
      description: t('경력 35년', '35 Years Experience'),
    },
    {
      role: t('이사', 'Director'),
      name: t('김동은', 'Kim Dong-eun'),
      description: t('경력 13년', '13 Years Experience'),
    },
    {
      role: t('연구소장', 'Research Director'),
      name: t('김명훈', 'Kim Myung-hoon'),
      description: t('경력 15년', '15 Years Experience'),
    },
  ];

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('회사소개', 'About Us')}
        subtitle={t(
          '환경 중시와 지속 가능한 발전을 목표로 하는 삼양건설환경연구소입니다.',
          'Samyang Environmental Research Institute - Committed to environmental sustainability.'
        )}
      />

      <Section>
        <Tabs defaultValue="greeting" className="w-full">
          <TabsList className={styles.tabsList}>
            <TabsTrigger value="greeting" className={styles.tabsTrigger}>
              {t('대표 인사말', 'Greeting')}
            </TabsTrigger>
            <TabsTrigger value="mission" className={styles.tabsTrigger}>
              {t('미션 및 비전', 'Mission & Vision')}
            </TabsTrigger>
            <TabsTrigger value="values" className={styles.tabsTrigger}>
              {t('핵심 가치', 'Core Values')}
            </TabsTrigger>
            <TabsTrigger value="history" className={styles.tabsTrigger}>
              {t('연혁', 'History')}
            </TabsTrigger>
            <TabsTrigger value="organization" className={styles.tabsTrigger}>
              {t('구성', 'Organization')}
            </TabsTrigger>
          </TabsList>

          {/* Greeting */}
          <TabsContent value="greeting" className={styles.tabsContent}>
            <div className={styles.missionGrid}>
              <div>
                <h2 className={styles.sectionTitle}>{t('대표 인사말', 'Greeting from the CEO')}</h2>
                <div className="space-y-6">
                  <div className={styles.infoBox}>
                    <p className={styles.readableText}>
                      {t(
                        '안녕하십니까. 삼양건설환경연구소 대표 이의환입니다.\n저희는 1992년 설립 이후 대기·수질·악취 환경측정과 시설 설계·시공·운영까지, 현장에서 바로 적용되는 데이터와 솔루션을 제공해 왔습니다.\n고객의 목표를 먼저 이해하고, 측정–분석–개선까지 한 번에 책임지겠습니다.',
                        "Hello, I'm Lee Eui-hwan, CEO of Samyang Environmental Research Institute.\nSince 1992, we have delivered field-proven data and solutions across air, water, and odor measurement as well as facility design, construction, and operation.\nWe start from your goals and take responsibility from measurement to improvement."
                      )}
                    </p>
                    <p className={styles.signature}>
                      {t('삼양건설환경연구소 대표 이의환', 'CEO, Lee Eui-hwan')}
                    </p>
                  </div>

                  <div className={styles.infoBox}>
                    <h3 className={styles.infoTitle}>{t('회사 개요', 'Company Overview')}</h3>
                    <p className={styles.readableText}>
                      {t(
                        '삼양건설환경연구소는 환경 중시와 지속 가능한 발전을 목표로 1992년 오수처리시설 설계와 시공, 수질환경관리 대행을 시작으로 설립되어 현재 환경측정 및 분석 등 환경 통합 전문기업으로 성장하였습니다.',
                        'Samyang Environmental Research Institute was established in 1992, starting with sewage treatment facility design, construction, and water quality management. We have since grown into an integrated environmental company specializing in environmental measurement and analysis.'
                      )}
                    </p>
                  </div>

                  <div className={styles.infoBox}>
                    <h3 className={styles.infoTitle}>{t('사업영역', 'Business Areas')}</h3>
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
                    {t('정확한 데이터, 현실적인 개선', 'Accurate data, practical improvements')}
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
              <h2 className={styles.sectionTitle}>{t('미션 및 비전', 'Mission & Vision')}</h2>
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
                    {t('미션', 'Mission')}
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
                    {t('비전', 'Vision')}
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
              <h2 className={styles.sectionTitle}>{t('핵심 가치', 'Core Values')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('우리가 일하는 방식을 정의하는 가치들입니다.', 'Values that define how we work.')}
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
              <h2 className={styles.sectionTitle}>{t('연혁', 'History')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('삼양건설환경연구소의 30년 발자취입니다.', 'Our 30-year journey.')}
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
              {t('* 상세 연혁은 추후 업데이트 예정입니다.', '* Detailed history will be updated.')}
            </p>
          </TabsContent>

          {/* Organization */}
          <TabsContent value="organization" className={styles.tabsContent}>
            <div className={styles.tabsHeader}>
              <h2 className={styles.sectionTitle}>{t('구성', 'Organization')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('풍부한 경험을 갖춘 전문가들이 함께합니다.', 'Experienced professionals at your service.')}
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
