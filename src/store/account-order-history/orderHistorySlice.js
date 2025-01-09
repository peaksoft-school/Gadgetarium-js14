import { createSlice } from "@reduxjs/toolkit";
import { getOneOrder, getOrderHistory } from "./orderHistoryThunk";

const initialState = {
  isLoading: false,
  error: null,
  orderHistory: [],
  oneOrder: [],
};

export const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderHistory.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })
      .addCase(getOrderHistory.fulfilled, (state, action) => {
        (state.isLoading = false), (state.orderHistory = action.payload);
      })
      .addCase(getOrderHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getOneOrder.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })
      .addCase(getOneOrder.fulfilled, (state, action) => {
        (state.isLoading = false), (state.oneOrder = action.payload);
      })
      .addCase(getOneOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
