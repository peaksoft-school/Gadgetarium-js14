import { patch } from "@mui/system";
import InnerPageCard from "../../pages/admin/InnerPageCard";
import React from "react";

import AdminLayout from "../../layout/admin/AdminLayout";
import { ROUTES } from "../../utils/routes";
import Product from "../../pages/admin/Product";
import ProductTable from "../../components/UI/table/ProductTable";
import AddProducts from "../../components/add-products/AddProducts";

export const adminRoutes = [
  {
    path: ROUTES.ADMIN.productInner,

    element: <InnerPageCard />,
  },
  {
    path: ROUTES.ADMIN.productTable,
    element: <Product />,
  },
  {
    path: ROUTES.ADMIN.productTable,
    element: <ProductTable />,
  },
  { path: ROUTES.ADMIN.users, element: <AdminLayout /> },
  { path: ROUTES.ADMIN.addProduct, element: <AddProducts /> },
];
