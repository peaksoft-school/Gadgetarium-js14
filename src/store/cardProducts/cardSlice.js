import { createSlice } from "@reduxjs/toolkit";
import {
  getDiscountCards,
  getNewCards,
  getrecommendedCards,
} from "./cardThunk";

const initialState = {
  recommendCards: [],
  newCards: [],
  disCountCards: [],
  isLoading: false,
  error: null,
};

export const cardSlice = createSlice({
  name: "userCards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getrecommendedCards.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getrecommendedCards.fulfilled, (state, action) => {
        console.log("test", state);

        state.isLoading = false;
        state.recommendCards = action.payload;
      })
      .addCase(getrecommendedCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getNewCards.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNewCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newCards = action.payload;
      })
      .addCase(getNewCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getDiscountCards.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDiscountCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.disCountCards = action.payload;
      })
      .addCase(getDiscountCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export default cardSlice;
