import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { adminCommentsSlice } from "./slice/adminComents/adminCommentsSlice";
import cardSlice from "./cardProducts/cardSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [adminCommentsSlice.name]: adminCommentsSlice.reducer,
    [cardSlice.name]: cardSlice.reducer,
  },
});
