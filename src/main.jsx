import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App";


import { BrowserRouter as BrRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <Provider store={store}>
        <BrRouter>
          <App />
        </BrRouter>
      </Provider>
    </LanguageProvider>
  </StrictMode>
);
