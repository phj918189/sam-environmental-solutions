import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import logo from '@/assets/logo.png';
import logo from '@/assets/logo_2.svg';
import styles from '@/styles/components/Header.module.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, prefix, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t('nav.about'), href: `${prefix}/about` },
    {
      name: t('nav.services'),
      href: `${prefix}/services`,
      children: [
        { name: t('nav.airQuality'), href: `${prefix}/services/air` },
        { name: t('nav.waterQuality'), href: `${prefix}/services/water` },
        { name: t('nav.odorControl'), href: `${prefix}/services/odor` },
      ],
    },
    { name: t('nav.portfolio'), href: `${prefix}/portfolio` },
    { name: t('nav.laboratory'), href: `${prefix}/laboratory` },
    // { name: t('nav.news'), href: `${prefix}/news` }, // 소식 탭 — 임시 비활성화 (추후 재사용 가능)
    { name: t('nav.contact'), href: `${prefix}/contact` },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navRow}>
          <Link to={prefix || '/'} className={styles.brand}>
            <img src={logo} alt="삼양건설환경연구소" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={`${styles.navButton} gap-1`}>
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
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
                  <Button variant="ghost" className={styles.navButton}>
                    {item.name}
                  </Button>
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className={styles.langButton}>
                  <Globe className="h-4 w-4" />
                  {language === 'ko' ? 'KO' : 'EN'}
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

            <Button
              variant="ghost"
              size="icon"
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                    <div className="space-y-1">
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
                <Button className="w-full">{t('nav.getQuote')}</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
