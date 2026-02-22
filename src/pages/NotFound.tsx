import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "@/styles/pages/NotFound.module.css";

const NotFound = () => {
  const location = useLocation();
  const { language, t } = useLanguage();
  const homeHref = language === 'en' ? '/en' : '/';

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>{t('notFound.subtitle')}</p>
        <a href={homeHref} className={styles.link}>
          {t('notFound.returnHome')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
