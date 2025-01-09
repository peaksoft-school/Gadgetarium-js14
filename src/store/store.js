import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { adminCommentsSlice } from "./slice/adminComents/adminCommentsSlice";
import { categoriesSlice } from "./admin-addproduct/categoriesSlice";
import { productSlice } from "./admin-addproduct/productsSlice";
import { productAdminSlice } from "./productAdmin/productAdminSlice";
import { infografictSlice } from "./productAdmin/infografictSlice";
import cardSlice from "./cardProducts/cardSlice";
import cardofProductDescriptionSlice from "./cardof-product-description/cardofProductDescriptionSlice";
import { theChosenOneSlice } from "./theChosenOne/theChosenOneSlice";
import productCatalagSlice from "./product-catalog/productCatalogSlice";
import { itemsInCardSlaice } from "./intemsInCard/itemsInCardSlaice";
import { innerPageCardSlice } from "./innerPageCardAmin/innerPageCardSlice";
import { accountFavouritesSlice } from "./account-favourites/accountFavouritesSlice";
import { compareSlice } from "./compare/compareSlice";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [productCatalagSlice.name]: productCatalagSlice.reducer,
    [adminCommentsSlice.name]: adminCommentsSlice.reducer,
    [categoriesSlice.name]: categoriesSlice.reducer,
    [productSlice.name]: productSlice.reducer,
    [productAdminSlice.name]: productAdminSlice.reducer,
    [infografictSlice.name]: infografictSlice.reducer,
    [cardSlice.name]: cardSlice.reducer,
    [cardofProductDescriptionSlice.name]: cardofProductDescriptionSlice.reducer,
    [theChosenOneSlice.name]: theChosenOneSlice.reducer,
    [itemsInCardSlaice.name]: itemsInCardSlaice.reducer,
    [innerPageCardSlice.name]: innerPageCardSlice.reducer,
    [compareSlice.name]: compareSlice.reducer,
    [accountFavouritesSlice.name]: accountFavouritesSlice.reducer,
  },
});

export default store;
