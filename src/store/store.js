import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { adminCommentsSlice } from "./slice/adminComents/adminCommentsSlice";
import { categoriesSlice } from "./admin-addproduct/categoriesSlice";
import { productSlice } from "./admin-addproduct/productsSlice";
import { productAdminSlice } from "./productAdmin/productAdminSlice";
import { infografictSlice } from "./productAdmin/infografictSlice";
import cardSlice from "./cardProducts/cardSlice";
<<<<<<< HEAD
import { profileSlice } from "./profail/profailSlace";
=======
import cardofProductDescriptionSlice from "./cardof-product-description/cardofProductDescriptionSlice";
import { theChosenOneSlice } from "./theChosenOne/theChosenOneSlice";
import productCatalagSlice from "./product-catalog/productCatalogSlice";
import { itemsInCardSlaice } from "./intemsInCard/itemsInCardSlaice";
import { innerPageCardSlice } from "./innerPageCardAmin/innerPageCardSlice";
import { compareSlice } from "./compare/compareSlice";
>>>>>>> 7a669ebfaa008cdd376ea2516bf1b87e67c9f561

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
<<<<<<< HEAD
    [profileSlice.name]:profileSlice.reducer
=======
    [cardofProductDescriptionSlice.name]: cardofProductDescriptionSlice.reducer,
    [itemsInCardSlaice.name]: itemsInCardSlaice.reducer,
    [theChosenOneSlice.name]: theChosenOneSlice.reducer,
    [itemsInCardSlaice.name]: itemsInCardSlaice.reducer,
    [innerPageCardSlice.name]: innerPageCardSlice.reducer,
    [compareSlice.name]: compareSlice.reducer,
>>>>>>> 7a669ebfaa008cdd376ea2516bf1b87e67c9f561
  },
});

export default store;
