import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';
import styles from '@/styles/components/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <ScrollToTop />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
