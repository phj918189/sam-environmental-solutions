import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Microscope, Building } from 'lucide-react';
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
        '축적된 경험과 전문 지식으로 최적의 솔루션을 제안합니다.',
        'Proposing optimal solutions with accumulated experience and expertise.'
      ),
    },
  ];

  const history = [
    { year: '2010', event: t('삼양건설환경연구소 설립', 'Samyang Environmental established') },
    { year: '2012', event: t('환경측정분석대행업 등록', 'Environmental Measurement Agency Registration') },
    { year: '2015', event: t('대기환경 측정 장비 도입', 'Air quality measurement equipment introduced') },
    { year: '2018', event: t('수질환경 분석 서비스 확대', 'Water quality analysis services expanded') },
    { year: '2020', event: t('악취측정대행업 등록', 'Odor measurement agency registration') },
    { year: '2023', event: t('ISO 인증 추진 (예정)', 'ISO certification planned') },
  ];

  const team = [
    {
      role: t('대표', 'CEO'),
      name: t('(대표자명)', '(Name)'),
      description: t('환경공학 전문가, 20년 경력', 'Environmental engineering expert, 20 years experience'),
    },
    {
      role: t('기술이사', 'Technical Director'),
      name: t('(이름)', '(Name)'),
      description: t('대기환경 전문가, 15년 경력', 'Air quality specialist, 15 years experience'),
    },
    {
      role: t('연구소장', 'Lab Director'),
      name: t('(이름)', '(Name)'),
      description: t('분석화학 전문가, 12년 경력', 'Analytical chemistry expert, 12 years experience'),
    },
  ];

  const equipment = [
    { category: t('대기측정', 'Air Measurement'), items: t('굴뚝배출가스측정기, 미세먼지측정기 등', 'Stack gas analyzer, particulate matter monitor, etc.') },
    { category: t('수질분석', 'Water Analysis'), items: t('분광광도계, TOC분석기, BOD측정기 등', 'Spectrophotometer, TOC analyzer, BOD meter, etc.') },
    { category: t('악취분석', 'Odor Analysis'), items: t('악취측정기, GC-MS 분석장비 등', 'Olfactometer, GC-MS analyzer, etc.') },
  ];

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('회사소개', 'About Us')}
        subtitle={t(
          '환경을 생각하는 기업, 삼양건설환경연구소입니다.',
          'Samyang Environmental - A company that cares for the environment.'
        )}
      />

      {/* Mission & Vision */}
      <Section>
        <div className={styles.missionGrid}>
          <div>
            <h2 className={styles.sectionTitle}>{t('미션 & 비전', 'Mission & Vision')}</h2>
            <div className="space-y-6">
              <div className={styles.infoBox}>
                <h3 className={styles.infoTitle}>{t('미션', 'Mission')}</h3>
                <p className="text-muted-foreground">
                  {t(
                    '정확한 환경 측정과 분석을 통해 기업과 지역사회의 지속 가능한 발전에 기여합니다.',
                    'Contributing to sustainable development of businesses and communities through accurate environmental measurement and analysis.'
                  )}
                </p>
              </div>
              <div className={styles.infoBox}>
                <h3 className={styles.infoTitle}>{t('비전', 'Vision')}</h3>
                <p className="text-muted-foreground">
                  {t(
                    '대한민국 환경 서비스 분야의 선도 기업이 되어 깨끗한 미래를 만들어갑니다.',
                    'Becoming a leading environmental services company in Korea, creating a cleaner future.'
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.iconPanel}>
            <Building className="w-32 h-32 text-primary" />
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section variant="muted">
        <SectionHeader
          title={t('핵심 가치', 'Core Values')}
          subtitle={t('우리가 일하는 방식을 정의하는 가치들입니다.', 'Values that define how we work.')}
        />
        <div className={styles.valuesGrid}>
          {values.map((value) => (
            <Card key={value.title} className={styles.valueCard}>
              <CardHeader>
                <div className={styles.valueIconWrap}>
                  <value.icon className="h-8 w-8 text-primary" />
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
      <Section>
        <SectionHeader
          title={t('연혁', 'History')}
          subtitle={t('삼양건설환경연구소의 발자취입니다.', 'Our journey over the years.')}
        />
        <div className={styles.historyWrap}>
          <div className="relative">
            <div className={styles.historyLine} />
            {history.map((item, index) => (
              <div key={item.year} className={styles.historyItem}>
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
      </Section>

      {/* Team */}
      <Section variant="muted">
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

      {/* Equipment */}
      <Section>
        <SectionHeader
          title={t('보유 장비', 'Equipment & Capabilities')}
          subtitle={t('최신 장비로 정확한 측정과 분석을 수행합니다.', 'Accurate measurement and analysis with state-of-the-art equipment.')}
        />
        <div className={styles.equipmentGrid}>
          {equipment.map((eq) => (
            <div key={eq.category} className={styles.equipmentCard}>
              <div className={styles.equipmentHeader}>
                <Microscope className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">{eq.category}</h3>
              </div>
              <p className={styles.equipmentText}>{eq.items}</p>
            </div>
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
              {t('문의하기', 'Contact Us')}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
