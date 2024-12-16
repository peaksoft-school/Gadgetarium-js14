import ProductCatalog from "../../pages/user/product-catalog/ProductCatalog";
import { ROUTES } from "../../utils/routes";

export const userRoutes = [
  { path: ROUTES.USER.profile, element: <h1> example</h1> },
  { path: ROUTES.USER.productCatalog, element: <ProductCatalog /> },
];
