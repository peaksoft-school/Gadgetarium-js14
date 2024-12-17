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
