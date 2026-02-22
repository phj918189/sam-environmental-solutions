/**
 * 포트폴리오 데이터
 * - 운영 실적, 공사 실적, 휴게소 시설
 * - 포트폴리오 상세 (프로젝트별)
 */
import type { LucideIcon } from 'lucide-react';
import { Wind, Droplets, Leaf } from 'lucide-react';

export const operationItems = [
  { id: 'op1', title: { ko: '청산농공단지 공공 오·폐수처리장', en: 'Cheongsan Industrial Complex Wastewater Plant' }, period: '2016~2017', method: { ko: '생물학적+화학적(가압부상)', en: 'Biological+Chemical (Flotation)' } },
  { id: 'op2', title: { ko: '(주)건영비앤에프,디아이커뮤니케이션 폐수처리장', en: 'Kunyoung B&F, DI Communication WTP' }, period: '2019~2021', method: { ko: '생물학적+화학적', en: 'Biological+Chemical' } },
  { id: 'op3', title: { ko: '(주)케이티앤지 폐수처리장', en: 'KT&G Wastewater Treatment Plant' }, period: '2021~2023', method: { ko: '생물학적+화학적', en: 'Biological+Chemical' } },
  { id: 'op4', title: { ko: '(주)진바이오텍 폐수처리장,개인하수처리시설', en: 'Jin Biotech WTP & Sewage Facility' }, period: '2024~2025', method: { ko: '생물학적+화학적(MBR 준공사막)', en: 'Biological+Chemical (MBR)' } },
  { id: 'op5', title: { ko: '한국에너지기술연구원 본원 폐수처리장', en: 'KIER Main Campus WTP' }, period: '2024~2025', method: { ko: '생물학적+화학적(가압부상)', en: 'Biological+Chemical (Flotation)' } },
  { id: 'op6', title: { ko: '국방과학연구소 폐수처리장,개인하수처리시설', en: 'ADD Wastewater & Sewage Facility' }, period: '2025~현재', method: { ko: '생물학적+화학적 일부(RO필터)', en: 'Biological+Chemical (RO Filter)' } },
  { id: 'op7', title: { ko: '(주)한미타올 폐수처리장', en: 'Hanmi Towel WTP' }, period: '2023~현재', method: { ko: '생물학적', en: 'Biological' } },
  { id: 'op8', title: { ko: '동세중농협 폐수처리장', en: 'Dongsejung Cooperative WTP' }, period: '2020~현재', method: { ko: '화학적', en: 'Chemical' } },
  { id: 'op9', title: { ko: '태극제약 부여공장 폐수처리장', en: 'Taeguk Pharma Buyeo WTP' }, period: '2021~현재', method: { ko: '생물학적+화학적(RO필터)', en: 'Biological+Chemical (RO Filter)' } },
  { id: 'op10', title: { ko: '구항농공단지 공공 오·폐수처리장', en: 'Guhang Industrial Complex WTP' }, period: '2015~현재', method: { ko: '생물학적', en: 'Biological' } },
  { id: 'op11', title: { ko: '금강휴게소 개인하수처리시설', en: 'Geumgang Rest Area Sewage Facility' }, period: '2022~현재', method: { ko: '생물학적+화학적', en: 'Biological+Chemical' } },
  { id: 'op12', title: { ko: '금강대학교 개인하수처리시설', en: 'Geumgang University Sewage Facility' }, period: '2003~현재', method: { ko: '생물학적+(MBR 준공사막)', en: 'Biological (MBR)' } },
  { id: 'op13', title: { ko: '타임월드 갤러리아 개인하수처리시설', en: 'Timeworld Galleria Sewage Facility' }, period: '2003~현재', method: { ko: '생물학적', en: 'Biological' } },
  { id: 'op14', title: { ko: '한국수자원공사 대청지사 개인하수처리시설', en: 'K-Water Daecheong Sewage Facility' }, period: '2003~2024', method: { ko: '생물학적+(MBR 준공사막)', en: 'Biological (MBR)' } },
  { id: 'op15', title: { ko: '(주)KBI코스모링크 개인하수처리시설', en: 'KBI Cosmolink Sewage Facility' }, period: '2023~현재', method: { ko: '생물학적', en: 'Biological' } },
  { id: 'op16', title: { ko: '(주)램테크놀러지 개인하수처리시설', en: 'Ram Technology Sewage Facility' }, period: '2023~현재', method: { ko: '생물학적', en: 'Biological' } },
  { id: 'op17', title: { ko: '한국도로공사 대전지사', en: 'Korea Expressway Daejeon Branch' }, period: '2018~현재', method: { ko: '생물학적', en: 'Biological' } },
];

export const constructionItems = [
  { id: 'c1', title: { ko: '한국에너지기술연구원 폐수처리장 개선공사', en: 'KIER WTP Improvement Project' }, year: '2024', type: 'water' },
  { id: 'c2', title: { ko: '한국생산기술연구원 개선공사', en: 'KITECH Improvement Project' }, year: '2024', type: 'water' },
  { id: 'c3', title: { ko: 'KT&G 폐수처리장 개선공사', en: 'KT&G WTP Improvement Project' }, year: '2024', type: 'water' },
  { id: 'c4', title: { ko: '태극제약 폐수처리장 개선공사', en: 'Taeguk Pharma WTP Improvement' }, year: '2024', type: 'water' },
  { id: 'c5', title: { ko: '진바이오텍 폐수처리장 개선공사', en: 'Jin Biotech WTP Improvement' }, year: '2024', type: 'water' },
  { id: 'c6', title: { ko: '한미타올 폐수처리장 개선공사', en: 'Hanmi Towel WTP Improvement' }, year: '2024', type: 'water' },
  { id: 'c7', title: { ko: '국방과학연구소 신설 공사', en: 'ADD New Facility Construction' }, year: '2025', type: 'water' },
  { id: 'c8', title: { ko: '실크리버CC 공법 변경 공사', en: 'Silk River CC Process Change' }, year: '2024', type: 'water' },
  { id: 'c9', title: { ko: '장태산 휴양림 처리시설 개선 공사(신설)', en: 'Jangtaesan Forest Treatment Facility' }, year: '2024', type: 'water' },
];

export const restAreaItems = [
  { id: 'r1', title: { ko: '금강 휴게소', en: 'Geumgang Rest Area' }, region: { ko: '대전·충남', en: 'Daejeon/Chungnam' } },
  { id: 'r2', title: { ko: '천둥산 휴게소', en: 'Cheondungsan Rest Area' }, region: { ko: '대전·충남', en: 'Daejeon/Chungnam' } },
  { id: 'r3', title: { ko: '청송 휴게소', en: 'Cheongsong Rest Area' }, region: { ko: '대전·충남', en: 'Daejeon/Chungnam' } },
  { id: 'r4', title: { ko: '예산 휴게소', en: 'Yesan Rest Area' }, region: { ko: '충남', en: 'Chungnam' } },
  { id: 'r5', title: { ko: '부여백제 휴게소', en: 'Buyeo Baekje Rest Area' }, region: { ko: '충남', en: 'Chungnam' } },
  { id: 'r6', title: { ko: '천안 휴게소', en: 'Cheonan Rest Area' }, region: { ko: '충남', en: 'Chungnam' } },
  { id: 'r7', title: { ko: '청주 휴게소', en: 'Cheongju Rest Area' }, region: { ko: '충북', en: 'Chungbuk' } },
  { id: 'r8', title: { ko: '공주 휴게소', en: 'Gongju Rest Area' }, region: { ko: '충남', en: 'Chungnam' } },
  { id: 'r9', title: { ko: '황간 휴게소', en: 'Hwanggan Rest Area' }, region: { ko: '충북', en: 'Chungbuk' } },
  { id: 'r10', title: { ko: '고성 공룡나라 휴게소', en: 'Goseong Dinosaur Rest Area' }, region: { ko: '경남', en: 'Gyeongnam' } },
  { id: 'r11', title: { ko: '안성 휴게소', en: 'Anseong Rest Area' }, region: { ko: '경기', en: 'Gyeonggi' } },
  { id: 'r12', title: { ko: '인삼랜드 휴게소', en: 'Ginseng Land Rest Area' }, region: { ko: '충남', en: 'Chungnam' } },
];

export const portfolioDetails: Record<string, {
  category: string;
  title: { ko: string; en: string };
  client: { ko: string; en: string };
  location: { ko: string; en: string };
  date: string;
  overview: { ko: string; en: string };
  challenge: { ko: string; en: string };
  solution: { ko: string[]; en: string[] };
  results: { ko: string[]; en: string[] };
}> = {
  '1': {
    category: 'air',
    title: { ko: '○○제조공장 대기배출시설 측정', en: '○○ Manufacturing Plant Air Emission Measurement' },
    client: { ko: '○○주식회사', en: '○○ Corporation' },
    location: { ko: '충청남도 ○○시', en: '○○ City, Chungnam' },
    date: '2023-11',
    overview: {
      ko: '대규모 제조공장의 대기오염물질 배출시설에 대한 정기 측정 및 환경 컨설팅을 수행한 프로젝트입니다. 고객사의 법적 의무 이행을 지원하고, 배출량 저감을 위한 개선 방안을 제시하였습니다.',
      en: 'A project involving regular measurement and environmental consulting for air pollutant emission facilities at a large manufacturing plant. We supported the client\'s legal compliance and proposed improvement measures for emission reduction.'
    },
    challenge: {
      ko: '복잡한 생산 공정으로 인해 다양한 대기오염물질이 배출되고 있었으며, 일부 항목에서 배출허용기준에 근접한 수치가 나타나고 있었습니다. 또한 주변 주민들의 환경 민원이 증가하는 추세였습니다.',
      en: 'The complex production process was emitting various air pollutants, with some items approaching emission limits. Additionally, environmental complaints from nearby residents were increasing.'
    },
    solution: {
      ko: ['정밀 측정을 통한 배출원별 오염물질 현황 파악', '배출저감을 위한 공정 개선 방안 컨설팅', '주기적 모니터링 체계 구축 제안', '배출시설 관리 매뉴얼 작성'],
      en: ['Identified pollutant status by emission source through precision measurement', 'Consulted on process improvements for emission reduction', 'Proposed periodic monitoring system', 'Created emission facility management manual']
    },
    results: {
      ko: ['배출허용기준 100% 충족', '주요 오염물질 배출량 20% 감소', '환경 민원 발생 건수 감소', '연간 환경관리 계약 체결'],
      en: ['100% compliance with emission standards', '20% reduction in major pollutant emissions', 'Decreased environmental complaints', 'Annual environmental management contract signed']
    }
  },
  '2': {
    category: 'water',
    title: { ko: '○○식품 폐수처리시설 효율 진단', en: '○○ Food Company Wastewater Treatment Diagnosis' },
    client: { ko: '○○식품', en: '○○ Food Co.' },
    location: { ko: '대전광역시', en: 'Daejeon' },
    date: '2023-10',
    overview: {
      ko: '식품제조업체의 폐수처리시설 운영 효율을 진단하고, 처리 비용 절감 및 방류수 수질 개선을 위한 컨설팅을 수행한 프로젝트입니다.',
      en: 'A project diagnosing the operational efficiency of a food manufacturer\'s wastewater treatment facility and providing consulting for cost reduction and effluent quality improvement.'
    },
    challenge: {
      ko: '노후화된 폐수처리시설로 인해 처리 효율이 저하되고 있었으며, 운영 비용이 지속적으로 증가하고 있었습니다. 또한 계절별 생산량 변동에 따른 유입 부하 변화에 대응이 어려운 상황이었습니다.',
      en: 'The aging wastewater treatment facility was experiencing declining efficiency with continuously increasing operating costs. It was also difficult to respond to load variations due to seasonal production fluctuations.'
    },
    solution: {
      ko: ['시설 전반에 대한 정밀 진단 실시', '유입수 및 방류수 수질 분석', '처리 공정별 효율 평가', '시설 개선 및 운영 최적화 방안 제시'],
      en: ['Conducted comprehensive facility diagnosis', 'Analyzed influent and effluent water quality', 'Evaluated efficiency by treatment process', 'Proposed facility improvement and operation optimization']
    },
    results: {
      ko: ['처리 효율 15% 향상', '월간 운영비 10% 절감', '방류수 수질 안정화', '시설 개선 로드맵 수립'],
      en: ['15% improvement in treatment efficiency', '10% reduction in monthly operating costs', 'Stabilized effluent water quality', 'Established facility improvement roadmap']
    }
  },
  '3': {
    category: 'odor',
    title: { ko: '○○화학 악취저감시설 설계 컨설팅', en: '○○ Chemical Odor Reduction Facility Consulting' },
    client: { ko: '○○화학', en: '○○ Chemical' },
    location: { ko: '울산광역시', en: 'Ulsan' },
    date: '2023-09',
    overview: {
      ko: '화학제품 제조시설에서 발생하는 악취 민원 해결을 위해 저감시설 설계 및 시공 컨설팅을 수행한 프로젝트입니다.',
      en: 'A project providing reduction facility design and construction consulting to resolve odor complaints from a chemical manufacturing facility.'
    },
    challenge: {
      ko: '생산 공정에서 발생하는 복합악취로 인해 지속적인 주민 민원이 발생하고 있었습니다. 기존의 단순 탈취 방식으로는 효과적인 저감이 어려웠으며, 법적 기준 초과 우려도 있었습니다.',
      en: 'Complex odors from the production process were causing continuous resident complaints. Simple deodorization methods were ineffective, and there were concerns about exceeding legal standards.'
    },
    solution: {
      ko: ['복합악취 및 지정악취물질 정밀 측정', '악취 발생원별 기여도 분석', '맞춤형 저감시설 설계', '시공 및 시운전 지원'],
      en: ['Precision measurement of complex and designated odor substances', 'Analyzed contribution by odor source', 'Designed customized reduction facility', 'Supported construction and commissioning']
    },
    results: {
      ko: ['악취 발생량 90% 저감', '주민 민원 완전 해소', '법적 배출허용기준 충족', '지속적 모니터링 체계 구축'],
      en: ['90% reduction in odor emissions', 'Complete resolution of resident complaints', 'Met legal emission standards', 'Established continuous monitoring system']
    }
  }
};

export const categoryInfo: Record<string, { ko: string; en: string; icon: LucideIcon }> = {
  air: { ko: '대기', en: 'Air', icon: Wind },
  water: { ko: '수질', en: 'Water', icon: Droplets },
  odor: { ko: '악취', en: 'Odor', icon: Leaf },
};
