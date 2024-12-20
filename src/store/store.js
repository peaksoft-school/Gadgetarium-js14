import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { productAdminSlice } from "./productAdmin/productAdminSlice";
import { infografictSlice } from "./productAdmin/infografictSlice";
import cardSlice from "./cardProducts/cardSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [productAdminSlice.name]: productAdminSlice.reducer,
    [infografictSlice.name]:infografictSlice.reducer
    [cardSlice.name]: cardSlice.reducer,
  },
});
