import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getAccountFavourites = createAsyncThunk(
  "getFavourites",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/user/products/chosen_one");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
