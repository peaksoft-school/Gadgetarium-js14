import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import cardSlice from "./cardProducts/cardSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [cardSlice.name]: cardSlice.reducer,
  },
});
