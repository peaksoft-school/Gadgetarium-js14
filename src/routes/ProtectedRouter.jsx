import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({
  isAuth,
  components: Component,
  role,
  roles,
  fallbackPath,
}) => {
  const isAllowed = roles.includes(role);
  if (isAuth && isAllowed) {
    return <Component />;
  }

  return <Navigate to={fallbackPath} />;
};

export default ProtectedRouter;
