import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getPay = createAsyncThunk(
  "getPay",
  async ({ paymentId, payerId }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/api/user/pay_pal`, {
        params: {
          paymentId,
          payerId,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
