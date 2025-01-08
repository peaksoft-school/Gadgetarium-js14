import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getOrdersAdmin = createAsyncThunk(
  "orderAdmin/getOrdersAdmin",
  async (
    { keyWord, status, from, before, page, pageSize },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.get("/api/admin/orders", {
        params: {
          keyWord,
          status,
          from,
          before,
          page,
          pageSize,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getOrderAdminId = createAsyncThunk(
  "orderAdminId/getOrderAdminId",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/admin/orders/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const deleteAdminOrders = createAsyncThunk(
  "deleteAdminOrders",
  async (ordersId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/api/admin/orders/${ordersId}`);
      return { id: ordersId };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
