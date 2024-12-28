import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { adminCommentsSlice } from "./slice/adminComents/adminCommentsSlice";
import { categoriesSlice } from "./admin-addproduct/categoriesSlice";
import { productSlice } from "./admin-addproduct/productsSlice";
import { productAdminSlice } from "./productAdmin/productAdminSlice";
import { infografictSlice } from "./productAdmin/infografictSlice";
import cardSlice from "./cardProducts/cardSlice";
import { theChosenOneSlice } from "./theChosenOne/theChosenOneSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [adminCommentsSlice.name]: adminCommentsSlice.reducer,
    [categoriesSlice.name]: categoriesSlice.reducer,
    [productSlice.name]: productSlice.reducer,
    [productAdminSlice.name]: productAdminSlice.reducer,
    [infografictSlice.name]: infografictSlice.reducer,
    [cardSlice.name]: cardSlice.reducer,
    [theChosenOneSlice.name]:theChosenOneSlice.reducer
  },
});
