import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import cardSlice from "./cardProducts/cardSlice";
import { itemsInCardSlaice } from "./intemsInCard/itemsInCardSlaice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [cardSlice.name]: cardSlice.reducer,
    [itemsInCardSlaice.name]:itemsInCardSlaice.reducer
  },
});
