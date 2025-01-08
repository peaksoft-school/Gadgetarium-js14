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
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZGZnakBnbWFpbC5jb20iLCJpYXQiOjE3MzYyNTQzMzUsImV4cCI6MTczNzY5NDMzNX0.aPxtMlBsSrK9sfIZ4-iilq8UD4Ws8EcKZ6juN6Svvic";
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
        `    Ошибка ${status}: ${error.response.data.message || error.message} `
      );
    } else {
      console.error("Ошибка сети или сервера");
    }
    return Promise.reject(error);
  }
);

// import axios from "axios";
// const BASE_URL = import.meta.env.VITE_BASE_URL;

// export const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// let store;

// export const injectStore = (_store) => {
//   store = _store;
// };

// axiosInstance.interceptors.request.use(
//   function (config) {
//     const token =
//       store?.getState()?.auth?.token || localStorage.getItem("authToken");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token.trim()}`;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrdWJhbmNoQGdtYWlsLmNvbSIsImlhdCI6MTczNTk4NzQ1NiwiZXhwIjoxNzM3NDI3NDU2fQ.ik30kDLCSOde3RNJgHZtc5LLCxXx8MXThxLeTMeBYpY

// import axios from "axios";
// const BASE_URL = import.meta.env.VITE_BASE_URL;

// export const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// let store;
// export const injectStore = (_store) => {
//   store = _store;
// };
// axiosInstance.interceptors.request.use(function (config) {
//   const updateConfig = { ...config };
//   const { userData } = store.getState().auth;
//   if (userData.token) {
//     return (updateConfig.headers.Authorization = `Bearer ${userData.token}`);
//   }
//   return config;
// });

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
