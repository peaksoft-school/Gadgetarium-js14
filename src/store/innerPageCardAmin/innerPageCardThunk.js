import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

const getProdates = createAsyncThunk(
  "innerPageCard/getProdates",
  async ({ productId, colour }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/user/products/get-by-id", {
        params: {
          productId,
          colour,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//рейтинг
const getRating = createAsyncThunk(
  "innerPageCard/getRating",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/user/reviews/${productId}`
      );

      return data;
    } catch (error) {
      x("ошибка запроса рейтинга", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//коментарии
const getAllReviews = createAsyncThunk(
  "innerPageCard/getAllReviews",
  async (params, { rejectWithValue }) => {
    try {
      const { id } = params;
      const { data } = await axiosInstance.get(
        `/api/user/products/get_all_reviews_by_product_id/1?page=3`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//удаление
const deleteProduct = createAsyncThunk(
  "innerPageCard/deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(
        `/api/admin/products/${productId}`
      );

      return { productId };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export { getProdates, getRating, getAllReviews, deleteProduct };
