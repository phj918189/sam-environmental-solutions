import { Link } from 'react-router-dom';
import { Wind, Droplets, Trash2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';
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
        'Stack emissions, air pollutants, particulate matter measurement and analysis services'
      ),
      href: `${prefix}/services/air`,
      features: [
        t('굴뚝배출가스 측정', 'Stack emission testing'),
        t('대기오염물질 분석', 'Air pollutant analysis'),
        t('미세먼지 모니터링', 'Particulate monitoring'),
      ],
    },
    {
      icon: Droplets,
      title: t('수질환경', 'Water Quality'),
      description: t(
        '폐수, 오수, 지하수 등 수질환경 측정 및 오수처리시설 설계·시공',
        'Wastewater, sewage, groundwater measurement and treatment facility design'
      ),
      href: `${prefix}/services/water`,
      features: [
        t('수질오염 측정·분석', 'Water pollution testing'),
        t('오수처리시설 설계', 'Treatment facility design'),
        t('환경영향평가 대행', 'EIA consulting'),
      ],
    },
    {
      icon: Trash2,
      title: t('악취환경', 'Odor Control'),
      description: t(
        '사업장 악취 측정, 분석 및 저감 컨설팅 서비스',
        'Industrial odor measurement, analysis, and reduction consulting services'
      ),
      href: `${prefix}/services/odor`,
      features: [
        t('악취물질 측정·분석', 'Odor substance testing'),
        t('악취저감 컨설팅', 'Odor reduction consulting'),
        t('악취방지시설 설계', 'Prevention facility design'),
      ],
    },
  ];

  return (
    <Section className="bg-secondary">
      <SectionHeader
        title={t('사업영역', 'Our Services')}
        subtitle={t(
          '환경측정부터 시설 설계, 시공, 관리까지 원스톱 솔루션',
          'One-stop solutions from measurement to facility design and management'
        )}
      />
      <div className={styles.grid}>
        {services.map((service) => (
          <Card key={service.title} className={`${styles.card} group`}>
            <CardContent className={styles.cardContent}>
              <div className={styles.iconWrap}>
                <service.icon className={styles.icon} />
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2" />
                    <span className={styles.featureText}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to={service.href} className="mt-auto">
                <Button variant="outline" className={`${styles.ctaButton} group`}>
                  {t('자세히 보기', 'Learn More')}
                  <ArrowRight className={styles.ctaIcon} />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;
