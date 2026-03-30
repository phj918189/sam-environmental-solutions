import { useRef, useEffect, useState, useCallback, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChartContainer } from '@/components/ui/chart';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { chartData, chartConfig } from '@/data/home';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import styles from '@/styles/pages/Home/DataSection.module.css';

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
  const { prefix, t } = useLanguage();
  const { ref: headerRef, inView } = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.sectionTop} ref={headerRef}>
          <h2 className={`${styles.sectionTitle} reveal reveal-up ${inView ? 'in-view' : ''}`}>
            {t('home.research')}
          </h2>
          <p
            className={`${styles.sectionDesc} reveal reveal-up ${inView ? 'in-view' : ''}`}
            style={{ '--reveal-delay': '120ms' } as CSSProperties}
          >
            {t('home.researchDescLine1')}
            <br />
            {t('home.researchDescLine2')}
          </p>
          <Link
            to={`${prefix}/about`}
            className={`${styles.moreLink} reveal reveal-up ${inView ? 'in-view' : ''}`}
            style={{ '--reveal-delay': '200ms' } as CSSProperties}
          >
            {t('common.more')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className={styles.grid}>
          <div
            className={`${styles.dataCard} reveal reveal-left ${inView ? 'in-view' : ''}`}
            style={{ '--reveal-delay': '160ms' } as CSSProperties}
          >
            <div className={styles.dataLabel}>{t('home.serviceDistribution')}</div>
            <div className={styles.chartWrap}>
              <ChartContainer config={chartConfig} className="h-[220px] w-full max-w-full">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
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
            <p className={styles.dataNote}>{t('home.basedOnRecords')}</p>
          </div>

          <div
            className={`${styles.statsCard} reveal reveal-right ${inView ? 'in-view' : ''}`}
            style={{ '--reveal-delay': '300ms' } as CSSProperties}
          >
            <div className={styles.statsHeader}>
              <h3 className={styles.statsTitle}>{t('home.trustIndicators')}</h3>
              <p className={styles.statsSubtitle}>
                {t('home.trustSubtitle')}
              </p>
            </div>
            <div className={styles.statsGrid}>
              <CountUpStat target={1992} suffix="" label={t('home.established')} duration={2200} />
              <CountUpStat target={30} suffix="+" label={t('home.years')} />
              <CountUpStat target={60} suffix="+" label={t('home.facilities')} />
              <CountUpStat target={100} suffix="%" label={t('home.retention')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
