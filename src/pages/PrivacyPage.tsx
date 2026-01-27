import { useLanguage } from '@/contexts/LanguageContext';
import LegalPageLayout from '@/components/common/LegalPageLayout';
import styles from '@/styles/common/LegalPage.module.css';

const PrivacyPage = () => {
  const { t } = useLanguage();

  return (
    <LegalPageLayout title={t('개인정보처리방침', 'Privacy Policy')}>
      <p className={styles.updated}>
        {t('최종 수정일: 2024년 1월 1일', 'Last updated: January 1, 2024')}
      </p>

          <h2>{t('1. 개인정보의 수집 및 이용 목적', '1. Purpose of Collecting Personal Information')}</h2>
          <p>
            {t(
              '삼양건설환경연구소(이하 "회사")은 다음의 목적을 위해 개인정보를 수집하고 이용합니다.',
              'Samyang Environmental Construction Research Institute ("Company") collects and uses personal information for the following purposes.'
            )}
          </p>
          <ul>
            <li>{t('문의 및 상담 응대', 'Responding to inquiries and consultations')}</li>
            <li>{t('서비스 제공 및 계약 이행', 'Service provision and contract fulfillment')}</li>
            <li>{t('마케팅 및 홍보 (동의 시)', 'Marketing and promotion (with consent)')}</li>
          </ul>

          <h2>{t('2. 수집하는 개인정보 항목', '2. Personal Information Collected')}</h2>
          <ul>
            <li>{t('필수: 성명, 연락처, 이메일', 'Required: Name, phone number, email')}</li>
            <li>{t('선택: 회사명, 문의 내용', 'Optional: Company name, inquiry details')}</li>
          </ul>

          <h2>{t('3. 개인정보의 보유 및 이용 기간', '3. Retention Period')}</h2>
          <p>
            {t(
              '수집된 개인정보는 수집 목적이 달성된 후 즉시 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.',
              'Collected personal information is destroyed immediately after the purpose is achieved. However, if required by law, it will be retained for the specified period.'
            )}
          </p>

          <h2>{t('4. 개인정보의 제3자 제공', '4. Third-Party Disclosure')}</h2>
          <p>
            {t(
              '회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 법령에 따라 요구되는 경우는 예외로 합니다.',
              'The Company does not disclose personal information to third parties in principle. Exceptions are made when required by law.'
            )}
          </p>

          <h2>{t('5. 개인정보 보호책임자', '5. Data Protection Officer')}</h2>
          <p>
            {t('성명: (담당자명)', 'Name: (DPO Name)')}<br />
            {t('연락처: 042-000-0000', 'Contact: 042-000-0000')}<br />
            {t('이메일: privacy@samyang-env.co.kr', 'Email: privacy@samyang-env.co.kr')}
          </p>

          <h2>{t('6. 권리 행사 방법', '6. Exercising Your Rights')}</h2>
          <p>
            {t(
              '이용자는 언제든지 개인정보의 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.',
              'Users can request access, correction, deletion, or suspension of processing of their personal information at any time.'
            )}
          </p>
    </LegalPageLayout>
  );
};

export default PrivacyPage;
