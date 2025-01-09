import { createSlice } from "@reduxjs/toolkit";
import { getAccountFavourites } from "./accountFavouritesThunk";

const initialState = {
  isLoading: false,
  error: null,
  favouritesCards: [],
};

export const accountFavouritesSlice = createSlice({
  name: "accountFavourites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccountFavourites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getAccountFavourites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favouritesCards = action.payload;
      })

      .addCase(getAccountFavourites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
