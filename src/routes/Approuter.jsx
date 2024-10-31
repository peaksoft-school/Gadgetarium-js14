import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import ProtectedRouter from "./ProtectedRouter";
import AdminLayout from "../layout/admin/AdminLayout";
import { useSelector } from "react-redux";
import { adminRoutes } from "./admin-router/adminRoutes";
import { userRoutes } from "./user-router/userRoutes";
import { guestRoutes } from "./guest/guestRoutes";
import UserLayout from "../layout/user/UserLayout";
import SignIn from "../components/SignIn";

const AppRouter = () => {
  const { isAuth, role } = useSelector((state) => state.auth);
  const router = (createBrowserRouter = [
    {
      path: ROUTES.ADMIN.index,
      element: (
        <ProtectedRouter
          component={<UserLayout />}
          role={userData.role}
          roles={["GUEST", "USER"]}
          fallbackPath={"/admin"}
          isAuth={
            useRouteLoaderData.role === "USER"
              ? userData.isAuth
              : !userData.isAuth
          }
        />
      ),
      children: [
        {
          index: true,
          element: <SignIn />,
        },
      ],
    },
    {
      path: ROUTES.ADMIN.index,
      element: (
        <ProtectedRouter
          component={<UserLayout />}
          isAuth={isAuth}
          role={userData.role}
          roles={["USER"]}
          fallbackPath={"/admin"}
        />
      ),
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },

    {
      path: ROUTES.ADMIN.index,
      element: (
        <ProtectedRouter
          component={<UserLayout />}
          isAuth={isAuth}
          role={userData.role}
          roles={["ADMIN"]}
          fallbackPath={"/"}
        />
      ),
      children: [
        {
          index: true,
          element: <AdminLayout />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
