import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import styles from '@/styles/pages/NewsDetailPage.module.css';

const newsDetails = {
  '1': {
    category: { ko: '공지사항', en: 'Notice' },
    title: { ko: '2024년 신년 인사말씀', en: '2024 New Year Greetings' },
    date: '2024-01-02',
    content: {
      ko: `안녕하세요, 삼양건설환경연구소입니다.

2024년 새해가 밝았습니다. 지난 한 해 동안 저희 연구원을 신뢰해 주시고 함께해 주신 모든 고객분들께 깊은 감사의 말씀을 드립니다.

올해도 저희는 더욱 정확한 측정, 더욱 신뢰할 수 있는 분석, 그리고 더욱 전문적인 컨설팅으로 고객 여러분의 환경 문제 해결에 최선을 다하겠습니다.

새해 복 많이 받으시고, 건강하고 행복한 한 해 되시기를 바랍니다.

감사합니다.

삼양건설환경연구소 임직원 일동`,
      en: `Hello, this is Samyang Environmental Construction Research Institute.

The year 2024 has begun. We would like to express our sincere gratitude to all customers who trusted and partnered with us over the past year.

This year, we will continue to do our best to solve your environmental challenges with more accurate measurement, more reliable analysis, and more professional consulting.

We wish you a happy and healthy new year.

Thank you.

Samyang Environmental Staff`
    }
  },
  '2': {
    category: { ko: '뉴스', en: 'News' },
    title: { ko: '환경측정분석 서비스 확대 안내', en: 'Environmental Measurement Analysis Service Expansion' },
    date: '2023-12-15',
    content: {
      ko: `삼양건설환경연구소이 악취측정대행업 등록을 완료하였습니다.

이제 대기, 수질, 악취 분야의 종합 환경 서비스를 제공할 수 있게 되었습니다.

주요 서비스:
- 대기오염물질 측정 및 분석
- 수질오염물질 분석
- 복합악취 및 지정악취물질 측정
- 환경 컨설팅 및 허가 대행

앞으로도 최고 수준의 환경 서비스를 제공하기 위해 노력하겠습니다.

문의사항은 언제든지 연락 주시기 바랍니다.`,
      en: `Samyang Environmental has completed odor measurement agency registration.

We can now provide comprehensive environmental services in the fields of air, water, and odor.

Key Services:
- Air pollutant measurement and analysis
- Water pollutant analysis
- Complex and designated odor substance measurement
- Environmental consulting and permit services

We will continue to strive to provide the highest level of environmental services.

Please feel free to contact us with any inquiries.`
    }
  },
  '3': {
    category: { ko: '자료', en: 'Resources' },
    title: { ko: '대기오염물질 배출시설 관리 가이드', en: 'Air Pollutant Emission Facility Management Guide' },
    date: '2023-11-20',
    content: {
      ko: `대기오염물질 배출시설을 운영하는 사업장을 위한 관리 가이드입니다.

1. 법적 의무사항
- 배출시설 설치 허가/신고
- 정기 측정 (반기 1회 또는 분기 1회)
- 자가측정 기록 보관

2. 측정 항목
- 먼지
- 황산화물 (SOx)
- 질소산화물 (NOx)
- 일산화탄소 (CO)
- 기타 특정대기유해물질

3. 관리 요령
- 정기적인 시설 점검
- 연료 및 원료 관리
- 방지시설 효율 유지

자세한 상담이 필요하시면 연락 주시기 바랍니다.`,
      en: `A management guide for businesses operating air pollutant emission facilities.

1. Legal Obligations
- Emission facility installation permit/notification
- Regular measurement (semi-annual or quarterly)
- Self-measurement record keeping

2. Measurement Items
- Dust
- Sulfur oxides (SOx)
- Nitrogen oxides (NOx)
- Carbon monoxide (CO)
- Other specific hazardous air pollutants

3. Management Tips
- Regular facility inspection
- Fuel and raw material management
- Maintain control facility efficiency

Please contact us if you need detailed consultation.`
    }
  }
};

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';
  const lang = language as 'ko' | 'en';

  const article = newsDetails[id as keyof typeof newsDetails];

  if (!article) {
    return (
      <Section>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('게시글을 찾을 수 없습니다', 'Article not found')}</h1>
          <Link to={`${prefix}/news`}>
            <Button>{t('목록으로 돌아가기', 'Back to News')}</Button>
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <Link to={`${prefix}/news`}>
            <Button variant="ghost" className={styles.backButton}>
              <ArrowLeft className="h-4 w-4" />
              {t('목록으로', 'Back to List')}
            </Button>
          </Link>
          <Badge variant="secondary" className={styles.heroBadge}>{article.category[lang]}</Badge>
          <h1 className={styles.heroTitle}>
            {article.title[lang]}
          </h1>
          <div className={styles.heroMeta}>
            <Calendar className="h-4 w-4" />
            {article.date}
          </div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className={styles.contentWrap}>
          <article className={styles.article}>
            {article.content[lang].split('\n').map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>{paragraph}</p>
            ))}
          </article>

          <div className={styles.footerRow}>
            <Link to={`${prefix}/news`}>
              <Button variant="outline" className={styles.buttonGap}>
                <ArrowLeft className="h-4 w-4" />
                {t('목록으로', 'Back to List')}
              </Button>
            </Link>
            <Button variant="ghost" className={styles.buttonGap}>
              <Share2 className="h-4 w-4" />
              {t('공유하기', 'Share')}
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="muted">
        <div className={styles.ctaWrap}>
          <h2 className={styles.ctaTitle}>
            {t('더 궁금한 점이 있으신가요?', 'Have More Questions?')}
          </h2>
          <Link to={`${prefix}/contact`}>
            <Button size="lg">{t('문의하기', 'Contact Us')}</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default NewsDetailPage;
