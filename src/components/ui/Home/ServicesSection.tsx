import { Link } from 'react-router-dom';
import { Wind, Droplets, Leaf, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import styles from '@/styles/pages/Home/ServicesSection.module.css';

const ServicesSection = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';

  const services = [
    {
      icon: Wind,
      title: t('대기 환경', 'Air Quality'),
      description: t(
        '대기오염물질 측정, 배출시설 관리, 환경영향평가 등 종합 대기 환경 서비스',
        'Comprehensive air quality services including emission measurement, facility management, and environmental impact assessment'
      ),
      href: `${prefix}/services/air`,
    },
    {
      icon: Droplets,
      title: t('수질 환경', 'Water Quality'),
      description: t(
        '수질오염물질 분석, 폐수처리 컨설팅, 수질 모니터링 시스템 구축',
        'Water pollutant analysis, wastewater treatment consulting, and water quality monitoring systems'
      ),
      href: `${prefix}/services/water`,
    },
    {
      icon: Leaf,
      title: t('악취 환경', 'Odor Control'),
      description: t(
        '악취물질 측정·분석, 저감시설 설계, 악취 민원 대응 지원',
        'Odor measurement and analysis, reduction facility design, and complaint response support'
      ),
      href: `${prefix}/services/odor`,
    },
  ];

  return (
    <Section>
      <SectionHeader
        title={t('전문 서비스', 'Our Services')}
        subtitle={t(
          '환경 문제의 정확한 진단부터 해결까지, 전 과정을 책임집니다.',
          'From accurate diagnosis to resolution, we take responsibility for the entire process.'
        )}
      />
      <div className={styles.grid}>
        {services.map((service) => (
          <Card key={service.title} className={styles.card}>
            <CardHeader>
              <div className={styles.iconWrap}>
                <service.icon className={styles.serviceIcon} />
              </div>
              <CardTitle className={styles.title}>{service.title}</CardTitle>
              <CardDescription className={styles.description}>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to={service.href}>
                <Button variant="ghost" className={styles.linkButton}>
                  {t('자세히 보기', 'Learn More')}
                  <ArrowRight className={styles.linkIcon} />
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
