/**
 * 분석실 장비 데이터
 * 대기분석실(A-1~A-12), 수질분석실(W-1~W-12), 생태특성실(B-1~B-6)
 */
import type { LucideIcon } from 'lucide-react';
import { Gauge, FlaskConical, Microscope, Shield, CheckCircle } from 'lucide-react';

/* ── 대기 분석실 장비 이미지 ── */
import imgA1  from '@/assets/equipment/Air/A-1.jpg';
import imgA2  from '@/assets/equipment/Air/A-2.jpg';
import imgA3  from '@/assets/equipment/Air/A-3.jpg';
import imgA4  from '@/assets/equipment/Air/A-4.jpg';
import imgA5  from '@/assets/equipment/Air/A-5.jpg';
import imgA6  from '@/assets/equipment/Air/A-6.jpg';
import imgA7  from '@/assets/equipment/Air/A-7.jpg';
import imgA8  from '@/assets/equipment/Air/A-8.jpg';
import imgA9  from '@/assets/equipment/Air/A-9.jpg';
import imgA10 from '@/assets/equipment/Air/A-10.jpg';
import imgA11 from '@/assets/equipment/Air/A-11.jpg';
import imgA12 from '@/assets/equipment/Air/A-12.jpg';

/* ── 생태특성실 장비 이미지 ── */
import imgB1 from '@/assets/equipment/Bio/B-1.jpg';
import imgB2 from '@/assets/equipment/Bio/B-2.jpg';
import imgB3 from '@/assets/equipment/Bio/B-3.jpg';
import imgB4 from '@/assets/equipment/Bio/B-4.jpg';
import imgB5 from '@/assets/equipment/Bio/B-5.jpg';
import imgB6 from '@/assets/equipment/Bio/B-6.jpg';

/* ── 수질 분석실 장비 이미지 ── */
import imgW1  from '@/assets/equipment/Water/W-1.jpg';
import imgW2  from '@/assets/equipment/Water/W-2.jpg';
import imgW3  from '@/assets/equipment/Water/W3.jpg';
import imgW4  from '@/assets/equipment/Water/W-4.jpg';
import imgW5  from '@/assets/equipment/Water/W-5.jpg';
import imgW6  from '@/assets/equipment/Water/W-6(ICP-MS).jpg';
import imgW7  from '@/assets/equipment/Water/W-7.jpg';
import imgW8  from '@/assets/equipment/Water/W-8.jpg';
import imgW9  from '@/assets/equipment/Water/W-9.jpg';
import imgW10 from '@/assets/equipment/Water/W-10.jpg';
import imgW11 from '@/assets/equipment/Water/W-11.jpg';
import imgW12 from '@/assets/equipment/Water/W-12.jpg';

export interface EquipmentItem {
  id: string;
  type: { ko: string; en: string };
  model: string;
  analysis: { ko: string; en: string };
  image: string;
  featured?: boolean;
}

export interface EquipmentCategory {
  key: string;
  category: { ko: string; en: string };
  icon: LucideIcon;
  items: EquipmentItem[];
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    key: 'air',
    category: { ko: '대기 분석실', en: 'Air Analysis Lab' },
    icon: Gauge,
    items: [
      {
        id: 'A-1',
        type: { ko: 'GC/MS-TD (가스크로마토그래피)', en: 'GC/MS-TD (Gas Chromatograph Mass Spectrometer)' },
        model: 'GCMS-QP2020',
        analysis: { ko: 'VOCs', en: 'VOCs' },
        image: imgA1,
        featured: true,
      },
      {
        id: 'A-2',
        type: { ko: 'GC/MS-TD (가스크로마토그래피)', en: 'GC/MS-TD (Gas Chromatograph Mass Spectrometer)' },
        model: 'GCMS-QP2020 NX',
        analysis: { ko: '4VOC (TCM, BZ, EB, SR)', en: '4VOC (TCM, BZ, EB, SR)' },
        image: imgA2,
      },
      {
        id: 'A-3',
        type: { ko: 'GC/MS (가스크로마토그래피)', en: 'GC/MS (Gas Chromatograph Mass Spectrometer)' },
        model: 'GCMS-QP2020 NX',
        analysis: { ko: '이황화메틸', en: 'Dimethyl Sulfide' },
        image: imgA3,
      },
      {
        id: 'A-4',
        type: { ko: 'GC/MS (가스크로마토그래피)', en: 'GC/MS (Gas Chromatograph Mass Spectrometer)' },
        model: 'GCMS-QP2020 NX',
        analysis: { ko: '벤조(a)피렌', en: 'Benzo(a)pyrene' },
        image: imgA4,
      },
      {
        id: 'A-5',
        type: { ko: 'IC (이온크로마토그래피)', en: 'IC (Ion Chromatograph)' },
        model: 'Aquion',
        analysis: { ko: '염화수소', en: 'Hydrogen Chloride' },
        image: imgA5,
      },
      {
        id: 'A-6',
        type: { ko: 'LC (액체크로마토그래피)', en: 'LC (Liquid Chromatograph)' },
        model: 'U-3000',
        analysis: { ko: '폼알데하이드, 아세트알데하이드', en: 'Formaldehyde, Acetaldehyde' },
        image: imgA6,
      },
      {
        id: 'A-7',
        type: { ko: 'ASE (고속용매추출기)', en: 'ASE (Accelerated Solvent Extractor)' },
        model: 'Dionex ASE 350',
        analysis: { ko: '벤조(a)피렌', en: 'Benzo(a)pyrene' },
        image: imgA7,
      },
      {
        id: 'A-8',
        type: { ko: '질소농축기', en: 'Nitrogen Evaporator' },
        model: 'Turbo Vap LV Evaporator',
        analysis: { ko: 'VOCs', en: 'VOCs' },
        image: imgA8,
      },
      {
        id: 'A-9',
        type: { ko: '분광광도계 UV', en: 'UV Spectrophotometer' },
        model: 'UV-2600i',
        analysis: { ko: '브롬, 페놀, 암모니아, 불소, 염소, 황화수소, 시안화수소, 이황화탄소', en: 'Bromine, Phenol, Ammonia, Fluorine, Chlorine, H₂S, HCN, CS₂' },
        image: imgA9,
      },
      {
        id: 'A-10',
        type: { ko: '수은분석기', en: 'Mercury Analyzer' },
        model: 'RA-7000A',
        analysis: { ko: '수은', en: 'Mercury' },
        image: imgA10,
      },
      {
        id: 'A-11',
        type: { ko: 'ICP-OES (유도결합 플라즈마)', en: 'ICP-OES (Inductively Coupled Plasma OES)' },
        model: 'ICPE-9820',
        analysis: { ko: '중금속', en: 'Heavy Metals' },
        image: imgA11,
        featured: true,
      },
      {
        id: 'A-12',
        type: { ko: '불소·시안 자동증류장치', en: 'Auto Distillation Unit (F/CN)' },
        model: 'VF-2 (2구타입)',
        analysis: { ko: '플루오린화합물, 시안화수소', en: 'Fluorine Compounds, Hydrogen Cyanide' },
        image: imgA12,
      },
    ],
  },
  {
    key: 'water',
    category: { ko: '수질 분석실', en: 'Water Analysis Lab' },
    icon: FlaskConical,
    items: [
      {
        id: 'W-1',
        type: { ko: 'GC/MS with HS (가스크로마토그래피)', en: 'GC/MS with Headspace' },
        model: 'GC-2030',
        analysis: { ko: 'VOCs', en: 'VOCs' },
        image: imgW1,
      },
      {
        id: 'W-2',
        type: { ko: 'GC/MS (가스크로마토그래피)', en: 'GC/MS (Gas Chromatograph Mass Spectrometer)' },
        model: 'GC-MS-QP2020 NX',
        analysis: { ko: 'VOCs', en: 'VOCs' },
        image: imgW2,
      },
      {
        id: 'W-3',
        type: { ko: 'GC (ECD) (가스크로마토그래피)', en: 'GC with ECD Detector' },
        model: 'GC-2030',
        analysis: { ko: 'VOCs', en: 'VOCs' },
        image: imgW3,
      },
      {
        id: 'W-4',
        type: { ko: 'GC (FTD=NPD) (가스크로마토그래피)', en: 'GC with FTD/NPD Detector' },
        model: 'GC-2030',
        analysis: { ko: 'VOCs', en: 'VOCs' },
        image: imgW4,
      },
      {
        id: 'W-5',
        type: { ko: 'TOC (총유기탄소 분석기)', en: 'TOC Analyzer' },
        model: 'TOC-L',
        analysis: { ko: '총유기탄소', en: 'Total Organic Carbon' },
        image: imgW5,
      },
      {
        id: 'W-6',
        type: { ko: 'ICP-MS (유도결합 플라즈마)', en: 'ICP-MS (Inductively Coupled Plasma MS)' },
        model: 'iCAPRQ',
        analysis: { ko: '중금속', en: 'Heavy Metals' },
        image: imgW6,
        featured: true,
      },
      {
        id: 'W-7',
        type: { ko: 'AAS (원자흡수분광광도계)', en: 'AAS (Atomic Absorption Spectrometer)' },
        model: 'iCE3300',
        analysis: { ko: '중금속', en: 'Heavy Metals' },
        image: imgW7,
      },
      {
        id: 'W-8',
        type: { ko: '수은분석기', en: 'Mercury Analyzer' },
        model: 'RA-4300A',
        analysis: { ko: '수은', en: 'Mercury' },
        image: imgW8,
      },
      {
        id: 'W-9',
        type: { ko: '분광광도계 UV', en: 'UV Spectrophotometer' },
        model: 'SPECORD 50 Plus',
        analysis: { ko: '총인, 총질소, 염소이온, 질소화합물, 인화합물, 색도, 페놀, 시안, 불소, 6가크롬, 세제류', en: 'T-P, T-N, Chloride, Nitrogen Compounds, Phosphorus Compounds, Color, Phenol, CN, F, Cr⁶⁺, Surfactants' },
        image: imgW9,
        featured: true,
      },
      {
        id: 'W-10',
        type: { ko: '용존산소측정기', en: 'DO Meter' },
        model: 'DO-meter',
        analysis: { ko: '용존산소', en: 'Dissolved Oxygen' },
        image: imgW10,
      },
      {
        id: 'W-11',
        type: { ko: 'PH 측정기', en: 'PH Meter' },
        model: 'PH-meter',
        analysis: { ko: 'pH', en: 'pH' },
        image: imgW11,
      },
      {
        id: 'W-12',
        type: { ko: '소음 격리 챔버', en: 'Noise Isolating Chamber (Anechoic Chamber)' },
        model: 'Noise Isolating Chamber',
        analysis: { ko: '외부 간섭 제거 목적의 장비', en: 'External interference shielding' },
        image: imgW12,
      },
    ],
  },
  {
    key: 'bio',
    category: { ko: '생태특성실', en: 'Ecotoxicology Lab' },
    icon: Microscope,
    items: [
      {
        id: 'B-1',
        type: { ko: '잔류염소/암모니아 측정기', en: 'Residual Chlorine / Ammonia Meter' },
        model: 'HS 1000 Plus',
        analysis: { ko: '암모니아, 잔류염소 등', en: 'Ammonia, Residual Chlorine, etc.' },
        image: imgB1,
        featured: true,
      },
      {
        id: 'B-2',
        type: { ko: '용존산소측정기', en: 'DO Meter' },
        model: 'DO-meter',
        analysis: { ko: '용존산소', en: 'Dissolved Oxygen' },
        image: imgB2,
        featured: true,
      },
      {
        id: 'B-3',
        type: { ko: 'PH 측정기', en: 'PH Meter' },
        model: 'PH-meter',
        analysis: { ko: 'pH', en: 'pH' },
        image: imgB3,
      },
      {
        id: 'B-4',
        type: { ko: '전기전도도측정기', en: 'Electrical Conductivity Meter' },
        model: '-',
        analysis: { ko: '전기전도도', en: 'Electrical Conductivity' },
        image: imgB4,
      },
      {
        id: 'B-5',
        type: { ko: '경도측정기', en: 'Hardness Meter' },
        model: '-',
        analysis: { ko: '경도', en: 'Hardness' },
        image: imgB5,
      },
      {
        id: 'B-6',
        type: { ko: '알칼리도측정기', en: 'Alkalinity Meter' },
        model: '-',
        analysis: { ko: '알칼리도', en: 'Alkalinity' },
        image: imgB6,
      },
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
