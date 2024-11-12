import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getProdates = createAsyncThunk(
  "getProdates",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/admin/products");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const postProdates = createAsyncThunk();
