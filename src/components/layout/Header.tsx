import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import styles from '@/styles/components/Header.module.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const prefix = language === 'en' ? '/en' : '';

  const navigation = [
    { name: t('회사소개', 'About'), href: `${prefix}/about` },
    {
      name: t('서비스', 'Services'),
      href: `${prefix}/services`,
      children: [
        { name: t('대기 환경', 'Air Quality'), href: `${prefix}/services/air` },
        { name: t('수질 환경', 'Water Quality'), href: `${prefix}/services/water` },
        { name: t('악취 환경', 'Odor Control'), href: `${prefix}/services/odor` },
      ],
    },
    { name: t('포트폴리오', 'Portfolio'), href: `${prefix}/portfolio` },
    { name: t('소식', 'News'), href: `${prefix}/news` },
    { name: t('문의', 'Contact'), href: `${prefix}/contact` },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navRow}>
          <Link to={prefix || '/'} className={styles.brand}>
            <div className={styles.brandIcon}>
              <span className={styles.brandSymbol}>삼</span>
            </div>
            <div className={styles.brandTitle}>
              <span className={styles.brandTitleText}>
                {t('삼양건설환경연구소', 'Samyang Environmental')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={styles.navButton}>
                      {item.name}
                      <ChevronDown className={styles.navIcon} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link to={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.name} to={item.href}>
                  <Button variant="ghost">{item.name}</Button>
                </Link>
              )
            )}
          </div>

          <div className={styles.actions}>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className={styles.langButton}>
                  <Globe className={styles.langIcon} />
                  {language === 'ko' ? '한국어' : 'EN'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('ko')}>
                  한국어
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to={`${prefix}/contact`}>
              <Button size="sm" className={styles.quoteButton}>
                {t('견적 문의', 'Get a Quote')}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavList}>
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className={styles.mobileGroup}>
                      <span className={styles.mobileSectionTitle}>
                        {item.name}
                      </span>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={styles.mobileChildLink}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={styles.mobileLink}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to={`${prefix}/contact`}
                className={styles.mobileQuote}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className={styles.mobileQuoteButton}>{t('견적 문의', 'Get a Quote')}</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
