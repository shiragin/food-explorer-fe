import React, { createContext, useContext, useState } from "react";
export const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export default function UserContextProvider({ children }) {
  const [load, setLoad] = useState(false);
  const [token, setToken] = useState("");

  const [showLoginModel, setShowLoginModel] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [logUser, setLogUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    role: "",
    savedrecipes: [],
    id: "",
  });

  return (
    <UserContext.Provider
      value={{
        load,
        setLoad,
        showLoginModel,
        setShowLoginModel,
        isLogin,
        setIsLogin,
        logUser,
        setLogUser,token, setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
