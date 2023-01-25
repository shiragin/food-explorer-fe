import React, { createContext, useContext, useState } from "react";
import { useUserContext } from "./UserContext";

export const RecipesContext = createContext();

export function useRecipesContext() {
  return useContext(RecipesContext);
}

export default function RecipesContextProvider({ children }) {






  return (
    <RecipesContext.Provider value={{}}>{children}</RecipesContext.Provider>
  );
}
