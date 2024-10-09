import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./assets/theme/theme.js";
import Notification from "./components/UI/Toastify.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Notification />

      <App />
    </ThemeProvider>
  </React.StrictMode>
);
