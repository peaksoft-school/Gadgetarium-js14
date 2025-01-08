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
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqanNkaGpAZ21haWwuY29tIiwiaWF0IjoxNzM2MzMxNDE2LCJleHAiOjE3Mzc3NzE0MTZ9.nVDVOWEjSZni85DSlzE2UhIePoPnX6VJgjYJMxemDfE";
    if (token) {
      updateConfig.headers.Authorization = `Bearer ${token}`;
    }

    return updateConfig;
  },
  function (error) {
    if (error.response) {
      const status = error.response.status;
    } else {
      console.error("Ошибка сети или сервера");
    }
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
