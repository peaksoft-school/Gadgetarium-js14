import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { adminCommentsSlice } from "./slice/adminComents/adminCommentsSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [adminCommentsSlice.name]:adminCommentsSlice.reducer
  },
});
