import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useUserContext } from './UserContext';

export const RecipesContext = createContext();

export function useRecipesContext() {
  return useContext(RecipesContext);
}

export default function RecipesContextProvider({ children }) {
  async function getRecipesByCode(codes) {
    console.log('CODES', codes);
    try {
      const res = await axios.get(``, {
        codes,
      });
      if (res?.data?.ok) {
        return res.data;
      }
    } catch (err) {
      console.error(err);
    }
  }
  const [recipeList, setRecipeList] = useState([]);

  return (
    <RecipesContext.Provider value={{ recipeList, setRecipeList , getRecipesByCode }}>
      
      {children}
    
    </RecipesContext.Provider>
  );
}
