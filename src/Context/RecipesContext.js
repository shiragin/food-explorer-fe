import React, { createContext, useContext } from 'react';
import { useUserContext } from './UserContext';

export const RecipesContext = createContext();

export function useRecipesContext() {
  return useContext(RecipesContext);
}

export default function RecipesContextProvider({ children }) {
  return (
    <RecipesContext.Provider value={{}}>{children}</RecipesContext.Provider>
  );
}
