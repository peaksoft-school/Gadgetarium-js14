import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance"; 

export const getOrdersData = createAsyncThunk(
  "orderData/getOrdersData", 
  async (id, { rejectWithValue }) => { 
    try {
      const { data } = await axiosInstance.get(`/api/admin/orders/${id}`); 
      return data; 
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
