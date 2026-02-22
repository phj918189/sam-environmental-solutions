/**
 * 사업영역(서비스) 데이터
 * - 대기, 수질, 악취 서비스 상세
 */
import type { LucideIcon } from 'lucide-react';

/** 라우트 param 검증용 - 유효한 serviceType만 허용 */
export const VALID_SERVICE_TYPES = ['air', 'water', 'odor'] as const;
export type ServiceType = (typeof VALID_SERVICE_TYPES)[number];

export function isValidServiceType(value: string | undefined): value is ServiceType {
  return !!value && VALID_SERVICE_TYPES.includes(value as ServiceType);
}
import { Wind, Droplets, Trash2 } from 'lucide-react';

export interface ServiceDataItem {
  icon: LucideIcon;
  color: string;
  bgColor: string;
  title: { ko: string; en: string };
  subtitle: { ko: string; en: string };
  audience: { ko: string[]; en: string[] };
  useCases: { ko: string[]; en: string[] };
  scope: { ko: string[]; en: string[] };
  deliverables: { ko: string[]; en: string[] };
  faq: { ko: Array<{ q: string; a: string }>; en: Array<{ q: string; a: string }> };
}

export const serviceData: Record<string, ServiceDataItem> = {
  air: {
    icon: Wind,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    title: { ko: '대기환경 서비스', en: 'Air Quality Services' },
    subtitle: {
      ko: '정확한 측정과 분석으로 대기 환경 문제를 해결합니다.',
      en: 'Solving air quality issues through accurate measurement and analysis.'
    },
    audience: {
      ko: ['제조업체 (공장, 플랜트)', '발전소 및 에너지 기업', '건설사 및 개발업체', '지자체 및 공공기관'],
      en: ['Manufacturing (Factories, Plants)', 'Power Plants & Energy Companies', 'Construction & Development', 'Local Government & Public Agencies']
    },
    useCases: {
      ko: ['배출시설 신규 설치 시 허가 지원', '정기 측정 및 보고 의무 이행', '대기오염 민원 대응 및 개선', '환경영향평가 대기질 조사'],
      en: ['Permit support for new emission facilities', 'Regular measurement and compliance reporting', 'Air pollution complaint response', 'Air quality assessment for EIA']
    },
    scope: {
      ko: ['대기오염물질 측정 (굴뚝, 악취, 비산먼지 등)', '배출시설 허가 및 변경 신고 대행', '대기환경 컨설팅 및 개선 방안 제시', '환경영향평가 대기질 측정·분석'],
      en: ['Air pollutant measurement (stacks, odor, fugitive dust)', 'Emission facility permit and change filing', 'Air environment consulting and improvement plans', 'Air quality measurement for environmental impact assessment']
    },
    deliverables: {
      ko: ['공인 측정 성적서', '배출시설 허가/변경 서류', '대기질 개선 보고서', '맞춤형 컨설팅 보고서'],
      en: ['Official measurement certificates', 'Facility permit/modification documents', 'Air quality improvement reports', 'Customized consulting reports']
    },
    faq: {
      ko: [
        { q: '측정 주기는 어떻게 되나요?', a: '법적으로 반기 1회 또는 분기 1회 측정이 필요하며, 시설 규모와 종류에 따라 달라집니다. 정확한 주기는 상담을 통해 안내드립니다.' },
        { q: '측정 비용은 어떻게 산정되나요?', a: '측정 항목 수, 측정 지점 수, 시설 규모에 따라 견적이 달라집니다. 현장 확인 후 정확한 견적을 제공해 드립니다.' },
        { q: '결과 보고서는 언제 받을 수 있나요?', a: '일반적으로 측정 후 7-14일 이내에 공인 성적서를 발급해 드립니다. 긴급한 경우 협의 가능합니다.' },
        { q: '허가 신청도 대행해 주시나요?', a: '네, 배출시설 설치 허가 및 변경 신고 등 행정 절차를 대행해 드립니다.' },
        { q: '미세먼지 측정도 가능한가요?', a: '네, PM10, PM2.5 등 미세먼지 측정 및 비산먼지 관리 서비스도 제공합니다.' },
      ],
      en: [
        { q: 'How often is measurement required?', a: 'Legally, semi-annual or quarterly measurement is required depending on facility type and size. We\'ll advise on the exact schedule during consultation.' },
        { q: 'How is the cost calculated?', a: 'Quotes vary based on measurement items, number of points, and facility size. We provide accurate quotes after site inspection.' },
        { q: 'When will I receive the report?', a: 'Typically within 7-14 days after measurement. Expedited service is available upon request.' },
        { q: 'Do you handle permit applications?', a: 'Yes, we handle administrative procedures including facility permits and modification filings.' },
        { q: 'Can you measure particulate matter?', a: 'Yes, we provide PM10, PM2.5 measurement and fugitive dust management services.' },
      ]
    }
  },
  water: {
    icon: Droplets,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    title: { ko: '수질환경 서비스', en: 'Water Quality Services' },
    subtitle: {
      ko: '수질 오염 분석부터 폐수 처리 컨설팅까지 종합 서비스를 제공합니다.',
      en: 'Comprehensive services from water pollution analysis to wastewater treatment consulting.'
    },
    audience: {
      ko: ['제조업체 (폐수 배출 사업장)', '식품 및 음료 기업', '화학 및 제약 업체', '축산업 및 농업 시설'],
      en: ['Manufacturing (Wastewater facilities)', 'Food & Beverage Companies', 'Chemical & Pharmaceutical', 'Livestock & Agricultural Facilities']
    },
    useCases: {
      ko: ['방류수 수질 기준 준수 확인', '폐수처리시설 효율 평가', '수질오염 사고 대응', '신규 배출시설 허가 지원'],
      en: ['Effluent quality compliance verification', 'Wastewater treatment efficiency evaluation', 'Water pollution incident response', 'New discharge facility permit support']
    },
    scope: {
      ko: ['수질오염물질 분석 (BOD, COD, SS, T-N, T-P 등)', '폐수처리시설 운영 컨설팅', '방류수 수질 모니터링', '비점오염원 관리'],
      en: ['Water pollutant analysis (BOD, COD, SS, T-N, T-P, etc.)', 'Wastewater treatment facility consulting', 'Effluent quality monitoring', 'Non-point source pollution management']
    },
    deliverables: {
      ko: ['수질 분석 성적서', '처리 효율 진단 보고서', '수질 개선 방안 제안서', '월간/분기 모니터링 리포트'],
      en: ['Water quality analysis certificates', 'Treatment efficiency diagnostic reports', 'Water quality improvement proposals', 'Monthly/quarterly monitoring reports']
    },
    faq: {
      ko: [
        { q: '어떤 항목을 분석할 수 있나요?', a: 'BOD, COD, SS, pH, T-N, T-P, 중금속류 등 법적 규제 항목 전체를 분석 가능합니다.' },
        { q: '시료 채취는 어떻게 진행되나요?', a: '현장에 직접 방문하여 전문 채취 용기로 시료를 수집합니다. 채취 지점과 방법은 법적 기준을 준수합니다.' },
        { q: '긴급 분석도 가능한가요?', a: '네, 사고 대응 등 긴급한 상황에서는 신속 분석 서비스를 제공합니다.' },
        { q: '폐수처리시설 개선도 지원하나요?', a: '시설 진단 및 개선 방안 제시까지 지원하며, 필요시 전문 업체 연계도 가능합니다.' },
        { q: '정기 모니터링 계약이 가능한가요?', a: '네, 월간/분기/반기 단위의 정기 모니터링 계약 서비스를 제공합니다.' },
      ],
      en: [
        { q: 'What parameters can you analyze?', a: 'We can analyze all regulated parameters including BOD, COD, SS, pH, T-N, T-P, and heavy metals.' },
        { q: 'How is sampling conducted?', a: 'We visit the site and collect samples using specialized containers following legal standards.' },
        { q: 'Is expedited analysis available?', a: 'Yes, we provide rapid analysis for emergencies such as pollution incidents.' },
        { q: 'Do you support facility improvements?', a: 'We provide facility diagnosis and improvement recommendations, with referrals to specialists if needed.' },
        { q: 'Can I set up regular monitoring?', a: 'Yes, we offer monthly, quarterly, and semi-annual monitoring contracts.' },
      ]
    }
  },
  odor: {
    icon: Trash2,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    title: { ko: '악취환경 서비스', en: 'Odor Control Services' },
    subtitle: {
      ko: '악취 측정부터 저감 시설 설계까지, 악취 문제 전문 솔루션을 제공합니다.',
      en: 'From odor measurement to reduction facility design, we provide expert odor solutions.'
    },
    audience: {
      ko: ['제조업체 (화학, 식품 등)', '폐기물 처리 시설', '축산농가 및 퇴비화 시설', '하수처리장'],
      en: ['Manufacturing (Chemical, Food, etc.)', 'Waste Treatment Facilities', 'Livestock & Composting Facilities', 'Sewage Treatment Plants']
    },
    useCases: {
      ko: ['악취 민원 발생 시 원인 분석', '배출허용기준 초과 시 대응', '악취저감시설 설치 전후 효과 평가', '악취방지계획서 작성 지원'],
      en: ['Root cause analysis for odor complaints', 'Response to emission limit violations', 'Before/after evaluation of reduction facilities', 'Odor prevention plan preparation']
    },
    scope: {
      ko: ['복합악취 및 지정악취물질 측정', '악취 발생원 조사 및 분석', '악취저감시설 설계 컨설팅', '악취방지계획서 작성 및 제출'],
      en: ['Complex and designated odor substance measurement', 'Odor source investigation and analysis', 'Reduction facility design consulting', 'Odor prevention plan preparation and submission']
    },
    deliverables: {
      ko: ['악취 측정 성적서', '발생원 분석 보고서', '저감 방안 제안서', '악취방지계획서'],
      en: ['Odor measurement certificates', 'Source analysis reports', 'Reduction recommendations', 'Odor prevention plans']
    },
    faq: {
      ko: [
        { q: '악취 측정은 어떻게 진행되나요?', a: '공기희석관능법 및 기기분석법을 통해 복합악취와 지정악취물질을 측정합니다.' },
        { q: '악취 민원이 발생했는데 어떻게 해야 하나요?', a: '먼저 현장 조사를 통해 발생원을 파악하고, 법적 기준 초과 여부 확인 후 개선 방안을 제시합니다.' },
        { q: '저감시설 설치도 도와주시나요?', a: '저감시설 설계 컨설팅을 제공하며, 전문 시공업체 연계도 가능합니다.' },
        { q: '측정 결과가 기준 초과면 어떻게 되나요?', a: '행정처분 전 개선 기간이 주어지며, 저희가 신속한 개선 방안을 함께 수립해 드립니다.' },
        { q: '정기적인 악취 관리가 필요한가요?', a: '악취배출시설은 연 1회 이상 측정 의무가 있으며, 민원 예방을 위해 분기별 모니터링을 권장합니다.' },
      ],
      en: [
        { q: 'How is odor measurement conducted?', a: 'We use air dilution olfactometry and instrumental analysis to measure complex and designated odor substances.' },
        { q: 'What should I do about an odor complaint?', a: 'We first investigate to identify the source, check compliance with standards, then propose improvements.' },
        { q: 'Do you help with reduction facility installation?', a: 'We provide design consulting and can connect you with specialized contractors.' },
        { q: 'What if results exceed limits?', a: 'An improvement period is typically granted before penalties. We help develop rapid improvement plans.' },
        { q: 'Is regular odor management necessary?', a: 'Odor emission facilities require annual measurement. We recommend quarterly monitoring to prevent complaints.' },
      ]
    }
  }
};
