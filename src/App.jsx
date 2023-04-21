import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { FormUse } from "./components/Form/Form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
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
