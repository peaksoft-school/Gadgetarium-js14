import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import theme from "./assets/theme/theme.js";
import dayjs from "dayjs";
import Notification from "./components/UI/Toastify.jsx";

dayjs.locale("ru");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Notification />
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
