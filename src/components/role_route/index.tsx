import { UseAuth } from "../../firebase/authFuntions";
import { ReactElement } from "react";
import Dashboard from "../student_dashboard/layout";

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { user } = UseAuth();

  if (user.role !== "ADMIN") {
    return <Dashboard>{children}</Dashboard>;
  }
  return <>{children}</>;
};
