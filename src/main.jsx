// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "sonner"; // global notification provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* Toaster must be mounted globally once */}
    <Toaster richColors position="top-right" />
  </React.StrictMode>
);
