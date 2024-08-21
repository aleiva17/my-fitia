import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import "@/i18n/config/i18n";

import { ToastContainer } from "react-toastify";
import { AppRouter } from "@/router/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>,
);
