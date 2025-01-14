import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import { toastifyMessage } from "../../utils/helpers/ToastSetting";

export const signInRequest = createAsyncThunk(
  "auth/signIn",
  async ({ userData, onClose }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/api/auth/sign-in", userData);
      const response = { ...data, isAuth: true };
      if (onClose) {
        onClose();
      }
      localStorage.setItem("Gadgetarium", JSON.stringify(response));
      toastifyMessage({ message: "Вы успешно авторизовались!" });
      return response;
    } catch (error) {
      toastifyMessage(
        error.response
          ? error.response.data.message || "Ошибка запроса"
          : "Что-то пошло не так!"
      );
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong during sign in"
      );
    }
  }
);

export const signUpRequest = createAsyncThunk(
  "auth/signUp",
  async ({ userData, onClose }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/api/auth/sign-up", userData);
      const response = { ...data, isAuth: true };
      if (onClose) {
        onClose();
      }
      localStorage.setItem("Gadgetarium", JSON.stringify(response));
      toastifyMessage({ message: "Вы успешно зарегистрировались" });
      return response;
    } catch (error) {
      toastifyMessage(
        error.response
          ? error.response.data.message || "Ошибка запроса"
          : "Что-то пошло не так!"
      );
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong during sign up"
      );
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", () => {
  localStorage.removeItem("Gadgetarium");
  toastifyMessage({ message: "Вы успешно вышли из аккаунта!" });
  return {
    name: "",
    email: "",
    token: "",
    role: "GUEST",
    isAuth: false,
  };
});
