import { createSlice } from "@reduxjs/toolkit";
import { getLastViews } from "./cardofProductDescriptionThunk";

const initialState = {
  isLoading: false,
  error: null,
  lastViews: [],
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
      });
  },
});

export default cardofProductDescriptionSlice;
