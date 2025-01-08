import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layout/admin/AdminLayout";
import { useSelector } from "react-redux";
import { userRoutes } from "./user-router/userRoutes";
import { ProtectedRouter } from "../routes/ProtectedRouter";
import { adminRoutes } from "./admin-router/adminRoutes";
import AddProducts from "../components/add-products/AddProducts";
import { ROUTES } from "../utils/routes";
import UserLayout from "../layout/user/UserLayout";
import ProductsSheetTable from "../pages/admin/ProductsSheetTable";
import OrdersAdmin from "../components/orders/OrdersAdmin";
import OrdersData from "../components/orders/OrdersData";

const AppRouter = () => {
  const { userData } = useSelector((state) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouter
          component={<UserLayout />}
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
          element: <ProductsSheetTable />,
        },
        { path: ROUTES.ADMIN.addProduct, element: <AddProducts /> },
        { path: ROUTES.ADMIN.orders, element: <OrdersAdmin /> },
        { path: ROUTES.ADMIN.orderDetail, element: <OrdersData /> },
      ],
    },
    ,
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
