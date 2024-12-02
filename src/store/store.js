import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { categoriesSlice } from "./admin-addproduct/categoriesSlice";
import { productSlice } from "./admin-addproduct/productsSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [categoriesSlice.name]: categoriesSlice.reducer,
    [productSlice.name]: productSlice.reducer,
  },
});
