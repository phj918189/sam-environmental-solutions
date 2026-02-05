import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';
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
              <img src={logo} alt="삼양건설환경연구소" className={styles.logo} />
            </div>
            <p className={styles.description}>
              {t(
                '대기 · 수질 · 악취 환경측정 전문기관',
                'Air · Water · Odor Environmental Specialists'
              )}
            </p>
            <p className="text-sm text-primary-foreground/70 mt-2">
              {t(
                '1992년 설립 이래 환경 통합 전문기업으로 성장',
                'Growing as an integrated environmental company since 1992'
              )}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={styles.sectionTitle}>{t('연락처', 'Contact')}</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {t(
                    '(주소 추후 입력)',
                    '(Address TBD)'
                  )}
                </span>
              </li>
              <li className={styles.contactItemInline}>
                <Phone className="h-4 w-4 shrink-0" />
                <span>(전화번호 추후 입력)</span>
              </li>
              <li className={styles.contactItemInline}>
                <Mail className="h-4 w-4 shrink-0" />
                <span>(이메일 추후 입력)</span>
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
              © {new Date().getFullYear()} {t('삼양건설환경연구소', 'Samyang Environmental Research Institute')}. {t('All rights reserved.', 'All rights reserved.')}
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
