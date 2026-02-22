import { useLanguage } from '@/contexts/LanguageContext';
import LegalPageLayout from '@/components/common/LegalPageLayout';
import { CONTACT } from '@/data/contact';
import styles from '@/styles/common/LegalPage.module.css';

const PrivacyPage = () => {
  const { t } = useLanguage();

  return (
    <LegalPageLayout title={t('privacy.title')}>
      <p className={styles.updated}>
        {t('privacy.lastUpdated')}
      </p>

          <h2>{t('privacy.section1')}</h2>
          <p>
            {t('privacy.section1Content')}
          </p>
          <ul>
            <li>{t('privacy.purposeInquiry')}</li>
            <li>{t('privacy.purposeService')}</li>
            <li>{t('privacy.purposeMarketing')}</li>
          </ul>

          <h2>{t('privacy.section2')}</h2>
          <ul>
            <li>{t('privacy.required')}</li>
            <li>{t('privacy.optional')}</li>
          </ul>

          <h2>{t('privacy.section3')}</h2>
          <p>
            {t('privacy.section3Content')}
          </p>

          <h2>{t('privacy.section4')}</h2>
          <p>
            {t('privacy.section4Content')}
          </p>

          <h2>{t('privacy.section5')}</h2>
          <p>
            {t('privacy.dpoName')}<br />
            {t('footer.contact')}: <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a><br />
            {t('contact.email')}: <a href={`mailto:${CONTACT.privacyEmail}`}>{CONTACT.privacyEmail}</a>
          </p>

          <h2>{t('privacy.section6')}</h2>
          <p>
            {t('privacy.section6Content')}
          </p>
    </LegalPageLayout>
  );
};

export default PrivacyPage;
