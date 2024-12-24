import { patch } from "@mui/system";
import InnerPageCard from "../../pages/admin/InnerPageCard";
import { ROUTES } from "../../utils/routes";
import Product from "../../pages/admin/Product";
import ProductTable from "../../components/UI/table/ProductTable";

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
    path: ROUTES.ADMIN.product,
    element: <ProductTable />,
  },
];
