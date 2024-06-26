import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoutes = ({ children, allowedRoutes }) => {
  const { isLoggedIn, role } = useContext(UserContext);
  const isAllowed = allowedRoutes.includes(role);

  const accessibleRoute =
    isLoggedIn && isAllowed ? children : <Navigate to={"/"} replace={true} />;
  return accessibleRoute;
};

export default ProtectedRoutes;
