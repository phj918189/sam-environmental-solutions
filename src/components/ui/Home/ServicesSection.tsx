import { Link } from 'react-router-dom';
import { Wind, Droplets, Trash2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/styles/pages/Home/ServicesSection.module.css';

const ServicesSection = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';

  const services = [
    {
      icon: Wind,
      title: t('대기환경', 'Air Quality'),
      description: t(
        '굴뚝배출가스, 대기오염물질, 미세먼지 등 대기환경 측정 및 분석 서비스',
        'Stack emissions, air pollutants, particulate matter measurement and analysis'
      ),
      href: `${prefix}/services/air`,
    },
    {
      icon: Droplets,
      title: t('수질환경', 'Water Quality'),
      description: t(
        '폐수, 오수, 지하수 등 수질환경 측정 및 오수처리시설 설계·시공',
        'Wastewater, sewage, groundwater measurement and treatment facility design'
      ),
      href: `${prefix}/services/water`,
    },
    {
      icon: Trash2,
      title: t('악취환경', 'Odor Control'),
      description: t(
        '사업장 악취 측정, 분석 및 저감 컨설팅 서비스',
        'Industrial odor measurement, analysis, and reduction consulting'
      ),
      href: `${prefix}/services/odor`,
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.sectionTop}>
          <h2 className={styles.sectionTitle}>{t('사업영역', 'Our Services')}</h2>
          <p className={styles.sectionDesc}>
          {t(
            '대기·수질·악취 환경측정부터 시설 설계, 시공, 관리까지 원스톱 솔루션을 제공합니다.',
            'From environmental measurement to facility design, construction, and management.'
          )}
          </p>
          <Link to={`${prefix}/services/air`} className={styles.moreLink}>
            {t('더 보기', 'More')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <Link key={service.title} to={service.href} className={styles.card}>
              <div className={styles.iconWrap}>
                <service.icon className={styles.icon} />
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <span className={styles.cta}>
                <span>{t('자세히 보기', 'Learn More')}</span>
                <ArrowRight className={styles.ctaIcon} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
