import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoriesThunk";
import getSubCategories from "./categoriesThunk";

const initialState = {
  categories: [],
  subCategories: [],
  brands: [],
  isLoading: false,
  error: null,
};
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, { payload }) => {
        (state.isLoading = true), (state.error = null);
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getSubCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSubCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subCategories = action.payload.subCategories;

        state.brands = action.payload.brands;
      })
      .addCase(getSubCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
