import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MzQwMDMwMjIsImV4cCI6MTczNTQ0MzAyMn0.kVA2WoJ7wUi7hcWAlK-ouKVKpKHQUMbX4-u--kUV-wc";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

let store;

export const injectStore = (_store) => {
  store = _store;
};

axiosInstance.interceptors.request.use(
  function (config) {
    // const token =
    //   store?.getState()?.auth?.token || localStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token.trim()}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
