import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/lib/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if language is stored in localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    // Check browser language
    const browserLang = navigator.language.split("-")[0];
    // Default to German for the Swiss site, but use browser language if it matches our available languages
    const defaultLang = ["de", "en", "fr", "it"].includes(browserLang)
      ? (browserLang as Language)
      : "de";
    return savedLanguage || defaultLang;
  });

  useEffect(() => {
    // Update localStorage when language changes
    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
