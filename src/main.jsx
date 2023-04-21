import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App";


import { BrowserRouter as BrRouter } from 'react-router-dom'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrRouter>
      <App />
    </BrRouter>
  </StrictMode>
);
