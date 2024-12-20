import AboutStore from "../../components/AboutStore";
import Contacts from "../../components/Contacts";
import FaqPage from "../../components/FaqPage";
import Delivery from "../../layout/delivery/Delivery";
import MainPage from "../../pages/user/MainPage";
import { ROUTES } from "../../utils/routes";

export const userRoutes = [
  { path: ROUTES.USER.index, element: <MainPage /> },
  { path: ROUTES.USER.aboutStore, element: <AboutStore /> },
  { path: ROUTES.USER.delivery, element: <Delivery /> },
  { path: ROUTES.USER.faq, element: <FaqPage /> },
  { path: ROUTES.USER.contacts, element: <Contacts /> },
];
