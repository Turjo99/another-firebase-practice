import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Component/contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <div
          class="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-yellow-500
      "
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
