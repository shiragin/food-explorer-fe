import React, { createContext, useContext, useState } from "react";
import { useUserContext } from "./UserContext";

export const RecipesContext = createContext();

export function useRecipesContext() {
  return useContext(RecipesContext);
}

export default function RecipesContextProvider({ children }) {
  const [recipeList, setRecipeList] = useState([]);

  return (
    <RecipesContext.Provider value={{ recipeList, setRecipeList }}>
      {children}
    </RecipesContext.Provider>
  );
}
