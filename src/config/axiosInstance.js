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
    const token =
      store?.getState()?.auth?.token || localStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token.trim()}`;
    }

    return config;
  },
  function (error) {
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
