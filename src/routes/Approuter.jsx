import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layout/admin/AdminLayout";
import { useSelector } from "react-redux";
import { userRoutes } from "./user-router/userRoutes";
import { ProtectedRouter } from "../routes/ProtectedRouter";
import UserLayout from "../layout/user/UserLayout";
import ItemsInCard from "../pages/user/ItemsInCard";
import CartProjectItem from "../pages/user/CartProjectItem";

const AppRouter = () => {
  const { userData } = useSelector((state) => state.auth);

  console.log(userData);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouter
          component={<ItemsInCard/>}
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
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
