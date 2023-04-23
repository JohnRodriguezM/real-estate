import { useState, createContext, useEffect, useContext } from "react";
import languageData from './language.json';

export const LanguageContext = createContext({
  language: "es",
  setLanguage: () => { },
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [infoLang, setInfoLang] = useState(languageData)

  useEffect(() => {
    fetch('./language.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    /*.then(data => {
      let infoLang;
      if (language === "es") {
        infoLang = data.sp;
      } else {
        infoLang = data.en;
      }
      setInfoLang(infoLang);
    })
    .catch(error => console.error(error));*/
  }, []);

  const languageState = {
    language,
    setLanguage,
    infoLang,
  };

  return (
    <LanguageContext.Provider value={languageState}>
      {children}
    </LanguageContext.Provider>
  );
};
