import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wind, Droplets, Trash2, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import PageHero from '@/components/common/PageHero';
import styles from '@/styles/pages/PortfolioPage.module.css';

const portfolioItems = [
  {
    id: '1',
    category: 'air',
    title: { ko: '○○제조공장 대기배출시설 측정', en: '○○ Manufacturing Plant Air Emission Measurement' },
    client: { ko: '○○주식회사', en: '○○ Corporation' },
    location: { ko: '충청남도 ○○시', en: '○○ City, Chungnam' },
    date: '2023-11',
    description: {
      ko: '대기오염물질 배출시설 정기 측정 및 개선 컨설팅 수행',
      en: 'Regular air pollutant emission measurement and improvement consulting'
    },
    results: { ko: '배출허용기준 충족, 연간 관리 계약 체결', en: 'Met emission standards, annual management contract signed' }
  },
  {
    id: '2',
    category: 'water',
    title: { ko: '○○식품 폐수처리시설 효율 진단', en: '○○ Food Company Wastewater Treatment Diagnosis' },
    client: { ko: '○○식품', en: '○○ Food Co.' },
    location: { ko: '대전광역시', en: 'Daejeon' },
    date: '2023-10',
    description: {
      ko: '폐수처리시설 운영 효율 진단 및 개선 방안 제시',
      en: 'Wastewater treatment efficiency diagnosis and improvement recommendations'
    },
    results: { ko: '처리 효율 15% 향상, 운영비 절감', en: '15% efficiency improvement, reduced operating costs' }
  },
  {
    id: '3',
    category: 'odor',
    title: { ko: '○○화학 악취저감시설 설계 컨설팅', en: '○○ Chemical Odor Reduction Facility Consulting' },
    client: { ko: '○○화학', en: '○○ Chemical' },
    location: { ko: '울산광역시', en: 'Ulsan' },
    date: '2023-09',
    description: {
      ko: '악취 민원 해결을 위한 저감시설 설계 및 시공 컨설팅',
      en: 'Reduction facility design and construction consulting to resolve odor complaints'
    },
    results: { ko: '악취 90% 저감, 민원 해소', en: '90% odor reduction, complaints resolved' }
  },
  {
    id: '4',
    category: 'air',
    title: { ko: '○○발전소 굴뚝 배출가스 측정', en: '○○ Power Plant Stack Emission Measurement' },
    client: { ko: '○○에너지', en: '○○ Energy' },
    location: { ko: '충청북도', en: 'Chungbuk' },
    date: '2023-08',
    description: {
      ko: '발전시설 굴뚝 배출가스 정기 측정 및 모니터링',
      en: 'Regular stack emission measurement and monitoring for power generation facility'
    },
    results: { ko: '법적 기준 준수 확인, 정기 계약 체결', en: 'Confirmed legal compliance, regular contract signed' }
  },
  {
    id: '5',
    category: 'water',
    title: { ko: '○○제약 수질 모니터링 시스템 구축', en: '○○ Pharmaceutical Water Quality Monitoring System' },
    client: { ko: '○○제약', en: '○○ Pharma' },
    location: { ko: '경기도', en: 'Gyeonggi' },
    date: '2023-07',
    description: {
      ko: '실시간 수질 모니터링 시스템 설계 및 구축 지원',
      en: 'Real-time water quality monitoring system design and implementation support'
    },
    results: { ko: '24시간 자동 모니터링 체계 구축', en: '24/7 automated monitoring system established' }
  },
  {
    id: '6',
    category: 'odor',
    title: { ko: '○○축산농가 악취방지계획 수립', en: '○○ Livestock Farm Odor Prevention Plan' },
    client: { ko: '○○축산', en: '○○ Livestock' },
    location: { ko: '전라북도', en: 'Jeonbuk' },
    date: '2023-06',
    description: {
      ko: '축산시설 악취방지계획서 작성 및 제출 대행',
      en: 'Livestock facility odor prevention plan preparation and submission'
    },
    results: { ko: '악취방지계획서 승인, 허가 완료', en: 'Odor prevention plan approved, permit completed' }
  },
];

const categoryInfo = {
  all: { ko: '전체', en: 'All', icon: null },
  air: { ko: '대기', en: 'Air', icon: Wind },
  water: { ko: '수질', en: 'Water', icon: Droplets },
  odor: { ko: '악취', en: 'Odor', icon: Trash2 },
};

const PortfolioPage = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';
  const [filter, setFilter] = useState<'all' | 'air' | 'water' | 'odor'>('all');
  const lang = language as 'ko' | 'en';

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const getCategoryBadge = (category: string) => {
    const info = categoryInfo[category as keyof typeof categoryInfo];
    const Icon = info?.icon;
    return (
      <Badge variant="secondary" className="gap-1">
        {Icon && <Icon className="h-3 w-3" />}
        {info?.[lang]}
      </Badge>
    );
  };

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('사업실적', 'Portfolio')}
        subtitle={t(
          '삼양건설환경연구소가 수행한 주요 프로젝트입니다.',
          'Key projects completed by Samyang Environmental.'
        )}
      />

      {/* Filter & List */}
      <Section>
        <div className={styles.filterRow}>
          {Object.entries(categoryInfo).map(([key, value]) => (
            <Button
              key={key}
              variant={filter === key ? 'default' : 'outline'}
              onClick={() => setFilter(key as typeof filter)}
              className={styles.filterButton}
            >
              {value.icon && <value.icon className="h-4 w-4" />}
              {value[lang]}
            </Button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <Link key={item.id} to={`${prefix}/portfolio/${item.id}`}>
              <Card className={`${styles.card} group`}>
                <CardHeader>
                  {getCategoryBadge(item.category)}
                  <CardTitle className={styles.cardTitle}>
                    {item.title[lang]}
                  </CardTitle>
                  <CardDescription>{item.client[lang]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={styles.cardDescription}>{item.description[lang]}</p>
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <MapPin className="h-3 w-3" />
                      {item.location[lang]}
                    </span>
                    <span className={styles.metaItem}>
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="muted">
        <div className={styles.ctaWrap}>
          <h2 className={styles.ctaTitle}>
            {t('귀사의 프로젝트도 함께 하겠습니다', 'Let Us Handle Your Project')}
          </h2>
          <p className={styles.ctaSubtitle}>
            {t(
              '환경 문제 해결을 위한 전문적인 지원을 제공합니다.',
              'We provide professional support for solving environmental challenges.'
            )}
          </p>
          <Link to={`${prefix}/contact`}>
            <Button size="lg">{t('문의하기', 'Contact Us')}</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default PortfolioPage;
