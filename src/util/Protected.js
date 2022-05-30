import { Navigate, Outlet } from "react-router-dom";
import useAuthentication from "./useAuthentication";

const Protected = () => {
  return localStorage.getItem("user") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Protected;
