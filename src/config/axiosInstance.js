import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let store;

export const injectStore = (_store) => {
  store = _store;
};

axiosInstance.interceptors.request.use(
  function (config) {
    const updateConfig = { ...config };

    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MzUxMTQ1OTYsImV4cCI6MTczNjU1NDU5Nn0.aA2SMp-GUaVzVhVRgsM99XYkLvgI7FHPrkhvR9wsPq0";
    if (token) {
      updateConfig.headers.Authorization = `Bearer ${token}`;
    }

    return updateConfig;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      const status = error.response.status;
      console.error(
        `Ошибка ${status}: ${error.response.data.message || error.message} `
      );
    } else {
      console.error("Ошибка сети или сервера");
    }
    return Promise.reject(error);
  }
);
