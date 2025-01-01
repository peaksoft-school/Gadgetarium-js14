import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getInfographic = createAsyncThunk(
  "getInfographic",
  async (period, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        "/api/infographics/infographic",
        {
          params: { period },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      throw error;
    }
  }
);
