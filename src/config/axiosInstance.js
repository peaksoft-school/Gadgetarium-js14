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
axiosInstance.interceptors.request.use(function (config) {
  const updateConfig = { ...config };
  const { userData } = store.getState().auth;

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MzM3MTgxMjQsImV4cCI6MTczNTE1ODEyNH0.VjiE0drcu0wc9YDuTdNinX3jS22YoVHsKeZgaDnQzaY";

  if (token) {
    updateConfig.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
