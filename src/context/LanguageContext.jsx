import { useState, createContext, useEffect, useContext } from "react";
import languageData from './language.json';

export const LanguageContext = createContext({
  language: "es",
  setLanguage: () => { },
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [infoLang, setInfoLang] = useState(languageData.sp)

  const getLanguage = () => {
    const langData = languageData[language === 'es' ? 'sp' : 'en'];
    setInfoLang(langData);
  };


  const languageState = {
    language,
    setLanguage,
    infoLang,
    getLanguage,
  };

  return (
    <LanguageContext.Provider value={languageState}>
      {children}
    </LanguageContext.Provider>
  );
};
