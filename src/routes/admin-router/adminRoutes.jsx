import React from "react";
import AdminLayout from "../../layout/admin/AdminLayout";
import { ROUTES } from "../../utils/routes";
import AddProducts from "../../components/add-products/AddProducts";
import OrdersData from "../../components/orders/OrdersData";
import OrdersAdmin from "../../components/orders/OrdersAdmin";

export const adminRoutes = [
  { path: ROUTES.ADMIN.users, element: <AdminLayout /> },
  { path: ROUTES.ADMIN.addProduct, element: <AddProducts /> },
  { path: ROUTES.ADMIN.productMain, element: <OrdersAdmin /> },
  { path: ROUTES.ADMIN.productsInner, element: <OrdersData /> },
];
