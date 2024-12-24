import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getCategories = createAsyncThunk(
  "getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        "/api/admin/products/get_all/categories"
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const getSubCategories = createAsyncThunk(
  "getSubCategories",
  async (categoryId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/admin/products/get_all/${categoryId}/brands_and_sub_categories`
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export default getSubCategories;
