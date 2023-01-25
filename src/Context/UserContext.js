import React, { createContext, useContext, useState } from 'react';
export const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export default function UserContextProvider({ children }) {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}
