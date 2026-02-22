/**
 * 소식 & 자료 데이터
 * - 뉴스 목록, 뉴스 상세
 */

export const newsItems = [
  {
    id: '1',
    category: { ko: '공지사항', en: 'Notice' },
    title: { ko: '2024년 신년 인사말씀', en: '2024 New Year Greetings' },
    date: '2024-01-02',
    excerpt: {
      ko: '새해 복 많이 받으세요. 삼양건설환경연구소은 올해도 더 나은 환경 서비스를 제공하기 위해 노력하겠습니다.',
      en: 'Happy New Year. Samyang Environmental will continue to strive to provide better environmental services this year.'
    }
  },
  {
    id: '2',
    category: { ko: '뉴스', en: 'News' },
    title: { ko: '환경측정분석 서비스 확대 안내', en: 'Environmental Measurement Analysis Service Expansion' },
    date: '2023-12-15',
    excerpt: {
      ko: '삼양건설환경연구소이 악취측정대행업 등록을 완료하여 대기, 수질, 악취 분야의 종합 환경 서비스를 제공합니다.',
      en: 'Samyang Environmental has completed odor measurement agency registration to provide comprehensive environmental services.'
    }
  },
  {
    id: '3',
    category: { ko: '자료', en: 'Resources' },
    title: { ko: '대기오염물질 배출시설 관리 가이드', en: 'Air Pollutant Emission Facility Management Guide' },
    date: '2023-11-20',
    excerpt: {
      ko: '배출시설 관리에 필요한 기본 사항과 법적 의무사항을 정리한 가이드를 제공합니다.',
      en: 'A guide summarizing the basics and legal obligations for emission facility management.'
    }
  },
  {
    id: '4',
    category: { ko: '뉴스', en: 'News' },
    title: { ko: '신규 수질분석 장비 도입', en: 'New Water Quality Analysis Equipment Introduced' },
    date: '2023-10-10',
    excerpt: {
      ko: '보다 정확하고 신속한 수질 분석을 위해 최신 분석 장비를 도입하였습니다.',
      en: 'We have introduced the latest analytical equipment for more accurate and faster water quality analysis.'
    }
  },
  {
    id: '5',
    category: { ko: '자료', en: 'Resources' },
    title: { ko: '악취 민원 대응 매뉴얼', en: 'Odor Complaint Response Manual' },
    date: '2023-09-05',
    excerpt: {
      ko: '악취 민원 발생 시 효과적인 대응 방법과 절차를 안내하는 매뉴얼입니다.',
      en: 'A manual guiding effective response methods and procedures for odor complaints.'
    }
  },
];

export const newsDetails: Record<string, {
  category: { ko: string; en: string };
  title: { ko: string; en: string };
  date: string;
  content: { ko: string; en: string };
}> = {
  '1': {
    category: { ko: '공지사항', en: 'Notice' },
    title: { ko: '2024년 신년 인사말씀', en: '2024 New Year Greetings' },
    date: '2024-01-02',
    content: {
      ko: `안녕하세요, 삼양건설환경연구소입니다.

2024년 새해가 밝았습니다. 지난 한 해 동안 저희 연구원을 신뢰해 주시고 함께해 주신 모든 고객분들께 깊은 감사의 말씀을 드립니다.

올해도 저희는 더욱 정확한 측정, 더욱 신뢰할 수 있는 분석, 그리고 더욱 전문적인 컨설팅으로 고객 여러분의 환경 문제 해결에 최선을 다하겠습니다.

새해 복 많이 받으시고, 건강하고 행복한 한 해 되시기를 바랍니다.

감사합니다.

삼양건설환경연구소 임직원 일동`,
      en: `Hello, this is Samyang Environmental Construction Research Institute.

The year 2024 has begun. We would like to express our sincere gratitude to all customers who trusted and partnered with us over the past year.

This year, we will continue to do our best to solve your environmental challenges with more accurate measurement, more reliable analysis, and more professional consulting.

We wish you a happy and healthy new year.

Thank you.

Samyang Environmental Staff`
    }
  },
  '2': {
    category: { ko: '뉴스', en: 'News' },
    title: { ko: '환경측정분석 서비스 확대 안내', en: 'Environmental Measurement Analysis Service Expansion' },
    date: '2023-12-15',
    content: {
      ko: `삼양건설환경연구소이 악취측정대행업 등록을 완료하였습니다.

이제 대기, 수질, 악취 분야의 종합 환경 서비스를 제공할 수 있게 되었습니다.

주요 서비스:
- 대기오염물질 측정 및 분석
- 수질오염물질 분석
- 복합악취 및 지정악취물질 측정
- 환경 컨설팅 및 허가 대행

앞으로도 최고 수준의 환경 서비스를 제공하기 위해 노력하겠습니다.

문의사항은 언제든지 연락 주시기 바랍니다.`,
      en: `Samyang Environmental has completed odor measurement agency registration.

We can now provide comprehensive environmental services in the fields of air, water, and odor.

Key Services:
- Air pollutant measurement and analysis
- Water pollutant analysis
- Complex and designated odor substance measurement
- Environmental consulting and permit services

We will continue to strive to provide the highest level of environmental services.

Please feel free to contact us with any inquiries.`
    }
  },
  '3': {
    category: { ko: '자료', en: 'Resources' },
    title: { ko: '대기오염물질 배출시설 관리 가이드', en: 'Air Pollutant Emission Facility Management Guide' },
    date: '2023-11-20',
    content: {
      ko: `대기오염물질 배출시설을 운영하는 사업장을 위한 관리 가이드입니다.

1. 법적 의무사항
- 배출시설 설치 허가/신고
- 정기 측정 (반기 1회 또는 분기 1회)
- 자가측정 기록 보관

2. 측정 항목
- 먼지
- 황산화물 (SOx)
- 질소산화물 (NOx)
- 일산화탄소 (CO)
- 기타 특정대기유해물질

3. 관리 요령
- 정기적인 시설 점검
- 연료 및 원료 관리
- 방지시설 효율 유지

자세한 상담이 필요하시면 연락 주시기 바랍니다.`,
      en: `A management guide for businesses operating air pollutant emission facilities.

1. Legal Obligations
- Emission facility installation permit/notification
- Regular measurement (semi-annual or quarterly)
- Self-measurement record keeping

2. Measurement Items
- Dust
- Sulfur oxides (SOx)
- Nitrogen oxides (NOx)
- Carbon monoxide (CO)
- Other specific hazardous air pollutants

3. Management Tips
- Regular facility inspection
- Fuel and raw material management
- Maintain control facility efficiency

Please contact us if you need detailed consultation.`
    }
  },
  '4': {
    category: { ko: '뉴스', en: 'News' },
    title: { ko: '신규 수질분석 장비 도입', en: 'New Water Quality Analysis Equipment Introduced' },
    date: '2023-10-10',
    content: {
      ko: `보다 정확하고 신속한 수질 분석을 위해 최신 분석 장비를 도입하였습니다.

주요 도입 장비 및 활용 분야는 추후 업데이트 예정입니다.`,
      en: `We have introduced the latest analytical equipment for more accurate and faster water quality analysis.

Details of the equipment and application areas will be updated.`
    }
  },
  '5': {
    category: { ko: '자료', en: 'Resources' },
    title: { ko: '악취 민원 대응 매뉴얼', en: 'Odor Complaint Response Manual' },
    date: '2023-09-05',
    content: {
      ko: `악취 민원 발생 시 효과적인 대응 방법과 절차를 안내하는 매뉴얼입니다.

상세 내용은 추후 업데이트 예정입니다.`,
      en: `A manual guiding effective response methods and procedures for odor complaints.

Detailed content will be updated.`
    }
  }
};
