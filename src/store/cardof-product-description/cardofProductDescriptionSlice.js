import { createSlice } from "@reduxjs/toolkit";
import {
  getAllReviews,
  getLastViews,
  getPDF,
  getProducts,
  getRating,
  postToFavorites,
} from "./cardofProductDescriptionThunk";

const initialState = {
  isLoading: false,
  error: null,
  lastViews: [],
  characteristics: [],
  products: [],
  ratingData: null,
  reviewsData: [],
  pdfFile: null,
};

export const cardofProductDescriptionSlice = createSlice({
  name: "cardofProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getLastViews.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })

      .addCase(getLastViews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.lastViews = action.payload;
      })
      .addCase(getLastViews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(postToFavorites.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })

      .addCase(postToFavorites.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getProducts.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })

      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getRating.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ratingData = action.payload;
      })
      .addCase(getRating.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getAllReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.reviewsData = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getPDF.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPDF.fulfilled, (state, action) => {
        state.pdfFile = action.payload;
        state.isLoading = false;
      })
      .addCase(getPDF.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default cardofProductDescriptionSlice;
