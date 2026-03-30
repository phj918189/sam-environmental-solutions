import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, MapPin, Calendar, Building, Image } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { portfolioDetails, categoryInfo } from '@/data/portfolio';
import styles from '@/styles/pages/PortfolioDetailPage.module.css';

const PortfolioDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { lang, prefix, t } = useLanguage();

  const project = portfolioDetails[id as keyof typeof portfolioDetails];

  if (!project) {
    return (
      <Section>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('portfolio.notFound')}</h1>
          <Link to={`${prefix}/portfolio`}>
            <Button>{t('portfolio.backToPortfolio')}</Button>
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
              {t('common.backToList')}
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
            <h2 className={styles.sectionTitle}>{t('portfolio.overview')}</h2>
            <p className="text-muted-foreground leading-relaxed">{project.overview[lang]}</p>
          </div>

          {/* Challenge */}
          <div>
            <h2 className={styles.sectionTitle}>{t('portfolio.challenge')}</h2>
            <div className={styles.challengeBox}>
              <p className="text-muted-foreground leading-relaxed">{project.challenge[lang]}</p>
            </div>
          </div>

          {/* Solution */}
          <div>
            <h2 className={styles.sectionTitle}>{t('portfolio.solution')}</h2>
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
            <h2 className={styles.sectionTitle}>{t('portfolio.results')}</h2>
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
            <h2 className={styles.sectionTitle}>{t('portfolio.photos')}</h2>
            <div className={styles.mediaGrid}>
              {[1, 2].map((i) => (
                <div key={i} className={styles.mediaBox}>
                  <div className={styles.mediaText}>
                    <Image className="h-12 w-12 mx-auto mb-2" />
                    <span className={styles.mediaLabel}>{t('portfolio.photoComing')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PortfolioDetailPage;
