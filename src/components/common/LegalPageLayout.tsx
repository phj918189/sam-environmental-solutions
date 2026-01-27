import { ReactNode } from 'react';
import { Section } from '@/components/ui/section';
import PageHero from '@/components/common/PageHero';
import styles from '@/styles/common/LegalPage.module.css';

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  return (
    <>
      <PageHero title={title} />
      <Section>
        <div className={styles.content}>{children}</div>
      </Section>
    </>
  );
};

export default LegalPageLayout;
