import { createSlice } from "@reduxjs/toolkit";
import { getCompareCards, postFavourites } from "./compareThunk";

const initialState = {
  error: false,
  isLoading: null,
  compare: [],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompareCards.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getCompareCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.compare = action.payload;
      })

      .addCase(getCompareCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(postFavourites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(postFavourites.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      .addCase(postFavourites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
