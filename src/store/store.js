import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { productAdminSlice } from "./productAdmin/productAdminSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [productAdminSlice.name]: productAdminSlice.reducer,
  },
});
