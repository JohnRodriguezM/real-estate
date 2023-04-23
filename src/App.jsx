import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { FormUse } from "./components/Form/Form";

import './css/App.css'
import { Companies } from "./components/Companies/Companies";
import { Residences } from "./components/Residencies/Residences";
import { LanguageContext } from "./context/LanguageContext";
function App() {
  const { language, getLanguage } = useContext(LanguageContext);

  useEffect(() => {
    getLanguage()
  }, [language])
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <section className="App">
              <section>
                <div className="white-gradient" />
                <Header />
                <Hero />
              </section>
              <Companies />
              <Residences />
            </section>
          </>} />

        <Route path="/form" element={
          <>
            <FormUse />
          </>} />


      </Routes>

    </>
  );
}

export default App;
/*font-family: 'Poppins', sans-serif;*/
