import Contacts from "../components/Contacts";
import FaqPage from "../components/FaqPage";
import Delivery from "../layout/delivery/Delivery";
import MainPage from "../pages/user/MainPage";
import { ROUTES } from "../utils/routes";
import ProductCatalog from "../pages/user/product-catalog/ProductCatalog";
import AboutStore from "../components/AboutStore";
import TheChosenOne from "../layout/user/theCoseONe/TheChosenOne";
import ItemsInCard from "../pages/user/ItemsInCard";
import ProductCardDescription from "../components/product-card-description/ProductCardDescription";
import CompareMainPage from "../components/compare/CompareMainPage";
import Profail from "../pages/user/profail/Profail";
import AccountFavouritesMain from "../components/account-favourites/AccountFavouritesMain";
import AccountOrderHistyryMain from "../components/account-orderHistory/AccountOrderHistoryMain";

export const userRoutes = [
  { path: ROUTES.USER.index, element: <MainPage /> },
  { path: ROUTES.USER.aboutStore, element: <AboutStore /> },
  { path: ROUTES.USER.delivery, element: <Delivery /> },
  { path: ROUTES.USER.faq, element: <FaqPage /> },
  { path: ROUTES.USER.contacts, element: <Contacts /> },
  { path: ROUTES.USER.productCatalog, element: <ProductCatalog /> },
  { path: ROUTES.USER.favourit, element: <TheChosenOne /> },
  { path: ROUTES.USER.basket, element: <ItemsInCard /> },
  { path: ROUTES.USER.productCard, element: <ProductCardDescription /> },
  { path: ROUTES.USER.compare, element: <CompareMainPage /> },
  { path: ROUTES.USER.profile, element: <Profail /> },
  { path: ROUTES.USER.accountFavourites, element: <AccountFavouritesMain /> },
  { path: ROUTES.USER.orderHistory, element: <AccountOrderHistyryMain /> },
];
