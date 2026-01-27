import { Phone, FileText, Users, Microscope, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '@/components/ui/section';
import ProcessSteps from '@/components/common/ProcessSteps';

const ProcessSection = () => {
  const { t } = useLanguage();

  const processSteps = [
    { icon: Phone, title: t('상담', 'Consultation'), description: t('전문가 상담 및 현장 파악', 'Expert consultation and site assessment') },
    { icon: ClipboardCheck, title: t('현장조사', 'Site Survey'), description: t('현장 방문 및 시료 채취', 'On-site visit and sampling') },
    { icon: Microscope, title: t('분석', 'Analysis'), description: t('정밀 분석 및 데이터 처리', 'Precision analysis and data processing') },
    { icon: FileText, title: t('보고', 'Reporting'), description: t('종합 보고서 작성 및 제출', 'Comprehensive report preparation') },
    { icon: Users, title: t('사후관리', 'Follow-up'), description: t('지속적인 모니터링 지원', 'Ongoing monitoring support') },
  ];

  return (
    <Section variant="muted">
      <SectionHeader
        title={t('업무 프로세스', 'Our Process')}
        subtitle={t(
          '체계적인 절차로 정확하고 신뢰할 수 있는 결과를 제공합니다.',
          'Systematic procedures ensure accurate and reliable results.'
        )}
      />
      <ProcessSteps steps={processSteps} />
    </Section>
  );
};

export default ProcessSection;
