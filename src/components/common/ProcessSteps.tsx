import { LucideIcon } from 'lucide-react';
import styles from '@/styles/common/ProcessSteps.module.css';

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

const ProcessSteps = ({ steps }: ProcessStepsProps) => {
  return (
    <div className={styles.grid}>
      {steps.map((step, index) => (
        <div key={step.title} className={styles.step}>
          <div className={styles.iconWrap}>
            <step.icon className={styles.icon} />
          </div>
          <h3 className={styles.title}>
            <span className={styles.index}>{index + 1}.</span>
            {step.title}
          </h3>
          <p className={styles.description}>{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
