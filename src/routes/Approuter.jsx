import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layout/admin/AdminLayout";
import { useSelector } from "react-redux";
import { ProtectedRouter } from "../routes/ProtectedRouter";
import { adminRoutes } from "./admin-router/adminRoutes";
import UserLayout from "../layout/user/UserLayout";
<<<<<<< HEAD
import ProductsSheetTable from "../pages/admin/ProductsSheetTable";
import Profail from "../pages/user/profail/Profail";
=======
import { userRoutes } from "./userRoutes";
>>>>>>> 7a669ebfaa008cdd376ea2516bf1b87e67c9f561

const AppRouter = () => {
  const { userData } = useSelector((state) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouter
          component={<Profail />}
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

      children: adminRoutes,
    },
    ,
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
