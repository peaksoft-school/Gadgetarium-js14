import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import theme from "./assets/theme/theme.js";
import dayjs from "dayjs";
import { Provider } from "react-redux";
import { injectStore } from "./config/axiosInstance.js";
import store from "./store/store.js";

injectStore(store);
dayjs.locale("ru");

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Provider store={store}>
          <App />
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);
