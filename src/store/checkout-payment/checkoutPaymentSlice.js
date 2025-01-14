import { createSlice } from "@reduxjs/toolkit";
import { getPay } from "./checkouPaymentThunk";

const initialState = {
  isLoading: false,
  error: null,
  customerInfo: {},
};

export const checkoutPaymentSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addUserDetails: (state, action) => {
      state.customerInfo = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPay.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getPay.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addUserDetails } = checkoutPaymentSlice.actions;
