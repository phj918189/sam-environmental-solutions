import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, BarChart3, Building2, Phone, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/styles/pages/Home/VisualSection.module.css';

const VisualSection = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('ko-KR', { timeZone: 'Asia/Seoul', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setDate(now.toLocaleDateString(language === 'ko' ? 'ko-KR' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase());
    };
    updateDateTime();
    const id = setInterval(updateDateTime, 1000);
    return () => clearInterval(id);
  }, [language]);

  const tagLinks = [
    { label: t('home.tagAir'), href: `${prefix}/services/air` },
    { label: t('home.tagWater'), href: `${prefix}/services/water` },
    { label: t('home.tagOdor'), href: `${prefix}/services/odor` },
    { label: t('home.designConstruction'), href: `${prefix}/portfolio` },
    { label: t('home.precisionAnalysis'), href: `${prefix}/laboratory` },
  ];

  const cards = [
    {
      title: t('nav.services'),
      icon: FileText,
      items: [
        { label: t('nav.airQuality'), href: `${prefix}/services/air` },
        { label: t('nav.waterQuality'), href: `${prefix}/services/water` },
        { label: t('nav.odorControl'), href: `${prefix}/services/odor` },
      ],
    },
    {
      title: t('nav.laboratory'),
      icon: BarChart3,
      items: [
        { label: t('home.labOverview'), href: `${prefix}/laboratory` },
        { label: t('home.certificationsLabel'), href: `${prefix}/laboratory` },
      ],
    },
    {
      title: t('home.designBuild'),
      icon: Building2,
      items: [
        { label: t('nav.portfolio'), href: `${prefix}/portfolio` },
      ],
    },
    {
      title: t('home.contactLabel'),
      icon: Phone,
      items: [
        { label: t('nav.getQuote'), href: `${prefix}/contact` },
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.background} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.leftCol}>
          <h1 className={styles.title}>
            {t('home.heroTitle')}
            <br />
            <strong>{t('home.heroCompany')}</strong>
          </h1>
          <p className={styles.tagline}>            
            {t('home.heroTagline1')}<br />
            {t('home.heroTagline2')}
          </p>
          <div className={styles.tagRow}>
            {tagLinks.map((tag) => (
              <Link key={tag.label} to={tag.href} className={styles.tag}>
                {tag.label}
              </Link>
            ))}
          </div>
          <div className={styles.clock}>
            <span className={styles.time}>{time}</span>
            <span className={styles.date}>{date}</span>
          </div>
        </div>
        <div className={styles.cardsGrid}>
          {cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconWrap}>
                  <card.icon className={styles.cardIcon} />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
              <ul className={styles.cardList}>
                {card.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className={styles.cardLink}>
                      {item.label}
                      <ChevronRight className={styles.chevron} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualSection;
