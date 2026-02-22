/**
 * 분석실 데이터
 * - 장비, 품질관리
 */
import type { LucideIcon } from 'lucide-react';
import { Gauge, FlaskConical, Microscope, Shield, CheckCircle } from 'lucide-react';

export const equipmentCategories = [
  {
    key: 'air',
    category: { ko: '대기분석 장비', en: 'Air Analysis Equipment' },
    icon: Gauge,
    items: [
      { ko: '굴뚝배출가스측정기', en: 'Stack Gas Analyzer' },
      { ko: '미세먼지측정기 (PM10, PM2.5)', en: 'Particulate Monitor (PM10, PM2.5)' },
      { ko: '자동연속측정장치', en: 'Continuous Emission Monitoring System' },
      { ko: '(장비 목록 추후 업데이트)', en: '(Equipment list to be updated)' },
    ],
  },
  {
    key: 'water',
    category: { ko: '수질분석 장비', en: 'Water Analysis Equipment' },
    icon: FlaskConical,
    items: [
      { ko: '분광광도계', en: 'Spectrophotometer' },
      { ko: 'TOC 분석기', en: 'TOC Analyzer' },
      { ko: 'BOD/COD 측정기', en: 'BOD/COD Meter' },
      { ko: '(장비 목록 추후 업데이트)', en: '(Equipment list to be updated)' },
    ],
  },
  {
    key: 'odor',
    category: { ko: '악취분석 장비', en: 'Odor Analysis Equipment' },
    icon: Microscope,
    items: [
      { ko: '관능시험 장비', en: 'Sensory Test Equipment' },
      { ko: '악취물질 분석기 (GC-MS)', en: 'GC-MS Analyzer' },
      { ko: '현장측정 장비', en: 'Field Measurement Equipment' },
      { ko: '(장비 목록 추후 업데이트)', en: '(Equipment list to be updated)' },
    ],
  },
];

export const qualityFeatures: Array<{
  icon: LucideIcon;
  title: { ko: string; en: string };
  description: { ko: string; en: string };
}> = [
  {
    icon: Shield,
    title: { ko: '품질관리시스템', en: 'Quality Management' },
    description: {
      ko: '체계적인 품질관리 프로세스로 정확하고 신뢰성 있는 분석 결과를 보장합니다.',
      en: 'Systematic quality management process ensures accurate and reliable analysis results.'
    },
  },
  {
    icon: CheckCircle,
    title: { ko: '정도관리', en: 'Quality Assurance' },
    description: {
      ko: '정기적인 정도관리를 통해 분석 데이터의 정확도와 재현성을 검증합니다.',
      en: 'Regular quality assurance verifies accuracy and reproducibility of analysis data.'
    },
  },
];
