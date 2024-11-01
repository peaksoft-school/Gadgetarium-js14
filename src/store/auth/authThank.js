import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const signInRequest = createAsyncThunk(
  "auth/signIn",
  async ({ userData, onClose}, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth", userData);
      const response = { ...data.data, token: data.token, isAuth: true };
      if (onClose) {
        onClose();
      }
      localStorage.setItem("Gadgetarium", JSON.stringify(response));
      return response;
    } catch (error) {
      rejectWithValue(
        error.response?.data?.message || "Something went wrong during sign in"
      );
    }
  }
);

export const signUpRequest = createAsyncThunk(
  "auth/signUp",
  async ({ userData, onClose }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register", {
        ...userData,
        role: "USER",
      });
      const response = { ...data.data, token: data.token, isAuth: true };
      if (onClose) {
        onClose();
      }
      localStorage.setItem("Gadgetarium", JSON.stringify(response));
      return response;
    } catch (error) {
      rejectWithValue(
        error.response?.data?.message || "Something went wrong during sign up"
      );
    }
  }
);
