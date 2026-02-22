import { useLanguage } from '@/contexts/LanguageContext';
import LegalPageLayout from '@/components/common/LegalPageLayout';
import styles from '@/styles/common/LegalPage.module.css';

const TermsPage = () => {
  const { t } = useLanguage();

  return (
    <LegalPageLayout title={t('terms.title')}>
      <p className={styles.updated}>
        {t('terms.lastUpdated')}
      </p>

          <h2>{t('terms.article1')}</h2>
          <p>
            {t('terms.article1Content')}
          </p>

          <h2>{t('terms.article2')}</h2>
          <p>
            {t('terms.article2Content')}
          </p>

          <h2>{t('terms.article3')}</h2>
          <p>
            {t('terms.article3Content')}
          </p>
          <ul>
            <li>{t('terms.service1')}</li>
            <li>{t('terms.service2')}</li>
            <li>{t('terms.service3')}</li>
            <li>{t('terms.service4')}</li>
          </ul>

          <h2>{t('terms.article4')}</h2>
          <p>
            {t('terms.article4Content')}
          </p>

          <h2>{t('terms.article5')}</h2>
          <p>
            {t('terms.article5Content')}
          </p>

          <h2>{t('terms.article6')}</h2>
          <p>
            {t('terms.article6Content')}
          </p>
    </LegalPageLayout>
  );
};

export default TermsPage;
