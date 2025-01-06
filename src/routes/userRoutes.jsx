import Contacts from "../components/Contacts";
import FaqPage from "../components/FaqPage";
import Delivery from "../layout/delivery/Delivery";
import MainPage from "../pages/user/MainPage";
import { ROUTES } from "../utils/routes";
import ProductCatalog from "../pages/user/product-catalog/ProductCatalog";
import AboutStore from "../components/AboutStore";
import TheChosenOne from "../layout/user/theCoseONe/TheChosenOne";
import ItemsInCard from "../pages/user/ItemsInCard";

export const userRoutes = [
  { path: ROUTES.USER.index, element: <MainPage /> },
  { path: ROUTES.USER.aboutStore, element: <AboutStore /> },
  { path: ROUTES.USER.delivery, element: <Delivery /> },
  { path: ROUTES.USER.faq, element: <FaqPage /> },
  { path: ROUTES.USER.contacts, element: <Contacts /> },
  { path: ROUTES.USER.productCatalog, element: <ProductCatalog /> },
  { path: ROUTES.USER.favourit, element: <TheChosenOne /> },
  { path: ROUTES.USER.basket, element: <ItemsInCard /> },
];
