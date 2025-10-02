import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./app";
import "./index.css";
import Header from "./header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <hr />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
