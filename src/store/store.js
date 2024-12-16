import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import productCatalagSlice from "./product-catalog/ProductCatalogSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [productCatalagSlice.name]: productCatalagSlice.reducer,
  },
});
