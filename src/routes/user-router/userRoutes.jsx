import AboutStore from "../../components/AboutStore";
import Contacts from "../../components/Contacts";
import FaqPage from "../../components/FaqPage";
import ProductCardDescription from "../../components/product-card-description/ProductCardDescription";
import Delivery from "../../layout/delivery/Delivery";
import TheChosenOne from "../../layout/user/theCoseONe/TheChosenOne";
import ItemsInCard from "../../pages/user/ItemsInCard";
import MainPage from "../../pages/user/MainPage";
import { ROUTES } from "../../utils/routes";
import CheckoutTabs from "../../components/checkout-payment/CheckoutTabs";

export const userRoutes = [
  { path: ROUTES.USER.index, element: <MainPage /> },
  { path: ROUTES.USER.aboutStore, element: <AboutStore /> },
  { path: ROUTES.USER.delivery, element: <Delivery /> },
  { path: ROUTES.USER.faq, element: <FaqPage /> },
  { path: ROUTES.USER.contacts, element: <Contacts /> },
  { path: ROUTES.USER.checkout, element: <CheckoutTabs /> },
  { path: ROUTES.USER.productCard, element: <ProductCardDescription /> },
  { path: ROUTES.USER.favourit, element: <TheChosenOne /> },
  { path: ROUTES.USER.basket, element: <ItemsInCard /> },
];
