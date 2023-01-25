import React, { createContext, useContext, useState } from "react";
export const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export default function UserContextProvider({ children }) {
  const [load, setLoad] = useState(false);
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <UserContext.Provider
      value={{
        load,
        setLoad,
        showLoginModel,
        setShowLoginModel,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
