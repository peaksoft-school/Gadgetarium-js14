import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { adminCommentsSlice } from "./slice/adminComents/adminCommentsSlice";
import { categoriesSlice } from "./admin-addproduct/categoriesSlice";
import { productSlice } from "./admin-addproduct/productsSlice";
import { productAdminSlice } from "./productAdmin/productAdminSlice";
import { infografictSlice } from "./productAdmin/infografictSlice";
import cardSlice from "./cardProducts/cardSlice";
import { itemsInCardSlaice } from "./intemsInCard/itemsInCardSlaice";
import { innerPageCardSlice } from "./innerPageCardAmin/innerPageCardSlice";
import { orderHistorySlice } from "./account-order-history/orderHistorySlice";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [adminCommentsSlice.name]: adminCommentsSlice.reducer,
    [categoriesSlice.name]: categoriesSlice.reducer,
    [productSlice.name]: productSlice.reducer,
    [productAdminSlice.name]: productAdminSlice.reducer,
    [infografictSlice.name]: infografictSlice.reducer,
    [cardSlice.name]: cardSlice.reducer,
    [itemsInCardSlaice.name]: itemsInCardSlaice.reducer,
    [innerPageCardSlice.name]: innerPageCardSlice.reducer,
    [orderHistorySlice.name]: orderHistorySlice.reducer,
  },
});

export default store;
