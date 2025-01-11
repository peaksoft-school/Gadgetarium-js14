import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getOrderHistory = createAsyncThunk(
  "getOrderHistory",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/order_history");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getOneOrder = createAsyncThunk(
  "getOne",
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/api/order_history/${orderId}`);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const deleteAllOrderHistory = createAsyncThunk(
  "orderHistory/deleteAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete("/api/order_history/delete");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
