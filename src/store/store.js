import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import cardSlice from "./cardProducts/cardSlice";
import productCatalagSlice from "./product-catalog/productCatalogSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [productCatalagSlice.name]: productCatalagSlice.reducer,
    [cardSlice.name]: cardSlice.reducer,
  },
});
