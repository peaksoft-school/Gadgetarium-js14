import { patch } from "@mui/system";
import InnerPageCard from "../../pages/admin/InnerPageCard";
import { ROUTES } from "../../utils/routes";
import Product from "../../pages/admin/Product";

export const adminRoutes = [
  {
    path: ROUTES.ADMIN.productInner,

    element: <InnerPageCard />,
  },
  {
    path: ROUTES.ADMIN.productTable,
    element: <Product />,
  },
];
