import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://c7512915e314a74e.mokky.dev.user",
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
  if (userData.token) {
    return (updateConfig.headers.Authorization = `Bearer ${userData.token}`);
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
