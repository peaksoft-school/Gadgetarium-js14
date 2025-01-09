import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getLastViews = createAsyncThunk(
  "getViews",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/user/products/last_views");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getProducts = createAsyncThunk(
  "innerGetProducts",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/user/products/get-by-id", {
        params: {
          productId,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getRating = createAsyncThunk(
  "getRaiting",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/user/reviews/${productId}`
      );

      return data;
    } catch (error) {
      console.log("ошибка запроса рейтинга", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const getAllReviews = createAsyncThunk(
  "getAllReviews",
  async (params, { rejectWithValue }) => {
    try {
      const { id } = params;
      const { data } = await axiosInstance.get(
        `/api/user/products/get_all_reviews_by_product_id/${id}?page=3`
      );
      return data;
    } catch (error) {
      console.log("Ошибка при получении данных", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getPDF = createAsyncThunk(
  "getPDF",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/user/products/pdf/generate/${id}`
      );
      return data;
    } catch (error) {
      console.error("Ошибка при получении PDF файла:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const postToFavorites = createAsyncThunk(
  "postToFavorites",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "/api/basket/move_to_favorites",
        [productId]
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
