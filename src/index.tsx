import "../node_modules/bulma/bulma.sass";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const element = document.querySelector("#root");

if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

/*
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
// eslint-disable-next-line jest/require-hook
reportWebVitals();
