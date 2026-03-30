import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createT, type TFunction } from '@/locales';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  lang: Language;
  prefix: string;
  setLanguage: (lang: Language) => void;
  t: TFunction;
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

  const t = useMemo(() => createT(language), [language]);
  const prefix = language === 'en' ? '/en' : '';

  return (
    <LanguageContext.Provider value={{ language, lang: language, prefix, setLanguage, t }}>
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
