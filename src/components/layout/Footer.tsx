import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo_2.svg';
import { CONTACT } from '@/data/contact';
import styles from '@/styles/components/Footer.module.css';

const Footer = () => {
  const { t, prefix } = useLanguage();

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
              {t('footer.tagline')}
            </p>
            <p className="text-sm text-primary-foreground/70 mt-2">
              {t('footer.since')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={styles.sectionTitle}>{t('footer.contact')}</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t(CONTACT.addressKo, CONTACT.addressEn)}</span>
              </li>
              <li className={styles.contactItemInline}>
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${CONTACT.phone}`} className={styles.contactLink}>
                  {CONTACT.phone}
                </a>
              </li>
              <li className={styles.contactItemInline}>
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className={styles.contactLink}>
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className={styles.sectionTitle}>{t('footer.businessHours')}</h3>
            <ul className={styles.businessList}>
              <li>{t(CONTACT.businessHoursKo, CONTACT.businessHoursEn)}</li>
              <li>{t(CONTACT.closedDaysKo, CONTACT.closedDaysEn)}</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomRow}>
            <p>
              © {new Date().getFullYear()} {t('footer.companyName')}. {t('common.allRightsReserved')}
            </p>
            <div className={styles.bottomLinks}>
              <Link to={`${prefix}/news`} className={styles.link}>
                {t('nav.news')}
              </Link>
              <Link to={`${prefix}/privacy`} className={styles.link}>
                {t('footer.privacyPolicy')}
              </Link>
              <Link to={`${prefix}/terms`} className={styles.link}>
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
