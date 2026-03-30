import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import PageHero from '@/components/common/PageHero';
import { newsItems } from '@/data/news';
import styles from '@/styles/pages/NewsPage.module.css';

const NewsPage = () => {
  const { lang, prefix, t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('news.title')}
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
              <Card className={`${styles.card} group`}>
                <CardHeader>
                  <div className={styles.cardHeaderRow}>
                    <Badge variant="secondary">{item.category[lang]}</Badge>
                    <span className={styles.dateText}>
                      <Calendar className="h-4 w-4" />
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
                    {t('common.readMore')}
                    <ArrowRight className="h-4 w-4" />
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
