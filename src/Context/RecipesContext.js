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
      const res = await axios.get(`http://localhost:8080/recipes/`, {
        params: { strArea: codes },
      });

      if (res?.data?.ok) {
        return res.data.data;
      }
    } catch (err) {
      console.error(err);
    }
  }

  const [recipeList, setRecipeList] = useState([]);
  const [searched, setSearched] = useState('');

  return (
    <RecipesContext.Provider
      value={{
        recipeList,
        setRecipeList,
        getRecipesByCode,
        searched,
        setSearched,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}
