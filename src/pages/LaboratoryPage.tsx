import { Microscope, FlaskConical, Gauge, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/common/PageHero';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';

const LaboratoryPage = () => {
  const { t } = useLanguage();

  const equipment = [
    {
      category: t('대기분석 장비', 'Air Analysis Equipment'),
      icon: Gauge,
      items: [
        t('굴뚝배출가스측정기', 'Stack Gas Analyzer'),
        t('미세먼지측정기 (PM10, PM2.5)', 'Particulate Monitor (PM10, PM2.5)'),
        t('자동연속측정장치', 'Continuous Emission Monitoring System'),
        t('(장비 목록 추후 업데이트)', '(Equipment list to be updated)'),
      ],
    },
    {
      category: t('수질분석 장비', 'Water Analysis Equipment'),
      icon: FlaskConical,
      items: [
        t('분광광도계', 'Spectrophotometer'),
        t('TOC 분석기', 'TOC Analyzer'),
        t('BOD/COD 측정기', 'BOD/COD Meter'),
        t('(장비 목록 추후 업데이트)', '(Equipment list to be updated)'),
      ],
    },
    {
      category: t('악취분석 장비', 'Odor Analysis Equipment'),
      icon: Microscope,
      items: [
        t('관능시험 장비', 'Sensory Test Equipment'),
        t('악취물질 분석기 (GC-MS)', 'GC-MS Analyzer'),
        t('현장측정 장비', 'Field Measurement Equipment'),
        t('(장비 목록 추후 업데이트)', '(Equipment list to be updated)'),
      ],
    },
  ];

  const qualityFeatures = [
    {
      icon: Shield,
      title: t('품질관리시스템', 'Quality Management'),
      description: t(
        '체계적인 품질관리 프로세스로 정확하고 신뢰성 있는 분석 결과를 보장합니다.',
        'Systematic quality management process ensures accurate and reliable analysis results.'
      ),
    },
    {
      icon: CheckCircle,
      title: t('정도관리', 'Quality Assurance'),
      description: t(
        '정기적인 정도관리를 통해 분석 데이터의 정확도와 재현성을 검증합니다.',
        'Regular quality assurance verifies accuracy and reproducibility of analysis data.'
      ),
    },
  ];

  return (
    <>
      <PageHero
        title={t('분석실 소개', 'Laboratory')}
        subtitle={t(
          '최신 분석장비와 전문 인력으로 정확한 환경측정 서비스를 제공합니다.',
          'Providing accurate environmental measurement services with state-of-the-art equipment and expert staff.'
        )}
      />

      {/* Equipment Section */}
      <Section>
        <SectionHeader
          title={t('보유장비 현황', 'Equipment Overview')}
          subtitle={t(
            '대기, 수질, 악취 분야별 전문 분석장비를 보유하고 있습니다.',
            'We have specialized analysis equipment for air, water, and odor fields.'
          )}
        />
        <div className="grid gap-8 md:grid-cols-3">
          {equipment.map((category) => (
            <Card key={category.category} className="h-full">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <category.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Quality Section */}
      <Section className="bg-secondary">
        <SectionHeader
          title={t('품질관리', 'Quality Control')}
          subtitle={t(
            '정확한 분석 결과를 위한 체계적인 품질관리 시스템을 운영합니다.',
            'We operate a systematic quality management system for accurate analysis results.'
          )}
        />
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {qualityFeatures.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Placeholder for images */}
      <Section>
        <SectionHeader
          title={t('분석실 시설', 'Facilities')}
          subtitle={t(
            '분석실 사진 및 시설 현황은 추후 업데이트 예정입니다.',
            'Laboratory photos and facility status will be updated.'
          )}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground"
            >
              {t('이미지 추후 업데이트', 'Image to be updated')}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default LaboratoryPage;
