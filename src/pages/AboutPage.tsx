import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Building, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import PageHero from '@/components/common/PageHero';
import styles from '@/styles/pages/AboutPage.module.css';

const AboutPage = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';

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

      {/* Company Introduction */}
      <Section>
        <div className={styles.missionGrid}>
          <div>
            <h2 className={styles.sectionTitle}>{t('회사 개요', 'Company Overview')}</h2>
            <div className="space-y-6">
              <div className={styles.infoBox}>
                <p className="text-muted-foreground leading-relaxed">
                  {t(
                    '삼양건설환경연구소는 환경 중시와 지속 가능한 발전을 목표로 1992년 오수처리시설 설계와 시공, 수질환경관리 대행을 시작으로 설립되어 현재 환경측정 및 분석 등 환경 통합 전문기업으로 성장하였습니다.',
                    'Samyang Environmental Research Institute was established in 1992, starting with sewage treatment facility design, construction, and water quality management. We have since grown into an integrated environmental company specializing in environmental measurement and analysis.'
                  )}
                </p>
              </div>
              <div className={styles.infoBox}>
                <h3 className={styles.infoTitle}>{t('사업영역', 'Business Areas')}</h3>
                <p className="text-muted-foreground">
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
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section variant="muted">
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                {t('미션', 'Mission')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
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
              <p className="text-muted-foreground">
                {t(
                  '대한민국 환경 서비스 분야의 선도 기업이 되어 깨끗한 미래를 만들어갑니다.',
                  'Becoming a leading environmental services company in Korea, creating a cleaner future.'
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <SectionHeader
          title={t('핵심 가치', 'Core Values')}
          subtitle={t('우리가 일하는 방식을 정의하는 가치들입니다.', 'Values that define how we work.')}
        />
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
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* History */}
      <Section variant="muted">
        <SectionHeader
          title={t('연혁', 'History')}
          subtitle={t('삼양건설환경연구소의 30년 발자취입니다.', 'Our 30-year journey.')}
        />
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
                  <p className="text-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6">
          {t('* 상세 연혁은 추후 업데이트 예정입니다.', '* Detailed history will be updated.')}
        </p>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeader
          title={t('전문가 팀', 'Expert Team')}
          subtitle={t('풍부한 경험을 갖춘 전문가들이 함께합니다.', 'Experienced professionals at your service.')}
        />
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
      </Section>

      {/* CTA */}
      <Section variant="primary">
        <div className={styles.ctaWrap}>
          <h2 className={styles.ctaTitle}>
            {t('함께 일하고 싶으신가요?', 'Want to Work With Us?')}
          </h2>
          <p className={styles.ctaSubtitle}>
            {t(
              '환경 문제에 대한 전문적인 상담을 받아보세요.',
              'Get professional consultation on your environmental challenges.'
            )}
          </p>
          <Link to={`${prefix}/contact`}>
            <Button size="lg" variant="secondary">
              {t('견적 문의하기', 'Request Quote')}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
