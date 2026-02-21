import { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChartContainer } from '@/components/ui/chart';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import styles from '@/styles/pages/Home/DataSection.module.css';

const chartData = [
  { name: '대기환경', value: 35, color: 'hsl(210, 70%, 45%)' },
  { name: '수질환경', value: 40, color: 'hsl(190, 70%, 45%)' },
  { name: '악취환경', value: 25, color: 'hsl(160, 60%, 40%)' },
];

const chartConfig = {
  대기환경: { color: 'hsl(210, 70%, 45%)' },
  수질환경: { color: 'hsl(190, 70%, 45%)' },
  악취환경: { color: 'hsl(160, 60%, 40%)' },
};

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number; payload: { name: string } }> }) => {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipName}>{item.payload.name}</span>
      <span className={styles.tooltipValue}>{item.value}%</span>
    </div>
  );
};

const CountUpStat = ({ target, suffix, label, duration = 1800 }: { target: number; suffix: string; label: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const runAnimation = useCallback(() => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [target, duration, started]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) runAnimation();
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [runAnimation]);

  return (
    <div ref={ref} className={styles.statItem}>
      <span className={styles.statValue}>
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

const DataSection = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';

  return (
    <section className={styles.section}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.sectionTop}>
          <h2 className={styles.sectionTitle}>{t('리서치', 'Research & Data')}</h2>
          <p className={styles.sectionDesc}>
          {t(
            '대기·수질·악취 환경측정 실적과 ',
            'Reliable data based on over 30 years of environmental measurement expertise.'
          )}
          <br />
          {t('30년 이상의 전문 경력을 바탕으로 한 신뢰할 수 있는 데이터를 제공합니다.', 'We provide reliable data backed by over 30 years of professional experience.')}
          </p>
          <Link to={`${prefix}/about`} className={styles.moreLink}>
            {t('더 보기', 'More')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className={styles.grid}>
          <div className={styles.dataCard}>
            <div className={styles.dataLabel}>{t('사업영역별 실적 비중', 'Service Distribution')}</div>
            <div className={styles.chartWrap}>
              <ChartContainer config={chartConfig} className="h-[260px] w-full">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={72}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                    stroke="none"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ChartContainer>
            </div>
            <div className={styles.legendRow}>
              {chartData.map((item) => (
                <div key={item.name} className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                  <span className={styles.legendValue}>{item.value}%</span>
                </div>
              ))}
            </div>
            <p className={styles.dataNote}>{t('(환경측정 실적 기준)', '(Based on measurement records)')}</p>
          </div>
          <div className={styles.statsCard}>
            <div className={styles.statsHeader}>
              <h3 className={styles.statsTitle}>{t('신뢰 지표', 'Trust Indicators')}</h3>
              <p className={styles.statsSubtitle}>
                {t('30년 이상 축적된 데이터와 신뢰', '30+ years of accumulated data and trust')}
              </p>
            </div>
            <div className={styles.statsGrid}>
              <CountUpStat target={1992} suffix="" label={t('설립연도', 'Established')} duration={2200} />
              <CountUpStat target={30} suffix="+" label={t('업력 (년)', 'Years')} />
              <CountUpStat target={60} suffix="+" label={t('관리 업체', 'Facilities')} />
              <CountUpStat target={100} suffix="%" label={t('재계약율', 'Retention')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
