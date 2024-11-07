import React from 'react';

import AdminLayout from "../../layout/admin/AdminLayout";
import { ROUTES } from "../../utils/routes";

export const adminRoutes = [
  { path: ROUTES.ADMIN.users, element: <AdminLayout /> },
  { path: ROUTES.ADMIN.products, element: <AdminLayout /> },

  { path: "/admin" },
];
