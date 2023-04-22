import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App";


import { BrowserRouter as BrRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrRouter>
        <App />
      </BrRouter>
    </Provider>
  </StrictMode>
);
