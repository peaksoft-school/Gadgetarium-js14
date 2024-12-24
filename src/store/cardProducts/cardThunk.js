import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getrecommendedCards = createAsyncThunk(
  "getRecommended",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        "/api/user/products/recommended"
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getNewCards = createAsyncThunk(
  "newCards",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/user/products/new");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getDiscountCards = createAsyncThunk(
  "discountCards",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/user/products/discount");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
