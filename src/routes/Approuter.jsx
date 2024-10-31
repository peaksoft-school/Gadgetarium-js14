import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import ProtectedRouter from "./ProtectedRouter";
import AdminLayout from "../layout/admin/AdminLayout";
import { useSelector } from "react-redux";
import { adminRoutes } from "./admin-router/adminRoutes";
import { userRoutes } from "./user-router/userRoutes";
import MainLayout from "../layout/user/MainLayout";

const Approuter = () => {
  const { isAuth, role } = useSelector((state) => state.auth);
  const router = (createBrowserRouter = [
    {
      path: ROUTES.ADMIN.index,
      element: (
        <ProtectedRouter
          component={MainLayout}
          isAuth={!isAuth}
          role={role}
          roles={["GUEST", "USER"]}
          fallbackPath={"/"}
        />
      ),
      children: userRoutes,
    },
    {
      path: ROUTES.ADMIN.index,
      element: (
        <ProtectedRouter
          component={AdminLayout}
          isAuth={isAuth}
          role={role}
          roles={["USER"]}
          fallbackPath={"/admin"}
        />
      ),
      children: adminRoutes,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approuter;
