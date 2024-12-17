export const ROUTES = {
  ADMIN: {
    index: "/admin",
    users: "admin/users",
    products: "admin/products",
    productsInner: "admin/products/:productId",
    detailProducts: "admin/detail-prodacts",
    addProductsDefault: "admin/add-products-default",
    addProduct: "admin/add-product",
    addPrice: "admin/add-price",
    aboutProducts: "admin/about-products",
  },
  USER: {
    index: "/",
    profile: "user/profile",
    aboutStore: "user/about-store",
    delivery: "user/delivery",
    faq: "user/faq",
    contacts: "user/contacts",
    productCatalog: "user/product-catalog",
    smartPhone: "user/smartPhone",
  },
  GUEST: { index: "/", signIn: "sign-in", signUp: "sign-up" },
};
