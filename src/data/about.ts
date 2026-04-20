/**
 * 회사소개 데이터
 * - 핵심 가치, 연혁, 구성원
 * 연혁 연도는 등록증·사내 공문과 대조해 수정하세요. 추정 연도는 넣지 않습니다.
 */

export const values = [
  {
    key: 'accuracy',
    title: { ko: '정확성', en: 'Accuracy' },
    description: {
      ko: '공인 절차와 내부 품질관리에 따라 시료·장비·기록을 관리합니다. 측정·분석 결과가 재현 가능하고 추적 가능하도록 하여, 고객과 규제 기관 모두가 신뢰할 수 있는 데이터를 제공합니다.',
      en: 'We manage samples, equipment, and records under accredited procedures and internal QA/QC so results are traceable and reproducible—data regulators and clients can rely on.',
    },
  },
  {
    key: 'integrity',
    title: { ko: '진정성', en: 'Integrity' },
    description: {
      ko: '고객의 환경 이슈를 단기 매출이 아닌 장기 파트너십 관점에서 봅니다. 불확실한 항목은 솔직히 공유하고, 가능한 선택지와 리스크를 함께 설명합니다.',
      en: "We treat clients' environmental challenges as long-term partnerships, not one-off sales. We are candid about uncertainty and explain options and risks clearly.",
    },
  },
  {
    key: 'expertise',
    title: { ko: '전문성', en: 'Expertise' },
    description: {
      ko: '30년 이상의 현장 경험을 바탕으로 측정·분석뿐 아니라 시설 설계·시공·운영까지 연결해 조언합니다. 법규 개정과 지침 변화에 맞추어 내부 역량을 지속적으로 갱신합니다.',
      en: 'Drawing on decades of field experience, we connect measurement and analysis with design, construction, and operations advice. We continuously update know-how as regulations evolve.',
    },
  },
];

/** 연도·시기는 사실 확인 후 교체. placeholder 연도 금지. */
export const history = [
  {
    year: '1992',
    event: {
      ko: '설립. 오수처리시설 설계·시공 및 수질환경관리 대행을 시작하며 환경 전문 서비스의 기반을 마련함.',
      en: 'Founded. Began sewage treatment facility design and construction and water-quality management services.',
    },
  },
  {
    year: { ko: '2000년대', en: '2000s' },
    event: {
      ko: '환경측정·분석 대행 역량을 강화하고, 산업체·연구·공공 등 고객군을 확대함.',
      en: 'Strengthened environmental measurement and analysis services and broadened the client base.',
    },
  },
  {
    year: { ko: '2010년대 이후', en: '2010s onward' },
    event: {
      ko: '대기·수질·악취 통합 서비스 체계를 정비하고, 시설 운영·시공·휴게소 등 사업 실적을 확대함.',
      en: 'Structured integrated air, water, and odor services; expanded operations, construction, and rest-area portfolios.',
    },
  },
  {
    year: { ko: '현재', en: 'Today' },
    event: {
      ko: '환경부 등록 공인측정기관으로서 대기·수질·악취 측정대행 및 관련 설계·시공·관리 분야에서 활동을 이어가고 있음.',
      en: 'Operating as a Ministry of Environment registered measurement agency for air, water, and odor, with related design, construction, and management services.',
    },
  },
];

export const team = [
  {
    id: 'ceo',
    role: { ko: '대표', en: 'CEO' },
    name: { ko: '이의환', en: 'Lee Eui-hwan' },
    description: {
      ko: '환경 분야 35년 이상의 경험으로 경영 총괄, 대외 협력 및 품질·안전 방향을 설정합니다.',
      en: 'Over 35 years in the field; leads the company, external relations, and quality and safety direction.',
    },
  },
  {
    id: 'director',
    role: { ko: '이사', en: 'Director' },
    name: { ko: '김동은', en: 'Kim Dong-eun' },
    description: {
      ko: '사업 운영과 고객 협력을 총괄하며, 주요 프로젝트의 실행과 이행을 조율합니다.',
      en: 'Oversees business operations and client coordination, aligning delivery of major projects.',
    },
  },
  {
    id: 'lab',
    role: { ko: '연구소장', en: 'Laboratory Director' },
    name: { ko: '김명훈', en: 'Kim Myung-hoon' },
    description: {
      ko: '분석실 운영·품질관리·기술 검토를 담당하며, 측정·분석 결과의 기술적 일관성을 관리합니다.',
      en: 'Leads laboratory operations, QA/QC, and technical review for consistent analytical outcomes.',
    },
  },
];
