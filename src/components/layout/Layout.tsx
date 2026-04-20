import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import DocumentHead from '@/components/common/DocumentHead';
import ScrollToTop from '@/components/common/ScrollToTop';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';
import ChatWidget from '@/components/common/ChatWidget';
import styles from '@/styles/common/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <DocumentHead />
      <ScrollToTop />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <ScrollToTopButton />
      {['true', '1'].includes(import.meta.env.VITE_ENABLE_AI_CHAT ?? '') && (
        <ChatWidget />
      )}
    </div>
  );
};

export default Layout;
