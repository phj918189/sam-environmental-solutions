/**
 * 홈 페이지 데이터
 * - 차트, 인증서, 프로세스 단계
 */
import type { LucideIcon } from 'lucide-react';
import { Phone, ClipboardCheck, Microscope, FileText, Users } from 'lucide-react';

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

export const chartData = [
  { name: '대기환경', value: 35, color: 'hsl(210, 70%, 45%)' },
  { name: '수질환경', value: 40, color: 'hsl(190, 70%, 45%)' },
  { name: '악취환경', value: 25, color: 'hsl(160, 60%, 40%)' },
];

export const chartConfig = {
  대기환경: { color: 'hsl(210, 70%, 45%)' },
  수질환경: { color: 'hsl(190, 70%, 45%)' },
  악취환경: { color: 'hsl(160, 60%, 40%)' },
};

export const certificationNames = [
  { ko: '대기 측정대행업 등록증', en: 'Air Measurement Agency' },
  { ko: '수질 측정대행업 등록증', en: 'Water Measurement Agency' },
  { ko: '악취 측정대행업 등록증', en: 'Odor Measurement Agency' },
  { ko: '대기환경 관리 대행기관 지정서', en: 'Air Environment Management' },
  { ko: '수질환경 관리 대행기관 지정서', en: 'Water Environment Management' },
  { ko: '개인하수처리시설 설계·시공업 등록증', en: 'Sewage Facility Registration' },
  { ko: '건설업 등록증', en: 'Construction Registration' },
];
