import { useContext } from "react";
import { Navigate } from "react-router-dom";
import React from "react";
import { useUserContext } from "../Context/UserContext";

export default function ProtectRoute({ children }) {
  const { isLogin } = useUserContext();
  if (!isLogin) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}
