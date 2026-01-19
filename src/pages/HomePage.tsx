import { Link } from 'react-router-dom';
import { Wind, Droplets, Leaf, ArrowRight, CheckCircle, Phone, FileText, Users, Award, Microscope, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import heroBg from '@/assets/hero-bg.jpg';

const HomePage = () => {
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

  const processSteps = [
    { icon: Phone, title: t('상담', 'Consultation'), description: t('전문가 상담 및 현장 파악', 'Expert consultation and site assessment') },
    { icon: ClipboardCheck, title: t('현장조사', 'Site Survey'), description: t('현장 방문 및 시료 채취', 'On-site visit and sampling') },
    { icon: Microscope, title: t('분석', 'Analysis'), description: t('정밀 분석 및 데이터 처리', 'Precision analysis and data processing') },
    { icon: FileText, title: t('보고', 'Reporting'), description: t('종합 보고서 작성 및 제출', 'Comprehensive report preparation') },
    { icon: Users, title: t('사후관리', 'Follow-up'), description: t('지속적인 모니터링 지원', 'Ongoing monitoring support') },
  ];

  const trustSignals = [
    { value: '500+', label: t('프로젝트 수행', 'Projects Completed') },
    { value: '15+', label: t('업력 (년)', 'Years Experience') },
    { value: '100%', label: t('고객 만족도', 'Client Satisfaction') },
    { value: '24/7', label: t('긴급 대응', 'Emergency Response') },
  ];

  const certifications = [
    t('환경측정분석대행업 등록', 'Environmental Measurement Agency Registration'),
    t('품질경영시스템 인증 (예정)', 'Quality Management Certification (Planned)'),
    t('환경영향평가 협력기관', 'Environmental Impact Assessment Partner'),
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t('대기 · 수질 · 악취', 'Air · Water · Odor')}
            <br />
            {t('환경 전문 기관', 'Environmental Specialists')}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            {t(
              '정확한 측정, 신뢰할 수 있는 분석, 체계적인 관리로 더 나은 환경을 만들어갑니다.',
              'Creating a better environment through accurate measurement, reliable analysis, and systematic management.'
            )}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 text-primary-foreground">
              <CheckCircle className="h-5 w-5" />
              <span>{t('정밀 측정·분석', 'Precision Analysis')}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 text-primary-foreground">
              <CheckCircle className="h-5 w-5" />
              <span>{t('맞춤형 컨설팅', 'Custom Consulting')}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 text-primary-foreground">
              <CheckCircle className="h-5 w-5" />
              <span>{t('신속한 보고', 'Fast Reporting')}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={`${prefix}/contact`}>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                {t('견적 문의하기', 'Request a Quote')}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to={`${prefix}/services/air`}>
              <Button size="lg" variant="hero">
                {t('서비스 알아보기', 'Explore Services')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section>
        <SectionHeader
          title={t('전문 서비스', 'Our Services')}
          subtitle={t(
            '환경 문제의 정확한 진단부터 해결까지, 전 과정을 책임집니다.',
            'From accurate diagnosis to resolution, we take responsibility for the entire process.'
          )}
        />
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={service.href}>
                  <Button variant="ghost" className="gap-2 p-0 h-auto text-primary hover:text-accent">
                    {t('자세히 보기', 'Learn More')}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section variant="muted">
        <SectionHeader
          title={t('업무 프로세스', 'Our Process')}
          subtitle={t(
            '체계적인 절차로 정확하고 신뢰할 수 있는 결과를 제공합니다.',
            'Systematic procedures ensure accurate and reliable results.'
          )}
        />
        <div className="grid gap-6 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.title} className="text-center relative">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="absolute top-8 left-[60%] w-[80%] h-0.5 bg-border hidden md:block last:hidden" />
              <h3 className="font-semibold mb-2">
                <span className="text-primary mr-2">{index + 1}.</span>
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust Signals */}
      <Section variant="primary">
        <div className="grid gap-8 md:grid-cols-4 text-center">
          {trustSignals.map((signal) => (
            <div key={signal.label}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{signal.value}</div>
              <div className="text-primary-foreground/80">{signal.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <SectionHeader
          title={t('인증 및 등록', 'Certifications & Registrations')}
          subtitle={t(
            '공인된 자격과 체계적인 품질관리로 신뢰를 드립니다.',
            'Certified qualifications and systematic quality management you can trust.'
          )}
        />
        <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-3 p-4 bg-muted rounded-lg"
            >
              <Award className="h-6 w-6 text-primary shrink-0" />
              <span className="text-sm font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="muted">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('환경 문제, 지금 상담하세요', 'Environmental Issues? Consult Now')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t(
              '전문가가 귀사의 환경 문제를 함께 해결해 드립니다. 무료 상담 및 견적을 요청하세요.',
              "Our experts will help solve your environmental challenges. Request a free consultation and quote."
            )}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={`${prefix}/contact`}>
              <Button size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                {t('문의하기', 'Contact Us')}
              </Button>
            </Link>
            <Link to={`${prefix}/portfolio`}>
              <Button size="lg" variant="outline">
                {t('수행 실적 보기', 'View Portfolio')}
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
