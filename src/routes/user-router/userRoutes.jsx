import AboutStore from "../../components/AboutStore";
import AccountOrderHistyryMain from "../../components/account-orderHistory/AccountOrderHistoryMain";
import Contacts from "../../components/Contacts";
import FaqPage from "../../components/FaqPage";
import Delivery from "../../layout/delivery/Delivery";
import ItemsInCard from "../../pages/user/ItemsInCard";
import MainPage from "../../pages/user/MainPage";
import { ROUTES } from "../../utils/routes";

export const userRoutes = [
  { path: ROUTES.USER.index, element: <MainPage /> },
  { path: ROUTES.USER.aboutStore, element: <AboutStore /> },
  { path: ROUTES.USER.delivery, element: <Delivery /> },
  { path: ROUTES.USER.faq, element: <FaqPage /> },
  { path: ROUTES.USER.contacts, element: <Contacts /> },
  { path: ROUTES.USER.basket, element: <ItemsInCard /> },
  { path: ROUTES.USER.orderHistory, element: <AccountOrderHistyryMain /> },
];
