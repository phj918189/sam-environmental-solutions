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
    { label: t('# 대기환경', '# Air Quality'), href: `${prefix}/services/air` },
    { label: t('# 수질환경', '# Water Quality'), href: `${prefix}/services/water` },
    { label: t('# 악취환경', '# Odor Control'), href: `${prefix}/services/odor` },
    { label: t('# 시설 설계·시공', '# Design & Construction'), href: `${prefix}/portfolio` },
    { label: t('# 정밀 측정', '# Precision Analysis'), href: `${prefix}/laboratory` },
  ];

  const cards = [
    {
      title: t('사업영역', 'Services'),
      icon: FileText,
      items: [
        { label: t('대기환경', 'Air Quality'), href: `${prefix}/services/air` },
        { label: t('수질환경', 'Water Quality'), href: `${prefix}/services/water` },
        { label: t('악취환경', 'Odor Control'), href: `${prefix}/services/odor` },
      ],
    },
    {
      title: t('분석실', 'Laboratory'),
      icon: BarChart3,
      items: [
        { label: t('실험실 소개', 'Lab Overview'), href: `${prefix}/laboratory` },
        { label: t('인증 및 장비', 'Certifications'), href: `${prefix}/laboratory` },
      ],
    },
    {
      title: t('설계·시공', 'Design & Build'),
      icon: Building2,
      items: [
        { label: t('사업실적', 'Portfolio'), href: `${prefix}/portfolio` },
      ],
    },
    {
      title: t('상담', 'Contact'),
      icon: Phone,
      items: [
        { label: t('견적 문의', 'Request Quote'), href: `${prefix}/contact` },
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
            {t('환경측정 전문기관', 'Environmental Measurement')}
            <br />
            <strong>{t('삼양건설환경연구소', 'Samyang Environmental')}</strong>
          </h1>
          <p className={styles.tagline}>
            {t('대기·수질·악취 환경측정, 설계·시공, 정밀 분석', 'Air, water, odor measurement · Design · Precision analysis')}
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
              <card.icon className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>{card.title}</h3>
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
