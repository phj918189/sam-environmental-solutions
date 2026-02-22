import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { newsDetails } from '@/data/news';
import styles from '@/styles/pages/NewsDetailPage.module.css';

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
          <h1 className="text-2xl font-bold mb-4">{t('news.notFound')}</h1>
          <Link to={`${prefix}/news`}>
            <Button>{t('news.backToNews')}</Button>
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
              {t('common.backToList')}
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
                {t('common.backToList')}
              </Button>
            </Link>
            <Button variant="ghost" className={styles.buttonGap}>
              <Share2 className="h-4 w-4" />
              {t('common.share')}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default NewsDetailPage;
