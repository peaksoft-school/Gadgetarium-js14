import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getCompareCards = createAsyncThunk(
  "comare-cards",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        "/api/user/products/compare-product"
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Не удалось получить товары для сравнения"
      );
    }
  }
);

export const postFavourites = createAsyncThunk(
  "postFavourites",
  async ({ subProductId, addOrDelete }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        `/api/favourites/${subProductId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Ошибка");
    }
  }
);
