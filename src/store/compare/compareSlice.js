import { createSlice } from "@reduxjs/toolkit";
import { getCompareCards } from "./compareThunk";

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
      });
  },
});
