import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

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
      return response;
    } catch (error) {
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
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong during sign up"
      );
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", () => {});
