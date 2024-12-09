import { Navigate } from "react-router-dom";

export const ProtectedRouter = ({
  isAuth,
  component: Component,
  role,
  roles,
  fallbackPath,
}) => {
  const isAllowed = roles.includes(role);

  if (isAuth && isAllowed) {
    return Component;
  }

  return <Navigate to={fallbackPath} />;
};
