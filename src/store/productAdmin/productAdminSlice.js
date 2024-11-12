import { createSlice } from "@reduxjs/toolkit";
import { getProdates } from "./productAdminAuthThank";

const initialState = {
  products: [],
  foundProducts: 0,
  currentPage: 0,
  totalPages: 0,
  loading: false,
  error: null,
};

export const productAdminSlice = createSlice({
  name: "productAdmin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProdates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProdates.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.elements;
        state.foundProducts = payload.foundProducts;
        state.currentPage = payload.currentPage;
        state.totalPages = payload.totalPages;
      })
      .addCase(getProdates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.payload;
      });
  },
});
