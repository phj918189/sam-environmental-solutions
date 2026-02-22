import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { processStepsData } from '@/data/home';
import styles from '@/styles/pages/Home/ProcessSection.module.css';

const ProcessSection = () => {
  const { language, t } = useLanguage();
  const lang = language as 'ko' | 'en';
  const prefix = language === 'en' ? '/en' : '';

  const steps = processStepsData.map((step) => ({
    icon: step.icon,
    title: step.title[lang],
    desc: step.description[lang],
  }));

  return (
    <section className={styles.section}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.sectionTop}>
          <h2 className={styles.sectionTitle}>{t('home.ourProcess')}</h2>
          <p className={styles.sectionDesc}>
          {t('home.processDesc')}
          </p>
          <Link to={`${prefix}/contact`} className={styles.moreLink}>
            {t('common.more')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className={styles.stepsWrapper}>
          <div className={styles.connectorLine} aria-hidden />
          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <div key={step.title} className={styles.step}>
                <div className={styles.stepIcon}>
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
