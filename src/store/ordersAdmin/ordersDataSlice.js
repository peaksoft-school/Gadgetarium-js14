import { createSlice } from "@reduxjs/toolkit";
import { getOrdersData } from "./ordersDataThunk";

const initialState = {
  ordersData: [],
  isLoading: false,
};

export const ordersDataSlice = createSlice({
  name: "ordersData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOrdersData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ordersData = action.payload;
      })
      .addCase(getOrdersData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
