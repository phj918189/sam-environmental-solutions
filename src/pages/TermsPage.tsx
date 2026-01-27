import { useLanguage } from '@/contexts/LanguageContext';
import LegalPageLayout from '@/components/common/LegalPageLayout';
import styles from '@/styles/common/LegalPage.module.css';

const TermsPage = () => {
  const { t } = useLanguage();

  return (
    <LegalPageLayout title={t('이용약관', 'Terms of Service')}>
      <p className={styles.updated}>
        {t('최종 수정일: 2024년 1월 1일', 'Last updated: January 1, 2024')}
      </p>

          <h2>{t('제1조 (목적)', 'Article 1 (Purpose)')}</h2>
          <p>
            {t(
              '이 약관은 삼양건설환경연구소(이하 "회사")이 제공하는 서비스의 이용조건 및 절차, 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.',
              'These Terms govern the conditions and procedures for using services provided by Samyang Environmental Construction Research Institute ("Company"), and define the rights, obligations, and responsibilities of the Company and users.'
            )}
          </p>

          <h2>{t('제2조 (정의)', 'Article 2 (Definitions)')}</h2>
          <p>
            {t(
              '"서비스"란 회사가 제공하는 환경 측정, 분석, 컨설팅 등 일체의 서비스를 의미합니다.',
              '"Service" refers to all services provided by the Company, including environmental measurement, analysis, and consulting.'
            )}
          </p>

          <h2>{t('제3조 (서비스의 제공)', 'Article 3 (Service Provision)')}</h2>
          <p>
            {t(
              '회사는 다음과 같은 서비스를 제공합니다:',
              'The Company provides the following services:'
            )}
          </p>
          <ul>
            <li>{t('대기오염물질 측정 및 분석', 'Air pollutant measurement and analysis')}</li>
            <li>{t('수질오염물질 분석', 'Water pollutant analysis')}</li>
            <li>{t('악취 측정 및 분석', 'Odor measurement and analysis')}</li>
            <li>{t('환경 컨설팅', 'Environmental consulting')}</li>
          </ul>

          <h2>{t('제4조 (이용자의 의무)', 'Article 4 (User Obligations)')}</h2>
          <p>
            {t(
              '이용자는 서비스 이용 시 관련 법령 및 이 약관의 규정을 준수해야 합니다.',
              'Users must comply with relevant laws and the provisions of these Terms when using the Service.'
            )}
          </p>

          <h2>{t('제5조 (책임의 제한)', 'Article 5 (Limitation of Liability)')}</h2>
          <p>
            {t(
              '회사는 천재지변, 전쟁, 기타 불가항력적 사유로 인해 서비스를 제공할 수 없는 경우 책임이 면제됩니다.',
              'The Company is not liable for failure to provide services due to force majeure such as natural disasters, war, or other unavoidable circumstances.'
            )}
          </p>

          <h2>{t('제6조 (분쟁 해결)', 'Article 6 (Dispute Resolution)')}</h2>
          <p>
            {t(
              '본 약관에 관한 분쟁은 대한민국 법률에 따르며, 회사 소재지 관할 법원을 관할로 합니다.',
              'Disputes regarding these Terms shall be governed by Korean law, and the court with jurisdiction over the Company\'s location shall have jurisdiction.'
            )}
          </p>
    </LegalPageLayout>
  );
};

export default TermsPage;
