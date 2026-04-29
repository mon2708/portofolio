"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  isTransitioning: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("id");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setLanguage = useCallback((newLang: Language) => {
    if (newLang === lang) return;
    
    setIsTransitioning(true);
    
    // Delay pergantian bahasa agar terjadi saat layar tertutup animasi
    setTimeout(() => {
      setLangState(newLang);
    }, 500);

    // Matikan status transisi setelah animasi selesai
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLanguage(lang === "id" ? "en" : "id");
  }, [lang, setLanguage]);

  return (
    <LanguageContext.Provider value={{ lang, isTransitioning, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
