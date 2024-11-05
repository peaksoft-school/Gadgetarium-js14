import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layout/admin/AdminLayout";
import { useSelector } from "react-redux";
import { userRoutes } from "./user-router/userRoutes";
import UserLayout from "../layout/user/UserLayout";
import { ProtectedRouter } from "../routes/ProtectedRouter";
import Registration from "../components/Registration";

const AppRouter = () => {
  const { userData } = useSelector((state) => state.auth);
  console.log("data", userData);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouter
          component={<h1> word</h1>}
          role={userData.role}
          roles={["GUEST", "USER"]}
          fallbackPath={"/admin"}
          isAuth={userData.role === "USER" ? userData.isAuth : !userData.isAuth}
        />
      ),
      children: userRoutes,
    },

    {
      path: "/admin",
      element: (
        <ProtectedRouter
          component={<AdminLayout />}
          isAuth={userData.isAuth}
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

    {
      path: "/signin",
      element: <Registration signInModal={true} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
