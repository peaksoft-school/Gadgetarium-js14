import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import cardSlice from "./cardProducts/cardSlice";
import cardofProductDescriptionSlice from "./cardof-product-description/cardofProductDescriptionSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [cardSlice.name]: cardSlice.reducer,
    [cardofProductDescriptionSlice.name]: cardofProductDescriptionSlice.reducer,
  },
});
