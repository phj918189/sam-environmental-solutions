import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (ko: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>('ko');

  useEffect(() => {
    const isEnglish = location.pathname.startsWith('/en');
    setLanguageState(isEnglish ? 'en' : 'ko');
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    const isCurrentlyEnglish = currentPath.startsWith('/en');
    
    if (lang === 'en' && !isCurrentlyEnglish) {
      navigate('/en' + currentPath);
    } else if (lang === 'ko' && isCurrentlyEnglish) {
      navigate(currentPath.replace('/en', '') || '/');
    }
    setLanguageState(lang);
  };

  const t = (ko: string, en: string) => (language === 'ko' ? ko : en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
