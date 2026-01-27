import { useParams, Link } from 'react-router-dom';
import { Wind, Droplets, Leaf, ArrowLeft, CheckCircle, MapPin, Calendar, Building, Image } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import styles from '@/styles/pages/PortfolioDetailPage.module.css';

const portfolioDetails = {
  '1': {
    category: 'air',
    title: { ko: '○○제조공장 대기배출시설 측정', en: '○○ Manufacturing Plant Air Emission Measurement' },
    client: { ko: '○○주식회사', en: '○○ Corporation' },
    location: { ko: '충청남도 ○○시', en: '○○ City, Chungnam' },
    date: '2023-11',
    overview: {
      ko: '대규모 제조공장의 대기오염물질 배출시설에 대한 정기 측정 및 환경 컨설팅을 수행한 프로젝트입니다. 고객사의 법적 의무 이행을 지원하고, 배출량 저감을 위한 개선 방안을 제시하였습니다.',
      en: 'A project involving regular measurement and environmental consulting for air pollutant emission facilities at a large manufacturing plant. We supported the client\'s legal compliance and proposed improvement measures for emission reduction.'
    },
    challenge: {
      ko: '복잡한 생산 공정으로 인해 다양한 대기오염물질이 배출되고 있었으며, 일부 항목에서 배출허용기준에 근접한 수치가 나타나고 있었습니다. 또한 주변 주민들의 환경 민원이 증가하는 추세였습니다.',
      en: 'The complex production process was emitting various air pollutants, with some items approaching emission limits. Additionally, environmental complaints from nearby residents were increasing.'
    },
    solution: {
      ko: ['정밀 측정을 통한 배출원별 오염물질 현황 파악', '배출저감을 위한 공정 개선 방안 컨설팅', '주기적 모니터링 체계 구축 제안', '배출시설 관리 매뉴얼 작성'],
      en: ['Identified pollutant status by emission source through precision measurement', 'Consulted on process improvements for emission reduction', 'Proposed periodic monitoring system', 'Created emission facility management manual']
    },
    results: {
      ko: ['배출허용기준 100% 충족', '주요 오염물질 배출량 20% 감소', '환경 민원 발생 건수 감소', '연간 환경관리 계약 체결'],
      en: ['100% compliance with emission standards', '20% reduction in major pollutant emissions', 'Decreased environmental complaints', 'Annual environmental management contract signed']
    }
  },
  '2': {
    category: 'water',
    title: { ko: '○○식품 폐수처리시설 효율 진단', en: '○○ Food Company Wastewater Treatment Diagnosis' },
    client: { ko: '○○식품', en: '○○ Food Co.' },
    location: { ko: '대전광역시', en: 'Daejeon' },
    date: '2023-10',
    overview: {
      ko: '식품제조업체의 폐수처리시설 운영 효율을 진단하고, 처리 비용 절감 및 방류수 수질 개선을 위한 컨설팅을 수행한 프로젝트입니다.',
      en: 'A project diagnosing the operational efficiency of a food manufacturer\'s wastewater treatment facility and providing consulting for cost reduction and effluent quality improvement.'
    },
    challenge: {
      ko: '노후화된 폐수처리시설로 인해 처리 효율이 저하되고 있었으며, 운영 비용이 지속적으로 증가하고 있었습니다. 또한 계절별 생산량 변동에 따른 유입 부하 변화에 대응이 어려운 상황이었습니다.',
      en: 'The aging wastewater treatment facility was experiencing declining efficiency with continuously increasing operating costs. It was also difficult to respond to load variations due to seasonal production fluctuations.'
    },
    solution: {
      ko: ['시설 전반에 대한 정밀 진단 실시', '유입수 및 방류수 수질 분석', '처리 공정별 효율 평가', '시설 개선 및 운영 최적화 방안 제시'],
      en: ['Conducted comprehensive facility diagnosis', 'Analyzed influent and effluent water quality', 'Evaluated efficiency by treatment process', 'Proposed facility improvement and operation optimization']
    },
    results: {
      ko: ['처리 효율 15% 향상', '월간 운영비 10% 절감', '방류수 수질 안정화', '시설 개선 로드맵 수립'],
      en: ['15% improvement in treatment efficiency', '10% reduction in monthly operating costs', 'Stabilized effluent water quality', 'Established facility improvement roadmap']
    }
  },
  '3': {
    category: 'odor',
    title: { ko: '○○화학 악취저감시설 설계 컨설팅', en: '○○ Chemical Odor Reduction Facility Consulting' },
    client: { ko: '○○화학', en: '○○ Chemical' },
    location: { ko: '울산광역시', en: 'Ulsan' },
    date: '2023-09',
    overview: {
      ko: '화학제품 제조시설에서 발생하는 악취 민원 해결을 위해 저감시설 설계 및 시공 컨설팅을 수행한 프로젝트입니다.',
      en: 'A project providing reduction facility design and construction consulting to resolve odor complaints from a chemical manufacturing facility.'
    },
    challenge: {
      ko: '생산 공정에서 발생하는 복합악취로 인해 지속적인 주민 민원이 발생하고 있었습니다. 기존의 단순 탈취 방식으로는 효과적인 저감이 어려웠으며, 법적 기준 초과 우려도 있었습니다.',
      en: 'Complex odors from the production process were causing continuous resident complaints. Simple deodorization methods were ineffective, and there were concerns about exceeding legal standards.'
    },
    solution: {
      ko: ['복합악취 및 지정악취물질 정밀 측정', '악취 발생원별 기여도 분석', '맞춤형 저감시설 설계', '시공 및 시운전 지원'],
      en: ['Precision measurement of complex and designated odor substances', 'Analyzed contribution by odor source', 'Designed customized reduction facility', 'Supported construction and commissioning']
    },
    results: {
      ko: ['악취 발생량 90% 저감', '주민 민원 완전 해소', '법적 배출허용기준 충족', '지속적 모니터링 체계 구축'],
      en: ['90% reduction in odor emissions', 'Complete resolution of resident complaints', 'Met legal emission standards', 'Established continuous monitoring system']
    }
  }
};

const categoryInfo = {
  air: { ko: '대기', en: 'Air', icon: Wind },
  water: { ko: '수질', en: 'Water', icon: Droplets },
  odor: { ko: '악취', en: 'Odor', icon: Leaf },
};

const PortfolioDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';
  const lang = language as 'ko' | 'en';

  const project = portfolioDetails[id as keyof typeof portfolioDetails];

  if (!project) {
    return (
      <Section>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('프로젝트를 찾을 수 없습니다', 'Project not found')}</h1>
          <Link to={`${prefix}/portfolio`}>
            <Button>{t('목록으로 돌아가기', 'Back to Portfolio')}</Button>
          </Link>
        </div>
      </Section>
    );
  }

  const category = categoryInfo[project.category as keyof typeof categoryInfo];
  const CategoryIcon = category.icon;

  return (
    <>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <Link to={`${prefix}/portfolio`}>
            <Button variant="ghost" className={styles.backButton}>
              <ArrowLeft className="h-4 w-4" />
              {t('목록으로', 'Back to List')}
            </Button>
          </Link>
          <Badge variant="secondary" className={styles.heroBadge}>
            <CategoryIcon className="h-3 w-3" />
            {category[lang]}
          </Badge>
          <h1 className={styles.heroTitle}>
            {project.title[lang]}
          </h1>
          <div className={styles.heroMeta}>
            <span className={styles.heroMetaItem}>
              <Building className="h-4 w-4" />
              {project.client[lang]}
            </span>
            <span className={styles.heroMetaItem}>
              <MapPin className="h-4 w-4" />
              {project.location[lang]}
            </span>
            <span className={styles.heroMetaItem}>
              <Calendar className="h-4 w-4" />
              {project.date}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className={styles.contentWrap}>
          {/* Overview */}
          <div>
            <h2 className={styles.sectionTitle}>{t('프로젝트 개요', 'Project Overview')}</h2>
            <p className="text-muted-foreground leading-relaxed">{project.overview[lang]}</p>
          </div>

          {/* Challenge */}
          <div>
            <h2 className={styles.sectionTitle}>{t('해결 과제', 'Challenge')}</h2>
            <div className={styles.challengeBox}>
              <p className="text-muted-foreground leading-relaxed">{project.challenge[lang]}</p>
            </div>
          </div>

          {/* Solution */}
          <div>
            <h2 className={styles.sectionTitle}>{t('솔루션', 'Solution')}</h2>
            <ul className={styles.list}>
              {project.solution[lang].map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <div className={styles.listIndexWrap}>
                    <span className={styles.listIndex}>{i + 1}</span>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div>
            <h2 className={styles.sectionTitle}>{t('성과', 'Results')}</h2>
            <div className={styles.resultGrid}>
              {project.results[lang].map((item, i) => (
                <div key={i} className={styles.resultItem}>
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Media Placeholder */}
          <div>
            <h2 className={styles.sectionTitle}>{t('프로젝트 사진', 'Project Photos')}</h2>
            <div className={styles.mediaGrid}>
              {[1, 2].map((i) => (
                <div key={i} className={styles.mediaBox}>
                  <div className={styles.mediaText}>
                    <Image className="h-12 w-12 mx-auto mb-2" />
                    <span className={styles.mediaLabel}>{t('사진 추가 예정', 'Photo coming soon')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="muted">
        <div className={styles.ctaWrap}>
          <h2 className={styles.ctaTitle}>
            {t('비슷한 프로젝트가 필요하신가요?', 'Need a Similar Project?')}
          </h2>
          <p className={styles.ctaSubtitle}>
            {t(
              '전문가와 상담하고 맞춤형 솔루션을 받아보세요.',
              'Consult with our experts and get a customized solution.'
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

export default PortfolioDetailPage;
