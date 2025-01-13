import { createSlice } from "@reduxjs/toolkit";
import {
  deleteAdminOrders,
  getOrderAdminId,
  getOrdersAdmin,
} from "./orderAdminThunk";

const initialState = {
  foundProduct: [],
  isLoading: false,
  error: null,
  productsId: [],
  ordersData: [],
};

export const orderAdminSlice = createSlice({
  name: "orderAdmin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersAdmin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOrdersAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.foundProduct = action.payload.elements;
      })
      .addCase(getOrdersAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOrderAdminId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOrderAdminId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsId = action.payload;
      })
      .addCase(getOrderAdminId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteAdminOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteAdminOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = state.orders.filter(
          (order) => order.id !== action.payload.id
        );
      })
      .addCase(deleteAdminOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
