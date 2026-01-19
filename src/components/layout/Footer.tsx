import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">삼</span>
              </div>
              <span className="font-bold">
                {t('삼양환경건설연구원', 'Samyang Environmental')}
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {t(
                '대기 · 수질 · 악취 환경 전문 기관',
                'Air · Water · Odor Environmental Specialists'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('바로가기', 'Quick Links')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to={`${prefix}/about`} className="hover:text-primary-foreground transition-colors">
                  {t('회사소개', 'About Us')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/services/air`} className="hover:text-primary-foreground transition-colors">
                  {t('대기 환경', 'Air Quality')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/services/water`} className="hover:text-primary-foreground transition-colors">
                  {t('수질 환경', 'Water Quality')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/services/odor`} className="hover:text-primary-foreground transition-colors">
                  {t('악취 환경', 'Odor Control')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t('연락처', 'Contact')}</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {t(
                    '대전광역시 유성구 (상세주소)',
                    'Yuseong-gu, Daejeon, South Korea'
                  )}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>042-000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@samyang-env.co.kr</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold mb-4">{t('영업시간', 'Business Hours')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{t('월-금: 09:00 - 18:00', 'Mon-Fri: 09:00 - 18:00')}</li>
              <li>{t('토/일/공휴일: 휴무', 'Sat/Sun/Holidays: Closed')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} {t('삼양환경건설연구원', 'Samyang Environmental Construction Research Institute')}. {t('All rights reserved.', 'All rights reserved.')}
            </p>
            <div className="flex gap-4">
              <Link to={`${prefix}/privacy`} className="hover:text-primary-foreground transition-colors">
                {t('개인정보처리방침', 'Privacy Policy')}
              </Link>
              <Link to={`${prefix}/terms`} className="hover:text-primary-foreground transition-colors">
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
