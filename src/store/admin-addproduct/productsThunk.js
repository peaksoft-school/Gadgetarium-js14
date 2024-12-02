import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const postFile = createAsyncThunk(
  "postFile",
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await axiosInstance.post(
        `/api/s3_file/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return data;
    } catch (error) {
      console.error("Ошибка загрузки файла:", error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const postAllProducts = createAsyncThunk(
  "postProducts",
  async (products, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "/api/admin/products",
        products
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
