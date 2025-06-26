import "modern-normalize/modern-normalize.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./index.css"; // або './style.css', залежно від того, який файл у тебе є

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
