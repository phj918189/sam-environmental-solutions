import type { LucideIcon } from 'lucide-react';
import {
  Phone,
  ClipboardCheck,
  Microscope,
  FileText,
  Users,
  ShieldCheck,
  Building2,
  BadgeCheck,
  FlaskConical,
  Wind,
  Droplets,
  Factory,
} from 'lucide-react';

export const processStepsData: Array<{
  icon: LucideIcon;
  title: { ko: string; en: string };
  description: { ko: string; en: string };
}> = [
  { icon: Phone, title: { ko: '상담', en: 'Consultation' }, description: { ko: '전문가 상담 및 현장 파악', en: 'Expert consultation and site assessment' } },
  { icon: ClipboardCheck, title: { ko: '현장조사', en: 'Site Survey' }, description: { ko: '현장 방문 및 시료 채취', en: 'On-site visit and sampling' } },
  { icon: Microscope, title: { ko: '분석', en: 'Analysis' }, description: { ko: '정밀 분석 및 데이터 처리', en: 'Precision analysis and data processing' } },
  { icon: FileText, title: { ko: '보고', en: 'Reporting' }, description: { ko: '종합 보고서 작성 및 제출', en: 'Comprehensive report preparation' } },
  { icon: Users, title: { ko: '사후관리', en: 'Follow-up' }, description: { ko: '지속적인 모니터링 지원', en: 'Ongoing monitoring support' } },
];

export const trustStats = [
  {
    value: '1992',
    suffix: '',
    label: { ko: '설립 연도', en: 'Established' },
  },
  {
    value: '30+',
    suffix: '',
    label: { ko: '환경 분야 경험', en: 'Years of Experience' },
  },
  {
    value: '60+',
    suffix: '',
    label: { ko: '시설·현장 대응 경험', en: 'Facility / Site Cases' },
  },
  {
    value: '100%',
    suffix: '',
    label: { ko: '책임 대응 중심 운영', en: 'Responsibility-focused Service' },
  },
];

export const trustHighlights: Array<{
  icon: LucideIcon;
  title: { ko: string; en: string };
  description: { ko: string; en: string };
}> = [
  {
    icon: ShieldCheck,
    title: { ko: '등록·지정 기반 수행', en: 'Registered & Designated Capabilities' },
    description: {
      ko: '환경 측정·관리 및 관련 등록·지정을 기반으로 업무를 수행합니다.',
      en: 'We operate based on environmental registrations and designations.',
    },
  },
  {
    icon: Building2,
    title: { ko: '현장 중심 대응', en: 'Site-focused Response' },
    description: {
      ko: '현장 진단, 문제 원인 파악, 개선 방향 제시까지 연결합니다.',
      en: 'From field diagnosis to root-cause review and improvement planning.',
    },
  },
  {
    icon: FlaskConical,
    title: { ko: '분석 기반 솔루션', en: 'Analysis-driven Solutions' },
    description: {
      ko: '정밀 분석과 데이터 해석을 통해 실질적인 대응 방향을 제안합니다.',
      en: 'We propose practical actions based on analysis and data interpretation.',
    },
  },
  {
    icon: BadgeCheck,
    title: { ko: '사후관리 지원', en: 'Follow-up Support' },
    description: {
      ko: '단발성 대응이 아니라 운영 안정화와 지속 관리까지 지원합니다.',
      en: 'We support not just one-time action but stable follow-up management.',
    },
  },
];

export const serviceCredibilityItems: Array<{
  icon: LucideIcon;
  title: { ko: string; en: string };
}> = [
  {
    icon: Wind,
    title: { ko: '대기 환경 측정·관리', en: 'Air Measurement & Management' },
  },
  {
    icon: Droplets,
    title: { ko: '수질 분석·처리 지원', en: 'Water Analysis & Treatment Support' },
  },
  {
    icon: Factory,
    title: { ko: '악취·시설 개선 대응', en: 'Odor & Facility Improvement' },
  },
];

export const certificationNames = [
  { ko: '대기 측정대행업 등록증', en: 'Air Measurement Agency' },
  { ko: '수질 측정대행업 등록증', en: 'Water Measurement Agency' },
  { ko: '악취 측정대행업 등록증', en: 'Odor Measurement Agency' },
  { ko: '대기환경 관리 대행기관 지정서', en: 'Air Environment Management' },
  { ko: '수질환경 관리 대행기관 지정서', en: 'Water Environment Management' },
  { ko: '개인하수처리시설 설계·시공업 등록증', en: 'Sewage Facility Registration' },
  { ko: '건설업 등록증', en: 'Construction Registration' },
];