import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import en from "../Locales/en";
import hi from "../Locales/hi";
import gu from "../Locales/gu";
import ur from "../Locales/ur";

const translations = {
  en,
  hi,
  gu,
  ur,
};

const LanguageContext = createContext(null);

function getSavedLanguage() {
  const savedLanguage = localStorage.getItem("website-language");

  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

  return "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getSavedLanguage);

  useEffect(() => {
    const isUrdu = language === "ur";

    localStorage.setItem("website-language", language);

    document.documentElement.lang = language;
    document.documentElement.dir = isUrdu ? "rtl" : "ltr";

    document.body.classList.toggle("rtl-language", isUrdu);
  }, [language]);

  const translate = (key) => {
    const keyParts = key.split(".");

    let translatedValue = translations[language];

    for (const keyPart of keyParts) {
      translatedValue = translatedValue?.[keyPart];
    }

    if (translatedValue !== undefined) {
      return translatedValue;
    }

    let fallbackValue = translations.en;

    for (const keyPart of keyParts) {
      fallbackValue = fallbackValue?.[keyPart];
    }

    return fallbackValue ?? key;
  };

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t: translate,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}