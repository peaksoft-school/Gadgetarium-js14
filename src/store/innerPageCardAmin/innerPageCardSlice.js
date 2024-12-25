import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct, getAllReviews, getProdates, getRating } from "./innerPageCardThunk";

const initialState = {
  products: [],
  loading: false,
  error: null,
  ratingData: null,
  ratingLoading: false,
  ratingError: null,
  reviewsData: [],
  reviewsLoading: false,
  reviewsError: null,
  deleteLoading: false, 
  deleteError: null, 
  deleteSuccess: false, 
};

export const innerPageCardSlice = createSlice({
  name: "innerPageCard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProdates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProdates.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProdates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(getRating.pending, (state) => {
        state.ratingLoading = true;
        state.ratingError = null;
      })
      .addCase(getRating.fulfilled, (state, action) => {
        state.ratingLoading = false;
        state.ratingData = action.payload;
      })
      .addCase(getRating.rejected, (state, action) => {
        state.ratingLoading = false;
        state.ratingError = action.payload;
      });
    builder
      .addCase(getAllReviews.pending, (state) => {
        state.reviewsLoading = true;
        state.reviewsError = null;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.reviewsData = action.payload;
        state.reviewsLoading = false;
      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.reviewsLoading = false;
        state.reviewsError = action.payload;
      });
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.deleteLoading = true;
        state.deleteError = null;
        state.deleteSuccess = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.deleteLoading = false;
        state.deleteSuccess = true;
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.deleteLoading = false;
        state.deleteError = action.payload;
      });
  },
});

export default innerPageCardSlice.reducer;
