/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Authentication/Provider/Provider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div
        className="spinner-border text-danger d-flex justify-content-center"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default ProtectedRoute;
