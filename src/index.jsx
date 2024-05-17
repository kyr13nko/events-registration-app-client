import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App.jsx";

import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>
);
