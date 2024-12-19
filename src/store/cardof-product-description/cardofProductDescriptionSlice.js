import { createSlice } from "@reduxjs/toolkit";
import {
  getCharacteristics,
  getLastViews,
} from "./cardofProductDescriptionThunk";

const initialState = {
  isLoading: false,
  error: null,
  lastViews: [],
  characteristics: [],
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

      .addCase(getCharacteristics.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })

      .addCase(getCharacteristics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.characteristics = action.payload;
      })
      .addCase(getCharacteristics.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default cardofProductDescriptionSlice;
