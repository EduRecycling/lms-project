import { UseAuth } from "../../firebase/authFuntions";
import { ReactNode } from "react";

import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { loading, isAuth } = UseAuth();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (isAuth) {
    return children;
  }

  return <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
