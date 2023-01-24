import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import { StoreProvider } from "./context/store";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
