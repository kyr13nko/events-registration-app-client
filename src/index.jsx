import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/index.js";

import App from "./components/App.jsx";

import { GlobalStyles } from "./styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
