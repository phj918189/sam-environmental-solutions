import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/styles/components/Footer.module.css';

const Footer = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.logoWrap}>
            <div className={styles.logoRow}>
              <div className={styles.logoIcon}>
                <span className={styles.logoSymbol}>삼</span>
              </div>
              <span className={styles.logoText}>
                {t('삼양건설환경연구소', 'Samyang Environmental')}
              </span>
            </div>
            <p className={styles.description}>
              {t(
                '대기 · 수질 · 악취 환경 전문 기관',
                'Air · Water · Odor Environmental Specialists'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.sectionTitle}>{t('바로가기', 'Quick Links')}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to={`${prefix}/about`} className={styles.link}>
                  {t('회사소개', 'About Us')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/services/air`} className={styles.link}>
                  {t('대기 환경', 'Air Quality')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/services/water`} className={styles.link}>
                  {t('수질 환경', 'Water Quality')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/services/odor`} className={styles.link}>
                  {t('악취 환경', 'Odor Control')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={styles.sectionTitle}>{t('연락처', 'Contact')}</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin className={`${styles.contactIcon} ${styles.contactIconTop}`} />
                <span>
                  {t(
                    '대전광역시 유성구 (상세주소)',
                    'Yuseong-gu, Daejeon, South Korea'
                  )}
                </span>
              </li>
              <li className={styles.contactItemInline}>
                <Phone className={styles.contactIcon} />
                <span>042-000-0000</span>
              </li>
              <li className={styles.contactItemInline}>
                <Mail className={styles.contactIcon} />
                <span>info@samyang-env.co.kr</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className={styles.sectionTitle}>{t('영업시간', 'Business Hours')}</h3>
            <ul className={styles.businessList}>
              <li>{t('월-금: 09:00 - 18:00', 'Mon-Fri: 09:00 - 18:00')}</li>
              <li>{t('토/일/공휴일: 휴무', 'Sat/Sun/Holidays: Closed')}</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomRow}>
            <p>
              © {new Date().getFullYear()} {t('삼양건설환경연구소', 'Samyang Environmental Construction Research Institute')}. {t('All rights reserved.', 'All rights reserved.')}
            </p>
            <div className={styles.bottomLinks}>
              <Link to={`${prefix}/privacy`} className={styles.link}>
                {t('개인정보처리방침', 'Privacy Policy')}
              </Link>
              <Link to={`${prefix}/terms`} className={styles.link}>
                {t('이용약관', 'Terms of Service')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
