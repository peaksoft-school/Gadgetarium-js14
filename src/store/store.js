
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";  
import { innerPageCardSlice } from "./innerPageCardAmin/innerPageCardSlice";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [innerPageCardSlice.name]:innerPageCardSlice.reducer
  },
});

export default store;
