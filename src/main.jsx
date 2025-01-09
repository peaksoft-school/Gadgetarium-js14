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
<<<<<<< HEAD
import Notification from "./components/UI/Toastify.jsx";
=======
import { Provider } from "react-redux";
import { injectStore } from "./config/axiosInstance.js";
import store from "./store/store.js";
>>>>>>> c8df8344d743a49e7cc4a2d73fc2fc453a9e976f

injectStore(store);
dayjs.locale("ru");

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
<<<<<<< HEAD
        <Notification />
        <App />
=======
        <Provider store={store}>
          <App />
        </Provider>
>>>>>>> c8df8344d743a49e7cc4a2d73fc2fc453a9e976f
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);
