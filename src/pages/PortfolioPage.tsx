import { Droplets, Building, MapPin, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageHero from '@/components/common/PageHero';
import styles from '@/styles/pages/PortfolioPage.module.css';

// 운영 실적 (시설 운영 관리)
const operationItems = [
  { id: 'op1', title: { ko: '청산농공단지 공공 오·폐수처리장', en: 'Cheongsan Industrial Complex Wastewater Plant' }, period: '2016~2017', method: { ko: '생물학적+화학적(가압부상)', en: 'Biological+Chemical (Flotation)' } },
  { id: 'op2', title: { ko: '(주)건영비앤에프,디아이커뮤니케이션 폐수처리장', en: 'Kunyoung B&F, DI Communication WTP' }, period: '2019~2021', method: { ko: '생물학적+화학적', en: 'Biological+Chemical' } },
  { id: 'op3', title: { ko: '(주)케이티앤지 폐수처리장', en: 'KT&G Wastewater Treatment Plant' }, period: '2021~2023', method: { ko: '생물학적+화학적', en: 'Biological+Chemical' } },
  { id: 'op4', title: { ko: '(주)진바이오텍 폐수처리장,개인하수처리시설', en: 'Jin Biotech WTP & Sewage Facility' }, period: '2024~2025', method: { ko: '생물학적+화학적(MBR 준공사막)', en: 'Biological+Chemical (MBR)' } },
  { id: 'op5', title: { ko: '한국에너지기술연구원 본원 폐수처리장', en: 'KIER Main Campus WTP' }, period: '2024~2025', method: { ko: '생물학적+화학적(가압부상)', en: 'Biological+Chemical (Flotation)' } },
  { id: 'op6', title: { ko: '국방과학연구소 폐수처리장,개인하수처리시설', en: 'ADD Wastewater & Sewage Facility' }, period: '2025~현재', method: { ko: '생물학적+화학적 일부(RO필터)', en: 'Biological+Chemical (RO Filter)' } },
  { id: 'op7', title: { ko: '(주)한미타올 폐수처리장', en: 'Hanmi Towel WTP' }, period: '2023~현재', method: { ko: '생물학적', en: 'Biological' } },
  { id: 'op8', title: { ko: '동세중농협 폐수처리장', en: 'Dongsejung Cooperative WTP' }, period: '2020~현재', method: { ko: '화학적', en: 'Chemical' } },
  { id: 'op9', title: { ko: '태극제약 부여공장 폐수처리장', en: 'Taeguk Pharma Buyeo WTP' }, period: '2021~현재', method: { ko: '생물학적+화학적(RO필터)', en: 'Biological+Chemical (RO Filter)' } },
  { id: 'op10', title: { ko: '구항농공단지 공공 오·폐수처리장', en: 'Guhang Industrial Complex WTP' }, period: '2015~현재', method: { ko: '생물학적', en: 'Biological' } },
  { id: 'op11', title: { ko: '금강휴게소 개인하수처리시설', en: 'Geumgang Rest Area Sewage Facility' }, period: '2022~현재', method: { ko: '생물학적+화학적', en: 'Biological+Chemical' } },
  { id: 'op12', title: { ko: '금강대학교 개인하수처리시설', en: 'Geumgang University Sewage Facility' }, period: '2003~현재', method: { ko: '생물학적+(MBR 준공사막)', en: 'Biological (MBR)' } },
  { id: 'op13', title: { ko: '타임월드 갤러리아 개인하수처리시설', en: 'Timeworld Galleria Sewage Facility' }, period: '2003~현재', method: { ko: '생물학적', en: 'Biological' } },
  { id: 'op14', title: { ko: '한국수자원공사 대청지사 개인하수처리시설', en: 'K-Water Daecheong Sewage Facility' }, period: '2003~2024', method: { ko: '생물학적+(MBR 준공사막)', en: 'Biological (MBR)' } },
  { id: 'op15', title: { ko: '(주)KBI코스모링크 개인하수처리시설', en: 'KBI Cosmolink Sewage Facility' }, period: '2023~현재', method: { ko: '생물학적', en: 'Biological' } },
  { id: 'op16', title: { ko: '(주)램테크놀러지 개인하수처리시설', en: 'Ram Technology Sewage Facility' }, period: '2023~현재', method: { ko: '생물학적', en: 'Biological' } },
  { id: 'op17', title: { ko: '한국도로공사 대전지사', en: 'Korea Expressway Daejeon Branch' }, period: '2018~현재', method: { ko: '생물학적', en: 'Biological' } },
];

// 주요 공사 실적
const constructionItems = [
  { id: 'c1', title: { ko: '한국에너지기술연구원 폐수처리장 개선공사', en: 'KIER WTP Improvement Project' }, year: '2024', type: 'water' },
  { id: 'c2', title: { ko: '한국생산기술연구원 개선공사', en: 'KITECH Improvement Project' }, year: '2024', type: 'water' },
  { id: 'c3', title: { ko: 'KT&G 폐수처리장 개선공사', en: 'KT&G WTP Improvement Project' }, year: '2024', type: 'water' },
  { id: 'c4', title: { ko: '태극제약 폐수처리장 개선공사', en: 'Taeguk Pharma WTP Improvement' }, year: '2024', type: 'water' },
  { id: 'c5', title: { ko: '진바이오텍 폐수처리장 개선공사', en: 'Jin Biotech WTP Improvement' }, year: '2024', type: 'water' },
  { id: 'c6', title: { ko: '한미타올 폐수처리장 개선공사', en: 'Hanmi Towel WTP Improvement' }, year: '2024', type: 'water' },
  { id: 'c7', title: { ko: '국방과학연구소 신설 공사', en: 'ADD New Facility Construction' }, year: '2025', type: 'water' },
  { id: 'c8', title: { ko: '실크리버CC 공법 변경 공사', en: 'Silk River CC Process Change' }, year: '2024', type: 'water' },
  { id: 'c9', title: { ko: '장태산 휴양림 처리시설 개선 공사(신설)', en: 'Jangtaesan Forest Treatment Facility' }, year: '2024', type: 'water' },
];

// 휴게소 시설 관리
const restAreaItems = [
  { id: 'r1', title: { ko: '금강 휴게소', en: 'Geumgang Rest Area' }, region: { ko: '대전·충남', en: 'Daejeon/Chungnam' } },
  { id: 'r2', title: { ko: '천둥산 휴게소', en: 'Cheondungsan Rest Area' }, region: { ko: '대전·충남', en: 'Daejeon/Chungnam' } },
  { id: 'r3', title: { ko: '청송 휴게소', en: 'Cheongsong Rest Area' }, region: { ko: '대전·충남', en: 'Daejeon/Chungnam' } },
  { id: 'r4', title: { ko: '예산 휴게소', en: 'Yesan Rest Area' }, region: { ko: '충남', en: 'Chungnam' } },
  { id: 'r5', title: { ko: '부여백제 휴게소', en: 'Buyeo Baekje Rest Area' }, region: { ko: '충남', en: 'Chungnam' } },
  { id: 'r6', title: { ko: '천안 휴게소', en: 'Cheonan Rest Area' }, region: { ko: '충남', en: 'Chungnam' } },
  { id: 'r7', title: { ko: '청주 휴게소', en: 'Cheongju Rest Area' }, region: { ko: '충북', en: 'Chungbuk' } },
  { id: 'r8', title: { ko: '공주 휴게소', en: 'Gongju Rest Area' }, region: { ko: '충남', en: 'Chungnam' } },
  { id: 'r9', title: { ko: '황간 휴게소', en: 'Hwanggan Rest Area' }, region: { ko: '충북', en: 'Chungbuk' } },
  { id: 'r10', title: { ko: '고성 공룡나라 휴게소', en: 'Goseong Dinosaur Rest Area' }, region: { ko: '경남', en: 'Gyeongnam' } },
  { id: 'r11', title: { ko: '안성 휴게소', en: 'Anseong Rest Area' }, region: { ko: '경기', en: 'Gyeonggi' } },
  { id: 'r12', title: { ko: '인삼랜드 휴게소', en: 'Ginseng Land Rest Area' }, region: { ko: '충남', en: 'Chungnam' } },
];

const PortfolioPage = () => {
  const { language, t } = useLanguage();
  const lang = language as 'ko' | 'en';

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('사업실적', 'Portfolio')}
        subtitle={t(
          '1995년부터 현재까지 약 60개 업체의 폐수, 오수처리시설을 성공적으로 운영하고 있습니다.',
          'Successfully operating wastewater facilities for about 60 companies since 1995.'
        )}
      />

      {/* Overview Stats */}
      <Section variant="muted">
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>60+</div>
            <div className={styles.statLabel}>{t('관리 업체', 'Managed Companies')}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>30+</div>
            <div className={styles.statLabel}>{t('공사 실적', 'Construction Projects')}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>12+</div>
            <div className={styles.statLabel}>{t('휴게소 시설', 'Rest Area Facilities')}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>1995</div>
            <div className={styles.statLabel}>{t('사업 시작', 'Since')}</div>
          </div>
        </div>
      </Section>

      {/* Tabbed Content */}
      <Section>
        <Tabs defaultValue="operation" className="w-full">
          <TabsList className={styles.tabsList}>
            <TabsTrigger value="operation" className={styles.tabTrigger}>
              <Droplets className="h-4 w-4" />
              {t('운영 실적', 'Operations')}
            </TabsTrigger>
            <TabsTrigger value="construction" className={styles.tabTrigger}>
              <Wrench className="h-4 w-4" />
              {t('공사 실적', 'Construction')}
            </TabsTrigger>
            <TabsTrigger value="restarea" className={styles.tabTrigger}>
              <Building className="h-4 w-4" />
              {t('휴게소 시설', 'Rest Areas')}
            </TabsTrigger>
          </TabsList>

          {/* Operation Tab */}
          <TabsContent value="operation">
            <SectionHeader
              title={t('시설 운영 관리 실적', 'Facility Operation Management')}
              subtitle={t(
                '산업단지, 연구기관, 공공시설 등 다양한 분야의 폐수·오수처리시설을 운영하고 있습니다.',
                'Operating wastewater facilities across industrial complexes, research institutes, and public facilities.'
              )}
            />
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>{t('시설명', 'Facility')}</th>
                    <th>{t('운영기간', 'Period')}</th>
                    <th>{t('처리공법', 'Treatment Method')}</th>
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
                      {t('그 외 운영중인 업체 약 40업체 (1995년~현재 운영중)', 'Plus approximately 40 other companies (operating since 1995)')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Construction Tab */}
          <TabsContent value="construction">
            <SectionHeader
              title={t('주요 공사 실적 (2024~2025)', 'Major Construction Projects (2024-2025)')}
              subtitle={t(
                '처리시설의 신설, 개선, 공법 변경 등 30개 이상의 프로젝트를 성공적으로 완료하였습니다.',
                'Successfully completed over 30 projects including new installations, improvements, and process changes.'
              )}
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
              title={t('휴게소 시설 관리', 'Rest Area Facility Management')}
              subtitle={t(
                '대전, 충남, 충북 지역을 중심으로 12개 이상의 휴게소 하수처리시설을 관리하고 있습니다.',
                'Managing sewage treatment facilities at over 12 rest areas primarily in Daejeon, Chungnam, and Chungbuk regions.'
              )}
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
