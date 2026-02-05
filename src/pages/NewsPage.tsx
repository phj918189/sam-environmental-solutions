import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import PageHero from '@/components/common/PageHero';
import styles from '@/styles/pages/NewsPage.module.css';

const newsItems = [
  {
    id: '1',
    category: { ko: '공지사항', en: 'Notice' },
    title: { ko: '2024년 신년 인사말씀', en: '2024 New Year Greetings' },
    date: '2024-01-02',
    excerpt: {
      ko: '새해 복 많이 받으세요. 삼양건설환경연구소은 올해도 더 나은 환경 서비스를 제공하기 위해 노력하겠습니다.',
      en: 'Happy New Year. Samyang Environmental will continue to strive to provide better environmental services this year.'
    }
  },
  {
    id: '2',
    category: { ko: '뉴스', en: 'News' },
    title: { ko: '환경측정분석 서비스 확대 안내', en: 'Environmental Measurement Analysis Service Expansion' },
    date: '2023-12-15',
    excerpt: {
      ko: '삼양건설환경연구소이 악취측정대행업 등록을 완료하여 대기, 수질, 악취 분야의 종합 환경 서비스를 제공합니다.',
      en: 'Samyang Environmental has completed odor measurement agency registration to provide comprehensive environmental services.'
    }
  },
  {
    id: '3',
    category: { ko: '자료', en: 'Resources' },
    title: { ko: '대기오염물질 배출시설 관리 가이드', en: 'Air Pollutant Emission Facility Management Guide' },
    date: '2023-11-20',
    excerpt: {
      ko: '배출시설 관리에 필요한 기본 사항과 법적 의무사항을 정리한 가이드를 제공합니다.',
      en: 'A guide summarizing the basics and legal obligations for emission facility management.'
    }
  },
  {
    id: '4',
    category: { ko: '뉴스', en: 'News' },
    title: { ko: '신규 수질분석 장비 도입', en: 'New Water Quality Analysis Equipment Introduced' },
    date: '2023-10-10',
    excerpt: {
      ko: '보다 정확하고 신속한 수질 분석을 위해 최신 분석 장비를 도입하였습니다.',
      en: 'We have introduced the latest analytical equipment for more accurate and faster water quality analysis.'
    }
  },
  {
    id: '5',
    category: { ko: '자료', en: 'Resources' },
    title: { ko: '악취 민원 대응 매뉴얼', en: 'Odor Complaint Response Manual' },
    date: '2023-09-05',
    excerpt: {
      ko: '악취 민원 발생 시 효과적인 대응 방법과 절차를 안내하는 매뉴얼입니다.',
      en: 'A manual guiding effective response methods and procedures for odor complaints.'
    }
  },
];

const NewsPage = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';
  const lang = language as 'ko' | 'en';

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('소식 & 자료', 'News & Resources')}
        subtitle={t(
          '삼양건설환경연구소의 최신 소식과 유용한 자료를 확인하세요.',
          'Stay updated with our latest news and useful resources.'
        )}
      />

      {/* News List */}
      <Section>
        <div className={styles.listWrap}>
          {newsItems.map((item) => (
            <Link key={item.id} to={`${prefix}/news/${item.id}`}>
              <Card className={styles.card}>
                <CardHeader>
                  <div className={styles.cardHeaderRow}>
                    <Badge variant="secondary">{item.category[lang]}</Badge>
                    <span className={styles.dateText}>
                      <Calendar className={styles.dateIcon} />
                      {item.date}
                    </span>
                  </div>
                  <CardTitle className={styles.cardTitle}>
                    {item.title[lang]}
                  </CardTitle>
                  <CardDescription className={styles.cardDescription}>
                    {item.excerpt[lang]}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className={styles.readMore}>
                    {t('자세히 보기', 'Read More')}
                    <ArrowRight className={styles.readMoreIcon} />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default NewsPage;
