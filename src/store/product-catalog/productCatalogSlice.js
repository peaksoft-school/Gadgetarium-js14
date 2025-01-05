import { createSlice } from "@reduxjs/toolkit";
import getSubCategories, {
  getAllCards,
  getCategories,
  getFilter,
  getLastViews,
  postFavourites,
  postToBasket,
} from "./productCatalogThunk";

const initialState = {
  categories: [],
  allCards: {
    productsResponses: [],
  },
  subCategories: [],
  isLoading: false,
  error: null,
  lastViews: [],
};

export const productCatalagSlice = createSlice({
  name: "productCatalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
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

      .addCase(getAllCards.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allCards = action.payload;
      })
      .addCase(getAllCards.rejected, (state, action) => {
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
      })

      .addCase(postFavourites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postFavourites.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postFavourites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

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

      .addCase(postToBasket.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })

      .addCase(postToBasket.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postToBasket.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getFilter.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })

      .addCase(getFilter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allCards = action.payload;
      })
      .addCase(getFilter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.allCards = [];
      });
  },
});

export default productCatalagSlice;
